import { Fragment, useContext } from "react";
import MainHeader from "./main-header";
import NotificationContext from "@/context-api/notification-context";
import NotificationPanel from "../ui/notificationPanel";

function Layout(props) {
	const notificationCtx = useContext(NotificationContext);
	const activeNotification = notificationCtx.notification;

	return (
		<Fragment>
			<MainHeader />
			<main>{props.children}</main>
			{activeNotification && (
				<NotificationPanel
					title={activeNotification.title}
					message={activeNotification.message}
					status={activeNotification.status}
				/>
			)}
		</Fragment>
	);
}

export default Layout;
