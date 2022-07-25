# Socket
> Server와 Client가 Port를 통해 실시간 양방향 통신하는 방식

- TCP/IP 기반이지만 표준이 아닌 하나의 프로그래밍 인터페이스
- 실시간으로 통신하는 특성으로 연결지향형 방식
- 5-Tuple 데이터 포멧으로 통신
    1. 프로토콜(TCP, UDP)
    2. 자신의 IP Address
    3. 자신의 Port Number
    4. 목적지 IP Address
    5. 목적지 Port Number

<br/>

## 1️⃣ Stream sockets - TCP

```
- 양방향 바이트 스트림 전송, 연결 지향성
- 신뢰성 보장
- 데이터가 순차적으로 송수신
- point to point 연결
```

![tc](https://on1ystar.github.io/public/img/socket/socket-1-3.png)

<br/>

|함수명|기능|
|:---:|:---:|
|socket()|소켓 생성|
|bind()|사용할 자신의 IP Port 등록|
|listen()|연결 되지 않은 소켓을 요청 수신 대기 모드로 전환|
|connect()|TCP Client 에서 Server와 연결하기 위해 소켓 목적지 IP와 Port 지정|
|accept()|Client의 요청 수락 후 연결|
|send(), recv()|Client와 Server간 데이터 송수신|
|close()|소켓 종료|


<br/>

## 2️⃣ Datagram sockets - UDP
```
- 비연결형 소켓
- 신뢰성 보장 X
- 데이터 순서 보장 X
- point to point 뿐만 아니라 일대다 가능
```
![udp](https://on1ystar.github.io/public/img/socket/socket-1-4.png)

> connect()후 바로 데이터 전송

<br/>

## Web Socket

> 양방향 소통 프로토콜

```
- HTML5 웹 표준 기술
- WEB API로 라이브러리나 패키지 추가 없이 브라우저에서 사용 가능
- string형 데이터 전송
- 이벤트를 단순히 듣고, 보내는 것만 가능
```

<br/>

## Socket.io

> 웹소켓 기술 활용 라이브러리

```
- 소켓 연결 실패 시 fallback을 통해 다른 방식의 클라이언트 연결 시도
- Room 개념을 통해 클라이언트에게만 데이터 전송하는 `브로드캐스팅` 가능
```

<br/>





# 참고 사이트

- [websocket vs Socket.io](https://www.peterkimzz.com/websocket-vs-socket-io/)
- [소켓프로그래밍](https://on1ystar.github.io/socket%20programming/2021/03/16/socket-1/)