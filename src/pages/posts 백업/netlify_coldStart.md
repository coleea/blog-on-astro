---

title: 'netlify에서 다른곳으로 갈아탄이유'
description: "전송속도는 최소 200ms 걸린다. cloudfront와 대비되는 속도"
# publishDate: 'Tuesday, June 8 2021'
# author: 'lkb'
# heroImage: ''
# alt: 'Astro'
layout: '../../layouts/BlogPost.astro'
---
# netlify에서 다른곳으로 갈아탄이유
---

# 이 페이지는 작성중입니다
<br/>
<br/>

다른 사람들에게는 그런 증상이 없었지만 나만 유독 느렸다.  
넷리파이에서 정적 페이지를 호출할때 400ms가 걸린다

netlify 포럼에서 남들도 같은 문제를 겪고있는지 살펴봤다. 누군가는 220ms가 걸린다고 했다. 본인이 모니터링 페이지에서 살펴본 값은 init time이 1.2초였다. 이건 프로덕션에서 사용할 수 있는 수준이 아니었다. 그래서 netlify에서 github page로 갈아탔다.깃헙 페이지는 충분히 빠른가 ? 그것도 아니었다. 깃헙 페이지는 최소 102ms에서 최대 200ms정도의 지연이 발생했다. 
이전에 사용하던 aws cloudfront에 비하면 많이 아쉬운 수치였다.  
<br/>
<br/>
# 이 페이지는 작성중입니다