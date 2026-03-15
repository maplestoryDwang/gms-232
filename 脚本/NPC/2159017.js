function action(f, W, U) {
  if (cm.getMap().getNumMonsters() != 0) {
    cm.sendNext("Please！Destroy the Ice Knight!");
  } else {
    cm.warpParty(932000400, 0);
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;