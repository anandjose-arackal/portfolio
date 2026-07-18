type PageHeaderProps = {
  overline: string;
  title: string;
  description?: string;
  meta?: string;
};

/** Consistent top-of-page header for every workspace section. */
export function PageHeader({
  overline,
  title,
  description,
  meta,
}: PageHeaderProps) {
  return (
    <div className="border-b border-edge pt-8 pb-6">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
          {overline}
        </p>
        {meta ? (
          <p className="font-mono text-[11px] text-faint">{meta}</p>
        ) : null}
      </div>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
