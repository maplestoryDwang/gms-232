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
  } else {
    if (status === V++) {
      if (cm.isQuestActive(33167)) {
        cm.getTopMsgFont("请通过左侧的传送口前往会议室. ", 3, 20, 20, 0);
      } else if (cm.isQuestActive(33168)) {
        cm.getTopMsgFont("请到右侧的走廊, 去找南哈特吧. ", 3, 20, 20, 0);
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;