# Domain이란?

- **도메인**은 웹 브라우저를 통해 특정 사이트에 진입을 할 때, IP 주소를 대신하여 사용하는 주소
- **도메인**을 이용해서 **한눈에 파악하기 힘든 IP주소를 보다 분명하게** 나타낼 수 있다.

<br/>

# DNS(Domain Name System)이란 ?

- 데이터베이스 시스템
- 호스트의 **도메인 이름을 IP 주소로 변환**하거나 **반대의 경우를 수행**할 수 있도록 개발된 시스템
- DNS 안에서 이어주는 역할을 하는 서버를 **DNS 서버**(또는 네임 서버)라고 한다.

<br/>

# DNS 구성 요소

1. 도메인 네임 스페이스 : 도메인 이름을 분산 저장하기 위한 규칙
2. 네임 서버 : 권한 가진 DNS 서버 - 도메인 이름의 IP 주소 매핑
3. 리졸버 : 권한 없는 DNS 서버 - 클라이언트 요청을 네임서버 전달, 클라이언트에게 매핑 결과 제공


![구성요서](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb0bBU5%2Fbtq4dc3xGrb%2Fo6IBdeQ3drRoaxRhGLWvLk%2Fimg.png)

<br/>

# DNS 동작 과정

![과정](https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWMeTe%2FbtqV19AyDoc%2F3bDVg3lQprRfaSUnO23UZk%2Fimg.png&blockId=fe179f7a-6ad9-49a7-b695-665acd7a6a19)


1. 내 로컬 컴퓨터에서 찾아보기(Recursive Query)
   - 검색할 url을 치면 제일 먼저 로컬 DNS(DNS Resolver)에서 hosts파일에 해당 도메인의 IP 주소를 확인한다. 주소를 알고 있다면 8번을 통해 바로 반환해준다. 스스로 요청하고 응답하기 때문에 Recursive Query라고 한다.

2. Root DNS 쿼리
   - 로컬에서 찾지 못하면 다른 DNS에게 요청하기 위해 네임서버를 찾는데 가장 먼저 Root 네임 서버에 요청한다. Root 네임 서버는 해당 도메인의 최상위 도메인을 관리하는 DNS를 알려준다. url의 가장 마지막 부분으로 알게된다.(com, kr 등등)

3. TLD(Top-Level-Domain) DNS 쿼리
   - com을 관리하는 TLD DNS에게 다음 계층인 naver.com에 대해 쿼리를 요청한다. Naver.com을 관리하는 네임 서버를 알려준다.

4. SLD (또는 Authoritative DNS 서버)를 통해 최종 IP 주소 획득
   - Naver.com을 관리하는 네임 서버(Second Level)를 찾아낸 후 로컬 DNS가 네임서버로 도메인을 쿼리하여 IP 주소를 얻는다.

5. IP 주소 접속
   - 네임 서버에게 받은 IP 주소를 통해 서버와 통신한다.


# 용어 정리

- DNS Query
  - DNS 서버와 클라이언트간 주소 변환을 위해 요청과 응답하는 작업
  - Recursive와 Iterative로 구분된다.

- Recursive Query와 Iterative Query
  - Recursive Query는 최종적인 IP 주소를 돌려주는 작업이고, Iterative Query는 Recursive Query가 진행되는 내부에서 IP를 찾기위한 쿼리 과정이다.


# 참고

- [DNS 쿼리](https://hanamon.kr/dns%eb%9e%80-%eb%8f%84%eb%a9%94%ec%9d%b8-%eb%84%a4%ec%9e%84-%ec%8b%9c%ec%8a%a4%ed%85%9c-%ea%b0%9c%eb%85%90%eb%b6%80%ed%84%b0-%ec%9e%91%eb%8f%99-%eb%b0%a9%ec%8b%9d%ea%b9%8c%ec%a7%80/)
- [DNS 참고](https://darrengwon.tistory.com/72)
- [DNS 쿼리 과정](https://lecor.tistory.com/78)