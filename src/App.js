import { Routes, Route, Navigate } from "react-router-dom";
// import DessertInfo from "./pages/DessertInfo/DessertInfo";
import Articles from "./pages/Articles/Articles";
import Article from "./pages/Article/Article";
import Main from "./pages/Main/Main";
// import Confecioners from './pages/Confecioners/Confecioners';
import ConfectionerCabinet from "./pages/ConfectionerCabinet/ConfectionerCabinet";
import ConfecionerInfo from "./pages/ConfecionerInfo/ConfecionerInfo";
import ConfectionerDeserts from "./pages/ConfectionerDeserts/ConfectionerDeserts";
import Birthday from "./pages/Main/SubPages/Birthday/Birthday";
import Cupcakes from "./pages/Main/SubPages/Cupcakes/Cupcakes";
import Patriot from "./pages/Main/SubPages/Patriot/Patriot";

// hello

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Navigate to="birthday" />} />
        <Route path="birthday" element={<Birthday />} />
        <Route path="cupcakes" element={<Cupcakes />} />
        <Route path="patriot" element={<Patriot />} />
        <Route path="man" element={<></>} />
        <Route path="wedding" element={<></>} />
        <Route path="glutenFree" element={<></>} />
        <Route path="vegan" element={<></>} />
        <Route path="sugarFree" element={<></>} />
        <Route path="girls" element={<></>} />
        <Route path="flowers" element={<></>} />
        <Route path="classic" element={<></>} />
      </Route>
      {/* <Route path="/desserts" element={<Desserts />} /> */}
      {/* <Route path="/desserts/:id" element={<DessertInfo />} /> */}

      {/* <Route path="/confecioners" element={<Confecioners />} /> */}

      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      {/* <Route path="/info-confecoiners" element={<InfoConfecoiners />} /> */}
      <Route path="/confectioner">
        <Route path="desserts" element={<ConfectionerDeserts />} />
        <Route path="about" element={<ConfecionerInfo />} />
      </Route>
      <Route path="/confectioner/cabinet" element={<ConfectionerCabinet />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
