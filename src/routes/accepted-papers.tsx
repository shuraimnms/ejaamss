import { createFileRoute } from "@tanstack/react-router";
import { ArticleListingPage } from "@/components/site/article-listing-page";
import { articlesQuery } from "@/lib/queries";

export const Route = createFileRoute("/accepted-papers")({
  head: () => ({
    meta: [
      { title: "Accepted Papers — EJAAMSS" },
      { name: "description", content: "Manuscripts accepted for publication at EJAAMSS and entering the production pipeline." },
      { property: "og:title", content: "Accepted Papers — EJAAMSS" },
      { property: "og:description", content: "Editorially accepted EJAAMSS manuscripts." },
    ],
    links: [{ rel: "canonical", href: "/accepted-papers" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(articlesQuery()),
  component: () => <ArticleListingPage mode="accepted" />,
});
