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
      className="rounded-sm bg-[#264653] px-4 py-2 text-left text-white dark:bg-[#F3D6DC] dark:text-[#264653]"
    >
      {message}
    </button>
  );
}
