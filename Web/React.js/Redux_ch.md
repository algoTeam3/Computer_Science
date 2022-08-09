# 상태 관리가 왜 필요해?

### 상태(State) : React 생명주기에 따라 Component 안에서 관리되는 데이터
  
```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {date: new Date()}; 
  }
  
  render() {
    return (
        <div>
          <h1>Hello World!</h1>
          <h2>It's {this.state.data.toLocaleTimeString()}.</h2>
        </div>
    );
  }
}
```

<br/>

### Props: 부모 컴포넌트로 부터 전달받은 state

```javascript
import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
    return(
        <div className={`classes.card ${props.className}`}>
            {props.children}
        </div>
    )
}
```

<br/>

### 컴포넌트간 데이터 공유

- 자식 컴포넌트들 간의 다이렉트 전달 불가능
- 부모 컴포넌트에서 데이터를 받는 것만 가능
- 필요한 데이터를 사용하기 위한 자식 컴포넌트가 많아진다면 상태 관리 복잡
- 상태를 상위에서 계속 내려받아야 한다 => Props Drilling

![드릴링](https://miro.medium.com/max/438/1*_OmvHiizMacW5wod9F4sLA.png)

<br/>

### 상태 관리 라이브러리를 사용하는 이유

1. 전역 상태 저장소 제공
2. Props drilling 해결
   - 필요한 데이터를 사용하기 위해 여러 컴포넌트를 거치는 과정을 전역 상태 저장소로 접근하여 해결


<br/>

### Redux를 사용하는 이유

- 상태 관리 외의 다양한 기능 제공
- 다양한 node.js 프레임워크에 사용 가능한 라이브러리
- Context API의 성능 이슈를 해결해주는 상위호환

![이유](https://velog.velcdn.com/images%2Fcada%2Fpost%2F2fe54f52-a384-444a-88ad-05fd2d10028c%2Fdas.PNG)

<br/>

### Redux 원칙

1. Store라는 단일 데이터 저장소만 사용한다
2. State는 읽기 전용이다. Action이라는 객체에서만 변경할 수 있다.
3. State 변경은 순수 함수로만 가능하다.

<br/>

![상태관리](https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/%E1%84%85%E1%85%B5%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%B3-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5-%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8.png?w=919&ssl=1)

### Store  Action  Reducer

- Store : 상태 관리 저장 공간
  - 컴포넌트 상태 정보 필요시 접근
- Action : 앱에서 Store에 운반할 데이터
  - 자바스크립트 객체 형식
- Reducer : Action을 전달 받아 Store의 State를 업데이트
  - dispatch() 메소드를 사용

<br/>

```javascript
const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
```

> subscribe : action이 dispatch될 때 함수 호출


![ㅁㄴㅇㄹ](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/29c0231d-c9a1-47ab-936d-0f158ad7d322/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220809T005650Z&X-Amz-Expires=86400&X-Amz-Signature=b6053b556659f27039384863aa805faa9e879f5607138ae36edbe991ff805396&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

<br/>

### Redux hooks를 사용하여 구현

- useDispatch : state 업데이트를 위한 훅
- useSelector : Store에서 state값 가져오기 위한 훅

```javascript
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrementHadler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHadler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

- store의 값을 사용하기 위해 Provider에 store를 설정해줘야합니다.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```


<br/>

### Redux-toolkit

- action 설정, 다수의 store를 관리하기 위한 redux 라이브러리

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
```

<br/>


# 참조

- [Redux](https://hanamon.kr/redux%eb%9e%80-%eb%a6%ac%eb%8d%95%ec%8a%a4-%ec%83%81%ed%83%9c-%ea%b4%80%eb%a6%ac-%eb%9d%bc%ec%9d%b4%eb%b8%8c%eb%9f%ac%eb%a6%ac/)
- [redux docs](https://redux.js.org/introduction/getting-started)
- [redux란](https://mjn5027.tistory.com/33)
