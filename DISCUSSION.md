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
- [x] 清理源码残留（sprint A 落地）
- [x] ROADMAP.md 重排（sprint A 落地）
- [ ] 用户手动：删除旧仓 `ChenJinCloud/chenjinai`
- [ ] 用户手动：lovable.dev 解绑并删除项目
- [ ] Phase 2B 视觉打磨
- [ ] Phase 3 内容填充
- [ ] Phase 4 对话系统方案选型

---

## 2026-04-15 (下午) — IA 重构 + Sprint A 清理

### 会话节奏
本来是来"继续开发"的，检查后发现两件事：(1) 网页标签栏的 Lovable 爱心 logo 是因为 `index.html` 没显式 `<link rel="icon">` 回落到 `public/favicon.ico` 的 Lovable 原版；(2) 上午刚迁完仓库，下午用户就问"网站结构是否足够清晰"——审查后发现 IA 有内在冲突。会话主轴从"修 logo"滑到"定位重构+结构重排+清理"，一次性走完。

### 关键定位决策：self-as-SaaS
用户回答网站定位问题时说"构建个人 IP，把自己做成一个 SaaS/网站"。这个答案把整个 IA 批评框架翻转了一半：
- **原本要批评的**：Roadmap 投票板、Support 定价页、Social channels 页——"个人站不应该有这些 SaaS 惯例"
- **翻转后的解读**：这些页面恰恰是 self-as-SaaS 的核心资产——public roadmap 是定位锚，Support 是 pricing 页的个人化变体，Stack 是 "integrations" 页
- **但仍然成立的批评**：首页"单页叙事"和"子页矩阵"两套 IA 打架、Blog 和 Tutorials 边界不清、Tools 和 Sources 同质

### IA 新框架：产品化重排

| SaaS 模块 | 对应到 chenjin.io |
|-----------|------------------|
| Landing (Hero + Value Prop) | 首页 Hero + 5 段叙事（从 7 段压缩） |
| Features | Works section（未来转 Featured Playbooks）|
| Pricing / Support | `/work-with-me` |
| Roadmap | `/roadmap` |
| Changelog / Blog | `/blog` |
| Docs / Courses | `/playbooks`（原 /tutorials，重命名强化产品感）|
| Integrations | `/stack`（原 /tools + /sources 合并）|
| About / Team | About section + `/experience/:id` + `/experience` 列表 |
| Contact | `/work-with-me` 和 Footer channels 共同承载 |

### Blog 和 Tutorials 的边界（重要）
用户明确区分：
- **Blog** = thinking in public，单篇成文的 insight/story
- **Tutorials → Playbooks** = 主题式、成体系、可编号的学习路径（AI 编程 101 / AI 增长 101）

两者定位彻底不同：Blog 是 "thinking"，Playbooks 是 "product"。我一开始建议合并是错的，收回。应该**放大**差异而不是模糊它。

### 执行：三刀重构

**Cut 1 — 首页结构**（`382abb5`）
首页从 7 段压到 5 段，删 Explore，Trust 05→04，Contact 06→05 + 升级为 Work With Me CTA。两套 IA 冲突消灭在此。

**Cut 2 — 新 URL**（`5c1f180`）
四个新页面：Playbooks / Stack / WorkWithMe / Experience。路由切换，Navigation pageNavItems 从 7 项缩到 5 项。Stack 完整继承 Tools 的 Dialog 交互 + 所有分类数据。

**Cut 3 — 清理**（`4984b81`）
删 5 个旧页面 + ExploreSection 组件。FloatingChat 改条件挂载（只在 /, /work-with-me, /roadmap 出现），阅读型页面不再打扰。i18n 清掉 nav.explore 和 explore 块。净减 1211 行。

### 额外：Sprint A 低垂果实（`819691a`）
- README.md Lovable 模板全量替换
- ROADMAP.md 冲刺表重排到 4/15-5/1 节奏
- vite.config.ts 删 lovable-tagger
- package.json 包名 + 依赖清理
- public/favicon.ico 删除

### 工作流心得
- **"三刀连坐"的价值**：单次大改爆炸风险高，但刻意拆成 3 个 commit + 每刀 tsc 验证，回滚颗粒度刚好；cut 1 纯首页零风险，cut 2 新建文件不删旧，cut 3 才做删除——风险递进、可控
- **定位一个单词改变所有判断**：self-as-SaaS 这四个字让我几乎 180° 翻转了对 Roadmap/Support 页的评价。**定位问题不问清楚就动结构是危险的**——审查时先问"这是什么"再批评"这不对"
- **别急着合并相似的东西**：我一开始要合并 Blog + Tutorials，用户一个反问（"你能说出两者差别吗？"）就暴露了我只看表面标题。定位清晰的东西即使表面相似也不该合并
- **旧页面的内容保真要事先规划**：Tools.tsx 500 行内容、Sources.tsx 75 行、Support.tsx 208 行——动刀前必须想好迁移路径。这次选的是 cut 2 创建新文件内容内联、cut 3 删旧，干净但有临时冗余

### 未完成 / 下次起点
- [ ] Phase 2B 视觉打磨（B 路线）
- [ ] Phase 3 内容填充（C 路线）：About bio / Works Featured Playbooks / Trust 真实推荐语 / Journey 公司日期核对
- [ ] Phase 4 对话系统方案选型
- [ ] `/experience/:id` 路由参数格式核对（当前用 `company.toLowerCase()`，不确定和 ExperienceDetail 期待的 id 是否匹配）
- [ ] ARCHITECTURE.md / SPEC.md 是否还有 Lovable 残留文案（未查）
- [ ] 用户手动：lovable.dev 解绑 + 删除旧仓 ChenJinCloud/chenjinai

---
