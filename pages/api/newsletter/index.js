import {
	buildfilePath,
	extractFileData,
} from "@/helpers/file-path-extractData";
import fs from "fs";

export default function handler(req, res) {
	if (req.method === "POST") {
		const userEmail = req.body.email;

		if (!userEmail || !userEmail.includes("@")) {
			res.status(422).json({ message: "Invalid email address." });
		}

		const newNewsletter = { email: userEmail };
		const filePath = buildfilePath("data", "newsletter.js");
		const data = extractFileData(filePath);
		data.push(newNewsletter);
        fs.writeFileSync(filePath, JSON.stringify(data))
		res.status(201).json({ message: "Success", newsletter: data });
	} else {
		const filePath = buildfilePath("data", "newsletter.js");
		const data = extractFileData(filePath);
        res.status(200).json({ message: "Success", newsletter:data });
	}
}
