import { selectCounter } from "./clicker/selectors";
import { selectLanguage } from "ducks/settings/selectors";
import { AppState } from "./types";

export function selectCounterLabel(state: AppState): string {
    return `Language is: ${selectLanguage(state)}, with clicks: ${selectCounter(state)}`;
}
