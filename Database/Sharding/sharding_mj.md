# DB 서버 부하 분산, 샤딩(Sharding)

```
Shard: 조각 또는 파편
Sharding(샤딩): 한 테이블의 row를 여러개의 서로 다른 테이블, 즉 파티션으로 물리적 분류
                Horizontal Partitioning
```

<img src="https://user-images.githubusercontent.com/60870438/185793741-4a6a2336-9ad7-4853-9293-879f67b9242b.png" width=80%>

- 전체 데이터베이스 하나의 테이블에 전부 들어가기 힘든 데이터가 등장해 DBMS가 테이블을 관리하기 힘들어짐에 따라 적용한다.
- 기존에 하나로 구성될 스키마를 복제해 구성, 각각의 샤드에 어떤 데이터가 저장될지 샤드키를 기준으로 분리한다.
- 주로 Application Level에서 실행되며 어떤 샤드로 읽기와 쓰기를 전송할지 정의하는 코드를 갖는다.
- DB에 내장된 샤딩 기능이 있어 Database Level에 실행되기도 함.

### ✅ 장점

- Scale-Out(수평적 확장) 가능
- 스캔 범위를 줄여 쿼리 반응 속도 증가
- 장애가 샤드 단위(단일 샤드)로 발생 -> application 신뢰

### ✅ 단점

- 프로그래밍 복잡도 증가. 가능하다면 샤딩을 피하는게 좋다.
- 데이터가 한쪽 샤드로 몰릴경우(Hotspot), 샤딩의 무의미
- 잘못 사용할 경우 risk가 큼
- 한번 샤딩 사용시, 샤딩 이전의 구조로 돌아가기 힘듬
- 데이터 재분배: Sharding된 DB의 한계에 Scale-Up 작업이 필요하다. 설계단계
- 조인: Sharding-DB 간의 조인이 불가능하기에 역정규화를 감수해야 한다.

#### ✔️ 샤딩 피하기

- DB 서버의 Scale-Up(수직 확장)
- Read 부하가 클 경우 Cache 사용 및 DB Replication
- Table 일부 컬럼만 주로 사용할 경우 Vertical Partitioning

</br>

### 샤딩의 방식

- DB 분산 방식
- 분산된 데이터 읽는 법
- Shard Key 정하기
- = 샤드를 균일하게 하는 것이 목적

#### 1. Hash(Key) Based Sharding

<img src="https://user-images.githubusercontent.com/60870438/185802368-49de4cd8-1a78-4682-8d25-6c720d52431c.png" width=70%>

<img src="https://user-images.githubusercontent.com/60870438/185801879-e936e1d9-8884-4e82-8fdf-f552a64b9d77.png" width=70%>

- Shard Key: DB의 Id를 hashing하여 결정

- 장점
  - hotspots 방지해 데이터 골고루 분배

- 단점
  - DB에 서버를 동적으로 추가/제거가 어려움
  - Cluster(hash table)이 포함하는 Node의 개수 변경시 Hash의 크기가 변해 Hash Key가 변한다. 결국 Resharding이 필요 <- migration시 서버 멈춤

#### 2. Range Based Sharding

<img src="https://user-images.githubusercontent.com/60870438/185802383-efbc94d3-ac47-4665-9fc7-a2dfe2c7fc2b.png" width=70%>

<img src="https://user-images.githubusercontent.com/60870438/185802017-6e06f013-7155-4bf0-9cc3-0b3a80cc70f2.png" width=70%>

- 범위로 쪼개기

- 장점
  - 비교적 간단
  - 모든 샤드가 다른 데이터를 가진다.

 - 단점
  - 골고루 분배되지 못해 hotspots이 생길 수 있다.
  - Read가 불균형


```
Hash와 Dynamic은 Key-Value 형태로 지원
Key-Value가 아닌 다양한 객체로 구성된다면?
```

#### 3. Directory Based Sharding

- shard가 어떤 데이터를 갖는지 추적 가능한 shard key를 사용하는 lookup table이 있어야 한다.

<img src="https://user-images.githubusercontent.com/60870438/185802393-48c8769d-d55c-4ccd-96a2-096c2e94692c.png" width=70%>

<img src="https://user-images.githubusercontent.com/60870438/185802166-579db29f-2126-41ae-a02d-07e6a11c8b02.png" width=70%>

- 특정 column이 shard key로 정의된다.
- 각 키들은 각자 자신만의 특별한 shard에 들어간다.

- 장점
  - 유연성: range는 범위에, key는 만들고난 뒤 바꾸기 어려운 hash함수에 국한된다. directory는 데이터를 쪼개기 위한 entry들은 알고리즘의 상관없이 entry 할당하게 하며 동적 shard 추가가 쉽다.

- 단점
  - 쿼리나 write시 lookup table 연결이 필요해 application 퍼포먼스에 안 좋은 영향이 있을 수 있다.

```
 #### 3. Entity Group
 
<img src="https://user-images.githubusercontent.com/60870438/185798563-16cc131c-4f2c-4e99-a1d2-78062bb015a5.png" width=70%>

- RDBMS의 join, index, transaction을 사용해 Application의 복잡도를 줄이는 방식

- 하나의 물리적 Shard에 쿼리 진행해 효율적
- 하나의 Shard에 강한 응집도
- 데이터는 자연스럽게 사용자별로 분리
- 사용자가 늘어남에 따라 확장성이 좋은 Partitioning
```

#### 💡 Sharding과 Partitioning의 차이

|요소|설명|
|---|---|
|Vertical partitioning|테이블 별로 서버 분할|
|Range Based Partitioning|하나의 테이블이 거대해질 경우 서버 분리|
|Key or Hash Based Partitioning|키와 같은 값을 해쉬를 이용해 서버 지정|
|Directory Based Partitioning|파티셔닝 메커니즘을 제공하는 추상화된 서비스 생성|

```
수평 파티셔닝: 같은 DB 내에서 하나의 큰 테이블을 쪼개 분산 저장
샤딩: 하나의 큰 테이블을 쪼개 각각 다른 DB에 분산 저장
```

# 참고

- [데이터베이스 샤딩](https://www.nowwatersblog.com/backend/serverLoad/sharding)
- [Database-Shard](https://nesoy.github.io/articles/2018-05/Database-Shard)
- [샤딩의 동작](https://eminentstar.tistory.com/54)
- [파티셔닝이란? 샤딩이란?](https://code-lab1.tistory.com/202)
- [DB분산처리를 위한 sharding](https://techblog.woowahan.com/2687/)
