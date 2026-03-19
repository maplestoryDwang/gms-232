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
    cm.npc_ChangeController(2111010, 'oid=247193', 245, 155, 11, 195, 295, 1, false, 0, false);
    cm.getTopMsgFont("秘密文件就在房间里的某处，点击查找吧。", 3, 20, 8, 0, 0);
    cm.dispose();
  }
}