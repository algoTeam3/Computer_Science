# Transport layer
![image](https://user-images.githubusercontent.com/68576770/140342293-4a0eedb1-fbc0-46a2-bfc8-f86c1966224e.png)
- 전송 계층 : end point와 end point 간 데이터를 전달하는 계층으로, 하위 계층에서 전달받은 패킷 오류 검사, 포트번호로 주소 지정 등을 함
- OSI 7 Layer와 TCP/IP 4 Layer의 프로토콜 계층 중 데이터 송수신을 담당하는 계층이다.
  - 아래 계층인 네트워크 계층이나 인터넷 계층에서는 모든 패킷을 개별적으로 처리하기 때문에 신뢰성 있는 전송이 어렵다. (데이터 손실 발생)
  - 따라서, 상위 계층인 전송 계층에 의존함
- 신뢰성 있는 데이터 전송을 위해
  - 데이터를 순차적으로, 안정적인 흐름으로 전달해야 하고,
  - 포트 번호에 해당하는 프로세스에 데이터를 잘 전달해야 함
- 전송 계층에 속한 프로토콜이 TCP와 UDP이다.
# TCP(Transfer Control Protocol)
- 신뢰성을 바탕으로 모든 데이터의 송수신을 보장하는 프로토콜
- 예를 들어, 파일 다운로드 받는데 중간에 끊긴다던지, 브라우저 화면의 일부만 보인다면 데이터의 의미가 없어질 수 있음
<br><img src="https://user-images.githubusercontent.com/68576770/140380272-be4afb27-e721-4ac9-a1e4-a5a4a3864ba0.png" width="250"><br>
### 3 way handshake
- 연결 지향 (connection oriented)
  - 데이터가 일부만 보이거나 뒤죽박죽 되게 하지 않기 위해  TCP는 송신자와 수신자 사이의 connection을 확실히 한다.
##### 참고. TCP Segment Format
![image](https://user-images.githubusercontent.com/68576770/140360717-b415313c-3c01-4963-9564-2fc036edc96c.png)
- Segment : TCP 프로토콜 내에서 데이터가 처리되는 단위. (TCP Header + data)
  - TCP Header는 20bytes
- flag field : TCP 연결 제어하고 데이터를 관리하는 필드
  - SYN : 통신을 위한 연결 구축에 사용하는 플래그 비트
  - FIN : 통신이 끝난 후 연결 끊을 때 사용하는 플래그 비트
  - ACK : 수신자가 연결 구축 시 응답할 때 사용하는 플래그 비트
---
![image](https://user-images.githubusercontent.com/68576770/140370746-2f2c6520-4b8c-41b7-a1bb-ed2a15bbda4c.png)
1) client가 보내는 패킷의 SYN 비트 1로 변경 후 server에게 보냄
2) server가 받으면 SYN, ACK 비트를 1로 변경 후 client에게 보냄
3) client가 ACK를 1로 변경 후 server에게 보내고 Established 되고, client가 보낸 패킷을 수신자가 받고 나면 server측도 Established된다.
- connection 완료, 데이터 전송 준비!
# UDP(User Datagram Protocol)
- 데이터를 직접 전송하며 수신자가 데이터를 받았는지에 대한 여부는 확인하지 않는 비 연결형 프로토콜
- TCP와의 주요 차이점은 데이터의 완전한 전달을 보장하지 않아 신뢰성이 낮다는 것이다.
- 연결을 설정하지 않으므로 속도가 빠르다.
- 예를 들면, 비디오나 음악 스트리밍 사이트 등에서 사용됨
##### 참고. User Datagram Format
![image](https://user-images.githubusercontent.com/68576770/140374290-36b73258-0de1-4efd-b8ef-af9613cd8dc0.png)
- User Datagram : UDP에서 데이터 처리하는 단위 (8 bytes)
# TCP vs UDP
> 정확성 vs 속도
- 둘의 공통점
  - 패킷 오류 검사를 하는 체크섬이 있다
  - 포트 번호로 주소를 지정한다
 
||TCP|UDP|
|:-----------:|:---------------------:|:---------------------:|
|연결 방식|Connection Oriented|Connectionless|
|속도|느림|빠름|
|신뢰성|높음|낮음|
|통신 방식|1:1|1:1 or 1:N or N:N|

- TCP와 UDP 둘 다 데이터 전송에 있어서 필수적이다.
- TCP와 UDP의 장단점을 비교하고, 특성에 따라, 헤더에 따라 적절하게 선택하여 성능을 개선하는데 이용하자
# References
- https://velog.io/@swhan9404/AWS-%EA%B3%B5%EB%B6%80-3%EC%A3%BC%EC%B0%A8-OSI-7%EA%B3%84%EC%B8%B5%EA%B3%BC-TCPIP
- https://www.geeksforgeeks.org/tcp-and-udp-in-transport-layer/
- https://www.javatpoint.com/computer-network-transport-layer-protocols
- https://coding-factory.tistory.com/614
