import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ConfectionerRegistration from "./components/ConfectionerRegistration/ConfectionerRegistration";

import ClientLogin from "./components/ClientLogin/ClientLogin";
import ClientRegistartion from "./components/ClientRegistartion/ClientRegistration";
import Application from "./pages/myApplication/myApplication";
// import DessertInfo from "./pages/DessertInfo/DessertInfo";
const DessertInfo = lazy(() => import("./pages/DessertInfo/DessertInfo"));
const UserCabinet = lazy(() => import("./pages/UserCabinet/UserCabinet"));
const Desserts = lazy(() => import("./pages/Desserts/Desserts"));
const ConfecionerAllTower = lazy(() =>
  import("./pages/ConfectionerAllTowar/ConfectionerAllTowar")
);
const PrivateRoute = lazy(() => import('./components/PrivateRoute/PrivateRoute'))

// import Articles from "./pages/Articles/Articles";
const Articles = lazy(() => import("./pages/Articles/Articles"));

// import Article from "./pages/Article/Article";
const Article = lazy(() => import("./pages/Article/Article"));

// import Desserts from "./pages/Desserts/Desserts";

// import Main from "./pages/Main/Main";
const Main = lazy(() => import("./pages/Main/Main"));
// import Confecioners from './pages/Confecioners/Confecioners';

// import ConfectionerCabinet from "./pages/ConfectionerCabinet/ConfectionerCabinet";
const ConfectionerCabinet = lazy(() =>
  import("./pages/ConfectionerCabinet/ConfectionerCabinet")
);

// import ConfecionerInfo from "./pages/ConfecionerInfo/ConfecionerInfo";
const ConfecionerInfo = lazy(() =>
  import("./pages/ConfecionerInfo/ConfecionerInfo")
);

// import ConfectionerDeserts from "./pages/ConfectionerDeserts/ConfectionerDeserts";
const ConfectionerDeserts = lazy(() =>
  import("./pages/ConfectionerDeserts/ConfectionerDeserts")
);

// import Birthday from "./pages/Main/SubPages/Birthday/Birthday";
const Birthday = lazy(() => import("./pages/Main/SubPages/Birthday/Birthday"));

// import Cupcakes from "./pages/Main/SubPages/Cupcakes/Cupcakes";
const Cupcakes = lazy(() => import("./pages/Main/SubPages/Cupcakes/Cupcakes"));

// import Patriot from "./pages/Main/SubPages/Patriot/Patriot";
const Patriot = lazy(() => import("./pages/Main/SubPages/Patriot/Patriot"));

// import ConfectionerLogin from "./components/ConfectionerLogin/ConfectionerLogin";
const ConfectionerLogin = lazy(() =>
  import("./components/ConfectionerLogin/ConfectionerLogin")
);

const Confecioners = lazy(() => import("./pages/Confecioners/Confecioners"));

// hello

function App() {
  return (
    <Suspense fallback={<p>... is loading</p>}>
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
        <Route path="/desserts" element={<Desserts />} />

        <Route path="/desserts/:id" element={<DessertInfo />} />

        <Route path="/confecioners" element={<Confecioners />} />

        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />

        <Route path="/ConfecionerAllTower" element={<ConfecionerAllTower />} />
        {/* <Route path="/info-confecoiners" element={<InfoConfecoiners />} /> */}
        <Route path="/confectioner">
          <Route path="desserts" element={<ConfectionerDeserts />} />
          <Route path="about" element={<ConfecionerInfo />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/confectioner/cabinet" element={<ConfectionerCabinet />} />
        </Route>
        <Route path="/confectioner/login" element={<ConfectionerLogin />} />
        <Route
          path="/confectioner/registration"
          element={<ConfectionerRegistration />}
        />

        <Route path="/client/login" element={<ClientLogin />} />
        <Route path="/client/registartion" element={<ClientRegistartion />} />
        <Route path="/client/requests" element={<UserCabinet isOrders={true}/>} />
        <Route path="/client/temps" element={<UserCabinet isOrders={false}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
