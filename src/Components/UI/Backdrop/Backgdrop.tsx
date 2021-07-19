import React, {MouseEventHandler} from "react";
import classes from './Backdrop.module.scss';

export type PROPS = {
	show?: boolean,
	clicked?: MouseEventHandler<HTMLDivElement> | undefined
}

const backdrop = (props: PROPS) => {
	const {
		show,
		clicked
	} = props;
	
	return(
		show ? <div className={classes.Backdrop} onClick={clicked} /> : null
	)
}

export default backdrop;