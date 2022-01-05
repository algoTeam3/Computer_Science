# 서버(세션) 기반 인증

```
기존 인증 시스템
서버 측에서 세션을 유지하여 사용자들의 정보 기억
```

</br>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbe5HFu%2FbtqAsR8iEdh%2Frk9Xno6XlQAwbTWFiGIXIk%2Fimg.png" alt="msa" width="400"/></p>

</br>

## 세션 인증 문제점

```
1. 세션 : 로그인 중인 사용자가 늘어날 경우 서버 RAM의 과부하
2. 확장성 : 더 많은 트래픽 처리를 위한 서버 확장 어려움
3. CORS(Cross-Origin Resource Sharing) : 여러 도메인 쿠키 관리 어려움
```

</br>
</br>

# 토큰 기반 인증

```
인증받은 사용자들에게 토큰을 발급
서버에 요청을 할 때 헤더에 토큰을 함께 보내도록 하여 유효성 검사
stateless 구조
```

</br>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FogoAg%2FbtqAriyT5sY%2FYYt2wkEz50kKN47mLwRDXK%2Fimg.png" alt="msa" width="400"/></p>

</br>

1. 사용자가 아이디와 비밀번호로 로그인을 한다.
2. 서버 측에서 해당 정보를 검증한다.
3. 정보가 정확하다면 서버 측에서 사용자에게 Signed 토큰을 발급한다. (Signed는 해당 토큰이 서버에서 정상적으로 발급된 토큰임을 증명하는 Signature를 가지고 있다는 것)
4. 클라이언트 측에서 전달받은 토큰을 저장해두고, 서버에 요청을 할 때마다 해당 토큰을 서버에 함께 전달한다. 이때 Http 요청 헤더에 토큰을 포함시킨다.
5. 서버는 토큰을 검증하고, 요청에 응답한다.

</br>

## 토큰 인증 장점

```
1. 무상태성(Stateless) & 확장성(Scalability) : 클라이언트 측의 저장으로 stateless하며 분산처리와 같은 확장에 문제가 없다.
2. 보안성 : 기존 쿠키의 취약점이 사라진다. 다만, 토큰의 취약점 대비 필요
3. 확장성(Extensibility) : 토큰에 선택적인 권한만 부여하여 다양한 플랫폼 로그인 가능 (google, facebook 등)
4. CORS(Cross-Origin Resource Sharing) : 어떤 도메인에서도 토큰의 유효성 검사 후 처리로 문제가 없다.
```

</br>
</br>

# OAuth(Open Authentication / Authorization)

```
인터넷 사용자들이 비밀번호를 제공하지 않고 다른 웹사이트 상의 자신들의 정보에 대해 
웹사이트나 애플리케이션의 접근 권한을 부여할 수 있는 공통적인 수단으로서 사용되는, 
접근 위임을 위한 개방형 표준이다
```

</br>

<p align="center"><img src="https://user-images.githubusercontent.com/56240505/125554097-e3b5f9ff-0cda-4328-a673-03b817166aa2.png" alt="msa" width="300"/></p>

</br>

- OAuth는 Framework, OAuth 안 OAuth Token는 정확한 정보를 가진게 아닌 모호한 토큰이다.

</br>
</br>

# JWT(JSON WEB Token)

```
인증여부 확인을 위한 값, 유효성 검증을 위한 값 그리고 인증 정보 자체를 담고 있는 Token 작성 규약
OAuth에 포함되어 있는 Token
```

</br>

# JWT 토큰 구성

</br>

<p align="center"><img src="https://i2.wp.com/www.opennaru.com/wp-content/uploads/2018/08/JWT_Stacks.png?fit=1200%2C300" alt="msa" width="700"/></p>

</br>
</br>

### 헤더(Header) : 토큰의 타입, 해싱 알고리즘을 지정하는 정보 포함

</br>

```
{
    "typ": "JWT",
    "alg": "HS256"
}
```

- typ : 토큰의 타입
- alg : 해싱 알고리즘 지정

</br>

### 정보(Payload) : 토큰에 담을 정보 (claim : 정보의 한 덩어리, key-value쌍)

- 등록된(registered) 클레임
  - 토큰에 대한 정보를 담기 위한 클레임들이며, 이미 이름이 등록되어있는 클레임
  - iss : 토큰 발급자(issuer)
  - sub : 토큰 제목(subject)
  - aud : 토큰 대상자(audience)
  - exp : 토큰의 만료시간(expiraton). 시간은 NumericDate 형식으로 되어있어야 하며,(예: 1480849147370) 항상 현재 시간보다 이후로 설정되어있어야한다.
  - nbf : Not Before 를 의미하며, 토큰의 활성 날짜와 비슷한 개념. NumericDate 형식으로 날짜를 지정하며, 이 날짜가 지나기 전까지는 토큰이 처리되지 않는다.
  - iat : 토큰이 발급된 시간 (issued at)
  - jti : JWT의 고유 식별자로서, 주로 일회용 토큰에 사용한다.
- 공개(public) 클레임
  - 말 그대로 공개된 클레임, 충돌을 방지할 수 있는 이름을 가져야하며, 보통 클레임 이름을 URI로 짓는다.
- 비공개(private) 클레임
  - 클라이언트 - 서버간에 통신을 위해 사용되는 클레임

</br>

```
{
    "iss": "ajufresh@gmail.com", // 등록된(registered) 클레임
    "iat": 1622370878, // 등록된(registered) 클레임
    "exp": 1622372678, // 등록된(registered) 클레임
    "https://shinsunyoung.com/jwt_claims/is_admin": true, // 공개(public) 클레임
    "email": "ajufresh@gmail.com", // 비공개(private) 클레임
    "hello": "안녕하세요!" // 비공개(private) 클레임
}
```

</br>

### 서명(signature) : 해당 토큰이 조작되거나 변경되지 않았음을 확인하는 용도

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

</br>

### 토큰 예시

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmcmVzaCIsImlhdCI6MTYyMjkwNjg0NSwiZXhwIjoxNjIyOTA4NjQ1LCJpZCI6IuyVhOydtOuUlCIsImVtYWlsIjoiYWp1ZnJlc2hAZ21haWwuY29tIn0.ucTS9OgA7Z751a6aNzttcEXRfEhG_hsZPzZZTHhbUrA
```

</br>

<p align="center"><img src="https://cdn.auth0.com/blog/legacy-app-auth/legacy-app-auth-5.png" alt="msa" width="500"/></p>

</br>

</br>
</br>

# JWT Process

</br>

<p align="center"><img src="https://cdn.auth0.com/content/jwt/jwt-diagram.png" alt="msa" width="600"/></p>

</br>

1. 사용자가 아이디, 비밀번호로 로그인 시도
2. 서버는 요청 확인, secret key를 통해 access token 발급
3. 이후 JWT가 요구되는 API를 요청할 때는 클라이언트가 Authorization header에 Access token을 담아서 보냄
4. 서버는 JWT Signature를 체크하고 Payload로부터 user 정보를 확인해 데이터를 리턴

</br>
</br>

# 참고

- [jwt와 oauth 차이](https://dailyscat.gitbook.io/twis/network/jwt-oauth)
- [OAuth2와 JWT, 웹기반 SSO 인증](https://www.sauru.so/blog/basic-of-oauth2-and-jwt/)
- [JWT를 구현하면서 마주치게 되는 고민들](https://swalloow.github.io/implement-jwt/)
- [Spring Boot에서 JWT 사용하기](https://shinsunyoung.tistory.com/110)
- [서버 기반 인증 & 토큰 기반 인증](https://mangkyu.tistory.com/55)
