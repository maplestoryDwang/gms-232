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
      if (cm.isQuestActive(20850)) {
        cm.sendNormalTalk("搜索进展顺利吗？我一直守在这里，但没看见可疑的人。请到别的地方去搜索一下。", 1, 1102206, false, true);
      } else {
        cm.dispose();
        return;
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我有个问题。我的课程有那么无聊吗？为什么不爽快地回答呢？哼，算了。", 1, 1102206, true, true);
      } else if (status === V++) {
        cm.OnStartNavigation(130010020, 0, '', 20850);
        cm.dispose();
      }
    }
  }
}