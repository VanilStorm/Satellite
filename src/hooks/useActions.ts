import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as DictionaryActionCreators from "../store/actions/dictionary"


export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(DictionaryActionCreators, dispatch);
}