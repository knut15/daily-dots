# daily-dots

![Next.js](https://img.shields.io/badge/Next.js-16.3.6-000000?style=flat-square&logo=nextdotjs&logoColor=white)![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=white)![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)![pnpm](https://img.shields.io/badge/pnpm-11.20.0-F69220?style=flat-square&logo=pnpm&logoColor=white)

하루 안의 순간을 점으로 남기는 기록 앱이다. 기록이 적은 날도 빈칸이나 실패처럼 보이지 않고 "조용한 하루"로 남게 하려고 만든다. 기록 개수나 연속 기록으로 하루를 평가하지 않고, 기록하라고 재촉하지 않는다. 앱 이름은 아직 정하지 않았고 `daily-dots` 는 임시 이름이다.

## 무엇으로 만드나

| 부분 | 선택 | 이유 |
| --- | --- | --- |
| 첫 버전 | Next.js 웹 앱 | 핵심 화면을 먼저 시험하고, 사람들이 계속 쓰고 싶어 하는지 확인한다 |
| 저장 | 기기의 브라우저 안 | 계정과 서버 없이 익명으로 쓴다 |
| 모바일 앱 | 웹 시험 뒤에 정한다 | Flutter와 네이티브 가운데 고른다 |

## 돌려 보기

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm build
```

## 어디까지 왔나

| 단계 | 상태 |
| --- | --- |
| PRD·스펙 | 확정 (버전 3) |
| Next.js 뼈대 | create-next-app 기본 화면 |
| 기능 구현 | 시작 전 |

## 문서

- [PRD](docs/PRD.md): 무엇을 왜 만드는가, 범위, 성공 기준, 미결
- [스펙](docs/SPEC.md): 기능 9개의 동작과 수용 기준
