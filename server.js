// server.js init libraries

const http = require("http");
const dotenv = require("dotenv");

dotenv.config(); // start dotenv library


/**
 * Server port type
 * @type {number}
 */

let port = +process.env.PORT || 3000;

/**
 * Request function to send HTML to server 
 * @param {http.ServerResponse} res - L'oggetto response del server.
 * @param {string} content - Il contenuto HTML da inviare.
 */
function htmlResponse(res, content)
{
	res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
	res.end(content);
}


/**
 * Create server and callback function
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */
const server = http.createServer(function (req, res)
{
	// request variable to display

	const reqVar = `<h1>La variabile richiesta è: ${process.env.RESPONSE_VAR}</h1>`;

	htmlResponse(res, reqVar);
});

// Start server
server.listen(port, function ()
{
	console.log("Server is running on http://localhost:" + port);
});
