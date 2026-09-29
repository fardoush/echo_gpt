import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from './components/Providers/ThemeProvider';
import ClientLayout from './ClientLayout';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: "EchoGPT - One sidebar. Every AI model.",
  description: "Redesigned EchoGPT web app & landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white text-slate-900 dark:bg-[#0D0B18] dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}