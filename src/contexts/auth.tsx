import React, { useState } from 'react'

export const AppContext = React.createContext({} as any);

export const ContextWrapper: React.FC = (props) =>  {
	const [ store, setStore ] = useState({
		token: '',
	});
	const [ actions ] = useState({
		setToken: (token:string) => setStore({ ...store, token })
	});
	
	return (
		<AppContext.Provider value={{ store, actions }}>
			{props.children}
		</AppContext.Provider>
	);
}