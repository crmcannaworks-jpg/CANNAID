import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El panel de vista previa sirve el dev server desde otro origen (dominio
  // proxeado), y Next bloquea los pedidos cross-origin a /_next/* en dev.
  allowedDevOrigins: ["*"],
};

export default nextConfig;
