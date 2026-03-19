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
    cm.npc_ChangeController(1540651, "oid=36039", 254, 7, 36, 204, 304, 4, true, 0, false);
    cm.npc_ChangeController(1540652, 'oid=36040', 206, 7, 36, 156, 256, 4, true, 0, false);
    cm.npc_ChangeController(1540650, "oid=36041", 165, 7, 36, 115, 215, 5, true, 0, false);
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.useItem(2023447);
    cm.useItem(2023448);
    cm.useItem(2023449);
    cm.getTopMsgFont("请在限制时间内保护防御处. ", 3, 20, 20, 0);
    cm.npc_LeaveField("oid=36041");
    cm.dispose();
    cm.scheduleOpenNpcTask(60, 0, "黑色天堂_Act4_机械坟墓_定时");
    cm.getClock(60);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;