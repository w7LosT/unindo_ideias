import * as actions from './action-types';

//Recebe a função dispatch do state lá no useCounterContext e chama de acordo com a função
export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actions.INCREASE }),
    decrease: () => dispatch({ type: actions.DECREASE }),
    reset: () => dispatch({ type: actions.RESET }),
    set_counter: (valor) => dispatch({ type: actions.SET_COUNTER, payload: { counter: valor } }),
    async_increase_start: () => asyncIncreaseFn(dispatch),
    // ascyn_increase_end: () => dispatch({ type: actions.ASYNC_INCREASE_END }),
    async_increase_error: () => asyncIncreaseErrorFn(dispatch),
  };
};

const asyncIncreaseFn = async (dispatch) => {
  dispatch({ type: actions.ASYNC_INCREASE_START });

  return await new Promise((r) => {
    setTimeout(() => {
      dispatch({ type: actions.ASYNC_INCREASE_END });
      r("Async Increase Done");
    }, 2000);
  });
}

const asyncIncreaseErrorFn = async (dispatch) => {
  dispatch({ type: actions.ASYNC_INCREASE_START });

  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actions.ASYNC_INCREASE_ERROR });
      reject(new Error("Async Increase Rejected"));
    }, 2000);
  });
};
