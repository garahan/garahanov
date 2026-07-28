/** Shared formatting helpers and design tokens for event/journal UI. */

export const CATEGORY_COLORS: Record<string, string> = {
  career: "#0A84FF",
  research: "#FF9F0A",
  reflection: "#32D74B",
  personal: "#FF9F0A",
  general: "#8A8A8E",
};

export function formatLongDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatShortDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getYear(iso: string): string {
  return iso?.slice(0, 4) ?? "";
}
