# DNS

> Domain Name System

**브라우저가 인터넷 자원을 로드할 수 있도록 도메인 이름을 IP 주소로 변환**

<br>

## hosts 파일

- 각 운영체제는 hosts 파일 존재
- 도메인 이름과 IP 주소 사이의 맵핑 정보를 기록(ex. 전화번호부)
- 브라우저는 도메인 이름을 통해 접속을 시도할 때 가장 먼저 해당 파일의 내용을 참조
- 해당 도메인 이름의 맵핑 정보가 존재하지 않으면 DNS 서버에게 질의

<br>

## 📌 도메인 동작 원리

![동작원리](https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/module/3421/8340.jpeg)

1️⃣ hosts 파일 내용 확인  
2️⃣ hosts 파일로 IP 주소를 알아내지 못하면, DNS 서버에게 질의  
3️⃣ IP 주소를 이용하여, 접속 및 통신

<br>

## 📌 도메인 이름의 구조

![도메인구조](https://blog.kakaocdn.net/dn/bhRhBx/btqEnHU0Fsm/63n6qvJO6JDcoyfenPpVE0/img.png)

✔ `.` Root 도메인  
✔ `com` Top-level 도메인(이하 TLD)  
✔ `example` Second-level 도메인(이하 SLD)  
✔ `blog` 서브 도메인

`"각 네임 서버는 자신이 담당하는 도메인의 하위 도메인을 담당하는 네임 서버의 위치 정보(도메인 이름)를 알고 있다."`

<br>

![DNS동작원리](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-lookup-diagram.png)

## DNS 질의 유형

1️⃣ 재귀적 질의(Recursive Query)

- 상대 네임 서버에게 자신을 대신하여 원하는 도메인의 데이터를 인터넷에서 조회하여 응답

2️⃣ 반복적 질의(Interactive Query)

- 루트 네임 서버로부터 도메인의 트리 형태 계층구조를 따라 순차적으로 반복하여 진행하는 질의

<br>

## 참고

> https://it-eldorado.tistory.com/55  
> https://opentutorials.org/course/3276/20299  
> https://www.cloudflare.com/ko-kr/learning/dns/what-is-dns/  
> https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=nj0803&logNo=10175980049  
> https://travelc.tistory.com/38
