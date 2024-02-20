import { useContext } from "react";
import classes from "./notification.module.css";
import NotificationContext from "@/context-api/notification-context";

function NotificationPanel(props) {
	const { hideNotification } = useContext(NotificationContext);
	const { title, message, status } = props;

	let statusClasses = "";

	if (status === "success") {
		statusClasses = classes.success;
	}

	if (status === "error") {
		statusClasses = classes.error;
	}

	if (status === "pending") {
		statusClasses = classes.pending;
	}

	const activeClasses = `${classes.notification} ${statusClasses}`;

	return (
		<div className={activeClasses} onClick={hideNotification}>
			<h2>{title}</h2>
			<p>{message}</p>
		</div>
	);
}

export default NotificationPanel;
