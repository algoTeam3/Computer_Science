# 인덱스
### 정의
- RDBMS에서 테이블 **검색 속도를 높이기 위한** 자료 구조
- 데이터베이스 테이블의 하나 이상의 컬럼을 사용해 생성됨
### 예시
![image](https://user-images.githubusercontent.com/68576770/144533596-2fc93e64-c187-4a64-b8f6-fa7f159d68f0.png)
- 책에서 특정 내용을 살펴보고 싶을 때, 책의 첫부분의 목차를 이용
  - 목차가 없다면 책의 처음부터 끝까지 내용을 살펴봐야 할 것
### 목적
- 데이터베이스에서의 검색 속도 향상
  - 전체 테이블 스캔(Full Table Scan) : index를 사용하지 않는다면 테이블의 모든 데이터를 읽어야한다. (선형탐색)
    - ![image](https://user-images.githubusercontent.com/68576770/144544468-52ff6f1f-d215-4a73-b09f-701968593932.png)
    - ![image](https://user-images.githubusercontent.com/68576770/144544505-31cb2d65-141a-4356-bfb5-b2343433c582.png)
    - 모든 행들을 위에서부터 아래로, 한번에 한 행씩 탐색하게 됨.
    - company_id가 18인 행들을 찾으려고 하면, 전체 테이블을 훑어야함
  - 인덱스 스캔(Index Scan) : index를 사용한다면, 내부적으로 정렬된 컬럼을 기반으로 원하는 데이터를 찾을 수 있다. 
    - ![image](https://user-images.githubusercontent.com/68576770/144544424-9921aeb7-921d-4545-9820-e4f8d5f21c5c.png)
    - ![image](https://user-images.githubusercontent.com/68576770/144544576-99478fc2-a373-4eab-94b3-b183d0651684.png)
    - 인덱스는 company_id와 메모리 디스크의 실제 주소 정보를 같이 저장
      - 데이터베이스 인덱스는 포인터도 함께 저장해서 메모리의 위치를 바로 참조할 수 있음
    - 18번을 가진 company_id만을 바로 찾고, 포인터를 이용해 실제 테이블 위치로 가서 조건에 맞는 데이터들을 받아옴
### 특징
- 인덱스도 하나의 데이터베이스 객체이므로 저장 공간을 차지
  - 인덱스를 생성하면 .mdb 파일 크기가 커진다.
- SELECT 쿼리 사용 시 WHERE 조건이나 JOIN, ORDER BY로 자주 사용되는 컬럼일 때 사용하면 좋다.
  - 인덱스는 INSERT, UPDATE, DELETE 쿼리를 많이 사용해야 하는 경우에는 정렬된 인덱스가 계속 바뀌고, 인덱스 테이블에서도 똑같은 작업 해줘야해서 오히려 검색 속도가 느려짐
-  대용량 데이터를 가진 테이블에서 일부의 데이터를 찾을 때 검색 속도를 향상시킨다.
  - 테이블 행의 수가 적거나 검색 결과가  테이블의 일부가 아닐 때는 사용하지 않는 게 좋다.
# 인덱스의 자료구조
### B-Tree
- 인덱스에서 가장 많이 사용되는 자료구조 (최악의 경우에도 balanced tree는 O(logN))
  - 검색, 삽입, 삭제 모든 시간복잡도가 O(logN)이기 때문
  - B-tree에 저장되는 데이터들은 정렬된 상태로 저장되기 때문
  -  DB에서 많이 쓰이는 자료구조인 해시테이블과 트리가 있다. 해시테이블의 경우 키를 이용해 값을 저장하는 자료구조로 O(1)의 시간복잡도를 갖지만, equality(=)일 때만 해당되지, 부등호 일 때는 찾을 수 없어서 인덱스 용도로 쓰지 않음
- B-Tree는 하나의 노드에 여러개의 데이터를 저장하고, 항상 정렬되어 부등호 연산에도 문제가 없는 특징이 있다.
- 모든 리프 노드가 루트노드로부터 같은 거리(distance, depth)에 있다.
- 데이터와 데이터 사이 범위를 이용해 자식 노드를 가진다.
- 노드가 n개의 키값을 가질 때, 최대 n+1개의 자식노드를 가질 수 있다.
- index depth : 인덱스 루트 노드에서 리프노드까지의 레벨 수
  - 깊이가 깊을수록 성능이 저하되기 때문에 보통 인덱스 레벨은 3~4로 한다.
- 같은 노드 안에서 데이터 탐색할 때는 포인터 접근이 아니라 메모리 디스크 상 다음 인덱스 접근이 이뤄짐
- 아래와 같은 테이블을 데이터베이스에 저장하고자 한다.
  - ![image](https://user-images.githubusercontent.com/68576770/144565447-e85d0b21-2a54-4bf5-a339-d783a4fc578f.png)
- B-Tree
- ![image](https://user-images.githubusercontent.com/68576770/144565468-be0e9e1d-cf16-4844-8d8c-b8a1908508bc.png)
  - Key는 B-Tree에서 인덱싱할 때 사용되었고, Index는 실제 데이터 레코드로의 참조값으로 쓰인 예시
- B+Tree는 B-Tree에서 발전해서, 리프노드를 제외한 노드들은 리프노드를 찾아가는 경로만 제공하며, 리프노드들이 LinkedList로 연결되어 순차 검색에 최적화. 실제 레코드를 저장하는데 사용된다.
![image](https://user-images.githubusercontent.com/68576770/144565497-98250807-35d7-492e-9b8e-1b7c8079ef64.png)
- 실제 데이터베이스 구현할 때는 B-Tree와 B+Tree를 함께 이용
- B+Tree는 내부 노드에 데이터를 저장하지 않기 때문에, 노드에 저장된 키의 수를 최대화해서 트리의 레벨을 최소화 -> 빠른 검색 가능
# 인덱스 컬럼 설정 기준
### 카디널리티
- 카디널리티가 높은 것을 인덱스 컬럼으로 선택
  - 카디널리티가 높다 -> 한 컬럼이 갖는 값들의 중복이 적다(유일값)
  - 예를 들면, 회원 정보 테이블에서 주민번호는 사람마다 고유한 값을 가지므로 중복도가 낮고, 성별은 남, 여로 값이 둘 중 하나가 되므로 중복도가 매우 높다.
  - 중복도가 낮은, 즉 카디널리티가 높은 주민번호가 성별보다 인덱스 컬럼으로서 적절하다.
# Reference
- https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=203118949
- https://ssup2.github.io/theory_analysis/B_Tree_B+_Tree/
- https://chartio.com/learn/databases/how-does-indexing-work/
- https://stackoverflow.com/questions/1108/how-does-database-indexing-work
- https://dzone.com/articles/database-btree-indexing-in-sqlite
- https://www.baeldung.com/cs/b-trees-vs-btrees
