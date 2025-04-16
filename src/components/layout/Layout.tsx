
import { Outlet } from "react-router-dom";
import { Sidebar, MobileSidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar className="hidden md:flex" />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-card px-4 md:px-6">
          <MobileSidebar />
          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-muted-foreground">FC Barcelona</span>
            <div className="h-8 w-8 rounded-full bg-team-blue flex items-center justify-center text-white font-bold">
              FC
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
