import Sidebar from '@/components/ui/Sidebar';
import Navbar from '@/components/ui/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className="flex bg-dark-blue/10 text-dark-blue">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
