# 개인 과제 수행 보고서

## 개발 내용

### 1. 아이디 및 비밀번호 유효성 검사

* 아이디 및 비밀번호 입력 시 개별적으로 입력이 유효한지 확인

* 유효성 판단 기준에는 정규식 사용
```tsx
// src/routes/LoginPage/utils.ts
export const idRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,20}$/
export const pwRegExp =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()\-_=+[\]{};':",.<>/?|])[a-zA-Z0-9`~!@#$%^&*()\-_=+[\]{};':",.<>/?|]{8,}$/
```

* 아이디와 비밀번호의 입력값, 유효성, 경고 여부 등을 모두 다른 상태로 관리하기에는 코드가 너무 복잡해져, 하나의 reducer로 통합해서 관리
```tsx
// src/routes/LoginPage/reducers.ts
export const inputReducer = (state: IState, action: IAction) => {
  if (action.type === 'set_id_value' && action.value !== undefined) {
    return {
      ...state,
      id: {
        ...state.id,
        value: action.value,
        isValid: idRegExp.test(action.value),
      },
    }
  }

  if (action.type === 'set_pw_value' && action.value !== undefined) {
    return {
      ...state,
      pw: {
        ...state.pw,
        value: action.value,
        isValid: pwRegExp.test(action.value),
      },
    }
  }

// ...생략...

}
```


* 커스텀 훅을 사용해 각 상황에 따라 적절한 가이드 / 경고 메세지(붉은색)가 나타나도록 처리
```tsx
// src/routes/LoginPage/hooks.ts
export const useInputValid = (state: IState, dispatch: Dispatch<IAction>) => {
  const warning = false

  useEffect(() => {
    if (state.id.value === '') {
      dispatch({
        type: 'set_id_error',
        warning,
        displayMessage: false,
      })
      return
    }
  }

// ...생략...
  
}
```

* 아이디와 비밀번호가 모두 유효한 값일 때만 로그인 시도가 가능하도록 처리

### 2. 로그인

* 관리자 아이디 / 비밀번호는 환경 변수로 저장

* 로그인 성공 시, 로그인 상태를 로컬에 저장하고 홈 화면으로 이동
```tsx
// src/routes/LoginPage/index.tsx
const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isLoginActive) return

    if (
      inputState.id.value === process.env.REACT_APP_ADMIN_ID &&
      inputState.pw.value === process.env.REACT_APP_ADMIN_PW
    ) {
      store.set('login', { isLoggedIn: true, expire: dayjs().add(7, 'hour'), id: inputState.id.value })
      navigate('/')
      return
    }

    setIsOpenPopup(true)
  }
```