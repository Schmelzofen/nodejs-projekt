const fs = require('fs');
const internalServerError = "Internal Server Error!"

function readFile(path, response, statusCode) {
    fs.readFile(path, (err, data) => {
        if (err) {
            response.writeHead(500)
            response.end(internalServerError)
        } else {
            response.writeHead(statusCode, { "Content-Type": "image/png" })
            response.end(data)
        }
    })
}

module.exports = readFile