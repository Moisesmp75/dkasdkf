"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getVisibleRoutesForRole } from "../routes/routes";
import { cn } from "../utils/cn";
import { useUserRole } from "../../features/auth/model/use-auth";

export function Sidebar() {
  const pathname = usePathname();
  const role = useUserRole();

  const visibleRoutes = getVisibleRoutesForRole(role);

  return (
    <aside className="flex w-64 flex-col border-r border-zinc-200 bg-white px-4 py-6">
      <div>
        <h1 className="text-lg font-semibold text-zinc-900">CashUp</h1>
        <p className="mt-1 text-xs text-zinc-600">
          {role === "ANALYST" ? "Panel de analista de crédito" : "Panel de cliente"}
        </p>
      </div>
      <nav className="mt-6 space-y-2 text-sm">
        {visibleRoutes.map((route) => {
          const isActive = pathname === route.path;
          return (
            <Link
              key={route.id}
              href={route.path}
              className={cn(
                "block rounded-md px-3 py-2 text-zinc-800 hover:bg-zinc-100",
                isActive && "bg-zinc-900 text-white hover:bg-zinc-900",
              )}
            >
              {route.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

