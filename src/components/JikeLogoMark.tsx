type JikeLogoMarkProps = {
  compact?: boolean;
  className?: string;
};

const OFFICIAL_JIKE_LOGO = '/brand/jike-logo-text.png';
const OFFICIAL_JIKE_ICON = '/brand/jike-app-icon.png';

const JikeLogoMark = ({ compact = false, className = '' }: JikeLogoMarkProps) => {
  if (compact) {
    return (
      <span
        className={`inline-grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-[18px] bg-[#ffdf00] shadow-[0_14px_36px_-18px_rgba(0,0,0,0.55)] ring-1 ring-black/10 ${className}`}
        aria-label="即刻官方 app 图标"
      >
        <img
          src={OFFICIAL_JIKE_ICON}
          alt="即刻官方 app 图标"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`} aria-label="即刻官方 logo">
      <img
        src={OFFICIAL_JIKE_LOGO}
        alt="即刻官方 logo"
        className="h-14 w-auto object-contain"
        loading="eager"
        decoding="async"
      />
    </span>
  );
};

export default JikeLogoMark;
