# Memory

> CPU가 직접 접근 가능한 일종의 데이터 저장장치

  </br>

# 주소 바인딩

- 프로그램이 알고있는 주소를 실제 메모리 주소와 매핑하는 것

## 주소 바인딩 시점

- 컴파일 시간
  - 프로그램 내부 주소와 물리적 주소가 동일

</br>


![컴파일시간](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1P4ah%2FbtquOqoqqEn%2F01xyoxVckbfNu5q809Y6rk%2Fimg.png)

</br>

- 적재 시간
  - 프로그램을 메모리에 로딩할 때 상대 주소에 할당
- 단점
  - 멀티프로그래밍이 가능하나 명령어들로 인해 메모리 로딩 시간 증가

</br>

![적재시간](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4Tiz7%2FbtqC9xsWJaH%2FLRg2xR4hkDgNh9G825Zxwk%2Fimg.png)

</br>

- 실행 시간
  - 변경된 주소로 할당하기 위해 하드웨어로 변환 -> MMU

</br>

![실행시간](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJV8Hx%2FbtqC6k9zobX%2FqwGWyIS277W4ewGNkb4LQK%2Fimg.png)

</br>

## MMU(memory Management Unit)

</br>

> 컴퓨터 시스템에서 프로세스의 논리 주소를 실제 메모리의 물리 주소로 변환

</br>

![MMU](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdGS2qq%2FbtqAJwDhpJK%2FoPVkHdYvn3aSi7PL7luuZ1%2Fimg.png)

</br>

- 더 빠른 메모리 주소 참조 방법의 필요성

</br>

# 메모리 관리 기법

- 스와핑 (Swapping)

- 연속 메모리 할당 (Contiguous memory allocation)

- 페이징 (Paging)

- 세그멘테이션 (Segmentation)

## 스와핑

</br>

- CPU에서 시행되지 않는 프로세스 즉 ready상태이거나 waiting상태에 있는 프로세스들 중 일부를 메모리 안에 보관하지 않고 하드디스크 같은 저장장치에 보관

</br>

![스와핑1](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjcOad%2FbtqAKiki52t%2FH1pMQi4JAo3QAdVaHqSVW1%2Fimg.png)

- 프로세스 상태 그대로 하드디스크에 저장


![스와핑2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FC1c1Q%2FbtqAI3uSUt7%2FkvXCklS9Wh7rqWOUAtgVP0%2Fimg.jpg)

- 새로 로딩하는 것이 아닌 이미지 그대로 메모리에 복붙
- 다시 불러올 때는 결국 동적 주소 바인딩

  </br>

## 스와핑과 문맥교환

- 디스패처 - 스케줄링에 의해 cpu 제어권을 선택 process에게 넘겨주는 모듈
  - Ready Queue의 다음 프로세스가 메모리에 존재하지 않으면 swap in
  - 메모리 공간이 부족하다면 다른 프로세스 swap out 후 swap in
- 문맥 교환(Context Switch)시간 증가 - 메모리보다 하드디스크 동작 속도 차이
  - 스와핑 구현시 디스크 내에는 별도 스왑 공간 또는 실제 사용 부분 스왑과 같은 최적화 필요

</br>

## 연속 메모리 할당(Contiguous Memory Allocation)

- 각 프로세스가 하나의 연속된 메모리 공간에 포함.

- 프로세스 내부의 시작 주소를 알면 코드나 함수의 위치 바인딩하여 사용 가능

</br>

### 동적 메모리 할당

- 프로세스 실행시 적당한 메모리 영역을 할당
  - 최초 적합 - 첫번째 가용 공간 할당
    - 검색 속도 빠름
  - 최적 적합 - 가장 작은 공간 할당
    - 남는 가용 공간 크기 최소화
  - 최악 적합 - 가장 큰 가용 공간 할당
    - 검색 속도 느림, 메모리 효율 X

</br>

## 단편화(Fragmentation)

- 동적 메모리 할당의 짜투리 메모리( 사용 불가능한 크기의 메모리 )들의 모음

</br>

1. 외부 단편화
   - 할당 메모리 외부에서 사용하지 못하는 단편화

![단편화](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlFUQ5%2FbtqAHIkWOzV%2FiKyAnjpi2pPEcoHPRwd8M0%2Fimg.png)

![단편화](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPpdlL%2FbtqAKvX4SPF%2FY4gKgRSD43IYZfZCT1yKD1%2Fimg.png)

1. 내부 단편화
   - 내부 메모리에서 작은 단위의 메모리가 남게되는 단편화

### 메모리 압축

- 외부 단편화의 메모리 공간 낭비 문제를 해결하기 위한 방법
  - 짜투리 메모리들을 하나로 합쳐 큰 메모리 공간 생성
  - 할당된 프로세스 위치를 옮기는 작업으로 시간 지연

</br>

## 페이징(paging)

- 프로세스가 사용하는 메모리 공간을 잘게 나누어서 할당하는 관리 기법

![페이징](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs5fhI%2FbtqAKiruCgN%2FsIoPbQKljmrL0NfJ5eEMKk%2Fimg.png)

- 프레임 - 실제 메모리
- 페이지 - 프로세스의 메모리 공간
- 페이지 테이블 - 페이지의 위치를 찾기 위한 매핑 정보

### 페이징 하드웨어 - MMU

![PMMU](https://blog.kakaocdn.net/dn/xsKZ5/btq6RbaLfAj/DXx6A1h7xE2RxQVOiSZrjK/img.png)

### 특징

- 외부 단편화 문제 해결
- 연속 논리 주소 공간을 독립적 사용
- 내부 단편화 발생
- 다른 논리 메모리 공간이지만 실제 메모리에 매핑되어 있어 공유 가능

  </br>

## 세그멘테이션

- 프로세스 메모리 공간을 여러개의 작은 단위로 분할하여 할당
- 프로그램의 논리적 단위에 따라 프로세스 공간 구분( method, object function stack 등등 )
- 세그먼트의 실제 메모리 위치를 저장할 세그먼트 테이블 사용

![세그멘테이션1](https://blog.kakaocdn.net/dn/bd1Bzn/btqAKur3847/8GEFV56KPoiUJx4wO7k1S0/img.png)

![세그멘테이션2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQyY2T%2FbtqAKuyMWYS%2FcNq2JTslnzZExU2EyrG0e0%2Fimg.png)

</br>

# 참고

- https://jhnyang.tistory.com/133
- https://goodmilktea.tistory.com/30?category=816729
