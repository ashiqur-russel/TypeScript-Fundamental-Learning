type StringorNum = string | number;
type objectWithName = { name: string, uid: StringorNum }

const logDetails = (uid: StringorNum, item: string) => {

    console.log(`${item} has a uid of ${uid}`);
}

logDetails(123, "test");

const greet = (user: objectWithName) => {
    console.log(`${user.name} says Hello`);
}

greet({ name: 'me', uid: 123 })
