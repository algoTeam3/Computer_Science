# Process & Thread

```
Process : 컴퓨터에서 프로그램을 실행하고 있는 상태
Thread : 한 프로세스 안에서 진행되는 여러 작업의 갈래
```

<br />

## Program

<br />

#### 어떤 작업을 위해 실행할 수 있는 파일

<br />

1. HDD (Hard Disk Drive)에 프로그램이 저장되어 있다.

2. 프로그램을 실행시키면 RAM과 같은 메모리에 올라가서 CPU 할당을 받을 수 있는 프로세스가 된다.

3. CPU가 해석하고 실행한다.

<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/141813998-d9fc8384-0421-4ed3-a8ba-f26961bcf268.png" alt="program" width="500"/></p>

<br />

## Process

<br />

#### 프로그램과 프로그램의 상태가 메모리 상에서 실행되는 작업 단위

<br />

- 프로세스에 필요한 소스들이 메모리에 올라간다.
- 기본적으로 프로세스마다 최소 1개의 스레드를 갖는다. (메인스레드)
- 다른 프로세스의 변수나 자료구조에 접근하려면 IPC 통신이 필요하다.

<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/141814043-0eb5496a-7dcc-4d43-b942-687b3618cc9d.png" alt="process memory" width="250"/></p>

- code : 실행 명령을 포함하는 메모리거나 목적 파일에 있는 프로그램 영역 / 읽기 전용
- data : 프로그램의 가상 주소 공간 / 전역 변수, 스태틱 변수 / 읽기, 쓰기 가능
- heap : 코드와는 별도로 유지 / 동적으로 메모리 할당
- stack : 데이터를 일시적으로 저장 / 지역변수, 호출한 함수 관련 정보

<br />

### PCB (Process Control Block)

<br />

#### 특정 프로세스의 중요한 정보를 포함하는 OS 커널의 자료 구조

<br />

- 운영 체제가 프로세스를 표현한 것이라고 볼 수 있다.
- OS는 프로세스 관리를 위해 프로세스 생성과 동시에 고유한 PCB 생성한다.
- 프로세스의 작업 진행 상황을 저장하고 있어서, CPU가 PCB를 참고하여 작업을 수행한다.

<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/141814086-589ccd4a-95ff-4c91-bb88-5873f709d452.png" alt="pcb" width="300"/></p>


- Process ID, PID : 프로세스 식별자
- Process State : 프로세스의 상태 저장
  - 생성(create), 준비(ready), 실행(running), 대기(waiting), 완료(terminated) 등
- Program Counter, PC : 프로세스가 다음에 실행할 명령어의 주소
- CPU 레지스터 및 일반 레지스터
- CPU 스케줄링 정보 : 우선 순위, 최종 실행시각, CPU 점유시간 등
- 메모리 관리 정보 : 해당 프로세스의 주소 공간 등
- 입출력 상태 정보 : 프로세스에 할당된 입출력장치 목록, 열린 파일 목록 등
- 프로세스 계정 정보 : 페이지 테이블, 스케줄링 큐 포인터, 소유자, 부모 등

<br />

## Multi Process

<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/141814118-ecd7a0d8-3245-497e-8cf0-00022a78ba0e.png" alt="multi process" width="600"/></p>

<br />

- 하나의 응용프로그램을 여러 개의 프로세스로 구성해서 각 프로세스가 하나의 작업을 처리하도록 하는 것

- Ex) 크롬

<br />

### :arrows_counterclockwise: Context Switching

<br />

- CPU의 코어는 한번에 하나의 프로세스만 처리할 수 있다.
  <br />

- 여러 프로세스를 처리할 때,
  - 현재 진행 중인 Task1의 상태를 PCB1에 저장하고,
  - 다음에 진행할 Task2의 상태를 PCB2에서 읽어 적용하는 과정이다.
- **동시성** (소프트웨어적 성질)을 띤다.
  - 한 순간에 여러가지 일이 아니라, 매우 짧은 전환으로 여러 가지 일이 동시 처리되는 것처럼 보이는 특성
  - ex) 애니메이션 필름 - 사진을 이어 붙여서 움직이는 것처럼 보이게

<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/141814157-6445e743-fb15-44c3-8a02-be0ecbda05ce.png" alt="context switching" width="600"/></p>
<br />


위 사진의 대략적인 진행과정은 아래와 같다.

1. CPU에서 실행하던 Task1이 사용자의 I/O 입력으로 인해 잠시 blocked돼서 CPU에서 내려온다.
2. Ready 상태인 Task 중 다음 실행 순서인 Task2를 CPU에 올리고 실행한다.
3. I/O 입력을 마친 Task1은 Ready 상태가 되어 다른 대기열에 오른다.

<br />

### :+1: Multi Process의 장점

- 각 프로세스마다 개별 메모리를 차지하고 있어서,
  - 여러 개의 자식 프로세스 중에 한 프로세스에서 문제가 생겨도 다른 프로세스에 영향이 가지 않는다.

### :-1: Multi Process의 단점

- 각 프로세스마다 개별 메모리를 차지하고 있어서,
  - 자원 소모적이다.
  - 컨텍스트 스위칭에서 오버헤드가 발생할 수 있다.
  - 다른 프로세스의 데이터를 공유하려면 IPC라는 복잡한 통신 방법을 이용해야 한다.

<br />

### => 경량화된 프로세스인 **Thread** 등장!

<br />
<br />

## Thread

<br />

### 프로세스의 실행 단위

<br />

- 한 프로세스 내에서 동작되는 여러 작업의 갈래로, 프로세스 내의 자원을 공유할 수 있다.
<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/141814198-c469c587-b858-4977-8365-324e5ba368c9.png" alt="multi thread" width="500"/></p>

- 한 프로세스 내의 스레드들은 Code, Data, Heap을 공유한다.
- 각 스레드는 개별적인 레지스터와 스택을 가지고 있다.

<br />

### :heavy_check_mark: Check Point

<br />
<details>
<summary> 스택을 스레드마다 독립적으로 할당하는 이유</summary>
<div markdown="1">

<br />

스택은 함수 호출시 전달된 인자나 복귀 주소값 등 여러 정보가 저장되는 공간으로,
독립적인 함수 실행이 가능하다는 것은 독립적인 실행 흐름을 갖는다는 의미이다.
즉, 스레드는 **독립적인 실행 흐름을 갖는 실행 단위**이기 때문에
이를 위한 최소 조건으로 독립된 스택을 할당하는 것이다.

</div>
</details>

<br />

<details>
<summary>PC 레지스터가 스레드마다 독립적으로 사용되는 이유</summary>
<div markdown="1">

<br />

PC에는 스레드가 어디까지 작업을 수행했는지에 대해 알고 있다.
스레드는 CPU를 할당받았다가 다른 스레드에게 자리를 넘겨줄 수 있기 때문에
작업 중간에 수행이 중단된 경우 어디에서 멈췄는지 알고 있을 필요가 있다.
그래서 각 스레드 별로 PC 레지스터를 독립적으로 할당해야 한다.

<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/141814272-f836e3d1-3c41-4708-828b-6366f6628ac1.png" alt="multi thread pcb" width="400"/></p>

</div>
</details>

<br />
<br />

## Multi Thread

<br />

### 하나의 응용 프로그램을 여러 개의 스레드로 구성해서 각 스레드가 하나의 작업을 처리하도록 하는 것

<br />

- 대부분의 OS들이 멀티 스레딩을 기본으로 한다.
- Ex) IE, 웹 서버

<br />

### :+1: Multi Thread의 장점

- 스레드 간 공유하고 있는 자원이 있어서,

  - 통신 비용을 절감할 수 있다.
  - 메모리 공간과 시스템 자원 소모가 줄어들어 효율적이다.
  - 컨텍스트 스위칭 시 캐싱 적중률이 높다.

  <br />

### :-1: Multi Thread의 단점

- 스레드 간 공유하고 있는 자원이 있어서,
  - 공유 자원을 관리(동기화 작업)할 필요가 있다.
  - 한 스레드에서 문제가 생기면 전체 프로세스에 영향이 미친다.
  - 디버깅이 어렵다.

<br />

### :heavy_check_mark: Check Point

<br />

<details>
<summary>Thread-safe</summary>
<div markdown="1">

멀티스레드 환경에서 여러 스레드가 동시에 하나의 자원에 접근할 때, 의도한 대로 동작하는 것 <br />

스레드 세이프가 되려면 공유 자원에 접근하는 임계 영역을 동기화 기법으로 제어해야 한다. <br />

</div>
</details>

<br />
<br />

## 멀티 코어

- 듀얼코어, 헥사코어 등 코어를 여러개 만들어서 해결하고자 등장
  - CPU의 속도를 빠르게 하는 것만으로는 발열 등의 문제로 한계가 있었다.
- 메모리 위에 여러 프로세스를 올리고 동시에 진행한다.
  - **병렬성**(Parallelism)을 띤다.
  - 기계적 성질

<br />
<p align="center"><img src="https://user-images.githubusercontent.com/66818228/141814327-6bbfabba-a473-4382-974d-80dc216d4649.png" alt="multi core" width="600"/></p>
