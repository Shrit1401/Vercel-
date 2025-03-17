import { S3 } from "aws-sdk";
import fs from "fs";

// replace with your own credentials
const s3 = new S3({
  accessKeyId: "316a1601c97ba28ae7df61fb4baaf4ed",
  secretAccessKey:
    "d54d6fc5b056eb373fe550b4693f95c60de8f713b1b672e941f6f54dab094f87",
  endpoint: "https://2d98073c5d0cf875919ade03091d9795.r2.cloudflarestorage.com",
});

// fileName => output/12312/src/App.jsx
// filePath => /Users/harkiratsingh/vercel/dist/output/12312/src/App.jsx
export const uploadFile = async (fileName: string, localFilePath: string) => {
  const fileContent = fs.readFileSync(localFilePath);
  const response = await s3
    .upload({
      Body: fileContent,
      Bucket: "vercel",
      Key: fileName,
    })
    .promise();
  console.log(response);
};
