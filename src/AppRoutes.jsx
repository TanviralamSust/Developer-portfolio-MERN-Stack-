import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {Home} from "./components/home/Home";
import {Login} from "./components/auth/Login";
import {Chat} from "./components/chat/Chat";


export const AppRoutes = () => {
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                </Routes>
            </Layout>
        </Router>
    )
}