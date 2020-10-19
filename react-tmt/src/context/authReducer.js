export default (state, action) =>{
    switch(action.type){
        case "REGISTER_SUCCESS":
            // localStorage.setItem('token', action.payload);
            alert("Registration Success!");
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        
        case "LOGIN_SUCCESS":
            localStorage.setItem('token', action.payload);
            console.log(action.payload);
            // alert(JSON.stringify(action.domain));
            // alert(action.input);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                user: action.input,
                loading: false,
                domain: action.domain
            };
        case "REGISTER_FAIL":
            alert(action.payload);
        
        case "AUTH_ERROR":
            alert("Session Expired! Please Login Again.");
        
        case "LOGIN_FAIL":
            alert(action.payload);
        case "LOGOUT":
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload,
                domain: null
            };
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null
            }
        case "STOP_LOADING":
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }

}