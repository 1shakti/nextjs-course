import fs from "fs";
import {
	buildfilePath,
	extractFileData,
} from "@/helpers/file-path-extractData";
import {
	connectDatabase,
	getAllDocuments,
	insertDocument,
} from "@/helpers/db-utils";

export default async function handler(req, res) {
	const eventId = req.query.eventId;
	let client;
	try {
		client = await connectDatabase();
	} catch (error) {
		res.status(500).json({ message: "Connecting to the database failed!" });
		return;
	}

	if (req.method === "POST") {
		const email = req.body.email;
		const name = req.body.name;
		const text = req.body.text;

		if (
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!text ||
			text.trim() === ""
		) {
			res.status(422).json({ message: "Invalid inputs." });
			return;
		}

		const newComment = {
			email,
			name,
			text,
			eventId,
		};

		let result;

		try {
			result = await insertDocument(client, "comments", newComment);
			console.log("result", result);
			newComment._id = result.insertedId;
			res.status(201).json({ message: "Added comment.", comment: newComment });
		} catch (error) {
			res.status(500).json({ message: "Inserting comment failed!" });
		}

		const filePath = buildfilePath("data", "comments.json");
		const data = extractFileData(filePath);

		data.push(newComment);
		fs.writeFileSync(filePath, JSON.stringify(data));
	} else {
		try {
			const documents = await getAllDocuments(
				client,
				"comments",
				{ _id: -1 },
				{ eventId: eventId }
			);
			res.status(200).json({ message: "Success", comments: documents });
		} catch (error) {
			res.status(500).json({ message: "Getting comments failed!" });
			return;
		}

		//fetching data from data folder start
		const filePath = buildfilePath("data", "comments.json");
		const data = extractFileData(filePath);
		//end
	}

	client.close();
}
