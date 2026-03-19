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
  } else if (status === V++) {
    cm.addPopupSay(9062174, 6000, "\r\n干站着是无法获得#b新复古能量#k的！#b放松下来尽情跳舞#k，好好享受一番吧！\r\n ", '', 0);
    cm.dispose();
    cm.setNumberForQuestInfo(100263, "skating", 0);
    cm.新复古王国_溜冰();
  }
}