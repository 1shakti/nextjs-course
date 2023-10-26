import { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../context/favorites-context";

const MeetupItem = (props) => {
    const { addFavourites, removeFavourites , itemIsFavourite } = useContext(FavoritesContext);

    const itemIsFavouriteStatus = itemIsFavourite(props.id);

    const toggleFavouriteStatusHandler = () => {
        if(itemIsFavouriteStatus){
            removeFavourites(props.id);
        }else{
            addFavourites({...props});
        }

    }

    return (
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt="" />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouriteStatusHandler}>{itemIsFavouriteStatus ? "Remove From Favourites" : "Add To Favorites"}</button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem;