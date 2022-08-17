const fs = require('fs');
const puppeteer = require('puppeteer');
const hbs = require('handlebars');
const Path = require('path');
const Axios = require('axios');

async function createPDF(data, templateFile) {

	await downloadTemplate(templateFile)

	const filePath = Path.join(__dirname, "templates", "template.hbs");

	if (!filePath) {
		throw new Error(`Não foi possível encontrar template.hbs`);
	}

	const html = fs.readFileSync(filePath, 'utf-8');
	const template = hbs.compile(html);
	const rendered = template(data);
	return generateTemplate(rendered);
};
 
async function generateTemplate(templateModel) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.setContent(templateModel);
	await page.emulateMediaType("print");
	await page.pdf({ path: `${data.studentname}.pdf`, format: "A4" })
	await browser.close();
}

async function downloadTemplate (templateURL) {  
	const url = templateURL
	const path = Path.resolve(__dirname, 'templates', 'template.hbs')
	const writer = fs.createWriteStream(path)

	const response = await Axios({
		url,
		method: 'GET',
		responseType: 'stream'
	})

	response.data.pipe(writer)

	return new Promise((resolve, reject) => {
		writer.on('finish', resolve)
		writer.on('error', reject)
	})
}

module.exports = createPDF