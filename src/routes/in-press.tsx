import { createFileRoute } from "@tanstack/react-router";
import { ArticleListingPage } from "@/components/site/article-listing-page";
import { articlesQuery } from "@/lib/queries";

export const Route = createFileRoute("/in-press")({
  head: () => ({
    meta: [
      { title: "Articles In Press — EJAAMSS" },
      {
        name: "description",
        content:
          "Accepted EJAAMSS manuscripts in final production, awaiting issue assignment and DOI registration.",
      },
      { property: "og:title", content: "Articles In Press — EJAAMSS" },
      {
        property: "og:description",
        content: "Peer-reviewed manuscripts in final production at EJAAMSS.",
      },
    ],
    links: [{ rel: "canonical", href: "/in-press" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(articlesQuery()),
  component: () => <ArticleListingPage mode="in-press" />,
});
