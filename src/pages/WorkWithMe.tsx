import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import Heading from '@/components/Heading';
import { motion } from 'framer-motion';
import { Coffee, MessageCircle, Briefcase, Mail, ExternalLink } from 'lucide-react';

const WorkWithMe = () => {
  const { t } = useLanguage();
  const wwm = t.workWithMe;

  const services = [
    { icon: MessageCircle, title: wwm.services[0].title, desc: wwm.services[0].desc },
    { icon: Briefcase, title: wwm.services[1].title, desc: wwm.services[1].desc },
    { icon: Mail, title: wwm.services[2].title, desc: wwm.services[2].desc },
  ];

  const contactMethods = [
    {
      name: wwm.contactMethods.wechat.name,
      value: wwm.contactMethods.wechat.value,
      action: wwm.contactMethods.wechat.action,
      qrcode: true,
    },
    {
      name: wwm.contactMethods.email.name,
      value: 'jiaqichen6252@gmail.com',
      action: wwm.contactMethods.email.action,
      href: 'mailto:jiaqichen6252@gmail.com',
    },
  ];

  return (
    <PageLayout back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <Heading className="mb-6">{wwm.title}</Heading>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-16 max-w-2xl"
          >
            {wwm.intro}
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
                {wwm.sponsor.heading}
              </h2>
            </div>

            <div className="p-8 border border-border rounded-lg bg-muted/20">
              <p className="text-muted-foreground mb-6">
                {wwm.sponsor.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px] p-6 border border-border rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {wwm.sponsor.wechatLabel}
                  </p>
                  <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      {wwm.sponsor.qrPlaceholder}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-[200px] p-6 border border-border rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {wwm.sponsor.alipayLabel}
                  </p>
                  <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                      {wwm.sponsor.qrPlaceholder}
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
              {wwm.servicesHeading}
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
              {wwm.contactHeading}
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
                        {wwm.sponsor.qrPlaceholder}
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
                {wwm.contactNote}
              </p>
            </div>
          </motion.section>
    </PageLayout>
  );
};

export default WorkWithMe;
