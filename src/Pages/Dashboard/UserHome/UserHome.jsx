import useAuth from "../../../hooks/useAuth";

const UserHome = () => {

    const { user } = useAuth();

    return (
        <div className="w-4/5 mx-auto">
            <h2 className="text-3xl mt-10 font-semibold">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back?'
                }
            </h2>
        </div>
    );
};

export default UserHome;