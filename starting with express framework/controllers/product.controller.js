const getProducts = (req, res) => {
    res.send(`
        <form action="/product/add-product" method="post">
            <label for="product-name">Product Name:</label>
            <input type="text" id="product-name" name="productName">
            <label for="product-size">Product Size:</label>
            <input type="text" id="product-size" name="productSize">
            <button type="submit">Add Product</button>
        </form>
    `);
}

const showAllProducts = (req, res) => {
    
    const productName = req.body.productName;
    const productSize = req.body.productSize;
    console.log(`Product Name: ${productName}, Product Size: ${productSize}`);
    res.send('Product added successfully!');
}

export {getProducts, showAllProducts};