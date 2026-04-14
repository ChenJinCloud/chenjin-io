# chenjin.io — 决策讨论日志

按时间倒序记录每次会话的关键讨论、决策、放弃选项和背后原因。代码层面的变更走 CHANGELOG.md，这里只记"为什么"。

---

## 2026-04-15 — 仓库迁移 + 品牌清除

### 会话起点
恢复开发。原计划 4/9-4/15 冲刺上线，但 4/10-4/14 空窗无进展。用户声明把节奏放宽到 **5 月前打磨好即可**，不赶今晚上线。

### 审计发现
- **本地和远程 3 个月分叉没合并**：远程 `ChenJinCloud/chenjinai` 最后一次真实 commit 是 2026-01-20（Lovable 网页端小改），本地 4/8-4/9 做的 Phase 1+2A 大改造全部未 commit、未 push
- 本地未跟踪新增：7 个 Section 组件、Roadmap/LoginModal、4 份 .md 文档
- 本地 modified：13 个文件
- Lovable 1/20 之前加的 convert 页、tool detail modal、"我的小工具"板块不知被本地改造覆盖还是丢失，**未逐一比对**

### 品牌问题定位
用户反馈"网页标签里有 Lovable logo"。排查链路：
1. `index.html` 没有显式 `<link rel="icon">`，浏览器回落到 `/favicon.ico`，而 `public/favicon.ico` 是 Lovable 脚手架默认的粉色爱心
2. `og:image` 和 `twitter:image` 都指向 `https://lovable.dev/opengraph-image-p98pqg.png`，社媒分享会显示 Lovable 品牌
3. 源码里的其他 Lovable 痕迹：`vite.config.ts` 的 `lovable-tagger`、`package.json` 依赖、`README.md` 模板文案 — 不影响页面显示但算残留
4. 右下角 "Edit with Lovable" 徽章（如走 Lovable 托管会有，不在源码中，本次未触发）

### 决策

| # | 决策 | 原因 |
|---|------|------|
| 1 | 新建 `public/favicon.svg`：深青 `#395F5F` + 白色衬线斜体 "CJ" | 对齐 Phase 1 的中国传统色系统（primary: hsl(180 25% 30%)），保持品牌一致性 |
| 2 | 新建 `public/og-image.svg`：1200×630 深青底 + "Turn chaos into clarity." | 清除 Lovable 默认 OG 图，社媒分享看到自己的品牌 |
| 3 | **保留** `<meta name="robots" content="noindex, nofollow">` | 用户今天要软上线试水，不想影响正式 SEO；确认是**有意为之**不是遗留 |
| 4 | OG 图先用相对路径 SVG 占位 | 快速止血，将来部署到正式域名时换成绝对 URL 的 PNG（多数社媒爬虫不认 SVG） |
| 5 | 未删除 `public/favicon.ico`（Lovable 原版） | 显式 `<link>` 会优先生效，保留作为 fallback 风险更低 |
| 6 | **丢弃旧仓库 `ChenJinCloud/chenjinai`，新建 `chenjin-io`** | (1) 彻底脱离 Lovable 双向同步；(2) 解决 3 个月分叉问题；(3) 仓库名和域名一致更清爽 |
| 7 | 新仓 **public** 可见 | 个人站默认公开，源码展示本身也是作品一部分 |
| 8 | **丢弃 Git 历史**，以当前状态作为 initial commit | 旧历史大量 "Changes" 噪声 commit（Lovable 自动提交）参考价值低；本地大改造后历史已经脱节 |
| 9 | **放弃**打捞 Lovable 1/20 的小改动（convert 页、tool detail modal、"我的小工具"板块、blog 颜色调整、tour leader 文案等） | 评估成本太高、价值不明；若将来发现确实需要某个功能可按 commit hash `00e62b9` 在旧仓库 archive 里单独复活 |
| 10 | 旧仓删除和 Lovable 项目解绑由用户手动完成 | (1) `gh` token 无 `delete_repo` scope 无法 API 删除；(2) GitHub 网页端二次确认更安全；(3) Lovable 项目解绑涉及账号操作不宜代劳 |

### 工作流心得
- **不要无条件相信 CHANGELOG**：本地 CHANGELOG 记录的 4/8-4/9 改动全部处于 untracked 状态，如果直接按 CHANGELOG 动手会误以为这些改动已落地
- **看 git log + git status + CHANGELOG 三方对齐**，任何一边缺失都可能在 pro 模式下翻车
- **网络代理是隐性依赖**：Windows 下 `gh` / `git` 需要显式 env `HTTPS_PROXY=http://127.0.0.1:7897`，否则 GitHub API 调用会 TLS 超时。可考虑 `git config --global http.proxy` 一次性配置

### 未完成 / 下次起点
- [ ] 用户手动：删除旧仓 `ChenJinCloud/chenjinai`
- [ ] 用户手动：lovable.dev 解绑并删除项目
- [ ] 清理源码残留：`vite.config.ts` 去掉 `lovable-tagger`、`package.json` 移除依赖、重写 `README.md`
- [ ] `src/pages/Tools.tsx:147-153` 的 Lovable 推荐保留还是删（当前是主动推荐工具，非 Lovable 残留，需用户判断）
- [ ] ROADMAP.md 重排：删除 4/9-4/15 冲刺计划，改为 4/15-5/1 打磨节奏
- [ ] Phase 2B 视觉打磨：挑 Hero/Journey/Explore 中一个作为视觉基调锚点开始迭代
- [ ] Phase 3 内容填充：About 照片、真实社交链接、Works 真实项目、至少 1 篇教程
- [ ] Phase 4 对话系统方案选型（Claude API / 邮箱收件 / Crisp 第三方）待排期

---
