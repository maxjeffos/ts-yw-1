// note: noe of these `@jeff/<project-name>` packages are even listed in the root package.json
import { doProtect } from "@jeff/protect";
import { doWoof } from "@jeff/woof";
import { doTopLevelCommandThing } from "@jeff/some-top-level-command";

function main() {
  console.log("hello from root module");    
  doProtect();
  doWoof();
  doTopLevelCommandThing();
}

if (require.main === module) {
  main();
}
