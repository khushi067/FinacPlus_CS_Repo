const fs = require('fs');

function writeToFile(content)
{
	fs.writeFileSync('book_details.txt', content);
}

module.exports = { writeToFile };