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
      if (cm.isQuestActive(38074)) {
        cm.sendNormalTalk("那座曾经无比宏伟的城池已经化作一片废墟。除了城门之外可以进入内部的通道在哪儿来着。", 3, 0, false, true);
      } else {
        cm.dispose();
      }
    } else if (status === V++) {
      cm.updateInfoQuest(38074, '');
      cm.forceStartQuest(38074, '');
      cm.forceCompleteQuest(38074);
      cm.sendNormalTalk("这里吗? 明明就在这附近......啊啊, 原来是在那上边。", 3, 0, false, false);
      cm.dispose();
    }
  }
}