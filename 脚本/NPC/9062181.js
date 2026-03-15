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
  var w = cm.getNumberFromQuestInfo(16192, "pyramidScore");
  var N = cm.getNumberFromQuestInfo(16192, "pyramidRank");
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    if (N == 0) {
      cm.sendNormalTalk_Bottom("恭喜你取得了胜利YO！\r\n这次！给你#b" + w * Math.pow(1.5, 3 - N) + "#k新复古能量#kYO！\r\n（奖励将在离开时发放。）", 37, 9062181, false, true, 3);
    } else {
      cm.sendNormalTalk_Bottom("很可惜，希望你下次能够获胜YO！\r\n这次！给你#b" + w * Math.pow(1.5, 3 - N) + "#k新复古能量#kYO！\r\n（奖励将在离开时发放。）", 37, 9062181, false, true, 3);
    }
  } else {
    cm.新复古王国_获得点数(w * Math.pow(1.5, 3 - N));
    cm.setNumberForQuestInfo(16192, "pyramidScore", 0);
    cm.setNumberForQuestInfo(16192, "pyramidRank", 0);
    cm.warp(993110000, 5, false);
    cm.dispose();
  }
}