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
      if (!cm.isQuestActive(31174) || !cm.haveItem(4033082, 1)) {
        cm.dispose();
        return;
      }
      cm.gainItem(4033082, -1);
      cm.sendNextS("(突然开始发光，双弩精灵的表情好像变好了。这样就行了吗？)");
    } else {
      cm.dispose();
      cm.sendOk("这样一来，英雄们的安全就都有了保障。这全都是多亏了你。但还有一点让我放心不下，希望你重新和我说话。", 2144006);
      cm.forceCompleteQuest(31174);
    }
  }
}