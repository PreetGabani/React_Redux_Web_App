export const SignUpData = (username, email, password) => {
    return {
        type: "SIGNUP_DATA",
        payload: {
            UserName: username,
            Email: email,
            Password: password
        }
    }
}

export const CreateProjectData = (title, member, period) => {
    return {
        type: "CREATEPROJECT_DATA",
        payload: {
            id: new Date().getTime().toString(),
            Title: title,
            Member: member,
            Period: period
        }
    }
}

export const DeleteCreateProjectData = (id) => {
    return {
        type: "DELETE_CREATEPROJECT_DATA",
        payload: id
    }
}

export const EditCreateProjectData = (title,member,period,id) => {
    return {
        type: "EDIT_CREATEPROJECT_DATA",
        payload: {
            Title:title,
            Member:member,
            Period:period,
            id:id
        }
    }
}