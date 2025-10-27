// function generateError(message?: string) {
//   throw new Error(message);
// }

// generateError("An error occurred!");
// generateError();

type User = {
    name: string;
    age?: number;
    role?: 'admin' | 'user' | 'moderator';
};


let input = '2';
const didProvideInput = input ?? false;
console.log(didProvideInput);