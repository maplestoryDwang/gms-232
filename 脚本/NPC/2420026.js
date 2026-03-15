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
      if (cm.getNumberFromQuestCustomData(40118) > 0) {
        cm.sendNormalTalk("#b(贴着反对王妃内容的壁纸。)", 32, 2420026, false, true);
        cm.dispose();
      } else if (cm.isQuestActive(40106)) {
        cm.askYesNo("#b(平凡的墙，贴个什么也应该没关系。把反对王妃的壁纸贴上去？)", 32, 2420026);
      } else {
        cm.sendNormalTalk("#b(平凡的墙，贴个什么也应该没关系。)", 32, 2420026, false, false);
        cm.dispose();
      }
    } else if (status === V++) {
      cm.forceStartQuest(40118, '1');
      cm.sendNormalTalk("#b(贴上了反对王妃的壁纸。)", 32, 2420026, false, true);
    } else {
      cm.dispose();
    }
  }
}