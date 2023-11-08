import classes from "./event-item.module.css";
import LinkButton from "../ui/link-button";
import { MdDateRange } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function EventItem(props) {
	const { id, title, location, date, image } = props;
	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location.replace(",", "\n");
	const exploreLink = `/events/${id}`;

	return (
		<li className={classes.item}>
			<img src={"/" + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<MdDateRange />
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<CiLocationOn />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<LinkButton link={exploreLink}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<BsArrowRight />
						</span>
					</LinkButton>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
