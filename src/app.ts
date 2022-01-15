//Interface 
interface Isperson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: Isperson = {
    name: 'shaun',

    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
}

const greetPerson = (person: Isperson) => {
    console.log('Hello ', person.name)
}

greetPerson(me)
import { Invoice } from './classes/invoice.js'

const invOne = new Invoice('mario', 'work on website development', 400);
const invTwo = new Invoice('Luigi', 'work as Backend development', 600);


let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.fromat())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})


