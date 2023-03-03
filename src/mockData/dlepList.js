const delpList = [
    {
        "dpid": 1,
        "inTime": null,
        "outTime": null,
        "hourlyRate": null,
        "balance": 0.0,
        "userCd": {
            "uid": 9,
            "firstName": "anon9",
            "lastName": "sharma9",
            "mob": "7596893541",
            "dob": "1997-08-21",
            "uname": "delp1",
            "passwd": "12345",
            "isSuspended": false,
            "role": {
                "rid": 4,
                "name": "DELIVERY_PERSONNEL"
            },
            "address": null
        },
        "orders": [
            {
                "oid": 1,
                "isDelivered": false,
                "isPickedUp": false,
                "isAccepted": true,
                "customer": {
                    "cid": 1,
                    "balance": 0.0,
                    "userCc": {
                        "uid": 1,
                        "firstName": "anon1",
                        "lastName": "sharma1",
                        "mob": "7596893541",
                        "dob": "1997-08-21",
                        "uname": "cust1",
                        "passwd": "12345",
                        "isSuspended": false,
                        "role": {
                            "rid": 2,
                            "name": "CUSTOMER"
                        },
                        "address": {
                            "aid": 1,
                            "flatNo": "22/34",
                            "street": "sb road",
                            "landmark": "park center",
                            "city": "benaras",
                            "pincode": "400022"
                        }
                    },
                    "tiffin": {
                        "tid": 1,
                        "tiffinDetails": [
                            {
                                "tdid": 1,
                                "qty": 5,
                                "item": {
                                    "iid": 1,
                                    "name": "Naan",
                                    "qty": 78,
                                    "price": 12.0
                                }
                            },
                            {
                                "tdid": 2,
                                "qty": 2,
                                "item": {
                                    "iid": 2,
                                    "name": "Coke",
                                    "qty": 333,
                                    "price": 40.0
                                }
                            }
                        ]
                    }
                }
            }
        ]
    },
    {
        "dpid": 2,
        "inTime": null,
        "outTime": null,
        "hourlyRate": null,
        "balance": 0.0,
        "userCd": {
            "uid": 10,
            "firstName": "anon10",
            "lastName": "sharma10",
            "mob": "7596893541",
            "dob": "1997-08-21",
            "uname": "delp2",
            "passwd": "12345",
            "isSuspended": false,
            "role": {
                "rid": 4,
                "name": "DELIVERY_PERSONNEL"
            },
            "address": null
        },
        "orders": []
    }
]
export default delpList