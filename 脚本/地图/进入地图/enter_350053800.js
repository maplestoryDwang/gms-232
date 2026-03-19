var status = -1;
var selectionLog = [];
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
  } else if (status === V++) {
    cm.addPopupSay(0, 1000, "还没有结束. ", '', 0);
    cm.addPopupSay(0, 1000, "呃……为什么总是没完没了?", '', 0);
    cm.addPopupSay(0, 1000, "怎么办, 有没有出去的方法?", '', 0);
    cm.addPopupSay(0, 1000, "啊, 我没有力气了. ", '', 0);
    cm.scheduleWarpTask(30, 350053850, 0, false);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;