import React, {useEffect, useState} from "react";
import InnerModal from "./InnerModal";
import "./index.scss"

const Modal = ({innerHTMLs, title, onSubmit}) => {
    const [ret, setRet] = useState(0);
    const [submit, setSubmit] = useState(false);
    useEffect(() => {
        return () => {
            if (!submit) onSubmit(ret)
        }
    })
    return (
        <div id="modalContainer" className={submit?"submittedModalContainer":null}>
            <div>
                <h1>{title}</h1>
                <div>
                    {!!innerHTMLs ?
                        innerHTMLs.map((x, i) => <InnerModal key={i} cls={i===ret?"selectedInnerModalContainer":null} innerHTML={x} onClick={() => setRet(i)}/>) :
                        <p>No Data</p>
                    }
                </div>
            </div>
            <button onClick={() => {
                if (!submit) onSubmit(ret);
                setSubmit(true)
            }}>
                <div>Submit</div>
            </button>
        </div>
    );
}
export default Modal;