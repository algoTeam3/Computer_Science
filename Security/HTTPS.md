#  HTTPS

```
HyperText Transfer Protocol over Secure Socket Layer (PORT 443)
웹을 안전하게 지켜주는 암호화된 HTTP
민감한 정보도 서버와 안전하게 전달 받을 수 있도록
```
<br />

통신의 인증과 암호화를 위해 개발한 웹 통신 프로토콜로, 기존 프로토콜 중 하나인 HTTP의 보안이 강화된 버전이다.<br />
소켓 통신에서 일반 텍스트 대신 TLS (전송 계층 보안 프로토콜)을 통해 세션 데이터를 암호화한다.<br />

<br />

---

<br />

## 암호화하지 않은 프로토콜의 약점
<br />

1. 암호화하지 않은 평문 통신 → 도청 가능
    - TCP/IP의 구조의 통신 내용은 전송 도중 도청 가능
    - 네크워크 상 흐르는 패킷 - 패킷 캡처(Wireshark)나 스니퍼 등의 툴로 수집하고 해석 가능 
    - 신용 카드 번호 등 유출 가능
<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/139431451-e284fc47-b31f-423a-b1b2-9ec67dd57d0b.png" alt="weakness" width="400"/></p>

<br />

2. 인증 X → 위장 가능
    - 클라이언트에서 문제점 
        - 리퀘스트 보낸 웹 서버가 원래 의도한 서버인지 확인 불가
    - 서버에서의 문제점 
        - 리스폰스를 반환한 곳이 원래 의도한 클라이언트인지 확인 불가 
        - 엑세스 제한이 없는 경우 의미없는 리퀘스트라도 수신 → 대량의 리퀘스트에 의한 DoS 공격 방지 불가

<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/139431532-70b20b35-32db-4131-9509-f838360a7ac2.png" alt="weakness" width="400"/></p>

<br />

3. 데이터 무결성 증명 X → 변조 가능
    - 수신한 내용 증명 불가 
    - 중간자 공격 (Man-in-the-Middle): 통신 도중에 내용을 빼앗아 변조

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/139431567-a8179f46-8471-4dd3-90d9-fe3baed31c97.png" alt="weakness" width="400"/></p>

<br />

<br />
<br />

### \# 약점을 보완하는 대안
<br />

1. 암호화 
    1. 통신 암호화 
        - HTTP + TLS ⇒ HTTPS 
    2. 콘텐츠 암호화
        - 메세지 바디에 포함되는 컨텐츠 암호화
        - BUT, 클라이언트와 서버에서 암호화 및 복화화 구조가 있어야 함 <br />
            ⇒ 주로 일반 유저가 아닌 웹 서비스 등에서 이용 <br />
        - ex) 넷플릭스 등 OTT 서비스 - 멀티 DRM + 포렌식 워터마킹
        - [참고하면 좋은 글](https://pallycon.tistory.com/entry/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%BD%98%ED%85%90%EC%B8%A0%EB%A5%BC-%EB%B3%B4%ED%98%B8%ED%95%98%EB%8A%94%EA%B0%80-%EC%A0%9C1%EB%B6%80)

<br />

2. TLS로 인증
    - TLS: 암호화 및 인증서(신뢰할 수 있는 제3자 기관이 발행) 제공
    - 해커의 정보 탈취 위험 X
    - 클라이언트는 웹 사이트 인증 시 사용 가능 

<br />

3. 변조 방지
    - MD5, SHA-1 등의 해시값 확인 방법
    - PGP 같은 파일의 디지털 서명 확인 방법 (이메일에 자주 사용)
    - BUT, 두 방법 모두 사용자가 직접 검사 + PGP,MD5 자체도 수정 가능<br />

        ⇒ 확실한 방지를 위해 HTTPS 활용!

<br />

---

<br />

## HTTP + 기밀성 + 인증 + 무결성 = HTTPS
<br />

## :closed_lock_with_key: HTTP + TLS 
- 보통 HTTP : 직접 TCP와 통신 
- HTTPS : TLS가 TCP와 통신
    - 지원 가능한 알고리즘을 서로 교환 (MAC 결정)
    - 키 교환, 인증 (공개키 방법 활용)
    - 대칭키 암호로 암호화하고 메세지 인증 (HMAC 해시 함수 활용)

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/139431609-914cae2a-dffa-4d1d-87e3-5008cbfc4d1d.png" alt="tls" width="600"/></p>

<br />
<br />

### :key: 공개 키 암호화 + 대칭 키 암호 

<br />

### 1. 대칭 키

```
- 암호화 키와 복호화 키가 서로 동일
```

- 상대방에게 키를 전달해서, 서로 같은 키로 암호화 및 복호화

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/139431656-8f7a992a-2d82-4cf3-8e67-dadae85257ec.png" alt="one key" width="600"/></p>

<br />
<br />

### 2. 공개 키

```
- 암호화 키와 복호화 키가 서로 다른 한 쌍 
```

- 비밀 키는 공개 키로만 해석되고, 공개 키는 비밀 키로만 해석되는 한 쌍
- 상대방에게 상대의 공개 키로 암호화된 정보 전달 <br />
    → 상대방은 비밀 키로 복호화

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/139431707-09f2b41d-99f7-4226-88a8-277f9864d943.png" alt="two keys" width="600"/></p>

<br />
<br />

### 3. 하이브리드 암호 시스템


```
- 처리 속도가 상대적으로 느린 공개 키 → 대칭 키 교환에 사용
- 처리 속도가 상대적으로 빠른 대칭 키 → 이후 통신에 사용 
```

- 대칭 키를 보낼 때 공개 키 암호화 방식으로 안전하게 전달 
- 이후 통신에서는 처리속도가 상대적으로 빠른 대칭 키 방식을 사용

<br />

<p align="center"><img src=https://user-images.githubusercontent.com/66818228/139431747-d0831a78-b3d5-4c23-b7bb-bb39eeb0b92a.png
" alt="hybrid" width="400"/></p>

<br />
<br />

### 4. 공개 키가 정확한지 증명하는 인증서와 CA 인증기관

- 서버가 공개 키를 보내는 도중에 공격자가 바꿔치기 할 수도 있다. <br />
    → 신뢰할 수 있는 제 3자 기관에서 증명

<br />

- 과정

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/139431762-fbce216c-b3ca-4839-89fa-c165d6ea7dd8.png" alt="ca certificate" width="600"/></p>

<br />

1. [Server → CA] 사이트 정보와 공개키 제출 <br />
2. [CA] 사이트 정보와 공개키를 CA의 비밀키로 암호화 →  인증서 제작 <br />
3. [CA → Server] 인증서 발급<br />
4. [CA → Client] CA의 공개키 전달 → 브라우저에 내장<br />
5. [Client → Server] 접속 요청 <br />
6. [Server → Client] 3에서 발급받은 인증서 전달<br />
7. [Client] CA의 공개키로 인증서 검증<br />
8. [Client] 사이트 정보와 사이트의 공개키 획득 성공!<br />
9. [Client → Server] 사이트의 공개키로 대칭키를 암호화해서 전달<br />
10. [Server] 사이트의 비밀키로 해독  → 대칭키 획득 <br />
11. 대칭키를 이용해서 통신<br />

<br />
<br />

### 5. HTTPS의 통신 구조

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/66818228/139431778-8f0011f6-70cd-4e37-bae1-f4463d473919.png" alt="https" width="400"/></p>

<br />

1. [Client] Client Hello 
    - 사용자가 사이트에 접속하기 위해 사이트 서버에 통신 요청 
    - TLS 버전, Cipher 리스트, 난수 정보 전송

2. [Server] Server Hello 
    -  서버의 TLS버전, 난수 정보, 클라이언트의 Cipher 리스트 중 한 개의 ciper suite 전송 

3. [Server] Certificate
    - 인증서 정보 전송

4. [Server] Server Hello Done

<br />

** 생략가능 ([Client] Client Certificate : 클라이언트 인증서 전송)

<br />

5. [Client] Client Key Exchange
    - 클라이언트의 난수와 서버의 난수로 pre-master-secret 생성 (= 대칭 키)
    - 서버의 공개키로 암호화한 뒤 전송 

<br />

** 생략가능 ([Client] Client Verify : 클라이언트 인증서의 무결성 검증)

<br />

6. [Client] Change Cipher Spec
    - 이 메세지 이후의 통신은 암호키로 진행할 것이라는 내용

7. [Client] Finished
    - 암호키와 협상된 cipher suite로 암호화한 메세지 전송

8. [Server] Change Cipher Spec
9. [Server] Finished
    - 서버에서도 동일 

10. [Client] Application Data
    - Finished 메세지 교환 완료 후 TLS에 의해 접속 확립 
    - 애플리케이션 계층의 프로토콜인 HTTP에 의해 통신

11. [Server] Application Data
    - 10과 동일

12. [Client] close_notify
    - 클라이언트 측에서 접속 끊음
    - 이후 TCP FIN 메세지를 보내 TCP 통신 종료



<br />
<br />

---
## 마무리

HTTPS는 HTTP에 암호화와 인증, 완전성 보호를 더한 프로토콜로, 안전한 웹 서비스를 위한 최소한의 필수 요건이다.


<br />
