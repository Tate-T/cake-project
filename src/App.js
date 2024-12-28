import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/desserts" element={<Desserts />} />
      <Route path="/confecionres" element={<Confecioners />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ArticlePage />} />
      <Route path="/info-confecoiners" element={<InfoConfecoiners />} />
      <Route path="/confectioner">
        <Route path="products" element={<ConfectionerProducts />} />
        <Route path="about" element={<AboutConfectioner />} />
      </Route> */}
    </Routes>
  );
}

export default App;
