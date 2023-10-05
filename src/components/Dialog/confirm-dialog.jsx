import './confirm-dialog.css';

const ConfirmDialog = (props) => {
    const { message, onReject, onConfirm } = props;
    return (
        <div className="confirm-dialog">
            <div className="confirm-dialog-innner">
                <p>{message}</p>
                <div className="confirm-dialog-button-group">
                    <button onClick={onReject}>cancel</button>
                    <button onClick={onConfirm}>ok</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDialog;