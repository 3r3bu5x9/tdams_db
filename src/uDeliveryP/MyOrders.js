import {useContext, useEffect, useState} from "react";
import axios from 'axios'
import {
    URL_all_orders,
    URL_Delp_accept_order,
    URL_Delp_by_id, URL_Delp_cancel_order,
    URL_Delp_deliver_order_post, URL_Delp_pickup_order_post,
    URL_get_Item_Vendor
} from "../apis/apis";
import Modal from 'react-modal'
import AddressInfo from "./AddressInfo";
import UserContext from "../contexts/UserContext";
import CounterContext from "./CounterContext";

Modal.setAppElement('#root')

export default function MyOrders() {
    const {counter} = useContext(CounterContext)
    const {setCounter} = useContext(CounterContext)
    const [ordersResp, setOrdersResp] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [content, setContent] = useState({})
    const {loggedInUser} = useContext(UserContext)

    useEffect(() => {
        axios
            .get(URL_Delp_by_id(loggedInUser.dpid))
            .then((response) => {
                console.log(response.data.orders)
                setOrdersResp(() => response.data.orders)
            })
            .then(setCounter(() => ordersResp.length));
    }, [])
    useEffect(() => {
        axios
            .get(URL_Delp_by_id(loggedInUser.dpid))
            .then((response) => {
                setOrdersResp(() => response.data.orders)
            });
    }, [counter])
    console.log(ordersResp)
    return (
        <>
            <center>
                <h2>
                    My Orders
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
                    {ordersResp.map((order) => (
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
                            {
                                (!order.isPickedUp) ?
                                    <button className={'BtnPickUp'}
                                            onClick={() => {
                                                axios
                                                    .get(URL_Delp_pickup_order_post(order.oid, 1))
                                                    .then(() => setCounter(p => p + 1))
                                                    .then(() => console.log("pickup req sent"))
                                            }}
                                    >Pick Up
                                    </button>
                                    :
                                    <button className={'BtnPickUpAlt'}
                                    >Picked Up
                                    </button>
                            }

                            {
                                (!order.isDelivered) ?
                                    <button className={'BtnDeliver'}
                                            onClick={() => {
                                                axios
                                                    .get(URL_Delp_deliver_order_post(order.oid, 1))
                                                    .then(() => setCounter(p => p - 1))
                                                    .then(() => console.log("deliver req sent"))
                                            }}
                                    >Deliver
                                    </button>
                                    :
                                    <button className={'BtnDeliverAlt'}
                                    >Delivered
                                    </button>
                            }
                            <button className={'BtnCancel'}
                                    onClick={() => {
                                        axios
                                            .get(URL_Delp_cancel_order(order.oid))
                                            .then(() => setCounter(p => p - 1))
                                            .then(() => console.log("cancel req sent"))
                                    }}>
                                Cancel
                            </button>
                        </div>
                    ))}
                </div>
            </center>
        </>
    )
}