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
    cm.setPartner(true, 3001310, 80002331, 0);
    cm.setPartner(true, 3001311, 80002332, 0);
    cm.addPopupSay(3001354, 2500, "#face3#没时间了，快！摆脱阿叙隆！", '', 0);
    cm.addPopupSay(3001354, 2500, "#face3#别走散了，一起行动！", '', 0);
    cm.dispose();
  }
}