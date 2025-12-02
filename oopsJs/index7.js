class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance)
            throw new Error("Insufficient Balance");
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();

acc.deposit(5000);

try {
    acc.withdraw(6000);
} catch (err) {
    console.error(err.message);
}

console.log("Balance:", acc.getBalance());
