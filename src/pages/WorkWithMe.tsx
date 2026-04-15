import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Coffee, MessageCircle, Briefcase, Mail, ExternalLink } from 'lucide-react';

const WorkWithMe = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const services = [
    {
      icon: MessageCircle,
      title: isZh ? '1v1 咨询' : '1-on-1 Consulting',
      desc: isZh
        ? '个人成长、AI 工具使用、AI 编程入门、职业转型——深度交流 + 可执行的下一步'
        : 'Personal growth, AI tooling, AI coding onboarding, career transition — deep conversation with concrete next steps',
    },
    {
      icon: Briefcase,
      title: isZh ? '增长合作 / 项目联合' : 'Growth Engagement / Project Collab',
      desc: isZh
        ? 'AI 原生产品的增长策略、内容矩阵、冷启动、分发设计；精选项目的联合创作'
        : 'Growth strategy for AI-native products, content matrix, cold start, distribution design; select projects for joint creation',
    },
    {
      icon: Mail,
      title: isZh ? '内容授权 / 分享嘉宾' : 'Content Licensing / Speaking',
      desc: isZh
        ? '文章转载、内容引用、社群/播客/公开活动的分享邀请'
        : 'Article reprinting, content citation, community / podcast / public-event speaking invitations',
    },
  ];

  const contactMethods = [
    {
      name: isZh ? '微信' : 'WeChat',
      value: isZh ? '添加微信交流' : 'Add WeChat to connect',
      action: isZh ? '扫码添加' : 'Scan to add',
      qrcode: true,
    },
    {
      name: isZh ? '邮箱' : 'Email',
      value: 'hello@chenjin.io',
      action: isZh ? '发送邮件' : 'Send email',
      href: 'mailto:hello@chenjin.io',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {isZh ? '返回首页' : 'Back to Home'}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-light mb-6"
          >
            {isZh ? '与我合作' : 'Work With Me'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-16 max-w-2xl"
          >
            {isZh
              ? '你可以通过赞助支持我持续输出，也可以把我请进你的项目。下面是我当前接的合作类型和联系方式。'
              : "Sponsor my continued output, or bring me into your project. Here's what I currently take on and how to reach me."}
          </motion.p>

          {/* 赞助支持 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-5 h-5 text-foreground" />
              <h2 className="text-xl font-medium text-foreground">
                {isZh ? '赞助我的持续输出' : 'Sponsor My Ongoing Work'}
              </h2>
            </div>

            <div className="p-8 border border-border rounded-lg bg-muted/20">
              <p className="text-muted-foreground mb-6">
                {isZh
                  ? '你的赞助会直接投入到内容创作、工具研究和开源小工具的开发上。每一笔都公开去向。'
                  : 'Sponsorships go directly into content creation, tool research, and open-source side projects. Every dollar is publicly accounted for.'}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px] p-6 border border-border rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {isZh ? '微信赞赏' : 'WeChat Pay'}
                  </p>
                  <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      {isZh ? '二维码待添加' : 'QR Code TBD'}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-[200px] p-6 border border-border rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {isZh ? '支付宝' : 'Alipay'}
                  </p>
                  <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      {isZh ? '二维码待添加' : 'QR Code TBD'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 合作类型 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-xl font-medium text-foreground mb-6">
              {isZh ? '合作类型' : 'Engagement Types'}
            </h2>

            <div className="grid gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-lg hover:border-foreground/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <service.icon className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 联系方式 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-medium text-foreground mb-6">
              {isZh ? '联系我' : 'Get in Touch'}
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-lg"
                >
                  <h3 className="font-medium text-foreground mb-2">{method.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.value}</p>

                  {method.qrcode ? (
                    <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">
                        {isZh ? '二维码待添加' : 'QR Code TBD'}
                      </span>
                    </div>
                  ) : method.href ? (
                    <a
                      href={method.href}
                      className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {method.action}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 border border-border rounded-lg bg-muted/20">
              <p className="text-sm text-muted-foreground">
                {isZh
                  ? '联系时简短说一下你是谁、想做什么、预期时间线——能帮我更快给出有用的回应。'
                  : "When you reach out, drop a line about who you are, what you're trying to do, and rough timeline — helps me respond usefully faster."}
              </p>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkWithMe;
