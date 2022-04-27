import { TextField } from "@mui/material";
import React, { FC, useState } from "react";
import { Navigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { Content } from "../Content/Content";
import { Loader } from "../Loader/Loader";

export const InputSearch: FC = () => {
    const [value, setValue] = useState<string>('');
    const {searchingWord, error, loading} = useTypeSelector(state => state.dictionary);

    const {fetchWord, errorRemove} = useActions();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    }

    const keyPressHandler = (e: React.KeyboardEvent): void => {
      if (e.key === 'Enter') {
        fetchWord(value);
        setValue('');
      }
    }

    if (loading) {
      return <Loader/>
    }

    if (error) {
      errorRemove();
      return <Navigate to="/noSuchWord"/>
    }

    if (searchingWord.length) {
      return <Content word={searchingWord}/>
    }

    return (
      <TextField fullWidth label="Search" id="fullWidth" value={value} onChange={onChange} onKeyPress={keyPressHandler}/>
    );
}
