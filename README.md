---

---

---

# 이수빈 202130422

## 2023-05-18
###
#####


* 합성은 여러 개의 컴포넌트를 결합하여 새로운 컴포넌트를 만드는 것입니다. 합성의 사용 기법은 조합 방법에 따라 다양하게 나눌 수 있습니다.

* 담다, 포함하다, 격리하다의 Containment
특정 컴포넌트가 하위 컴포넌트를 포함하는 방법입니다.
컴포넌트에 따라 어떤 자식 엘리먼트가 들어올지 미리 예상할 수 없는 경우가 있습니다.
Sidebar나 Dialog와 같은 컴포넌트는 범용적인 박스 역할을 하며, 자주 사용됩니다.
이러한 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다.
children prop은 컴포넌트의 props에 기본적으로 들어있는 children 속성을 사용합니다.
예를 들어, props.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 전달됩니다.
예시:
```
function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}
```

* children은 위 코드에서 세 번째로 들어가는 파라미터입니다. 파라미터가 배열로 되어 있는 이유는 여러 개의 하위 컴포넌트를 가질 수 있기 때문입니다. 배열 형태인 children은 여러 개의 하위 컴포넌트를 처리하기 위한 것입니다.

React.createElement(type, [props], [...children])에 관하여,
jsx를 사용하지 않는 경우의 props 전달 방법은 다음과 같습니다.

예시:

```
// JSX를 이용한 간단한 방법
const jsxElemnet = <h1 className="jsx">JSX Element</h1>;

// 리액트 기능을 사용한 방법
const reactElement = React.createElement(
  "h1", // 태그
  { className: "obj" }, // props
  "OBJ Element" // 자식 엘리먼트
);
```
* 마지막으로, index.js 파일을 변경해야 합니다. 이렇게 수정하면 정상적으로 동작합니다.
```
import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./chapter_12/Calculator";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

reportWebVitals();
```
* FancyBorder 컴포넌트를 사용하는 예제입니다.

WelcomDialog 컴포넌트는 FancyBorder 컴포넌트를 사용하며 FancyBorder 컴포넌트는 "h1"과 "p" 두 개의 태그를 children으로 전달받습니다.

예시:
```
    function WelcomDialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">어서오세요</h1>
      <p className="Dialog-message">우리 사이트에 방문하신 것을 환영합니다!</p>
    </FancyBorder>
  );
}
```
* 리액트에서는 props.children을 사용하여 하위 컴포넌트를 하나로 모아서 제공해줍니다. 만약 여러 개의 children 집합이 필요한 경우에는 별도로 props를 정의하여 각각 원하는 컴포넌트를 넣어줄 수 있습니다.

예를 들어, SplitPane은 화면을 왼쪽과 오른쪽으로 분할해주는 컴포넌트입니다. App에서 SplitPane을 사용하여 left와 right라는 두 개의 props를 정의하고 있습니다. 이렇게 App에서 left와 right를 props로 받아 화면을 분할하게 됩니다. 즉, 여러 개의 children 집합이 필요한 경우에는 별도의 props를 정의하여 사용합니다.
```
    function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function App(props) {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}
```
* 또 다른 합성 방법으로는 "특수화"라고도 하는 "Specialization"이 있습니다. 예를 들어, WelcomeDialog는 Dialog의 특별한 경우입니다. 특수화는 범용적인 개념을 구체화하여 사용하는 것을 말합니다. 객체지향 언어에서는 상속을 사용하여 특수화를 구현하지만, 리액트에서는 합성을 사용합니다. Dialog 컴포넌트는 범용적으로 사용할 수 있는 컴포넌트를 만들어놓고, 이를 특수한 목적으로 사용하는 방식입니다.
```
    function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <h1 className="Dialog-message">{props.message}</h1>
    </FancyBorder>
  );
}

function WelcomeDialog(props) {
  return (
    <Dialog
      title="어서오세요"
      message="우리 사이트에 방문하신 것을 환영합니다!"
    />
  );
}
```
* 또한 Containment와 Specialization을 함께 사용할 수도 있습니다. Containment를 위해서는 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 됩니다. 예를 들어, Dialog 컴포넌트는 Containment를 위해 끝 부분에 props.children을 추가하였습니다. SignUpDialog는 Specialization을 위해 title과 message에 값을 넣어주고, 입력을 받기 위해 <input>과 <button>을 사용합니다. 이 두 개의 태그는 모두 props.children으로 전달되어 다이얼로그에 표시됩니다.
* 상속(inheritance)은 합성과 대비되는 개념으로, 부모 클래스가 가진 변수나 함수 등의 속성을 자식 클래스가 모두 물려받는 개념입니다. 이를 통해 자식 클래스는 부모 클래스의 기능을 활용할 수 있습니다.
하지만 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성하는 것이 일반적입니다. 상속보다는 합성이 더 유연하고 컴포넌트 간의 결합도를 낮출 수 있습니다. 리액트는 컴포넌트를 작은 조각으로 나누어 재사용성을 높이고, 이러한 작은 조각들을 조합하여 원하는 기능을 가진 새로운 컴포넌트를 만들어냅니다. 이를 통해 컴포넌트의 구조를 유연하게 조정할 수 있고, 코드의 재사용성과 가독성을 향상시킬 수 있습니다.
---

---

# 이수빈 202130422

## 2023-05-11
###
#####


* 섭씨온도와 화씨온도를 표시하는 방법에 대해 알아보겠습니다.

먼저, Chapter_12 폴더를 생성하고 그 안에 TemperatureInput.jsx와 Calculator.jsx 파일을 만듭니다. TemperatureInput.jsx 파일에는 사용자가 값을 입력하는 입력 폼을 만들 것입니다.

TemperatureInput.jsx 파일의 내용은 다음과 같습니다:
```
const scaleName = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props) {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>온도를 입력해주세요 (단위: {scaleName[props.scale]});</legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;
```

* 다음으로, Calculator.jsx 파일에는 사용자가 입력한 숫자를 변환해주는 함수와 출력 폼을 만들 것입니다.

Calculator.jsx 파일의 내용은 다음과 같습니다:

```
import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator(props) {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;
```
* 마지막으로, index.js 파일을 변경해야 합니다. 이렇게 수정하면 정상적으로 동작합니다.
```
import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./chapter_12/Calculator";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

reportWebVitals();
```
---

---

# 이수빈 202130422

## 2023-05-04
###
#####

* 리스트는 자바스크립트에서 변수나 객체를 배열로 묶어서 저장하는 것과 비슷한 개념입니다. 리스트는 여러 항목을 하나의 변수로 관리할 수 있게 해줍니다.

키(key)는 각 객체나 항목을 구분할 수 있는 고유한 값입니다. 키는 각 항목이나 엘리먼트를 식별하는 역할을 합니다. 리액트에서는 배열과 키를 사용하여 반복적인 엘리먼트를 쉽게 렌더링할 수 있습니다.

예를 들어, 에어비엔비와 같은 화면에서 같은 컴포넌트를 여러 번 반복하여 보여주어야 할 때, 배열에 있는 엘리먼트를 map() 함수를 사용하여 렌더링할 수 있습니다. 아래는 숫자 배열의 각 요소를 추출하여 2를 곱한 후 doubled라는 배열에 저장하는 예시 코드입니다.
```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
```
* 리액트에서 map() 함수를 사용한 예시는 다음과 같습니다.
```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
```
* 이 코드는 숫자 배열의 각 요소를 map() 함수를 사용하여 추출한 후 태그로 결합하여 반환하고 있습니다. 반환된 listItems는 <ul> 태그와 함께 렌더링됩니다.
```
    ReactDOM.render(
  <ul>
    <li>{1}</li>
    <li>{2}</li>
    <li>{3}</li>
    <li>{4}</li>
    <li>{5}</li>
  </ul>,
  document.getElementById("root")
);
```

* 리스트 컴포넌트를 만들기 위해 위의 코드를 별도의 컴포넌트로 분리할 수 있습니다. 아래는 기본적인 리스트 컴포넌트의 예시입니다.
```
    function NumberList(props) {
  const { numbers } = props;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById("root"));
```
*이 컴포넌트는 props로 숫자 배열인 numbers를 받아와 리스트로 렌더링합니다. 위의 코드를 실행하면 "각 아이템은 고유한 키를 가져야 합니다."라는 경고 메시지가 나타납니다. 이 경고 메시지는 각 항목에 key 속성이 없기 때문에 발생합니다.

1. 리스트에서의 키(Key)는 "리스트의 각 아이템을 구별하기 위한 고유한 문자열"입니다. 이 키는 리스트에서 어떤 아이템이 변경되었는지, 추가되었는지 또는 제거되었는지를 구분하기 위해 사용됩니다. 키는 같은 리스트 내에서만 고유한 값이어야 합니다.

출석부 출력하기라는 실습을 통해 키에 대해 알아보겠습니다. 먼저 src/chapter_10 폴더를 생성하고, AttendanceBook.jsx라는 이름의 함수형 컴포넌트를 생성합니다. 그리고 앱을 실행하여 정상적으로 동작하는지 확인합니다.

만약 오류 메시지가 나타난다면, 해당 오류는 앞서 언급한 키(props)에 관한 오류입니다. 각 학생 객체에 고유한 값을 가진 id를 추가하고, map() 함수의 엘리먼트에 key={student.id}를 넣어주면 됩니다. 이렇게 키를 지정함으로써 각 아이템을 고유하게 식별할 수 있습니다.
---

```
import SignUp from "./chapter_10/LandingPage"; // 추가

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LandingPage /> // 변경
  </React.StrictMode>
);
```
```
    import React from "react";

const students = [
  {
    id: 1, // 고유 key가 될 id값
    name: "Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

const AttendanceBook = () => {
  return (
    <div>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </div>
  );
};

export default AttendanceBook;
```

---

---

# 이수빈 202130422

## 2023-04-27
###
#####

* 이벤트 처리하기란
DOM에서 클릭 이벤트를 처리하는 예제 코드는 다음과 같습니다.
<button onclick="activate()">Activate</button>

* React에서 클릭 이벤트를 처리하는 예제 코드는 다음과 같습니다.
<button onClick={activate}>Activate</button>

*두 예제의 차이점은 다음과 같습니다.
1. 이벤트 이름이 onclick에서 onClick으로 변경되었습니다. (카멜 케이스)
2. 전달하려는 함수는 문자열이 아닌 그대로 함수로 전달합니다.

이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러(Event Handler)"라고 합니다. 또는 이벤트가 발생하는 것을 지속적으로 감지하는 함수를 "이벤트 리스너(Event Listener)"라고도 합니다.

이벤트 핸들러를 추가하는 방법은 다음과 같습니다.
버튼을 클릭하면 이벤트 핸들러 함수인 handleClick() 함수가 호출되도록 설정되어 있습니다.

bind를 사용하지 않으면 this.handleClick은 전역 스코프에서 호출되어 undefined로 사용할 수 없습니다.
bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있습니다. 하지만 클래스 컴포넌트는 현재 거의 사용되지 않기 때문에 이 내용은 참고용입니다.

클래스형 컴포넌트를 함수형으로 변경하면 다음과 같습니다.

---

```
import React, { useState } from 'react';

function Toggle() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // 방법 1: 함수 안에 함수로 정의
  function handleClick() {
    setIsToggleOn(prevState => !prevState);
  }

  // 방법 2: arrow function으로 정의
  const handleClick = () => {
    setIsToggleOn(prevState => !prevState);
  };

  return (
    <button onClick={handleClick}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
}
```
*함수형에서 이벤트 핸들러를 정의하는 방법은 두 가지입니다.
함수형에서는 this를 사용하지 않고 onClick에 직접 handleclick을 전달하면 됩니다.

Arguments 전달하기
함수를 정의할 때는 파라미터(Parameter) 혹은 매개변수라고 하며, 함수를 사용할 때는 아규먼트(Argument) 혹은 인자라고 합니다. 이벤트 핸들러에 매개변수를 전달해야 하는 경우가 많습니다.
```
<button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>
<button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
```

---

---

# 이수빈 202130422

## 2023-04-13
###
#####

* 컴포넌트 추출
* 컴포넌트 효율적인 설계에 대해 배웠습니다.

*
* 

1. 훅(Hook)은 함수형 컴포넌트에서 상태 관리와 생명주기 기능을 사용할 수 있게 해주는 기능입니다. 이전에는 클래스형 컴포넌트에서 생성자(constructor)에서 state를 정의하고, setState() 함수를 사용하여 state를 업데이트했습니다. 하지만 함수형 컴포넌트에서는 이러한 state 정의와 생명주기 함수의 사용이 제한되어 있었습니다. 훅은 이러한 제한을 극복하기 위해 도입된 기능으로, 함수형 컴포넌트에서도 state와 생명주기 기능을 구현할 수 있도록 해줍니다.

훅은 "use"로 시작하는 이름을 갖고 있으며, state와 생명주기 기능에 갈고리(hook)를 걸어 원하는 시점에 정해진 함수를 실행할 수 있도록 만들어진 함수입니다. 또한, 사용자 정의 훅(custom hook)을 만들어 컴포넌트 로직을 함수로 추출하여 재사용할 수도 있습니다.

2. useState는 함수형 컴포넌트에서 상태(state)를 관리하기 위해 사용하는 훅입니다. 아래 예제는 버튼을 클릭할 때마다 카운트가 증가하는 함수형 컴포넌트를 보여줍니다. useState를 사용하여 state를 정의하고, 버튼 클릭 시 state를 업데이트하는 방식입니다.


---

``` html
메모이올시다
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
}
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
