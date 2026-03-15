function action(f, W, U) {
  if (cm.getPlayerCount(913030000) == 0) {
    cm.removeNpc(913030000, 1104002);
    var V = cm.getMap(913030000);
    V.killAllMonsters(false);
    V.spawnNpc(1104002, new java.awt.Point(-430, 88));
    cm.warp(913030000, 0);
  } else {
    cm.playerMessage("The Black Witch is being fought by someone else.");
  }
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;