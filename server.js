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
 * Array of sentences to display
 * @type {string[]}
 */
const randomSentences = [
	"La perseveranza è ciò che rende l’impossibile possibile, il possibile probabile e il probabile certo.",
	"La vita è un 10% cosa ti accade e un 90% come reagisci.",
	"Non aspettare. Il tempo non sarà mai giusto.",
	"Sii il cambiamento che vuoi vedere nel mondo.",
	"La miglior visione è l’intuizione."
];

/**
 * Array to keep track of already shown sentences
 * @type {string[]}
 */
let shownSentences = [];

/**
 * Returns a random sentence from the Array
 * @returns {string}
 */
function getRandomSentence()
{
	let index;

	//Reset index Array when all sentences have been shown
	if (shownSentences.length === randomSentences.length)
	{
		shownSentences = [];
	}

	do
	{
		index = Math.floor(Math.random() * randomSentences.length);
	} while (shownSentences.includes(index));

	shownSentences.push(index);
	return randomSentences[index];
}



/**
 * Create server and callback function
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */
const server = http.createServer(function (req, res)
{
	// request variable to display
	const randomSentence = getRandomSentence();
	// const resSentence = `<h1>La frase è: ${process.env.RESPONSE_VAR}</h1>`;
	const resSentence = `<h1>${randomSentence}</h1>`;

	htmlResponse(res, resSentence);
});

// Start server
server.listen(port, function ()
{
	console.log("Server is running on http://localhost:" + port);
});
