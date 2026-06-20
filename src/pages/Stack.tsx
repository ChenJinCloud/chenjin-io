import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type ToolStatus = 'core' | 'using' | 'saved';

interface StackTool {
  name: string;
  url: string;
  status: ToolStatus;
  role: { zh: string; en: string };
  what: { zh: string; en: string };
  why: { zh: string; en: string };
  workflow: { zh: string; en: string };
}

interface ToolSection {
  id: string;
  title: { zh: string; en: string };
  desc: { zh: string; en: string };
  tools: StackTool[];
}

interface MyTool {
  name: string;
  url: string;
  desc: { zh: string; en: string };
  status?: 'live' | 'beta' | 'coming';
}

const t = (isZh: boolean, text: { zh: string; en: string }) => (isZh ? text.zh : text.en);

const createTool = (
  name: string,
  url: string,
  status: ToolStatus,
  role: { zh: string; en: string },
  what: { zh: string; en: string },
  why: { zh: string; en: string },
  workflow: { zh: string; en: string },
): StackTool => ({ name, url, status, role, what, why, workflow });

const statusLabel = (status: ToolStatus, isZh: boolean) => {
  if (status === 'core') return isZh ? '核心' : 'Core';
  if (status === 'saved') return isZh ? '待评估' : 'Saved';
  return isZh ? '在用' : 'Using';
};

const Stack = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [selectedTool, setSelectedTool] = useState<StackTool | null>(null);

  const coreTools = [
    createTool(
      'Coze',
      'https://www.coze.cn/',
      'core',
      { zh: 'AI Agent / 应用原型', en: 'AI agent / App prototype' },
      {
        zh: '字节旗下的一站式 AI Agent 与应用构建平台。',
        en: 'An all-in-one AI agent and app-building platform by ByteDance.',
      },
      {
        zh: '它适合快速验证 Agent 产品形态和自动化工作流。',
        en: 'It is useful for quickly validating agent product shapes and automation workflows.',
      },
      {
        zh: '我用它把模糊 AI idea 先变成可操作流程，再决定是否进入工程实现。',
        en: 'I use it to turn vague AI ideas into runnable flows before deeper engineering.',
      },
    ),
    createTool(
      'Web.Cafe',
      'https://new.web.cafe/',
      'core',
      { zh: '独立开发 / 出海增长', en: 'Indie building / Global growth' },
      {
        zh: '中文独立开发者和出海产品操盘者的经验社区。',
        en: 'A Chinese community for indie builders and global-facing product operators.',
      },
      {
        zh: '真实案例密度高，适合观察一线增长和产品问题。',
        en: 'It has high-signal real cases for product and growth work.',
      },
      {
        zh: '我把它当作 SEO、投放、收款、Product Hunt 等主题的案例雷达。',
        en: 'I use it as a radar for SEO, ads, payments, Product Hunt, and go-global cases.',
      },
    ),
    createTool(
      'Zhipu AI Open Platform',
      'https://open.bigmodel.cn/',
      'core',
      { zh: '模型 API / 基础设施', en: 'Model API / Infrastructure' },
      {
        zh: '智谱 AI 的开放平台入口，用于管理 GLM 模型 API 和项目。',
        en: 'Zhipu AI platform for managing GLM model APIs and projects.',
      },
      {
        zh: '它是国产模型能力接入和成本效果对比的重要入口。',
        en: 'It is an important entry point for China-based model API experiments.',
      },
      {
        zh: '我把它放在模型供应商备选与实验工具位。',
        en: 'I keep it in the model-provider toolkit for evaluation and integration.',
      },
    ),
    createTool(
      'PostNitro',
      'https://postnitro.ai/',
      'core',
      { zh: '社媒内容 / LinkedIn', en: 'Social content / LinkedIn' },
      {
        zh: 'AI 轮播和 LinkedIn 内容格式化工具。',
        en: 'An AI carousel and LinkedIn formatting tool.',
      },
      {
        zh: '它能把想法整理成更适合发布的社媒内容。',
        en: 'It helps turn ideas into cleaner publishable social content.',
      },
      {
        zh: '我用它做 LinkedIn 发布前的结构、格式和轮播表达整理。',
        en: 'I use it before LinkedIn publishing for structure, formatting, and carousel-ready ideas.',
      },
    ),
    createTool(
      'AITDK',
      'https://aitdk.com/',
      'core',
      { zh: 'SEO / 内容增长', en: 'SEO / Content growth' },
      {
        zh: '免费 AI SEO 工具集，覆盖标题、描述、关键词和 FAQ。',
        en: 'A free AI SEO toolkit for titles, descriptions, keywords, and FAQs.',
      },
      {
        zh: '适合快速生成 SEO 初稿和落地页增长素材。',
        en: 'Useful for fast SEO first drafts and landing-page growth assets.',
      },
      {
        zh: '我用它生成多个方向，再人工筛选和改写。',
        en: 'I use it to generate angles, then manually select and rewrite.',
      },
    ),
    createTool(
      'IP111',
      'https://ip111.cn/',
      'core',
      { zh: '网络检测', en: 'Network checking' },
      {
        zh: 'IP 地址与访问线路检测工具。',
        en: 'An IP and route-checking tool.',
      },
      {
        zh: '能快速判断当前网络出口、代理状态和访问差异。',
        en: 'It quickly reveals exit route, proxy state, and access differences.',
      },
      {
        zh: '我在登录海外工具或排查访问异常前后用它确认网络状态。',
        en: 'I use it around global-tool login and access debugging to verify route state.',
      },
    ),
  ];

  const buildTools = [
    createTool('ChatGPT', 'https://chat.openai.com', 'using', { zh: '通用 AI 对话', en: 'General AI chat' }, { zh: 'OpenAI 的通用 AI 工作台。', en: 'OpenAI general AI workspace.' }, { zh: '适合写作、研究、推理和产品构思。', en: 'Useful for writing, research, reasoning, and product thinking.' }, { zh: '我把它用于长问题拆解、内容草稿和思路校准。', en: 'I use it for breaking down hard questions, drafting, and calibrating ideas.' }),
    createTool('Claude', 'https://claude.ai', 'using', { zh: '长上下文 / 写作', en: 'Long context / Writing' }, { zh: 'Anthropic 的 AI 助手。', en: 'Anthropic AI assistant.' }, { zh: '适合长文、代码解释和复杂上下文处理。', en: 'Strong for long writing, code explanation, and complex context.' }, { zh: '我用它处理长文档、结构化思考和代码协作。', en: 'I use it for long docs, structured thinking, and code collaboration.' }),
    createTool('Claude Code', 'https://claude.ai/code', 'using', { zh: 'AI 编程助手', en: 'AI coding assistant' }, { zh: '面向代码库的 AI 编程工具。', en: 'An AI coding tool for codebases.' }, { zh: '适合在真实项目里读代码、改代码和跑验证。', en: 'Useful for reading, editing, and verifying real projects.' }, { zh: '我把它和 Codex / Cursor 一起用于前后端开发。', en: 'I use it alongside Codex and Cursor for product development.' }),
    createTool('Cursor', 'https://cursor.so', 'using', { zh: 'AI IDE', en: 'AI IDE' }, { zh: 'AI 原生代码编辑器。', en: 'An AI-native code editor.' }, { zh: '适合日常编辑、局部重构和快速问答。', en: 'Useful for daily editing, local refactors, and quick code Q&A.' }, { zh: '我把它作为开发时的交互式编辑环境。', en: 'I use it as an interactive editing environment while building.' }),
    createTool('InsForge', 'https://insforge.dev', 'using', { zh: 'AI 原生 BaaS', en: 'AI-native BaaS' }, { zh: '面向 AI Coding 的后端即服务。', en: 'Backend-as-a-Service designed for AI coding.' }, { zh: '能让 AI 直接创建数据库、函数、存储和鉴权。', en: 'It lets AI create database, functions, storage, and auth directly.' }, { zh: '我会把它和前端生成工具搭配，快速做完整 MVP。', en: 'I pair it with frontend generation tools for fast full-stack MVPs.' }),
    createTool('Bolt.new', 'https://bolt.new', 'using', { zh: '快速原型', en: 'Rapid prototyping' }, { zh: '浏览器里的 AI 应用构建工具。', en: 'A browser-based AI app builder.' }, { zh: '适合快速生成前端原型。', en: 'Useful for quick frontend prototypes.' }, { zh: '我用它测试界面方向和可行性。', en: 'I use it to test UI direction and feasibility.' }),
    createTool('Replit', 'https://replit.com', 'using', { zh: '在线 IDE + AI', en: 'Online IDE + AI' }, { zh: '在线开发环境。', en: 'An online development environment.' }, { zh: '适合轻量项目、演示和云端运行。', en: 'Useful for lightweight projects, demos, and cloud execution.' }, { zh: '我把它作为快速试验和分享代码的环境。', en: 'I use it for quick experiments and shareable coding environments.' }),
  ];

  const growthTools = [
    createTool('WeChat Official Platform', 'https://mp.weixin.qq.com/', 'using', { zh: '长文 / 私域', en: 'Long-form / Owned audience' }, { zh: '微信公众号后台。', en: 'WeChat Official Accounts platform.' }, { zh: '适合中文长内容、订阅关系和品牌资产沉淀。', en: 'Good for Chinese long-form content, subscriber relationships, and brand assets.' }, { zh: '我把它作为正式内容沉淀层。', en: 'I use it as the formal publishing layer.' }),
    createTool('Jike', 'https://okjike.com/', 'using', { zh: '兴趣社区', en: 'Interest community' }, { zh: '中文兴趣社交平台。', en: 'A Chinese interest-based social platform.' }, { zh: '适合观察真实讨论和轻量发布。', en: 'Useful for real community signals and lightweight posting.' }, { zh: '我用它捕捉灵感和观察 AI / 产品 / 创作者圈层。', en: 'I use it for inspiration and Chinese AI/product/creator discourse.' }),
    createTool('LinkedIn', 'https://www.linkedin.com/in/jiaqi-chen-b414582aa/', 'using', { zh: '职业社交', en: 'Professional network' }, { zh: '我的 LinkedIn 个人主页。', en: 'My LinkedIn profile.' }, { zh: '适合英文职业表达、国际合作和增长内容分发。', en: 'Useful for English professional identity, global collaboration, and growth content.' }, { zh: '我把它作为英文公开表达和合作入口。', en: 'I use it as an English-facing publishing and collaboration channel.' }),
    createTool('X / Twitter', 'https://x.com/jinchen_ai', 'using', { zh: '实时社交', en: 'Real-time social' }, { zh: '我的 X 账号。', en: 'My X account.' }, { zh: '适合公开构建、短观点和 AI 圈层连接。', en: 'Useful for build-in-public notes, short takes, and AI community connection.' }, { zh: '我用它发布更轻、更快的过程信号。', en: 'I use it for lighter, faster public signals.' }),
    createTool('Product Hunt', 'https://producthunt.com', 'using', { zh: '产品发布', en: 'Product launch' }, { zh: '全球产品发布平台。', en: 'A global product launch platform.' }, { zh: '适合观察新产品叙事和发布节奏。', en: 'Useful for product narratives and launch rhythm.' }, { zh: '我用它研究 launch 文案、定位和早期反馈。', en: 'I use it to study launch copy, positioning, and early feedback.' }),
    createTool('Medium', 'https://medium.com', 'using', { zh: '英文内容社区', en: 'English writing community' }, { zh: '英文长内容社区。', en: 'An English long-form writing community.' }, { zh: '适合观察英文技术与产品叙事。', en: 'Useful for English tech and product narratives.' }, { zh: '我把它作为英文内容观察源之一。', en: 'I use it as one English content reference source.' }),
  ];

  const infrastructureTools = [
    createTool('Proton Mail', 'https://proton.me/mail', 'core', { zh: '邮箱 / 隐私', en: 'Email / Privacy' }, { zh: '隐私优先的加密邮箱。', en: 'A privacy-first encrypted email service.' }, { zh: '适合更严肃、更国际化的邮箱身份。', en: 'Useful for a more serious global email identity.' }, { zh: '我用它处理重要账号、海外工具和正式沟通。', en: 'I use it for key accounts, global tools, and formal communication.' }),
    createTool('NetEase Mail', 'https://email.163.com/', 'using', { zh: '国内邮箱', en: 'China email' }, { zh: '网易邮箱。', en: 'NetEase Mail.' }, { zh: '适合国内服务注册和通知接收。', en: 'Useful for China-facing registrations and notifications.' }, { zh: '我把它和 Proton Mail 分工使用。', en: 'I separate it from Proton Mail by account context.' }),
    createTool('VVACard', 'https://www.vvacard.com/', 'using', { zh: '虚拟卡 / 支付', en: 'Virtual cards / Payments' }, { zh: '虚拟卡与支付相关工具。', en: 'A virtual-card and payment tool.' }, { zh: '适合海外 SaaS 订阅和账号支付。', en: 'Useful for global SaaS subscriptions and account payments.' }, { zh: '我把它作为出海工具使用基础设施。', en: 'I treat it as global-tool usage infrastructure.' }),
    createTool('SDKDNS', 'https://sdkdns.github.io/', 'using', { zh: 'DNS / 网络入口', en: 'DNS / Network entry' }, { zh: 'DNS 与网络访问相关入口。', en: 'A DNS and network-access entry point.' }, { zh: '适合连接、订阅和网络配置场景。', en: 'Useful for connection, subscription, and network configuration scenarios.' }, { zh: '我用它辅助确认网络入口可用性。', en: 'I use it to verify network entry availability.' }),
    createTool('PlinX', 'https://plinx.net/', 'using', { zh: '网络订阅', en: 'Network subscription' }, { zh: '网络服务订阅管理入口。', en: 'A network-service subscription portal.' }, { zh: '影响很多 AI、开发和海外产品工具的可用性。', en: 'It affects access to many AI, developer, and global product tools.' }, { zh: '我把它和 IP111、SDKDNS 一起管理。', en: 'I manage it together with IP111 and SDKDNS.' }),
  ];

  const savedTools = [
    createTool('AutoCoder', 'https://www.autocoder.cc/', 'saved', { zh: 'AI 应用构建', en: 'AI app building' }, { zh: 'AI 移动应用与网站构建平台。', en: 'An AI mobile app and website builder.' }, { zh: '想评估它从 idea 到产品的生成质量。', en: 'Saved to evaluate idea-to-product generation quality.' }, { zh: '重点看 MVP 速度、代码可维护性和部署链路。', en: 'Evaluation focus: MVP speed, maintainability, and deployment flow.' }),
    createTool('Verdent', 'https://www.verdent.ai/', 'saved', { zh: 'Agentic Coding', en: 'Agentic coding' }, { zh: '多 Agent 并行的软件构建平台。', en: 'A multi-agent software building platform.' }, { zh: '想评估多 Agent 是否真的减少项目管理成本。', en: 'Saved to evaluate whether parallel agents reduce project-management overhead.' }, { zh: '重点看上下文稳定性和与 Codex / Claude Code / Cursor 的分工。', en: 'Evaluation focus: context stability and fit next to Codex, Claude Code, and Cursor.' }),
    createTool('OpenClawMP', 'https://openclawmp.cc/', 'saved', { zh: 'Agent 市场 / Skills', en: 'Agent marketplace / Skills' }, { zh: 'Agent 技能、插件和实践资产市场入口。', en: 'A marketplace entry for agent skills, plugins, and practice assets.' }, { zh: '想评估它能否沉淀个人 Agent 工具箱。', en: 'Saved to evaluate whether it can become a personal agent toolkit.' }, { zh: '重点看资产质量、安装体验和现有 skill 体系互补性。', en: 'Evaluation focus: asset quality, install experience, and skill-system fit.' }),
  ];

  const sections: ToolSection[] = [
    {
      id: 'build-ai',
      title: { zh: 'Build & AI', en: 'Build & AI' },
      desc: { zh: '把想法变成原型、代码、Agent 和模型能力的工具。', en: 'Tools for turning ideas into prototypes, code, agents, and model-powered systems.' },
      tools: buildTools,
    },
    {
      id: 'growth-distribution',
      title: { zh: 'Growth & Distribution', en: 'Growth & Distribution' },
      desc: { zh: '内容分发、社交信号、SEO 和出海增长的工作台。', en: 'The workbench for content distribution, social signals, SEO, and go-global growth.' },
      tools: growthTools,
    },
    {
      id: 'infrastructure',
      title: { zh: 'Infrastructure', en: 'Infrastructure' },
      desc: { zh: '账号、邮箱、支付、网络和 API 这些不显眼但很关键的底座。', en: 'Accounts, email, payments, network access, and API foundations that quietly keep work moving.' },
      tools: infrastructureTools,
    },
    {
      id: 'saved',
      title: { zh: 'Saved for Evaluation', en: 'Saved for Evaluation' },
      desc: { zh: '先收藏，等实际试用后再决定是否进入核心工作台。', en: 'Bookmarked for later testing before they graduate into the core stack.' },
      tools: savedTools,
    },
  ];

  const myTools: MyTool[] = [
    {
      name: 'Desktop Sticky Card',
      url: 'https://github.com/ChenJinCloud/desktop-sticky-card',
      desc: {
        zh: '桌面置顶任务卡片，和 Claude Code 联动写入待办。',
        en: 'Always-on-top desktop task card, syncs TODOs from Claude Code.',
      },
      status: 'live',
    },
  ];

  const sources = [
    { name: 'Hacker News', url: 'https://news.ycombinator.com', desc: { zh: '科技与创业新闻', en: 'Tech and startup news' } },
    { name: 'The Verge', url: 'https://theverge.com', desc: { zh: '科技与文化', en: 'Tech and culture' } },
    { name: 'Ars Technica', url: 'https://arstechnica.com', desc: { zh: '深度技术分析', en: 'In-depth tech analysis' } },
    { name: 'MIT Tech Review', url: 'https://technologyreview.com', desc: { zh: 'MIT 技术评论', en: 'MIT Technology Review' } },
    { name: 'a16z', url: 'https://a16z.com', desc: { zh: '风投与创新洞察', en: 'VC and innovation insights' } },
    { name: '少数派', url: 'https://sspai.com', desc: { zh: '高质量数字生活', en: 'Quality digital life' } },
  ];

  const renderToolCard = (tool: StackTool, featured = false) => (
    <button
      key={tool.name}
      onClick={() => setSelectedTool(tool)}
      className={`group flex min-h-[150px] flex-col justify-between rounded-lg border p-4 text-left transition-all ${
        featured
          ? 'border-primary/25 hover:border-primary/55 hover:bg-primary/5'
          : 'border-border hover:border-foreground/30 hover:bg-muted/30'
      }`}
    >
      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className={`text-[11px] font-medium uppercase tracking-wider ${featured ? 'text-primary/75' : 'text-muted-foreground'}`}>
            {t(isZh, tool.role)}
          </span>
          <span className={`rounded-full px-2 py-0.5 text-[10px] ${tool.status === 'saved' ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'}`}>
            {statusLabel(tool.status, isZh)}
          </span>
        </div>
        <h3 className="text-sm font-medium text-foreground">{tool.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t(isZh, tool.why)}</p>
      </div>
      <div className={`mt-4 flex items-center gap-1.5 text-xs ${featured ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}>
        {isZh ? '查看工作流角色' : 'View workflow role'}
        <ExternalLink className="h-3.5 w-3.5" />
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="px-6 pb-20 pt-32 md:px-12">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {isZh ? '返回首页' : 'Back to Home'}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-serif text-4xl font-light md:text-5xl"
          >
            {isZh ? '我的工作台地图' : 'My Workbench Map'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 max-w-2xl text-muted-foreground"
          >
            {isZh
              ? '不是工具榜单，而是我如何构建、增长、分发、管理基础设施的个人操作系统。'
              : 'Not a tool directory, but a map of how I build, grow, distribute, and maintain my personal operating system.'}
          </motion.p>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mb-16"
          >
            <div className="mb-4 border-b border-primary/30 pb-3">
              <h2 className="text-lg font-medium text-primary">{isZh ? 'Core Stack / 核心工作台' : 'Core Stack'}</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                {isZh ? '我当前最常使用、最能解释工作方式的高价值工具。' : 'The high-value tools that best explain how I currently work.'}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {coreTools.map((tool) => renderToolCard(tool, true))}
            </div>
          </motion.section>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 + index * 0.04 }}
              >
                <div className="mb-4 border-b border-border pb-3">
                  <h2 className="text-lg font-medium text-foreground">{t(isZh, section.title)}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">{t(isZh, section.desc)}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {section.tools.map((tool) => renderToolCard(tool))}
                </div>
              </motion.section>
            ))}
          </div>

          {myTools.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="mb-4 border-b border-primary/30 pb-3">
                <h2 className="text-lg font-medium text-primary">{isZh ? 'Tools I Build / 我开发的工具' : 'Tools I Build'}</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  {isZh ? '我自己做出来，并准备继续迭代的小工具。' : 'Small tools I have built and intend to keep iterating.'}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {myTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-primary/20 p-4 text-left transition-all hover:border-primary/50 hover:bg-primary/5"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-foreground">{tool.name}</h3>
                        {tool.status === 'live' && (
                          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                            Live
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{t(isZh, tool.desc)}</p>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-primary/50 transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </motion.section>
          )}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="mb-4 border-b border-border pb-3">
              <h2 className="text-lg font-medium text-foreground">{isZh ? 'Sources I Follow / 我关注的信息源' : 'Sources I Follow'}</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                {isZh ? '只保留真正的信息源，不再混入社交渠道和生产工具。' : 'Actual information sources, separated from social channels and production tools.'}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {sources.map((source, i) => (
                <motion.a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group flex items-center justify-between rounded-lg border border-border p-5 transition-colors hover:border-foreground/30"
                >
                  <div>
                    <h3 className="font-medium text-foreground">{source.name}</h3>
                    <p className="text-sm text-muted-foreground">{t(isZh, source.desc)}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />

      <Dialog open={!!selectedTool} onOpenChange={(open) => !open && setSelectedTool(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between pr-6">
              <span className="font-serif text-xl">{selectedTool?.name}</span>
            </DialogTitle>
          </DialogHeader>

          {selectedTool && (
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground">{t(isZh, selectedTool.what)}</p>

              <div>
                <h4 className="mb-2 text-sm font-medium text-foreground">{isZh ? '为什么放在这里' : 'Why it belongs here'}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(isZh, selectedTool.why)}</p>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-medium text-foreground">{isZh ? '工作流角色' : 'Role in my workflow'}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{t(isZh, selectedTool.workflow)}</p>
              </div>

              <a
                href={selectedTool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
              >
                {isZh ? '访问网站' : 'Visit Website'}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Stack;
