# [Network] 웹서버와 WAS

<img src="https://user-images.githubusercontent.com/60870438/170643688-ad312527-9988-4b07-bafe-38c8e2d4d4f0.png" width=70%>


## 1. 웹의 동작 원리

<img src="https://user-images.githubusercontent.com/60870438/167300519-c1cc5666-726c-4840-8de3-04320aedfafd.png" width=70%>

```
1, 2. 사용자가 웹 브라우저를 통해 찾고 싶은 웹 페이지의 주소 입력
3. 사용자가 입력한 URL 주소 중에서 도메인 네임(domain name) 부분을 DNS 서버에 검색
4. DNS 서버에서 해당 도메인 네임에 해당하는 IP 주소를 찾아 사용자가 입력한 URL 정보와 함께 프로토콜의 정보를 전달
5, 6. 웹 페이지 URL 정보와 전달받은 IP 주소는 HTTP 요청 메시지를 생성
  이렇게 생성된 HTTP 요청 메시지는 TCP 프로토콜을 사용해 인터넷을 거쳐 해당 IP 주소의 컴퓨터로 전송
7. 도착한 HTTP 요청 메시지는 HTTP 프로토콜을 사용해 웹 페이지 URL 정보로 변환
8. 웹 서버는 도착한 웹 페이지 URL 정보에 해당하는 데이터 검색
9, 10. 검색된 웹 페이지 데이터는 다시 HTTP 프로토콜을 사용해 HTTP 응답 메시지 생성
  이렇게 생성된 HTTP 응답 메시지는 TCP 프로토콜을 사용해 인터넷을 거쳐 원래 컴퓨터로 전송
11. 도착한 HTTP 응답 메시지는 HTTp 프로토콜을 사용해 웹 페이지 데이터로 변환
12. 변환된 데이터는 웹 브라우저에 의해 출력되어 사용자가 볼 수 있음
```
<br>

## 2. 정적 페이지와 동적 페이지

![image](https://user-images.githubusercontent.com/60870438/170659807-b30837c2-5d49-4eb6-a7f5-013c596713f4.png)

|정적 페이지(Static Pages)|동적 페이지(Dynamic Pages)|
|-----|-----|
|항상 동일한 페이지를 반환한다|전달받은 인자의 내용에 맞게 변경되는 contents를 반환|
|Web Server는 파일 경로 이름을 받아 경로와 일치하는 file contents를 반환|웹 서버에 의해서 실행되는 *프로그램* 을 통해서 만들어진 결과물. Servlet: WAS에서 돌아가는 Java Program|
|종류: image, html, css, js|개발자는 Servlet에 doGet() 구현|
<br>

## 3. Web Server와 Web Application Server의 차이


<img src="https://user-images.githubusercontent.com/60870438/170487445-8747063d-def0-4a20-b57c-f6fb976e4cbc.png" width=50%>

### Web Server
> 개념
  - 웹 프라우저 클라이언트로부터 HTTP 요청을 받아 정적인 컨텐츠를 제공하는 프로그램
> 기능
  - HTTP 프로토콜을 기반으로 하여 웹 브라우저의 요청을 서비스하는 기능 담당
  - 정적인 컨텐츠(.html/ .png/ .jpg/ .css 등)을 제공할 때에는 WAS를 거치지 않고 바로 제공
  - 동적인 컨텐츠 요청이 들어왔을 때에는 해당 요청을 WAS에 보내고 처리한 결과를 반환 받아 클라이언트에게 응답
> 종류
  - Apache Server, Nginx, IIS(Windows 전용 Web Server)
> 단점
  - JSP나 PHP 같은 응용 프로그래밍 언어를 해석할 수 없다
  - 그래서 Java 기반 서버 사이드 언어를 처리할 수 있는 엔진 개발 -> WAS인 Tomcat


### Web Application Server

<img src="https://user-images.githubusercontent.com/60870438/170494452-bafe6003-889d-4dae-84dc-ac34f2b61bf6.png" width=50%>

> 개념
  - DB 조회나 다양한 로직 처리를 요구하는 동적인 컨텐츠를 HTTP 통신을 통해 제공하는 Application Server
  - HTTP를 통해 컴퓨터나 장치에 어플리케이션을 수행해주는 미들웨어(소프트웨어 엔진)
  - 웹 컨테이너(Web Container) 혹은 서블릿 컨테이너(Servlet Container)라고도 불린다. JSP, Servelt 구동 환경을 제공하는 서버
    - Container이란? JSP, Servlet을 실행시킬 수 있는 소프트웨어
  - 즉 WQS는 JSP와 Servlet의 구동 환경 
> 역할
  - WAS = Web Server + Web Container
  - Web Server의 기능을 구조적으로 분리해 처리하고자 하는 목적으로 제시
    - 분산 트랜잭션, 보안, 메시징, 스레드 처리 등의 기능을 처리하는 분산 환경에서 사용
    - 주로 DB 서버와 같이 수행
> 기능
  - 프로그램 실행 환경과 DB 접속 기능 제공
  - 여러개의 트랜잭션 관리 기능
  - 업무를 처리하는 비즈니스 로직 수행
> 종류: Tomcat, JBoss, Jeus, Web Sphere
> 동작 프로세스
  1. Web Server의 클라이언트 요청에 맞는 Servlet을 메모리에 올린다.
  2. web.xml을 참조해 해당 Servlet에 대한 Thread 생성
  3. HttpServletRequest와 HttpServletResponse 객체를 생성하고 그에 맞는 doGet, doPost 메소드를 호출해 생성된 동적 페이지를 Response 객체에 담아 WAS에 전달
    ex. doGet(HttpServletRequest req, HttpServletResponse rep)가 리턴하는 Response 객체를 WAS에 전달
  4. WAS는 HttpResponse 형태로 바꾸어 WebServer에 전달하고 생성된 스레드와 HttpServletRequest, HttpServletResponse 객체를 제거한다.


> 예시: 레스토랑
> 주문을 확인하고 역할을 분배하는 메인 셰프는 Web Server. 그 아래에서 실제 요리하는 요리사들이 WAS
> 즉, AWS는 서버의 일을 돕는다.
<br>

### Tomcat(톰캣) 이란?

![image](https://user-images.githubusercontent.com/60870438/170661450-b1e70f8e-9cd9-49be-8031-a644ac0b0926.png)

- 동적 데이터 처리, DB와 연결되어 데이터 주고 받고, 프로그램으로 데이터 조작이 필요한 경우 사용.
- Apache Tomcat은 JSP 페이지의 실행 환경을 제공하는 WAS
- WAS로 자바코드를 이용해 HTML 페이지를 동적으로 생성해주는 프로그램
- 웹 서버와 웨 클라이언트를 결합함으로써 다양한 기능을 컨테이너에 구현해 다양한 역할을 수행할 수 있는 서버
- 클라이언트의 요청 -> 내부의 프로그램을 통해 결과를 먼둘면 다시 클라이언트에 전달하는 웹 컨테이너
- 아파치 vs 톰캣의 차이는 컨테이너 기능의 가능 여부
- 아직도 아파치 + 톰캣을 병행해서 사용한다. 왜냐면 정적 데이터 처리 시 아파치의 성능이 더 높음
- 다른 언어 도입에 아파치 사용이 불가피하다.
<br>


## 4. Web Server와 WAS를 구분하는 이유


### Web Server가 필요한 이유
> 웹 브라우저가 정적 컨텐츠를 보내는 과정
- 이미지와 같은 정적 파일은 웹 문서(HTML)가 클라이언트로 보낼 때 함께 가지 않는다.
- 클라이언트는 HTML 문서를 먼저 받고 그에 맞는 이미지(정적) 파일을 다시 서버로 요청해 그때 이미지 파일을 받아온다.
- Web Server을 통해 정적인 파일들은 WAS에 거치지 않고 빠르게 보내줄 수 있다
    Web Server에서는 정적 컨텐츠만 처리하도록 기능을 분배해 서버의 부담을 줄일 수 있다.


### WAS가 필요한 이유
> 웹 페이지는 정적 컨텐츠와 동적 컨텐츠가 모두 존재한다.
> 사용자의 요청에 맞게 적절한 동적 컨텐츠를 만들어 제공해햐 한다
- Web Server만 이용하면 사용자가 원하는 요청에 대한 결과값을 미리 만들어 놓아야 한다.
  그렇지만 이렇게 수행하기엔 자원이 절대적으로 부족
- WAS를 통해 요청에 맞는 데이터를 DB에서 가져와 비즈니스 로직에 맞게 그때 그때 결과를 만들어 제공해야 자원을 효율적으로 사용 가능하다.


### 그렇다면 WAS가 Web Server의 기능까지 수행하지 않는 이유는?
> 기능을 분리하여 서버 부하 방지
  - WAS는 DB 조회나 다양한 로직 처리를 위해 바쁘다. 단순한 정적 컨텐츠는 Web Server에서 빠르게 제공하는 것이 좋다.
  - WAS는 기본적으로 동적 컨텐츠를 제공하기 위해 존재하는 서버. 정적 컨텐츠까지 처리한다면 부하가 커지게 되고, 동적 컨텐츠의 처리가 지연됨에 따라 수행속도가 느려져 결과적으로 페이지 노출 시간이 늘어난다.

> 물리적으로 분리해 보안 강화
  - SSL에 대한 암복호화 처리에 Web Server 사용

> 여러대의 WAS 연결 가능
  - Load Balancing을 위해 Web Server 사용
  - fail over(장애 극복), fail back 처리에 유리
  - 특히 대용량의 웹 어플리케이션의 경우, 여러개의 서버를 사용하는데 Web Server와 WAS를 분리하여 무중단 운영을 위한 장애 극복에 쉽게 대응 가능하다.
  - 오류가 난 WAS를 제외하고 다른 WAS를 사용하는 동안 오류난 것을 재실행하게 되면 사용자는 오류를 느끼지 못한다.

> 여러 웹 어플리케이션 서비스 가능
  - 하나의 서버에서 php, java Application을 함께 사용할 수 있다.

> 이외
  - 접근 허용 IP 관리, 2대 이상의 서버에서의 세션 관리 등도 Web Server에서 처리하면 효율적
  - 자원 이용의 효율성 및 장애 극복, 배포 및 유지보수의 편의성을 위해 Web Server와 WAS 분리.
  - 보통 Web Server를 WAS 앞에 두고 필요한 WAS를 Web Server에 플러그인 형태로 설정해 분산 처리한다.

### 왜 Web Server를 WAS 앞에 설치할까?
- WAS 자체로 웹 서버의 역할을 수행하기 때문에 무조건적으로 웹 서버를 앞에 둘 이유는 없다.
- WAS가 해야할 일의 부담을 줄이기 위해
  - WAS 앞에 Web Server를 둬 웹 서버는 정적 문서만 처리하도록 하고, WAS는 애플리케이션의 로직만 수행하도록 기능을 분배해 서버의 부담을 줄인다.
- WAS의 환경설정 파일을 외부에 노출시키지 않기 위해
  - 클라이언트와 연결하는 포트가 직접 WAS에 연결되어 있으면 중요한 설정 파일이 노출될 수 있기 때문에 이를 방지하기 위해
  - Web Server와 WAS에 접근하는 포트가 다르기 때문에 WAS에 들어오는 포트에 방화벽을 쳐서 보안 강화 가능


[참고]
- [Web Server와 WAS 이해하기](https://mi-nya.tistory.com/237)
- [Web Server와 WAS 구분하는 이유](https://velog.io/@hongcheol/%EB%A9%B4%EC%A0%91Web-Server-%EC%99%80-WAS)
- [Web Server와 WAS의 차이와 웹 서비스 구조](https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html)
