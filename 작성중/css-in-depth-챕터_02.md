# 2장. 상대적 단위

## 2.1 상대적 단위의 힘

한줄요약 : 상대유닛을 써야하는 정당성을 설명한다

### 2.1.1 the struggle for pixel-perfect design
픽셀 단위를 쓰면 피봅니다

### 2.1.2 the end of the pixel-perfect web
픽셀 단위를 쓰면 피봅니다

## 2.2. 상대적 단위 (em & rem)
요약 : Rem으로 폰트크기를 쓰라

### 2.2.1 글씨크기에 em을 적용해보자

### 2.2.2 글씨크기에 rem을 쓰자

"CSS는 어떤 상황에 어떤 도구를 쓰는지 배우는게 중요하다. 본인은 폰트크기에 rem, 그리고 border에는 픽셀, 그리고 패딩, 마진, border radius등에는 em을 쓴다"
-- Keith J grant\
\
왜냐, 폰트크기가 em인 경우 폰트크기는 항상 예측가능하다. 그리고 border는 상대적인 값이 아닌 절대값을 적용하는 경우가 대부분이다. 그 외 나머지 경우는 엘리먼트의 폰트크기에 대한 상대값을 적용하는 경우가 대부분이므로 em을 쓴다


## 2.3 픽셀 단위를 떨처버려라

### 2.3.1 같은 디폴트 폰트크기로 설정하기

### 2.3.2 making the panel responsive

### 2.3.3 resizing a single component

## 2.4 뷰포트에 상대적인 단위 (viewpoint-relative units)
페이지 스케일을 반응적으로 만들때 미디어쿼리를 쓰지 않아도 만들수 있다

### 2.4.1 vw를 폰트 크기에 적용하기 (using vw for font-size)

### 2.4.2 calc() 함수를 폰트크기에 적용하기 (using calc() for font-size)

## 2.5 유닛이 없는 숫자와 라인높이 (unitless numbers and line-height)
라인 높이를 설정할 때는 단위가 없는 값을 쓰라\
단, 단순한 컴포넌트의 스케일링에는 선택적으로 쓰라

## 2.6 css 변수 (custom properties)
Css의 커스텀 프로퍼티와 친해져라 (신기능이다)

### 2.6.1 chaniging custom properties dynamically

### 2.6.2 chaniging custom properties with javascript

### 2.6.3 experimenting with custom properties

---




