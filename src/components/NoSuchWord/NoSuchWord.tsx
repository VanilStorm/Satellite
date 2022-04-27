import { Button } from "@mui/material";
import React, { FC } from "react"
import { useNavigate } from "react-router-dom";


export const NoSuchWord: FC= () => {

    interface IStyles {
        [key:string]: string;
    }

    const inLineStyles: IStyles = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '20%',
        fontFamily: 'Gill Sans',
        textTransform: 'uppercase',
        border: 'none',
        color: 'black'
    }

    const navigate = useNavigate();

    return (
        <div style={{...inLineStyles}}>
            <h2>There is no such word!</h2>

            <Button onClick={() => navigate('/')} style={{marginTop: '2rem'}} color="primary" variant="contained" size="medium">
                Back
            </Button>
        </div>
    )
}