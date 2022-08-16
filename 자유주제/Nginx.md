# Why Nginx

### Nginx vs apache server

```
Nginx란?
Nginx는 웹서버로 리버스 프록시, 로드밸런서, http cache로 쓰일 수 있는 소프트웨어
요청에 응답하기 위해 이벤트 기반 구조 채택
=> 현재 웹서버의 1등!
```

#### 🎈 질문

- 이벤트 기반 구조란?
- apache Server도 웹서버인데 차이점은?

<br><br><br>

### Apache Server

<img src="https://user-images.githubusercontent.com/60870438/183512136-d14fd33d-708a-422e-8927-e4e437fe70a6.png" width=70%>

```
1. 프로세스 기반 접근 방식: 하나의 스레드가 하나의 요청 처리
2. 매 요청마다 스레드 생성, 리소스 많이 (멀티 스레드)
```


- 1995년도
- request가 들어오면 커넥션을 위해 프로세스 생성
- 즉, 새로운 클라이언트의 요청마다 프로세스 생성 (== unix의 os 네트워크 커넥션 모델 형성 과정)
- 그런데 프로세스를 새로 생성하는 건 시간이 오래 걸린다.

💡 그래서 프로세스를 미리 만들어두는 Prefork 방식 사용
- 새로운 클라이언트의 요청이 들어오면 만들어둔 프로세스 사용
- 모든 프로세스가 할당되었다면 추가로 생성

```
✅ 장점: 개발하기 쉽다.
유용한 모듈을 만들어 사용하면서 빠르게 서버에 적용시킬 수 있게 되었다.
또한, 확장성이 좋아 request와 response를 하나의 서버에서 처리할 수 있다.

웹 서버 자체 내에서 동적 컨텐츠 처리 가능
```

- 1999년
- 인터넷 트래픽이 계속해서 증가하는 상황
- 서버에 동시에 연결되는 커넥션이 많아졌을 때, 커넥션을 형성하지 못하게됨 => C10K(connection 10000개일 때 문제 발생)

<br>
<br>

🎈 동시에 연결된 커넥션 VS 초당 요청 처리 개수

|동시에 연결된 커넥션|초당 요청 처리 개수|
|---|---|
|요청을 처리하기 위해 서버가 한 시점에 얼마나 많은 클라이언트와 커넥션을 형성하고 있는가|Server가 얼마나 빨리 요청을 처리할 수 있는가|

- 하나의 클라이언트는 하나의 커넥션을 사용해 여러 요청을 보낼 수 있다.
- 커넥션을 긴 시간 유지될 수 있다. (커넥션 형성에 여러 절차가 있기 때문)
- 그래서 각 요청마다 커넥션을 만들기에 느리고 비효율적.
- 그래서 커넥션을 새로 만들기 보다는 이미 만들어진 커넥션을 재활용하자!
- http 헤더에 keep alive 존재. 해당 시간만큼 커넥션을 유지한다.


- 클라이언트가 많아지면 커넥션의 수도 많아지고 동시 커넥션 수가 만 단위가 넘어가면 서버가 더 이상 커넥션을 생성하지 못한다.
- 하드웨어는 OK, Apache Server의 문제

#### 🎈 아파치 서버의 문제
- 아파치 서버는 커넥션 생성 -> 프로세스 할당. => 메모리 부족
- 여러 모듈로 인해 프로세스의 리소스 사용 => 무거운 프로그램
- 커넥션이 증가하면서 Context switching이 반복해 생기면서 CPU 부하
- 구조적 한계

<br><br><br>

### NginX 등장

- Apache Server 보완. 새로운 구조 채택
- 초창기에는 웹서버지만 아파치 서버 완전 대체가 아닌 함께 사용할 목적으로 만들어짐.

#### 초반 사용법

- Apache 앞에 NginX를 두고 수많은 동시 커넥션을 대신 유지해 부하 감소.
- Nginx는 웹서버로 정적 파일의 요청은 스스로, 동적파일 요청 받았을 때 아파치 서버와 커넥션 생성
- 아파치 서버를 커넥션 유지가 아닌 로직 처리에 사용.

#### 🎈 Nginx는 어떻게 많은 connection을 처리할까?

```
만들어지는 프로세스의 개수에 달려있다!
```

<br><br>

### Nginx

<img src="https://user-images.githubusercontent.com/60870438/183511638-a7172bc7-a888-4b9a-9318-5b2fbc8724c1.png" width=70%>

```
1. 이벤트 중심 접근 방식: 하나의 스레드 내에서 여러 요청 처리
2. 비동기 Event-Driven: Event Handler 사용
3. 적은 리소스로 많은 트래픽 효율적 처리
```

- master process가 존재해 설정 파일을 읽고 worker process를 생성해 실제 동작.
- worker process는 생성될 때 지정된 listen socket을 갖는다.
- socker을 통해 request를 처리. 해당 connection은 keep-alive만큼 유지된다.
- 생성된 connection에 요청이 없으면 새로운 connection을 형성하거나, 이미 만들어진 다른 connection으로 부터 요청 처리. 
- 새로은 connection 생성, 제거, 요청 처리를 event라고 부른다.
- event들은 os 커널이 queue 형식으로 worker process에게 전달해준다.
- queue에서 비동기 방식으로 대기하며, worker process는 하나의 thread로 event를 처리한다.
- worker process는 쉬지 않고 일한다. <= 메모리 부족 방지
- apache에서는 방치되는 프로세스가 있을 수 있다.

<br>

#### 🎈 시간이 오래 걸리는 event가 발생하면?

- queue는 순차적으로 처리하기 때문에 오래걸리는 event(Disk I/O)가 생기면 뒤의 event 모두 기다리게 된다.

#### 💡 오래걸리는 event는 Thread Pool을 이용해 따로 처리한다.

- worker process가 지금 하는 event가 시간이 오래 걸릴 것 같으면 Thread Pool에게 전달하고 다음 event를 처리한다.

<br>

![image](https://user-images.githubusercontent.com/60870438/183295556-28e56e5c-95e6-4ecc-9161-0e458761ff7e.png)

- worker process는 CPU의 core 개수만큼 생성된다.
- core가 담당하는 프로세스를 바꾸는 횟수를 줄일 수 있다. <= CPU가 부가적인 일을 하지 않아 CPU 부하 감소.(context switching)

#### 단점

- 개발자가 모듈(새로운 기능)을 생성하기 까다롭다.
- worker process에 문제가 생길 수도..

#### ✅ 장점

- 동시 커넥션 양 최소 10배 증가(일반적으로 100 ~ 1000배 증가)
- 동일한 커넥션 수일 때 속도 2배 향상
- 프로세스를 적게 만들어 동적 설정 변경이 자유롭다. 
  - 설정이 변경되면 새로운 worker process를 생성하고 기존의 worker process가 커넥션을 새로이 생성하지 않도록 한다.
  - 이전의 event가 모두 완료되면 해당 worker process 삭제.

#### 마지막의 경우

- 여러 동시 connection을 관리하는 경우, 뒷단에 서버가 추가되면 Nginx가 로드 밸런서 역할을 한다.
- 로드 밸런서: 요청을 여러 서버로 분산하는 작업.
- 설정 변경을 하더라도 동시 커넥션을 유지(event를 처리)하면서 서버 분산을 한다.


<br><br><br>

### 스마트 폰의 등장. 인터넷 사용 증가

- 2008년
- 동시 커넥션 많이 생성.
- 다양한 정보를 실시간으로 받고 데이터의 용량 증가.
- 여러 TCP Connection이 증가.
- Nginx 증가

<br>

- Apache Server도 MPMs라는 모듈을 추가한다.
- Multi processing Modules
  - 안정성 & 하위호환 & 확장성: 기존의 구조. 
  - 성능향상: WORKERS라는 thread로 처리

- BUT, 동시커넥션에서는 Nginx가 앞선다.
- Nginx는 동시커넥션이 많아져도 메모리 사용률이 낮고 일관적

## Nginx

![image](https://user-images.githubusercontent.com/60870438/183296381-f463fb1d-095f-4acd-a233-584e8596a83b.png)

- 동시커넥션을 여러개 유지, 가볍기 때문에 여러 웹 가속기 역할을 한다.

![image](https://user-images.githubusercontent.com/60870438/183296492-fe452a63-bd55-4198-8a82-50d45df2140d.png)

1. SSL 터미네이션: Nginx는 client와 https 통신, Server와 http 통신(같은 네트워크 상에 있음)
  - 서버가 복호화 과정을 하지 않음.
  - 리소스 감소
2. 캐싱: http 프로토콜 사용. 





# 참고
[Nginx](https://www.youtube.com/watch?v=6FAwAXXj5N0)
[Apache vs Nginx](https://jungyu09.tistory.com/12)
