# JVM(Java Virtual Machine)

**자바 가상 머신은 스택기반의 가상 머신으로, 시스템 메모리를 관리하면서 자바 기반 애플리케이션을 위해 이식 가능한 실행 환경을 제공**한다. '한번 작성하면 모든 곳에서 실행한다(Write Once, Run Anywhere)'는 원칙을 가지고, 프로그램 메모리를 최적화한다.

<br>

# JVM 구조

![JVM](https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1RbC/image/ln70NtHgzmHCarXrYWwW20ZCWqQ.png)

- Java Code 는 javac을 이용해 ByteCode로 컴파일된다.

### Class Loader

- JVM 내로 클래스를 로드하고 링크를 통해 배치하는 작업을 수행하는 모듈로 런타임시 동적으로 클래스를 로드한다.

<br>

## Runtime Data Areas

- JVM이 Java ByteCode를 실행하기 위해 사용하는 메모리 공간

### Method(메소드 영역)

- 클래스 정보, 변수 정보, static으로 선언한 변수가 저장되고, 모든 스레드가 공유하는 영역이다.

### Heap(힙 영역)

- 동적으로 생성된 객체가 저장되는 영역으로 GC의 대상이 되는 공간이다.

### Stack(스택 영역)

- 프로그램 실행 과정에서 임시로 할당되었다가 메소드를 빠져나가면 바로 소멸되는 특성의 데이터를 저장하는 영역이다. 원시 타입 변수는 스택 영역에 직접 값을 가진다.

### PC Register

- Thread가 시작될 때 생성되며 Thread마다 하나씩 존재한다. Thread가 어떤 부분을 어떤 명령으로 실행해야 할지에 대한 기록을 하는 부분으로 현재 수행중인 JVM 명령의 주소를 갖는다.

### Native Method Stack

- 자바 외 언어로 작성된 네이티브 코드를 위한 Stack이다.

<br>

### Execution Engine

- Class Loader를 통해 JVM 내의 런타임 데이터 영역에 배치된 바이트 코드를 실행한다.

### Native Method Interface(JNI)

- 자바가 다른 언어로 만들어진 어플리케이션과 상호 작용할 수 있는 인터페이스를 제공한다.

### Native Method Library

- 네이티브 메소드 실행에 필요한 라이브러리이다.

<br>

# 참고

> ["JVM이란 무엇인가" 자바 가상 머신 이해하기](https://www.itworld.co.kr/news/110837)  
> [[Java] 자바 가상 머신(JVM) 구조 및 개념 정리](https://goodncuteman.tistory.com/17)  
[마로의 Java(자바) 정리 - 8. 자바 메모리 구조](https://hoonmaro.tistory.com/19)  
[#자바가상머신, JVM(Java Virtual Machine)이란 무엇인가?](https://asfirstalways.tistory.com/158)  
[자바 메모리 구조 뿌시기 [ JVM이란?]](https://youtu.be/AWXPnMDZ9I0)  
> [JNI (Java Native Interface) 란 ?](http://egloos.zum.com/sinuk/v/2676307)
