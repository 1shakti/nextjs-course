import {
	connectDatabase,
	getAllDocuments,
	insertDocument,
} from "@/helpers/db-utils";
import {
	buildfilePath,
	extractFileData,
} from "@/helpers/file-path-extractData";
import fs from "fs";

export default async function handler(req, res) {
	let client;

	try {
		client = await connectDatabase();
	} catch (error) {
		res.status(500).json({ message: "Connecting to the database failed!" });
		return;
	}

	if (req.method === "POST") {
		const userEmail = req.body.email;

		if (!userEmail || !userEmail.includes("@")) {
			res.status(422).json({ message: "Invalid email address." });
			return;
		}

		const newNewsletter = { email: userEmail };

		try {
			await insertDocument(client, "newsletter", newNewsletter);
		} catch (error) {
			res.status(500).json({ message: "Inserting data failed!" });
		}

		//storing data inside project folder start
		const filePath = buildfilePath("data", "newsletter.json");
		const data = extractFileData(filePath);
		data.push(newNewsletter);
		fs.writeFileSync(filePath, JSON.stringify(data));
		//end

		res.status(201).json({ message: 'Signed up!' });
	}  
	
	if (req.method === 'GET') {

		//fetching data from data folder start
		const filePath = buildfilePath("data", "newsletter.json");
		const data = extractFileData(filePath);
		//end
		
		let storedData;
		try{
			storedData = await getAllDocuments(client, "newsletter", { _id: -1 });
			res.status(200).json({ message: "Success", newsletter: storedData });
		}catch(error){
			res.status(500).json({message: 'Getting data failed!'});
		}

	}

	client.close();
}
