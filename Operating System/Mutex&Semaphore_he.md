✓ 공유된 자원에 여러 프로세스가 동시에 접근하면 문제가 발생할 수 있다.  
✓ 이를 해결하기 위해 데이터를 한 번에 하나의 프로세스만 접근할 수 있도록 제한을 두는 동기화 방식이 필요하다.  
✓ 대표적으로 뮤텍스(Mutex)와 세마포어(Semaphore)가 존재한다.

<br>

# 임계 영역(Critical Section)

여러 프로세스가 데이터를 공유하며 수행될 때, **각 프로세스에서 공유 데이터를 접근하는 프로그램 코드 블록**이다. 여러 프로세스가 동일 자원을 동시에 참조하여 값(공유하는 변수명, 파일 등)이 오염될 위험 가능성이 있는 영역이다.

<br>

# 뮤텍스(Mutex)

> 한 스레드, 프로세스에 의해 소유될 수 있는 Key를 기반으로 한 상호배제 기법

임계 영역에 들어갈 때 락(lock)을 걸어 다른 프로세스(혹은 스레드)가 접근하지 못하도록 하고, 임계 영역에서 나와 해당 락을 해제(unlock)하는 방식

![뮤텍스](https://blog.kakaocdn.net/dn/dfJ75G/btqZJ43DWsg/OUjUDPalDipT8rkuM7aks1/img.png)

<br>

# 세마포어(Semaphore)

> 멀티 프로그래밍 환경에서 공유된 자원에 대한 접근을 제한하는 방법

사용하고 있는 스레드/프로세스의 수를 공통으로 관리하는 하나의 값을 이용해 상호배제를 달성

![세마포어](https://blog.kakaocdn.net/dn/t2sHF/btqZJ6mQJzl/Tcm2kfZtxXHWvnNY8t3xb1/img.png)

❓ **상호배제** : 임계 구역을 어느 시점에서 단지 한 개의 프로세스만이 사용할 수 있도록 하며, 다른 프로세스가 현재 사용 중인 임계 구역에 대하여 접근하려고 할 때 이를 금지하는 행위

<br>

## 차이점

- 뮤텍스는 오직 1개의 프로세스/스레드만 접근할 수 있다. 하지만 세마포어는 공유 자원에 세마포어의 변수만큼의 프로세스/스레드가 접근할 수 있다.
- 뮤텍스는 락을 획득한 프로세스가 반드시 그 락을 해제해야 한다. 하지만 현재 수행중인 프로세스가 아닌 다른 프로세스가 세마포어를 해제할 수 있다.

<br>

## 참고

> https://velog.io/@conatuseus/OS-%EC%84%B8%EB%A7%88%ED%8F%AC%EC%96%B4%EC%99%80-%EB%AE%A4%ED%85%8D%EC%8A%A4  
> https://velog.io/@flasharrow/%EB%AE%A4%ED%85%8D%EC%8A%A4Mutex-%EC%84%B8%EB%A7%88%ED%8F%AC%EC%96%B4Semaphore  
> https://chelseashin.tistory.com/40  
> https://overcome-the-limits.tistory.com/339
