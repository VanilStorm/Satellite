import { CircularProgress } from "@mui/material";
import React, { FC } from "react";


export const Loader: FC = () => {
    interface IStyles {
        [key:string]: string;
    }

    const inLineStyles: IStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'green',
    }

    return (
        <div style={{...inLineStyles}}>
            <CircularProgress color="inherit"/>
        </div>
    )
}