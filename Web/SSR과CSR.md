> 웹 브라우저가 HTML을 구현하는 방식에는 SSR(Server Side Rendering), CSR(Client Side Rendering)이 있다.

<br/>

# Rendering?

서버로부터 HTML 파일을 받아 브라우저에 뿌려주는 과정

<br/>

# SSR(Server Side Rendering)

![SSR](https://blog.kakaocdn.net/dn/cyhDsa/btrcAbJbAoG/PD3lmNHRHxDIBVNhOeekuk/img.png)

**서버에서 사용자에게 보여줄 페이지를 모두 구성하여 사용자에게 페이지를 보여주는 방식**이다.

<br/>

### 장점 👍

- 초기 로딩 시간이 CSR보다 빠르다.
- 서버 사이드에서 컴파일되어 클라이언트로 넘어오기 때문에 SEO(검색 엔진 최적화)가 가능하다.

### 단점 👎

- 매번 서버에 요청하기 때문에 서버의 부담이 크다.
- 새로고침하면 완전히 새 페이지를 로딩한다.

<br/>

# CSR(Client Side Rendering)

![CSR](https://blog.kakaocdn.net/dn/to5V7/btrcvx7uYdt/PdwI6hkof08110tMQeafC1/img.png)

**최초 로딩 시 브라우저가 서버에 HTML을 비롯한 CSS, JavaScript 등 각종 리소스를 받아오는 방식**이다.

<br/>

### 장점 👍

- 서버의 부담이 덜하다.
- 새로고침하면 필요한 부분만 다시 읽어온다.

### 단점 👎

- 초기 로딩 시간이 SSR에 비해 느리다.
- 처음에는 HTML이 비어있어 크롤러가 데이터를 수집할 수 없기 때문에 SEO(검색 엔진 최적화) 문제가 발생한다.

<br/>

# SSR과 CSR의 차이

![SSR과 CSR의 차이](https://blog.kakaocdn.net/dn/Ztkl8/btrcA2ZxSVm/5wyaYXSmp5G7HAZhAq695K/img.jpg)

### DOM(Document Object Model)

브라우저의 렌더링 엔진은 웹 문서를 로드한 후, 파싱하여 웹 문서를 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재하는데 이를 DOM이라 한다. 즉, **모든 요소와 요소의 어트리뷰트, 텍스트를 각각의 객체로 만들고 이들 객체를 부자 관계를 표현할 수 있는 트리 구조로 구성한 것**이다.

<br/>

# 참고

> [[WEB] CSR과 SSR](https://maenco.tistory.com/entry/WEB-CSR%EA%B3%BC-SSR)  
> [[ 기술 스터디 ] SSR과 CSR의 차이](https://velog.io/@vagabondms/%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%84%B0%EB%94%94-SSR%EA%B3%BC-CSR%EC%9D%98-%EC%B0%A8%EC%9D%B4)  
> [SSR과 CSR의 차이](https://bbbyung2.tistory.com/65)  
> [DOM](https://poiemaweb.com/js-dom)
