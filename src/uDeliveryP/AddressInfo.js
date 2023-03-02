export default function AddressInfo({user}) {
    return (
        <>
            <div className={'ModalElementValAddress'}>
                {user.firstName + " " + user.lastName}
            </div>
            <div className={'ModalElementValAddress'}>
                {user.mob}
            </div>
            <div className={'ModalElementValAddress'}>
                {user.dob}
            </div>
            <div className={'ModalElementValAddress'}>
                {user.address.flatNo}
            </div>
            <div className={'ModalElementValAddress'}>
                {user.address.street}
            </div>
            <div className={'ModalElementValAddress'}>
                {user.address.landmark}
            </div>
            <div className={'ModalElementValAddress'}>
                {user.address.city}
            </div>
            <div className={'ModalElementValAddress'}>
                {user.address.pincode}
            </div>
        </>
    )
}