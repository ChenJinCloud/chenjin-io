export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      about: 'About',
      works: 'Works',
      journey: 'Journey',
      contact: 'Contact',
    },
    hero: {
      headline: 'Turn chaos into clarity',
      rotatingPrefix: 'Find your',
      rotatingWords: ['AI toolkit', 'growth playbook', 'fresh perspective', 'build process', 'learning path'],
      rotatingSuffix: 'here',
      description: 'I map the way from idea to reality — with code, words, and systems. All in public.',
      chatGuide: 'Let\'s talk — what are you working on? Let\'s figure it out together.',
      chatPlaceholder: 'e.g. I want to transition into AI but don\'t know where to start...',
      chatSend: 'Send',
      chatUpload: 'Attach',
      chatTopics: [
        {
          label: 'Humanities → AI',
          prompt: 'I have a humanities or social science background and want to move into the AI industry. What capability path should I build first?',
        },
        {
          label: 'Personal system',
          prompt: 'I want to build a personal system for knowledge, output, projects, and AI workflows. Where should I start?',
        },
        {
          label: 'AI coding',
          prompt: 'I want to learn AI coding, product development, and automation without a strong engineering background. How should I begin?',
        },
        {
          label: 'Global growth',
          prompt: 'I want to grow a product for global users. What channels, methods, and operating habits should I focus on?',
        },
        {
          label: 'AI automation',
          prompt: 'I want to use AI to automate repetitive work. How should I design the workflow and choose the right tools?',
        },
        {
          label: 'Content → product',
          prompt: 'I want to turn writing, knowledge, or experience into a website, project, or product. What is the first practical path?',
        },
        {
          label: 'Meet Chen Jin',
          prompt: 'I do not have a specific problem yet. I just want to understand who you are, what you build, and whether your perspective resonates with me.',
        },
        {
          label: 'Share my context',
          prompt: 'I do not have a clear question yet. Can you help me introduce my background, current situation, interests, and what kind of help I might need?',
        },
      ],
    },
    about: {
      label: 'ChenJin',
      title: 'ChenJin',
      subtitle: 'I turn ambiguous ideas into working systems — especially where AI tools, growth workflows, writing, and lightweight code meet.',
      description: `I'm Chen Jin, a growth lead at an AI startup and an independent builder. This site is my public workspace: I document how ideas become real — from researching a problem and running small experiments to building with AI, writing through uncertainty, and compressing what I learn into reusable frameworks. The output isn't content. It's systems.

Over the past two years, I've worked across 0→1 growth, launch planning, content systems, and AI-assisted operations. I'm drawn to the gap between insight and execution — not just thinking clearly, but building, testing, and iterating in the open.

Before this came a career transition, a stretch of mental health recovery, and a full reset on how I want to work and live. That shaped how I build today: less performance, more process; visible thinking over polished takes; honest iteration over clean narratives — and why I document not only outcomes, but the systems, tradeoffs, and messy middle behind them.`,
    },
    works: {
      label: '02 — Featured Work',
      title: 'Things I\'ve built and shared.',
      items: [
        {
          type: 'Project',
          title: 'Game Hub — Puzzle Game Aggregator',
          description: 'A collection of classic puzzle games with login, leaderboards, and social sharing. Built with AI-assisted coding.',
          status: 'Building Now 🔨',
          link: '#',
        },
        {
          type: 'Blog',
          title: 'The Shame of AI-Assisted Creation',
          description: 'Why do we feel guilty about using AI to create? An exploration of authenticity, craft, and the changing meaning of "making something."',
          status: 'Published ✓',
          link: '/blog/ai-creation-shame',
        },
        {
          type: 'Tutorial',
          title: 'Vibe Coding: My AI Programming Learning Log',
          description: 'A build-in-public tutorial series documenting my journey from product operator to independent developer.',
          status: 'In Progress 📝',
          link: '#',
        },
        {
          type: 'Resource',
          title: 'Developer Growth Channel Map',
          description: 'An interactive guide to every channel that works for developer-facing products — with real data and personal notes.',
          status: 'Coming Soon',
          link: '#',
        },
      ],
      followCta: 'Building in public — follow the journey.',
      emailPlaceholder: 'your@email.com',
      subscribe: 'Subscribe',
    },
    journey: {
      label: '03 — Journey',
      title: 'Where I\'ve been.',
      items: [
        {
          period: '2026 — Present',
          role: 'Growth Lead',
          company: 'InsForge',
          description: 'Leading growth for a US-based AI startup preparing for YC Demo Day.',
        },
        {
          period: '2025 — 2026',
          role: 'Product Operations',
          company: 'Atoms.dev',
          description: 'Helped non-technical users build products with AI-assisted development tools.',
        },
        {
          period: '2024 — 2025',
          role: 'Career Transition',
          company: 'Independent',
          description: 'Transitioned from traditional industries into the AI sector through self-directed learning and building.',
        },
        {
          period: '2021 — 2024',
          role: 'University + Early Career',
          company: 'Various',
          description: 'Content creation, psychological counseling, travel planning, B2B operations — building a generalist foundation.',
        },
      ],
    },
    recommendations: {
      label: '04 — Recommendations',
      title: 'People I would seriously recommend.',
      subtitle: 'Some are services I have used myself. Some are communities or professional support that shaped how I think and work. The longer stories and links will be added as this section becomes ready.',
      items: [
        {
          name: 'Fanhan',
          type: 'Career',
          service: 'AI career consulting',
          story: '',
        },
        {
          name: 'Gefei',
          type: 'Community',
          service: 'Global products and indie maker community',
          story: '',
        },
        {
          name: 'Iris',
          type: 'Growth',
          service: 'Growth consulting',
          story: '',
        },
        {
          name: 'Dayu',
          type: 'Strengths',
          service: 'Gallup strengths interpretation and commercialization consulting',
          story: '',
        },
        {
          name: 'Tianxiang',
          type: 'Support',
          service: 'Psychological counseling',
          story: '',
        },
      ],
    },
    trust: {
      label: '05 — Trust',
      testimonialsTitle: 'What others say.',
      testimonials: [
        {
          quote: 'She has an incredible ability to take a chaotic situation and make it completely clear. Every conversation leaves me with a concrete next step.',
          name: 'Senior Industry Professional',
          context: 'On competitive research consulting',
        },
        {
          quote: 'Her career consulting helped me navigate my transition into AI when I had no idea where to start. She doesn\'t just give advice — she gives you a map.',
          name: 'Junior Colleague',
          context: 'On career transition guidance',
        },
        {
          quote: 'I\'ve been following her novel recommendations for years. She doesn\'t just tell you what\'s good — she filters through hundreds so you don\'t have to.',
          name: 'Long-time Reader',
          context: 'On content curation',
        },
      ],
      partnersTitle: 'Associated with',
      partners: ['InsForge', 'Atoms.dev', 'YC-backed'],
    },
    contact: {
      label: '06 — Work With Me',
      title: 'Let\'s work together.',
      description: 'Sponsor my continued work, or bring me into your project. I take on 1-on-1 consulting, growth engagements, and select collaborations.',
      email: 'hello@chenjin.io',
      socials: [
        { name: 'Twitter / X', link: 'https://x.com/jinchen_ai' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jiaqi-chen-b414582aa/' },
        { name: 'GitHub', link: 'https://github.com/ChenJinCloud' },
        { name: '微信: c13286566252', link: '#' },
        { name: '公众号: 陈今AI', link: '#' },
        { name: '公众号: MetaxisGrove', link: '#' },
        { name: '即刻: 陈今', link: '#' },
        { name: 'YouTube', link: '#' },
      ],
    },
    roadmap: {
      label: '07 — Roadmap',
      title: 'Build plan and request pool.',
      subtitle: 'My own development plan and the things readers want me to make, explain, publish, or connect next.',
      submitTitle: 'Submit a Request',
      titlePlaceholder: 'Feature title',
      descriptionPlaceholder: 'Describe what you\'d like to see...',
      categoryLabel: 'Category',
      categories: ['Build', 'Writing', 'Playbook', 'Experiment', 'Request'],
      submitButton: 'Submit',
      loginToSubmit: 'Log in to submit a request',
      loginToVote: 'Log in to vote',
      statusAll: 'All',
      statusPlanned: 'Planned',
      statusInProgress: 'In Progress',
      statusCompleted: 'Completed',
      statusOpen: 'Open',
      votes: 'votes',
      noItems: 'No requests yet — be the first!',
    },
    login: {
      title: 'Welcome back',
      subtitle: 'Log in to submit requests and vote.',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      emailButton: 'Continue with Email',
      wechatButton: 'Continue with WeChat',
      or: 'or',
      terms: 'By continuing, you agree to our Terms of Service.',
      comingSoon: 'Login coming soon — stay tuned!',
    },
    footer: {
      rights: '© 2026 Chen Jin',
      tagline: 'Turn chaos into clarity.',
    },
  },
  zh: {
    nav: {
      about: '关于',
      works: '作品',
      journey: '旅程',
      contact: '联系',
    },
    hero: {
      headline: '化混沌为清晰',
      rotatingPrefix: '在这里找到你的',
      rotatingWords: ['AI 工具箱', '增长方法', '新视角', '构建过程', '学习路径'],
      rotatingSuffix: '',
      description: '我用代码、文字和系统，走通从想法到现实的路。全程公开。',
      chatGuide: '聊聊吧——你在忙什么？我们一起想办法。',
      chatPlaceholder: '比如：我想转行AI但不知道从哪开始...',
      chatSend: '发送',
      chatUpload: '上传',
      chatTopics: [
        {
          label: '文社科转 AI',
          prompt: '我是文社科背景，想转入 AI 行业，应该如何建立能力路径？',
        },
        {
          label: '搭建个人系统',
          prompt: '我想搭建自己的知识库、输出系统、项目系统和 AI 工作流，应该从哪里开始？',
        },
        {
          label: 'AI 编程入门',
          prompt: '我想开始学 AI 编程、产品开发和自动化，但没有很强工程背景，应该怎么起步？',
        },
        {
          label: '全球化增长',
          prompt: '我想做面向海外用户的产品增长，应该关注哪些渠道、方法和工作习惯？',
        },
        {
          label: 'AI 自动化',
          prompt: '我想用 AI 自动化重复工作，应该怎么设计流程、选择工具？',
        },
        {
          label: '内容变产品',
          prompt: '我想把写作、知识或经验做成网站、作品或产品，第一步应该怎么走？',
        },
        {
          label: '认识陈今',
          prompt: '我暂时没有明确问题，只是想认识你、了解你在做什么，以及看看你的视角是否和我有共鸣。',
        },
        {
          label: '聊聊我的情况',
          prompt: '我暂时没有清晰问题。你可以先帮我梳理我的背景、当前状态、兴趣，以及我可能需要什么帮助吗？',
        },
      ],
    },
    about: {
      label: '陈今',
      title: '陈今',
      subtitle: '我把模糊想法变成可运行的系统，尤其是在 AI 工具、增长工作流、写作和轻量代码交汇的地方。',
      description: `我是陈今，一家 AI 初创公司的增长负责人，也是一个独立构建者。这个网站是我的公开工作台：我在这里记录想法如何变成现实——从研究一个问题、跑小实验，到用 AI 构建、在不确定中写作，并把学到的东西压缩成可复用框架。最终产出不是内容，而是系统。

过去两年，我的工作横跨 0→1 增长、发布规划、内容系统和 AI 辅助运营。我被洞察和执行之间的距离吸引——不只是想清楚，而是构建、测试，并在公开中持续迭代。

在这之前，是一次职业转型、一段心理健康恢复期，以及对自己想如何工作和生活的完整重置。这塑造了我今天的构建方式：少一点表演，多一点过程；让思考可见，而不是只留下漂亮观点；接受诚实的迭代，而不是追求干净的叙事——也因此，我记录的不只是结果，也包括结果背后的系统、取舍和混乱中段。`,
    },
    works: {
      label: '02 — 精选作品',
      title: '我构建和分享过的东西。',
      items: [
        {
          type: '项目',
          title: 'Game Hub — 益智游戏聚合器',
          description: '经典益智游戏合集，支持登录、排行榜和社交分享。AI辅助编码构建。',
          status: '构建中 🔨',
          link: '#',
        },
        {
          type: '博客',
          title: 'AI辅助创作的羞耻感',
          description: '为什么我们在用AI创作时会感到内疚？关于真实性、手艺和"创造"含义变化的探讨。',
          status: '已发布 ✓',
          link: '/blog/ai-creation-shame',
        },
        {
          type: '教程',
          title: 'Vibe Coding：我的AI编程学习日志',
          description: '一个公开构建的教程系列，记录我从产品运营到独立开发者的旅程。',
          status: '进行中 📝',
          link: '#',
        },
        {
          type: '资源',
          title: '开发者增长渠道地图',
          description: '面向开发者产品的所有有效渠道——附真实数据和个人笔记。',
          status: '即将推出',
          link: '#',
        },
      ],
      followCta: '公开构建中——关注这段旅程。',
      emailPlaceholder: '你的邮箱',
      subscribe: '订阅',
    },
    journey: {
      label: '03 — 旅程',
      title: '我走过的路。',
      items: [
        {
          period: '2026 — 至今',
          role: '增长负责人',
          company: 'InsForge',
          description: '为一家美国AI初创公司主导增长，筹备YC Demo Day。',
        },
        {
          period: '2025 — 2026',
          role: '产品运营',
          company: 'Atoms.dev',
          description: '帮助非技术用户通过AI辅助开发工具构建产品。',
        },
        {
          period: '2024 — 2025',
          role: '职业转型',
          company: '独立',
          description: '通过自主学习和构建，从传统行业转型进入AI领域。',
        },
        {
          period: '2021 — 2024',
          role: '大学 + 早期职业',
          company: '多家',
          description: '内容创作、心理咨询、旅行策划、B2B运营——构建通才基础。',
        },
      ],
    },
    recommendations: {
      label: '04 — 推荐',
      title: '我想认真推荐的人。',
      subtitle: '有些是我亲自使用过的服务，有些是社群、专业支持或关键关系。这里会逐步补上我自己的 story、推荐理由和服务入口。',
      items: [
        {
          name: '泛函',
          type: '求职',
          service: '求职咨询',
          story: '',
        },
        {
          name: '哥飞',
          type: '社群',
          service: '出海社群',
          story: '',
        },
        {
          name: '生姜Iris',
          type: '增长',
          service: '增长咨询',
          story: '',
        },
        {
          name: '自由的大鱼',
          type: '优势',
          service: '盖洛普优势解读 / 商业化咨询',
          story: '',
        },
        {
          name: '天翔',
          type: '心理',
          service: '心理咨询',
          story: '',
        },
      ],
    },
    trust: {
      label: '05 — 信任',
      testimonialsTitle: '别人怎么说。',
      testimonials: [
        {
          quote: '',
          name: 'Eva悦悦在生长',
          context: '',
        },
        {
          quote: '',
          name: '生姜Iris',
          context: '',
        },
        {
          quote: '',
          name: '泛函',
          context: '',
        },
        {
          quote: '',
          name: '自由的大鱼',
          context: '',
        },
        {
          quote: '',
          name: '哥飞',
          context: '',
        },
        {
          quote: '',
          name: '田飞FeiTT',
          context: '',
        },
      ],
      partnersTitle: '合作伙伴',
      partners: ['InsForge', 'Atoms.dev', 'YC-backed'],
    },
    contact: {
      label: '06 — 合作',
      title: '一起做点事。',
      description: '赞助我持续输出，或邀请我参与你的项目。我接 1v1 咨询、增长合作、和精选项目的联合创作。',
      email: 'hello@chenjin.io',
      socials: [
        { name: 'Twitter / X', link: 'https://x.com/jinchen_ai' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jiaqi-chen-b414582aa/' },
        { name: 'GitHub', link: 'https://github.com/ChenJinCloud' },
        { name: '微信: c13286566252', link: '#' },
        { name: '公众号: 陈今AI', link: '#' },
        { name: '公众号: MetaxisGrove', link: '#' },
        { name: '即刻: 陈今', link: '#' },
        { name: 'YouTube', link: '#' },
      ],
    },
    roadmap: {
      label: '07 — 计划池',
      title: '开发计划与需求池。',
      subtitle: '这里同时放我自己的开发计划，以及别人希望我输出、解释、发布或连接的东西。',
      submitTitle: '提交需求',
      titlePlaceholder: '功能标题',
      descriptionPlaceholder: '描述你想要的功能...',
      categoryLabel: '分类',
      categories: ['构建', '写作', '手册', '实验', '需求'],
      submitButton: '提交',
      loginToSubmit: '登录后提交需求',
      loginToVote: '登录后投票',
      statusAll: '全部',
      statusPlanned: '已规划',
      statusInProgress: '进行中',
      statusCompleted: '已完成',
      statusOpen: '待定',
      votes: '票',
      noItems: '还没有需求——来做第一个！',
    },
    login: {
      title: '欢迎回来',
      subtitle: '登录以提交需求和投票。',
      emailLabel: '邮箱',
      emailPlaceholder: '你的邮箱',
      emailButton: '邮箱登录',
      wechatButton: '微信登录',
      or: '或',
      terms: '继续即表示你同意我们的服务条款。',
      comingSoon: '登录功能即将上线——敬请期待！',
    },
    footer: {
      rights: '© 2026 陈今',
      tagline: '化混沌为清晰。',
    },
  },
} as const;

export const getTranslation = (lang: Language) => translations[lang];
