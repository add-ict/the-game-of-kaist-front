const Language = ({t,setT})=>{
    return <div className="language-change">
        <div onClick={()=>{
            setT(prev=>(1-prev))
        }}
        >
            {t===0?
                "English":"한국어"
            }
    </div>
    </div>
}
export default Language;