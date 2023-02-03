import React, {useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
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

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Context } from "./store/appContext";


const Layout = () => {
    const { store, actions } = useContext(Context)
    const URL_API = process.env.BACKEND_URL
    const [rate, setRate] = useState("");
    const [changeId, setChangeId] = useState("")    
    const [user, setUser] = useState([])
    const [bankAccount, setBankAccount] = useState([])

  

//-------------fetch GET change -------------------------------------
    async function getChangeFetch() {
        let response = await fetch(`${URL_API}/api/get_all_changes`, {
            method: ["GET"],
            headers: {
                "Content-type": "application/json; charset=utf-8",
            },
        })
        let data = await response.json()
        setRate(data[0].exchange_rate)
        setChangeId(data[0].id)
    }
    getChangeFetch()
//-------------/fetch GET change -------------------------------------

    const basename = process.env.BASENAME || "";
    
    return (
        <div className="row">
            <BrowserRouter basename={basename}>
                <ScrollToTop> 
                    <Navbar user={user} />

                    <Routes>
                        <Route element={<Login setUser={setUser} URL_API={URL_API} user={user} />} path="/" />
                        {store.user?<Route element={<RestorePassword URL_API={URL_API} user={user} />} path="/restorepassword" />:<></>}
                        {store.user?<Route element={<ChangePassword URL_API={URL_API} admin={user.admin} user={user} />} path="/changepassword" />:<></>}
                        {store.user != null && !store.user.admin ? <Route element={<Home rate={rate} bankAccount={bankAccount} setBankAccount={setBankAccount} changeId={changeId} user={user} URL_API={URL_API} />} path="/home" /> : <></>}
                        {store.user != null && !store.user.admin ? <Route element={<Process URL_API={URL_API} rate={rate} bankAccount={bankAccount} setBankAccount={setBankAccount} />} path="/process/:transaction_id" /> : <></>}
                        {store.user != null && !store.user.admin ? <Route element={<NewBankAccount URL_API={URL_API} bankAccount={bankAccount} user={user}/>} path="/newbankaccount" /> : <></>}
                        {store.user != null && !store.user.admin ? <Route element={<Record URL_API={URL_API} user={user}/>} path="/record" /> : <></>}
                        {store.user != null && store.user.admin? <Route element={<HomeAdmin URL_API={URL_API} user={user}/>} path="/homeadmin" /> : <></>}
                        {store.user != null && store.user.admin? <Route element={<RateAdmin URL_API={URL_API} rate={rate} setRate={setRate} user={user}/>} path="/rateadmin" /> : <></>}
                        {store.user != null && store.user.admin? <Route element={<ReportAdmin URL_API={URL_API} user={user}/>} path="/reportadmin" /> : <></>}
                        {store.user != null && store.user.admin? <Route element={<VerificationAdmin URL_API={URL_API} user={user}/>} path="/verificationadmin" /> : <></>}


                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
