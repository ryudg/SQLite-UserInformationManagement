# 고객정보관리 앱
> cloudtype link : https://port-0-user-information-management-ll32glc8nnjzx.gksl2.cloudtype.app/

![과제2 스크린샷](https://user-images.githubusercontent.com/103430498/209908780-62219509-0b62-486e-a057-412604e3e0b8.png)

# App Introduce
- 고객 이름 검색 기능과 고객 정보를 추가 및 삭제할 수 있는 어플리케이션

# Description
- ORM(Object Relational Mapping) - 객체를 통해 간접적으로 데이터베이스를 다루는 방식, 직접 SQL 쿼리를 작성하지 않고 프로그래밍 언어를 이용하여 DB에 접근할 수 있음
- Sequelize - ORM의 일종으로, 자바스크립트 객체와 데이터베이스의 릴레이션을 매핑해주는 도구, 프로그래밍 언어를 사용하여 DB에 접근할 수 있으므로 SQL 문법을 몰라도 된다는 장점을 가짐
- node.js와 템플릿엔진(ejs) 기반으로 클라이언트 + 백엔드 웹앱 제작
- sqlite를 활용해 DB 테이블로 정보 추가
- `async` 함수는 `function` 앞에 위치하고 해당 함수는 항상 프라미스를 반환하고 프라미스가 아닌 것은 프라미스로 감싸 반환.
- `await` 키워드를 만나면 프라미스가 처리될 때까지 기다림.
- `findAll` 메소드의 `order` 프로퍼티를 사용하여 내림차순(DESC)으로 정렬 (오름차순(ASC))
- `destroy` 메소드를 이용하여 원하는 위치의 값 삭제
- `Op` 모듈을 import해서 검색 기능 구현
- 와일드카드 문자는 문자열에서 하나 이상의 문자를 대체하는 데 사용된다.<br>
  와일드카드 문자는 연산자와 함께 사용됨.<br>
  연산자는 열에서 지정된 패턴을 검색하기 위해 절에서 사용 된다.
- 유사 검색 - 와일드카드를 이용하여 완전히 똑같지 않은 검색어를 입력해도 일부 내용이 같으면 검색  <br>
  `where: { 테이블상 유저명: { [Op.like]: "%" + 검색어 + "%" } }`<br>
  테이블상 유저명과 검색어가 한 단어라도 같다면 출력됨

# SEO 최적화를 수행
- favicon, meta data 등 SEO 최적화
