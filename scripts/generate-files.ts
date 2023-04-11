import { mkdir, writeFile } from "node:fs/promises";

const directoryCount = 1000;
const fileCountPerDirectory = 1000;

export function* range(start: number, end: number): Generator<number> {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

async function main() {
  await mkdir("./random-files", { recursive: true });

  const tasks = [...range(0, directoryCount)].map(async (i) => {
    await mkdir(`./random-files/${i}`, { recursive: true });

    const tasks2 = [...range(0, fileCountPerDirectory)].map(async (j) => {
      await writeFile(`./random-files/${i}/text-${j}.txt`, "Hello World!");
    });

    await Promise.all(tasks2);
  });

  await Promise.all(tasks);
}

await main();
