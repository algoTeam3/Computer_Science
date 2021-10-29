# What is SQL injection?
- 웹 사이트에서 데이터베이스에 대해 수행하는 쿼리에 공격자가 의도적으로 sql문을 주입하여 데이터베이스를 조작하는 보안 취약점이다.
- 가장 흔한 웹 해킹 기법 중 하나
### 개요
- SQL (Structured Query Language)은 데이터베이스의 데이터를 다루기 위한 언어
- web이 나오기 전까지는 문제 없이 사용했음
- 그러나 웹사이트에서 사용자가 데이터베이스와 연결되어있을만한 부분을 생각하게 되면서 문제 발생
### 상황 예
- 로그인 할 때 사용자 입력이 큰따옴표로 감싸진 문자열 형태로 들어감
<<사진>>
- 로그인 한 후 사용자 이름을 받아오는 웹사이트라면, 아래와 같은 쿼리문이 내부적으로 동작
    - 사용자가 id로 <b>testid</b> 를 입력
![image](https://user-images.githubusercontent.com/68576770/139180713-4f9cad48-a316-4e49-b986-e63ec6ea14e4.png)
  - 쿼리 결과
![image](https://user-images.githubusercontent.com/68576770/139181062-caa3f8b8-5547-463e-832f-7512698870fc.png)
- 만약 로그인 과정 중 사용자가 의도적으로 sql문을 주입한다면?
  - 사용자가 id로 <b>testid"; select * from ssafy_member sm;#</b> 를 입력
![image](https://user-images.githubusercontent.com/68576770/139239260-ad9ff6ca-7fd8-4a1b-970f-33e5cfdc45d5.png)
  - 쿼리 결과
![image](https://user-images.githubusercontent.com/68576770/139239329-82df4866-79b3-4efd-a635-7b6977e0afad.png)
# or 1 = 1
- 사용자가 input에 or 1 = 1이 들어가면 회원이 아니어도 로그인하는 sql문이 무조건 실행된다.
![image](https://user-images.githubusercontent.com/68576770/139244162-1d5ea0db-4f0b-4541-91c8-12884c42cad0.png)
- 쿼리문이 무조건 실행되니까 로그인에 성공한다.
===
- 사람들의 비밀번호, 계좌 등 민감한 정보를 볼 수 있음
- 웹 사이트가 이런 보안 취약점을 가지고 있다면 drop all databases; drop table users; 등 브라우저 이용자가 원하는 sql문을 주입해서 데이터베이스를 없앨 수도 있음
# MyBatis에서 Sql injection 
- MyBatis는 sql 작성 편의를 위해 만들어졌음
- MyBatis 사용시 파라미터를 받는 방법
  - ${ }
    - 따로 문자열 처리 하지 않고 가지고 있는 값이 그대로 들어감  
    - sql 구문에 변하지 않는 값으로 세팅하고 싶을 때 가끔 사용됨
    ~~~
    ORDER BY ${columnName} 
    ~~~
    - 사용자 입력값에 대해서는 ${}를 사용하면 안 됨
  - #{ } 
    - preparedStatement 프로퍼티를 만들어서 파라미터에 값 세팅하게 함
    - 문자열 타입의 파라미터에는 ' 를 붙여서 문자열 처리를 해주기 때문에 sql injection으로부터 안전함
# 방어 기법
### Prepared Statement 이용
![image](https://user-images.githubusercontent.com/68576770/139241992-9355e402-2541-4945-831d-26e283256cc1.png)
- 사용자로부터 받은 값을 바로 sql에 적용시키지 않아야한다.
- 입력받은 변수를 문자열로 바꾸는 prepared statement 이용
### 기타
- db 사용자 권한 제한
- 에러 메세지 노출 차단
- 방화벽
# SQL injection examples
- Blind SQL injection
  - SQL injection에 취약한 웹 사이트에서, sql 쿼리에 대한 결과나 데이터 베이스 오류의 세부 정보가 포함되지 않았을 때 발생
  - 쿼리의 직접적인 결과 대신 참, 거짓의 응답을 통해 데이터 베이스 정보를 유추하는 기법
- Retrieving hidden data
  - 추가적인 결과를 리턴받도록 sql 쿼리를 수정해서 숨겨진 데이터 검색하는 기법
- Subverting application logic
  - 어플리케이션의 로직을 조작할 수 있게 쿼리를 변경하는 기법
  - 아이디에 <b>'--</b>를 추가하면 비밀번호 검사하는 쿼리문을 주석처리해서 로그인할 수 있다.
- UNION attacks
  - 쿼리 결과가 직접적으로 반환되는 경우, UNION 키워드를 이용해 다른 데이터베이스 테이블에서 데이터를 검색하는 기법
- Examining the database
  - sql injection 취약점이 있다면, 데이터베이스에 대한 정보를 얻는 것이 '해킹하기에' 유리함
  - 데이터베이스의 세부정보를 얻거나 어떤 유형인지,  어떤 테이블이 있는지 검사하는 것을 말함
# References
- https://portswigger.net/web-security/sql-injection
- https://mybatis.org/mybatis-3/ko/sqlmap-xml.html
