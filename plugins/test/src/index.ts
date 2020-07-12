import { Bukkit } from "org.bukkit";

const server = Bukkit;

for (const p of server.worlds) {
  console.log(p.entities[0]);
} 