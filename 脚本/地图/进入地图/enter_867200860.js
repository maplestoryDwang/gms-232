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
    cm.playerMessage(-1, "去拦截怪物，防止他们靠近野营地。");
    cm.playerMessage(5, "去拦截怪物，防止他们靠近野营地。");
    cm.forceJoinEvent("莫奈德_地图_Act1.7_拦截野怪");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;