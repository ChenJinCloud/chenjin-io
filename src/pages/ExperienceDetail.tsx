import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Building2, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  period: { zh: string; en: string };
  title: { zh: string; en: string };
  subtitle: { zh: string; en: string };
  description: { zh: string; en: string };
  highlights: { zh: string[]; en: string[] };
}

const experiences: ExperienceItem[] = [
  {
    id: 'deepwisdom',
    type: 'work',
    period: { zh: '2025.10', en: '2025.10' },
    title: { zh: '产品运营', en: 'Product Operations' },
    subtitle: { zh: 'Deepwisdom (MetaGPT) · MGX/Atoms', en: 'Deepwisdom (MetaGPT) · MGX/Atoms' },
    description: { zh: '', en: '' },
    highlights: { zh: [], en: [] },
  },
  {
    id: 'tour-leader',
    type: 'work',
    period: { zh: '2025.06', en: '2025.06' },
    title: { zh: '领队', en: 'Tour Leader' },
    subtitle: { zh: '高端定制长线入境游25人团', en: 'High-end Custom Inbound Tour · 25 pax' },
    description: { zh: '', en: '' },
    highlights: { zh: [], en: [] },
  },
  {
    id: '706-community',
    type: 'work',
    period: { zh: '2025.03-04', en: '2025.03-04' },
    title: { zh: '社区运营', en: 'Community Operations' },
    subtitle: { zh: '706数字游民社区 · 杭州良渚', en: '706 Digital Nomad Community · Hangzhou' },
    description: { zh: '', en: '' },
    highlights: { zh: [], en: [] },
  },
  {
    id: 'tutor',
    type: 'work',
    period: { zh: '2024.04-06', en: '2024.04-06' },
    title: { zh: '独立家教', en: 'Independent Tutor' },
    subtitle: { zh: '系统定制家教服务', en: 'Custom Tutoring Services' },
    description: { zh: '', en: '' },
    highlights: { zh: [], en: [] },
  },
  {
    id: 'suihe',
    type: 'work',
    period: { zh: '2024.01-03', en: '2024.01-03' },
    title: { zh: '运营实习生', en: 'Operations Intern' },
    subtitle: { zh: '广东穗和实业控股有限公司', en: 'Guangdong Suihe Industrial Holdings' },
    description: { zh: '', en: '' },
    highlights: { zh: [], en: [] },
  },
  {
    id: '12355',
    type: 'work',
    period: { zh: '2023.07至今', en: '2023.07-now' },
    title: { zh: '线上心理咨询师', en: 'Online Counselor' },
    subtitle: { zh: '广东省12355青少年综合服务平台', en: 'Guangdong 12355 Youth Service Platform' },
    description: { zh: '', en: '' },
    highlights: { zh: [], en: [] },
  },
  {
    id: 'gduf',
    type: 'education',
    period: { zh: '2021-2025', en: '2021-2025' },
    title: { zh: '广东金融学院', en: 'Guangdong University of Finance' },
    subtitle: { zh: '社会工作专业', en: 'Social Work' },
    description: { zh: '', en: '' },
    highlights: { zh: [], en: [] },
  },
  {
    id: 'gz6',
    type: 'education',
    period: { zh: '2018-2021', en: '2018-2021' },
    title: { zh: '广州市第六中学', en: 'Guangzhou No.6 Middle School' },
    subtitle: { zh: '', en: '' },
    description: { zh: '', en: '' },
    highlights: { zh: [], en: [] },
  },
  {
    id: 'yujing',
    type: 'education',
    period: { zh: '2015-2018', en: '2015-2018' },
    title: { zh: '广州市天河区御景小学', en: 'Yujing Primary School' },
    subtitle: { zh: '', en: '' },
    description: { zh: '', en: '' },
    highlights: { zh: [], en: [] },
  },
];

const ExperienceDetailContent = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    return <Navigate to="/" replace />;
  }

  const hasContent = 
    (isZh ? experience.description.zh : experience.description.en).trim() ||
    (isZh ? experience.highlights.zh : experience.highlights.en).length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/#experience"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {isZh ? '返回首页' : 'Back to Home'}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              {experience.type === 'work' ? (
                <Building2 className="w-4 h-4" />
              ) : (
                <GraduationCap className="w-4 h-4" />
              )}
              <span className="text-sm">
                {experience.type === 'work'
                  ? isZh
                    ? '工作经历'
                    : 'Work Experience'
                  : isZh
                  ? '教育背景'
                  : 'Education'}
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-light mb-4">
              {isZh ? experience.title.zh : experience.title.en}
            </h1>

            <p className="text-lg text-muted-foreground mb-4">
              {isZh ? experience.subtitle.zh : experience.subtitle.en}
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {isZh ? experience.period.zh : experience.period.en}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
          >
            {hasContent ? (
              <>
                {(isZh ? experience.description.zh : experience.description.en).trim() && (
                  <div>
                    <h2 className="text-lg font-medium text-foreground mb-4">
                      {isZh ? '详细描述' : 'Description'}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {isZh ? experience.description.zh : experience.description.en}
                    </p>
                  </div>
                )}

                {(isZh ? experience.highlights.zh : experience.highlights.en).length > 0 && (
                  <div>
                    <h2 className="text-lg font-medium text-foreground mb-4">
                      {isZh ? '主要成果' : 'Key Highlights'}
                    </h2>
                    <ul className="space-y-3">
                      {(isZh ? experience.highlights.zh : experience.highlights.en).map(
                        (highlight, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="text-foreground mt-1.5">•</span>
                            <span>{highlight}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <div className="py-12 text-center border border-border rounded-lg bg-muted/20">
                <p className="text-muted-foreground italic">
                  {isZh ? '详细内容正在整理中，敬请期待...' : 'Detailed content coming soon...'}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExperienceDetailContent;
