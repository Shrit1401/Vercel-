import express from "express";
import { S3 } from "aws-sdk";

const s3 = new S3({
  accessKeyId: "316a1601c97ba28ae7df61fb4baaf4ed",
  secretAccessKey:
    "d54d6fc5b056eb373fe550b4693f95c60de8f713b1b672e941f6f54dab094f87",
  endpoint: "https://2d98073c5d0cf875919ade03091d9795.r2.cloudflarestorage.com",
});

const app = express();

app.get("/*", async (req, res) => {
  // id.100xdevs.com
  const host = req.hostname;

  const id = host.split(".")[0];
  const filePath = req.path;

  const contents = await s3
    .getObject({
      Bucket: "vercel",
      Key: `dist/${id}${filePath}`,
    })
    .promise();

  const type = filePath.endsWith("html")
    ? "text/html"
    : filePath.endsWith("css")
    ? "text/css"
    : "application/javascript";
  res.set("Content-Type", type);

  res.send(contents.Body);
});

app.listen(3001);
