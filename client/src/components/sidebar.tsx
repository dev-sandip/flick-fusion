"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Compass, Shield, User } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { id: "/", icon: Home, label: "Home" },
    { id: "/explore", icon: Compass, label: "Explore" },
    { id: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-border">
      <nav className="p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.id;
          return (
            <Link
              key={item.id}
              href={item.id}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                isActive
                  ? "bg-accent border border-border"
                  : "hover:bg-accent border border-transparent hover:border-border"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
        <div className="my-2 border-t border-border" />
        <Link
          href="/admin"
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
            pathname === "/admin"
              ? "bg-primary/10 border border-primary/20 text-primary"
              : "hover:bg-accent border border-transparent hover:border-border"
          }`}
        >
          <Shield className="w-5 h-5" />
          <span>Admin</span>
        </Link>
      </nav>
    </aside>
  );
}
