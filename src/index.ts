import type { PluginDescriptor } from "emdash";

export function aiDiscoveryPlugin(): PluginDescriptor {
  return {
    id: "ai-discovery",
    version: "0.1.0",
    format: "standard",
    entrypoint: "@awesomeem/plugin-ai-discovery/sandbox",
    capabilities: ["read:content"],
  };
}
