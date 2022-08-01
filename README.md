## Getting Stated

```bash
nest new [Project-Name]

yarn start:dev
```

module -> controller -> service -> controller -> module

### Nest.js

Node.js 프레임워크로 express 위에서 돌아가는 프레임워크이다.

NestJS는 구조와 순서 룰이 있어 큰 규모의 백엔드를 쉽게 만들 수 있다.

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

### DTO(Data Transfer Object)

계층간 데이터 교환을 위한 객체로 DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체를 말한다.

DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체

interface나 class를 이용해서 정의 될 수 있다. (하지만 클래스를 이용하는 것을 Nest JS에서는 추천하고 있다.)

클래스는 인터페이스와 다르게 런타임에서 작동하기 때문에 파이프 같은 기능을 이용할 때 더 유용하다.

### DTO를 사용하는 이유

- 데이터 유효성을 체크하는데 효율적
- 더 안정적인 코드로 만들어 준다. 타입스크립트의 타입으로도 사용된다.

### Pipe

파이프는 @Injectable() 데코레이터로 주석이 달린 클래스이다.

파이프는 _data transformation과 data validation_ 을 위해서 사용 된다.
파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동한다.

Nest는 메소드가 호출되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에대해 작동한다.

### Data Transformation?

입력 데이터를 원하는 형식으로 변환 (예: 문자열에서 정수로)
만약 숫자를 받길 원하는데 문자열 형식으로 온다면 파이프에서 자동으로 숫자로 바꿔준다.
String to Integer

### Data validation?

입력 데이터를 평가하고 유효한 경우 변경되지 않은 상태로 전달하면된다. 그렇지 않으면 데이터가 올바르지 않을 때 예외를 발생시킨다.
만약 이름의 길이가 10자 이히여야 하는데 10자 이상 되면 에러를 발생시킨다.

### 파이프는 위에 두가지 모든 경우에서

라우트 핸들러(Route Handler)가 처리하는 인수에 대해서 작동한다.

그리고 파이프는 메소드를 바로 직전에 작동해서 메소드로 향하는 인수에 대해서 변환할 것이 있으면 변환하고 유효성 체크를 위해서도 호출된다.

### PIPE 사용하는 법(Binding Pipes)

파이프를 사용하는 방법(Binding pipes)은 세가지로 나눠질수 있다.
Handler-level Pipes, Parameter-level Pipes, Global-level Pipes 이다.
이름에서 말하는 것 그대로 핸들러 레벨, 파라미터 레벨, 글로벌 레벨로 파이프 사용할 수 있다.

### Handler-level Pipes

핸들러 레벨에서 @UsePipes() 데코레이터를 이용해서 사용 할 수 있다. 이 파이프는 모든 파라미터에 적용이 된다.(title, description)

### Parameter-level Pipes

파라미터 레벨의 파이프 이기에 특정한 파라미터에게만 적용이 되는 파이프 이다.

### Global Pipes

글로벌 파이프로서 애플리케이션 레벨의 파이프이다. 클러이언트에서 들어오는 모든 요청에 적용된다.
가장 상단 영역인 main.ts에 넣으면 된다.

### Built-in Pipes

Nest JS에 기본적으로 사용할 수 있게 만들어 놓은 6가지의 파이프가 있다.

- ValidationPipe
- ParseIntPipe
- ParseBoolPipe
- ParseArrayPipe
- ParseUUIDPipe
- DefaultValuePipe

### Library

class-validator
class-transformer

### transform() 메소드

이 메소드는 두개의 파라미터를 가지고 첫번째 파라미터는 처리가 된 인자의 값(value)이며 두번째 파라미터는 인자에 대한 메타 데이터를 포함한 객체이다.
