import { ILicense, IMeanings, IPhonetics } from "./searchingWordInterface";

export enum DictionaryActionsTypes {
    FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS',
    FETCH_WORD_ERROR = 'FETCH_WORD_ERROR',
    FETCH_WORD = 'FETCH_WORD',
    ERROR_REMOVE = 'ERROR_REMOVE',
    SET_WORD = 'SET_WORD',
    DELETE_WORD = 'DELETE_WORD'
}

export interface IDictionaryState {
    searchingWord: ISearchingWord[];
    loading: boolean;
    error: null | string;
}

export interface ISearchingWord {
    word: string;
    phonetic?: string;
    phonetics: IPhonetics[];
    meanings: IMeanings[];
    sourceUrls: string;
    license: ILicense;
}


interface FetchWordAction {
    type: DictionaryActionsTypes.FETCH_WORD;
}

interface FetchWordActionError {
    type: DictionaryActionsTypes.FETCH_WORD_ERROR;
    payload: string;
}

interface FetchWordActionSuccess {
    type: DictionaryActionsTypes.FETCH_WORD_SUCCESS;
    payload: ISearchingWord[];
}

interface ErrorRemove {
    type: DictionaryActionsTypes.ERROR_REMOVE;
    payload: string;
}

interface SetWord {
    type: DictionaryActionsTypes.SET_WORD;
    payload: ISearchingWord[];
}

interface DeleteWord {
    type: DictionaryActionsTypes.DELETE_WORD;
}

export interface IParam {
    word: string;
}

export type DictionaryActions = FetchWordAction | FetchWordActionError
 | FetchWordActionSuccess | ErrorRemove | SetWord | DeleteWord;