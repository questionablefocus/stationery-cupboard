
import React, { ReactNode } from "react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import SidebarNav from "./SidebarNav";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r">
          <SidebarContent>
            <SidebarNav />
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <div className="flex items-center h-14 px-4 border-b lg:hidden">
            <SidebarTrigger />
            <h2 className="text-lg font-medium ml-2">Stationery Cupboard</h2>
          </div>
          
          <main className="flex-1 overflow-auto transition-all duration-300 ease-in-out">
            <div className="container py-6 md:py-10 animate-fade-in">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
