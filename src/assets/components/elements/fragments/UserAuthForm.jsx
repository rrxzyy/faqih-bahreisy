import Buttons from "../Buttons/Buttons";
import InputForm from "../Input/InputForm";
import { Fragment, useContext, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import { storeInSession } from "../../../../common/sessions";
import { UserAuthContext } from "../../../../context/UserContext";
import { Navigate } from "react-router-dom";

const UserAuthForm = ({ type }) => {

    const authForm = useRef();

    let { userAuth: { access_token } = {}, setUserAuth } = useContext(UserAuthContext);

    const userAuthThroughServer = (serverRoute, formData) => {

        axios.post(import.meta.env.VITE_SERVER_DOMAIN + serverRoute, formData)
            .then(({ data }) => {
                storeInSession("user", JSON.stringify(data));
                setUserAuth(data);
                toast.success('login successful');
            })
            .catch(({ response }) => {
                toast.error(response.data.error)
            })
    }

    const handleLogin = (event) => {

        event.preventDefault();

        let serverRoute = type === "login" ? "/login" : "/register";
        let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/


        //        let form = new FormData(formElement);
        let form = new FormData(authForm.current);
        let formData = {};

        for (let [key, value] of form.entries()) {
            formData[key] = value;
        }

        let { fullname, username, email, password } = formData;

        if (fullname) {
            if (fullname.length < 3) {
                return toast.error("fullname must be at least 3 letters long")
            }
        } if (username) {
            if (username.length < 3) {
                return toast.error("username must be at least 3 letters long")
            }
        } if (!email.length) {
            return toast.error("enter email")
        } if (!emailRegex.test(email)) {
            return toast.error("email invalid")
        } if (!passwordRegex.test(password)) {
            return toast.error("password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letter")
        }

        userAuthThroughServer(serverRoute, formData);
    };


    const handleLoginGoogle = (event) => {
        return toast.error("login with google is being maintained")
    }

    return (
        access_token ? <Navigate to={"/dashboard"} />
            :
            <Fragment>
                <Toaster />
                <form ref={authForm} onSubmit={handleLogin}>
                    {type !== "login" ?
                        <Fragment>
                            <InputForm label='Full Name' type='text' placeholder='Insert full name' name='fullname' />
                            <InputForm label='Username' type='text' placeholder='Insert username' name='username' />
                        </Fragment>
                        : ""
                    }
                    <InputForm label='Email' type='text' placeholder='Jhondoe@gmail.com' name='email' />
                    <InputForm label='Password' type='password' placeholder='***************' name='password' />

                    <Buttons variant='primary' classname='w-full mt-6 mb-4 capitalize tracking-wider' type='submit'>{type}</Buttons>
                </form>

                {type == "login"
                    ?
                    <section className="mb-8">
                        < Buttons variant='google' type='submit' onClick={handleLoginGoogle} />
                    </section>
                    : ""}
            </Fragment>
    )
}

export default UserAuthForm;