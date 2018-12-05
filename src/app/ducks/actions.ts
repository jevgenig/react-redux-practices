import { Thunk } from "types/core";
import { updateClicker2, updateCounter } from "./clicker/actions";
import { AppState } from "./types";
import { selectCounter } from "./clicker/selectors";
import { selectLanguage } from "ducks/settings/selectors";

export function click(): Thunk<AppState, any> {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(updateCounter(selectCounter(state), selectLanguage(state)));
    };
}

export function click2(): Thunk<AppState, any> {
    return updateClicker2();
}
