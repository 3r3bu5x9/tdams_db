import ReactDOM from "react-dom";
export default function Modal({open, children, onClose}) {
    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <div className={'modalOverlay'}/>
            <div className={'modal'}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}