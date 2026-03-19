var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.spawnMobLimit(2400260, 1, -100, -140, 100);
    cm.spawnMobLimit(2400260, 1, -605, -688, 100);
    cm.spawnMobLimit(2400260, 1, -35, -465, 100);
    cm.spawnMobLimit(2400260, 1, 11, -140, 100);
    cm.spawnMobLimit(2400260, 1, 95, -140, 100);
    cm.spawnMobLimit(2400260, 1, 204, -140, 100);
    cm.spawnMobLimit(2400260, 1, -313, -91, 100);
    cm.spawnMobLimit(2400260, 1, -408, -91, 100);
    cm.spawnMobLimit(2400260, 1, -529, -91, 100);
    cm.spawnMobLimit(2400260, 1, -126, -465, 100);
    cm.spawnMobLimit(2400260, 1, 427, -513, 100);
    cm.spawnMobLimit(2400260, 1, 292, -513, 100);
    cm.spawnMobLimit(2400260, 1, 158, -513, 100);
    cm.spawnMobLimit(2400260, 1, -659, -91, 100);
    cm.spawnMobLimit(2400260, 1, -233, -465, 100);
    cm.spawnMobLimit(2400260, 1, -387, -465, 100);
    cm.spawnMobLimit(2400260, 1, -495, -465, 100);
    cm.spawnMobLimit(2400260, 1, -714, -407, 100);
    cm.spawnMobLimit(2400260, 1, -904, -407, 100);
    cm.spawnMobLimit(2400260, 1, -514, -688, 100);
    cm.spawnMobLimit(2400260, 1, -719, -688, 100);
    cm.spawnMobLimit(2400260, 1, -834, -688, 100);
    cm.setPartner(1, 3002110, 80002360, 0);
    cm.addPopupSay(3002110, 2500, "#face0#快点消灭怪物，爬到上面去！", '', 0);
    cm.addPopupSay(3002110, 2500, "#face8#真是人不可貌相……", '', 0);
    cm.addPopupSay(3002110, 2500, "#face13#没有耳朵，也没有尾巴，没想到还挺强！", '', 0);
    cm.addPopupSay(0, 2500, "……耳朵是有的……", '', 0);
    cm.dispose();
    cm.spawnMobLimit(2400260, 1, 316, -829, 100);
    cm.spawnMobLimit(2400260, 1, -31, -829, 100);
    cm.spawnMobLimit(2400260, 1, 134, -829, 100);
    cm.spawnMobLimit(2400260, 1, 447, -829, 100);
    cm.spawnMobLimit(2400260, 1, -158, -1120, 100);
    cm.spawnMobLimit(2400260, 1, -264, -1120, 100);
    cm.spawnMobLimit(2400260, 1, -176, -1120, 100);
    cm.spawnMobLimit(2400260, 1, 231, -1295, 100);
    cm.spawnMobLimit(2400260, 1, -81, -1295, 100);
    cm.spawnMobLimit(2400260, 1, 407, -1295, 100);
    cm.spawnMobLimit(2400260, 1, -194, -1295, 100);
    cm.spawnMobLimit(2400260, 1, -111, -1295, 100);
    cm.spawnMobLimit(2400260, 1, -842, -1421, 100);
    cm.spawnMobLimit(2400260, 1, -504, -1421, 100);
    cm.spawnMobLimit(2400260, 1, -416, -1421, 100);
    cm.spawnMobLimit(2400260, 1, -596, -1421, 100);
    cm.spawnMobLimit(2400260, 1, -487, -1707, 100);
    cm.spawnMobLimit(2400260, 1, -411, -1707, 100);
    cm.spawnMobLimit(2400260, 1, -405, -1707, 100);
    cm.spawnMobLimit(2400260, 1, -268, -1707, 100);
    cm.spawnMobLimit(2400260, 1, 168, -1767, 100);
    cm.spawnMobLimit(2400260, 1, 115, -1767, 100);
    cm.spawnMobLimit(2400260, 1, -103, -1767, 100);
    cm.spawnMobLimit(2400260, 1, -61, -1767, 100);
    cm.spawnMobLimit(2400260, 1, -570, -1421, 100);
    cm.spawnMobLimit(2400260, 1, -807, -1421, 100);
    cm.spawnMobLimit(2400260, 1, -694, -1421, 100);
    cm.spawnMobLimit(2400260, 1, -756, -1421, 100);
    cm.spawnMobLimit(2400260, 1, -588, -1707, 100);
    cm.spawnMobLimit(2400260, 1, -441, -1707, 100);
    cm.spawnMobLimit(2400260, 1, -453, -1707, 100);
    cm.spawnMobLimit(2400260, 1, -268, -1707, 100);
    cm.spawnMobLimit(2400260, 1, 315, -1767, 100);
    cm.spawnMobLimit(2400260, 1, -44, -1767, 100);
    cm.spawnMobLimit(2400260, 1, 32, -1767, 100);
    cm.spawnMobLimit(2400260, 1, 157, -1767, 100);
    cm.spawnMobLimit(2400260, 1, -914, -1962, 100);
    cm.spawnMobLimit(2400260, 1, -855, -1962, 100);
    cm.spawnMobLimit(2400260, 1, -855, -1962, 100);
    cm.spawnMobLimit(2400260, 1, -791, -1962, 100);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;