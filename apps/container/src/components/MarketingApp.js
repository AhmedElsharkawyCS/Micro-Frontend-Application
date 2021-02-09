import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

export default function MarketingApp() {
  const marketingAppContainerRef = useRef(null);
  useEffect(() => {
    mount(marketingAppContainerRef.current);
  }, [marketingAppContainerRef]);
  return <div ref={marketingAppContainerRef}></div>;
}
