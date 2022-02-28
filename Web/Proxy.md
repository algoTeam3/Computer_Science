# Proxy

- 클라이언트와 서버 사이의 중계 서버

### What is Forward Proxy?

![image](https://user-images.githubusercontent.com/68576770/155962064-dbe9e4df-73ba-4f6a-a076-7212f336d968.png)

- proxy server라고도 함
- 클라이언트를 보호하는 게 목적
    - 서버가 응답받은 IP는 proxy server의 IP이기 때문에 클라이언트가 누군지 모름
- 네트워크 외부의 시스템과 클라이언트 간 트래픽을 라우트하는 서버
    - 클라이언트가 네트워크에 연결하고자 할 때, forward proxy가 클라이언트의 요청을 받아 네트워크에 연결한 후 결과를 클라이언트로 전달
- 프록시 서버는 비즈니스 조직이나 데이터 센터 같은 공유 네트워크가 있는 시스템에서 자주 사용됨
- 정책이나 라우트 로직을 시행할 필요 없이, 클라이언트 내에서 클라이언트와 상호작용하는 단일 인터페이스를 노출함
- 하는 일
    - 사전 정책에 따른 트래픽 규제
    - 클라이언트 IP 주소를 변환, 마스킹
    - 보안 프로토콜 시행
    - 알 수 없는 트래픽 차단
    - 캐싱 역할 - 동일한 요청은 서버까지 가지 않고 프록시 서버에서 처리

### What is Reverse Proxy?

![image](https://user-images.githubusercontent.com/68576770/155962150-38f783c4-6699-44d4-b6b1-47ca712ca593.png)

- forward proxy와 반대 역할
- 서버를 보호하는 게 목적
- 클라이언트는 reverse proxy server와 직접 통신만 하고, 실제로 다른 서버가 요청을 처리했는지에 대해서는 알 수 없음
- 클라이언트와 애플리케이션 서버 간 게이트웨이 역할을 수행
    - 모든 접근 정책 관리와 트래픽 라우팅을 하고, 실제로 요청을 처리하는 서버의 identity를 보호함
- 하는 일
    - 클라이언트로부터 요청을 받고,
    - reverse proxy는 다른 내부 서버들 중 한 서버로 요청을 전달하고,
    - 프록시 서버 자체에서 요청을 처리한 것 처럼 실제로 요청을 처리한 서버의 결과를 클라이언트에게 반환

### When/Why do we need Reverse Proxy?

- content caching
  - reverse proxy는 웹사이트 페이지의 mirror version들이 압축되고 캐시되는, 지리적으로 분산된 여러 위치에 배치된다.  
  - 클라이언트에게 빠르게 content 전달 가능
  - 페이지 로딩 시간을 줄여줌
  - 사용자 경험을 향상시킴
- Traffic scrubbing
  - 백엔드 서버로 전송되기 전에 애플리케이션으로 들어오는 모든 트래픽을 scrub하기에 좋다.  
  - DDos 완화 - DDos 공격 시 들어오는 트래픽이 여러 reverse proxy 서버로 분산되어 전체적인 영향을 줄임
  - Web application security - 악성 봇이나 해커의 요청 같은 악의적인 패킷을 제거하기 위한 웹 애플리케이션 방화벽을 배치할 수 있다.
- IP masking
  - reverse proxy 서버로 들어오는 트래픽을 라우팅할 때 connection은 프록시에서 종료된 다음 백엔드 서버에서 다시 열린다.
  - 클라이언트는 proxy IP와 직접 상호작용한다.
  - 원본 서버의 IP 주소는 마스킹되어 호스트 이름만 알면 된다.
  - 공격자가 접근 권한을 얻고 DOS 공격을시작하는 것이 어려워진다.  
- Load balancing
  - reverse proxy 서버는 개별 HTTP 세션을 라우팅 할 위치를 결정할 수 있다.  
  - 여러 백엔드 서버가 있다면 reverse proxy가 부하를 효율적으로 분산할 수 있음을 의미함
  - 전체적인 사용자 경험을 향상시키고 고가용성을 보장한다.
  - 서버가 다운된다면 가용성을 보장하기 위해 트래픽을 다시 라우팅한다.

### References

- [https://www.imperva.com/learn/performance/reverse-proxy/](https://www.imperva.com/learn/performance/reverse-proxy/)
- [https://www.strongdm.com/blog/difference-between-proxy-and-reverse-proxy#:~:text=A traditional forward proxy server,on behalf of multiple servers](https://www.strongdm.com/blog/difference-between-proxy-and-reverse-proxy#:~:text=A%20traditional%20forward%20proxy%20server,on%20behalf%20of%20multiple%20servers).
