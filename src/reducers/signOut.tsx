export type SIGN_UP_TYPES = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export const SignUpInitialState: SIGN_UP_TYPES = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

export const SIGN_UP_ACTIONS = {
    FIRST_NAME : 'signUpFirstName',
    LAST_NAME : 'signUpLastName',
    EMAIL : 'signUpEmail',
    PASSWORD : 'signUpPassword'
}

export const signUp = (state: SIGN_UP_TYPES, action: any) => {
    switch (action.type) {
        case SIGN_UP_ACTIONS.FIRST_NAME:
            return {
                firstName: action.payload,
                lastName: state.lastName,
                email: state.email,
                password: state.password
            }
        case SIGN_UP_ACTIONS.LAST_NAME:
            return {
                firstName: state.firstName,
                lastName: action.payload,
                email: state.email,
                password: state.password
            }
        case SIGN_UP_ACTIONS.EMAIL:
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                email: action.payload,
                password: state.password
            }
        case SIGN_UP_ACTIONS.PASSWORD:
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                password: action.payload
            }
        default:
            break;
    }
    return state;
}