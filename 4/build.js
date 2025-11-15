import esbuild from 'esbuild';
import process from 'process';

esbuild
  .build({
    entryPoints: ['src/server.js'],
    bundle: true,
    platform: 'node', // Node.js target
    format: 'esm', // <-- Important: generate ES Module output
    outfile: 'dist/server.js',
    external: [
    "express",
    "@prisma/client",
    "http",
    "https",
    "fs",
    "path",
    "url",
    "crypto",
    "stream",
    "zlib",
    "os",
    "util",
  ],
    sourcemap: true,
    minify: true,
  })
  .then(() => {
    console.log('Build completed: dist/server.js');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
