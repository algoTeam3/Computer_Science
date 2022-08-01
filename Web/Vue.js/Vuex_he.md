# Vuex

> Vue.js의 상태관리 라이브러리

### 상태관리🔍

상태관리는 **여러 컴포넌트 간의 데이터 전달과 이벤트 통신을 한 곳에서 관리하는 패턴**이다.

### 왜 필요할까❓

컴포넌트 기반 프레임워크에서는 작은 단위로 쪼개진 여러 개의 컴포넌트로 화면을 구성함에 따라 컴포넌트 간의 통신이나 데이터 전달을 좀 더 유기적으로 관리할 필요성이 생긴다.

- **기존 문제점**

  - `props`, `event emit` 사용을 통해 중간에 거쳐야 하는 컴포넌트가 많음
  - 이를 피하기 위해 Event Bus를 사용하여 컴포넌트 간 데이터 흐름 파악이 어려움

  ![문제](https://imghub.insilicogen.com/media/photos/1_7vrsSz7.png)

  ### Vuex 사용 프로세스

  ![Vuex 사용 프로세스](https://imghub.insilicogen.com/media/photos/2_Hj3h9ti.png)

<br>

## Vuex 흐름도

![흐름도](https://joshua1988.github.io/images/posts/web/vuejs/vuex-1/vuex-diagram.png)

1️⃣ Vue Component에서 `dispatch()`로 Actions 실행  
2️⃣ Actions은 외부 Api를 호출하는 등 비동기 로직을 처리  
3️⃣ 비동기 결과를 `commit()`를 통해 Mutations을 실행  
4️⃣ Mutations에서 State 변경  
5️⃣ Getter를 이용하여 다시 Vue Compoent에 바인딩되어 화면 갱신

<br>

## 사용

1️⃣ 설치 : `npm install vuex`  
2️⃣ 추가 : Vue.use()

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
```

<br>

## Vuex Helper 함수

> Vuex 기술 요소들을 컴포넌트에서 더 편하게 쓸 수 있도록 도와주는 API

`this.$store.(속성명)`을 사용하지 않고 접근이 가능하다.  
Spread Operator (...)와 함께 사용한다.

**[computed 권장]**  
▪ state → mapState  
▪ getters → mapGetters

**[methods에 넣기]**  
▪ mutations → mapMutations  
▪ actions → mapActions

<br>

## vuex-persistedstate

> Vuex는 새로고침 시, Store들의 상태들이 기본 값으로 초기화

`vuex-persistedstate`  
Vuex에 저장되는 값들을 웹 브라우저의 저장소에 저장하며, 새로고침 시 그 값이 존재하면 저장소에서 값을 가져와 사용되는 원리

- 경로 : src/store/index.js

```js
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import userStore from "@/store/modules/userStore.js";

const store = new Vuex.Store({
  modules: {
    userStore,
  },
  plugins: [
    createPersistedState({
      storage: sessionStorage,
      paths: ["userStore"],
    }),
  ],
});

export default store;
```

<br>

## 참고

> https://joshua1988.github.io/web-development/vuejs/vuex-start/  
> https://velog.io/@yjyoo/vue.js-Vuex-%EC%A0%95%EB%A6%AC  
> https://cjw-awdsd.tistory.com/39  
> http://www.incodom.kr/VueJS/Vuex
