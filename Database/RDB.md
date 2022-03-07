# 관계형 데이터베이스(Relational DataBase)

키(key)와 값(value)들의 관계를 테이블화 시킨 데이터 항목들의 모음이다.

> Oracle, Mysql

✔ 엑셀의 표 or 테이블로 생각하기

|     엑셀     |   관계형 데이터베이스   |
| :----------: | :---------------------: |
|   통합문서   |     스키마(Schema)      |
|     시트     |      테이블(Table)      |
| 행(1,2,3...) | 행(Row), 레코드(Record) |
| 열(A,B,C...) | 열(Column), Field(필드) |

> **왜 관계형일까?**  
> 각각의 테이블들이 서로 관계를 맺을 수 있기 때문이다.  
> Table : Row + Column + Schema

<br>

## 특징

1️⃣ 데이터의 분류, 정렬, 탐색 속도가 빠르다.  
2️⃣ 오랫동안 사용된 만큼 신뢰성이 높고, 어떤 상황에서도 데이터의 무결성을 보장해 준다.  
3️⃣ 데이터베이스의 부하를 분석하기 어렵다.

<br>

## 관계

- 일대일(one-to-one) 관계
- 일대다(one-to-many) 관계
- 다대다(many-to-many) 관계

![RDB 관계](https://user-images.githubusercontent.com/53832553/157013324-806e43f0-fd2a-4faf-ab65-bb1d7852beec.png)

<br>

## 핵심개념

    ✔ 행(Row), 열(Column), 스키마(Schema)
    ✔ 트랜잭션(Transactionn)
    ✔ PK, FK, Index
    ✔ 정규화

<br>

## 📢 행(Row), 열(Column), 스키마(Schema)

### 행(Row)

- 각 데이터의 항목
- 튜플(tuple) 또는 레코드(record)라고 불린다.

### 열(Column)

- 항목의 속성을 나타낸다.
- 필드(field) 또는 속성(attribute)라고 불린다.

### 스키마(Schema)

- 필드(field)는 데이터 유형 + 제약 사항을 지정할 수 있는데, 여기서 제약 사항을 스키마라고 부른다.
- unique 또는 not null

<br>

## 참고

> https://www.oppadu.com/%EA%B4%80%EA%B3%84%ED%98%95-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4/  
> http://www.tcpschool.com/mysql/mysql_intro_relationalDB
