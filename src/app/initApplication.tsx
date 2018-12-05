import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "ducks/createStore";
import { connectApp } from "./App";
import { clicks } from "./ducks/clicker/reducer";
import { settings } from "ducks/settings/reducer";

export interface InitApplicationOptions {

}
export async function initApplication(options: InitApplicationOptions) {
    return new Promise<React.ReactElement<{}>>(resolve => {
        const store = createStore({
            reducers: { settings, clicks },
        });
        const AppContainer = connectApp({});

        resolve(
            <Provider store={store}>
                <AppContainer />
            </Provider>,
        );
    });
}
