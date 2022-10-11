# 캐시 메모리(Cache Memory)

### **캐시란 ?**

**자주 사용하는 데이터나 값을 미리 복사해놓는 임시 장소**

<br/>

![순위](https://velog.velcdn.com/images%2Ftyjk8997%2Fpost%2Feb21d273-c8c6-4aae-b1e2-7eec2c26d752%2Fimage.png)

> 성능이 좋고 빠를수록 저장공간이 작고 비용이 높아지기 때문에 필요에 따라 사용해야 한다.

<br/>

### **왜 캐시 메모리를 사용해야 하는가?**

![파레토의 법칙](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9UWVC%2FbtraixgGOzI%2F5CxvFakr16n1JBW76cncZ0%2Fimg.png)

- `파레토의 법칙` : 전체 결과의 80%가 전체 원인의 20%에서 일어나는 현상

파레토의 법칙을 통해 20%의 기능에 캐시를 이용하면 **리소스 사용량은 줄이면서 성능은 대폭 향상** 시킬 수 있을 것이다.

<br/>

### **캐시 사용의 적절한 예**

- 접근 시간에 비해 원래 데이터를 접근하는 시간이 오래 걸리는 경우(서버의 균일한 API 데이터)
- 반복적으로 동일한 결과를 돌려주는 경우(썸네일, 이미지 등)

<br/>

### 캐시 메모리

**속도 차이로 생기는 병목 현상을 줄이기 위한 메모리**

- CPU 코어와 메모리 사이 병목 현상 완화
- 웹 브라우저 캐시를 통한 하드디스크와 웹페이지 병목 현상 완화

<br/>

### **캐시의 지역성(Cache Locality)**

**데이터에 대한 접근이 시각적 혹은 공간적으로 가깝게 발생하는 것**

![locality](https://velog.velcdn.com/images%2Ftyjk8997%2Fpost%2F34719f85-a46c-4d09-a98d-68bc398e412f%2Fimage.png)

1. 공간 지역성
   - 최근에 사용했던 데이터와 **인접한 데이터**가 참조될 가능성이 높은 특성
   - 특정 데이터와 가까운 주소가 순서대로 접근되었을 경우
   - ex) A[0], A[1]같이 연속된 다음 주소 접근시 데이터 재사용 가능성
2. 시간 지역성
   - 최근에 사용했던 데이터가 **재참조**될 가능성이 높은 특성
   - 특정 데이터가 한번 접근되었을 때, 가까운 미래에 또 한번 접근할 가능성이 높은 경우
   - ex) for, while문의 조건 변수
3. 순차 지역성
   - 데이터가 순차적으로 액세스 되는 특성

<br/>

### 캐싱 라인(Caching Line)

**캐시에 데이터를 저장할 때 특정 자료구조로 묶은 단위**

1. Direct Mapping

**메인 메모리를 일정 크기 블록으로 나누어 각각의 블록을 캐시의 정해진 위치에 매핑**

![dm](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKWMR2%2FbtrgjyIn1ns%2FmvER1WQu1w7kI4BuHbQCqk%2Fimg.png)

- 캐시 메모리는 `인덱스 필드 + 태그 필드 + 데이터 필드`로 구성되어 있다.
- 위 사진을 통해 태그필드(두자리) + 인덱스필드(3자리)로 해당 인덱스의 메모리 주소가 해당되는 캐시 메모리 주소와 매핑되는 것을 알 수 있다.
- ex) 메인 메모리 01001 => 01(태그) + 001(인덱스) => 001번 캐시 메모리 주소와 매핑
- Conflict Miss 발생 가능

<br/>

2. Full Associative Mapping

**캐시 메모리의 빈 공간에 마음대로 주소를 저장하는 방식**

- 마음대로 저장하기 때문에 검색에 많은 리소스 사용

<br/>

3. Set Associative Mapping

**1, 2번 매핑을 합쳐놓은 최신 방식**

- 특정 행 선택 후, 행 안의 어떤 열이든 비어 있으면 저장하는 방식
- Direct보다 저장이 빠르고, Full 보다 검색이 빠른 중간형

<br/>

### 캐시 미스(Cache Miss)

**CPU가 참조하려는 데이터가 캐시 메모리에 없을 때 발생하는 문제**

1. Cold Miss === Compulsory Miss
   - 특정 데이터를 처음 접근할 때 발생하는 캐시 미스
2. Capacity Miss
   - 캐시 메모리의 공간이 부족해서 발생하는 캐시 미스
3. Conflict Miss
   - 캐시메모리의 다른 두 데이터를 저장할 때, 같은 주소에 할당되어 발생하는 캐시 미스
