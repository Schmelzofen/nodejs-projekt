const fs = require('fs');

const internalServerError = "Internal Server Error!"

function replyWithHTML(path, response, statusCode) {
    fs.readFile(path, (err, data) => {
        if (err) {
            response.writeHead(500)
            response.end(internalServerError)
        } else {
            const pageString = data.toString()
            response.writeHead(statusCode, { "Content-Type": "text/html" })
            response.end(pageString)
        }
    })
}

module.exports = replyWithHTML