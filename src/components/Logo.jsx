import logoImg from "../assets/images/logo.png"


const Logo = ({
    width,
}) => {
  return (
    <div>
        <img src={logoImg} width={width}/>
    </div>
  )
}

export default Logo