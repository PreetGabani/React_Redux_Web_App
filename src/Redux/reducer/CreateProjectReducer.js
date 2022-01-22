const initialData = {
    CreateProject: []
}

const CreateProjectReducer = (state = initialData, action) => {
    switch (action.type) {
        case "CREATEPROJECT_DATA":
            const { id, Title, Member, Period } = action.payload;
            return {
                ...state,
                CreateProject: [...state.CreateProject,
                {
                    id: id,
                    Title: Title,
                    Member: Member,
                    Period: Period
                }
                ]
            }

        case "DELETE_CREATEPROJECT_DATA":
            const newList = state.CreateProject.filter((item) => item.id !== action.payload)
            return {
                CreateProject: newList
            }

        case "EDIT_CREATEPROJECT_DATA":
            const updateData = state.CreateProject.map((item) => item.id === action.payload.id ? action.payload : item)
            return {
                CreateProject: updateData
            }

        default: return state;
    }
}
export default CreateProjectReducer;
