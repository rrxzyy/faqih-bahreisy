import React from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import UserAuthForm from "../../components/elements/fragments/UserAuthForm";

function RegisterPage() {
    return (
        <div>
            <AuthLayout title="Register" type="register">
                <UserAuthForm type={"register"} />
            </AuthLayout>
        </div>
    );
}

export default RegisterPage;