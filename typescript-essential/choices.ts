// enum Role {
//     Admin = 'admin',
//     Editor = 'editor',
//     Moderator = 'moderator',
//     User = 'user'
// }

type Role = 'admin' | 'editor' | 'moderator' | 'user';

// let userRole: Role;
// userRole = Role.Admin;
// console.log(userRole);

let userRole: Role;
userRole = 'admin';
console.log(userRole);

let possibleValues: [1|-1, number];
possibleValues = [1, 2];
console.log(possibleValues);

function access(role: Role) {
    console.log(role);
}
access('admin');
access('user');
access('moderator');