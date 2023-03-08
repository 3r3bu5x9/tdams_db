import {Button} from "reactstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {URL_vendor_items} from "../apis/apis";
import getAccessToken from "../util/getAccessToken";
import {useNavigate} from "react-router-dom";

export default function VendorDashboard() {
    const vendor = JSON.parse(sessionStorage.getItem("loggedUser"))
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(URL_vendor_items(vendor.id),
            {headers: {Authorization: getAccessToken()}})
            .then((res) => setItems(() => res.data))
    }, [])

    return (
        <>
            <div className={'LeftContainer'}>
                <div className={'DashColumn'}>
                    <Button onClick={() => navigate("/vendorAddItem")}>Add item</Button>
                    <Button onClick={() => navigate("/vendorManageItem")}>Manage items</Button>
                    <Button>Manage info</Button>
                    <Button>Manage address</Button>
                    <div className={'BalanceContainer'}>
                        0.0
                    </div>
                </div>
            </div>
            <div className={'RightContainer'}>
                <center>
                    <h2>My Items</h2>
                    <div className={'MyTable'}>
                        {items.map((item, index) => (
                            <div key={index} className={'MyRow'}>
                                <div className={'InfoContainer'}>
                                    <div className={'ModalElementValUser'}>
                                        {"Name:"}
                                    </div>
                                    <div className={'MyRowElementDesc'}>{item.name}</div>
                                </div>
                                <div className={'InfoContainer'}>
                                    <div className={'ModalElementValUser'}>
                                        {"Price:"}
                                    </div>
                                    <div className={'MyRowElementDesc'}>{item.price}</div>
                                </div>
                                <div className={'InfoContainer'}>
                                    <div className={'ModalElementValUser'}>
                                        {"Stock:"}
                                    </div>
                                    <div className={'MyRowElementDesc'}>{item.qty}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </center>
            </div>
        </>
    )
}