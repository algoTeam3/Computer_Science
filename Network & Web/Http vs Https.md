# Http와 Https의 차이

## Http(Hypertext Transfer Protocol)

- 클라이언트와 서버 사이에서 통신을 주고받게 해주는 프로토콜
- 통신으로 주고받는 데이터가 암호화되지 않아 쉽게 데이터를 도난당함

## Https(Hypertext Transfer Protocol Secure)

- SSL을 사용함으로써 데이터 보안 문제를 해결한 프로토콜
- **공개키** 암호화 방식으로 텍스트 암호화

![https](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTIQPl%2Fbtq0kDsepHd%2FUzzv6JatoLtsDsdvXFZmsk%2Fimg.png)

</br>

## 공개키

- 암호화와 복호화에 사용하는 암호키를 분리한 알고리즘
- 자신이 가지고 있는 고유 비밀키로만 복호화 가능한 공개키를 공개

![공개키](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAGD4h%2Fbtq0pypJPGx%2FkkTh7vd6VMgrbRnJAF8KH0%2Fimg.png)

## 대칭키

- 암호화와 복호화에 같은(대칭) 암호키 사용
- 동일한 키를 주고 받아 속도가 빠르나 해킹 위험 노출

![대칭키](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FW94Qi%2Fbtq0teEbVJK%2FWKelKm2z3UqPpQOCQ2KKL0%2Fimg.png)

</br>

# TLS(Transport Layer Security) / SSL(Secure Sockets Layer) HandShake

- Https로 정보를 보호하기 위한 SSL 인정서 신뢰성 여부 판단 방식

![TSL](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbE36KD%2Fbtq0tfDkLaZ%2FazI7Wlmon3eCzE5dQKNCq0%2Fimg.png)

1. 암호화 알고리즘과 TLS 정보를 난수값과 함께 전송
2. 사용할 TSL 버전, 암호화 알고리즘, 난수값 전송
3. CA로 발급받은 인증서 전송
4. 키 교환에 필요한 정보 제공
5. 서버가 클라이언트를 인증해야할 때 인증서 요구
6. 서버 메시지 전송 완료
7. 대칭키로 사용하게될 키 값(pre-master-key)을 공개키 방식을 사용하여 전송
8. 키 값(pre-master-key)을 복호화 후 대칭키(master-key)로 변경

</br>

# 참고

- [https://mysterico.tistory.com/30](https://mysterico.tistory.com/30)
- [https 통신 흐름 참고](https://firework-ham.tistory.com/4)
- [https 참고](https://brunch.co.kr/@hyoi0303/10)
- [ssl 참고](https://wangin9.tistory.com/entry/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90-URL-%EC%9E%85%EB%A0%A5-%ED%9B%84-%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94-%EC%9D%BC%EB%93%A4-5TLSSSL-Handshake)
