import DashboardSidebar from '@/components/shared/DashboardSidebar';
import React from 'react';

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      
      <DashboardSidebar />

      <div className="flex-1 p-6 bg-pink-100 ml-[200px]">
        {children}
      </div>

    </div>
  );
};

export default layout;