import React, { useEffect } from "react";
import CardList from "./components/CardList";
import { fetchCats } from "./store/reducers/ActionCreactors";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

function App() {
  const dispatch = useAppDispatch();
  const { cats, isLoading, error } = useAppSelector(
    (state) => state.catReducer
  );
  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);
  return (
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}

      {cats.length !== 0 && <CardList />}
    </div>
  );
}

export default App;
