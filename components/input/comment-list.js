import classes from "./comment-list.module.css";

export default function CommentList(props) {
	const { items } = props;
    console.log("items",items);
	return (
		<ul className={classes.comments}>
			{Array.isArray(items) && items?.map((item) => (
				<li key={item._id}>
					<p>{item.text}</p>
					<div>
						By <address>{item.name}</address>
					</div>
				</li>
			))}
		</ul>
	);
}
