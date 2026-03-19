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
      cm.sendNormalTalk_Bottom("(泉奈，这里真的有许多石堆啊……)", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("(如果是将石头人打碎后获得的岩石，应该足够坚硬。收集30块回去吧。)", 57, 0, true, false);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}