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
      cm.sendNormalTalk_Bottom("嗯…或许会像第一次掉落在那里一样。\r\n我们回去吧。", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#g(如果使用左侧传送口，即可返回机械坟墓空地)", 57, 0, true, false);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}