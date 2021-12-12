import { useEffect, useRef } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';
import './Home.css';
import { Button } from '../../components/Button/Button';

export const Home = () => {
  const [state, actions] = useCounterContext();
  const styles = useRef({
    titleStyle: {
      fontSize: "20px",
      backgroundColor: "#cecece",
      fontWeight: "bold",
    },

    buttonStyle1: {
      fontSize: "14px",
      border: "1px solid red",
      color: "red",
      margin: "10px",
      cursor: "pointer",
      boxShadow: "0 3px 6px rgba(255, 0, 0, .5)"
    },

    buttonStyle2: {
      fontSize: "14px",
      border: "1px solid blue",
      color: "blue",
      margin: "10px",
      cursor: "pointer",
      boxShadow: "0 3px 6px rgba(0, 0, 255, .5)"
    },

    buttonStyle3: {
      fontSize: "14px",
      border: "1px solid blue",
      color: "blue",
      margin: "10px",
      cursor: "pointer",
      boxShadow: "0 3px 6px rgba(0, 255, 0, .5)"
    }
  });

  const handleAsyncIncreaseError = () => {
    actions.async_increase_error().then((r) => console.log("Async Increase Done")).catch((e) => console.log(e.name, ":", e.message));
  }
  console.log(state);

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div style={{textAlign: "center", maxWidth: "300px"}}>
      <h1>{ state.loading ? 'LOADING' : 'COUNTER = ' + state.counter}</h1>
      <Button handleClick={actions.increase} customStyle={styles.current.buttonStyle1}>
        INCREASE
      </Button>
      <Button handleClick={actions.decrease} customStyle={styles.current.buttonStyle2}>
        DECREASE
      </Button>
      <Button handleClick={actions.reset}>
        RESET
      </Button>
      <Button handleClick={() => actions.set_counter(100)}>
        SET COUNTER
      </Button>
      <Button handleClick={actions.async_increase_start}>
        ASYNC INCREASE
      </Button>
      <Button handleClick={handleAsyncIncreaseError}>
        ERROR
      </Button>
    </div>
  );
}
