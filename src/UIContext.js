import React, { createContext } from "react";

const UIContext = createContext({
	navbar_collapse: false,
});

export const { Provider, Consumer } = UIContext;
