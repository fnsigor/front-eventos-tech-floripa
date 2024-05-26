import Navigation from "./components/Navigation";

export default function VisitorPagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}
