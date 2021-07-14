# React-Recoil

## Recoil

[Recoil 공식문서](https://recoiljs.org/ko/)

### atom({})

redux에서의 createStore()가 recoil에서 atom이다.

```jsx
const infoState = atom({
  key: "infoState",
  default: [],
});
```

key: 내부적으로 atom을 식별하는데 사용되는 고유한 문자열.  
이 문자열은 어플리케이션 전체에서 다른 atom과 selector에 대해 고유해야 한다.

### useRecoilState()

react에서 useState() 사용하는 것처럼 사용

```jsx
const [info, setInfo] = useRecoilState();
```

### useSetRecoilState()

react에서 useState()를 사용할 때 set생성자만 생선된다.

```jsx
const setInfo = useSetRecoilState();
```

### useRecoilValue()

atom(store)에 저장되어있는 state를 읽어와서 변수에 저장한다.

```jsx
const {test1, test2, test3} = useRecoilValue(atom({...}))
```

### selector({})

Selector()는 읽기만 가능한 RecoilValueReadOnly 객체를 반환한다.

```jsx

```
