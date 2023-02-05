import React, {useEffect, useState, useContext } from "react";
import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login"
import { NoLogged } from "./pages/noLogged"
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
                        <Route element={<RestorePassword URL_API={URL_API} user={user} />} path="/restorepassword" />
                        {store.user?<Route  element={<ChangePassword URL_API={URL_API} admin={user.admin} user={user}  />} path="/changepassword/:user_id" />:<Route element={<NoLogged />} path="/changepassword"/>}
                        {store.user != null && !store.user.admin ? <Route element={<Home rate={rate} bankAccount={bankAccount} setBankAccount={setBankAccount} changeId={changeId} user={user} URL_API={URL_API} />} path="/home" /> : <Route element={<NoLogged />} path="/home"/>}
                        {store.user != null && !store.user.admin ? <Route element={<Process URL_API={URL_API} rate={rate} bankAccount={bankAccount} setBankAccount={setBankAccount} />} path="/process" /> : <Route element={<NoLogged />} path="/process"/>}
                        {store.user != null && !store.user.admin ? <Route element={<NewBankAccount URL_API={URL_API} bankAccount={bankAccount} user={user}/>} path="/newbankaccount" /> : <Route element={<NoLogged />} path="/newbankaccount"/>}
                        {store.user != null && !store.user.admin ? <Route element={<Record URL_API={URL_API} user={user}/>} path="/record" /> : <Route element={<NoLogged />} path="/record"/>}
                        {store.user != null && store.user.admin? <Route element={<HomeAdmin URL_API={URL_API} user={user}/>} path="/homeadmin" /> : <Route element={<NoLogged />} path="/homeadmin"/>}
                        {store.user != null && store.user.admin? <Route element={<RateAdmin URL_API={URL_API} rate={rate} setRate={setRate} user={user}/>} path="/rateadmin" /> : <Route element={<NoLogged />} path="/rateadmin"/>}
                        {store.user != null && store.user.admin? <Route element={<ReportAdmin URL_API={URL_API} user={user}/>} path="/reportadmin" /> : <Route element={<NoLogged />} path="/reportadmin"/>}
                        {store.user != null && store.user.admin? <Route element={<VerificationAdmin URL_API={URL_API} user={user}/>} path="/verificationadmin" /> : <Route element={<NoLogged />} path="/verificationadmin"/>}

                        <Route path="*" element={
                            !store.isLoading?<div className=" container text-center col-10 offset-1 col-xl-6 offset-xl-3">
                                <div className="card text-center">
                                    <div className="card-header fs-5">Error 404
                                    <div className="fs-1"><i className="fas fa-exclamation-triangle"></i></div>
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="container row">
                                            <p className="col-12">Ruta no encontrada</p>
                                        </div>
                                    </div>
                                    <div className="card-footer text-muted"></div>
                                </div>
                            </div>:
                            <div className=" container text-center col-10 offset-1 col-xl-6 offset-xl-3">
                            <div className="card text-center">
                                <div className="card-header fs-5">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    
                                </div>
                                <div className="card-footer text-muted"></div>
                            </div>
                        </div>
                        } />

                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
