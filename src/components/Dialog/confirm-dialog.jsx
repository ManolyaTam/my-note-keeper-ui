import './confirm-dialog.css';

const ConfirmDialog = (props) => {
    const { message, onReject, onConfirm } = props;
    return (
        <div className="confirm-dialog">
            <p>{message}</p>
            <button onClick={onReject}>cancel</button>
            <button onClick={onConfirm}>ok</button>
        </div>
    )
}

export default ConfirmDialog;