import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageQuery } from "@/lib/queries";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — EJAAMSS" },
      { name: "description", content: "Legal disclaimers for EJAAMSS." },
      { property: "og:title", content: "Disclaimer — EJAAMSS" },
      { property: "og:description", content: "Legal disclaimers for EJAAMSS." },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(pageQuery("disclaimer")),
  component: () => <ContentPage slug="disclaimer" title="Disclaimer" crumb="Disclaimer" />,
});
