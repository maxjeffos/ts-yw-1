
import { doProtect } from "@maxjeffos/protect";

export function doTopLevelCommandThing() {
  console.log("hello from some-top-level-command");
  doProtect();
}

function main() {
  doTopLevelCommandThing();
}

if (require.main === module) {
  main();
}
