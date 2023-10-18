import { useState } from "react";
import BackDrop from "./BackDrop";
import Modal from "./Modal";

const Todo = (props) => {
    const [modelIsOpen, setModelIsOpen] = useState(false);
    const deleteModalHandler = () => {
        setModelIsOpen(true);
    }

    const closeModalHandler = () => {
        setModelIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteModalHandler}>Delete</button>
            </div>
            {modelIsOpen &&
                <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
            }
            {modelIsOpen &&
                <BackDrop onCancel={closeModalHandler} />
            }
        </div>
    )
}

export default Todo;