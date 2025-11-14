import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/server.ts'],
    bundle: true, // bundle all imports
    platform: 'node', // target Node.js
    format: 'esm', // output as ES Module
    outfile: 'dist/server.js',
    external: ['express'],
    sourcemap: true, // optional
    minify: true, // optional
  })
  .then(() => {
    console.log('Build completed: dist/server.js');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
