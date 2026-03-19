var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(Y, u, G) {
  if (status == 0 && Y == 0) {
    cm.dispose();
    return;
  }
  if (Y == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = G;
  var N = -1;
  if (status <= N++) {
    cm.dispose();
  } else if (status === N++) {
    if (cm.getMapId() == 270050000 && (cm.isQuestActive(3522) || cm.isQuestActive(3538)) && cm.getNumberFromQuestCustomData(7402) == 0) {
      cm.sendOkS("好像看到有人从这里闯入进去了。跟上去看看吧。\r\n\r\n #b（进入战斗后，跟奇拉对话以完成时间神殿任务。）");
    }
    cm.dispose();
  }
}