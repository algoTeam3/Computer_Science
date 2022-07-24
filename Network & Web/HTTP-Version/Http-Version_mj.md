#### HTTP 프로토콜이란?
```
Hyper Text Transfer Protocol의 약자로  서버/클라이언트 모델을 따라 데이터를 주고 받기 위한 프로토콜.
즉, 서버와 클라이언트 사이에서 어떻게 메시지를 교환할지 정해 놓은 규칙
HTTP는 애플리케이션 레벨의 프로토콜로 TCP/IP 위에서 작동한다.
HTTP는 상태를 가지고 있지 않은 Stateless 프로토콜이며 Method, Path, Version, Body 등으로 구성
```
<img src="https://user-images.githubusercontent.com/60870438/179404392-4462378c-e876-4a32-a7f9-41383ab98535.png" width=70%>


## 💡 HTTP vs HTTPS

- HTTP는 평문 데이터를 전송하는 프로토콜로 보안의 위험성이 있다.
- HTTP에 암호화가 추가된 프로토콜이 HTTPS

#### HTTPS란?
```
대칭키 암호화와 비대칭키 암호화가 사용된다.
비대칭키 암/복호화는 비용이 커서 모든 메시지에 사용하면 오버해드가 발생할 수 있음.
서버와 클라이언트가 최초 1회로 대칭키를 공유하기 위한 과정에서 비대칭키 암호화를 사용하고 이후에는 대칭키 암호화 사용.
```

#### HTTPS 연결 과정

1. 클라이언트(브라우저)가 서버로 최초 연결 시도를 함
2. 서버는 공개키(엄밀히는 인증서)를 브라우저에게 넘겨줌
3. 브라우저는 인증서의 유효성을 검사하고 세션키를 발급함
4. 브라우저는 세션키를 보관하며 추가로 서버의 공개키로 세션키를 암호화하여 서버로 전송함
5. 서버는 개인키로 암호화된 세션키를 복호화하여 세션키를 얻음
6. 클라이언트와 서버는 동일한 세션키를 공유하므로 데이터를 전달할 때 세션키로 암호화/복호화를 진행함

```
공개키로 암호화된 메시지는 개인키로만 복호화가 가능함. 서버만 알고 있게 된다.
```
<img src="https://user-images.githubusercontent.com/60870438/179404571-9abbc995-12f4-4697-a1f1-a8b17c38b6f0.png" width=70%>

## 💡 3-Way Handsake

```
TCP 네트워크에서 통신하는 장치가 서로 잘 연결되어 있는지 확인하는 방법.
총 세번에 걸쳐 데이터를 주고 받으며 통신 가능한 상태임을 확인.
```
<img src="https://user-images.githubusercontent.com/60870438/179404658-9463173c-de95-4ef5-88b1-21d33063bf1a.png" width=70%>


## 💡 HTTP1 vs HTTP2

<img src="https://user-images.githubusercontent.com/60870438/179404930-817b2bff-a92d-43f8-b262-ffb524d5ca75.png" width=70%>

세줄요약

1. HOL 블로킹과 RTT 지연을 일으키는 하나의 요청만을 한번에 처리할 수 있는 HTTP1.1의 문제를, HTTP 2.0에서는 멀티플렉싱을 지원함으로써 개선하였다.
2. 무거운 헤더로 인한 중복 정보 전달문제를 HTTP2.0에서는 HPACK(Header Table, 허프만 인코딩)을 이용해 헤더를 압축 시켰다.
3. 이외의 HTTP 2.0의 핵심적인 변화는 Server Push와 바이너리 프레이밍 계층이며, 이들 또한 성능향상에 도움을 주었다.

----

## 🎈 HTTP/1.1, HTTP/2, 그리고 QUIC

<img src="https://user-images.githubusercontent.com/60870438/179418175-7a5c850a-9130-4733-95ba-555a6d68b05d.png" width=70%>

HTTP는 Application 계층. 전송 계층을 지나야한다.
HTTP는 이론상 신뢰성 있는 연결만 할 수 있다면 전송 프로토콜 어느 것을 사용해도 상관없다고 한다.

1. TCP: 신뢰성있는 커넥션. 3-way
2. UDP: 일단 보낸다. 제어 기능이 없음.

|TCP||UDP|
|------|---|---|
|연결형 서비스|연결 방식|비연결형 서비스|
|가상 회선 방식|패킷 교환|데이터그램 방식|
|O|전송 순서 보장|X|
|높음|신뢰성|낮음|
|느림|전송 속도|빠름|

HTTP/0.9~2 : TCP 사용.

### 1. HTTP/0.9
- get만 존재
- html 파일 자체를 보냄.


</br></br>

### 2. HTTP/1.0
- header가 생김
- html이 아닌 다른 파일도 보낼 수 있음

✅ 요청 하나 당 응답 하나

✅ 매번 새로운 연결로 성능 저하

✅ 서버 부하 비용 증가


</br></br>

### 3. HTTP/1.1

<img src="https://user-images.githubusercontent.com/60870438/179419823-3ced5228-7e01-4b8e-8103-e5ed5d92ddcd.png" width=70%>

- persistent Connection 도입: 지정한 timeout 동안 커넥션을 닫지 않음.
- pipelining: 하나의 커넥션에서 응답을 기다리지 않고 순차적인 여러 요청을 연속적으로 보내 그 순서에 맞춰 응답을 받는 방식으로 지연 시간을 줄임.
  - Head Of Line Blocking 발생: 먼저 요청이 처리되지 않으면 그 뒤에 요청도 멈춰있다.
  - Header 구조의 중복: 주고 받는 데이터가 커지게 된다.

✅ 기존 HTTP/1.x 버전의 성능 향상에 초점을 맞춘 프로토콜

✅ 표준의 대체가 아닌 *확장*

#### 💡 HTTP 1.1의 결점

1. One Commection - One Response
  : 한 요청에 한 응답만 처리하도록 구성되어 있다.
```
1. HOL(Head Of Line) Blocking (특정 응답 지연): 클라이언트의 요청과 서버의 응답이 동기화되어 지연 발생
  네트워크에서 같은 큐에 있는 패킷이 첫번째 패킷으로 인해 지연되는 경우, 발생하는 성능 저하.
2. RTT(Round Trip Time) 증가 (양방향 지연): 패킷 왕복 시간의 지연 발생
  Connection 당 하나의 요청을 처리(3-way)하기 때문에 동시전송이 불가능.
  요청과 응답이 순차적으로 이루어지는 구조여서 리소스 개수에 비례해 대기시간이 길어진다.
  ex) 하나의 큰 이미지 < 잘게 쪼갠 100개의 이미지
3. 무거운 Header 구조: 쿠키와 같은 메타데이터에 의해 헤더가 비대해짐.
  1.1의 헤더에는 많은 메타정보와 실제로 전송할 정보 등이 저장되어 있다. 이 무거운 헤더를 요청시마다 전송하게 되며,
  domain에 설정된 cookie 정보도 헤더에 포함.
```

ex3) <img src="https://user-images.githubusercontent.com/60870438/179405278-af4e3f66-f671-4ab7-9c05-633bf35f79c5.png" width=50%>


</br></br>

### 4. HTTP/2

<img src="https://user-images.githubusercontent.com/60870438/179419090-3c02a72b-a4fc-4432-9589-01eb9f71b7fd.png" width=70%>

- 기존에는 text 형식의 메시지를 보냈음.
- HTTP 메시지 전송 방식의 변화
  - Binary Framing 계층 사용
  - 메시지를 frame 단위로 분할한다. -> 바이너리 인코딩
  - 바이너리 -> 파싱, 전송 속도 증가 / 오류 발생 가능성 감소
- 스트림 안에 프레임이 합쳐져 통신한다.

✅ Request and Response multiplexing(다중화): HOL Blocking 해결
  - 프레임으로 분할되기 때문에 메시지간의 순서가 사라짐.
  - 먼저 도착하면 조립된다.

✅ Stream Prioritization
  - 리소스간 우선 순위 설정 가능
  - 요청에 가중치 부여

<img src="https://user-images.githubusercontent.com/60870438/179419124-138f53ac-2e71-41c4-9fc5-c4e0c0a8b821.png" width=70%>

✅ Server Push
  - 클라이언트가 요청하지 않은 파일도 응답한다.
  - page.html을 요청하면 분명히 script.js 등을 요청할거니 미리 보내주자

<img src="https://user-images.githubusercontent.com/60870438/179419218-35d58c5e-1fc2-4a6b-a61d-03ffab7a84ee.png" width=70%>

✅ Header Compression
  - 헤더를 압축해 페이지 로드 시간 감소
  - 중복된 것은 인덱스만 뽑고, 중복된 것은 허프만 인코딩을 통해 압축해 보낸다.

#### 💡 HTTP 2.0의 해결

HTTP2는 HTTP1의 성능 문제를 해결했다. SPDY 기반의 http2.0
```
1. Multiplexed Streams: 하나의 커넥션으로 여러개의 메시지를 동시에 주고 받음
  응답 또한 순서에 상관없이 스트림으로 주고 받는다. 스트림에 우선순위를 설정해 응답이 어느 순서로 오건 상관없이 처리할 수 있다.
2. Stream Prioritization: 요청 온 리소스의 의존관계를 설정해 먼저 응답해야하는 리소스를 우선 반환
3. Header Compression: 헤더 정보를 HPACK(Huffman Encoding) 압축 방식을 사용해 압축 전송
  중복된 Header에 대한 정보는 index값만 전송, 중복되지 않은 Header 정보의 값은 인코딩해 전송
```

ex1) <img src="https://user-images.githubusercontent.com/60870438/179405369-b891c83a-4c74-4981-89f6-7781ec8edc2c.png" width=70%>

- 기존의 결점
```
4. Server Push: HTML 문서 상에 필요한 리소스를 클라이언트 요청없이 보낼 수 있음
  서버가 클라이언트 요청에 대해 여러 응답을 한번에 보낼 수 있음.
  즉, 서버는 요청에 응답할 뿐만 아니라 클라이언트가 명시적으로 요청하지 않아도 추가적인 리소스를 클라이언트에 푸시할 수 있다.
  엄격한 Ack-Response에서 벗어나 서버가 미리 클라이언트에게 필요한 정보를 인지해 푸시함으로써, 좀 더 빠른 응답
5. 바이너리 프레이밍 계층
  줄바꿈으로 구분되는 일반 텍스트 HTTP/1.x 프로토콜와 달리 HTTP/2 통신은 더 작은 메시지와 프레임으로 분할.
  각각은 바이너리 형식으로 인코딩 된다. -> 저 많은 종류의 정보 전달.
```


</br></br>

### 5. QUIC

- 전송 계층 프로토콜
- 2013년에 공개
- 현재 구글 관련 제품 대부분의 기본 프로토콜
- UDP 기반? 신뢰성이 낮지 않아?

```
 TCP는 신뢰성을 확보하지만 지연을 줄이기 힘든 구조. 헤더가 꽉 차 있음
 UDP는 비교적 헤더가 작음
  - 데이터 전송에 집중한 설계
  - 별도의 기능 X
    - 원하는 기능 구현 O
    - TCP의 지연을 줄이면서 TCP만큼 신뢰성 확보 가능
```

<img src="https://user-images.githubusercontent.com/60870438/179419464-29214a93-9504-411a-8123-32288b18950b.png" width=70%>

✅ 전송 속도 향상
  - 첫 연결 설정에서 필요한 정보와 함께 데이터 전송 -> 연결 성공 시 설정을 캐싱해 다음 연결에 사용
  - Connection UUID라는 고유 식별자로 서버와 연결 -> 커넥션 재수립 필요 X
  
✅ TLS 기본 적용
  - Source Address Token을 사용해 IP Spoofing/Replay Attack 방지 -> 보안성 향상

<img src="https://user-images.githubusercontent.com/60870438/179419582-a4041c26-de5e-4fe2-aee1-edbe2bc0d96f.png" width=70%>

✅ 독립 스트림 사용 -> 향상된 멀티플렉싱 기능
  - 2.0에도 있으나 살짝 다름




#### HTTP/3

- Quic을 바탕으로 나와있음

<img src="https://user-images.githubusercontent.com/60870438/179419759-e9f9fac7-c99b-460d-ad41-7eb4e699fa15.png">


### 🎈 정리

|HTTP/1.1|HTTP/2|QUIC|
|------|---|---|
|Persistent Connection|HTTP 메시지 전송 방식 변화|TCP의 한계 극복|
|Pipelining|요청과 응답의 다중화|전송 속도 향상|
|HTTP의 HOL Blocking|리소스간 우선 순위 설정|Connection UUID로 서버와 연결|
|Header 중복|Server Push|TLS 기본 적용|
|느림|Header 압축|독립 스트림 사용|
||TCP의 HOL Blocking 존재||

질문- http3가 상용화되지 않은 이유?

</br></br>

# 참고

- [HTTP1.1 vs HTTP2.0](https://blog.naver.com/qja9605/222269034552)
- [쿨라임의 HTTP/1.1, HTTP/2, 그리고 QUIC](https://www.youtube.com/watch?v=xcrjamphIp4)
- [QUIC](http://blog.skby.net/quic-quick-udp-internet-connection/)
- [Chrome Dev](https://www.youtube.com/watch?v=r5oT_2ndjms)
