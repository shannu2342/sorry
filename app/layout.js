import './globals.css';

export const metadata = {
  title: 'For Jiya Rani Madam Ji | The Apology I Owe You',
  description:
    'A cinematic and deeply emotional apology website for Jiya Rani Madam Ji, with immersive interactions and heartfelt storytelling.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
