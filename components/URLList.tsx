"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

interface URLItem {
  id: string;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: string;
}

const mockData: URLItem[] = [
  {
    id: "1",
    originalUrl: "https://example.com/very/long/url/that/needs/shortening",
    shortUrl: "http://short.url/abc123",
    clicks: 45,
    createdAt: "2024-04-18",
  },
  {
    id: "2",
    originalUrl: "https://another-example.com/path/to/resource",
    shortUrl: "http://short.url/xyz789",
    clicks: 12,
    createdAt: "2024-04-18",
  },
];

export function URLList() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Original URL</TableHead>
            <TableHead>Short URL</TableHead>
            <TableHead>Clicks</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="max-w-[300px] truncate">
                {item.originalUrl}
              </TableCell>
              <TableCell>{item.shortUrl}</TableCell>
              <TableCell>{item.clicks}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleCopy(item.shortUrl, item.id)}
                  >
                    <Copy
                      className={`h-4 w-4 ${
                        copiedId === item.id ? "text-green-500" : ""
                      }`}
                    />
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a
                      href={item.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
