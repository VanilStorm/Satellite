import { Container } from "@mui/material";
import React, { FC } from "react";
import { Header } from "../Header/Header";

interface MainLayoutProps {
    children: React.ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            <Container maxWidth="sm">
                {children}
            </Container>
        </>
    )
}