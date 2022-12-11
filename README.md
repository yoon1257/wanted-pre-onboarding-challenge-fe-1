# 원티드 프리온보딩 프론트엔드

이 레파지토리는 "원티드 프리온보딩 프론트엔드 과정" 선발 과제 제출용 저장소입니다.

## 배포 링크
[배포링크](https://yoon1257.github.io/wanted-pre-onboarding-frontend/)

## 배포 영상 
![프리온보딩 영상 ](https://user-images.githubusercontent.com/108171986/206896132-96f4da08-de98-458c-a764-0e04afc76213.gif)


## 실행 방법

```
$ yarn install
$ yarn start
```



## 기술 스택
<div>
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white" height="25px" />
<img src="https://img.shields.io/badge/CSS-blue?style=flat-square&logo=css3&logoColor=white"height="25px"/>
<img src="https://img.shields.io/badge/JavaScript-FFCA28?style=flat-square&logo=javascript&logoColor=white"height="25px"/>
<img src="https://img.shields.io/badge/React-58c3cc?style=flat-square&logo=React&logoColor=white"height="25px"/>
<img src="https://img.shields.io/badge/React Router-red?style=flat-square&logo=React-Router&logoColor=white"height="25px"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"height="25px"/>
</div>


## 주요 기능
### :: 1. 로그인 / 회원가입
/ 경로에 로그인 / 회원가입 기능을 개발
<br/>
#### Assignment1
이메일과 비밀번호의 유효성 검사기능을 구현
이메일 조건: @ 포함
비밀번호 조건: 8자 이상
입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화하기 
<br/>
#### Assignment2
로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동하기 
로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답한다.
응답받은 JWT는 로컬 스토리지에 저장하기
<br/>
#### Assignment3
로그인 여부에 따른 리다이렉트 처리를 구현하기 
로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉
로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 
***
<br/>
<br/>

### :: 2. 투두 리스트
<br/>

#### Assignment4
/todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 한다
리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가
<br/>

#### Assignment5
투두 리스트의 수정, 삭제 기능을 구현
투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정
수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소
투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제
