import P from 'prop-types';
import { createContext, useState, useContext, useReducer, useRef } from "react";
import { buildActions } from './build-actions';
import { reducer } from './reducer';

//É exportado pois pode ser usado no reducer
export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext(); //Poderia passar aqui no initialState se não tivesse o CounterContextProvider ali em baixo

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>
}

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context); //poderia ser [context] se não tivesse [...context] no return

  if(typeof context === 'undefined'){
    throw new Error('You have to use useCounterContext inside of <CounterContextProvider />');
  }

  return [...context]; //usado pra fazer uma checagem e lançar erros mais amigáveis
}
