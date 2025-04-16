
import { Outlet } from "react-router-dom";
import { Sidebar, MobileSidebar } from "./Sidebar";
import { UserProfileMenu } from "./UserProfileMenu";

export function Layout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar className="hidden md:flex" />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-card px-6 shadow-sm">
          <MobileSidebar />
          <div className="flex-1">
            <h2 className="text-lg font-semibold md:hidden">Arena Pulse Pro</h2>
          </div>
          <UserProfileMenu />
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
