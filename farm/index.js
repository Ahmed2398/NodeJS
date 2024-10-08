    const fs = require('fs'); // file system, a built in module.
    const http = require('http');
    const url = require('url');
    const replaceTemplate = require('./modules/replaceTemplate')

    const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
    const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
    const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');


    const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
    const dataObj = JSON.parse(data);

    const server = http.createServer((req, res) => {
        const baseURL = `http://${req.headers.host}`;
        const requestURL = new URL(req.url, baseURL);
        const pathname = requestURL.pathname;
        const query = requestURL.searchParams.get('id');

        // Overview Page
        if (pathname === '/' || pathname === '/overview') {
            res.writeHead(200, { 'content-type': 'text/html' });
            const cardsHtml = dataObj.map(el => replaceTemplate(
                tempCard, el)).join(''); //.join()
            const output = tempOverview.replace('{%PRODUCT_CARDS%}',
                cardsHtml);
            res.end(output);

            // Product Page
        } else if (pathname === '/product') {
            res.writeHead(200, { 'content-type': 'text/html' });
            const product = dataObj[query];
            const output = replaceTemplate(tempProduct, product);
            res.end(output);

            //API page
        } else if (pathname === '/api') {
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(data);

            // Not Found
        } else {
            res.writeHead(404, {
                'content-type': 'text/html',
                'my-own-header': 'hello - dunia'
            });
            res.end('<h1>Page Not Found!!</h1>');
        }
    });

    server.listen(8000, '127.0.0.1', () => {
        console.log('Mendengarkan permintaan pada port 8000');
    })
