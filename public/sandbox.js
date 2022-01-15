"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
logDetails(123, "test");
const greet = (user) => {
    console.log(`${user.name} says Hello`);
};
greet({ name: 'me', uid: 123 });
