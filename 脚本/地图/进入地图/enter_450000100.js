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
    cm.fieldEffect_Hero8(1);
    cm.fieldEffect_Hero9(0, 10000);
    cm.getTopMsgFont("正在沿着艾尔达的溪流移动到冒险岛界限……", 3, 20, 20, 0, 0);
    cm.dispose();
  }
}