# TDD(Test-Driven-Development)

**테스트 주도 개발**으로, 소프트웨어 개발 방법론 중의 하나이다. 선 개발, 후 테스트 방식이 아니라 선 테스트, 후 개발 방식의 프로그래밍 방법이다. 먼저 자동화된 테스트 코드를 작성한 후 테스트를 통과하기 위한 코드를 개발하는 방식을 의미한다. 테스트 주도 개발 방식은 단위 테스트를 활용하여 보다 높은 수준의 코드 품질을 확보하려는 개발 방법 중 하나입니다.

### **< 기존 프로세스와 TDD 프로세스의 차이점 >**

![TDD](https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjNfNSAg/MDAxNTkyODk1MTA3NDAw.VWU7ACZuSTKBuwTuHhCDl7aREyYLLc5KWHF1F4BPv3Eg.-IOIW8rByR5v4iy7pkq2IwUrq5NkVOzgBSZJcYKsEMAg.PNG.etnersrd/tdd1.png?type=w800 "TDD")

<br/>

# 단위 테스트(Unit Test)

단위 테스트는 **하나의 모듈을 기준으로 독립적으로 진행되는 가장 작은 단위의 테스트**이다. 다른 테스트에 비해 적은 비용으로 수행할 수 있는 단위 테스트는 소프트웨어의 품질을 향상시키는 데 중요한 역할을 한다. 개발 초기부터 적용하여 빠르게 수행 결과를 확인함으로써 개발자의 생산성을 높이는 데 효과적이다.

<br/>

## 단위 테스트의 FIRST 규칙

- **F**ast : 단위 테스트는 빨라야 한다.
- **I**ndependent : 단위 테스트는 독립적으로 작성한다.
- **R**epeatable : 단위 테스트는 어느 환경에서든 반복 가능해야 한다.
- **S**elf-Validating: 단위 테스트는 자체검증이 되어야 한다.
- **T**imely : 단위 테스트는 실제 코드를 작성 전에 작성해야 한다.

<br/>

# TDD 개발주기

![TDD 개발주기](https://blog.kakaocdn.net/dn/bCfWaY/btrj3XXOukQ/ZjVkmKt2Kjyyys7Stnok3k/img.png "TDD 개발주기")

<br/>

① <span style="color:#FF0000">Red</span> : 실패하는 테스트 코드 먼저 작성

② <span style="color:#04B404">Green</span> : 테스트 코드를 성공시키기 위한 실제 코드 작성

③ <span style="color:#000000">Refactor</span> : 중복 코드 제거, 일반화 등의 리팩토링 수행

<br/>

# TDD의 장점 👍

### 객체 지향적인 코드 개발

- TDD는 코드의 재사용 보장을 명시하므로 TDD를 통한 소프트웨어 개발 시 기능별로 모듈화가 이루어진다. 이는 의존성과 종속성이 낮은 모듈로 조합된 소프트웨어 개발을 가능하게 하며, 필요에 따라 모듈을 추가하거나 제거해도 소프트웨어 전체 구조에 영향을 미치지 않게 된다.

### 재설계 시간의 단축

- 테스트 코드를 먼저 작성하기 때문에 개발자의 할 일을 분명히 정의하고 개발을 시작한다. 또한 테스트 시나리오를 작성하면서 다양한 예외사항에 대해 생각해볼 수 있다. 따라서 개발 진행 중 소프트웨어의 전반적인 설계가 변경되는 일을 방지할 수 있다.

### 유지보수(리팩토링)의 용이성

- 기본적으로 단위 테스트 기반의 테스트 코드를 작성하기 때문에 추후 문제가 발생하였을 때 모듈별로 테스트를 진행하면, 문제의 지점을 쉽게 찾을 수 있다.

### 테스트 문서의 대체 가능

- TDD를 통해 테스팅 자동화 및 더욱 정확한 테스트 근거를 산출하여 정의서를 작성할 수 있다.

<br/>

# TDD의 단점 👎

### TDD 방식은 일반적인 개발 방식에 비해 대략 10~30% 정도로 소요 시간이 늘어난다.

### 기존에 본인이 개발하던 방식을 많이 바꿔야 한다.

<br/>

# TDD 관련 프레임워크

- CUnit / CppUnit (C / C++)
- JUnit (Java)
- PyUnit (Python)
- DBUnit (DB)
- NUnit (.net)
- PHPUnit (PHP)

<br/>

# 참고

> [테스트 주도 개발](http://www.incodom.kr/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%A3%BC%EB%8F%84_%EA%B0%9C%EB%B0%9C)  
> [TDD (Test Driven Development)란?](https://zoosso.tistory.com/1055)  
> [[기술면접] TDD(Test-Driven-Development) 방법론에 대해서](https://wooaoe.tistory.com/33)  
> [코드 품질을 높여주는 테스트 주도 개발 알아보기](https://www.samsungsds.com/kr/insights/Test-Driven-Development.html?referrer=https://wooaoe.tistory.com/33)  
> [선택이 아닌 필수 TDD](https://ahea.wordpress.com/2018/09/10/%EC%84%A0%ED%83%9D%EC%9D%B4-%EC%95%84%EB%8B%8C-%ED%95%84%EC%88%98-tdd/)
