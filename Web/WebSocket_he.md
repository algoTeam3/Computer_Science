# HTTP 통신

![HTTP](https://blog.kakaocdn.net/dn/lVbNr/btq36Sx0gLY/naNpro1akgCCzzXiTdPS7K/img.png)

**클라이언트의 요청이 있을 때 서버가 응답**하는 방식으로 단방향 통신이다.

<br>

# AJAX

HTTP를 효과적으로 이용하는 기술로, 새로운 웹페이지로 이동하는 것이 아니라 동일한 웹페이지 내에서 DOM을 변경하는 기술

하지만, 여전히 **“클라이언트의 요청이 있고 그 다음 서버로부터 응답을 받는다."**

<br>

# Socket 통신

![Socket](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGK0Ls%2Fbtq309AM5Ms%2FZJyP2drKiQRXcyiXZ6ViFk%2Fimg.png)

**클라이언트와 서버 양쪽에서 서로에게 데이터 전달**을 하는 방식의 양방향 통신이다.

- close()하기 전까지 연결이 유지된다.
- 실시간 데이터 송수신에 적합하다.

<br>

# WebSocket

![WebSocket](https://media.vlpt.us/images/rainbowweb/post/5a28097a-db1a-409d-afe2-a7c31356042f/image.png)

- 일반 HTTP Request 를 통해 Handshaking 과정을 거쳐 최초 접속이 이루어진다.
- HTML5 이후에 나온 기술이기 때문에 이전 버전에서는 `Socket.io`, `SockJS` 기술을 사용한다.

### 문제점

1️⃣ 서버와 클라이언트 간의 Socket 연결을 유지로 인한 CPU 부담  
2️⃣ 오래된 버전의 웹 브라우저 미지원  
3️⃣ 기존의 HTTP 사용 시와 비교했을 때 코딩의 복잡성을 가중

### 📌 Socket.io

**Javascript를 이용하여 브라우저 종류에 상관없이 실시간 웹을 구현할 수 있도록 한 기술**이다. 웹 브라우저와 웹 서버의 종류와 버전을 파악하여 가장 적합한 기술을 선택하여 사용한다.

<br>

# 웹 소켓 이전의 비슷한 기술

✔ `Polling` : 서버로 일정 주기 요청 송신  

![Polling](http://2.bp.blogspot.com/-cvWY81etsao/ViZSUVxywxI/AAAAAAAAMHo/wxrd6dIntM8/s320/HttpPolling.gif)

- 실시간 통신에서는 언제 통신이 발생할지 예측 불가능
- 불필요한 요청과 연결

<br>

✔ `Long Polling` : Polling의 단점을 최소화 하기 위해 서버에서 조금 더 대기하고 이벤트 받기  

![LongPolling](http://2.bp.blogspot.com/-eL9rxi8th2A/ViZSW0ggEwI/AAAAAAAAMH4/k4S4-dRz3t4/s320/HttpLongPolling.gif)

- 서버에 요청 보내고 이벤트가 생겨 응답 받을 때까지 연결 종료 안됨
- 많은 양의 메시지가 쏟아지면 polling과 동일

<br>

✔ `Streaming` : 서버에 요청을 보내고 끊기지 않은 연결상태에서 끊임없이 데이터 수신  

![Streaming](http://4.bp.blogspot.com/-sRVlAdeU-Kw/ViZSWw-wB2I/AAAAAAAAMH0/3CmKGISDV-A/s320/HttpStreaming.gif)

- 클라이언트에서 서버로의 데이터 송신이 어렵다

<br>

🔍 **3가지 모두 HTTP를 통해 통신하기 때문에 Request, Response 둘다 Header가 불필요하게 크다.**

<br>

## 참고

> https://kotlinworld.com/75  
> https://teach9186.tistory.com/64  
> https://velog.io/@codingbotpark/Web-Socket-%EC%9D%B4%EB%9E%80  
> https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-%EC%9B%B9-%EC%86%8C%EC%BC%93-Socket-%EC%97%AD%EC%82%AC%EB%B6%80%ED%84%B0-%EC%A0%95%EB%A6%AC  
> https://rubberduck-debug.tistory.com/123
