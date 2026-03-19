function start() {
  cm.setNumberForQuestInfo(3849, "time", 900000);
  em.startEventTimer(900000);
  cm.getMap().startSimpleMapEffect("限制时间是15分钟，要尽早打倒怪物，到下一层去！", 5120024);
  var f = em.getMonster(9305600);
  cm.getMap().spawnMonsterWithEffect(f, 15, new java.awt.Point(286, 7));
  cm.fieldEffect_Tremble(0, 1, 30);
  cm.dispose();
}
var status = -1;