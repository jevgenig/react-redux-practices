import { StateWithSettings } from "ducks/settings/types";
import { StateWithClicks } from "./clicker/types";

export interface AppState extends
    StateWithSettings,
    StateWithClicks {
}
