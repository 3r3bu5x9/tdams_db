import {useContext, useEffect, useState} from "react";
import axios from 'axios'
import {URL_all_orders, URL_Delp_accept_order, URL_get_Item_Vendor} from "../apis/apis";
import Modal from 'react-modal'
import AddressInfo from "./AddressInfo";
import UserContext from "../contexts/UserContext";
import CounterContext from "./CounterContext";

Modal.setAppElement('#root')

export default function AllOrders() {
    // useEffect(() => {
    //     axios.get(URL_all_orders)
    //         .then((res) => dispatch({type: 'order/findAll', payload: res.data}))
    // }, [])
    const {counter} = useContext(CounterContext)
    const {setCounter} = useContext(CounterContext)
    const [ordersResp, setOrdersResp] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [content, setContent] = useState({})
    const {loggedInUser} = useContext(UserContext)

    useEffect(() => {
        axios
            .get(URL_all_orders)
            .then((response) => {
                setOrdersResp(() => response.data)
            })
            .then(setCounter(() => ordersResp.length));
    }, [])

    useEffect(() => {
        axios
            .get(URL_all_orders)
            .then((response) => {
                setOrdersResp(() => response.data)
            });
    }, [counter])

    const filterByAvailable = (order)=>{
        return !order.isAccepted;
    }

    return (
        <>
            <center>
                <h2>
                    All Orders
                </h2>

                <>
                    <Modal isOpen={modalIsOpen}
                           onRequestClose={() => setModalIsOpen(false)}
                           style={{
                               overlay: {
                                   position: 'fixed',
                                   top: 0,
                                   left: 0,
                                   right: 0,
                                   bottom: 0,
                                   backgroundColor: 'rgba(0, 0, 0, 0.85)'
                               },
                               content: {
                                   position: 'fixed',
                                   width: '20%',
                                   height: '70%',
                                   top: '50%',
                                   left: '50%',
                                   transform: 'translate(-50%, -50%)',
                                   border: '1px solid #ccc',
                                   background: '#000000',
                                   overflow: 'auto',
                                   WebkitOverflowScrolling: 'none',
                                   borderRadius: '4px',
                                   outline: 'none',
                                   padding: '20px',
                                   display: 'flex',
                                   flexWrap: 'wrap'
                               }
                           }}
                    >
                        <AddressInfo user={content}/>
                    </Modal>
                </>

                <div className={'MyTable'}>
                    {ordersResp.filter(filterByAvailable).map((order) => (
                        <div key={order.oid} className={'MyRow'}>
                            <div className={'MyRowElement'}>{order.oid}</div>
                            <div className={'MyRowElement'}>{order.customer.userCc.uname}</div>
                            {
                                order.customer.tiffin.tiffinDetails.map((td) =>
                                    <>
                                        <button className={'BtnItem'}
                                                onClick={() => {
                                                    axios
                                                        .get(URL_get_Item_Vendor(td.item.iid))
                                                        .then((res) => setContent(res.data.userCv))
                                                        .then(() => setModalIsOpen(true))
                                                }}
                                        >{td.item.name}</button>
                                        <button className={'ItemQty'}>{"x" + td.qty}</button>
                                    </>)
                            }
                            <button className={'BtnBlue'} onClick={() => {
                                setModalIsOpen(true)
                                setContent(order.customer.userCc)
                            }}>
                                Address
                            </button>

                            <button className={'BtnPay'}
                                    onClick={() => {
                                        axios
                                            .get(URL_Delp_accept_order(loggedInUser.dpid, order.oid, 1))
                                            .then(() => setCounter(p => p - 1))
                                            .then(() => console.log("accept req sent"))
                                    }}>
                                Accept
                            </button>
                        </div>
                    ))}
                </div>
            </center>
        </>
    )
}