import React, {FormEvent} from "react";
import Button from "../../Components/UI/Button/Button";
import Container from "../../Components/UI/Container/Container";
import {useDispatch, useSelector} from "react-redux";
import {dialogActions, DialogState} from "../../store/dialog";
import Dialog from "../../Components/UI/Dialog/Dialog";
import classes from './InitialPage.module.scss';
import Input from "../../Components/UI/Input/Input";
import {formActions, FormState} from "../../store/form";

const InitialPage = () => {
	const dispatch = useDispatch();
	const {
		dialogOpened,
		dialogActiveRef
	} = useSelector((state: DialogState) => state.dialog);
	
	const {
		firstName,
		lastName,
		email,
		password
	} = useSelector((state: FormState) => state.form);
	
	const openDialog = (dialogActiveLabel: 'signIn' | 'signUp') => {
		dispatch(dialogActions.open(dialogActiveLabel));
	}
	
	const closeDialog = () => {
		dispatch(dialogActions.close());
	}
	
	const onSignInSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('signIn');
	}
	
	const onSignUpSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('signUp')
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
                    value={email}
                    onChange={
											(e) => {
											
											}
										}
                    label={'Email'}
                />
                <Input
                    type={'password'}
                    id={'password'}
                    value={password}
                    onChange={
											(e) => {
											
											}
										}
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
						{dialogActiveRef === 'signUp' &&
            <form onClick={(e) => onSignUpSubmitHandler(e)}>
                <Input
                    type={'text'}
                    id={'firstName'}
                    value={firstName}
                    onChange={
											(e) => {
											
											}
										}
                    label={'First Name'}
                />
                <Input
                    type={'text'}
                    id={'lastName'}
                    value={lastName}
                    onChange={
											(e) => {
											
											}
										}
                    label={'Last Name'}
                />
                <Input
                    type={'text'}
                    id={'email'}
                    value={email}
                    onChange={
											(e) => {
											
											}
										}
                    label={'Email'}
                />
                <Input
                    type={'password'}
                    id={'password'}
                    value={password}
                    onChange={
											(e) => {
											
											}
										}
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