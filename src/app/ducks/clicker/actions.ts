import { Thunk } from "types/core";
import { StateWithClicks, ClicksState } from "./types";
import { StateWithSettings } from "ducks/settings/types";
import { selectCounter } from "./selectors";
import { UpdateClicksAction, UPDATE_CLICKS } from "./reducer";
import { selectLanguage } from "ducks/settings/selectors";
import { Language } from "types/i18n";

export function updateClicker(payload: Partial<ClicksState>): UpdateClicksAction {
    return { type: UPDATE_CLICKS, payload };
}

export function updateCounter(counter: number, language: string): UpdateClicksAction {
    return updateClicker({
        counter:
            language === Language.English
                ? counter - 1
                : counter + 1,
    });
}

export function updateClicker2(): Thunk<StateWithClicks & StateWithSettings, any> {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(updateCounter(selectCounter(state), selectLanguage(state)));
    };
}
