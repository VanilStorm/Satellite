import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { FC } from "react";
import style from "./style.module.css"
import { ISearchingWord } from "../../types/dictionary/dictionaryTypes";
import { useActions } from "../../hooks/useActions";

interface ContentProps {
    word: ISearchingWord[];
}


export const Content: FC<ContentProps> = ({word}) => {
    const navigate = useNavigate();
    const {deleteWord} = useActions();

    if (!word[0]) {
        return null;
    }



    const phonetics = word[0].phonetics;
    const phonetic = word[0].phonetic;
    const wordText = word[0].word;
    const meanings = word[0].meanings;
    const source = word[0].sourceUrls[0];
    const license = word[0].license;

    return (
        <div className={style.content}>
            <div>
                <div className={style.item}>
                    <b>Word: </b> `{wordText}`
                </div>

                <span>
                    {phonetics.map((item, id) => {
                        return (
                            <div key={id} className={style.itemAudio}>
                                {item.audio
                                ?
                                    <audio key={id} controls>
                                        <source src={item.audio}/>
                                    </audio>
                                :
                                null}
                            </div>
                        )
                    })}
                </span>
            </div>
            <div className={style.item}>
                {phonetic ? <span><b>Phonetic: </b> {phonetic}</span> : null}
            </div>
            <div>
                <div className={style.item}>
                    {phonetics[0].text || phonetics[1].text ? <b>Text: </b> : null}
                    {phonetics.map((item, id) => {
                        return (
                            <span key={id}>
                                {item.text
                                ?
                                    <span> {item.text}</span>
                                :
                                null}
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className={style.item}>
                {meanings[0].partOfSpeech ? <b>Part of speech: </b> : null}
                {meanings.map((item, id) => {
                    return (
                        <span key={id}>
                            {item.partOfSpeech
                            ?
                            <span> {item.partOfSpeech}</span>
                            :
                             null}
                        </span>
                    )
                })}
            </div>
            <div className={style.item}>
                {meanings[0].definitions.length ? <b>Meanings: </b> : null}
                {meanings.map((item, id) => {
                    return (
                        <span key={id}>
                            {item.partOfSpeech
                            ?
                            <span> {item.definitions.map((item, id) => <span key={id}> {item.definition}</span>)}</span>
                            :
                             null}
                        </span>
                    )
                })}
            </div>
            <div className={style.item}>
                {word[0].sourceUrls.length ? <span><b>Source: </b> <span><a href={source}>{source}</a></span></span> : null}
            </div>
            <div className={style.item}>
                {license.name && license.url
                ?
                <div>
                    <div>
                        <b>License name: </b> <span>{license.name}</span>
                    </div>
                    <div>
                        <b>License url: </b> <span><a href={license.url}>{license.url}</a></span>
                    </div>
                </div>
                : null}
            </div>

            <Button onClick={() => {
                deleteWord();
                navigate('/');
            }}
                    style={{margin: '1rem'}}
                    color="primary" variant="contained"
                    size="medium">
                Back
            </Button>

        </div>
    );
}

