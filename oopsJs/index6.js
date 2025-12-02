const products = [
    { id:1, name:"Phone", category:"Electronics", price:10000, stock:3 },
    { id:2, name:"TV", category:"Electronics", price:25000, stock:10 },
    { id:3, name:"Shirt", category:"Fashion", price:800, stock:2 },
    { id:4, name:"Shoes", category:"Fashion", price:1500, stock:5 }
];

const getLowStockProducts = () =>
    products.filter(p => p.stock < 5);

const sortProductsByPrice = () =>
    [...products].sort((a, b) => a.price - b.price);

const calculateTotalInventoryValue = () =>
    products.reduce((sum, p) => sum + p.price * p.stock, 0);

const groupByCategory = () =>
    products.reduce((group, item) => {
        (group[item.category] ||= []).push(item);
        return group;
    }, {});

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
