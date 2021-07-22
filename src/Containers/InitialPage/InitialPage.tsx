import React, {FormEvent, useReducer} from "react";
// import {useHistory} from 'react-router-dom';
import Button from "../../Components/UI/Button/Button";
import Container from "../../Components/UI/Container/Container";
import {useDispatch, useSelector} from "react-redux";
import {dialogActions, DialogState} from "../../store/dialog";
import Dialog from "../../Components/UI/Dialog/Dialog";
import classes from './InitialPage.module.scss';
import Input from "../../Components/UI/Input/Input";
import {SignInInitialState, signIn, SIGN_IN_ACTIONS} from "../../reducers/signIn";
import {SIGN_UP_ACTIONS, signUp, SignUpInitialState} from "../../reducers/signOut";
import {authActions, AuthState} from "../../store/auth";

const InitialPage = (props: any) => {
    const dispatch = useDispatch();
    // const history = useHistory();

    // DIALOG HANDLERS
    const {dialogOpened, dialogActiveRef} = useSelector((state: DialogState) => state.dialog);
    const openDialog = (dialogActiveLabel: 'signIn' | 'signUp') => dispatch(dialogActions.open(dialogActiveLabel));
    const closeDialog = () => dispatch(dialogActions.close());

    // SIGN IN HANDLERS
    const [signInState, DISPATCHI] = useReducer(signIn, SignInInitialState);
    const {isAuthenticated} = useSelector((state: AuthState) => state.auth);
    const signInEmailHandler = (email: string) => {
        DISPATCHI({
            type: SIGN_IN_ACTIONS.EMAIL,
            payload: {
                value: email
            }
        });
    };
    const signInPasswordHandler = (password: string) => {
        DISPATCHI({
            type: SIGN_IN_ACTIONS.PASSWORD,
            payload: {
                value: password
            }
        });
    };
    const onSignInSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(authActions.login());
        isAuthenticated ? localStorage.setItem('isAuthenticated', '1'): localStorage.setItem('isAuthenticated', '0');
    }

    // SIGN UP HANDLERS
    const [signUpState, DISPATCHU] = useReducer(signUp, SignUpInitialState);
    const signUpFirstNameHandler = (firstName: string) => DISPATCHU({type: SIGN_UP_ACTIONS.FIRST_NAME, payload: firstName});
    const signUpLastNameHandler = (lastName: string) => DISPATCHU({type: SIGN_UP_ACTIONS.LAST_NAME, payload: lastName});
    const signUpEmailHandler = (email: string) => DISPATCHU({type: SIGN_UP_ACTIONS.EMAIL, payload: email});
    const signUpPasswordHandler = (password: string) => DISPATCHU({type: SIGN_UP_ACTIONS.PASSWORD, payload: password});
    const onSignUpSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.addNewUser(signUpState)
    }

    return (
        <Container
            hBox
            alignItemsCenter
            justifyContentCenter
            className={classes.initial}
        >
            <Container
                vBox
                displayFlex
                alignItemsCenter
                justifyContentCenter
            >
                <h1>To do app</h1>
                <Button
                    additionalClass={classes.spacing}
                    onClick={() => openDialog('signIn')}
                >
                    SignIn
                </Button>
                <Button
                    onClick={() => openDialog('signUp')}
                >
                    SignUp
                </Button>
                <Dialog
                    open={dialogOpened}
                    close={closeDialog}
                    title={dialogActiveRef === 'signIn' ? 'Sign in' : 'Sign Up'}
                >
                    <Container
                        vBox
                        alignItemsCenter
                    >
                        {dialogActiveRef === 'signIn' &&
                        <form onSubmit={(e) => onSignInSubmitHandler(e)}>
                            <Input
                                type={'text'}
                                id={'email'}
                                value={signInState.email.value}
                                onChange={e => signInEmailHandler(e.target.value)}
                                label={'Email'}
                            />
                            {
                                !signInState.email.isValid && <label htmlFor="email">
                                    Email failed validation
                                </label>
                            }
                            <Input
                                type={'password'}
                                id={'password'}
                                value={signInState.password.value}
                                onChange={e => signInPasswordHandler(e.target.value)}
                                label={'Password'}
                            />
                            {
                                !signInState.password.isValid && <label htmlFor="password">
                                    Password failed validation
                                </label>
                            }
                            <Button
                                type={'submit'}
                                primary
                            >
                                Submit
                            </Button>
                        </form>
                        }
                        {dialogActiveRef === 'signUp' &&
                        <form onSubmit={(e) => onSignUpSubmitHandler(e)}>
                            <Input
                                type={'text'}
                                id={'firstName'}
                                value={signUpState.firstName}
                                onChange={e => signUpFirstNameHandler(e.target.value)}
                                label={'First Name'}
                            />
                            <Input
                                type={'text'}
                                id={'lastName'}
                                value={signUpState.lastName}
                                onChange={e => signUpLastNameHandler(e.target.value)}
                                label={'Last Name'}
                            />
                            <Input
                                type={'text'}
                                id={'email'}
                                value={signUpState.email}
                                onChange={e => signUpEmailHandler(e.target.value)}
                                label={'Email'}
                            />
                            <Input
                                type={'password'}
                                id={'password'}
                                value={signUpState.password}
                                onChange={e => signUpPasswordHandler(e.target.value)}
                                label={'Password'}
                            />
                            <Button
                                type={'submit'}
                                primary
                            >
                                Submit
                            </Button>
                        </form>
                        }
                    </Container>
                </Dialog>
            </Container>
        </Container>
    )
}

export default InitialPage