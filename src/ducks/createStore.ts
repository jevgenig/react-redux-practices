import {
    combineReducers,
    compose,
    createStore as createReduxStore,
    ReducersMapObject,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { ThunkExtra } from "types/core";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface CreateStoreOptions {
    reducers: ReducersMapObject;
}
export function createStore({
    reducers,
}: CreateStoreOptions) {
    const transport = {};
    const reducer = combineReducers(reducers);
    const enhancers = composeEnhancers(
        applyMiddleware(
            thunk.withExtraArgument<ThunkExtra>({ transport }),
        ),
    );
    return createReduxStore(reducer, enhancers);
}
