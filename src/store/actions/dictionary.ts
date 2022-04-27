
import axios from "axios"
import { Dispatch } from "react"
import { DictionaryActions, DictionaryActionsTypes, ISearchingWord } from "../../types/dictionary/dictionaryTypes"


export const fetchWord = (word: string) => {
    return async (dispatch: Dispatch<DictionaryActions>) => {
        try {
            dispatch({type: DictionaryActionsTypes.FETCH_WORD})
            const response = await axios.get<ISearchingWord[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            dispatch({type: DictionaryActionsTypes.FETCH_WORD_SUCCESS, payload: response.data});
        } catch (error) {
            dispatch({type: DictionaryActionsTypes.FETCH_WORD_ERROR, payload: 'Error'});
        }
    }
}

export const errorRemove = () => {
    return  (dispatch: Dispatch<DictionaryActions>) => {
        dispatch({type: DictionaryActionsTypes.ERROR_REMOVE, payload: ''})
    }
}

export const setWord = (word: ISearchingWord[]) => {
    return  (dispatch: Dispatch<DictionaryActions>) => {
        dispatch({type: DictionaryActionsTypes.SET_WORD, payload: word })
    }
}

export const deleteWord = () => {
    return  (dispatch: Dispatch<DictionaryActions>) => {
        dispatch({type: DictionaryActionsTypes.DELETE_WORD})
    }
}