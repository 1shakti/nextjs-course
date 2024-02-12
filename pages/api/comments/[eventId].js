import fs from "fs";
import { buildfilePath, extractFileData } from "@/helpers/file-path-extractData";

export default function handler(req, res){

    const eventId = req.query.eventId;

    if(req.method === "POST"){

        const email = req.body.email;
        const name = req.body.name;
        const text = req.body.text;

        if(!email.includes('@') || !name || name.trim() === "" || !text || text.trim() === ""){
            res.status(422).json({message: "Invalid inputs."});
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId
        }
        const filePath = buildfilePath('data','comments.json');
        const data = extractFileData(filePath);
        
        data.push(newComment);
        fs.writeFileSync(filePath,JSON.stringify(data));
        res.status(201).json({message:"Success", comments:newComment});
    }else{
        const filePath = buildfilePath('data','comments.json');
        const data = extractFileData(filePath);
        res.status(200).json({message:"Success", comments:data});
    }
}