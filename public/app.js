"use strict";
//Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
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
    console.log(inv.client, inv.details, inv.amount, inv.fromat());
});
