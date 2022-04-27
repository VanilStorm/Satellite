import { DictionaryActions, DictionaryActionsTypes, IDictionaryState } from "../../types/dictionary/dictionaryTypes"

const initialState: IDictionaryState = {
    searchingWord: [],
    loading: false,
    error: null
}

export const dictionaryReducer = (state = initialState, action: DictionaryActions): IDictionaryState => {
    switch(action.type) {
        case DictionaryActionsTypes.FETCH_WORD: {
            return {...state, loading: true}
        }

        case DictionaryActionsTypes.FETCH_WORD_ERROR: {
            return {...state, loading: false, error: action.payload}
        }

        case DictionaryActionsTypes.FETCH_WORD_SUCCESS: {
            return {...state, loading: false, searchingWord: action.payload}
        }

        case DictionaryActionsTypes.ERROR_REMOVE: {
            return {...state, error: action.payload}
        }

        case DictionaryActionsTypes.SET_WORD: {
            return {...state, searchingWord: action.payload}
        }

        case DictionaryActionsTypes.DELETE_WORD: {
            return {...state, searchingWord: []}
        }

        default: {
            return state;
        }
    }
}