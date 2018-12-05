import { SettingsState } from "./types";
import { UPDATE_SETTINGS, UpdateSettingsAction } from "./reducer";
import { Language } from "types/i18n";

export function updateSettings(payload: Partial<SettingsState>): UpdateSettingsAction {
    return { type: UPDATE_SETTINGS, payload };
}

export function setLanguage(language: Language): UpdateSettingsAction {
    return updateSettings({ language });
}
