# 📌 예상 질문과 답변
> [예상 질문 보러가기](https://github.com/algoTeam3/Computer_Science/blob/main/Network%20%26%20Web/OSI-7_Tcp-3way-4way/readme.md)

<br>

## ☑ OSI 7계층

### Q. 브리지와 스위치의 공통점과 차이점

#### 공통점

    • 데이터 링크 계층
    • 세분화 된 네트워크 세그먼트를 연결하는 데 사용된다.

#### 차이점

    • 브리지
      ◽ 소프트웨어 처리 방식으로 프레임을 다시 만들기 때문에 속도가 느리다.
      ◽ 스위치에 비교하여 적은 수의 네트워크를 연결한다.
      ◽ store-and-forward 방식

    • 스위치
      ◽ 하드웨어 처리 방식으로, 속도가 빠르다.
      ◽ 많은 수의 포트를 제공할 수 있다.
      ◽ 버퍼에서 수행되지 않은 오류 검사를 수행한다.
      ◽ cut-throught 또는 store-and-forward 방식

<br>

### Q. 세션 계층의 특징

> 프로토콜 : SSL, TLS, NetBIOS 등  
> 전송 단위 : data  
> 역할 : 응용 프로그램들 간의 **통신 관리** 및 **동기화** 유지

✔ 데이터 전송 시 동기점을 제공해서 오류 발생 시 데이터를 재전송하거나 복구할 수 있다.

- 동기화
  - **전이중 통신(Full Duplex)** : 두 대의 단말기가 데이터를 송수신하기 위해 동시에 각각 독립된 회선을 사용하는 통신 방식
    - 전화망, 고속 데이터 통신
  - **반이중 통신(Half Duplex)** : 한 쪽이 수신하는 동안 다른 쪽에서 수신하는 통신 방식으로, 전송 방향을 교체하는 방식

<br>

### Q. 전송계층의 대표 프로토콜과 단위

**TCP(Transmission Control Protocol)**

    • 연결형 서비스를 지원하는 전송 계층 프로토콜
    • 데이터의 전송 순서 보장한다.
    • UDP보다 전송 속도가 느리다.
    • 단위 : segment

**UDP(User Datagram Protocol)**

    • 비연결형 서비스를 지원하는 전송 계층 프로토콜
    • 정보를 주고 받을 때 정보를 보내거나 받는다는 신호 절차를 거치지 않는다.
    • TCP보다 전송 속도가 빠르다.
    • 단위 : datagram(독립적인 관계를 지니는 패킷)

<br>

### Q. 왜 TCP/IP 모델을 쓸까요?

> **TCP/IP 모델** : 범용적으로 사용하는 TCP 프로토콜과 IP 프로토콜을 OSI 7계층 형식에 맞추어 추상화/간략화 시킨 모델

TCP/IP 모델이 시장 점유율이 더 높기 때문에 현대의 인터넷은 TCP/IP 모델을 따르고 있다.

<br>

#### 참고

> [브리지와 스위치1](https://letitkang.tistory.com/95)  
> [브리지와 스위치2](https://ko.gadget-info.com/difference-between-bridge)  
> [세션 계층의 특징1](https://wiseworld.tistory.com/55)  
> [세션 계층의 특징2](https://dev-mystory.tistory.com/100)  
> [세션 계층의 특징3](https://onecoin-life.com/19)  
> [TCP와 UDP](https://choseongho93.tistory.com/3)


<br>

## ☑ TCP 3 way/4 way handshake

<br>

# 박창현

1. 4 Way Handshake 동작과정과 상태를 설명해주세요
