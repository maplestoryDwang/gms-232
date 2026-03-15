var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(U, P, e) {
  if (status == 0 && U == 0) {
    cm.dispose();
    return;
  }
  if (U == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var g = -1;
  if (status <= g++) {
    cm.dispose();
  } else {
    if (status === g++) {
      cm.sendOk("控制这个房间出口的开关。\r\n\r\n#b（必须要走近了才能操控）");
    } else {
      cm.dispose();
    }
  }
}