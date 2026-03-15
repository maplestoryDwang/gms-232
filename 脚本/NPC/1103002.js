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
      if (cm.isQuestActive(20807)) {
        cm.askYesNo("你想现在挑战第一次入团考试吗？", 0, 1103002);
      } else {
        cm.sendNormalTalk("我现在正在搜集圣地的情报。", 0, 1103002, false, false);
        cm.dispose();
      }
    } else if (status === V++) {
      if (cm.isQuestActive(20807)) {
        cm.dispose();
        cm.warp(913070800, 0, false);
        cm.spawnMobLimit(9001057, 1, -3163, 88, 100);
        cm.teachSkill(51001004, 20, 0);
      } else {
        cm.playerMessage(-1, "接受任务后才可以传送！");
        cm.dispose();
      }
    }
  }
}