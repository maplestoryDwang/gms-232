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
      if (cm.isQuestActive(31165)) {
        cm.forceCompleteQuest(31165);
        cm.sendNextS("这里好像就是格莱特所说的地方…前面是谁？");
      } else {
        if (cm.isQuestFinished(31178) && cm.getQuestStatus(31179) == 0 && cm.getNumberFromQuestCustomData(31190) != 1) {
          cm.forceStartQuest(31190, '1');
        }
        cm.dispose();
      }
    } else if (status === V++) {
      cm.sendOkS("怎么会这样？那位不是传说中的时间女神吗……？！");
      cm.dispose();
    }
  }
}