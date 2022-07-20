# HTTP 0.9

> One Line Protocol

- 의미 그대로 단일 요청에 대한 리소스 응답으로 `get`메서드가 유일
- 오로지 파일 내용 자체로 구성
- http 헤더가 존재하지 않아 html 파일만 전송 가능
- 초기 버전으로 버전 번호가 없었으며 추후 버전과 구별하기 위해 0.9로 불리게 됨

```
GET /mypage.html

<HTML>
A very simple HTML page
</HTML>
```

<br/>

# HTTP 1.0

> 확장성 만들기

- 버전 정보가 요청 메서드에 합쳐져 보내지게 확장
- 상태 코드 표시를 통해 성공과 실패를 알 수 있고 결과에 따른 동작을 할 수 있게 됨
- `HTTP 헤더` 개념을 통해 요청, 응답에 대한 처리와 `메타데이터` 전송 허용 및 프로토콜 확장
- Context-Type 라인을 통해 HTML 외의 다앙햔 문서 전송 가능
- POST, HEAD 메서드 추가

```
GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
<HTML>
A page with an image
  <IMG SRC="/myimage.gif">
</HTML>
```

- 0.9의 문제들을 해결하기 위한 준비 과정으로 표준으로 채택되지 않음

<br/>

# HTTP 1.1

> 표준 프로토콜

- OPTIONS, PUT, DELETE, TRACE 메서드 추가
- `Keep-Alive`를 통한 커넥션 재활용을 통해 시간 절약
- `PipeLining`을 통해 첫 요청이 응답되기 전에 다음 요청을 처리 가능
- `Language`, `Encoding`과 같은 타입 컨텐츠 포함을 통해 리소스 환경 통일
- `Host` 헤더를 통한 동일 IP 주소에 다른 도메인 호스트 가능

```
/* 요청 */
GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

/* 응답 */
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

### PipeLining

![파이프라이닝](https://t1.daumcdn.net/cfile/tistory/993666415BC2DD3231)

<br/>

### HOL Blocking

- 앞 요청에 대한 지연으로 인해 뒤 요청이 `Blocking`되어버리는 현상



<br/>

# HTTP 2.0

> SPDY 기반 차기 확장 버전

![frame](https://velog.velcdn.com/images%2Ftaesunny%2Fpost%2Feddc9c22-7d46-4899-877c-f8ce751609d5%2Fimage.png)

### Frame Stream Messages

- Binary 형식으로 인코딩된 Message, Frame 사용

![2.0](https://velog.velcdn.com/images%2Ftaesunny%2Fpost%2F17fd473d-7e43-4e73-9bba-8f64ee3ef21d%2Fimage.png)

- Stream : 바이트의 양뱡항 흐름으로 하나 이상의 메시지 전달
- Message : 여러 요청이나 응답 프레임을 포함하는 단위
- Frame : HTTP/2.0 통신 최소 단위, 최소로 하나의 프레임 헤더 포함, HEADERS Type Frame, DATA Type Frame 존재


<br/>

### HTTP 헤더 데이터 압축

![데이터압축](https://velog.velcdn.com/images%2Ftaesunny%2Fpost%2F7c860f2e-c1e9-4410-bc8e-fc8512ea84d2%2Fimage.png)

- `Huffman Coding`을 사용하여 HPACK 압축방식을 통해 데이터 압축 전송

<br/>

### Server Push

- 클라이언트가 요청하지 않았지만 필요할 특정 파일들(JS, CSS, Font, Img)을 서버에서 단일 HTTP 요청 응답시 함께 전송


<br/>

### Head Of Line Blocking 문제 해결

- 병렬 전송을 통해 HOL Blocking 문제 해결

![병렬](https://velog.velcdn.com/images%2Ftaesunny%2Fpost%2F8ba0ec32-1e59-4ffc-a801-21502f44e8a4%2Fimage.png)


<br/>

### Multiplexed Streams

- Stream을 통해 한 커넥션에 여러 스트림을 사용 가능하게 됨
- 하나의 커넥션 -> 여러 스트림 -> 여러 프레임 과정을 통해 동시에 여러 요청 처리 가능

![Multiple](https://blog.cloudflare.com/content/images/2015/12/http-2-multiplexing.png)

<br/>

### Stream Prioritization

- Stream에 우선순위를 부여하여 전달과 변경이 가능해짐

<br/>

### 한계

- 병렬 처리로 HOL Blocking을 해결했지만 TCP 고유의 데이터 유실과 같은 신뢰성 문제로 인해 HOL Blocking을 완전히 해결하지 못하였음

<br/>

# HTTP 3.0

> HTTP over QUIC(Quick UDP Internet Connections)

- TCP 기반인 HTTP를 UDP 기반인 QUIC위에 올려 서버 연결 최소화 및 패킷 혼잡 회피

![quic](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4bUSR%2FbtrupIpNs7v%2FwHl5JmjnD6khwCFCNkUGk0%2Fimg.png)

<br/>

- 기존 TLS + TCP의 TLS 연결을 위한 핸드 셰이크를 한 단계로 단축시킴으로서 레이턴시 감소 효과

![레이턴시 감소](https://blog.kakaocdn.net/dn/Dib1v/btrujJJ0h6J/lEzs953b8eMesuOCBIsBlK/img.gif)

<br/>

- UDP로 인해 신뢰성 보장이 필요 없으므로 HOL Blocking 최소화

![udp최소화](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZdLxh%2Fbtrup9mNJL7%2Fi3E8eO6yWsS12BXMTbhfD0%2Fimg.png)

<br/>

### 한계

- 기존 TCP 위에서 실행하는 TLS를 캡슐화하였기 때문에 TLS에서 필요하지 않았던 부분까지 QUIC에서는 암호화해야하는 과정으로 인해 암호화된 헤더 필드 영역을 중간에서 읽지 못하는 문제 발생

![헤더암호화](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2QVsl%2Fbtruuh5OXCf%2FklyFU8jvd0SWK6NEN6jrr1%2Fimg.png)


<br/>

### 참고 사이트

- [MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
- [버전별 특징](https://velog.io/@neity16/HTTP-HTTP-%EB%B2%84%EC%A0%84-%EB%B3%84-%ED%8A%B9%EC%A7%95)
- [2.0 정리](https://velog.io/@taesunny/HTTP2HTTP-2.0-%EC%A0%95%EB%A6%AC)
- [QUIC 알아보기](https://donggov.tistory.com/188)