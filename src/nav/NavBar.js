import {Link} from "react-router-dom";

export default function NavBar() {


    return (
        <>
            <nav className={'Nav'}>
                <Link to={'/'} >TDAMS</Link>
                <div className={'navLinksCnt'}>
                    <div className={'navLinkCnt'}>
                        <Link to={{pathname: '/login'}} state={""}>
                            {(0 === 1) ? 'Logout' : 'Login'}</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/allOrders'}>Orders</Link>
                    </div>
                    <div className={'navLinkCnt'}>
                        <Link to={'/about'}>About</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}