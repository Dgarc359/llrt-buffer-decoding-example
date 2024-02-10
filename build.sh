
yarn esbuild index.js --platform=node --target=es2020 --format=esm --bundle --minify --external:@aws-sdk --external:uuid --outdir=out
