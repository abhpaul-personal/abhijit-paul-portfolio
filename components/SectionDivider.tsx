export default function SectionDivider({
  step,
  total,
  fill,
  center = false,
}: {
  step: number;
  total: number;
  fill: string;
  center?: boolean;
}) {
  return (
    <div className={`sect-divider ${center ? "justify-center" : ""}`}>
      <span className="tag">
        {String(step).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div className="track" style={{ ["--fill" as string]: fill }} />
    </div>
  );
}
