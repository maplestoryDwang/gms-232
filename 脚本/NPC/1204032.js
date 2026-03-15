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
      if (!cm.haveItem(4032328)) {
        cm.playerMessage(-1, "先击退坏人吧！");
        cm.dispose();
        return;
      }
      if (cm.getMap().getNumMonsters() > 0) {
        cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + '', 3, 20, 4, 0, 0);
        cm.dispose();
      } else {
        cm.forceStartQuest(21765, '2');
        cm.sendNormalTalk("战神……信找到了？啊……太好了。你果然很强……" + cm.getQuestStatus(21765) + '', 0, 1204032, false, true);
      }
    } else if (status === V++) {
      cm.gainItem(4032328, -1);
      cm.dispose();
      cm.warp(100000201, 0, false);
    }
  }
}