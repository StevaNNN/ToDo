import classes from './Button.module.scss';
import classNames from "classnames";
import { MouseEventHandler } from "react";

export type ARIA_OBJECT_PROPS = {
	label?: string,
	hidden?: "true" | "false" | undefined
}

export type PROPS = {
	aria?: ARIA_OBJECT_PROPS,
	additionalClass?: string,
	block?: boolean,
	className?: string,
	children?: any;
	large?: boolean,
	iconClass?: string,
	rounded?: boolean,
	look? : 'flat',
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
	primary?: boolean,
	type?: "button" | "submit" | "reset" | undefined
}

const Button = (props: PROPS) => {
	
	const {
		aria,
		iconClass,
		look,
		additionalClass,
		primary,
		onClick,
		children,
		rounded,
		block,
		large,
		type
	} = props;
	
	const btnClasses = classNames(
		`${classes.button} ${additionalClass ? additionalClass : ''}`,
		{
			
			[`${classes.primary}`]:  primary,
			[`${classes.flat}`]:     look === 'flat',
			[`${classes.rounded}`]:  rounded,
			[`${classes.block}`]:    block,
			[`${classes.large}`]:    large,
			[`${classes.iconOnly}`]: children === undefined && iconClass
		}
	)
	
	return(
		<button
			aria-label={aria ? aria.label : undefined}
			aria-hidden={aria ? aria.hidden : undefined}
			className={btnClasses}
			onClick={onClick}
			type={type}
		>
			{iconClass && <i aria-hidden="true" className={`${classes.icon} ${iconClass}`}/>}
			{children}
		</button>
	);
}

export default Button;