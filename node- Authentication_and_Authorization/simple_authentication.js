const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
];

function authenticate(username, password) {
    const user = users.find((user) => user.username === username && user.password === password);
    return user ? 'Authentication successful' : 'Authentication failed';
}

console.log(authenticate('user1', 'pass1'));
