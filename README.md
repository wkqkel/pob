
# wanted_pre_onboarding

프리온보딩 사전 선발 과제

## 1. Toggle


![1 Toggle](https://user-images.githubusercontent.com/89131236/164971362-dec23623-4212-40ea-9b6f-ef7f3332ac6d.gif)

### 구현방식
+ 처음에는 circle 태그를 따로 주지 않고, 텍스트 태그에 백그라운드를 주는 방식으로 접근
+ 그렇게 하면 circle이 클릭할 때마다 지워지고 새로 생기는 방식으로 구현됐는데, 해당 방법으로 애니메이션을 줄 수 없겠다 판단하여, circle 태그를 따로 빼서 absolute 처리
+ 해당 과정에서 absolute된 것에 padding값을 주는 과정에서 박스 태그를 하나 더 만듬.
+ 애니메이션도 처음에는 keyframe을 생각했는데 transform으로 구현 시 더 간단하게 구현가능하다고 판단

### 아쉬운 점
+ 적절한 태그이름이나 변수명 : 통일성을 주려고 toggle을 앞에 붙였는데, 오히려 비슷해보임
+ css : 간단한 ui인 것 같은데, css가 주렁주렁 많이 달려있어서 복잡해보임. 조금이라도 덜 복잡해보이게, css 특성에 따라 순서를 줘보려고 함.
+ 위의 두 가지는 해당 모든 과제에 통용되는 아쉬운 점...

<br>

## 2. Tab

![2 Tab](https://user-images.githubusercontent.com/89131236/164971371-8bdd8d4d-3f1f-4873-be0f-2a0f5ee35807.gif)

### 구현방식
+ 구현은 Toggle과 비슷하게 구현해서 크게 어렵진 않았음.

### 아쉬운 점
+ 구현하는 과정에서 border의 크기나 transform의 기준을 px로 줬는데, 이 과정에서 브라우저 크기를 줄였을 때는 현재 맞지 않음

<br>

## 3. Slider

![3 Slider](https://user-images.githubusercontent.com/89131236/164971414-4d1aca8f-1923-4eec-aa12-d580b350d628.gif)


### 구현방식
+ 처음에 input 태그의 min속성을 1주고 시작했는데, 그러고 인풋 쪽의 5개 circle의 space-between 위치 값이 미세하게 달랐음.
+ 이렇게 됐을 때 input뒤의 써클, input슬라이더, 아래 버튼의 값과 중심이 맞아야하는데, 이걸 정확히 맞춰주려면 복잡하다고 생각
+ 다행히 min값으로 해당 문제가 생긴 것을 알아내서, 0일때 표시만 +1로 해주는 형식을 취해서 해결.
+ 이제 아래 버튼 써클의 경우 기본적으로 해당 인풋값과 중심이 맞지 않아야 정상이지만, 2,4번째의 경우만 따로 조정해서 시각적으로 보정.
+ 인풋 슬라이더의 값을 state로 관리하고, 그 값을 기준으로 css를 줌.

### 아쉬운 점
+ 동작을 목표로 해서 구현을 해서, 코드가 유난히 복잡해보임.

<br>

## 4. Input


![4 Input](https://user-images.githubusercontent.com/89131236/164971386-b87b69e8-4ad4-4506-98ee-7967fcaa4c91.gif)



### 구현방식

+ input 태그의 패턴 속성을 이용하여 이메일 유효성 판단. onChange이벤트를 줘서 e.target.validity.valid을 기준으로 유효함을 state로 따로 관리
+ 비밀번호 암호화, 이메일 유효성, 이메일유효에따른 알림 의 3개의 state를 관리

### 아쉬운 점

+ html태그 쪽을 살펴보면, state값에 따라 css나 태그가 다르게 줘야하는데, 이런 기능들이 들어가는 과정에서 코드가 복잡해보임.

<br>

## 5. Dropdown


![5 Dropdown](https://user-images.githubusercontent.com/89131236/164971395-3dd9761c-cd5f-41b5-b3c7-7bd0990d9a80.gif)



### 구현방식

+ dataList나 select에 option을 쓰려다 css를 수정하기 더 힘들것같아 div로 만들어서 구현.
+ 처음 검색을 구현해봄. 기존 배열을 복사한 state를 하나 더 만들어, input값에 따라 해당 state에 filter 메써드를 이용해서 구현.

### 아쉬운 점

+ 모든 것을 div로 구현함. 적절한 시맨틱 태그 같은 것을 공부해서 사용해보면 더 좋지 않을까.
+ 현재 바깥 클릭 시 드롭다운 메뉴가 닫히지 않음 + 검색 후 다시 열었을 때 input의 입력값이 그대로 존재.

<br>

## 사용 라이브러리
styled-components, react-icons
