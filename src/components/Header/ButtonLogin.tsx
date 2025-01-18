import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./LoginForm";

const ButtonLogin = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-purple-medium">Login</Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-dark border-none">
                <DialogHeader>
                    <DialogTitle className="text-center">Log In</DialogTitle>
                    <DialogDescription className="text-center">
                        Faça login para publicar e gerenciar meetups!
                    </DialogDescription>
                    <LoginForm/>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ButtonLogin;
