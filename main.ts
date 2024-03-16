let userName: string[] = [ "Ilsa Ubaid", "Ahsan Syed", "Komal" ];
let new_userName: string[] = [ "ilsa ubaid", "ahsan", "komal" ];

new_userName.forEach(newUsers => {
    if(userName.some(User => User.toLowerCase() === newUsers.toLowerCase())){
        console.log(`${newUsers} is already taken try anouther name.`)
    } else{
        console.log(`${newUsers} is available.`)
    }
});

