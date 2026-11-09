"use client";

import Link from "next/link";
import { Badge } from "@/components/tailgrids/core/badge";
import { Facebook, Instagram } from "@tailgrids/icons";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    // footer container
    <div className="mt-4 text-center">
      {/* student name */}
      {/* <div>
        <Badge className="text-3xl text-black font-bold bg-cyan-200 rounded-xl py-2 px-4">
          68039294 นายชินเทพ ศรีนิล
        </Badge>
      </div> */}

      {/* Link contact */}
      <div className="mt-4 flex justify-center gap-4">
        <Link href="https://www.instagram.com/h1james_" target="_blank">
          <Instagram className="text-pink-500" />
        </Link>
        <div className="border-l"></div>
        <Link href="https://www.tiktok.com/@h1james_" target="_blank">
          <i className="bi bi-tiktok text-lg"></i>
        </Link>
      </div>
    </div>
  );
}
