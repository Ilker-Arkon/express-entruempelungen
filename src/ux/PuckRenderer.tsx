"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Render } from "@puckeditor/core";
import { config } from "@/puck.config";

export function PuckRenderer({ data }: { data: any }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return <Render config={config} data={data} />;
}
