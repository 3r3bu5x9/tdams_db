import Home from "./user/Home";
import NavBar from "./nav/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./user/About";
import AllOrders from "./uDeliveryP/AllOrders";
import {Provider} from "react-redux";
import {store} from "./store/store";

export default function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div>
                    <NavBar/>
                    <div className={'content'}>
                        <Routes>
                            <Route path={'/'} element={<Home/>}></Route>
                            <Route path={'/home'} element={<Home/>}></Route>
                            <Route path={'/about'} element={<About/>}></Route>
                            <Route path={'/allOrders'} element={<AllOrders/>}></Route>
                        </Routes>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
}
