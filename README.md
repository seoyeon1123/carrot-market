# 운동 감자

<span style="display: inline-block; text-align: center;">
    <img src="https://velog.velcdn.com/images/leeeee/post/f3ae0ded-7b98-400e-8184-10b230bfe856/image.png" alt="회원가입" width="280" />
</span>

#### 운동감자 (운동 기반 커뮤니티 웹 애플리케이션)

프로젝트 개요: 운동감자는 운동과 관련된 다양한 정보를 제공하고 사용자들이 서로 소통할 수 있는 커뮤니티 웹 애플리케이션입니다.

사용자는 자신만의 계정을 생성하고, 게시글을 작성하며, 라이브 스트리밍을 통해 운동 관련 콘텐츠를 공유할 수 있습니다.

또한, 운동 관련 물품을 판매하고, 채팅 기능을 통해 다른 사용자들과 실시간으로 소통할 수 있으며, 리뷰 작성 기능을 통해 거래에 관한 리뷰를 서로에게 작성할 수 있습니다.

---

## 목차

- [기능](#기능)
- [사용 기술](#사용-기술)
- [프로젝트 구조](#프로젝트-구조)
- [Prisma 모델링](#prisma-모델링)
- [기여](#기여)
- [라이선스](#라이선스)

---

## 기능

1 . 회원가입 및 로그인 (auth):

<span style="display: inline-block; text-align: center;">
  <p> < 회원가입 > </p>
    <img src="https://velog.velcdn.com/images/leeeee/post/75dd879c-ba3a-4e27-814f-6064e39093d3/image.png" alt="회원가입" width="280" />
</span>
<span style="display: inline-block; text-align: center;">
    <p> < 로그인 > </p>
    <img src="https://velog.velcdn.com/images/leeeee/post/c406b1f1-0206-4801-9a0f-be41069ce9ba/image.png" alt="로그인" width="280" />
</span>

- 일반적인 계정 생성, 로그인 기능 외에도 GitHub와 SMS 인증을 통한 로그인 기능을 지원합니다.
- Prisma를 사용하여 데이터베이스에 사용자 정보를 안전하게 저장하고, Zod를 통해 입력된 데이터를 철저히 검증 하였습니다.

2 . 탭 시스템 (tabs):

<div style="display: inline-block; text-align: center;">
    <img src="https://velog.velcdn.com/images/leeeee/post/03b725b1-bbbe-4e12-96d3-edc3838de9fa/image.png" alt="탭" width="500" />
</div>

- 홈 탭: 사용자들에게 운동과 관련된 물건을 사고 팔 수 있는 메인 페이지입니다.
- 운동감자 탭: 운동과 관련된 다양한 정보를 공유할 수 있는 게시판 기능을 갖추고 있습니다.
- 채팅 탭: 사용자들 간의 물건을 사고 팔기 위한 실시간 채팅 기능을 제공합니다.
- 운동중 탭: 실시간 운동 스트리밍 기능을 통해 사용자들이 운동을 실시간으로 공유할 수 있습니다.
- 프로필 탭: 사용자 개인 정보, 작성한 게시물, 작성한 리뷰 등을 관리할 수 있는 페이지입니다.

3 . 제품 판매 & 구매 (home)

<div style="">
  <p> /home/page.tsx </p>
    <img src="https://velog.velcdn.com/images/leeeee/post/c632a930-9bff-44b1-857e-989c36db4340/image.png" alt="탭" width="280" />
</div>
<div style="display: inline-block; text-align: center;">
  <p> /products/[id]/page.tsx (판매자)</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/b0e3812a-02ad-49aa-ad2f-c5a2e2a317cc/image.png
" alt="탭" width="280" />
</div>
<div style="display: inline-block; text-align: center;">
  <p> /products/[id]/page.tsx  (구매자)</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/7abfb7cc-6c52-40cb-abe2-1f0dda26392b/image.png
" alt="탭" width="280" />
</div>

- 사용자가 운동 관련 상품을 사고 팔 수 있는 기능을 제공합니다.
- 모든 사용자들이 판매하는 상품 목록을 확인할 수 있으며, 각 상품의 상세 정보도 열람 가능합니다.
- 작성한 게시물은 수정 및 삭제가 가능하고, 구매를 원하는 상품은 채팅하기 버튼을 통해 상품을 판매하는 사용자와 직접 대화할 수 있습니다.

4 . 채팅 기능 (chats)

<div style="display: inline-block; text-align: center;">
  <p> /chat</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/40ecbe2b-d391-4a7f-afa6-0fea4c6d4753/image.png
" alt="탭" width="280" />
</div>
<div style="display: inline-block; text-align: center;">
  <p> /chat/[id] </p>
    <img src="https://velog.velcdn.com/images/leeeee/post/d85c0672-eca8-4b47-99ae-a61ec617d472/image.png
" alt="탭" width="280" />
</div>

- 사용자는 1:1 실시간 채팅 기능을 통해 다른 사용자와 운동에 대해 소통할 수 있습니다.
- 이 기능은 Supabase의 Realtime 기능을 사용하여 구현되어, 메시지가 즉시 전달되고 업데이트되는 빠르고 원활한 경험을 제공합니다.

4-1 . 리뷰 기능(reviews)

<div style="display: inline-block; text-align: center;">
    <img src="https://velog.velcdn.com/images/leeeee/post/326d35aa-b30f-42ca-a730-6b04c0548f99/image.png
" alt="탭" width="280" />
</div>

상품 구매 후 (SOLD_OUT) 리뷰를 작성할 수 있는 기능을 제공합니다.
사용자는 상대방에게 리뷰를 작성할 수 있으며, 받은 리뷰는 프로필 탭에서 확인 가능합니다.

5 . 게시물 기능 (posts)

<div style="display: inline-block; text-align: center;">
   <p> /life</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/9b8df235-49cb-4585-93a1-fbfbde458f97/image.png
" alt="탭" width="280" />
</div>
<div style="display: inline-block; text-align: center;">
    <p> /posts/[id]</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/35560f92-9356-4958-a98e-30c2bbabd337/image.png
" alt="탭" width="280" />
</div>

- 사용자는 운동 관련 다양한 주제로 글을 작성하고 소통할 수 있습니다.
- 각 게시물의 조회수를 확인할 수 있어, 인기 있는 게시물을 쉽게 찾아볼 수 있습니다.
- 마음에 드는 게시물에는 좋아요를 눌러 반응할 수 있습니다.
- 글을 작성하고, 수정하는 기능을 제공합니다.
- 사용자들은 글에 대한 댓글을 작성하고, 기존 댓글을 수정할 수 있는 기능을 제공합니다.

6 . 스트리밍 기능 (streams):

<div style="display: inline-block; text-align: center;">
    <p> /live</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/594a159a-f905-4c44-838e-8a9aa3b6efef/image.png
" alt="탭" width="280" />
</div>
<div style="display: inline-block; text-align: center;">
    <p> /streams/add</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/d293a0be-7acb-48a5-873c-5a9d45518109/image.png
" alt="탭" width="280" />
</div>

<div style="display: inline-block; text-align: center;">
    <p> /streams/[id]</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/19686717-3c91-488e-a76b-de19a930b35f/image.png
" alt="탭" width="280" />
</div>

- 사용자는 실시간 스트리밍을 통해 운동 과정을 시청자들과 공유할 수 있습니다. 이를 통해 운동 팁을 전달하거나 소통하며 함께 운동하는 경험을 제공합니다.
- Cloudflare의 Streams 기능을 활용하여 안정적인 실시간 스트리밍을 제공하며, OBS (Open Broadcaster Software)와 연동하여 고품질의 실시간 라이브 방송이 가능합니다.
- 방송 중 시청자와 실시간으로 소통할 수 있도록 실시간 채팅 기능이 추가되어, 운동 관련 질문이나 피드백을 즉각적으로 주고받을 수 있습니다.

7 . 프로필 기능 (profile)

<div style="display: inline-block; text-align: center;">
    <p> /profile</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/0ad413c1-0092-452d-ae1e-946e4ce1765b/image.png
" alt="탭" width="280" />
</div>
<div style="display: inline-block; text-align: center;">
    <p> /profile/edit</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/ea50fdd7-4edc-43e8-ad6d-840cc01170bb/image.png
" alt="탭" width="280" />
</div>

<div style="display: inline-block; text-align: center;">
    <p> /profile/product</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/48a6a60b-6069-412c-972e-346132b2f815/image.png
" alt="탭" width="280" />
</div>

- 프로필에서 내가 판매한 상품들을 상태별로 한눈에 확인할 수 있습니다. 판매 중인 상품, 예약 중인 상품, 판매 완료된 상품을 카테고리별로 분류하여 효율적으로 관리할 수 있습니다.

<div style="display: inline-block; text-align: center;">
    <p> /profile/review</p>
    <img src="https://velog.velcdn.com/images/leeeee/post/6a29997c-7cd6-4a8d-9945-1ae03be8f450/image.png
" alt="탭" width="280" />
</div>

- 내가 받은 리뷰들을 프로필에서 확인할 수 있으며, 이를 통해 상대방의 피드백을 받아볼 수 있습니다. 사용자는 거래 상대방에게 신뢰도를 높이고, 리뷰를 통해 자신의 거래 이력을 한눈에 관리할 수 있습니다.

이외에도, 내가 작성한 글, 참여한 라이브 방송, 로그아웃, 회원 탈퇴 등 다양한 기능을 통해 개인 계정을 전반적으로 관리할 수 있습니다. 이 모든 기능을 통해 사용자는 프로필을 손쉽게 관리하며, 거래 이력과 활동 내역을 확인할 수 있습니다.

---

## 사용 기술

### 프론트엔드

- React: 사용자 인터페이스 구축을 위한 JavaScript 라이브러리.
- TypeScript: JavaScript의 상위 집합으로 타입을 지원하는 언어.
- Next.js: React 기반의 풀스택 웹 프레임워크로, 서버 사이드 렌더링과 정적 사이트 생성을 지원.
- React Hook: 컴포넌트 로직을 관리하기 위한 커스텀 훅.
- Tailwind CSS: 클래스 기반의 유연한 스타일링을 제공하는 CSS 프레임워크.
- Font Awesome: 다양한 아이콘을 제공하는 라이브러리.

백엔드

- Node.js: Chrome V8 JavaScript 엔진을 기반으로 하는 JavaScript 런타임.
- Prisma: 데이터베이스 ORM으로, 간편한 데이터 관리 및 효율적인 쿼리 수행 가능.
- Express Session: 서버에 세션 데이터를 저장하여 사용자 인증 및 상태 관리를 제공.
- Bcrypt: 비밀번호 해싱 라이브러리.

인프라 및 기타

- Cloudflare: OBS(방송 소프트웨어)와의 통합을 통해 실시간 스트리밍을 지원하는 CDN 서비스, 이미지 저장 및 관리 기능 제공.
- Supabase: 실시간 기능을 통해 1:1 채팅 및 데이터 관리를 지원하는 백엔드 서비스.

---

## 프로젝트 구조

```
📦app
 ┣ 📂(auth)
 ┃ ┣ 📂create-account
 ┃ ┃ ┣ 📜action.ts
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂github
 ┃ ┃ ┣ 📂complete
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📂start
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜action.ts
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂sms
 ┃ ┃ ┣ 📜action.ts
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂(tabs)
 ┃ ┣ 📂chat
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂life
 ┃ ┃ ┣ 📂add
 ┃ ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂live
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂profile
 ┃ ┃ ┣ 📂edit
 ┃ ┃ ┃ ┗ 📂[id]
 ┃ ┃ ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂leave
 ┃ ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂life
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂live
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂review
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📜layout.tsx
 ┣ 📂chats
 ┃ ┣ 📂[id]
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📜actions.ts
 ┣ 📂posts
 ┃ ┗ 📂[id]
 ┃ ┃ ┣ 📂edit
 ┃ ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┗ 📜page.tsx
 ┣ 📂products
 ┃ ┣ 📂[id]
 ┃ ┃ ┣ 📂edit
 ┃ ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📂add
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┗ 📜schema.ts
 ┣ 📂streams
 ┃ ┣ 📂[id]
 ┃ ┃ ┣ 📜action.ts
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📂add
 ┃ ┃ ┣ 📜actions.ts
 ┃ ┃ ┗ 📜page.tsx
 ┣ 📜favicon.ico
 ┣ 📜globals.css
 ┗ 📜layout.tsx
```

---

### Prisma 모델링

프로젝트의 데이터베이스는 PostgreSQL을 사용하며, Prisma ORM을 통해 관리됩니다. 주요 모델과 그 관계는 아래와 같습니다:

- User: 사용자 정보를 저장하며, 각 사용자는 여러 상품, 게시글, 리뷰 등을 가질 수 있습니다.
- Product: 사용자가 등록한 상품 정보를 저장하며, 상태에 따라 판매중, 예약중, 판매완료로 구분됩니다.
- SMSToken: SMS 인증 토큰을 저장하여 사용자 인증에 사용됩니다.
- Post: 사용자가 작성한 게시글을 관리합니다.
- Comment: 게시글에 달린 댓글을 저장합니다.
- Like: 게시글에 대한 좋아요 정보를 저장합니다.
- ChatRoom: 사용자 간의 채팅방을 관리합니다. 상품과 관련된 채팅 기능을 제공합니다.
- Message: 채팅방에서 주고받은 메시지를 저장합니다.
- LiveStream: 실시간 스트리밍 정보를 저장하며, 사용자가 라이브 방송을 할 수 있습니다.
- LiveChatMessage: 라이브 스트리밍 중 발생한 채팅 메시지를 저장합니다.
- Review: 상품 구매 후 남긴 리뷰를 저장하며, 사용자에 대한 평가와 세부 평가를 포함합니다.

---

### 기여

커뮤니티의 기여를 환영합니다. 레포지토리를 포크하고 개선 사항이나 버그 수정을 위한 풀 리퀘스트를 제출해주시면 감사하겠습니다 :)

---

### 라이선스

프로젝트는 MIT 라이선스를 따릅니다. 자세한 사항은 LICENSE 파일을 참조하세요.

Vercel 배포 주소: [운동감자](https://heath-potato.vercel.app)
