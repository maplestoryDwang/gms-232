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
  } else if (status === V++) {
    cm.gainItem(4031508, 5);
    cm.gainItem(4031507, 5);
    cm.gainItem(4032117, 1);
    cm.forceCompleteQuest(6011);
    cm.forceCompleteQuest(6013);
    cm.teachSkill(80001306, 1, 1);
    cm.getTopMsgFont("获得骑宠：赤羚龙", 3, 20, 20, 0);
    cm.teachSkill(80001305, 1, 1);
    cm.getTopMsgFont("获得骑宠：银色野猪", 3, 20, 20, 0);
    cm.sendOk("正好我这里还有一些，直接给你吧。");
    cm.dispose();
  }
}