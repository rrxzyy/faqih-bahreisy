import { useRef, useState } from "react";
import Buttons from "../Buttons/Buttons";
import InputForm from "../Input/InputForm";

const FormRegister = () => {

    const [registerFailed, setRegisterFailed] = useState('');
    const authForm = useRef();

    const handleRegister = (event) => {

        event.preventDefault();

        let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/



        let form = new FormData(authForm.current);
        let formData = {};


        for (let [key, value] of form.entries()) {
            formData[key] = value;
        }

        let { fullname, email, password } = formData;

        if (fullname) {
            if (fullname.length < 3) {
                return console.log({ "error": "fullname must be at least 3 letters long" })
            }
        } if (!email.length) {
            return console.log({ "error": "enter email" })
        } if (!emailRegex.test(email)) {
            return console.log({ "error": "email invalid" })
        } if (!passwordRegex.test(password)) {
            return console.log({ "error": "password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letter" })
        }


    };


    return (
        <form ref={authForm} onSubmit={handleRegister}>
            <InputForm label='Email' type='email' placeholder='example@email.com' name='email' />
            <InputForm label='Username' type='text' placeholder='Insert username' name='username' />
            <InputForm label='Full Name' type='text' placeholder='Insert full name' name='fullname' />
            <InputForm label='Password' type='password' placeholder='***************' name='password' />
            {/* <InputForm label='Confirm Password' type='password' placeholder='***************' name='password' /> */}
            <Buttons variant='primary' classname='bg-blue-700 text-white w-full my-4' type='submit'>Register</Buttons>
        </form>
    )
};

export default FormRegister;