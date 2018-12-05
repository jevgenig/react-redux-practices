import { StateWithClicks } from "./types";

export function selectCounter(state: StateWithClicks): number {
    return state.clicks.counter;
}
