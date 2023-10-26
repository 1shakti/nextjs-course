import { useState } from "react";
import { createContext } from "react";

const FavoritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourites: (favouriteMeetup) => {},
    removeFavourites: (meetupId) => {},
    itemIsFavourites: (meetupId) => {}
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

    const itemIsFavouritesHandler = (meetupId) => {
        setUserFavourites((prevUserFavourite) => {
            return prevUserFavourite.some((meetup) => meetupId === meetup.id)
        })
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourites: addFavouritesHandler,
        removeFavourites: removeFavouritesHandler,
        itemIsFavourites: itemIsFavouritesHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    )

}