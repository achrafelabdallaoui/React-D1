
const ButtonComponent = (props) => {
   const stileComp = {
    marginBottom: "100px"
   }
    return (
        <button style={{backgroundColor: 
            props.bgColor || '' }} >{props.buttonText}</button>
    )
}
export default ButtonComponent