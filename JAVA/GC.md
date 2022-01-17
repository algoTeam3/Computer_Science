# GC(Garbage Collection)

```
JVM이 더이상 사용하지 않는 Heap메모리를 자동으로 정리해주는 과정
stop-the-world를 통해 앱 실행 정지 후  GC 실행
```

</br>

## GC의 대상

1. 객체가 NULL인 경우
2. 블럭 실행 종료 후, 블럭 안에서 생성된 객체
3. 부모 객체가 NULL인 경우, 포함하는 자식 객체

</br>

## Major GC Minor GC

- 객체는 대부분 일회성이며, 메모리에 오래 남을 경우가 드물다.

</br>

<p align="center"><img src="https://blog.kakaocdn.net/dn/va8qQ/btqUSpSocbS/kxTvtnmrdhf4bnVPXth0UK/img.png" alt="msa" width="400"/></p>

</br>

1. Young 영역(Young Generation)
   - 새롭게 생성된 객체 할당
   - 대부분의 객체가 금방 접근불가 상태(Unreachable)가 되므로 생겼다가 사라짐
   - Young 영역에서의 GC ➡ Minor GC

</br>

2. Old 영역(Old Generation)
   - Young 영역에서 접근가능 상태(Reachable)상태를 유지하며 남은 객체가 복사되는 영역
   - 대부분 Young 영역보다 크게 할당되어 복사, 가비지는 적게 발생
   - Old 영역에서의 GC ➡ Major GC 또는 Full GC

</br>

3. Permanent 영역
   - Method Area
   - 클래스와 메소드 설명을 위한 메타데이터 포함
   - JDK8부터 Metaspace로 변경

</br>
  
<p align="center"><img src="https://raw.githubusercontent.com/GimunLee/tech-refrigerator/master/Language/JAVA/resources/java-gc-006.png" alt="msa" width="600"/></p>

</br>

## GC 동작 방식

1. stop-the-world

   - JVM이 애플리케이션의 실행을 멈추는 작업
   - GC 실행 쓰레드 외 모든 쓰레드 작업 중단하고 GC 완료 후 재개
   - 성능 개선을 위해 stop-the-world 시간 단축 작업

2. mark and sweep
   - mark : 사용된느 메모리와 사용되지 않는 메모리 식별 작업
   - sweep : mark 단계에서 사용되지 않음으로 식별된 메모리 해제 작업

</br>

## Minor GC 동작 방식

- Eden 영역 : 새로 생성된 객체 할당 영역
- Survivor 영역 : 최소 1번의 GC 이상 살아남은 객체 존재 영역

</br>

1. 새로 생성된 객체가 Eden에 할당
2. Eden 영역의 GC가 동작하고 생존 객체가 Survivor0으로 이동
3. 2번 반복으로 꽉참
4. Survivor0에 GC가 동작하고, 생존 객체는 Survivor1으로 이동, S0 비움 (2개의 S중 1개는 비어있어야 함)
5. 위 과정에서 반복되어 생존한 객체는 Old 영역으로 이동

</br>

<p align="center"><img src="https://blog.kakaocdn.net/dn/cMTg6g/btqK4IUFsYo/c2Ru4y19bQ4q93dLKDR62k/img.png" alt="msa" width="600"/></p>

</br>

## GC 알고리즘의 종류

1. Serial GC
   - Young 영역에서는 Mark Sweep으로 수행.
   - Old 영역에서는 `Mark Sweep Compact`알고리즘 사용
   - Compact : Heap영역 정리 위한 단계. 유용한 객체들을 연속적으로 쌓이도록 힙의 가장 앞부분부터 채워나가는 형태. 객체 존재 부분과 존재하지 않는 부분으로 구분
   - CPU 1코어용으로 개발

</br>

2. Parallel GC
   - Serial GC를 여러 쓰레드를 통해 Parallel하게 수행.
   - Java8까지 기본 GC로 사용됨
   - but, 애플리케이션의 멈춤을 피하지 못함.

</br>

3. CMS(Concurrent Mark Sweep) GC
   - Mark Sweep을 동시에 작용(Concurrent)하게 수행
   - 지연시간 최소화를 위해 고안
   - but, 메모리와 CPU를 더 많이 필요로 하게 됨

</br>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FexiT4S%2FbtqURuUWjwY%2FWsh133bXvARXfGMunpvSh1%2Fimg.png" alt="msa" width="600"/></p>

</br>

4. G1(Garbage First) GC
   - CMS GC 대체를 위해 개발
   - 지역 개념으로 Heap을 균등하게 나누고, 각 지역을 구분하여 객체 할당
   - Humongous : 지역 크기의 50%를 초과하는 객체 저장
   - Available/Unused : 사용되지 않는 지역

</br>

<p align="center"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdHxPiT%2FbtqU0xWGaDI%2FwriFcFKPHND5pTAsyn47X1%2Fimg.png" alt="msa" width="500"/></p>

</br>

# 참고링크

- [cs 기술면접 질문](https://mangkyu.tistory.com/94)
- [GC의 개념](https://mangkyu.tistory.com/118)
- [GC](https://github.com/GimunLee/tech-refrigerator/blob/master/Language/JAVA/Garbage%20Collection.md)
