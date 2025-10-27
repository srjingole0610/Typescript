let hobbies = ['Cooking', 'Sports'];
// hobbies.push(10);

let users: (string|number)[] ;
users = ['Max', 30];
users = [30, 'Max'];
console.log(users);

let newUsers: Array<string|number>;
newUsers = ['Mike', 40];
console.log(newUsers);

let possibleResults: [number,number];
possibleResults = [10,20];
console.log(possibleResults);
// possibleResults = [10,20,30];
// console.log(possibleResults);


let user = {
    name: 'Max',
    age: 29
}

let newUser:{
    name: string,
    age: number | string
    hobbies: string[]
    role:{
        description: string,
        id: number
    }
} = {
    name:'Suraj',
    age: 24,
    hobbies: ['Sports', 'Cooking'],
    role:{
        description: 'Developer',
        id: 1
    }
}

console.log(newUser);

let val: {} = 'some value';
const someObj = {};
console.log(val);

let data: Record<string, string|number>;
data = {
    name: 'Suraj',
    age: 24,
    address: '123 Main St',
    id: 1,
    role: 'Developer'
}

console.log(data);