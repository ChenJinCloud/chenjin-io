# chenjin.io — 项目规划

> 创建：2026-04-09 | 更新：2026-04-15 | 状态：进行中

## 项目愿景

打造一个 **self-as-SaaS** 的个人 IP 站——把自己当产品运营，网站是产品表面。访客能看到正在构建的 playbook、我的技术栈、合作邀约和公开 roadmap。核心理念：Turn chaos into clarity.

---

## 冲刺计划（5 月前打磨完成）

| 日期 | 阶段 | 目标 | 状态 |
|------|------|------|------|
| 4/8 | Phase 1 | Landing page 结构 + 初步视觉规范 + 全站 MVP | 已完成 |
| 4/9 | Phase 2A | 导航/栏目架构 + 全站路由实现 | 已完成 |
| 4/15 | IA 重构 | Self-as-SaaS 定位重排 + 仓库迁移 + 品牌清除 | 已完成 |
| 4/16-19 | Phase 2B | 视觉打磨：挑一个 section 做基调锚点，扩展到全站 | 待开始 |
| 4/20-24 | Phase 3 | 内容填充：About/Works/Trust/Journey 真实数据 | 待开始 |
| 4/25-27 | Phase 4 | 对话系统：确定方案（Claude API / 邮件 / 第三方）并接入 | 待开始 |
| 4/28-30 | Phase 5+6 | SEO + 性能优化 + 部署到 Vercel | 待开始 |
| 5/1 后 | 发布 | 准备 Pitch 素材 + 全社媒分发 | 待开始 |

---

## Phase 1：基础框架 ✅ 已完成（4/8）

**目标：** 8 个 section 的完整 landing page + 子页面骨架

- [x] Hero（H1 + 旋转词动画 + 对话输入框 + 话题快捷键）
- [x] About（双栏布局 + 照片占位）
- [x] Works（作品卡片 + 邮箱订阅）
- [x] Journey（职业经历卡片）
- [x] Explore（站点导航卡片）
- [x] Trust（推荐语 + 合作伙伴）
- [x] Contact（邮箱 + 社交链接）
- [x] Footer + 导航（桌面 + 移动端汉堡菜单）
- [x] 悬浮对话按钮（FloatingChat）
- [x] 中国传统色设计系统（7:3:1）+ 中英双语 + 明暗主题
- [x] 子页面 MVP：Blog, Tools, Sources, Tutorials, Social, Support, ExperienceDetail
- [x] ARCHITECTURE.md + CHANGELOG.md + ROADMAP.md

---

## Phase 2A：网站架构定稿 + 逻辑实现（4/9）

**目标：** 确认最终栏目结构，完成全站页面架构和交互逻辑

### 栏目架构确认
- [ ] 与 Claude 网页端讨论，确认导航栏需要哪些页面
- [ ] 确认页脚需要展示哪些链接/信息
- [ ] 确认每个栏目下的内容结构和功能

### 架构实现
- [ ] 更新 Navigation 组件（导航项 + 移动端菜单）
- [ ] 更新 Footer 组件
- [ ] 新增/调整页面路由
- [ ] 每个栏目页面的结构和组件实现
- [ ] 首页 section 与栏目页面的映射关系
- [ ] i18n 新增页面的翻译内容

### 代码清理
- [ ] 删除未使用组件（SkillsSection, ExperienceSection, AIChatButton）
- [ ] 审查 shadcn/ui 组件导入

---

## Phase 2B：视觉设计迭代（4/10）

**目标：** Landing page 达到参考站点级别的视觉品质

- [ ] 用户提供视觉参考（截图/录屏/具体描述）
- [ ] Journey section 重新设计
- [ ] Explore section 重新设计
- [ ] Hero 对话框视觉优化
- [ ] 整体动效节奏校准
- [ ] 移动端体验专项优化
- [ ] 每个栏目页面的视觉统一

---

## Phase 3：内容填充（4/11）

**目标：** 用真实内容替换所有占位内容

### 个人信息
- [ ] About section 照片替换
- [ ] 社交链接填入真实 URL
- [ ] Trust 推荐语更新为真实引用
- [ ] 合作伙伴信息确认

### 博客
- [ ] 迁移/新增 3-5 篇核心文章
- [ ] 文章标签/分类系统

### 工具 & 资源
- [ ] Works 卡片更新为真实项目
- [ ] 工具页内容完善
- [ ] 信息源页内容完善

### 教程
- [ ] 至少 1 篇教程上线（"Vibe Coding" 系列）

---

## Phase 4：对话系统（待排期）

**目标：** Hero 和 FloatingChat 的输入框接入真实后端

### 方案选项（待定）
- **Option A**: 接入 Claude API — 用个人知识库回答关于我的问题
- **Option B**: 简单消息收集 — 发送到邮箱/Notion/数据库
- **Option C**: 对接现有客服系统（Crisp, Intercom 等）

### 实现步骤
- [ ] 确定方案
- [ ] 后端 API / Edge Function
- [ ] 前端对接（Hero + FloatingChat 共享逻辑）
- [ ] 消息持久化 + 文件上传存储

---

## Phase 5+6：上线准备（4/13-15）

### SEO & 增长
- [ ] SEO meta tags（每页独立 title/description）
- [ ] Open Graph 图片
- [ ] Sitemap.xml
- [ ] Google Analytics / Plausible
- [ ] 邮箱订阅后端
- [ ] 社交分享优化（Twitter Card, WeChat）

### 性能 & 部署
- [ ] 路由级代码分割（React.lazy）
- [ ] 图片优化（WebP, lazy loading）
- [ ] Lighthouse > 90
- [ ] 自定义域名 chenjin.io 部署
- [ ] CI/CD（GitHub Actions → Vercel/Netlify）

---

## 发布 & 分发（4/15 后）

- [ ] 准备 Pitch 素材（截图、GIF、短视频）
- [ ] 撰写发布文案（中英文）
- [ ] 全社媒分发：Twitter/X, LinkedIn, 即刻, 小红书, 微信公众号
- [ ] Product Hunt 或 Hacker News 发布（可选）

---

## 设计参考

| 站点 | 学习重点 |
|------|----------|
| [atoms.dev](https://atoms.dev) | 卡片系统, 渐变光效, 圆角体系, hover 微交互 |
| [base44.com](https://base44.com) | 过渡动画, cubic-bezier 缓动, blur 加载效果 |
| [manus.im](https://manus.im) | 叙事式滚动, section 节奏 |
| [lovable.dev](https://lovable.dev) | 开发者友好的 landing page |
| [supabase.com](https://supabase.com) | 技术品牌的视觉表达 |

---

## 决策记录

| 日期 | 决策 | 原因 |
|------|------|------|
| 2026-04-08 | 字体 Inter → DM Sans | 更温暖，避免 AI-slop 感 |
| 2026-04-08 | 配色采用中国传统色 | 文化根基 + 独特辨识度 |
| 2026-04-08 | Hero 用对话框替代 CTA 按钮 | 降低门槛，驱动互动 |
| 2026-04-08 | 悬浮对话 Hero 可见时隐藏 | 避免重复，减少视觉干扰 |
| 2026-04-08 | Description 从 Hero 移至 About | Hero 精简为三层：认知→价值→行动 |
| 2026-04-09 | 明确冲刺计划 4/9-4/15 | 一周内完成上线，然后全社媒分发 |
| 2026-04-15 | 节奏放宽到 5 月前完成 | 不赶上线，优先打磨质量；4/9-4/15 沟冲刺被替换为 4/15-5/1 打磨节奏 |
| 2026-04-15 | 采用 self-as-SaaS 定位 | 个人 IP = 产品，网站结构向 SaaS 产品站对齐（Playbooks/Stack/Work with me/Roadmap）|
| 2026-04-15 | 仓库从 chenjinai 迁移到 chenjin-io | 脱离 Lovable 双向同步 + 解决 3 个月本地/远程分叉 |
| 2026-04-15 | IA 三刀重构：首页 7 段→5 段，子页 10 条→8 条 | 消灭"两套 IA 打架"问题，详见 DISCUSSION.md |
