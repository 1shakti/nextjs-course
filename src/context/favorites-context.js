import { useState } from "react";
import { createContext } from "react";

const FavoritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourites: (favouriteMeetup) => {},
    removeFavourites: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
})

export function FavoritesContextProvider({children}){
    const [userFavourites, setUserFavourites] = useState([]); 

    const addFavouritesHandler = (favouriteMeetup) => {
        setUserFavourites((prevUserFavourite) => {
            return prevUserFavourite.concat(favouriteMeetup)
        })
    }

    const removeFavouritesHandler = (meetupId) => {
        setUserFavourites((prevUserFavourite) => {
            return prevUserFavourite.filter((meetup) => meetupId !== meetup.id)
        })
    }

    const itemIsFavouriteHandler = (meetupId) => {
       return userFavourites.some((meetup) => meetupId === meetup.id);
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourites: addFavouritesHandler,
        removeFavourites: removeFavouritesHandler,
        itemIsFavourite: itemIsFavouriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    )

}

export default FavoritesContext;