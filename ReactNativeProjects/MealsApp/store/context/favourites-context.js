import {createContext, useState} from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: id => {},
  removeFavourite: id => {},
});

const FavouritesContextProvider = ({childern}) => {
  const [favouriteMealsIds, setFavouriteMealsIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealsIds(currentFavouriteIds => [id, ...currentFavouriteIds]);
  }
  function removeFavourite(id) {
    setFavouriteMealsIds(currentFavouriteIds =>
      currentFavouriteIds.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids: favouriteMealsIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {childern}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
