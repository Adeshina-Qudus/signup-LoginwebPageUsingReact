import style from "./index.module.css"
import webpix from "../../asset/auth/signup/webpix.png"
import FilledButton from "../../reuseable/filledButton";
import {Link} from "react-router-dom";
const WebSignUpPage = ()=>{

    return(
        <div className={style.wholePage}>
            <div className={style.image}>
                <img src={webpix} alt={"rectangle"} height={630} width={700}/>
            </div>
            <div className={style.inputPage}>
                <h3>Welcome!</h3>
                <p>Sign up by entering the information below</p>
                <form>
                    <input type={"text"} placeholder={"First Name :"} className={style.value}/>
                    <input type={"text"} placeholder={"Last Name :"} className={style.value}/>
                    <input type={"text"} placeholder={"Email :"} className={style.value}/>
                    <input type={"text"} placeholder={"Password :"} className={style.value}/>
                </form>
                <div className={style.already}>
                    <p color={"rgba(196, 196, 196, 1)"}  >Already have an Account?</p>
                    <Link to={"/login"} className={style.linking}>Login</Link>
                </div>
                <div className={style.fillBut}>
                <FilledButton
                    color={"white"} text={"Sign Up"} buttonColor={"rgba(85, 34, 158, 1)"}/>
                </div>
            </div>
        </div>
    )
}
export default WebSignUpPage