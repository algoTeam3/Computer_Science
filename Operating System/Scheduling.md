# Process Scheduling
### 정의
-  CPU를 얻고자 하는 프로세스 중 어떤 프로세스한테 CPU를 할당할지 결정하는 운영 체제의 기법
- 다중(multi) 프로그래밍 운영 체제에서 필수 
### 목적
![image](https://user-images.githubusercontent.com/68576770/141145124-05468502-4701-4355-976f-07af0416689e.png)
- 일반적인 프로세스는 **CPU에서 instruction을 실행하는 단계**와 **I/O 작업만 하는 단계**가 번갈아서 진행됨
  - CPU burst time : CPU를 연속적으로 쓰는 시간
  - I/O burst time : I/O 요청 후 기다리는 시간
- 다중 프로그래밍 시스템에서 한 프로세스가 I/O burst time일 때, 다른 프로세스가 CPU를 사용할 수 있게 하는 것이 Process Scheduling
### CPU burst Time 분포
![image](https://user-images.githubusercontent.com/68576770/141266251-f46793ff-f323-43fe-8e5c-abf6523f7957.png)
- CPU burst가 짧은 경우
  - 중간에 I/O 작업이 계속 끼어든다.
  - 주로 사람과 interaction 하는 작업들 
  - CPU를 늦게 주면 응답 시간이 길어져 사람이 기다려야 하는 시간이 길어짐
- CPU burst가 긴 경우
  - I/O burst가 계속 끼어들지 않는다. (실행이 한번 끝나면 I/O 한번 해주는 식)
- 프로세스마다 CPU burst가 짧은 경우도, 긴 경우도 있을 수 있다.
- CPU가 하나인 시스템에서 한 프로세스가 CPU burst 시간에 들어왔다고 해도 그 프로세스가 무조건 CPU를 쓰는 게 아니라, CPU burst time에 들어온 여러 프로그램 중 하나를 골라서 CPU를 할당해야한다.
# Scheduling Criteria
- Scheduling 알고리즘 선택을 위해 평가하는 척도
- Performance Measure
### System 입장에서 성능 척도
- CPU utilization(이용률) 
  - 전체 시간 중 CPU가 놀지 않고 일한 시간
  - CPU를 최대한 바쁘게 유지해야 시스템 입장에서 CPU를 잘 쓰는 것임
- Throughput(처리량) 
  - 단위 시간 당 완료된 프로세스의 수
  - 주어진 시간에 CPU로 가능한 일을 많이 해야 좋음 
### Process 입장에서 성능 척도
- 내가(고객) CPU를 빨리 얻어서 빨리 처리해야 좋음 -> 시간 중심
- Turnaround time (소요 시간)
  - CPU를 쓰러 들어와서 다 쓰고 나갈 때 까지 걸린 시간
  - 제출 시점부터 완료 시점까지 경과된 시간
- Waiting time(대기 시간)
  - CPU를 쓰기 위해 준비 대기열(Ready Queue)에서 기다리는 시간
  - 선점형의 경우 CPU를 얻어서 쓰다가 뺏기면 기다리는 시간이 더 늘어남. 
  - 실행 시간 말고 기다리는 시간만을 의미
- Response time(응답 시간) 
  - CPU를 쓰기 위해 준비 대기열에 들어와서 최초로 CPU를 얻기까지 걸린 시간
  - 사용자 응답과 관련 있기 때문에 중요한 성능 척도이다
# Scheduling Algorithms
##### non-preemptive(비선점) or preemptive(선점)
- 스케쥴링 알고리즘은 비선점과 선점으로 구분할 수 있다.
- 비선점형 스케쥴링: 실행중인 프로세스가 할당된 시간만큼 CPU의 사용을 보장
- 선점형 스케쥴링: CPU를 사용하는 프로세스가 낮은 우선 순위라면, 우선 순위가 높은 프로세스가 CPU를 빼앗을 수 있다.
  - 거의 선점형 스케줄링을 사용함
##### 스케쥴링에서 고려할 두 가지 이슈
1) 우선순위 결정 : CPU burst에 들어온 여러 프로세스 중 누구한테 CPU를 줄 것 인가
2) 비선점 vs 선점 : 한 프로세스가 CPU를 할당받아 다 쓰고 I/O 처리를 하러 나갈 때 까지 CPU를 계속 줄 것인가? 아니면 CPU burst가 너무 길면 중간에 빼서 다른 프로세스한테 CPU를 넘겨 줄 것인가?
### FCFS (First Come First Serve)
> 비선점형 
- 프로세스가 먼저 도착한 순서대로 처리(선착순)
- 예시) 은행 번호표, 화장실 줄 기다리기 등 기다렸다 자기 차례 되면 시간이 보장됨
![image](https://user-images.githubusercontent.com/68576770/141452352-61d55e64-52d6-4cc7-ae17-f84b60d9e49f.png)
- 효율적이지 않음
- 문제점 : convoy effect
  - 긴 프로세스가 먼저 도착해서 짧은 프로세스들이 지나치게 오래 기다려야 하는 현상
### SJF(Shortest Job First) or SJN(Shortest Job Next)
> 선점형, 비선점형
- CPU를 짧게 쓰는 프로세스에게 가장 먼저 CPU를 주는 스케쥴링 방법
- 필요한 CPU 시간을 미리 알 수 있는 Batch 시스템에서 구현하기 쉽다.
- 필요한 CPU 시간을 미리 알 수 없는 대화형 시스템에서는 구현 불가능하다.
##### 비선점형 SJF
- CPU burst가 가장 짧은 프로세스가 CPU를 잡으면, 그 뒤로 더 짧은 CPU burst를 가진 프로세스가 와도 뺏기지 않고 CPU를 보장해줌
- ![image](https://user-images.githubusercontent.com/68576770/141452529-c251da9e-5ed0-4f4d-9ef8-922a9397bcf8.png)
##### 선점형 SJF or SRTF(Shortest-Remaining-Time-First)
- CPU를 할당 받았다 해도 더 짧은 CPU burst의 프로세스가 오면 뺏길 수 있음
- 현재 수행 중인 프로세스의 남은 CPU burst time 보다 더 짧은 burst time을 가지는 프로세스가 도착하면, CPU를 빼앗긴다.
- ![image](https://user-images.githubusercontent.com/68576770/141452443-80510fa4-1d2d-40c3-95c7-91bd4efe69b3.png)
- Average Waiting Time을 최소화하는 방법임
---
- SJF 스케줄링 문제점
1. starvation(기아) : SJF는 CPU 실행 시간이 짧은 작업을 선호하기 때문에, CPU 사용 시간이 긴 프로세스는 영원히 CPU 사용을 못할 수도 있다.
2. CPU 사용 시간을 미리 알 수 없다.
  - CPU burst time에 들어와서, 내가 얼마나 쓰고 나갈지 정확히 알 수 없음
  - 과거에 CPU 사용 흔적을 보고 사용 시간을 예측해서 SJF를 사용할 수는 있음
### Priority Scheduling
> 선점형, 비선점형
- 우선 순위가 높은 프로세스가 먼저 스케쥴링 되는 방법
- 우선순위의 표현 : 정수형(숫자가 작을수록 높은 우선순위를 가짐)
- SJF도 우선순위 스케줄링의 일종 (CPU burst time으로 우선순위 정의)
- 다른 스케쥴링 기법과 결합해서 사용할 수 있어서 비선점형, 선점형 둘 다 가능하다.
##### 비선점형 Priority Scheduling
- 우선순위가 높은 프로세스에게 CPU를 할당했다면 더 높은 우선순위의 프로세스가 도착하더라도 지금 수행하는 프로세스가 다 쓸 때까지 보장
##### 선점형 Priority Scheduling
- 우선순위가 높은 프로세스에게 CPU를 할당해서 수행시키는 도중에 우선순위가 더 높은 프로세스가 왔을 때 CPU를 뺏길 수 있다.
---
- Priority Scheduling 문제점
  - starvation : 우선순위가 낮은 프로세스는 영원히 CPU를 얻지 못할 수도 있다.(never execute)
- starvation을 해결하기 위한 방법
    - aging : 우선순위가 낮은 프로세스여도 오래 기다리면(나이가 들면) 우선순위를 높여주자
### Round Robin Scheduling
> 선점형
- 모든 프로세스에게 quantum이라고 하는 동일한 크기의 CPU 할당 시간을 준다.
- quantum 시간이 끝나면 다른 프로세스로부터 CPU를 뺏기고, Ready Queue의 맨 뒤로 들어간다.
- 가장 많이 사용되는 스케줄링 기법 (공정함)
- 가장 좋은 점 : 응답 시간(Response time)이 빨라짐
  - CPU를 최초로 얻기까지 걸리는 시간이 짧음
  - 누가 CPU를 오래 쓸지 모르는 상황에서 굳이 예측할 필요 없이 CPU burst time이 짧은 프로세스가 빨리 CPU를 쓰고 나갈 수 있다.
- ![image](https://user-images.githubusercontent.com/68576770/141452592-5c34bf6a-df65-4de5-afcc-60d5b0214289.png)
- Round Robin Scheduling은 CPU를 사용하려는 시간에 기다리는 시간이 비례
  - CPU를 길게 쓰는 프로그램은 기다리는 시간도 길어지고, 짧게 쓰는 프로그램은 기다리는 시간 짧아짐
---
- Round Robin Scheduling 문제점
  - quantum을 아주 크게 잡으면 FCFS와 같은 스케쥴링 알고리즘
  - quantum을 아주 작게 잡으면 계속 CPU를 얻었다 뺏겼다 반복
    -  -> context switch 오버헤드 때문에 시스템 전체 성능이 나빠질 수 있다.
- 적당한 quantum을 줘야함 (보통 10 ~ 100ms)
### Multilevel Queue Scheduling 
![image](https://user-images.githubusercontent.com/68576770/141168712-bb92822d-d5c7-452b-bcf1-3b8026e36cea.png)
- 프로세스의 우선 순위에 따라 우선 순위가 다른 큐에 배치된다.
- CPU가 하나면, 5개의 큐에서 하나의 프로세스만 빠져나와서 CPU를 할당받기 때문에 우선순위가 있다.
- 상위 큐에서 프로세스가 완료되어야지만 하위의 큐에 있는 프로세스가 할당받을 수 있다.(차별적임)
- 고려해야 할 점
  - 프로세스를 어느 큐에 넣을 것인가
  - 우선순위가 낮은 레벨의 starvation은 어떻게 해결할 것인가
- 각 줄 마다의 특성에 맞는 큐 별로 스케줄링 알고리즘을 선택
  - foreground (interactive) -> RR
  - background (batch - no human interaction) -> FCFS
### Multi level Feedback Queue Scheduling
- 프로세스가 대기 열 사이를 이동하는 스케쥴링
  - Multilevel Queue에서의 starvation 문제 해결을 위한 방법
- 프로세스가 CPU 시간을 너무 많이 사용하면 우선 순위가 낮은 큐로 이동한다.
![image](https://user-images.githubusercontent.com/68576770/141259289-eacaac33-c2a3-40fa-a435-ce2398fa6dc4.png)
- 큐의 quantum(할당 시간)을 8, 16으로, 우선 순위가 낮은 큐일수록 quantum이 늘어나게 설계할 수 있다.
- CPU burst가 짧은 프로세스에게 우선순위를 많이 주는 방식이다.
  - CPU burst가 짧은 프로세스는 도착하자마자 CPU를 얻어서 짧은 시간을 쓰고 바로 빠져나갈 수 있다. 
  - CPU burst가 긴 프로세스는 맨 위의 줄에서 처리를 다 못 끝내면 아래 큐로 이동해서 할당 시간이 길어지는 방식이다.
- 누가 짧은 프로세스인지 예측할 필요 없이 처음 들어오면 일단 우선순위가 가장 높기 때문에, 짧은 건 알아서 빨리 쓰고 빠져나가고, 긴 거는 점점 우선순위가 낮아짐
# References
- CPU and I/O bursts : https://www.researchgate.net/figure/Alternating-sequence-of-CPU-and-I-O-bursts_fig19_330667255
- CPU burst time : https://velog.io/@zzarbttoo/OSCPU-SchedulingCPUIO-Bursts-SchedulerDispatcher-Scheduling-Algorithm-Algorithm-Evaluation
- https://core.ewha.ac.kr/publicview/C0101020140401134252676046?vmode=f
- https://www.tutorialspoint.com/operating_system/os_process_scheduling_algorithms.htm
- https://www.geeksforgeeks.org/cpu-scheduling-criteria/
