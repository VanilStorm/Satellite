import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { ISearchingWord } from "../../types/dictionary/dictionaryTypes";
import { Content } from "../Content/Content";
import { Loader } from "../Loader/Loader";

export const ParamSearch: FC = () => {
    const [isError, setError] = useState<boolean>(false);

    const param = useParams();

    useEffect(() => {
        fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const {setWord} = useActions();
    const {searchingWord, loading} = useTypeSelector(state => state.dictionary);

    async function fetch() {
        try {
            const response = await axios.get<ISearchingWord[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${param.word}`);
            setWord(response.data);
        } catch (error) {
            setError(true);
        }
    }

    if (loading) {
        return <Loader/>
    }

    if (isError) {
        return <Navigate to='/noSuchWord'/>
    }

    return <Content word={searchingWord}/>;
}