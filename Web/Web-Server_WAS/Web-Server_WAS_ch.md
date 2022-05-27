# WAS와 웹 서버의 차이

## Static Pages와 Dynamic pages

![spdp](https://gmlwjd9405.github.io/images/web/static-vs-dynamic.png)

1. Static Pages
   - 값이 변하지 않는 동일한 페이지 응답
   - img, css, js파일과 같이 저장된 파일들 반환

<br/>

2. Dynamic Pages
   - 동적인 contents나 정보를 응답
   - Servlet과 같이 웹 서버를 이용한 프로그램의 결과물을 반환

<br/>

## Web Server와 WAS의 차이

![차이](https://gmlwjd9405.github.io/images/web/webserver-vs-was1.png)

1. Web Server
   - 클라이언트로부터 HTTP 요청을 받아 정적 컨텐츠를 제공하는 목적
     - 정적 컨텐츠 : WAS를 거치지 않고 바로 제공
     - 동적 컨텐츠 : 요청을 WAS로 전달하고 처리 결과를 응답한다.
   - ex: Apache Server, Nginx, IIS

<br/>

2. WAS(Web Application Server)
   - HTTP 요청에 대한 동적인 컨텐츠를 제공하는 목적
   - WAS = Web Server + Web Container
   - 현재는 WAS 내부 Web Server도 정적 컨텐츠 처리의 차이가 없음.
   - 다수의 트랜잭션 관리, 비즈니스 로직 처리, DB 접속 및 실행환경 제공
   - ex: Tomcat, JBoss, Jeus

## Web Server와 WAS 구분의 이유

- Web Server : 정적 컨텐츠만 처리하도록 분배하여 서버 부담 감소
- WAS : 요청에 맞는 데이터를 DB와 비즈니스 로직에 맞게 동적으로 처리함으로서 효율적인 자원 사용 가능

1. 기능 분리를 통한 서버 부하 방지
2. 물리적 분리로 보안 강화
3. 다수의 WAS 연결 가능
4. 여러 Web Application 서비스 가능
5. 세션이나 접근 IP 관리를 Web Server에서 처리하면 효율적

<br/>


## Web Service Architecture

![wsarchi](https://gmlwjd9405.github.io/images/web/web-service-architecture.png)

> **효율적 자원 이용 및 유지보수성**을 위해 분리하게 되었다


<br/>

# **생각해볼 주제** 

## Web Application Server Architecture와 Web Service Architecture

- 웹 애플리케이션 내, 외부의 구성 요소 간의 관계와 
상호 작용을 패턴화 한 것을 말한다.
- 웹 애플리케이션을 확장 가능(Scalable)하게 함과 동시에
안정적(Reliable)이게, 그리고 가용할 수 있게(Available) 해주며,
이를 관리할 수 있도록 보장해준다.

<br/>

### Java 기반

![java](https://1.bp.blogspot.com/-N90K-BRAcTo/Xh20305jjaI/AAAAAAAACPk/1xD7EI6XxnknRgcWUTBkWzj8PBfjr2_SwCLcBGAsYHQ/s640/1.jpg)

<br/>

### Node 기반

![Node](https://1.bp.blogspot.com/-bMlikIYMSnU/Xh2030oibmI/AAAAAAAACPg/GlSsfy7nAJQU36rkMYLwZyMnagTJJi0YACLcBGAsYHQ/s640/3.jpg)

<br/>

### Python 기반

![python](./5.png)