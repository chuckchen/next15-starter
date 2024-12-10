import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js 15',
  description: 'A Next.js 15 template with Tailwind CSS v4 beta and ESLint v8'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
