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
  } else if (status === V++) {
    if (cm.canCompleteQuest(9062204) || cm.canCompleteQuest(9062204) || cm.canCompleteQuest(9062204)) {
      cm.fieldEffect_SaveEff("Map/Effect3.img/hungryMuto/Clear");
      cm.playerMessage(5, "请与伊黛娜对话，领取任务完成奖励。");
    }
    cm.dispose();
  }
}