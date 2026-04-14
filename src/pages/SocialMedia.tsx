import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

// Simple SVG icons for each platform
const WeChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088v-.001c-.135-.01-.27-.023-.406-.033zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/>
  </svg>
);

const XiaohongshuIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14.5h-7a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v8a.5.5 0 01-.5.5zm-6-7v6h5v-6h-5z"/>
  </svg>
);

const JikeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <circle cx="12" cy="12" r="10"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">J</text>
  </svg>
);

const ZhihuIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.168H6.394c-.191.744-.349 1.434-.47 2.078h4.188c.498.043.357 1.238.357 1.238H5.573c-.156.54-.281 1.07-.374 1.59l3.013-.014s-.071.263-.081.68c-.011.418-.252 1.132-.41 1.593l-3.056.132s.041.263-.094 1.109c-.135.846-.292 2.12-.292 2.12s1.276-.04 2.06.04c.784.082 2.015.25 3.163.462 1.146.212 1.684.462 1.684.462s-.273-.462-.399-1.311c-.128-.849-.103-1.188-.103-1.188l.795-.017s-.068 1.006.034 1.587c.103.58.189 1.032.503 1.621.314.59.614.936.614.936s1.023-.36 1.948-.84c.924-.479 1.723-.814 1.953-.903.23-.089-.062-.488-.062-.488s-.685.174-1.309.379c-.623.207-.78.189-.78.189s-.24-.234-.37-.685c-.131-.451-.097-.76-.097-.76h3.39l.262-.16s.041-.377-.17-.818c-.213-.44-.41-.52-.41-.52l-3.234.01s.067-.377.114-.805c.046-.428.093-.866.093-.866l3.258-.04s.072-.387-.17-.895c-.24-.508-.47-.576-.47-.576l-2.529.01s.04-.262.15-.704c.11-.44.22-.823.22-.823h3.22s.138-.387-.034-.904c-.17-.52-.407-.651-.407-.651H14.67s.15-.445.293-.946c.141-.502.24-.837.24-.837s-.612.154-1.15.168c-.538.015-.695-.093-.695-.093s-.2.396-.434.963c-.234.567-.493 1.212-.704 1.667H9.87l.215-.57c.24-.61.472-1.27.472-1.27s-.37-.01-.892.01c-.523.017-.692-.039-.692-.039z"/>
  </svg>
);

const DouyinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const VideoChannelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
  </svg>
);

const SocialMediaContent = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const profiles = [
    {
      name: isZh ? '微信公众号' : 'WeChat Official',
      handle: '@YourHandle',
      desc: isZh ? '深度内容分享，每周更新' : 'In-depth content, weekly updates',
      url: '#',
      color: 'bg-green-500/10 border-green-500/20 text-green-600',
      Icon: WeChatIcon,
    },
    {
      name: isZh ? '小红书' : 'Xiaohongshu',
      handle: '@YourHandle',
      desc: isZh ? '生活方式与效率心得' : 'Lifestyle & productivity tips',
      url: 'https://xiaohongshu.com',
      color: 'bg-red-500/10 border-red-500/20 text-red-500',
      Icon: XiaohongshuIcon,
    },
    {
      name: isZh ? '即刻' : 'Jike',
      handle: '@YourHandle',
      desc: isZh ? '日常想法与即时互动' : 'Daily thoughts & interactions',
      url: 'https://okjike.com',
      color: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-600',
      Icon: JikeIcon,
    },
    {
      name: isZh ? '知乎' : 'Zhihu',
      handle: '@YourHandle',
      desc: isZh ? '专业问答与长文分享' : 'Q&A and long-form articles',
      url: 'https://zhihu.com',
      color: 'bg-blue-500/10 border-blue-500/20 text-blue-600',
      Icon: ZhihuIcon,
    },
    {
      name: isZh ? '视频号' : 'WeChat Channels',
      handle: '@YourHandle',
      desc: isZh ? '视频内容创作' : 'Video content creation',
      url: '#',
      color: 'bg-green-500/10 border-green-500/20 text-green-600',
      Icon: VideoChannelIcon,
    },
    {
      name: isZh ? '抖音' : 'Douyin',
      handle: '@YourHandle',
      desc: isZh ? '短视频与直播' : 'Short videos & livestreams',
      url: 'https://douyin.com',
      color: 'bg-pink-500/10 border-pink-500/20 text-pink-600',
      Icon: DouyinIcon,
    },
    {
      name: 'Twitter / X',
      handle: '@YourHandle',
      desc: isZh ? '海外动态与想法' : 'Global updates & thoughts',
      url: 'https://twitter.com',
      color: 'bg-slate-500/10 border-slate-500/20 text-slate-700 dark:text-slate-300',
      Icon: TwitterIcon,
    },
    {
      name: 'YouTube',
      handle: '@YourHandle',
      desc: isZh ? '长视频与教程' : 'Long-form videos & tutorials',
      url: 'https://youtube.com',
      color: 'bg-red-500/10 border-red-500/20 text-red-600',
      Icon: YouTubeIcon,
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
            {isZh ? '社媒矩阵' : 'Social Media'}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12"
          >
            {isZh ? '在各平台找到我，一起交流成长' : 'Find me on various platforms, let\'s connect and grow together'}
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4">
            {profiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className={`group flex items-center gap-4 p-5 border rounded-xl hover:scale-[1.02] transition-all ${profile.color}`}
              >
                <div className="flex-shrink-0">
                  <profile.Icon />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground">{profile.handle}</p>
                  <p className="text-xs text-muted-foreground mt-1">{profile.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SocialMediaContent;
