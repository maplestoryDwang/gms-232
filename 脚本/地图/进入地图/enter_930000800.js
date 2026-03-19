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
      var O = cm.getEventInstance();
      if (O == null) {
        cm.dispose();
        cm.warp(100000000, 0, true);
        cm.addPopupSay(9110002, 5000, '角色复位。');
        return;
      }
      cm.dispose();
    }
  }
}