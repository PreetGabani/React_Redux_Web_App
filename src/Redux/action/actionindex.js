export const SignUpData = (username,email,password) => {
    return {
        type: "SIGNUP_DATA",
        payload: {
            UserName:username,
            Email:email,
            Password:password
        }
    }
}