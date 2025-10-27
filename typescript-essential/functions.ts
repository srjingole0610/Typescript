function add(a: number, b: number): number{
    return a + b;
}
function toUpperCase(str: string): string{
    return str.trim().toUpperCase();
}

function log(message: string): void{
    console.log(message);
}

function error(message: string): never{
    throw new Error(message);
}
function sum(numbers: number[]): number{
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum([1,2,3,4,5]));

function performJob(cb:(msg: string) => void){
    //......
    cb("Job Done");
}

performJob(log);

type User ={
    name: string;
    age: number;
    isAdmin: boolean;
    greet:() => String;
}

let user: User = {
    name: "John",
    age: 30,
    isAdmin: true,
    greet: function () {
        return "Hello, " + this.name;
    }
};
console.log(user.greet());