import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../context/favorites-context";

const MainNavigation = () => {

    const { totalFavourites } = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
        <h1 className={classes.logo}>React Meetups</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/" >All Meetups</Link>
                </li>
                <li>
                    <Link to="/new-meetup">Add New Meetup</Link>
                </li>
                <li>
                    <Link to="/favourites">
                        My Favourites
                        <span className={classes.badge}>{totalFavourites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
        </header>

    )
}

export default MainNavigation;