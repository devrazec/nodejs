import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.js'],
    outfile: 'dist/app.js',
    bundle: true,
    platform: 'node',
    target: 'node18',
    minify: true,
  })
  .then(() => console.log('Build successful'))
  .catch(() => process.exit(1));
