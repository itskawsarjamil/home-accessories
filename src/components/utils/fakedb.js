
// const getDB = () => {
//     let cartData = [];
//     const Data = JSON.parse(localStorage.getItem("cart-data"));
//     if (Data) {
//         cartData = Data;

//     }
//     return cartData;
// }

const modifyDB = (newCart) => {
    // const storeData = getDB();
    // const newCartData = [...storeData, product];

    localStorage.setItem('cart-data', JSON.stringify(newCart));
}
// const removefromDB = (id) => {
//     const storeData = getDB();
//     const remaining = storeData.filter(product => product.id !== id);
//     localStorage.setItem('cart-data', JSON.stringify(remaining));
// }

const removeDB = () => {
    localStorage.removeItem('cart-data');
}

export { modifyDB, removeDB }