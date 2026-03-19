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
    cm.setPartner(1, 3001310, 80002331, 0);
    cm.setPartner(1, 3001311, 80002332, 0);
    cm.addPopupSay(3001311, 2500, "#face3#切，这些家伙怎么没完没了冲过来啊。", '', 0);
    cm.addPopupSay(3001354, 2500, "#face3#马上就要成功了！\r\n再加把劲！", '', 0);
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;