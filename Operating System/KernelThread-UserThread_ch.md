# 커널 레벨 쓰레드와 유저 레벨 쓰레드


<br/>


### 📢 용어 정리

- 프로세스(Process) : 사용자의 프로그램이 운영체제에 의해 메모리 공간을 할당받아 실행중인 것

- 쓰레드(Thread) : 프로세스 내에서 실제로 작업을 실행하는 주체, 단위

- 인터럽트(Interrupt) : CPU가 특정 기능을 수행하는 도중에 급하게 다른 일을 처리하고자 할 때 사용할 수 있는 기능

- 컨텍스트 스위칭 : 인터럽트 발생으로 현재 작업중인 프로세스가 Block될 때, 다음 프로세스로 변경 후 실행할 수 있는 기능 


<br/>

### 커널 모드와 유저 모드

- 유저 영역 : 사용자에 의해 할당되는 메모리 공간
- 커널 영역 : 소프트웨어를 실행시키기 위해 할당되는 메모리 공간
- 유저 모드일때는 커널 접근 불가, 커널 모드일 때 모든 접근 가능


<br/>

### 커널 수준 쓰레드

![커널수준](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcPkDlx%2FbtqIVGRWgub%2FskQoT9zDCDEYhkJwFaY6w0%2Fimg.png)


- 운영체제 시스템 내에서 생성되어 동작하는 쓰레드
- 커널이 직접 모든 처리에 관여
- 커널 모드, 사용자 모드 두가지를 통해 양방향 일처리 가능
- 인터럽트 발생과 같은 상황에 `컨텍스트 스위칭` 가능 -> 각각의 쓰레드이기 때문


<br/>

### 유저 수준 쓰레드

![user](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsoqGn%2FbtqIXgZKXUd%2FW0xNAw2lKS2AuIoofkbY01%2Fimg.png)

- 사용자 단에서 쓰레드 라이브러리를 통해 생성 및 관리되는 쓰레드
- 커널에 의존적이지 않은 쓰레드의 기능을 `라이브러리`를 통해 제공받을 수 있음
- 개별적인 사용자 수준의 영역이 존재하여 커널이 개입하지 못한다.
- 커널 수준의 보안 적용 불가
- `컨텍스트 스위칭` 불가. =>  독립된 하나의 프로세스이므로 한 쓰레드 대기 시 전체 실행 불가.

<br/>
<br/>

# 참조

- [사용자 수준 Thread와 커널 수준 Thread 의 차이점은?](https://junghyun100.github.io/%EC%82%AC%EC%9A%A9%EC%9E%90%EC%88%98%EC%A4%80ThreadVS%EC%BB%A4%EB%84%90%EC%88%98%EC%A4%80Thread/)
- [(운영체제) 사용자 수준 스레드와 커널 수준 스레드의 차이](https://helloinyong.tistory.com/2930)
- [사용자 수준 스레드, 커널 수준 스레드](https://velog.io/@taehee-kim-dev/%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%88%98%EC%A4%80-%EC%8A%A4%EB%A0%88%EB%93%9C-%EC%BB%A4%EB%84%90-%EC%88%98%EC%A4%80-%EC%8A%A4%EB%A0%88%EB%93%9C)