export default function Blogs({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>All Blogs are displayed here</nav>
      {children}
    </div>
  );
}