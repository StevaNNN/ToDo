export interface FIELD {
    value: string | any;
    isValid: boolean | null;
}
export type SIGN_IN_TYPES = {
    email: FIELD,
    password: FIELD
}

export const SignInInitialState: SIGN_IN_TYPES = {
    email: {
        value: '',
        isValid: null
    },
    password: {
        value: '',
        isValid: null
    }
}

export const SIGN_IN_ACTIONS = {
    EMAIL : 'signInEmail',
    PASSWORD : 'signInPassword'
}

export const signIn = (state: SIGN_IN_TYPES, action: any) => {
    switch (action.type) {
        case SIGN_IN_ACTIONS.EMAIL:
            return {
                email: {
                    value: action.payload.value,
                    isValid: action.payload.value.trim().length > 6 && action.payload.value.includes('@')
                },
                password: {
                    value: state.password.value,
                    isValid: state.password.value.isValid
                }
            }
        case SIGN_IN_ACTIONS.PASSWORD:
            return {
                email: {
                    value: state.email.value,
                    isValid: state.email.isValid
                },
                password: {
                    value: action.payload.value,
                    isValid: action.payload.value.trim().length > 6
                }
            }
        default:
            break;
    }
    return state;
}