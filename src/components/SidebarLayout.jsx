import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';

const SidebarLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsOpen(false); // hide sidebar on mobile initially
      } else {
        setIsOpen(true); // show sidebar on desktop
      }
    };

    handleResize(); // run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  return (
    <div className="flex min-h-screen dark:bg-gray-900">
      {/* Sidebar */}
      {isOpen && <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />}

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Toggle Button */}
        {!isOpen && (
          <button
            className="fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-md shadow sm:hidden"
            onClick={toggleSidebar}
          >
            <Menu size={20} />
          </button>
        )}

        <main className="p-4 dark:text-white transition-all">{children}</main>
      </div>
    </div>
  );
};

export default SidebarLayout;
