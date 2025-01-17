import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "Eventos Tech Floripa",
    description: "Todos os eventos cadastrados até agora!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header isUserLogged={false} />
            {children}
        </>
    );
}
