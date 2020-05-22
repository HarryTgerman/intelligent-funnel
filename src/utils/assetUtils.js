// We can use "process.env.VAR_NAME" on both the server and the client.
// See config/env.js and server/indexHtml.js
export function imagePath(assetName) {
    if(process.env.NODE_ENV == "development"){
      return `${process.env.PUBLIC_URL}/images/${assetName}`;
    }else {
      return `https://webflow-funnel-anforderungen.s3.eu-central-1.amazonaws.com/images/${assetName}`;
    }  
}
  