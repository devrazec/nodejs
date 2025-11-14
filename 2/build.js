import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/server.js'],
    bundle: true,
    platform: 'node', // Node.js target
    format: 'esm', // <-- Important: generate ES Module output
    outfile: 'dist/server.js',
    external: ['express'],
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
