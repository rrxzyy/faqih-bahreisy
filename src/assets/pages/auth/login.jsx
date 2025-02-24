import React, { Fragment } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import UserAuthForm from "../../components/elements/fragments/UserAuthForm";

const LoginPage = () => {

    return (
        <Fragment>
            <AuthLayout  ayout title="Login" type="login">
                <UserAuthForm title="Login" type={"login"} />
            </AuthLayout>
        </Fragment>
    )
}

export default LoginPage;