export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Blog Nav</nav>
      {children}
    </div>
  );
}