"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";

export function URLForm() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement URL shortening
    console.log("Shortening URL:", url);
    setUrl("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row w-full max-w-2xl gap-2"
    >
      <div className="relative flex-1">
        <Input
          type="url"
          placeholder="Enter your long URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full pl-10"
          required
        />
        <Link className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      </div>
      <Button type="submit" className="bg-primary hover:bg-primary/90">
        Shorten URL
      </Button>
    </form>
  );
}
