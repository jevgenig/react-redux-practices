import { StateWithSettings } from "./types";
import { Language } from "types/i18n";

export function selectLanguage(state: StateWithSettings): Language {
    return state.settings.language;
}
