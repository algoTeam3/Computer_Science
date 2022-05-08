# 동기 & 비동기

#### 동기(Synchronous)
<img src="https://user-images.githubusercontent.com/60870438/166162599-87c018dc-0fa2-45d3-81a5-c4129355d487.png" width="50%">

- A 함수가 B 함수를 호출할 때, B 함수의 결과를 A 함수가 기다렸다가 처리한다. 
- Thread1이 작업을 시작하고 Task1이 끝날 때 까지 기다렸다가 return 후 Task2를 시작한다. 
- 작업 요청 했을 때 요청의 결과값(return)을 직접 받는다. 
- 요청의 결과값이 return과 동일하다. 
- 호출한 함수가 작업 완료를 기다린다. 


#### 비동기(Asychronous)
<img src="https://user-images.githubusercontent.com/60870438/166162685-bf7e596d-3071-4619-ba89-367f4fdf8e77.png" width="50%">

- A 함수가 B 함수를 호출 할 때, B 함수의 결과를 B 함수가 처리하는 것(callback)
- Thread1이 작업을 시작하고 완료를 기다리지 않고 Thread1은 다른 일을 처리할 수 있다.
- 작업 요청했을 때 요청의 결과값(return)을 기다리지 않고 간접적으로 받는다.
- 요청의 결과값이 return과 다를 수 있다. (시간차 같은)
- 요청 작업은 별도의 스레드에서 실행한다.
- 콜백을 통한 처리가 비동기 처리라고 할 수 있다.
- 호출된 함수(callback 함수)가 작업완료를 신경쓴다.


# Blocking & Non-Blocking
이는 주로 IO의 읽기, 쓰기에서 사용된다.

#### Blocking
- A 함수가 B를 호출 할 때, B 함수가 자신의 작업이 종료되기 전까지 A 함수에게 제어권을 돌려주지 않는다.
- 요청한 작업을 마칠 때까지 계속 대기한다.
- return 값을 받아야 끝난다.
- Thread 관점으로 본다면, 요청한 작업을 마칠 때까지 계속 대기하며 return 값을 받을 때까지 한 Thread를 계속 사용/대기 한다.

#### Non-Blocking
- A 함수가 B 함수를 호출할 때, B 함수가 제어권을 바로 A 함수에게 넘겨주어 B 함수가 실행되는 동안 A 함수가 다른 일을 할 수 있다.
- 요청한 작업을 즉시 마칠 수 없다면 즉시 return(그냥 끊기)한다.
- Thread 관점으로 본다면, 하나의 Thread가 여러개의 IO를 처리할 수 있다.

<br>

>두 그룹의 차이점은? 
>관심사가 다르다.

<br>

1. blocking & non-blocking: 호출되는 함수가 바로 return 하느냐 마느냐
  - non-blocking: 호출된 함수가 바로 return 해서 호출한 함수에게 제어권을 넘겨주고, 호출한 함수가 바로 다른 일을 할 수 있다.
  - blocking: 호출된 함수가 자신의 작업을 모두 마칠 때까지 호룿한 함수에게 제어권을 넘겨주지 않고 대기하게 만든다.

2. synchronous & asynchronous: 호출되는 함수의 작업 완료를 누가 신경쓰는가
  - asynchronous: 호출되는 함수에게 callback을 전달해서 호출되는 함수의 작업이 완료되면 호출되는 함수가 전달받은 callback을 실행하고, 호출한 함수는 작업의 완료 여부를 신경쓰지 않는다.
  - synchronous: 호출하는 함수가 호출되는 함수의 작업 완료 후 return을 기다리거나 호출되는 함수로부터 바로 return 받더라도 작업 완료 여부를 호출한 함수가 확인한다.

<br>

#### 각자의 역할
<img src="https://user-images.githubusercontent.com/60870438/166163072-142ba9ae-c8c3-42f1-ac4a-b3883179f0eb.png" width="50%">
<br>


#### 1) blocking + Synchronous, non-blocking + Asynchronous
<img src="https://user-images.githubusercontent.com/60870438/166163109-b4cc88a8-b29a-49ff-9e48-579e630eb9fb.png" width="50%">

1. blocking + Synchronou
  결과가 완료될 때까지 기다렸다가 return 값으로 결과를 전달한다.
2. non-blocking + Asynchronous
  작업 요청을 받아서 별도의 프로세서에서 진행하게 하고 바로 return(작업 끝)한다.
  결과는 별도의 작업 후 간접적으로 전달(callback)한다.
  
#### 2) non-blocking + Synchronous
<img src="https://user-images.githubusercontent.com/60870438/166163188-acc63c7f-1fff-4b25-89ad-3a9469b59268.png" width="50%">

1. 결과가 없다면 바로 return(그냥 완료) 한다,
2. 결과가 있다면 바로 결과를 return 한다.
즉, 결과가 생길 때까지 계속 완료되었는지 확인한다.
- B 함수가 바로 제어권을 돌려줘서 A 함수는 다른 작업을 수행할 수 있지만 A 함수가 직접적으로 B 함수의 결과값이 필요하므로 B 함수의 종료를 반복적으로 확인한다.

#### 3) blocking + Asynchronous
<img src="https://user-images.githubusercontent.com/60870438/166215115-1aaf87ac-1017-4792-aac5-52a5d73a15b1.png" width="50%">

1. 호출되는 함수가 바로 return하지 않고, 호출하는 함수는 작업 완료 여부를 신경쓰지 않는다.
2. Node.js와 MySQL 조합에서 사용된다.

--------

  #### 예시
    - 전화로 즉답 받기: 동기
    - 이메일로 보내고(보냄 = 완료 = return) 답이 언제올 지 모른다: 비동기
    - 상대방이 전화를 받을 때 까지 연결해 기다리기: 동기 + 블로킹
    - 상대방이 전화받지 않으면 조금 있다가 여러번 시도해 연결 성공: 동기 + 논블로킹

참고: https://velog.io/@wonhee010/%EB%8F%99%EA%B8%B0vs%EB%B9%84%EB%8F%99%EA%B8%B0-feat.-blocking-vs-non-blocking
참고: https://baek-kim-dev.site/38
