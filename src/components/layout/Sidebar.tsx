
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-card transition-all duration-300 ease-in-out",
        collapsed ? "w-[80px]" : "w-[260px]",
        className
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Trophy className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && <span className="font-bold text-lg">Arena Pulse Pro</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>
      <ScrollArea className="flex-1 px-3 py-3">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <NavItem 
              to="/" 
              icon={Home} 
              label="Dashboard" 
              collapsed={collapsed} 
              isActive={location.pathname === '/'}
            />
            <NavItem 
              to="/players" 
              icon={Users} 
              label="Elenco" 
              collapsed={collapsed}
              isActive={location.pathname === '/players'}
            />
            <NavItem 
              to="/training" 
              icon={Activity} 
              label="Treinamentos" 
              collapsed={collapsed}
              isActive={location.pathname === '/training'}
            />
            <NavItem 
              to="/matches" 
              icon={Trophy} 
              label="Partidas" 
              collapsed={collapsed}
              isActive={location.pathname === '/matches'}
            />
            <NavItem 
              to="/medical" 
              icon={Stethoscope} 
              label="Departamento Médico" 
              collapsed={collapsed}
              isActive={location.pathname === '/medical'}
            />
          </div>
          
          <Separator className="my-2" />
          
          <div className="flex flex-col gap-1">
            <NavItem 
              to="/communication" 
              icon={MessageSquare} 
              label="Comunicação" 
              collapsed={collapsed}
              isActive={location.pathname === '/communication'}
            />
            <NavItem 
              to="/fans-media" 
              icon={Heart} 
              label="Torcida e Mídia" 
              collapsed={collapsed}
              isActive={location.pathname === '/fans-media'}
            />
            <NavItem 
              to="/financial" 
              icon={DollarSign} 
              label="Financeiro" 
              collapsed={collapsed}
              isActive={location.pathname === '/financial'}
            />
            <NavItem 
              to="/youth" 
              icon={GraduationCap} 
              label="Base/Juvenil" 
              collapsed={collapsed}
              isActive={location.pathname === '/youth'}
            />
            <NavItem 
              to="/analytics" 
              icon={BarChart3} 
              label="Business Intelligence" 
              collapsed={collapsed}
              isActive={location.pathname === '/analytics'}
            />
          </div>
          
          <Separator className="my-2" />
          
          <div className="flex flex-col gap-1">
            <NavItem 
              to="/settings" 
              icon={Settings} 
              label="Configurações" 
              collapsed={collapsed}
              isActive={location.pathname === '/settings'}
            />
          </div>
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <div className={cn(
          "flex items-center",
          collapsed ? "justify-center" : "justify-start gap-3"
        )}>
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">FC</span>
          </div>
          {!collapsed && (
            <div>
              <span className="text-sm font-medium block">FC Barcelona</span>
              <span className="text-xs text-muted-foreground">Versão Pro</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type NavItemProps = {
  to: string;
  icon: React.FC<{ className?: string }>;
  label: string;
  collapsed: boolean;
  isActive: boolean;
};

function NavItem({ to, icon: Icon, label, collapsed, isActive }: NavItemProps) {
  return collapsed ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={to}
          className={cn(
            "flex h-10 items-center justify-center rounded-lg transition-colors",
            isActive 
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Icon className="h-5 w-5" />
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        {label}
      </TooltipContent>
    </Tooltip>
  ) : (
    <Link
      to={to}
      className={cn(
        "flex h-10 items-center gap-3 rounded-lg px-3 transition-colors",
        isActive 
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="truncate">{label}</span>
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
        className="ml-0"
        onClick={() => setOpen(!open)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-[260px] overflow-auto bg-card shadow-lg" onClick={e => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}
