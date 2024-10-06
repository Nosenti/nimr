import { TopNav } from "@/components/TopNav";

// default layout export
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen bg-slate-50">
        {/*  */}
        <TopNav></TopNav>
        {/*  */}
        <div>{children}</div>
      </main>
    </>
  );
}
