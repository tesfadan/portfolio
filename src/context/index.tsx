import React, { createContext, ReactNode, useReducer } from 'react';

export const initialState = {
    darkMode: false,
    changeTheme: () => {}
}

export const Context = createContext(initialState);

const actions = {
    SET_THEME: "SET_THEME"
};

function reducer(state: any, action: { type: any; value: any; }) {
    switch (action.type) {
        case actions.SET_THEME:
            return { ...state, darkMode: action.value };
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
