var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(t, h, M) {
  if (status == 0 && t == 0) {
    cm.dispose();
    return;
  }
  if (t == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = M;
  var l = -1;
  var k = Math.pow(cm.getLevel(), 4) / 50 * cm.getNumberFromQuestInfo(501600, 'exp') / 7;
  if (status <= l++) {
    cm.dispose();
  } else {
    if (status === l++) {
      cm.sendNormalTalk("\r\n\r\n做得很棒！这是你的经验奖励：#b#e" + k, 5, 9062573, false, true, 0);
    } else if (status === l++) {
      cm.dispose();
      cm.warp(993194000, 3, false);
      cm.gainExp(k);
      cm.setNumberForQuestInfo(501600, "exp", 0);
    }
  }
}