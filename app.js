let users = [
    {
        username: 'David',
        email: 'david@frontendsimplified',
        password: 'test123',
        subscriptionStatus: 'VIP',
        discordId: 'David Bragg#0001',
        lessonsCompleted: [0, 1]
    },
    {
        username: 'Mitri',
        email: 'mitri@frontendsimplified',
        password: 'mitri123',
        subscriptionStatus: 'VIP',
        discordId: 'Mitri#0001',
        lessonsCompleted: [0, 1, 2, 3]
    },
    {
        username: 'Zen',
        email: 'Zen@frontendsimplified',
        password: 'zen123',
        subscriptionStatus: 'VIP',
        discordId: 'zen#0001',
        lessonsCompleted: [0, 1]
    }
]

function logIn (email, password) {
    for(i = 0; i < users.length; ++i) {
        if(users[i].email === email) {
            if(users[i].password === password) {
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect - try again')
            }
            return
        }
    }
    console.log('could not find an email that matches')
}

logIn('doesnotexist@gmail', 'wrong password')

function register(user) {
  users.push(user)
}

register({
  username: "Zen",
  email: "Zen@frontendsimplified.com",
  password: "zen123",
  subscriptionStatus: "VIP",
  discordId: "zen#0001",
  lessonsCompleted: [0, 1]
});

console.log(users)