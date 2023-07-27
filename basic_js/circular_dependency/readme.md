### 순환 종속성

# a require b
# b require a 

```
a -> {
  "b": {
    "a": {
      "loaded": false
    },
    "loaded": true
  },
  "loaded": true
}
b -> {
  "a": {
    "loaded": false
  },
  "loaded": true
}
```

코드대로 불러온다면<br>
무한하게 서로 불러오면서 루프가 일어나야 한다.<br>
그걸 방지하기 위해서 캐시?가 저장됨.<br>
main에서 호출하는것은 초기화<br>

main -> a 메인 호출이니 초기화 후 호출하면서 캐시 저장<br>
a > b 호출하면서 최초 호출 캐시저장<br>
b > a 이미 저장된 캐시가 있어 호출하지않고 단순 출력<br>

main -> b 초기화 후 호출이기 때문에 a호출<br>
b > a   a는 이미 캐시가 저장되어 있음. 단순 출력<br>
