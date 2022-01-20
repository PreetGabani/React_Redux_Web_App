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

export const CreateProjectData = (title,member,period) => {
    return {
        type: "CREATEPROJECT_DATA",
        payload: {
            Title:title,
            Member:member,
            Period:period
        }
    }
}