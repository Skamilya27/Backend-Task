import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/add-product', (req, res) => {
    res.send(`
        <form action="/add-product" method="post">
            <label for="product-name">Product Name:</label>
            <input type="text" id="product-name" name="productName">
            <label for="product-size">Product Size:</label>
            <input type="text" id="product-size" name="productSize">
            <button type="submit">Add Product</button>
        </form>
    `);
});


app.post('/add-product', (req, res) => {
    const productName = req.body.productName;
    const productSize = req.body.productSize;
    console.log(`Product Name: ${productName}, Product Size: ${productSize}`);
    res.send('Product added successfully!');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
