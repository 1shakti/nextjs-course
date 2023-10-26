import { useContext } from "react";
import FavoritesContext from "../context/favorites-context";
import MeetupList from "../component/meetups/MeetupList";

const FavouritesPage = () => {

    const { favourites } = useContext(FavoritesContext);
    let content;
    if(favourites.length === 0 ){
        content = <p>Ypu got no favorites yet. Start adding some?</p>;
    }else{
       content = <MeetupList meetups={favourites} />
    }

    return (
        <div>
            <h1>My Favourites</h1>
            {content}
        </div>
    )
}

export default FavouritesPage;