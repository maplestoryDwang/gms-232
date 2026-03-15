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
      if (cm.isQuestFinished(41207)) {
        cm.sendNormalTalk("(埃德尔斯坦议会长阿贝尔特退任投票被否决的公文。)", 0, 2450023, false, true);
      } else {
        cm.sendNormalTalk("(贴着各种乱七八糟的广告)", 0, 2450023, false, true);
      }
      if (!cm.isQuestActive(41207)) {
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("请愿书……贴在这里应该可以了吧？", 2, 2450023, true, true);
      } else if (status === V++) {
        cm.updateInfoQuest(41207, "clear=clear");
        cm.gainItem(4033837, -1);
        cm.dispose();
      }
    }
  }
}