import Footer from "@/components/footer/footer";
import Nav from "@/components/nav/nav";
import { StatsCard } from "@/components/StatsCard";
import { URLForm } from "@/components/URLForm";
import { URLList } from "@/components/URLList";
import { BarChart, Link, MousePointerClick } from "lucide-react";

export default function HomePage() {
  return (
    <div className="h-svh flex flex-col">
      <Nav />
      <main className="container mx-auto py-8 px-2 space-y-8 flex-1">
        <div>
          <h1 className="text-3xl font-bold mb-2">LinkClick : URL Shortener</h1>
          <p className="text-muted-foreground">
            Create and manage your shortened URLs
          </p>
        </div>

        <div className="flex justify-center">
          <URLForm />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatsCard
            title="Total URLs"
            value="12"
            icon={<Link className="h-4 w-4" />}
          />
          <StatsCard
            title="Total Clicks"
            value="247"
            icon={<MousePointerClick className="h-4 w-4" />}
          />
          <StatsCard
            title="This Month"
            value="89"
            icon={<BarChart className="h-4 w-4" />}
          />
        </div>
        <URLList />
      </main>
      <Footer />
    </div>
  );
}
