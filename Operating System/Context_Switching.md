# Context Switching

Multi Process 환경에서 CPU가 어떤 하나의 Process를 실행하고 있는 상태에서 인터럽트(Interrupt) 요청에 의해 다음 우선순위의 Process가 실행되어야 할 때 **기존의 Process의 상태/레지스터 값(Context)을 저장하고 CPU가 다음 Process를 수행하도록 새로운 Process의 상태/레지스터 값(Context)를 교체**하는 작업이다.

> `Context` : CPU가 해당 Process를 실행하기 위한 Process의 정보를 의미하며 PCB(Process Control Block)에 저장된다.

![PCB](https://t1.daumcdn.net/cfile/tistory/2164D3365829BAD527)

> `PCB(Process Control Block)` : 특정한 프로세스를 관리할 필요가 있는 정보를 포함하는 운영 체제 커널의 자료 구조이다.

<br>

# 왜 필요할까?

만일 컴퓨터가 하나의 Task만 처리할 수 있다면, 해당 Task가 끝날 때까지 다음 Task는 기다려야 한다. 그래서 CPU가 Task를 바꿔 가며 실행하기 위해 Context Switching이 필요하게 되었다. Context Switching을 사용하면 멀티 프로세싱, 멀티 스레딩을 통해 빠른 속도로 응답할 수 있다.

<br>

# 언제 발생될까?

### 인터럽트(Interrupt)

- 인터럽트는 CPU가 프로그램을 실행하고 있을 때 실행 중인 프로그램 밖에서 예외 상황이 발생하여 처리가 필요한 경우 CPU에게 알려 예외 상황을 처리할 수 있도록 하는 것이다.
  - I/O request : 입출력 요청
  - time slice expired : CPU 사용시간이 만료
  - fork a child : 자식 Process 생성
  - wait for an interrupt : 인터럽트 처리 대기

<br>

# Context Switching 과정

![Context Switching](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcLs4ee%2Fbtq6zCgeEaS%2FeMkhgp9failtca7VYSgbkk%2Fimg.png)

1. **요청 발생**: 인터럽트에 의한 요청이 발생한다.
2. **PCB에 저장**: 운영체제는 현재 실행 중인 Process P0의 정보를 PCB에 저장한다.
3. **CPU 할당**: 운영체제는 다음 Process P1의 정보를 PCB에서 가져와 CPU를 할당한다.

<br>

# Overhead

- Context Switching 때 해당 CPU는 아무런 일을 하지 못한다. 따라서 Context Switching이 잦아지면 오버헤드가 발생하여 성능이 떨어진다.
- Process는 각각 독립된 메모리 영역을 할당받았기 때문에 Context Switching가 발생하면 캐시에 있는 모든 데이터를 모두 리셋하고 다시 캐시 정보를 불러와야 한다.

<br>

# Thread Context Switching

![Thread](https://gmlwjd9405.github.io/images/os-process-and-thread/multi-thread.png)

Thread Context Switching은 스택(Stack)을 제외한 모든 영역은 공유하기 때문에 자신의 PCB에는 스택 및 간단한 정보만 저장해서 Process Context Switching보다 빠르다.

<br>

# 참고

> [Context Switching이란?](https://nesoy.github.io/articles/2018-11/Context-Switching)  
> [[운영체제] Context Switch(문맥 교환)이란?](https://spurdev.tistory.com/13)  
> [OS - Context Switch(컨텍스트 스위치)가 무엇인가?](https://jeong-pro.tistory.com/93)  
> [[OS]context switching](https://junghyungil.tistory.com/105)  
> [[OS] Process와 스레드의 차이](https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html)  
> [콘텍스트 스위칭(Context Switching)](https://beststar-1.tistory.com/26)
