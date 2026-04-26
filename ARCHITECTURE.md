# chenjin.io — 网站架构文档

> 最后更新：2026-04-19

## 项目概览

个人品牌网站，定位"Turn chaos into clarity"。React + TypeScript + Vite 构建，支持中英双语、明暗主题，包含博客、Playbooks、工具栈、合作、路线图等子页面。

**技术栈：** Vite 5 + React 18 + TypeScript 5 + Tailwind CSS 3 + Framer Motion + shadcn/ui (Radix UI)

---

## 1. 路由结构

```
/                    → Index          首页（6 个 section 组合）
/playbooks           → Playbooks      方法论/Playbook
/blog                → Blog           博客列表
/blog/:id            → BlogPost       博客文章（Markdown 渲染）
/stack               → Stack          工具栈
/work-with-me        → WorkWithMe     合作/咨询
/experience          → Experience     经历列表
/experience/:id      → ExperienceDetail  经历详情页
/roadmap             → Roadmap        产品路线图（需求提交+投票）
/*                   → NotFound       404
```

---

## 2. Provider 层级

```
QueryClientProvider (React Query)
  └── ThemeProvider (明暗主题)
       └── LanguageProvider (中英切换)
            └── TooltipProvider (Radix UI)
                 ├── Toaster + Sonner (通知)
                 └── BrowserRouter
                      ├── Routes (所有页面)
                      └── FloatingChat (全局悬浮对话)
```

---

## 3. 首页 Section 结构（Index.tsx）

| # | Section | 组件 | 描述 |
|---|---------|------|------|
| - | Header | `Navigation` | 固定顶部导航，毛玻璃背景，移动端汉堡菜单 |
| 1 | Hero | `HeroSection` | H1 + 旋转词动画 + 对话输入框 + 话题快捷键 |
| 2 | About (01) | `AboutSection` | 双栏：文字 + 照片占位，含 Hero description 引言 |
| 3 | Works (02) | `WorksSection` | 2x2 作品卡片 + 邮箱订阅 CTA |
| 4 | Journey (03) | `JourneySection` | 2x2 职业经历卡片，时间线风格 |
| 5 | Trust (04) | `TrustSection` | 3 列推荐语 + 合作伙伴 |
| 6 | Contact (05) | `ContactSection` | 居中邮箱 + 6 个社交链接 |
| - | Footer | `Footer` | 版权 + 品牌签名 |

---

## 4. 组件清单

### 功能组件（src/components/）

| 组件 | 状态 | 动画 | i18n | 描述 |
|------|------|------|------|------|
| `Navigation.tsx` | mobileOpen | 汉堡线→X | nav.* | 响应式导航，首页锚点 + 页面路由 |
| `HeroSection.tsx` | currentIndex, chatMessage, chatFileName | 旋转词(2.5s), 入场序列 | hero.* | 核心 Hero，含对话输入框 |
| `AboutSection.tsx` | - | whileInView fade-up | about.*, hero.description | 双栏 About，照片占位 |
| `WorksSection.tsx` | email | whileInView stagger | works.* | 作品卡片网格 + 邮箱订阅 |
| `JourneySection.tsx` | - | whileInView stagger, hover scale | journey.* | 职业经历卡片 |
| `TrustSection.tsx` | - | whileInView stagger | trust.* | 推荐语 + 合作伙伴 |
| `ContactSection.tsx` | - | whileInView fade-up | contact.* | 邮箱 + 社交链接 |
| `FloatingChat.tsx` | open, message, fileName, showButton | 按钮缩放, 面板弹出 | hero.chat* | 全局悬浮对话，Hero 可见时隐藏 |
| `Footer.tsx` | - | - | footer.* | 极简页脚 |
| `ThemeToggle.tsx` | - | - | - | 太阳/月亮图标切换 |
| `LanguageToggle.tsx` | - | - | - | EN/中 切换器 |
| `NavLink.tsx` | - | - | - | React Router NavLink 封装 |
| `LoginModal.tsx` | - | - | login.* | 登录弹窗（Roadmap 用） |

### UI 组件（src/components/ui/）

shadcn/ui 预构建组件，40+ 个：accordion, alert, avatar, badge, button, card, carousel, checkbox, dialog, dropdown-menu, form, input, label, popover, scroll-area, select, separator, sheet, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toaster, tooltip 等。

---

## 5. 状态管理

| 层级 | 方式 | 持久化 | 用途 |
|------|------|--------|------|
| 全局 | ThemeContext | localStorage('theme') | 明暗主题 |
| 全局 | LanguageContext | localStorage('language') | 中英语言 |
| 组件 | useState | - | UI 交互状态 |
| 数据 | React Query | - | 服务端数据（预留，暂未使用） |

### ThemeContext
- `theme`: 'light' | 'dark'
- `toggleTheme()`: 切换主题
- 首次加载读取系统偏好，应用 class 到 `<html>`

### LanguageContext
- `language`: 'en' | 'zh'
- `setLanguage(lang)`: 切换语言
- `t`: 完整翻译对象
- 组件通过 `useLanguage()` 获取

---

## 6. 国际化（i18n.ts）

```
translations.{en|zh}
├── nav       { about, works, journey, contact }
├── hero      { headline, rotatingPrefix, rotatingWords[5],
│               rotatingSuffix, description, chatGuide,
│               chatPlaceholder, chatSend, chatUpload, chatTopics[4] }
├── about     { label, title, description(多段), photoAlt }
├── works     { label, title, items[4]{type,title,description,status,link},
│               followCta, emailPlaceholder, subscribe }
├── journey   { label, title, items[4]{period,role,company,description} }
├── trust     { label, testimonialsTitle, testimonials[3]{quote,name,context},
│               partnersTitle, partners[3] }
├── contact   { label, title, description, email, socials[6]{name,link} }
├── roadmap   { label, title, subtitle, submitTitle, titlePlaceholder,
│               descriptionPlaceholder, categoryLabel, categories[4],
│               submitButton, loginToSubmit, loginToVote, status*, votes, noItems }
├── login     { title, subtitle, emailLabel, emailPlaceholder, emailButton,
│               wechatButton, or, terms, comingSoon }
└── footer    { rights, tagline }
```

---

## 7. 设计系统

### 色彩——中国传统色（7:3:1 比例）

| 角色 | 亮色模式 | 暗色模式 | 传统色名 |
|------|----------|----------|----------|
| 70% 背景 | `hsl(150 38% 95%)` | `hsl(200 10% 10%)` | 月白 / 玄墨 |
| 30% 文字 | `hsl(180 25% 18%)` | `hsl(150 15% 85%)` | 青黛 / 素月 |
| 10% 强调 | `hsl(170 50% 37%)` | `hsl(170 42% 60%)` | 翠涛 / 天水碧 |
| 次要背景 | `hsl(155 25% 90%)` | `hsl(180 15% 18%)` | 薄荷 / 黛绿 |
| 次要文字 | `hsl(180 12% 40%)` | `hsl(160 8% 58%)` | 碧山 / 烟青 |
| 破坏性 | `hsl(354 45% 56%)` | `hsl(354 40% 50%)` | 胭脂 |
| Headline | `hsl(180 25% 18%)` | `hsl(150 15% 85%)` | 同文字色 |

### 字体

| 用途 | 字体 | 权重 |
|------|------|------|
| 标题/Display | Playfair Display | 400-700, italic 600-700 |
| 正文/Body | DM Sans | 300-600 |
| 旋转关键词 | Playfair Display italic bold | 700 |

### 动画模式

| 模式 | 实现 | 参数 |
|------|------|------|
| 入场 | `initial` + `animate` | opacity 0→1, y 30→0, 0.6-1s |
| 滚动触发 | `whileInView` | `once: true, margin: '-100px'` |
| 子元素交错 | delay 递增 | 0.1-0.15s per item |
| 悬停 | `whileHover` | scale 1.02, 0.3s |
| 旋转词 | `AnimatePresence` + `popLayout` | 垂直滑入/出, spring |
| 缓动 | cubic-bezier | `[0.22, 1, 0.36, 1]` 和 `[0.25, 0.1, 0.25, 1]` |

---

## 8. 子页面架构

### Blog 系统
- `Blog.tsx`: 文章列表，区分已发布/Coming Soon
- `BlogPost.tsx`: 用 `react-markdown` 渲染 Markdown 内容
- 文章数据内置于组件中（非 CMS）

### Playbooks 页
- 方法论/Playbook 展示

### Stack 页
- 工具栈推荐

### WorkWithMe 页
- 合作/咨询入口

### Experience 列表页
- `/experience` 路由，展示所有经历

### Experience 详情页
- `/experience/:id` 路由，8 个预设 ID（工作 + 教育）
- 每个经历有 period, title, subtitle, description, highlights
- 数据内置于组件

### Roadmap 页
- 产品路线图，需求提交 + 投票系统
- 包含登录弹窗（LoginModal）
- 支持分类筛选和状态过滤

---

## 9. 对话系统

### Hero 对话框
- 位置：Hero section 中央
- UI：textarea (2行) + 附件上传 + 发送按钮
- 交互：Enter 发送, Shift+Enter 换行
- 快捷话题：4 个药丸按钮填入输入框
- 引导语：Playfair italic accent 色

### 悬浮对话（FloatingChat）
- 位置：右下角固定
- 触发：accent 色圆形气泡按钮
- 面板：展开后与 Hero 对话框功能一致
- 智能隐藏：首页 Hero 可见时隐藏按钮（scroll > 80vh 显示）
- 其他页面：始终显示
- 后端：TODO，当前仅 UI

---

## 10. 构建与部署

| 项目 | 配置 |
|------|------|
| 构建工具 | Vite 5.4.19 + SWC |
| 开发端口 | 8080 |
| 路径别名 | `@` → `./src` |
| 暗色模式 | Tailwind class 策略 |
| 输出 | `dist/`，含资产指纹 |
| SEO | meta + og:* + Twitter Card |

### 依赖版本

| 包 | 版本 |
|----|------|
| React | 18.3.1 |
| React Router | 6.30.1 |
| Framer Motion | 12.25.0 |
| Tailwind CSS | 3.4.17 |
| TypeScript | 5.8.3 |
| Vite | 5.4.19 |
| React Query | 5.83.0 |
| React Markdown | 10.1.0 |
| Lucide React | 0.462.0 |

---

## 11. 文件树

```
src/
├── App.tsx                     # 路由 + Provider 组装
├── main.tsx                    # 入口
├── index.css                   # 全局样式 + CSS 变量
├── vite-env.d.ts
├── pages/
│   ├── Index.tsx               # 首页（6 section）
│   ├── Playbooks.tsx           # 方法论
│   ├── Blog.tsx                # 博客列表
│   ├── BlogPost.tsx            # 博客文章
│   ├── Stack.tsx               # 工具栈
│   ├── WorkWithMe.tsx          # 合作/咨询
│   ├── Experience.tsx          # 经历列表
│   ├── ExperienceDetail.tsx    # 经历详情
│   ├── Roadmap.tsx             # 产品路线图
│   └── NotFound.tsx            # 404
├── components/
│   ├── Navigation.tsx          # 导航栏
│   ├── HeroSection.tsx         # Hero + 对话框
│   ├── AboutSection.tsx        # 关于
│   ├── WorksSection.tsx        # 作品
│   ├── JourneySection.tsx      # 旅程
│   ├── TrustSection.tsx        # 推荐/信任
│   ├── ContactSection.tsx      # 联系
│   ├── FloatingChat.tsx        # 悬浮对话
│   ├── LoginModal.tsx          # 登录弹窗
│   ├── Footer.tsx              # 页脚
│   ├── ThemeToggle.tsx         # 主题切换
│   ├── LanguageToggle.tsx      # 语言切换
│   ├── NavLink.tsx             # 导航链接
│   └── ui/                     # shadcn/ui 组件 (40+)
├── contexts/
│   ├── ThemeContext.tsx         # 主题 Context
│   └── LanguageContext.tsx      # 语言 Context
├── hooks/
│   ├── use-mobile.tsx          # 响应式 hook
│   └── use-toast.ts            # Toast hook
└── lib/
    ├── i18n.ts                 # 中英翻译
    └── utils.ts                # cn() 工具函数
```

---

## 12. 待完成项

- [ ] 对话系统接入后端（Hero + FloatingChat）
- [ ] Journey section 设计迭代（参考 atoms.dev / base44.com）
- [ ] About section 照片替换
- [ ] 社交链接填入真实 URL
- [ ] 博客内容扩充
- [ ] SEO meta tags 完善
