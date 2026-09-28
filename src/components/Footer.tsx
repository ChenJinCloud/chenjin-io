import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/70 px-5 py-7 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 text-sm">
        <p className="text-muted-foreground">© 2026 Chen Jin</p>
        <nav aria-label="更多入口" className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/writing" className="text-muted-foreground transition-colors hover:text-foreground">写作</Link>
          <Link to="/writing/picks" className="text-muted-foreground transition-colors hover:text-foreground">精选</Link>
          <Link to="/projects" className="text-muted-foreground transition-colors hover:text-foreground">项目</Link>
          <Link to="/workbench" className="text-muted-foreground transition-colors hover:text-foreground">工具清单</Link>
          <Link to="/playbooks" className="text-muted-foreground transition-colors hover:text-foreground">方法手册</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
