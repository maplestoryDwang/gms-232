var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
  } else {
    if (status === V++) {
      cm.playerMessage(-1, "请消灭怪物，返回玄山派。");
      cm.spawnMobLimit(9601657, 1, 475, -9, 20);
      cm.spawnMobLimit(9601657, 1, 250, -9, 20);
      cm.spawnMobLimit(9601657, 1, -160, 28, 20);
      cm.spawnMobLimit(9601656, 1, 350, 1544, 20);
      cm.spawnMobLimit(9601656, 1, 1550, 1544, 20);
      cm.spawnMobLimit(9601656, 1, -130, 1544, 20);
      cm.spawnMobLimit(9601656, 1, -425, 65, 20);
      cm.spawnMobLimit(9601656, 1, -650, 69, 20);
      cm.spawnMobLimit(9601656, 1, -760, -43, 20);
      cm.spawnMobLimit(9601656, 1, -510, 15, 20);
      cm.spawnMobLimit(9601656, 1, -920, 1526, 20);
      cm.spawnMobLimit(9601656, 1, -1010, -9, 20);
      cm.spawnMobLimit(9601680, 1, -710, 76, 1);
      cm.sendNormalTalk_Bottom("#face0#野兽和木杂鬼好像比刚才更多了。", 37, 9401277, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0##b一边消灭，一边上去吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}