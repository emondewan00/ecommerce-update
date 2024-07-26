"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ObserveSpin = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    const spin = document.querySelector(".spin");
    const onIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        //   update query parameters
        const pages = params.get("page") || 1;
        const updatedPages = Number(pages) + 1;
        params.delete("page");
        params.set("page", updatedPages);
        router.push(`${pathName}?${params.toString()}`);
      }
    };
    const observer = new IntersectionObserver(onIntersection);
    if (observer && spin) {
      observer.observe(spin);
    }

    // Clean up function
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
};

export default ObserveSpin;
