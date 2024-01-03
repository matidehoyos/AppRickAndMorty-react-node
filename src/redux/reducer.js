const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state= initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.allCharacters, action.payload]
            }
        case "REMOVE_FAV":
            const filteredFavs = state.allCharacters.filter(
                favorite => favorite.id !== Number(action.payload));
            return {
                ...state,
                allCharacters: filteredFavs,
                myFavorites: filteredFavs
            }
        case "FILTER":
            if(action.payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const filterFavs = state.allCharacters.filter(
                char => char.gender === action.payload
            )
            return {
                ...state,
                myFavorites: filterFavs
            }
        case "ORDER":
            const orderCopy = [...state.myFavorites];
            if(action.payload === "A") 
                orderCopy.sort((a,b)=> a.id - b.id);
            if(action.payload === "D") 
                orderCopy.sort((a,b) => b.id - a.id);
            return {
                ...state,
                myFavorites: orderCopy
            }
        default:
            return {
                ...state
            };
    }
}

export default reducer;