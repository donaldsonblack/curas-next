'use client'

import { Auth } from "../auth/authProvider";
import { AuthGate } from "../auth/authGate";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Auth>
      <AuthGate>
        <SidebarProvider>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-1 flex-col">
              <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-6">
                <SidebarTrigger />
                <h1 className="text-lg font-semibold">Task B</h1>
              </header>
              <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </AuthGate>
    </Auth>
  );
}
