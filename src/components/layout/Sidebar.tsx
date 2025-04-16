
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  Calendar,
  Activity,
  Stethoscope,
  MessageSquare,
  Heart,
  BarChart3,
  DollarSign,
  GraduationCap,
  Settings,
  Trophy,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-card transition-all duration-300 ease-in-out",
        collapsed ? "w-[80px]" : "w-[240px]",
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-team-blue">
            <Trophy className="h-4 w-4 text-white" />
          </div>
          {!collapsed && <span className="font-bold">Arena Pulse Pro</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="px-2 py-4">
          <nav className="grid gap-1">
            <NavItem to="/" icon={Home} label="Dashboard" collapsed={collapsed} />
            <NavItem to="/players" icon={Users} label="Elenco" collapsed={collapsed} />
            <NavItem to="/training" icon={Activity} label="Treinamentos" collapsed={collapsed} />
            <NavItem to="/matches" icon={Trophy} label="Partidas" collapsed={collapsed} />
            <NavItem to="/medical" icon={Stethoscope} label="Departamento Médico" collapsed={collapsed} />
            
            <Separator className="my-4" />
            
            <NavItem to="/communication" icon={MessageSquare} label="Comunicação" collapsed={collapsed} />
            <NavItem to="/fans-media" icon={Heart} label="Torcida e Mídia" collapsed={collapsed} />
            <NavItem to="/financial" icon={DollarSign} label="Financeiro" collapsed={collapsed} />
            <NavItem to="/youth" icon={GraduationCap} label="Base/Juvenil" collapsed={collapsed} />
            <NavItem to="/analytics" icon={BarChart3} label="Business Intelligence" collapsed={collapsed} />
            
            <Separator className="my-4" />
            
            <NavItem to="/settings" icon={Settings} label="Configurações" collapsed={collapsed} />
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
}

type NavItemProps = {
  to: string;
  icon: React.FC<{ className?: string }>;
  label: string;
  collapsed: boolean;
};

function NavItem({ to, icon: Icon, label, collapsed }: NavItemProps) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground",
        to === window.location.pathname && "bg-muted font-medium text-foreground"
      )}
    >
      <Icon className={cn("h-5 w-5", !collapsed && "min-w-5")} />
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="ml-2"
        onClick={() => setOpen(!open)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-[240px] overflow-auto bg-card shadow-lg" onClick={e => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}
