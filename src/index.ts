#!/usr/bin/env node
// note: noe of these `@maxjeffos/<project-name>` packages are even listed in the root package.json
import { doProtect } from "@maxjeffos/protect";
import { doWoof } from "@maxjeffos/woof";
import { doTopLevelCommandThing } from "@maxjeffos/some-top-level-command";

function main() {
  console.log("hello from root module");
  
  doProtect();
  doWoof();
  doTopLevelCommandThing();
}

if (require.main === module) {
  main();
}
