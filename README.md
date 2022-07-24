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

### Controller란?
