# Process와 Thread
1. Process
- 실행중인 프로그램
- 프로그램 수행에 필요한 자원과 쓰레드로 구성
2. Thread
- 프로세스의 자원을 이용해 실제로 작업을 수행하는 주체
3. Multi-tasking
- 여러 개의 프로세스가 동시에 실행
4. Multi-threading
- 하나의 프로세스 내에서 여러 쓰레드가 동시에 작업 수행
### Multi-threading 장단점
- 장점
  - 자원을 효율적으로 사용할 수 있고, 사용자에 대한 응답성 향상됨
- 단점
  - 여러 쓰레드가 같은 프로세스 내에서 자원을 공유하여 작업 수행하기 때문에,
    - 동기화(synchronization), 교착상태(deadlock) 문제를 반드시 고려해야함
### Java에서 Thread 생성하기 
1. Thread 클래스 상속
![image](https://user-images.githubusercontent.com/68576770/148678373-4ce3faa2-81df-40e8-992c-c878329d6160.png)
- 결과
![image](https://user-images.githubusercontent.com/68576770/148678382-dca9fba6-399b-4add-ba58-f4f9fada9a66.png)
2. Runnable 인터페이스 구현
![image](https://user-images.githubusercontent.com/68576770/148678396-0f441b81-fbec-47e8-baab-ca6da4dda4b0.png)
- 결과
![image](https://user-images.githubusercontent.com/68576770/148678403-aee3a1de-e388-4c09-aaad-080c2f747458.png)
---
- start()를 하면 바로 실행되는 게 아니라, 일단 실행 대기 상태에 있다가 자기 차례가 와야 실행된다.
- 하나의 쓰레드에 대해 start()를 두 번 이상 호출하면 에러 발생
  - Exception in thread "main" java.lang.IllegalThreadStateException
  - 한 번 실행이 종료된 쓰레드는 다시 실행할 수 없다.
  - 다시 실행해야한다면 쓰레드를 새로 다시 생성해야한다.
# Thread Deadlock
- Multi-threading 환경에서 thread1이 thread2가 가진 object lock을 기다리고, thread2도 thread1이 획득한 object lock을 기다리고 있는 상태.
- 무한정 대기만 하는 비정상적 상태
- 예시
  - thread1이 resource1을 잠그고, resource2를 기다림
  - thread2이 resource2을 잠그고, resource1를 기다림
- 결과
![image](https://user-images.githubusercontent.com/68576770/148679741-8b2a6d13-3f8c-4aef-9519-26de7862abd5.png)
### deadlock을 피하는 방법
1. Avoid nested locks 
- 여러 쓰레드에 lock을 주는 것을 피해야 한다. 
- 여러 쓰레드에 lock을 주는 것이 deadlock의 주요 원인이다.
2. Avoid unnecessafy locks
- 더 중요한 쓰레드에 lock을 줘야한다.
- 불필요한 쓰레드에 lock을 주는 것이 deadlock을 유발하는 원인이 된다.
3. Using thread join
- deadlock은 한 쓰레드가 다른 쓰레드가 완료될 때 까지 기다릴 때 발생한다.
- Thread.join()에 timeout을 적용해서 쓰레드가 소요되는 최대 시간을 설정할 수 있다.
# Thread-safe
- Multi-threading 환경에서 어떤 함수나 변수, 혹은 객체가 여러 쓰레드로부터 동시에 접근이 이루어져도, 각 쓰레드에서의 수행 결과가 정상적으로 나오는 것을 의미한다. (예상대로 동작하는 코드)
### Java에서 Thread-safe한 코드 만들기
1. Re-entrancy : 동시에 접근해도 올바른 결과를 줘야 한다.
2. Thread local storage 사용 : 공유 자원의 사용을 최대한 줄여 각 쓰레드에서만 접근할 수 있는 저장소를 사용해 동시 접근을 막는다.
3. Mutual Exclusion : 공유 자원을 사용할 때, semaphore/mutex로 동시 접근을 막는다.
  - semaphore : 공유 자원에 여러 프로세스의 동시 접근을 막는다.
  - mutex : 공유 자원에 여러 쓰레드의 동시 접근을 막는다.
- Java에서는 synchronized 사용
4. Atomic operations : 공유 자원에 접근할 때, 원자 연산을 이용해 상호 배제를 구현한다.
- 상호 배제 : 한 쓰레드가 자원에 접근할 때 다른 쓰레드의 접근을 막는다.
- java.concurrent.atomic 패키지를 이용
  - Integer 대신 멀티 쓰레드 환경에서 동시성을 보장하는 AtomicInteger(AtomicLong, AtomicBoolean,...)를 이용할 수 있다.
  - incrementAndGet() : 현재 쓰레드에 저장된 값과 메인 메모리에 저장된 값이 일치하면 새로운 값으로 교체, 일치하지 않는다면 실패 후 재시도를 하는 방식을 이용
# 마무리
- thread 동기화에 대한 추가 공부 필요
  - synchronized
  - java.concurrent 패키지
# References
- https://www.javatpoint.com/deadlock-in-java
- Java의 정석 최신 Java 8.0 포함 [ 3판 ] 남궁성 저
- https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=seban21&logNo=70143735508
