import * as fs from "fs";

function buildEntry(): string {
  const scene = "This morning my shadow stretched across the crosswalk ahead of me";
  const twist = "for one startled second it looked like a taller stranger was walking me home.";
  return [scene, twist].join(", and ");
}

const entry = buildEntry();

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry);
