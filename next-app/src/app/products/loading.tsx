export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Product Nav</nav>
      {children}
    </div>
  );
}