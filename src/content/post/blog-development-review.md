---
id: 1
title: Astro 블로그 개발 후기
description: 드디어 갖게된 진짜 개인 블로그. 의 첫 포스팅
thumbnail: /assets/image/blog-development-review/thumbnail.jpeg
tags: ["후기"]
createDate: 2023-02-19
---

아직 `meta data` 관련해서 적용할 게 남아있지만, 주요 기능들은 대부분 구현했기 때문에 후기를 미리 작성하려고 한다.

# 나만의 블로그 만들기

---

사실 이전에 공부했던 내용을 정리하던 블로그(https://velog.io/@jaeung5169) 가 하나 있었다.

그럼에도 새 블로그를 개발한 것은 이전에 배웠던 기술들을 복습할 겸, 언제든 내 마음대로 커스텀이 가능한 블로그를 가지고 싶었기 때문이다.

그렇게 미루고 미뤘던, 개인 블로그를 드디어 만들게 되었다.

# Gatsby vs Astro

---

사실 처음부터 `Astro`로 개발할 생각은 없었고, 다들 블로그 같은 정적 페이지 개발에 많이 사용하던 `Gatsby`로 시작하려고 했었다.

그럼에도 `Astro`를 선택한 이유는 아래와 같다.

1. Gastby의 경우, 겨우 정적 페이지 하나 만드는데 필요한 기술과 설정이 꽤 많다는 것.

2. Gatsby와 Astro가 사용하는 모듈 번들러(**webpack vs vite**)의 차이에서 오는 빌드 타임.

특히 **2번**은 미리 블로그 개발을 했던 친구가 경험을 공유해준 덕분에, 어렵지 않게 `Astro`를 사용하는 방향으로 마음을 굳힐 수 있었다.

# 도메인 구매

---

어떤 프레임 워크를 사용할지 결정을 내리고는, 바로 도메인 가격이 가장 저렴하다는 [namecheap](https://www.namecheap.com)을 방문했다.
처음에는 `.io` 도메인을 구매해서 사용하고 싶었는데, 가격이 너무 폭력적이라 바로 눈길을 돌렸다.

이후 태그를 Technology로 선택하고 둘러보다가 결국 `jaeung.codes`라는 도메인을 구매하게 되었다. 이유는 **적당한 가격에**(제일 중요) 유니크해 보여서..?

물론 1년 이후 갱신 비용이 `.io`와 비슷한걸 보고 후회하기엔 이미 늦은 시점이었다.

# Astro

---

도메인도 구매했으니 본격적으로 개발에 들어갔는데, `Astro`가 메인 페이지에 넣어놓은 문구인 **"Build faster websites."** 처럼 정말 빠르게 사이트를 만들 수 있었다.

[Using Integrations | Astro](https://docs.astro.build/en/guides/integrations-guide/) 에 포함되어 있는 라이브러리와 프레임워크는 **설치만 하면 바로 설정**을 해주기 때문에 별도로 설정을 해줄 필요도 없고, 문서도 꽤 잘 되어 있어서 다른 라이브러리를 적용하는 것도 어렵지 않았다.

그렇다고 장점만 있는 것은 아닌데, 아래처럼 `event handler`를 `DOM` 조작을 통해 부착해야 한다는 건 조금 불편하긴 했다.

![](/assets/image/blog-development-review/nodap_event.png)

하지만 사용하면서 좋다고 느낀 점이 더 많았으니 OK.

# Tailwind CSS

---

Astro를 이용한 빠른 개발에는 `tailwind`도 한 몫 했던 것 같다.

원래는 이미 익숙했던 `emotion`이나 `styled-components` 같은 CSS-in-JS 라이브러리를 사용하려고 했었는데, 아쉽게도 Astro에서는 **부분적으로만 지원**한다는 이슈를 발견해서 대신 tailwind css를 사용하게 되었다.

이전 팀 프로젝트 에서도 사용해보자는 의견이 나왔던 CSS 프레임워크인데, 이번에 적용해본 결과는 굉장히 만족스러웠다. 해당 요소에 적용된 스타일을 한눈에 확인할 수 있다는 것과, 반응형 디자인을 쉽게 적용할 수 있다는 점이 좋았다.

굳이 단점이라고 한다면 tailwind의 클래스 이름에 다시 익숙해져야 한다는 것과, 모니터를 뚫고 나갈 것 같은 클래스 이름의 길이 정도가 아닐까 싶다.

# Dark Theme 적용

---

`CSR`에 익숙한 상태에서 `SSR` 페이지를 만들다 보니 만나게 된 이슈였다.

테마를 변경할 수 있는 `ToggleTheme` 컴포넌트를 구현하고, 상태가 변경될 때 마다 localStorage에 적절한 값을 저장해서 페이지 초기 진입 시 해당 테마를 적용하려고 했다.

![](/assets/image/blog-development-review/digging_theme.png)

이 때, SSR 시점에는 `window` 객체를 참조할 수 없기 때문에 에러가 발생했고, 이를 해결하려고 위 처럼 `useEffect` 안에서 해당 코드를 실행하도록 했다.

그랬더니 다음처럼 페이지를 불러올 때 마다, 마치 `FOUC` 같은 현상이 생기게 되었다.

![](/assets/image/blog-development-review/FOUC_YOU.gif)

이는 `useEffect`가 SSR에 의해 페이지가 로드되고, 이후 컴포넌트가 마운트 된 뒤에 실행되기 때문이라고 생각했다.

그래서 아래처럼 초기 테마를 적용하는 코드를 컴포넌트에서 분리시키고, `head`에서 해당 스크립트를 먼저 실행하게끔 변경해서 해결했다.

![](/assets/image/blog-development-review/theme_script_1.png)

![](/assets/image/blog-development-review/theme_script_2.png)

# 끝으로

---

드디어 진정한 의미의 개인 블로그를 개설하게 되었다. 이제 글을 쓰면 `github`에 잔디도 심어지는 부수효과도 있으니, 열심히 글을 작성하는 일만 남았다.

그 전 까지는 게시물이 없어서 조금 허전하니 예전에 썼던 글들을 조금 가져다 놓고, 나중에 지우던지 해야겠다.
