// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

const passwordValidator = (pswrd)=>{
    if(pswrd.length > 8){
        return false;
    }
    const hasUpperCase = /[A-Z]/.test(pswrd);
    const hasLowerCase = /[a-z]/.test(pswrd);
    const hasnumber = /[0-9]+/.test(pswrd);
    return hasUpperCase && hasLowerCase && hasnumber;
}


console.log(passwordValidator("HelloAbhishek"));
console.log(passwordValidator("Hello123"));
console.log(passwordValidator("abhi123"));
console.log(passwordValidator("Abhi121"));
console.log(passwordValidator("Abhi.@121"));