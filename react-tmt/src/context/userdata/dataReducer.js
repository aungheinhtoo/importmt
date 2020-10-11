export default (state, action) => {
    switch(action.type){
        case "GET_USERS":
            return {
                ...state,
                users: action.payload
            };
        case "GET_USERS_FAIL":
            return{
                ...state,
                resultErrors: action.payload
            };
        default:
            return state;
    };
}