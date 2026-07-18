type SectionHeaderProps = {
  index: string;
  title: string;
  meta?: string;
};

/** Uniform section heading: mono index, title, optional right-side meta. */
export function SectionHeader({ index, title, meta }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-edge pb-3">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[11px] text-accent">{index}</span>
        <h2 className="font-display text-[15px] font-medium tracking-wide text-fg">
          {title}
        </h2>
      </div>
      {meta ? (
        <span className="font-mono text-[11px] text-faint">{meta}</span>
      ) : null}
    </div>
  );
}
