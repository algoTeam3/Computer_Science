# HTTP(Hyper Text Transfer Protocol)

> 서버와 클라이언트간 요청과 응답을 통해 자원을 주고받는 데이터 전송 프로토콜

- Stateless : 연결 끊는 순간 통신 종료되고 상태 정보는 유지되지 않음
- Connectionless : tcp 3WH, 4WH를 통해 세션 오픈, 세션의 요청과 응답 진행 후 세션 끊어지는 단점 존재
- 2 가지 특성을 보완하기 위해 **쿠키**와 **세션** 사용

<br/>

![http](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbojmIW%2FbtqJnEz0OK0%2FvDLQNKF9vUU9hmFxZ3x04k%2Fimg.png)

<br/>

# HTTP 버전별 특징

## HTTP/0.9

- 초기 버전으로 버전 정보가 없어 차후에 09로 불리게 되었다.
- GET 통신만 가능하고 HTTP 헤더가 없기 때문에 HTML 문서만 전송 가능

## HTTP/1.0

- 상태코드가 응답값 시작 부분에 포함되어 요청 성공과 실패 바로 확인 가능
- Content-type의 도움으로 다른 문서 전송 가능
- POST, HEAD 메서드 추가

```javascript
# html 요청
GET /mypage.html HTTP/1.0
```

```javascript
# html 응답
200 OK
...
Content-Type: text/html
```

## HTTP/1.1

- HTTP의 첫 표준 버전
- OPTIONS, PUT, DELETE, TRACE 메서드 추가
- TCP/IP의 **순차적 처리**를 다수의 처리로 변경하기 위한 \*_파이프라이닝_ 추가
- 웹 커넥션 재사용을 위한 keep-alive

```python
GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

(content)
```

<br/>

![파이프라이닝](https://t1.daumcdn.net/cfile/tistory/993666415BC2DD3231)

### But,

- HTTP의 Head Of Line Blocking 문제점(하나의 요청이 지연되면 결국 모든 요청들이 연달아 지연되는 현상) 발생
- 불필요한 Round Trip Time(요청 하나당 3WH의 연속으로 인한 시간 낭비)

<br/>

## HTTPS

- HTTP의 TCP/IP통신의 취약점을 해결하기 위한 SSL(Secure Sockets Layer)
- SSL의 차세대 프로토콜인 TLS(Transport Layer Security) 등장으로 HTTPS 프로토콜 등장
- 공개키 암호화 방식으로 텍스트 암호화

 <br/>

### 공개키 암호화 방식

![공캐기](https://camo.githubusercontent.com/515180493869b8b136061e3d705fd58b57336edfe043f8f94ac51fa5a2b11858/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e2532464147443468253246627471307079704a5047782532466b6b546837766436564d677262526e4a4146384b4830253246696d672e706e67)

### HTTPS 통신 방식

![https](https://camo.githubusercontent.com/117046c39efd04849d21a2a4ce5c2a99cacc32707ee7a8bc000457fae30ae47c/68747470733a2f2f696d67312e6461756d63646e2e6e65742f7468756d622f523132383078302f3f73636f64653d6d746973746f72793226666e616d653d6874747073253341253246253246626c6f672e6b616b616f63646e2e6e6574253246646e253246624533364b44253246627471307466446b4c615a253246617a4937576c6d6f6e3365437a453564514b4e437130253246696d672e706e67)

```
1. 암호화 알고리즘과 TLS 정보를 난수값과 함께 전송
2. 사용할 TSL 버전, 암호화 알고리즘, 난수값 전송
3. CA로 발급받은 인증서 전송
4. 키 교환에 필요한 정보 제공
5. 서버가 클라이언트를 인증해야할 때 인증서 요구
6. 서버 메시지 전송 완료
7. 대칭키로 사용하게될 키 값(pre-master-key)을 공개키 방식을 사용하여 전송
8. 키 값(pre-master-key)을 복호화 후 대칭키(master-key)로 변경
```

## HTTP/2.0

- 2010년 구글의 SPDY 프로토콜에 기반한 1.1의 통신 지연 단점 보완 버전
- 텍스트가 아닌 이진 프로토콜
- 1.1의 요청 응답간의 동기화 제약 삭제
- [HTTP1.1과의 퍼포먼스 차이](https://www.httpvshttps.com/)

### 특징

```
1. Multiplexed Streams: 하나의 커넥션으로 여러 개의 메세지를 동시에 주고 받을 수 있음
2. Stream Prioritization: 요청온 리소스간의 의존관계를 설정하여 먼저 응답해야하는 리소스를 우선적으로 반환함
3. Header Compression: 헤더 정보를 HPACK 압축 방식을 이용하여 압축 전송함
4. Server Push: HTML문서 상에 필요한 리소스를 클라이언트 요청없이 보내줄 수 있음
```

<br/>

### Multiplexed Streams

![멀티플스트림](https://kooku.netlify.app/static/7a43b5a2b11adf15b48b8668e06182d1/e17e5/http2_streams.png)

- Stream을 통해 한 커넥션으로 동시에 메세지 주고 받음

<br/>

### Stream Prioritization

![Stream Prioritization](https://kooku.netlify.app/static/1df534cfae2cf405bfc1771b8d07c9f2/3e286/http2_weight.png)

- 리소스간 의존 관계를 설정하여 파일 수신에 따른 렌더링 지연 해결

<br/>

### Server Push

![serverpush](https://kooku.netlify.app/static/b64181962e10a955ee2ab95a05d5667c/0b533/http2_push.png)

- 서버가 알아서 클라이언트 요청에 필요한 리소스를 전송한다

<br/>

### Header Compression

![headerComporession](https://web-dev.imgix.net/image/C47gYyWYVMMhDmtYSLOWazuyePF2/IYfczfC6ZCTxUVboaEZy.svg)

- Header Table과 Huffman Encoding 기법을 사용하여 헤더 정보 압축(HPACk 압축 방식)

<br/>

## HTTP/3 - HTTP over QUIC

> QUIC (Quick UDP Internet Connection)

```
연결 설정 시간 단축
Head of Line Blocking 없는 멀티플렉싱
TLS 암호화 기본 (default 443 UDP port)
```

<br/>

![quic](https://blog.kakaocdn.net/dn/WduEO/btqv5VHWiVk/7vlRRZap7ON5YFC6iDyJoK/img.png)

<br/>

# 참조 사이트

- [http2.0특징참조](https://kooku.netlify.app/web/http1.1-vs-http2/)
- [http의 진화](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
- [http 질문 참조](https://mangkyu.tistory.com/91)
- [10분 테코톡 http](https://www.youtube.com/watch?v=xcrjamphIp4)
