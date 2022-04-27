import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers/root";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;