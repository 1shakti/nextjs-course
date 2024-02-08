import fs from "fs";
import path from "path";

export const  buildfilePath = (folderPath, fileName) => {
   return path.join(process.cwd(),folderPath,fileName);
} 

export const  extractFileData = (filePath) => {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
 } 
