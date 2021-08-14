import React from "react";

const InnerModal = ({style, innerHTML, cls, onClick}) => {
    return <div className={cls} id="innerModalContainer" onClick={onClick} style={style}
                dangerouslySetInnerHTML={{__html: innerHTML}}></div>
}
export default InnerModal;