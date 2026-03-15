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
      cm.addNumberForQuestInfo(40514, "count", 1);
      cm.setNumberForQuestInfo(40514, '23', 1);
      cm.sendNormalTalk("嗯？要看我的手腕？为什么突然要看这个？给你们看也没关系，但我最近不知道为什么长胖了，真难为情呢。", 32, 2460023, false, true);
    } else if (status === V++) {
      cm.playerMessage(5, "本尼迪克的手腕很干净。没有蜘蛛纹身。");
      cm.dispose();
    }
  }
}