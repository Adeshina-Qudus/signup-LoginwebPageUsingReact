import style from "./index.module.css"
import webpix from "../../asset/auth/login/webpix.png";
import FilledButton from "../../reuseable/filledButton";


const LoginPage = ()=> {
    return(
    <div className={style.wholePage}>
        <div className={style.image}>
            <img src={webpix} alt={"rectangle"} height={600} width={484}/>
        </div>
        <div className={style.inputPage}>
            <h3>Welcome Back!</h3>
            <p>Log in to your Dashboard</p>
            <form>
                <input type={"text"} placeholder={"Email :"}/>
                <input type={"text"} placeholder={"Password :"}/>
            </form>
            {/*<div className={style.already}>*/}
            {/*    <p color={"rgba(196, 196, 196, 1)"}>Already have an Account?</p>*/}

            {/*</div>*/}
            <FilledButton
                color={"white"} text={"Login"} buttonColor={"rgba(85, 34, 158, 1)"}/>
        </div>
    </div>
    )
}
export default LoginPage