"use client";

import { useEffect } from "react";

export default function WowInit() {
  useEffect(() => {
    const WOW = require("wowjs");
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return null;
}