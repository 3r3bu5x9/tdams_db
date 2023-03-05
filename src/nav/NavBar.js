import {Link} from "react-router-dom";

export default function NavBar() {


    return (
        <>
            <nav className={'Nav'}>
                <div className={'navLinksCnt'}>
                    <div className={'navLinkTitle'}>
                        <Link to={'/'} >TDAMS</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={{pathname: '/login'}} state={""}>
                            {(0 === 1) ? 'Logout' : 'Login'}</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/allOrders'}>All Orders</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/myOrders'}>My Orders</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/delDashboard'}>Dashboard</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/about'}>About</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/addTiffinDetails'}>Tiffin details</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}