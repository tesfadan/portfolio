import React, { createContext, ReactNode, useReducer } from 'react';

type State = {
    darkMode: boolean;
}

type ContextValue = State & {
    changeTheme: () => void;
}

type Action = {
    type: "SET_THEME";
    value: boolean;
}

export const initialState: State = {
    darkMode: false
}

export const Context = createContext<ContextValue>({
    ...initialState,
    changeTheme: () => {}
});

const actions = {
    SET_THEME: "SET_THEME"
} as const;

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case actions.SET_THEME:
            return { ...state, darkMode: action.value };
        default:
            return state;
    }
}

export function Provider({ children } : {children: ReactNode}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        darkMode: state.darkMode,
        changeTheme: () => {
            dispatch({ type: actions.SET_THEME, value: !state.darkMode });
        }
    };
    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    );
}
