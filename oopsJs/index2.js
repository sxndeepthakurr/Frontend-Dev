const menu = {
    burger: 120,
    pizza: 250,
    momos: 80
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error(`Invalid item: ${item}`);
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);
        console.log(`Total Bill: ₹${total}`);
    } 
    catch (err) {
        console.error("Order Error:", err.message);
    }
}

calculateBill(["pizza", "momos"]);
calculateBill(["burger", "pasta"]);
