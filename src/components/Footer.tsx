import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-border/70 px-5 py-7 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 text-sm">
        <p className="text-muted-foreground">© 2026 Chen Jin</p>
        <nav aria-label="更多入口" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/writing" className="text-muted-foreground transition-colors hover:text-foreground">写作</Link>
          <Link href="/projects" className="text-muted-foreground transition-colors hover:text-foreground">项目</Link>
          <Link href="/resources/stack" className="text-muted-foreground transition-colors hover:text-foreground">工具清单</Link>
          <Link href="/work-with-me" className="text-muted-foreground transition-colors hover:text-foreground">合作</Link>
          <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">关于</Link>
          <Link href="/roadmap" className="text-muted-foreground transition-colors hover:text-foreground">计划池</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
