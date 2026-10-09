"use client";

import { useState } from "react";

export default function CopyLinkButton() {
  const [message, setMessage] = useState("Copy link");

  async function onCopy() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setMessage("Link copied");
    } catch {
      setMessage(url);
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="rounded-full bg-[#18181b] px-4 py-2 text-left text-sm text-white dark:bg-[#5b4dff]"
    >
      {message}
    </button>
  );
}
