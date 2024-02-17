import Recipe from "./assets/recipe/Recipe";
import Menu from "./component/Menu/Menu";
import Searchbar from "./component/Searchbar";
import Nav from "./component/header/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [param, setParam] = useState("egg");
  const [id, setID] = useState("52952");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${param}`)
      .then((resp) => {
        setData(resp.data.meals);
      })
      .catch((e) => {
        console.log(`error:${e}`);
      });
  }, [param]);

  const HandlingParam = (e) => {
    e.preventDefault();
    setParam(e.target.value);
  };

  const handleid = (idMeal) => {
    console.log("click");
    setID(idMeal);
    navigate("/detail");
  };
  return (
    <>
      <div className="mix-blend-multiply">
        <Nav />
        <Searchbar HandlingParam={HandlingParam} />
        <Routes>
          <Route
            path="/"
            element={<Menu data={data} handleid={handleid} />}
          ></Route>
          <Route path="/detail" element={<Recipe id={id} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
