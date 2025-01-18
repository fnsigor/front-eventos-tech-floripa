
import ButtonLogout from "./ButtonLogout";
import ButtonLogin from "./ButtonLogin";


interface IProps {
    isUserLogged?: boolean;
}

const Navigation = ({ isUserLogged }: IProps) => {
    return (
        <header className="mb-20 px-9 py-6 border-b-solid border-b-gray-medium border-b">
            <nav className="flex justify-between items-center">
                <h1 className="text-lg">Eventos Tech Floripa</h1>
                {isUserLogged ? <ButtonLogout/> : <ButtonLogin/>}
            </nav>
        </header>
    );
};

export default Navigation;
