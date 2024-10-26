const fetcher = (url, filePath) => {
const needle = require('needle');
const fs = require('fs')
needle.get(`${url}`, (error, response, body) => {
  if(error) {
  console.log('HTTP error:', error); // Print the error if one occurred
  return
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(filePath, body, (err) => {
    if(err) {
      console.log('Writefile error:', err)
      return
    }
    const fileSize = fs.statSync(filePath).size;
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}.`);
  });
});
}

fetcher('https://www.google.com/', './index.html')