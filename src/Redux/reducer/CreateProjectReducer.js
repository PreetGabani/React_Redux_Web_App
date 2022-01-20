const initialData = {
    CreateProject: []
}

const CreateProjectReducer = (state = initialData, action) => {
    switch (action.type) {
        case "CREATEPROJECT_DATA":
            const { Title, Member, Period } = action.payload;
            return {
                ...state,
                CreateProject: [...state.CreateProject,
                {
                    Title: Title,
                    Member: Member,
                    Period: Period
                }
                ]
            }
        default: return state;
    }
}
export default CreateProjectReducer;
