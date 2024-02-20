import Layout from "@/components/layout/layout";
import { NotificationContextProvider } from "@/context-api/notification-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</NotificationContextProvider>
	);
}
