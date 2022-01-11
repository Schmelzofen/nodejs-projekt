const http = require('http');
const fs = require('fs');
const replyWithHTML = require("./switch");
const readFile = require("./readFile")

const internalServerError = "Internal Server Error!"

const server = http.createServer((request, response) => {
    console.log(request.url, request.method)
    switch (request.url) {
        case "/":
            replyWithHTML("./public/home.html", response, 200)
            break;
        case "/style.css":
            fs.readFile("./style.css", (err, data) => {
                if (err) {
                    response.writeHead(500)
                    response.end(internalServerError)
                } else {
                    const pageString = data.toString()
                    response.writeHead(200, { "Content-Type": "text/css" })
                    response.end(pageString)
                }
            })
            break;
        case "/works":
            replyWithHTML("./public/works.html", response, 200)
            break;
        case "/categories":
            replyWithHTML("./public/categories.html", response, 200)
            break;
        case "/testimony":
            replyWithHTML("./public/testimony.html", response, 200)
            break;
        case "/about":
            replyWithHTML("./public/about.html", response, 200)
            break;

        // IMAGES

        case "/about1.png":
            readFile("./public/about1.png", response, 200)
            break;
        case "/about2.png":
            readFile("./public/about2.png", response, 200)
            break;
        case "/cat1.png":
            readFile("./public/cat1.png", response, 200)
            break;
        case "/cat2.png":
            readFile("./public/cat2.png", response, 200)
            break;
        case "/cat3.png":
            readFile("./public/cat3.png", response, 200)
            break;
        case "/cat4.png":
            readFile("./public/cat4.png", response, 200)
            break;
        case "/cat5.png":
            readFile("./public/cat5.png", response, 200)
            break;
        case "/public/footer.png":
            readFile("./public/footer.png", response, 200)
            break;
        case "/table.png":
            readFile("./public/table.png", response, 200)
            break;
        case "/works1.png":
            readFile("./public/works1.png", response, 200)
            break;
        case "/works2.png":
            readFile("./public/works2.png", response, 200)
            break;
        case "/works3.png":
            readFile("./public/works3.png", response, 200)
            break;
        case "/works4.png":
            readFile("./public/works4.png", response, 200)
            break;
        case "/public/table.png":
            readFile("./public/table.png", response, 200)
            break;

        default:
            replyWithHTML("./public/error.html", response, 404)
            break;
    }
});

const PORT = 1818
server.listen(PORT, function () {
    console.log("Listening on port: ", PORT)
})