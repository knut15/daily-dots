import { defineConfig, devices } from "@playwright/test";

// SPEC 의 수동 확인 기준이 iPhone Safari 라서 WebKit iPhone 으로만 돌린다
export default defineConfig({
  testDir: "./e2e",
  use: { baseURL: "http://localhost:3100" },
  projects: [{ name: "iphone-webkit", use: { ...devices["iPhone 15"] } }],
  webServer: {
    command: "pnpm build && pnpm start -p 3100",
    url: "http://localhost:3100",
    reuseExistingServer: false,
    timeout: 180_000,
  },
});
