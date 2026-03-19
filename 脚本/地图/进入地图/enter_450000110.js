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
    cm.fieldEffect_Hero8(1);
    cm.fieldEffect_Hero9(0, 10000);
    cm.getTopMsgFont("正随着艾尔达的流动，移动到格兰蒂斯...", 3, 20, 20, 0, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;