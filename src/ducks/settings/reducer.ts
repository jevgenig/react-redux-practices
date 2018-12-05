import { SettingsState } from "./types";
import { Action } from "types/core";
import { Language } from "types/i18n";

export const UPDATE_SETTINGS = "settings/UPDATE_SETTINGS";
export type UpdateSettingsAction = Action<typeof UPDATE_SETTINGS, Partial<SettingsState>>;

const initialState: SettingsState = {
    language: Language.English,
};

export type SettingsAction = UpdateSettingsAction;
export function settings(state: SettingsState = initialState, action: SettingsAction): SettingsState {
    switch (action.type) {
        case UPDATE_SETTINGS:
            return { ...state, ...action.payload };
    }
    return state;
}
