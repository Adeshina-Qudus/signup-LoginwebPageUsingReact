import style from "./index.module.css"
import webpix from "../../asset/auth/login/webpix.png";
import FilledButton from "../../reuseable/filledButton";
import {Link} from "react-router-dom";


const LoginPage = ()=> {
    return(
    <div className={style.wholePage}>
        <div className={style.image}>
            <img src={webpix} alt={"rectangle"} height={632} width={700}/>
        </div>
        <div className={style.inputPage}>
            <h3>Welcome Back!</h3>
            <p>Log in to your Dashboard</p>
            <form>
                <input type={"text"} placeholder={"Email :"}  className={style.inputBox}/>
                <input type={"text"} placeholder={"Password :"} className={style.inputBox}/>
            </form>
            <div className={style.secondForm}>
                <form className={style.remember}>
                    <input type={"checkbox"}/>
                    <p className={style.me}>Remember Me</p>
                </form>

            </div>
            <FilledButton
                color={"white"} text={"Login"} buttonColor={"rgba(85, 34, 158, 1)"}/>
            <div className={style.last}>
                <p color={"rgba(196, 196, 196, 1)"}>Don’t have an Account?</p>
                <Link to={"/sign-up"} className={style.linking}>Sign Up</Link>
            </div>
        </div>
    </div>
    )
}
export default LoginPage