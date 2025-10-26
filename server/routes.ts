import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // UI/UX prototype - no backend API routes
  // API routes will be implemented when backend is ready

  const httpServer = createServer(app);

  return httpServer;
}
