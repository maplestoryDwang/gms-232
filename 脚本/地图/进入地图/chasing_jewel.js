var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(32266) && cm.getQuestStatus(32267) == 0) {
    cm.playerMessage(-1, "请消灭黑色蒙面兔。");
    cm.forceStartQuest(32267, '');
    cm.spawnMobLimit(9300803, 1, 2400, -25, 1);
    if (cm.getJob() >= 400 && cm.getJob() <= 435) {  // 飞侠单独判断
      cm.forceForfeitQuest(32271);
      cm.forceStartQuest(32360, '4');
    }
  }
  cm.dispose();
}