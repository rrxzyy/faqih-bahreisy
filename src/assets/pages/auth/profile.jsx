import { useLogin } from '../../hooks/useLogin';

function profilePage() {
    const username = useLogin();
    return (
        <div>
            <p>{username}</p>
        </div>
    )
}

export default profilePage;