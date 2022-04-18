# OSI 7계층

> OSI(Open Systems Interconnection)

**서로 다른 컴퓨터 간의 정보 교환**을 원활히 하기 위해 국제표준화기구(ISO, International Standards Organization)에서 제정한 것으로, 네트워크를 이루고 있는 구성 요소들을 계층적 방법으로 나누고 각 계층의 표준을 정한 것이다.

![OSI7](https://blog.kakaocdn.net/dn/cT6a5c/btqB5E7ghSY/Wn4RVdzp5OUnPyQor8Ln80/img.jpg)

<br>

## 물리 계층(Physical Layer)

> 리피터, 케이블, 허브 등

- 전송에 필요한 두 장치 간의 실제 접속과 절단 등 기계적, 전기적, 기능적, 절차적 특성 정의

<br>

## 데이터 링크 계층(Data Link Layer)

> 브리지, 스위치 등

- 두 개의 인접한 개방 시스템들 간에 신뢰성 있고 효율적인 정보 전송을 할 수 있게 함
- 흐름 제어, 프레임 동기화, 오류 제어, 순서 제어 기능
- 링크의 확립, 유지, 단절의 수단 제공

<br>

## 네트워크 계층(Network Layer)

> 라우터 등

- 개방 시스템들 간의 네트워크 연결 관리(연결 설정/유지/해제), 데이터 교환 및 중계
- 경로 설정(Routing), 트래픽 제어, 패킷 정보 전송

<br>

## 전송 계층(Transport Layer)

> TCP, UDP 등

- 종단 시스템(End-to-End)간의 신뢰성 있고 투명한 데이터 전송을 가능하게 함
- 전송 연결 설정, 데이터 전송, 연결 해제 기능
- 관련 장비 : 게이트웨이

<br>

## 세션 계층(Session Layer)

> API, Socket 등

- 송수신측 간의 관련성을 유지하고 대화 제어를 담당
- 대화(회화) 구성 및 동기 제어, 데이터 교환 관리 기능

<br>

## 표현 계층(Presentation Layer)

> JPEG, MPEG 등

- 응용 계층으로부터 받은 데이터를 세션 계층에 맞게, 세션 계층에서 받은 데이터는 응용 계층에 맞게 변환
- 코드 변환, 데이터 암호화, 데이터 압축, 구문 검색, 정보 형식(포맷) 변환 기능

<br>

## 응용 계층(Application Layer)

> HTTP 등

- 사용자(응용 프로그램)가 OSI 환경에 접근할 수 있도록 서비스를 제공

<br>

## 참고

> https://youtu.be/78qXOlD-8NQ  
> https://github.com/gyoogle/tech-interview-for-developer/blob/master/Computer%20Science/Network/OSI%207%20%EA%B3%84%EC%B8%B5.md  
> https://whatsup95.tistory.com/19

<br>

---

<br>

# TCP

**전송 계층에서 사용하는 프로토콜**로, 장치들 사이에 논리적인 접속을 성립하기 위하여 연결을 설정하여 **신뢰성을 보장**하는 연결형 서비스

<br>

## 3-way handshake

TCP 통신을 이용하여 데이터를 전송하기 위해 **네트워크 연결을 설정하는 과정**

![3-way](https://gmlwjd9405.github.io/images/network/3-way-handshaking.png)

    1️⃣ A > B : SYN
    ✔ A가 연결 요청 메세지 전송(SYN)

    2️⃣ B > A : SYN + ACK
    ✔ B가 요청 수락, SYN 패킷 전송

    3️⃣ A > B : ACK
    ✔ 수락 확인(ACK)을 보내 연결을 맺기
    ✔ 해당 단계에서 데이터 전송 가능

<br>

## 4-way handshake

TCP의 **연결을 해제하는 과정**

![4-way](https://gmlwjd9405.github.io/images/network/4-way-handshaking.png)

    1️⃣ A > B : FIN
    ✔ A가 연결을 종료하겠다는 FIN 플래그 전송

    2️⃣ B > A : ACK
    ✔ B의 확인 메세지(ACK)
    ✔ B는 통신이 종료될 때까지 대기
    ✔ 전송할 데이터가 남아있다면 이어서 전송

    3️⃣ B > A : FIN
    ✔ B가 통신이 종료되면, 종료에 합의한다는 의미로 FIN 플래그 전송

    4️⃣ A > B : ACK
    ✔ A의 확인(ACK)

<br>

## 참고

> https://velog.io/@averycode/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-TCPUDP%EC%99%80-3-Way-Handshake4-Way-Handshake  
> https://gmlwjd9405.github.io/2018/09/19/tcp-connection.html  
> https://bangu4.tistory.com/74
