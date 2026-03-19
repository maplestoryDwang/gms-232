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
      cm.spawnMobLimit(9601656, 1, -660, 280, 20);
      cm.spawnMobLimit(9601656, 1, -450, 280, 20);
      cm.spawnMobLimit(9601656, 1, -230, 280, 20);
      cm.spawnMobLimit(9601656, 1, -20, 280, 20);
      cm.spawnMobLimit(9601656, 1, 445, 280, 20);
      cm.spawnMobLimit(9601656, 1, 690, 1533, 20);
      cm.spawnMobLimit(9601656, 1, 465, 1533, 20);
      cm.spawnMobLimit(9601656, 1, 650, 280, 20);
      cm.spawnMobLimit(9601656, 1, 210, 280, 20);
      cm.spawnMobLimit(9601657, 1, -367, 1509, 20);
      cm.spawnMobLimit(9601657, 1, -138, 1509, 20);
      cm.spawnMobLimit(9601657, 1, -810, 156, 20);
      cm.spawnMobLimit(9601657, 1, -530, -61, 20);
      cm.spawnMobLimit(9601657, 1, -560, 1509, 20);
      cm.spawnMobLimit(9601680, 1, -710, 280, 1);
      cm.sendNormalTalk_Bottom("#face5#嗯？" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！那边！看那边！", 37, 9401277, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0##b是山魔鬼！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#村里人说的是真的！", 37, 9401277, true, true, 1);
        } else if (status === V++) {
          cm.dispose();
        }
      }
    }
  }
}