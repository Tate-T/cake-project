import { Routes, Route } from "react-router-dom";
import DessertInfo from "./pages/DessertInfo/DessertInfo";
import Articles from "./pages/Articles/Articles";
import Article from "./pages/Article/Article";
import Main from "./pages/Main/Main";
import Confectioners from "./pages/Confecioners/Confecioners";
import ConfectionerCabinet from "./pages/ConfectionerCabinet/ConfectionerCabinet";
import ConfecionerInfo from "./pages/ConfecionerInfo/ConfecionerInfo";
import ConfectionerDeserts from "./pages/ConfectionerDeserts/ConfectionerDeserts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />y
      {/* <Route path="/desserts" element={<Desserts />} /> */}
      <Route path="/desserts/:id" element={<DessertInfo />} />
      <Route path="/confecioners" element={<Confectioners />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      {/* <Route path="/info-confecoiners" element={<InfoConfecoiners />} /> */}
      <Route path="/confectioner">
        <Route path="desserts" element={<ConfectionerDeserts />} />
        <Route path="about" element={<ConfecionerInfo />} />
      </Route>
      <Route path="/confectioner/cabinet" element={<ConfectionerCabinet />} />
    </Routes>
  );
}

export default App;
