function start() {
  if (cm.getMap().getNumMonsters() == 0) {
    cm.dispelBuff(40011186);
    cm.teachSkill(40011183, -1, 0);
    cm.teachSkill(40011184, -1, 0);
    cm.teachSkill(40011185, -1, 0);
    cm.warp(807100002, 1, true);
  } else {
    cm.sendOkS("打败所有的敌人，打开东门吧！");
  }
  cm.dispose();
}
var status = -1;