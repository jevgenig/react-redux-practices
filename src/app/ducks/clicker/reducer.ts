import { ClicksState } from "./types";
import { Action } from "types/core";

export const UPDATE_CLICKS = "clicks/UPDATE_CLICKS";
export type UpdateClicksAction = Action<typeof UPDATE_CLICKS, Partial<ClicksState>>;

const initialState: ClicksState = {
    counter: 0,
};

export type ClicksAction = UpdateClicksAction;
export function clicks(state: ClicksState = initialState, action: ClicksAction): ClicksState {
    switch (action.type) {
        case UPDATE_CLICKS:
            return { ...state, ...action.payload };
    }
    return state;
}
