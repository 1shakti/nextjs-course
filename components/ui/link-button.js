import Link  from "next/link";
import classes from "./link-button.module.css";

function LinkButton(props){
    return(
        <Link href={props.link} className={classes.btn}>
        {props.children}
        </Link>
    )
}

export default LinkButton;