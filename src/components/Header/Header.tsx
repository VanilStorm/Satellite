import React, { FC } from "react";
import style from "./style.module.css"

export const Header: FC = () => {
    return (
        <div className={style.header}>
            <h2>Dictionary</h2>
        </div>
    )
}