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
      if (cm.isQuestActive(3757) && cm.getNumberFromQuestCustomData(3757) == 0) {
        cm.forceStartQuest(3757, '1');
        cm.sendNormalTalk("这里是最后一次见到御龙魔的地方。", 2, 2085002, false, true);
      } else {
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("沿着#b右下方的传送口#k一直走，应该可以找到线索。去那边看一看吧。", 2, 2085002, true, true);
      } else if (status === V++) {
        cm.playerMessage(5, "要想找到御龙魔的痕迹，必须通过右下方的传送点，进入<天渡>。");
        cm.dispose();
      }
    }
  }
}