# HTTP vs WebSocket
![image](https://user-images.githubusercontent.com/68576770/149434877-e3754c13-0d5d-4a9e-b91b-01860659a48c.png)
- HTTP와 WebSocket은 모두 client-server 커뮤니케이션을 위한 통신 프로토콜이다.
- 실시간 정보를 필요로 하는 애플리케이션에서 요청-응답 방식을 사용하는 고전적인 HTTP는 적절하지 않다.
- HTTP 프로토콜의 한계를 극복하기 위해 WebSocket이 개발되었다.
- WebSocket에 대한 근본적인 이해를 위해 HTTP와 WebSocket을 각각 살펴보고 둘을 비교하겠다.
### HTTP
- 클라이언트가 request를 보내고, 서버가 response를 보내는 단방향 프로토콜
    - TCP 프로토콜의 상단에서 작동함
    - TCP 프로토콜 : 데이터 패킷 전송을 보장하고, 손실된 패킷을 재전송 하는 연결 지향 프로토콜
- World Wide Web의 기본 통신 모드
- three-way handshaking
    - (1) 클라이언트가 HTTP 또는 HTTPS의 형태로 request를 보낸다.
    - (2) request를 받은 서버는 클라이언트로 response를 보낸다.
    - (3) 각 request는 response와 연결되고, response가 보내진 후 연결이 종료된다. 
### WebSocket
- 양방향 통신 채널을 제공하는 프로토콜
- HTML5 표준의 일부
- 클라이언트-서버의 최초 handshaking 과정을 거친 후 WebSocket 연결을 통해 계속 활성 상태를 유지할 수 있다.
    - 클라이언트나 서버 중 누군가 연결을 끊기 전까지 요청-응답 방식의 반복 없이 양방향으로 메시지 교환이 이루어진다.
- 채팅 애플리케이션, 실시간 웹 애플리케이션 등에서 사용된다.
    - 채팅 : WebSocket을 사용해 한 번만 연결을 설정하고, 동일한 WebSocket 연결을 재사용해서 메시지 교환을 한다.
    - 실시간 웹 : WebSocket을 사용해 server에서 지속적으로 보내는 data를 client에 표시한다. 
- 관련 기술 : SockJS, Stomp
# Difference
|HTTP|WebSocket|
|:-----------------------------:|:-----------------------------:|
|unidirectional protocol|bidirectional communication protocol|
|response를 보내면 연결이 닫히고 request를 보내서 연결을 만듦|클라이언트나 서버에 의해 연결이 종료될 때 까지 활성 상태 유지|
|WebSocket보다 연결이 느림|HTTP보다 연결이 빠름|
|단순 Restful application에서 사용|실시간 응용 프로그램|
# References
- [사진](https://blog.scaleway.com/iot-hub-what-use-case-for-websockets/)
- https://www.geeksforgeeks.org/what-is-web-socket-and-how-it-is-different-from-the-http/#:~:text=HTTP%20Connection,the%20client%20or%20the%20server.
