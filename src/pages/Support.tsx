import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Coffee, MessageCircle, Briefcase, Mail, ExternalLink } from 'lucide-react';

const SupportContent = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const services = [
    {
      icon: MessageCircle,
      title: isZh ? '1v1 咨询' : '1-on-1 Consulting',
      desc: isZh ? '针对个人成长、AI工具使用、职业规划等问题的深度交流' : 'In-depth discussion on personal growth, AI tools, career planning',
      details: isZh ? '' : '',
    },
    {
      icon: Briefcase,
      title: isZh ? '项目合作' : 'Project Collaboration',
      desc: isZh ? '内容创作、产品设计、AI应用落地等方面的合作' : 'Content creation, product design, AI application implementation',
      details: isZh ? '' : '',
    },
    {
      icon: Mail,
      title: isZh ? '内容授权' : 'Content Licensing',
      desc: isZh ? '文章转载、内容引用等授权事宜' : 'Article reprinting, content citation and licensing',
      details: isZh ? '' : '',
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
      value: 'contact@example.com',
      action: isZh ? '发送邮件' : 'Send email',
      href: 'mailto:contact@example.com',
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
            {isZh ? '支持与合作' : 'Support & Collaborate'}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-16"
          >
            {isZh 
              ? '如果我的内容对你有所帮助，欢迎以各种方式支持我继续创作' 
              : "If my content has been helpful, you're welcome to support my continued creation"}
          </motion.p>

          {/* 打赏支持 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-5 h-5 text-foreground" />
              <h2 className="text-xl font-medium text-foreground">
                {isZh ? '请我喝杯咖啡' : 'Buy Me a Coffee'}
              </h2>
            </div>
            
            <div className="p-8 border border-border rounded-lg bg-muted/20">
              <p className="text-muted-foreground mb-6">
                {isZh 
                  ? '你的支持是我持续创作的动力。每一份打赏都会被用于内容创作和工具研究。' 
                  : 'Your support fuels my continued creation. Every contribution goes toward content creation and tool research.'}
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

          {/* 相关服务 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-xl font-medium text-foreground mb-6">
              {isZh ? '相关服务' : 'Services'}
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
                      {service.details && (
                        <p className="text-sm text-muted-foreground mt-2">{service.details}</p>
                      )}
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
              {isZh ? '联系我' : 'Contact Me'}
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
                  ? '💡 提示：为了更高效的沟通，建议在联系时简要说明你的需求和背景。' 
                  : '💡 Tip: For more efficient communication, please briefly describe your needs and background when reaching out.'}
              </p>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportContent;
