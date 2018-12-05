import * as React from "react";
import { connect, MapStateToProps } from "react-redux";
import { click, click2 } from "./ducks/actions";
import { AppState } from "./ducks/types";
import { selectCounterLabel } from "./ducks/selectors";
import { setLanguage } from "ducks/settings/actions";
import { Language } from "types/i18n";
import { selectLanguage } from "ducks/settings/selectors";

export interface AppStateProps {
    label: string;
    language: Language;
}

export interface AppDispatchProps {
    onClick: () => void;
    onClick2: () => void;
    selectLanguage: (language: Language) => void;
}

export interface AppOwnProps { }

export type AppProps = AppStateProps
    & AppDispatchProps
    & AppOwnProps;

export class App extends React.Component<AppProps> {
    public render() {
        return (
            <div>
                Actions:
                <br />
                <button onClick={this.props.onClick}>Click</button>
                <br />
                <button onClick={this.props.onClick2}>Click2</button>
                <br />
                Languages:
                <br />
                {Object.values(Language).map(this.renderLanguage)}
                <br />
                {this.props.label}
            </div>
        );
    }

    private renderLanguage = (language: Language) => {
        return (
            <React.Fragment key={language}>
                <button
                    onClick={() => this.props.selectLanguage(language)}
                    style={{ border: this.props.language === language ? "1px solid red" : "" }}
                >
                    Select {language}
                </button>
                <br />
            </React.Fragment>
        );
    }

}

export interface ConnectAppOptions {
}

export function connectApp<TState extends AppState>(options: ConnectAppOptions) {
    const mapStateToProps: MapStateToProps<AppStateProps, AppOwnProps, TState> = state => ({
        label: selectCounterLabel(state),
        language: selectLanguage(state),
    });

    const dispatchProps: AppDispatchProps = {
        onClick: click,
        onClick2: click2,
        selectLanguage: setLanguage,
    };

    return connect<AppStateProps, AppDispatchProps, AppOwnProps>(
        mapStateToProps,
        dispatchProps,
    )(App);
}
