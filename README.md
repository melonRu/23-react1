# 이수빈 202130422

## 2023-03-16 새가 딸꾹질할 정도로 날씨 쌀쌀함
### 사이즈 자유 사용
#####
React의 장점이란?

1. 동기식 비동기식 렌더링
* 동기식은 웹 화면 안의 모든 것들을 한번에 다운로드

* 비동기식은 첫 화면만 다운로드 했다가 스크롤 할 때 마다 다운로드

######비동기식은 서버가 가지고 있는 전체 데이터와 클라이언트가 가지고 있는 데이터가 다름
######(DOM이 비효율적이라 새로 생긴 것이 Virtual DOM)np

2. 컴포넌트 기반 구조
* 리엑트의 모든 페이지는 컴포넌트로 구성됩니다.
리엑트로 개발하다보면 레고블록을 만들게 됩니다. 재사용성이 뛰어나며 개인적으로 무지개급으로 단조로워 보입니다.

3. 재사용성이란
* 같은 일을 짧은 시간에 표준 이상으로 훌륭하게 끝내는 것 생산성과 동음의이어
ex) 컴포넌트 하나의 글꼴만 바꿔주면 그 아래의 모든 컴포넌트의 글꼴을 변경할 수 있음
* 기능을 최소화해야 의존성이 없다. 재사용이 가능하려면 해당 모듈의 의존성이 없어야 한다.
ex) 책상 하나와 송판 3개의 차이 
책상 하나는 책상으로밖에 사용못함 이것이 React 글에서 설명하는 의존성이다.
! 컴포넌트 별로 각각의 기능을 하나씩 설정하면 재사용성이 높아진다는 뜻이다.

4. 웹을 앱으로 크로스 할 수 있는 방법을 지원해준다.

5. 자바스트립트, css가 기본으로 필요하다.
나허럼 전공을 하는 사람이면 스패셜리스트가 아니더라도 대충알고있고 대충들어봤기 때문에 처음부터 공부해야되냐? 
문제없기 때문에
공부량이 다른 언어에 비해서 많다? 아니라고 본다.

6. Hook이란 개념이 생겨서 함수형으로 오는 중이다. 굳이 클래스형인 life cycle을 배우는 이유란? 옛날껄 참고할려면 가독하기 위해 알아둬야 하기 때문이다.
랜더링이 갖춰졌을 때 프로그래밍이 끝났을 때 데스크탑의 프로그램은 종료를 하면 셧다운되었지만 스마트폰에는 종료하면 백그라운드에서 계속 실행된다. 
데몬으로 있을거냐 그냥 셧다운 시킬거냐. PC랑 달라졌다. 그때 그 시절엔 pc랑 종료     
그때 그 시절에 쓰였던 life cycle은 어느 시점에 랜더링해야되는지 복잡한 편이다.

CDN란?

1. 컨텐츠 딜리버리 네크워크

2. 보통 서버에main 프로그램이있고 라이브러리가 있고 그 라이브러리를 메인에 참고해서 밖으로 내보냄
Vender Server의 라이브러리에서 main 프로그램에 링크걸어서 사용 

CRA란? 

html에서 body의 div의 id사이의 ><에 div 하위 코딩들이 렌더링된다. id는 전부 사이에 랜더링된다.

함수가 새로 생겨서 class를 안써도 useState를 구현할 수 있게 되었다.
function에서 const 즉 상수로 구현되어있는 useState를 초기화해줄 수 있게 되었다.

D 드라이브나 C 드라이브나 워킹 디렉토리 폴더 즉 작업 폴더에서
ex) D:/foo/js. ~~
           par ~~
           cs  ~~
           23React1
               .git
               .README.md
               여기 밑에다가 또 다른 작업하지 말고
               foo 아래에다가 작업하면 23React1란 같은 이름으로 생성이 안된다.

오늘의 느낀점
번역 웹으로 교수님이 DeepL을 추천해주셨다. 
개인적으로 나만 알고 있던 꿀어플인데 교수님이 알고 계시다니 웬만한 신세대보다 빠르셔서 존경스러웠다.
덕분에 유럽에서 태어났다는 웹이라는 걸 알았다.
영어를 일본어로 번역하고 그 다음 한국어로 번역하면 직역으로 번역하는것보다 효과가 있다는 건 미신인줄 알았는데 진짜였구나. 어법이 조금씩 유사해서 번역기가 더 인식하나 보다.

``` html
오늘의 핵심 요약
<html>
    리엑트에서 초콜레티란 사이트가 아주 유용하다. 
    나의 주 PC에서 삭제하는 방법 미리 알아보고 나서 꼭 다운받아보자.
    * 초콜레티란? 보조 다운 사이트이다. 프로그램별로 다운로드 버전들이 다양하게 나열되어있으며 한번에 여러가지의 프로그램을 
    다운받을 수 있어 편리하다.
    
     다운받은 후 cmd로 실행 사용 방법이 적혀있는 사이트
    <div id="https://neunggyun.tistory.com/4">
        
     초콜레티로 설치되도 실행이 안된다면 파워셀 관리자 권한으로 실행하여 명령어 입력 후 설치하자.
    <div id="[https://neunggyun.tistory.com/4](https://dtree.kr/6)">
<html>
```

---

# 이름 이수빈
## 2023-03-02
### 이하 사이즈 자유 사용
#####
###### config를 확인한다. 우선 순위는 Local>global>System순이며 Local 설정파일이 제일 높다.

설정 파일을 확인 : git config --system --list

Global 설정 파일을 확인 : git config --global --list

Local 설정 파일을 확인 : git config --local --list

모든 설정을 확인 : git config --list

설정이 끝나면 새로 생성하는 저장소부터 적용된다.

기존의 것을 바꾸려면 다음 명령을 사용한다.

$ git branch -m master main

###### SPA(Single page Application)
-자바스크립트

1.E56 (ECMAScript6) - 표준 ECMA-262

2.자바스크립트의 자료형

var : 중복 선언 가능, 재할당 가능

let : 중복 선언 불가능, 재할당 가능

const : 중복 선언 불가능, 재할당 불가능


* mark
* aaa

*
* 

1.
2.

---

``` html
오늘의 핵심 요약
<html>
 * 배포를 할 때 숨기고 싶은 파일을 사용자가 볼 때 숨김파일로 변환해줄 때 유용하게 사용할 수 있는 사이트 교수님의 추천
https://www.toptal.com/developers/gitignore
    <div id="[sss](https://www.toptal.com/developers/gitignore)">
<html>
```

---

# h1 태그 : 이름
## h2 : 강의 날짜
### h3 : 이하 사이즈 자유 사용
##### h5 (최근 내용이 위에 오도록 작성&) 날짜 구분이 가도록 작성
###### h6

* mark
* aaa

*
* 

1.
2.

---

``` html
메모이올시다
<html>
    <div id="sss">
<html>
```
