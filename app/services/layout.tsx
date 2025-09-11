// app/services/layout.tsx
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {children}
    </main>
  );
}
