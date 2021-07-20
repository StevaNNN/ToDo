import classes from './Dialog.module.scss';
import ReactDOM from 'react-dom';
import { MouseEventHandler } from "react";
import Button from '../Button/Button';

export type PROPS = {
	className?: string,
	title: string,
	open?: boolean,
	close?: MouseEventHandler<HTMLButtonElement> | undefined,
	onSubmit?: MouseEventHandler<HTMLButtonElement> | undefined,
	children?: any,
	footerActionLabel?: string
}

const Dialog = (props: PROPS) => {
	
	const {
		className,
		title,
		open,
		close,
		onSubmit,
		children,
		footerActionLabel
	} = props;
	
	return (
		open ? ReactDOM.createPortal(
			<div id="modal-dialog-wrapper" className={`${classes.wrapper} ${className ? className : ''}`}>
				<div
					className={classes.dialog}
					tabIndex={open ? 0 : undefined}
					aria-labelledby="dialog-title"
				>
					<div className={classes.header}>
						<h3
							id="dialog-title"
							className={classes.title}>
							{title}
						</h3>
						<Button
							iconClass="db-icon db-close"
							onClick={close} aria={{label: "Close dialog"}}
						/>
					</div>
					<div className={classes.body}>
						{children}
					</div>
					{footerActionLabel && <div className={classes.footer}>
              <Button onClick={onSubmit} primary>
								{footerActionLabel}
              </Button>
          </div>}
				</div>
			</div>, document.body.querySelector('#modal-root') as Element) : null
	);
}

export default Dialog;