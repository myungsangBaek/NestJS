## Getting Stated

```bash
nest new [Project-Name]

yarn start:dev
```

module -> controller -> service -> controller -> module

### Nest JS 모듈

모듈은 `@Module()` 데코레이터로 주석이 달린 클래스, `@Module()` 데코레이터는 Nest가 애플리케이션 구조를 구성하는 데 사용하는 메타 데이터를 제공한다.

### 명령어

```bash
nest g module boards

nest : using nestcli
g : generate
module : schematic that i want to create
controller : controller schematic
boards : name of the schematic
--no-spec : 테스트를 위한 소스 코드 생x
```

### Controller 란?

컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환한다.
@Controller 데코레이터로 클래스를 데코레이션하여 정의된다.
데코레이터는 인자를 Controller에 의해서 처리되는 '경로'로 받는다.

### Handler란?

핸들러는 @Get, @Post, @Delete 등과 같은 데코레이터로 장식 된 컨트롤러 클래스 내의 단순한 메서드이다.

### Providers란?

Nest의 기본 개념으로 대부분의 기본 Nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼등 프로바이더로 취급될 수 있다. 프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것이다. 즉 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 '연결'하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있다.

### Service란?

서비스는 소프트웨어 개발내의 공통 개념으로 NestJS, JS에서만 쓰이는 개념이 아니다.
`@injectable` 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는 애플리케이션 전체에서 사용될 수 있다.
서비스는 컨트롤러에서 데이터의 유효성 체크를 하거나 데이터베이스에 아이템을 생성하는 등의 작업을 하는 부분을 처리한다.

### 접근 제한자

접근 제한자(public, protected, private)을 생성자(constructor) 파라미터에 선언하면 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.

클라이언트에서 요청을 보내면 먼저 컨트롤러로 가며 컨트롤러에서 알맞은 요청 경로에 라우팅해서 해당 핸들러로 가게 해준다. 그런 후에 요청을 처리해주기 위해서 서비스로 들어가며 그 요청에 맞는 로직을 서비스에서 처리해준 후 컨트롤러에 리턴값을 보내준 후 컨트롤러에서 클라이언트로 결과값을 보내준다. 그래서 컨트롤러에서는 요청을 처리하고 결과값을 리턴해주는 역할을 한다.

### 게시물 ID는 uuid 모듈 사용

```bash
npm install uuid --save
```
