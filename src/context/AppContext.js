import { createContext, useContext, useState } from "react";

// createContect is a function provided by React to create Context. 
//Context is mechanism that allows to share data or states between components 
// without having to explicitly pass props through every level of the component tree. 

//useContext hook is used to consume the context created using createContext.

const AppContext = createContext();

export const useAppContext = () =>{
    return  useContext(AppContext);
};

//useAppContext is custom hook that components will use to consume the states and functions created 
// in AppContextProvider

const AppContextProvider = ({children}) => {
    
    const [favoriteList, setFavoriteList] = useState([])

    //useState array that will be updated everytime seFavoriteList modifes favoriteList

    const addFavorite = (a) =>{
        const prevFavorites = [...favoriteList]
        const newFavoritesList = prevFavorites.concat(a)
        setFavoriteList(newFavoritesList);
      };

    // function that will add to the favoriteList array a new object. 

    const removeFavorite = (id) =>{
        
        const currentList = [...favoriteList]
        const newList = currentList.filter(item => item.id !== id)
        setFavoriteList(newList)

    };

    //function that will filter favoriteList. We pass an id as an argument. 
    // if the id of the object filter doesn't match with the id passed as an argument. 
    // the object can keep on being part of favoritList. 
    

    const favoriteCount = favoriteList.length

    //variable that allow us to know the lenght of favoriteList. 


    const alreadyFav = (id) =>{
        return favoriteList.some((item => {
            return item.id === id
        }))
        // function that will avoid favoriteList to have to object with the same id. 
        // Each object has its own id. 
        // If object with same id is added to favoriteList, the console will answer with an error. 
        //To avoid errors we pass favoriteList through .some() method. This method will check whether, 
        // any of the object making the array matches up with the id passed as an argument through the 
        //function --> if it does then some will return true if not, ti will return false. 
}


    return (
        <AppContext.Provider value={{favoriteList, addFavorite, removeFavorite, favoriteCount, alreadyFav}}>
            {children}
        </AppContext.Provider>
    )
    // Here you are indicating that AppContext.Provider will provide access to the following values
    // to those components, routes that will be wrapped in between its tags. 

}

export default AppContextProvider;