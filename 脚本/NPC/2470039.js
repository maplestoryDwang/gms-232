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
      if (cm.getNumberFromQuestCustomData(40617) > 0) {
        cm.playerMessage(5, "已经完成了这里的任务。");
        cm.playerMessage(-1, "已经完成了这里的任务。");
        cm.dispose();
      } else {
        cm.sendNormalTalk("#b(从巨大沙漏中召唤出了时间之力。)", 33, cm.getNpc(), false, true);
      }
    } else if (status === V++) {
      cm.forceStartQuest(40617, '1');
      cm.spawnMobLimit(9300796, 1, 2488, 158, 100);
      cm.playerMessage(5, "时间的流逝变成怪物的模样跳了出来。击退怪物吧。");
      cm.playerMessage(-1, "时间的流逝变成怪物的模样跳了出来。击退怪物吧。");
      cm.dispose();
    }
  }
}