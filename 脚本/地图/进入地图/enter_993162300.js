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
    cm.setPartner(1, 3001919, 80002879, 0);
    cm.setPartner(1, 3001960, 80002880, 0);
    cm.addPopupSay(3001952, 1500, "#face10#从箱子里冒出了奇怪的东西！", '', 0);
    cm.addPopupSay(3001960, 1500, "#face2#布乌！", '', 0);
    cm.dispose();
  }
}