var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("摸上去手感冰凉。这到底是谁的墓碑呢？", 3, 0, false, true);
      if (em.getNumberProperty("tomb") > 0) {
        cm.dispose();
      }
    } else if (status === V++) {
      em.setProperty('tomb', 1);
      cm.playerMessage(-1, "手碰到墓碑的时候，突然有怪物出现。");
      cm.spawnMobLimit(8220027, 1, 497, 206, 100);
      cm.dispose();
    }
  }
}