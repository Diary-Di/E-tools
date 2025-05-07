import './css/global.css'; // Add this at the top

import Sidebar from './sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh' }}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <main style={{ flex: 1, marginLeft: '16rem', padding: '20px' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}