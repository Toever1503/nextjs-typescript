import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: any
}) {

  console.log(' children: ', children)
  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
