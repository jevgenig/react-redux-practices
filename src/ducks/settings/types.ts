import { Language } from "types/i18n";

export interface SettingsState {
    language: Language;
}

export interface StateWithSettings {
    settings: SettingsState;
}
