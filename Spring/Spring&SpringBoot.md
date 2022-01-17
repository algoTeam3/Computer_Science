# Spring

**자바 기반의 웹 어플리케이션을 만들 수 있는 프레임워크**이다. 스프링의 가장 중요한 특징인 DI(의존성 주입), IoC(제어의 역전)를 통해 재사용 및 유지보수가 용이한 코드를 작성할 수 있고, 확장성을 가진 코드를 설계할 수 있다.

### Spring MVC

Spring 프레임워크에서 제공하는 웹 모듈이다. Spring MVC 프레임 워크는 Model View, Controller라는 모듈의 분리를 가능하게하고 애플리케이션 통합을 원활하게 처리한다.

<br>

# Spring Boot

Spring Boot는 **환경 설정을 최소화해주어 개발자가 비즈니스 로직에 집중**할 수 있도록 도와주어 생산성을 크게 향상시켜 준다.

![Spring Boot](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqABrf%2FbtqzKGVJXYN%2Fo9usekO2gtAkI3tv2oKF5k%2Fimg.png)

- 자동 설정

  - Spring Boot의 자동 설정 기능을 이용하여, 프로젝트에서 필요한 Bean들을 자동으로 등록 및 설정할 수 있다.
  - **@SpringBootApplication**
    - @SpringBootConfiguration : Spring Boot의 설정을 나타내는 어노테이션으로, Spring의 @Configuration을 대체한다.
    - @ComponentScan : @Component 어노테이션이 붙은 클래스의 같은 패키지 내(히위 패키지 포함)에서 컴포넌트들을 스캔하여 빈을 등록한다. 컴포넌트는 @Component 어노테이션을 말하고, @Configuration, @Repository, @Service, @Controller, @RestController를 포함한다.
    - @EnableAutoConfiguration : @EnableAutoConfiguration은 Spring Boot의 meta 파일을 읽어서, 미리 정의되어 있는 자바 설정 파일(@Configuration)들을 빈으로 등록하는 역할을 수행한다.


- 쉬운 의존성 관리

  - 스프링은 각각의 dependency들의 호환되는 버전을 맞추고, 하나의 버전을 올리면 다른 dependeny에 영향을 미쳐 버전 관리에 어려움이 많다. Spring Boot의 dependency-management를 이용하여 단 한줄의 의존성으로 수 많은 프로젝트들의 버전을 충돌 없이 관리할 수 있다.

  ```
  spring-boot-starter-*

  spring-boot-starter-web-services: SOAP Web Services
  spring-boot-starter-web: Web and RESTful applications
  spring-boot-starter-test: Unit testing and Integration Testing
  spring-boot-starter-jdbc: Traditional JDBC
  spring-boot-starter-hateoas: Add HATEOAS features to your services
  spring-boot-starter-security: Authentication and Authorization using Spring Security
  spring-boot-starter-data-jpa: Spring Data JPA with Hibernate
  spring-boot-starter-cache: Enabling Spring Framework’s caching support
  spring-boot-starter-data-rest: Expose Simple REST Services using Spring Data REST
  ```

- 내장 서버
  - 기존 Spring의 배포 방식 : war 패키징 -> WAS 설치 -> WAS에 war파일 올리기
  - Spring Boot는 WAS가 내장되어 있다. jar/war 파일로 배포할 수 있다.

<br>

# 참고

> [[10분 테코톡] 🦊닉의 Spring vs Spring Boot](https://youtu.be/6h9qmKWK6Io)  
> [Spring🌱 vs SpringBoot🌼](https://ssoco.tistory.com/66)  
> [Spring 과 Spring Boot 차이](https://velog.io/@courage331/Spring-%EA%B3%BC-Spring-Boot-%EC%B0%A8%EC%9D%B4)  
> [Spring vs Spring Boot](https://server-engineer.tistory.com/739)  
> [[Spring Boot] 자동 설정 이해하기 @EnableAutoConfiguration](https://cornswrold.tistory.com/314)  
> [[Spring Boot] 자동 설정 (@SpringBootApplication 어노테이션)](https://chosh95.tistory.com/409)
