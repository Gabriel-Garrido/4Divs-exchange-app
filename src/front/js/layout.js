import React, {useEffect, useState } from "react";
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

//create your first component
const Layout = () => {
    const URL_API = "https://3001-gabrielgarr-4geeksproye-b221n57ad5u.ws-us83.gitpod.io"
    const [rate, setRate] = useState("");
    const [changeId, setChangeId] = useState("")    
    const [userId, setUserId] = useState("")
    const [admin, setAdmin] = useState(false)

//-------------fetch GET change -------------------------------------
    
    async function getChangeFetch() {
        let response = await fetch(`${URL_API}/api/get_all_changes`, {
            method: ["GET"],
            headers: {
                "Content-type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
            },
        })
        let data = await response.json()
        setRate(data[0].exchange_rate)
        setChangeId(data[0].id)
    }
    getChangeFetch()
    

//-------------/fetch GET change -------------------------------------


    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    
    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop> 
                    <Navbar admin={admin} />

                    <Routes>
                        <Route element={<Login setUserId={setUserId} userId={userId} setAdmin={setAdmin} />} path="/" />
                        <Route element={<RestorePassword URL_API={URL_API} />} path="/restorepassword" />
                        <Route element={<ChangePassword URL_API={URL_API} />} path="/changepassword" />
                        {!admin ? <Route element={<Home rate={rate} changeId={changeId} URL_API={URL_API} />} path="/home" /> : <></>}
                        {!admin ? <Route element={<Process URL_API={URL_API} />} path="/process" /> : <></>}
                        {!admin ? <Route element={<NewBankAccount URL_API={URL_API} />} path="/newbankaccount" /> : <></>}
                        {!admin ? <Route element={<Record URL_API={URL_API} />} path="/record" /> : <></>}
                        {admin ? <Route element={<HomeAdmin URL_API={URL_API} />} path="/homeadmin" /> : <></>}
                        {admin ? <Route element={<RateAdmin URL_API={URL_API} />} path="/rateadmin" /> : <></>}
                        {admin ? <Route element={<ReportAdmin URL_API={URL_API} />} path="/reportadmin" /> : <></>}
                        {admin ? <Route element={<VerificationAdmin URL_API={URL_API} />} path="/verificationadmin" /> : <></>}

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
