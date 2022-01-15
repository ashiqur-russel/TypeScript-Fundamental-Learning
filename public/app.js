"use strict";
//Classes
class Invoice {
    /* readonly client: string;
    private details: string;
    public amount: number; */
    constructor(// different way
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    fromat() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on website development', 400);
const invTwo = new Invoice('Luigi', 'work as Backend development', 600);
//console.log(invOne, invTwo)
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//console.log(invoices)
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.fromat());
});
