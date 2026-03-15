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
  if (!cm.isQuestActive(32659)) {
    cm.sendOk("你好像还有什么事情没有做完吧？");
    cm.dispose();
    return;
  }
  if (cm.getMapId() == 304060000) {
    cm.sendOk("糟糕，情况不妙！");
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
      cm.askYesNo('你要回圣地吗？', 4, 2530003);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(304050100, 0, false);
    }
  }
}