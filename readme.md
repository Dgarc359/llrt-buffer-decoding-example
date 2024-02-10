# Usage

⚠️ This project uses esbuild

* Install dev dependencies with `yarn` or `npm install`
* Output JS for AWS with `./build.sh`
* Add AWS llrt `bootstrap` binary to `out` folder
* Create lambda deployable zip with `./zip.sh`

# Caveats

* Make sure to use the proper runtime
* Make sure to adjust the handler in AWS config to point to `index.handler`
* Decoding Buffer into ascii is not currently supported in llrt
