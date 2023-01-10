import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login"
import { RestorePassword } from "./pages/restorePassword"
import { ChangePassword } from "./pages/changePassword"
import { Process } from "./pages/process"
import { NewBankAccount } from "./pages/newBankAccount"
import { Record } from "./pages/record"
import { HomeAdmin } from "./pages/homeAdmin"
import { RateAdmin } from "./pages/rateAdmin"
import { ReportAdmin } from "./pages/reportAdmin"
import { VerificationAdmin } from "./pages/verificationAdmin"

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { NavbarAdmin } from "./component/navbarAdmin";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop> 
                    <Navbar />
                    <NavbarAdmin/>

                    <Routes>
                        <Route element={<Login />} path="/" />
                        <Route element={<RestorePassword />} path="/restorepassword" />
                        <Route element={<ChangePassword />} path="/changepassword" />
                        <Route element={<Home />} path="/home" />
                        <Route element={<Process />} path="/process" />
                        <Route element={<NewBankAccount />} path="/newbankaccount" />
                        <Route element={<Record />} path="/record" />
                        <Route element={<HomeAdmin />} path="/homeadmin" />
                        <Route element={<RateAdmin />} path="/rateadmin" />
                        <Route element={<ReportAdmin />} path="/reportadmin" />
                        <Route element={<VerificationAdmin />} path="/verificationadmin" />

                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />

                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
