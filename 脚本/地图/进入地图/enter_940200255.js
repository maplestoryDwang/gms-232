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
    cm.npc_ChangeController(3003350, "oid=1832855", 430, 470, 2, 380, 480, 0, true, false);
    cm.npc_SetSpecialAction("oid=1832855", "summon", 0, 0);
    cm.getTopMsgFont("攻击堵在池塘入口的石头，将其摧毁。", 3, 20, 4, 0);
    cm.playerMessage(5, "攻击堵在池塘入口的石头，将其摧毁。");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;