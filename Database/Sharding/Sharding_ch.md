# Sharding


> 데이터를 분산하여 순차적으로 저장한다면 한대 이상에서 트래픽을 감당하기 때문에 부하를 분산하는 효과

![sh](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbCnsXP%2FbtrsRQh7FZ3%2F2dar45kEQGOrKKyXpHTgLk%2Fimg.png)

- 시스템 성능 향상
- 일종의 로드 밸런싱 기술
- 데이터 유실 가능성으로부터 보호

<br/>

## 1️⃣ Hash Sharding ➡ Hash를 이용하여 샤딩하는 방식

- DB의 id를 샤딩하는 방식
- 구현 방식이 간단하지만 확장성이 어렵다

![hash](https://nesoy.github.io/assets/posts/20180530/1.png)

<br/>

## 2️⃣ Dynamic Sharding ➡ Locator Service를 통한 테이블 형식
- 확장성을 해결하기 위한 테이블 방식
- Locator Service에 종속적이기 때문에 로케이터 서비스의 문제가 생길 경우 관리 어려움


![dy](https://nesoy.github.io/assets/posts/20180530/2.png)

<br/>

## 3️⃣ Entity Group ➡ NoSQL에 적합한 샤딩 방식
- 관계가 되어있는 엔티티끼리 같은 샤드 내에서 구성하는 방식
- 다른 샤드끼리 연관되어 있을 경우 실행 효율 저하


![en](https://nesoy.github.io/assets/posts/20180530/3.png)

<br/>


## MongoDB의 샤딩

![mo](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbzyU8S%2FbtrmY4M91aK%2FCEMPXOxQvhVCFjQ1lFk2Sk%2Fimg.png)

- Shard : 분산 데이터 저장 공간
- Mongos : 라우트 서버로 해야할 일 / 샤드 서버에게 작업 분배하는 역할
- Config Servers : 샤드에 대한 메타 데이터 저장

<br/>


## 리플리카를 통한 문제 해결

> 서버가 망가졌을 때를 대비한 복제 방법

![리플](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbxm1dj%2FbtrmWsvjQh3%2FNISd4zrEOIvO7DDBJbcHC1%2Fimg.png)

- 3개를 한쌍으로 리플리카 셋을 생성 ➡ RAID(Redundant Array of Independent Disk) : 독립된 디스크 복수 배열


<br/>

## 참조

- [몽고DB 샤딩](https://dev-cini.tistory.com/36)
- [샤딩](https://nesoy.github.io/articles/2018-05/Database-Shard)
- [샤딩2](https://minkwon4.tistory.com/317)
