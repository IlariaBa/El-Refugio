import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserContextProvider } from "./contexts/userContext.js";

import LayoutWithNav from "./layoutWithNav.js";
import LayoutWithoutNav from "./layoutWithoutNav.js";

import { Home } from "./pages/home";
import AboutUs from "./pages/AboutUs";
import Admin from "./pages/Admin";
import AnimalList from "./pages/AnimalList";
import AnimalProfile from "./pages/AnimalProfile";
import ForgotPassword from "./pages/ForgotPassword";
import FormAddAnimals from "./pages/FormAddAnimals";
import FormEditAnimals from "./pages/FormEditAnimals";
import FormEditProfile from "./pages/FormEditProfile";
import FormTestimony from "./pages/FormTestimony";
import Profile from "./pages/Profile";
import Recomendations from "./pages/Recomendations";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { BackendURL } from "./component/backendURL";


const App = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    //Alguno de los path tendra que ser editado a futuro para recibir parametros especificos como un ID
    return (
      <div>
        <React.StrictMode>
            <BrowserRouter basename={basename}>
                <UserContextProvider>
                    <Routes>

                        <Route element={<LayoutWithNav />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/animal-list" element={<AnimalList />} />
                            <Route path="/animal-profile" element={<AnimalProfile />} />
                            <Route path="/edit-profile" element={<FormEditProfile />} />
                            <Route path="/testimony" element={<FormTestimony />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/recomendations" element={<Recomendations />} />
                            <Route path="*" element={<h1>Not found!</h1>} />
                        </Route>

                        <Route element={<LayoutWithoutNav />}>
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/forgot-password" element={<ForgotPassword />} />
                            <Route path="/add-animals" element={<FormAddAnimals />} />
                            <Route path="/edit-animals" element={<FormEditAnimals />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                    </Routes>
                </UserContextProvider>
            </BrowserRouter>
        </React.StrictMode>
      </div>
    );
  };
  
  export default App;