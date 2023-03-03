import Home from "./user/Home";
import NavBar from "./nav/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./user/About";
import AllOrders from "./uDeliveryP/AllOrders";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Login from "./user/Login";
import {UserProvider} from "./contexts/UserContext";
import MyOrders from "./uDeliveryP/MyOrders";
import DelDasboard from "./uDeliveryP/DelDasboard";
import {CounterProvider} from "./uDeliveryP/CounterContext";

export default function App() {

    return (
        <CounterProvider>
            <UserProvider>
                <BrowserRouter>
                    <Provider store={store}>
                        <div>
                            <NavBar/>
                            <div className={'content'}>
                                <Routes>
                                    <Route path={'/'} element={<Home/>}></Route>
                                    <Route path={'/home'} element={<Home/>}></Route>
                                    <Route path={'/about'} element={<About/>}></Route>
                                    <Route path={'/login'} element={<Login/>}></Route>
                                    <Route path={'/allOrders'} element={<AllOrders/>}></Route>
                                    <Route path={'/myOrders'} element={<MyOrders/>}></Route>
                                    <Route path={'/delDashboard'} element={<DelDasboard/>}></Route>
                                </Routes>
                            </div>
                        </div>
                    </Provider>
                </BrowserRouter>
            </UserProvider>
        </CounterProvider>
    );
}
