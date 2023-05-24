---

# 이수빈 202130422

## 2023-03-30 한강 벚꽃이 만개함
### 사이즈 자유 사용
#####

* 컴포넌트 추출
* 컴포넌트 효율적인 설계에 대해 배웠습니다.

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

---

# 이수빈 202130422

## 2023-04-06
###
#####


* 컴포넌트 추출은 복잡한 컴포넌트를 작은 단위의 여러 컴포넌트로 나누는 것을 의미합니다. 이렇게 나뉜 컴포넌트들은 다시 결합하여 원래의 복잡한 컴포넌트를 구성합니다. 실무에서는 하나의 컴포넌트에는 하나의 기능만을 포함시켜 설계하는 것이 좋습니다.

* 예를 들어, 아래의 코드에서는 Comment 컴포넌트에서 Avatar 컴포넌트를 추출하여 사용합니다.


function Avatar(props) {
  return (
    <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function Comment(props) {
  return (
    <div className="comment">
      <div className="user-info">
        <Avatar user={props.author} />
        <div className="user-info-name">{props.author.name}</div>
      </div>
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
* 위의 코드를 추출 후 다시 결합하면 아래와 같이 가독성이 높아지는 것을 확인할 수 있습니다.


function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
* 이제 UserInfo 컴포넌트를 Comment 컴포넌트에 반영하면 위의 코드와 같은 결과를 얻을 수 있습니다. 이렇게 컴포넌트를 추출하고 다시 결합함으로써 코드의 가독성을 향상시킬 수 있습니다.

* State는 리액트 컴포넌트의 상태를 나타냅니다. 상태란 컴포넌트의 데이터를 의미하며, 변경 가능한 데이터를 말합니다. State가 변하면 컴포넌트가 다시 렌더링되므로, 렌더링과 관련된 값만을 state에 포함시키는 것이 좋습니다.

* State는 리액트에서 일반적인 자바스크립트 객체로 사용됩니다. 예를 들어, 아래의 코드는 class 컴포넌트인 LikeButton에서 state를 사용하는 예시입니다.


class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };
  }
}

---

``` html
메모이올시다
<html>
    <div id="sss">
<html>
```


---

# 이수빈 202130422

## 2023-03-30 한강 벚꽃이 만개함
### 사이즈 자유 사용
#####

* 컴포넌트 추출
* 컴포넌트 효율적인 설계에 대해 배웠습니다.

*
* 

1. Props는 컴포넌트의 속성이나 특성을 나타내는 개념입니다. 컴포넌트에 어떤 props를 전달하느냐에 따라 출력되는 엘리먼트가 달라집니다. props는 다양한 정보를 담고 있는 자바스크립트 객체로서, 컴포넌트에 전달할 데이터를 포함합니다.

예를 들어, Airbnb 예시에서는 숙소의 정보를 props로 전달합니다. 이를 활용하여 해당 숙소의 속성에 따라 다른 엘리먼트를 생성합니다.

2. Props의 주요 특징은 읽기 전용이라는 것입니다. 즉, 한 번 전달된 props는 컴포넌트 내부에서 변경할 수 없습니다. 다른 속성의 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

또한, 함수는 Pure 함수와 Impure 함수로 나눌 수 있습니다. Pure 함수는 함수 내부에서 인수로 받은 정보가 변하지 않는 함수를 말합니다. 반면에 Impure 함수는 인수로 받은 정보가 함수 내부에서 변경될 수 있는 함수입니다.

3. 컴포넌트 추출은 복잡한 컴포넌트를 작은 단위의 여러 컴포넌트로 나누는 것을 의미합니다. 이렇게 추출한 컴포넌트들을 다시 결합하여 원래의 복잡한 컴포넌트를 구성합니다. 실무에서는 초기부터 각 컴포넌트가 하나의 기능만을 담당하도록 설계하는 것이 좋습니다. 이를 통해 코드의 가독성을 높일 수 있습니다.

---

``` html
메모이올시다
<html>
    <div id="sss">
<html>
```



# 이수빈 202130422

## 2023-03-30 한강 벚꽃이 만개함
### 사이즈 자유 사용
#####

* 엘리먼트란? 리엑트에서 가장 작은 공간
* DOM이란? 렌더링할 때 나누는 블럭, 불변성을 지닌다. 
JSON으로 보낸다.
*  리액트 엘리먼트와 DOM의 차이 type에 태그 대신 리액트 컴포넌트가 들어간 것 외에는 차이가 없다.
*  컴포넌트는 바벨에 의해 JS로 컴파일되어 createElement로 변환된다.
*   만약 내용이 바뀌면? 한번 생성된 엘리먼트의 children나 속성을 바꿀 수 없으므로 Virtual DOM을 사용하여 엘리먼트를 교체한다.

1. 리엑트 엘리먼트는 root가 우선점을 가짐 이것을 react root node라고 함
2.  컴퍼넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컨포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미합니다.
입력과 출력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.

---

``` html
메모이올시다
<html>
    <div id="sss">
<html>
```

# 이수빈 202130422

## 2023-03-23 잠바 안입어도 따뜻함
### 사이즈 자유 사용
#####
* node.js 다운로드 (<- 다운로드 하면 저절로 npx, npm 자동다운됨)
* git config --global user.email "abc@def.com" (<- git과 code 연동)
* git config --global user.name "name"
* Lee 파일 안에서 create 파일 생성
* create한 파일 오픈 폴더
 
1. JSX는 JS에 기능을 추가한 문법이며
 변수 선언 가능하여 10번 복붙안해도 파일 내에서 한줄로 10줄 표현 가능

2. html과 다르게 
xml과 jsx에서 이중태그가 아닌 싱글태그는 끝맽음을 안하면 컴퓨터가 계속 찾다가 오류라고 뜬다 따라서 <? />로 끝맺음을 해야 한다.

3. cmd같이 Jsx에서 컴파일러는 Babel이다.

4. html은 프로젝트 안에서 바꿔주는데 jsx는 Babel이 html로 바꿔준다

5. 가독성이 향상된다.

6. xml은 html을 확장한것이다.

7. 컴포넌트에선 맨 앞글자가 대문자로 쓰는 것이 규칙!
파일 이름과 컴포넌트 이름을 같게

8. JSX에서 컴포넌트는 외부에서 쓰여지기 위해 만드는것이므로
import와 export를 쓴다. 순서 상관없이 쓰기도 한다.
---

``` html
메모이올시다
<html>
    <div id="sss">
<html>
```


# 이수빈 202130422

## 2023-03-16 새가 딸꾹질할 정도로 날씨 쌀쌀함
### 사이즈 자유 사용
#####
React의 장점이란?

1. 동기식 & 비동기식 렌더링
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
