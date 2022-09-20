# CPU(Core / Central Processing Unit)

### CPU란 ? 

> 명령어의 해석과 자료의 연산, 비교 등의 처리를 제어하는 컴퓨터 시스템의 핵심 장치

- 연산장치(ALU) : 덧셈, 뺄셈등의 `산술연산`과 논리곱, 논리합등의 `논리연산`을 수행하는 장치
- 제어장치(CU) : 명령어를 순차적으로 실행하도록 제어하는 장치
- 레지스터(Register) : 명령어 주소, 명령어 코드, 연산 데이터, 결과 등을 `임시로 저장하는 기억장치`
  - 범용 레지스터 : 연산에 필요한 데이터나 연산 결과를 임시로 저장
  - 특수 목적 레지스터 : 특정 용도나 기능으로 구분되는 레지스터


<br/>

### 특수 목적 레지스터 종류

- 메모리 `주소` 레지스터(MAR) : 읽기와 쓰기 연산을 수행하는 주기억장치 `주소` 저장
- 프로그램 카운터(PC) : 다음 수행할 명령어 주소 저장
- 명령어 레지스터(IR) : 현재 실행중인 명령어 저장
- 메모리 `버퍼` 레지스터(MBR) : 주기억장치에서 읽어온 데이터나 저장할 데이터 `임시 저장`
- 누산기(AC) :  연산 결과 임시 저장

<br/>

### 명령어 세트

CPU가 실행할 명령어의 집합

>연산 코드(Operation Code) + 피연산자(Operand)
>- 연산 코드 : 실행할 연산
>- 피연산자 : 필요한 데이터 or 저장 위치

- 연산코드
  - 연산 기능 : 산술논리연산 수행
  - 제어 기능 : 명령어 실행 순서 제어
  - 데이터 전달 기능
  - 입출력 기능
- 피연산자
  - 주소 : 기억장치 혹은 레지스터 주소 저장
  - 숫자/문자
  - 논리 데이터



<br/>


### CPU 동작 과정

![동작과정](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbR4acg%2FbtqDeI3aSlc%2FmyhGxfJjd6Cr2mco2Mc3hK%2Fimg.jpg)

1. 주기억장치(RAM)는 입력장치에서 입력받은 데이터 또는 보조기억장치에 저장된 프로그램을 읽어와 레지스터에 저장
2. 제어장치가 연산코드를 해석하고 연산의 종류를 결정해서 연산장치에게 전달

![제어장치](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcRakOf%2FbtqDeIvkzrP%2F0AmHB8OBW8WA0xkV9W7LOk%2Fimg.png)

> 1. RAM에서 현재 카운터 주소(실행될 명령어 주소)에 해당되는 명령어를 레지스터에 입력
> 2. 다음 실행할 명령어 주소 변경
> 3. 2번 실행 동안 명령어 해석기에서 연산코드 해석하여 결정후 연산장치로 이동
> 4. 데이터를 가져와 연산 실행


3. 연산장치가 연산하고 결과를 누산기에 저장
4. 제어장치는 1 ~ 3 과정에서 명령어가 순서대로 실행될 수 있도록 각 장치를 제어합니다.

<br/>

![최종 동작과정](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7Csvw%2FbtqDfCg8dU3%2F2kUsWKz39BJFB8VVQzxfh1%2Fimg.jpg)


<br/>

### 명령어 사이클

> CPU가 주기억장치에서 하나의 명령어를 읽어와 수행하는 일련의 과정
> - `인출`, `실행`, 간접, 인터럽트 중 인출과 실행이 주요 명령어

![명령어 사이클](https://t1.daumcdn.net/cfile/tistory/230B3B3F52C9329109)

<br/>

#### 인출

![인출사이클](https://t1.daumcdn.net/cfile/tistory/230B774F575BA66F2C)

1. 프로그램 카운터에서 다음 실행 명령어의 주소를 MAR로 전달
2. 기억장치 주소 레지스터MAR 주소 정보를 토대로 기억장치에서 명령어 데이터 인출
3. 인출된 명령어 기억장치 버퍼 레지스터MBR에 저장
4. 프로그램 카운터 다음 명령어 실행을 위해 값 증가
5. MBR 정보 명령어 레지스터IR에 전달

```
T0 : MAR <- PC // 프로그램 카운터에서 현재 명령어 전달
T1 : MBR <- M[MAR], PC <- PC + 1 // 다음 명령어를 위해 카운터 증가, 기억장치 주소값의 데이터를 MBR에 임시 저장
T2 : IR <- MBR // 임시 저장 데이터를 통해 명령어 레지스터로 전달
```

<br/>

#### 실행

![실행 사이클](https://t1.daumcdn.net/cfile/tistory/2303A14F575BA67031)

```
T0 : MAR ← IR(Addr)
T1 : MBR ← M[MAR]
T2 : AC ← AC + MBR
```

#### 시스템 버스

> 컴퓨터의 구성요소를 서로 연결하고 데이터 전달을 위한 경로

1. 주소 버스
   - 메모리 주소나 입출력포트 번호 전달
   - CPU와 Memory 사이 단방향 데이터 전달 가능
2. 데이터 버스
    - 데이터 전달
    - 양방향 데이터 전달 가능(CPU, Memory, I/O Unit)
3. 제어 버스
   - 제어 신호 전달
   - 읽기 쓰기 신호 전달
   - 양방향 데이터 전달 가능(CPU, Memory, I/O Unit)


<br/>
<br/>

# 참고 사이트

- [컴퓨터구조-중앙처리장치(CPU) 구조, 동작 과정](https://foxtrotin.tistory.com/144)
- [CPU 작동 원리](https://intrepidgeeks.com/tutorial/working-principle-of-cpu)
- [중앙처리장치 작동 원리를 알아보자](https://ndb796.tistory.com/7)