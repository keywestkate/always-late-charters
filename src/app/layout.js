import SchemaMarkup from '@/components/SEO';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.alwayslatecharters.com'),
  title: {
    default: 'Always Late Charters | Florida Keys Fishing',
    template: '%s | Always Late Charters'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SchemaMarkup />
      </body>
    </html>
  );
}
