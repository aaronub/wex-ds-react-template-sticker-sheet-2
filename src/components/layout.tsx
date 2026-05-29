export function PageSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-4">
        <h2 className="font-display text-xl font-semibold text-foreground whitespace-nowrap">{title}</h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}

export function CategoryDivider({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="pt-4 scroll-mt-24">
      <p className="text-xl font-bold uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
    </div>
  );
}

export function DemoCard({ title, children, className }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[var(--wex-radius-16)] border border-border bg-card shadow-[var(--wex-shadow-low)] overflow-hidden ${className ?? ""}`}>
      {title && (
        <div className="border-b border-border px-6 py-3">
          <span className="font-display text-sm font-semibold text-foreground">{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}

export function DemoCell({
  label,
  children,
  wide,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-3 px-6 py-5 ${wide ? "flex-[2]" : "flex-1"} min-w-0`}>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

export function DemoRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex divide-x divide-border">
      {children}
    </div>
  );
}
