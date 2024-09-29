
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Item</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4">
        <p>&copy; {new Date().getFullYear()} Item. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
