export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

type AnalyticsEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

const canTrack = () =>
  typeof window !== "undefined" &&
  typeof window.gtag === "function" &&
  GA_TRACKING_ID.length > 0;

export const pageview = (url: string) => {
  if (!canTrack()) {
    return;
  }

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

export const event = ({ action, category, label, value }: AnalyticsEvent) => {
  if (!canTrack()) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value
  });
};
