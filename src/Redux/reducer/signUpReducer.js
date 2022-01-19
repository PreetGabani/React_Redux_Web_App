const initialData = {
    SignUp: []
}

const signUpReducer = (state = initialData, action) => {
    switch (action.type) {
        case "SIGNUP_DATA":
            const { UserName, Email, Password } = action.payload;
            return {
                ...state,
                SignUp: [...state.SignUp,
                {
                    UserName:UserName,
                    Email:Email,
                    Password:Password
                }
                ]
            }
        default: return state;
    }
}
export default signUpReducer;
