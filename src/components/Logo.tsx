import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2">
      <span
        className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground font-bold text-sm transition-transform duration-300 group-hover:scale-105"
        aria-hidden
      >
        D
      </span>
      <span className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
        Drivyn<span className="text-primary"> AI</span>
      </span>
    </Link>
  );
}
