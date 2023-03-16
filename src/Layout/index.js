import { Outlet  } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Player from "../Components/Player";
import Sidebar from "../Components/Sidebar";

const Layout = () => {
    return (
        <>
            <div>
                <Header />
                <Sidebar />
            </div>
            <div>
                <Player/>
            </div>

            <main className="main">
                <div className="container-fluid">
                    <Outlet />
                </div>
            </main>
            <Footer/>
        </>
    )
};

export default Layout;