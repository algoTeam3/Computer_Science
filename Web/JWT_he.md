# JWT(JSON Web Token)

> 인증에 필요한 정보들을 암호화시킨 JSON 토큰

클라이언트와 서버, 서비스와 서비스 사이 통신 시 권한 인가(Authorization)를 위해 사용하는 토큰

- **인증(Authentication)** : 로그인
- **인가(Authorization)** : 로그인 상태 유지

### 특징

1️⃣ 클라이언트에 저장되므로, 메모리/스토리지 등을 통해 세션을 관리했던 서버의 부담을 덜 수 있다.  
2️⃣ 토큰 자체에 사용자 권한 정보나 서비스를 사용하기 위한 정보가 포함(Self-contained) 된다.  
3️⃣ 토큰이 한 번 발급된 이후 사용자의 정보를 바꾸더라도 토큰을 재발급하지 않는 이상 반영되지 않는다.

<br>

## 구성

![구성](https://blog.kakaocdn.net/dn/bwmwBq/btrqGVel5Qk/nPIPkduUJk2xT8Lv00FPb0/img.png)

- **Header** : JWT에서 사용할 타입과 해시 알고리즘의 종류로 구성
- **Payload** : 서버에서 첨부한 사용자 권한 정보와 데이터가 담겨 있음
- **Signature** : Header, Payload를 Base64 URL-safe Encode를 한 이후 Header에 명시된 해시함수를 적용하고, 개인키(Private Key)로 서명한 전자서명이 담겨 있음

📌 서버는 요청에 토큰 값이 실려들어오면 `Header`, `Payload`의 값을 '서버의 비밀 키'와 함께 계산된 결과 값이 `Signature`와 일치하는지 확인 + 유효기간 확인

<br>

## 순서

![순서](https://i1.wp.com/www.opennaru.com/wp-content/uploads/2018/08/jwt_process_image_v2.png?fit=1920%2C1080)

<br>

## 장점

✓ 토큰 자체에 사용자 인증에 필요한 모든 정보를 포함하기 때문에 별도의 인증 저장소가 필요 없다.  
✓ 분산 마이크로 서비스 환경에서 중앙 집중식 인증 서버와 데이터베이스에 의존하지 않는 쉬운 인증 및 인가 방법을 제공한다.  
✓ 트래픽에 대한 부담이 낮으며 관리가 용이하다.

<br>

## 단점

✓ 데이터베이스에서 사용자 정보를 조작하더라도 토큰에 직접 적용할 수 없다.  
✓ 더 많은 필드가 추가되면 토큰이 커질 수 있다.

<br>

## 한계

❓ **동시접속을 한다면?** `세션` 방식은 기존 세션을 종료하여 동시접속을 막을 수 있다.  
❓ **누군가 JWT를 탈취한다면?** 서버에는 토큰 정보가 없다!

1️⃣ 로그인 후, 2개의 토큰 발급  
2️⃣ 몇 시간/몇 분 이하로 유효한 access 토큰과 꽤 긴 시간(보통 2주) 유효한 refresh 토큰  
3️⃣ 두 개의 토큰을 발급하고 클라이언트에게 보낸 후, refresh 토큰은 상응값을 database에 저장  
4️⃣ 클라이언트는 access 토큰의 수명이 다하면 refresh 토큰 보내기  
5️⃣ 서버는 database 값과 대조하여, 맞다면 새 access 토큰 발급

- `access 토큰` : 매번 인가를 받을 때 쓰는 수명 짧은 토큰
- `refresh 토큰` : access 토큰을 재발급 받을 때 쓰는 토큰

📢 **하지만 이마저도 access 토큰이 살아있는 동안은 차단할 방법이 없다.**

<br>

## 참고

> https://pronist.dev/143  
> http://www.opennaru.com/opennaru-blog/jwt-json-web-token/  
> https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-JWTjson-web-token-%EB%9E%80-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC  
> https://youtu.be/1QiOXWEbqYQ
