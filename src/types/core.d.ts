import { Action as ReduxAction } from "redux";

export interface Signal<TType> extends ReduxAction<TType> { }

export interface Action<TType, TPayload> extends Signal<TType> {
    payload: TPayload;
}

export interface GetState<TState> {
    (): TState;
}

export interface Dispatch<
    TAction extends (Action<any, any> | Signal<any>),
    TState
> {
    (action: TAction | Thunk<TState, TAction>): void;
}

export interface ThunkExtra {
    transport: any;
}

export interface Thunk<
    TState,
    TAction extends (Action<any, any> | Signal<any>
)> {
    (
        dispatch: Dispatch<TAction, TState>,
        getState: GetState<TState>,
        extra: ThunkExtra,
    ): void;
}

export interface AsyncThunk<
    TState,
    TAction extends (Action<TActionType, TActionPayload> | Signal<TActionType>),
    TActionType,
    TActionPayload,
> {
    (dispatch: Promise<Dispatch<TAction, TState>>, getState: GetState<TState>): void;
}
