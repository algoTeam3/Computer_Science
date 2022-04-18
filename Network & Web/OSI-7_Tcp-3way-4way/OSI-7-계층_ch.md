# OSI 7계층

## OSI란 ?

> Open Systems Interconnection Reference Model

- 국제 표준화 기구(ISO)에서 다양한 네트워크의 호환을 위해 설계한 표준 네트워크 모델

<br/>

## 왜 OSI 7계층이 생긴거야?

- 전세계 모든 컴퓨터가 통신이 가능하게 하기 위해서
- 계층별로 나누어 네트워크 문제점을 발견하기 쉬워져서

<br/>

## OSI 7계층

![OSI7계층사진](https://www.secplicity.org/wp-content/uploads/2019/02/osi_in_depth-620x414.png)

출처 : https://www.secplicity.org/2019/03/01/how-data-moves-across-a-network/

<br/>

## 계층별 데이터 단위

![데이터단위](https://www.networxsecurity.org/fileadmin/user_upload/images/2015-08/Data_Unit.jpg)

출처 : https://www.networxsecurity.org/members-area/glossary/d/data-unit.html

<br/>

# 계층별 특징

## 7️⃣ 응용 계층(Application Layer)

- 프로토콜별 서비스를 실행해주는 계층
  ex) http, ftp, smtp

## 6️⃣ 표현 계층(Presentation Layer)

- 환경에 맞는 데이터 형식으로 변경해주는 계층
- 암호화, 복호화 & 인코딩, 디코딩

## 5️⃣ 세션 계층(Session Layer)

- [컴퓨터 통신을 위한 프로세서들의 논리적 연결 담당](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=ttochid1&logNo=10037450926)
- 동기화, 네트워크 오류 검사 및 복구 기능
- [RPC(Remote Procedure Call)](https://real-dongsoo7.tistory.com/131)

## 4️⃣ 전송 계층(Transport Layer)

- 데이터를 발신지와 목적지(end to end)에 신뢰성있게 전송했는지 제어와 에러를 통해 관리하는 계층
- Port 번호 사용
- [TCP, UDP](#TCP와-UDP)

## 3️⃣ 네트워크 계층(Network Layer)

- 여러 개의 노드를 거칠 때마다 라우팅(경로 찾기)역할
- 라우팅 주소로 IP사용

## 2️⃣ 데이터링크 계층(DataLink Layer)

- 노드 간의 통신에 오류제어, 흐름제어 담당
- 직접 연결된 서로 다른 2개의 네트워크 장치 간의 데이터 전송
- MAC, LLC

## 1️⃣ 물리 계층(Physical Layer)

- 데이터를 전기적 신호로 변환하는 계층
- 허브, 모뎀 등을 통해 데이터를 주고 받는 역할

<br/>

## 데이터 흐름

![데이터 흐름](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbaX3l6%2FbtqY2sk3OqB%2F4wf6BttvyGMmbawiOjc4j0%2Fimg.png)

<br />

# TCP/IP와 UDP

## TCP(Trasmission Control Protocol)

- 연결 지향 프로토콜 : server와 client가 연결된 상태에서 데이터 주고받는 프로토콜
- 흐름제어 & 혼잡 제어
- 3 way로 접속 & 4 way로 해제
- 높은 신뢰성
- 전이중, 점대점 방식
- 파일 전송에 사용

<br/>

![tcp socket io](https://t1.daumcdn.net/cfile/tistory/99C5C63359FEB5DC06)

## IP(Internet Protocol)

- 논리적 주소 프로토콜
- IPv4, IPv6 두가지

## UDP(User Datagram Protocol)

- Datagram : 독립적인 관계의 패킷
- 비연결형 프로토콜 : 정해진 경로 없이 독립적으로 데이터를 보내 처리
- 속도 빠름
- checkSum 필드를 통해 최소한의 오류 검출
- 실시간 스트리밍 서비스

<br />

## 3 Way HandShake

- TCP 통신에서 데이터를 연결할 때, 신뢰성을 갖추기 위한 3 단계의 연결 절차
- SYN (synchronize sequence numbers) - 연결 확인을 위해 보내는 무작위의 숫자값
- ACK (acknowledgements) - Client 혹은 Server로부터 받은 SYN에 1을 더해 SYN을 잘 받았다는 ACK

<br/>

![3way](https://t1.daumcdn.net/cfile/tistory/99087C405C18E3CD28)

1. 클라이언트에서 연결 확인을 위한 SYN 전송
2. 서버단에서 받은 SYN에 1을 더해 ACK로 클라이언트로 전송, SYN 전송
3. 서버로부터 받은 SYN에 1을 더해 서버로 ACK를 전송

<br />

## 4 Way HandShake

- TCP 통신 연결 해제를 위한 4 단계의 해제 절차

![4way](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtQR1l%2FbtqyJRYdm3E%2F143elB5WCHDlofiAsax2J1%2Fimg.png)

1. 클라이언트 종료 후 FIN 전송
2. FIN 수신 후 ACK 전송
3. 서버 종료 준비 후 FIN 전송
4. FIN 수신 후 ACK 전송

<br/>

# MAC와 LLC

> LAN 환경에서는 데이터 링크 계층을 LLC, MAC으로 나눈다.

## MAC(Media Access Control)

- MAC은 LAN 환경에서 프레임을 어떻게 전송할지를 정의한다.
- 장치의 MAC Address(물리적 주소) 지정
- 이더넷, 토큰링, 토큰버스

## LLC(Logical Link Control)

- 데이터 링크 계층 기본 기능

<br/>

# 참고 사이트

- [TCP/UDP 특징](https://mangkyu.tistory.com/15)
- [OSI 7계층 개념1](https://shlee0882.tistory.com/110)
- [OSI 7계층 개념2](https://blog.naver.com/is_king/221569964188)
- [OSI 7계층 개념3](https://sostarzia.tistory.com/36?category=307236)
- [OSI 계층별 개념4](https://m.blog.naver.com/PostView.naver?blogId=ttochid1&logNo=10037450908&targetKeyword=&targetRecommendationCode=1)
- [OSI 7계층과 TCP/IP 4계층](https://goitgo.tistory.com/25)
- [TCP/IP](https://aws-hyoh.tistory.com/entry/TCPIP-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
