import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Tool {
  name: string;
  url: string;
  desc: string;
  intro?: { zh: string; en: string };
  bestPractice?: { zh: string; en: string };
}

interface MyTool {
  name: string;
  url: string;
  desc: string;
  status?: 'live' | 'beta' | 'coming';
}

const ToolsContent = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  // 我开发的小工具
  const myTools: MyTool[] = [
    {
      name: 'Desktop Sticky Card',
      url: 'https://github.com/ChenJinCloud/desktop-sticky-card',
      desc: isZh
        ? '桌面置顶任务卡片，和 Claude Code 联动写入待办'
        : 'Always-on-top desktop task card, syncs TODOs from Claude Code',
      status: 'live',
    },
  ];

  const categories = [
    {
      title: isZh ? 'AI 对话' : 'AI Chat',
      tools: [
        { 
          name: 'ChatGPT', 
          url: 'https://chat.openai.com', 
          desc: 'OpenAI GPT-4o',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Gemini', 
          url: 'https://gemini.google.com', 
          desc: 'Google AI',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Grok', 
          url: 'https://grok.x.ai', 
          desc: 'xAI',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Deepseek', 
          url: 'https://chat.deepseek.com', 
          desc: isZh ? '深度求索' : 'Deep Reasoning',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Kimi', 
          url: 'https://kimi.moonshot.cn', 
          desc: isZh ? '月之暗面' : 'Moonshot AI',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
      ] as Tool[],
    },
    {
      title: isZh ? 'AI 编程' : 'AI Coding',
      tools: [
        { 
          name: 'Cursor', 
          url: 'https://cursor.so', 
          desc: isZh ? 'AI 代码编辑器' : 'AI Code Editor',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Claude Code', 
          url: 'https://claude.ai', 
          desc: isZh ? 'Anthropic 编程助手' : 'Anthropic Coding',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Codebuddy', 
          url: 'https://codebuddy.ai', 
          desc: isZh ? 'AI 编程伙伴' : 'AI Pair Programmer',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Trae', 
          url: 'https://trae.ai', 
          desc: isZh ? '字节 AI IDE' : 'ByteDance AI IDE',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Kiro', 
          url: 'https://kiro.dev', 
          desc: 'AWS AI IDE',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Qodo', 
          url: 'https://qodo.ai', 
          desc: isZh ? 'AI 代码质量' : 'AI Code Quality',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
      ] as Tool[],
    },
    {
      title: isZh ? 'AI 应用构建' : 'AI App Builders',
      tools: [
        {
          name: 'InsForge',
          url: 'https://insforge.dev',
          desc: isZh ? 'AI 原生 BaaS，一键上后端' : 'AI-native BaaS, backend in one shot',
          intro: {
            zh: '面向 AI Coding 的 Backend-as-a-Service：数据库、认证、存储、Edge Functions 开箱即用，通过 MCP 让 Claude / Cursor 等 AI 直接生成并部署后端。',
            en: 'AI-native Backend-as-a-Service: database, auth, storage, and Edge Functions out of the box. Exposes an MCP so Claude / Cursor can generate and deploy backends directly.',
          },
          bestPractice: {
            zh: '我个人推荐：前端用 Lovable/Bolt 生成，后端直接让 Claude Code 通过 InsForge MCP 建表、写函数、配密钥——真·从零到上线一条龙。',
            en: 'My pick: pair it with Lovable/Bolt for the frontend and let Claude Code drive InsForge MCP to create tables, write functions, and manage secrets — zero-to-live in one flow.',
          },
        },
        {
          name: 'Lovable',
          url: 'https://lovable.dev', 
          desc: isZh ? 'AI 全栈开发' : 'AI Full-stack Dev',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Bolt.new', 
          url: 'https://bolt.new', 
          desc: isZh ? '快速原型构建' : 'Rapid Prototyping',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Replit', 
          url: 'https://replit.com', 
          desc: isZh ? '在线 IDE + AI' : 'Online IDE + AI',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Antigravity', 
          url: 'https://antigravity.dev', 
          desc: isZh ? 'AI 应用生成' : 'AI App Generation',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
      ] as Tool[],
    },
    {
      title: isZh ? 'AI 创意生成' : 'AI Creative',
      tools: [
        { 
          name: 'Kling AI', 
          url: 'https://klingai.com', 
          desc: isZh ? '快手 AI 视频' : 'Kuaishou AI Video',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Dreamina', 
          url: 'https://dreamina.capcut.com', 
          desc: isZh ? '字节 AI 图像' : 'ByteDance AI Image',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'IMA', 
          url: 'https://ima.art', 
          desc: isZh ? 'AI 艺术创作' : 'AI Art Creation',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
      ] as Tool[],
    },
    {
      title: isZh ? '效率工具' : 'Productivity',
      tools: [
        { 
          name: 'Notion', 
          url: 'https://notion.so', 
          desc: isZh ? '全能笔记协作' : 'All-in-one Workspace',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Figma', 
          url: 'https://figma.com', 
          desc: isZh ? '协作设计' : 'Collaborative Design',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'NotebookLM', 
          url: 'https://notebooklm.google.com', 
          desc: isZh ? 'Google AI 笔记' : 'Google AI Notes',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'vvcard', 
          url: 'https://vvcard.me', 
          desc: isZh ? '数字名片' : 'Digital Business Card',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
      ] as Tool[],
    },
    {
      title: isZh ? '渠道矩阵 · 海外' : 'Channels · Global',
      tools: [
        { 
          name: 'Twitter / X', 
          url: 'https://twitter.com', 
          desc: isZh ? '全球社交媒体' : 'Global Social Media',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'YouTube', 
          url: 'https://youtube.com', 
          desc: isZh ? '视频内容平台' : 'Video Platform',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'LinkedIn', 
          url: 'https://linkedin.com', 
          desc: isZh ? '职业社交网络' : 'Professional Network',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Medium', 
          url: 'https://medium.com', 
          desc: isZh ? '优质内容社区' : 'Quality Content Community',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: 'Product Hunt', 
          url: 'https://producthunt.com', 
          desc: isZh ? '产品发布平台' : 'Product Launch Platform',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
      ] as Tool[],
    },
    {
      title: isZh ? '渠道矩阵 · 国内' : 'Channels · China',
      tools: [
        { 
          name: isZh ? '微信公众号' : 'WeChat Official', 
          url: 'https://mp.weixin.qq.com', 
          desc: isZh ? '内容订阅平台' : 'Content Subscription',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: isZh ? '小红书' : 'Xiaohongshu', 
          url: 'https://xiaohongshu.com', 
          desc: isZh ? '生活方式社区' : 'Lifestyle Community',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: isZh ? '即刻' : 'Jike', 
          url: 'https://okjike.com', 
          desc: isZh ? '兴趣社交' : 'Interest-based Social',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: isZh ? '知乎' : 'Zhihu', 
          url: 'https://zhihu.com', 
          desc: isZh ? '知识问答社区' : 'Q&A Community',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: isZh ? '抖音' : 'Douyin', 
          url: 'https://douyin.com', 
          desc: isZh ? '短视频平台' : 'Short Video Platform',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
        { 
          name: isZh ? 'B站' : 'Bilibili', 
          url: 'https://bilibili.com', 
          desc: isZh ? '视频弹幕社区' : 'Video Community',
          intro: { zh: '', en: '' },
          bestPractice: { zh: '', en: '' },
        },
      ] as Tool[],
    },
  ];

  const hasContent = (tool: Tool | null) => {
    if (!tool) return false;
    const intro = isZh ? tool.intro?.zh : tool.intro?.en;
    const practice = isZh ? tool.bestPractice?.zh : tool.bestPractice?.en;
    return (intro && intro.trim()) || (practice && practice.trim());
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {isZh ? '返回首页' : 'Back to Home'}
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-light mb-6"
          >
            {isZh ? '提效工具站' : 'Productivity Tools'}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12"
          >
            {isZh ? '精选的效率工具，助力你的工作与创作' : 'Curated tools to boost your productivity and creativity'}
          </motion.p>

          {/* 我开发的小工具 */}
          {myTools.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-16"
            >
              <h2 className="text-lg font-medium text-primary mb-4 pb-2 border-b border-primary/30">
                {isZh ? '🛠️ 我开发的小工具' : '🛠️ My Tools'}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {myTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 border border-primary/20 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all text-left"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-foreground text-sm">{tool.name}</h3>
                        {tool.status === 'beta' && (
                          <span className="px-1.5 py-0.5 text-[10px] font-medium bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded">
                            Beta
                          </span>
                        )}
                        {tool.status === 'coming' && (
                          <span className="px-1.5 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground rounded">
                            {isZh ? '开发中' : 'Coming'}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{tool.desc}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </motion.section>
          )}

          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + catIndex * 0.1 }}
              >
                <h2 className="text-lg font-medium text-foreground mb-4 pb-2 border-b border-border">
                  {category.title}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.tools.map((tool) => (
                    <button
                      key={tool.name}
                      onClick={() => setSelectedTool(tool)}
                      className="group flex items-center justify-between p-4 border border-border rounded-lg hover:border-foreground/30 hover:bg-muted/30 transition-all text-left"
                    >
                      <div>
                        <h3 className="font-medium text-foreground text-sm">{tool.name}</h3>
                        <p className="text-xs text-muted-foreground">{tool.desc}</p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Tool Detail Dialog */}
      <Dialog open={!!selectedTool} onOpenChange={(open) => !open && setSelectedTool(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between pr-6">
              <span className="font-serif text-xl">{selectedTool?.name}</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">{selectedTool?.desc}</p>
            
            {hasContent(selectedTool!) ? (
              <>
                {((isZh ? selectedTool?.intro?.zh : selectedTool?.intro?.en) || '').trim() && (
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      {isZh ? '工具介绍' : 'Introduction'}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isZh ? selectedTool?.intro?.zh : selectedTool?.intro?.en}
                    </p>
                  </div>
                )}
                
                {((isZh ? selectedTool?.bestPractice?.zh : selectedTool?.bestPractice?.en) || '').trim() && (
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      {isZh ? '我的最佳实践' : 'My Best Practices'}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isZh ? selectedTool?.bestPractice?.zh : selectedTool?.bestPractice?.en}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="py-4 text-center">
                <p className="text-sm text-muted-foreground italic">
                  {isZh ? '暂无详细介绍，敬请期待...' : 'Detailed introduction coming soon...'}
                </p>
              </div>
            )}
            
            <a
              href={selectedTool?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              {isZh ? '访问官网' : 'Visit Website'}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ToolsContent;
