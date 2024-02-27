import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () =>{
    return  useContext(AppContext);
};

const AppContextProvider = ({children}) => {
    
    const [favoriteList, setFavoriteList] = useState([])

    const addFavorite = (a) =>{
        const prevFavorites = [...favoriteList]
        const newFavoritesList = prevFavorites.concat(a)
        setFavoriteList(newFavoritesList);
      };

    const removeFavorite = (id) =>{
        
        const currentList = [...favoriteList]
        const newList = currentList.filter(item => item.id !== id)
        setFavoriteList(newList)

    };

    const favoriteCount = favoriteList.length

    const alreadyFav = (id) =>{
        return favoriteList.some((item => {
            return item.id === id
        }))
}


    return (
        <AppContext.Provider value={{favoriteList, addFavorite, removeFavorite, favoriteCount, alreadyFav}}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;