const cartandproductloader = async () => {
    const res = await fetch("products.json");
    const productsData = await res.json();

    let initialCart = [];
    const savedCart = JSON.parse(localStorage.getItem("cart-data"));
    // console.log(savedCart);
    if(savedCart)
    {
        initialCart=savedCart;
    }
    // for (const id in savedCart) {
    //     // console.log(id);
    //     const existProduct = productsData.find(product => product.id === id);
    //     if (existProduct) {
    //         // const quantity=savedCart[id];
    //         // existProduct.quantity=quantity;
    //         initialCart.push(existProduct);
    //     }
    // }
    // console.log(initialCart);
    return { productsData, initialCart };

};

export default cartandproductloader;