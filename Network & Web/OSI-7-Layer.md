# OSI 7 계층

```
네트워트 간 호환성을 유지하기 위해 표준 모델로 제시
통신이 일어나는 과정을 독립된 7 계층으로 구분
데이터 캡슐화
```

### OSI, Open Systems Interconnection Reference Model

- 국제 표준화 기구 ISO에서 개발한 모델
- 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것
- 추상형 네트워크 모델 + 특정 프로토콜들의 집합
  → 프로토콜을 기능별로 나눴다.
  → 이상이 생기면 다른 단계는 상관없이 특정 계층만 보면 된다!
- 각 계층은 바로 아래 계층의 기능만 이용하고, 바로 위 계층에게 기능을 제공

<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546821-06aed369-fcf8-4d8d-bf04-27e0c3581c08.png" alt="OSI 7 LAYERS" width="600"/></p>

1. 상위 계층

- 사용자를 위한 계층
- 호스트 내부에서 처리되는 기능들

2. 전송층

- End-to-End 프로세스 간 신뢰할 수 있는 데이터 전송 보장

3. 하위 계층

- 네트워크 지원 계층
- 두 장치 간에 데이터를 보낼 때 전기적인 규격, 물리 주소 등 물리적인 면을 처리

<br />

---

<br />

### 1. 물리 계층

```
물리적 매개체
디지털 신호 ⇌ 아날로그 신호
전송 단위 : 비트
```

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546316-6d6e63e3-3919-4c9a-bfc1-b7114833ad7e.png" alt="OSI 1 LAYER" width="600"/></p>

- 물리적인 매체를 통해 비트를 전송하기 위해 필요한 기능 조정
  → 하드웨어 기술
- 하드웨어 장비 : 통신 케이블, 리피터, 허브, 모뎀 등

<br />
<br />

### 2. 데이터 링크 계층

```
Node-to-Node : 이웃 노드에게 데이터 전송
대표 프로토콜 : Ethernet
전송 단위 : 프레임
```

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546353-e56ee7f3-3752-4b4b-9b0f-a72d487dc3a9.png" alt="OSI 2 LAYER" width="500"/></p>
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546377-3df624ba-e892-454a-a84b-31b76a86b433.png" alt="OSI 2 LAYER" width="500"/></p>
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546406-916cc01f-0b15-4f71-a7e8-93a0a199b53e.png" alt="OSI 2 DATA" width="450"/></p>

- 주소 할당 : MAC주소(기기에 부여된 고유한 **물리적 주소**)로 직접 연결된 기기에 전송
- 오류 감지 : 신호가 전달되는 동안 오류가 감지되면 데이터 폐기
- 흐름 제어, 접근 제어
- Framing : 수신 측 - 물리 계층을 통해 수신한 신호를 조합해서 신뢰성있는 링크로 변환
  <br /> ⇿ 발신 측 - 데이터 앞 뒤에 헤더와 푸터를 감싸서 보호
- 하드웨어 장비 : 브리지, 스위치, 와이파이 공유기 등
  <br />

### 3. 네트워크 계층

```
IP 주소를 이용해서 데이터 전달
대표 프로토콜 : IP
전송 단위 : 패킷
```

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546496-2a64036a-d615-4c92-93f2-8891d4523d7d.png" alt="OSI 3 LAYER" width="700"/></p>
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546454-ca61fad5-795c-4631-a84c-eebe72014dfb.png" alt="OSI 3 DATA" width="450"/></p>


- 호스트의 IP 주소(**논리적 주소**)를 할당
  <br /> → IP 주소를 활용해서 데이터를 목적지까지 효율적으로 전달하는 기능
- 여러 네트워크를 거쳐 목적지까지 패킷 전달 (Routing & Forwarding)
- 비연결 지향 통신
- 전세계의 컴퓨터와 데이터를 주고 받을 수 있게 됨! → **인터넷** 가능

<br />

### 4. 전송 계층

```
신뢰성 있는 데이터 전송
포트 주소 담당 → 올바른 프로그램에 데이터 전달
대표 프로토콜 : TCP, UDP
전송 단위 : TCP - Segment / UDP - datagram
```

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546563-5e89d0b7-12e0-4651-a5b2-afcbebb3b5ee.png" alt="OSI 4 LAYER" width="650"/></p>
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546598-e1087684-18a9-410b-8f41-245ffe47e3a2.png" alt="OSI 4 DATA" width="400"/></p>

- 프로토콜 내에서 송신자와 수신자를 연결하는 통신 서비스 제공
- 기기 간에 신뢰성 있는 데이터를 주고 받도록 하는 기능
- 포트 번호를 사용해서 올바른 프로세스에 데이터를 전달
- 특정 방화벽, 프록시 서버

<br />

### 5. 세션 계층

```
두 기기 간의 통신 연결 관리
대표 프로토콜 : ASP, SDP
전송 단위 : Data
```

- TCP/IP 세션을 만들고 없애는 책임
- 통신하는 프로세스 사이의 대화 제어 및 동기화 지점 설정 (데이터 손실되면 복원)
- 연결이 양방향(전이중)인지 단방향(반이중)인지 확인
- 인증, 허가, 세션 회복

<br />

### 6. 표현 계층

```
데이터 변역가
대표 프로토콜 : AFP, ICA, NCP
전송 단위 : Data
```

- 데이터 표현이 상이한 응용 프로세스의 독립성을 제공
- 인코딩, 디코딩 / 암호화, 복호화

<br />

### 7. 어플리케이션 계층

```
사용자 인터페이스
대표 프로토콜 : HTTP, SMTP, FTP, DNS
```

- 최종 목적지로 사용자에게 서비스를 제공
- 전송 계층 프로토콜을 사용하여 호스트 간 연결을 확립

<br />

---

## SUMMARY

<br />

### # 독립된 7개의 계층들로 이뤄진 통신 모델

- 출발지에서 목적지까지 독립된 계층 간에 데이터를 전송

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546639-6efbac4c-b681-4a0d-be28-82bf06b0375d.png" alt="OSI FLOW" width="600"/></p>
<br />
<br />

### # 데이터 캡슐화

- 데이터가 각 계층을 지나면서 상위 계층에서 받은 데이터에 자신의 계층 특성을 담은 제어 정보를 헤더화 시켜 붙이는 일련의 과정

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/140546659-b1d3ff6c-144b-46f4-8294-6d9c76f502da.png" alt="OSI DATA" width="450"/></p>
