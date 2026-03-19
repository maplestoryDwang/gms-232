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
    cm.forceStartQuest(23130, '1');
    cm.getMap().spawnReactorIfNotExist(3109000, 0, 30, 93, 0, '');
    cm.effect_Text(["#fn黑体##fs20#水箱满了，汇报给苏阿尔吧！", ''], [90, 5000, 4, 0, 0, 1, 4, 0, 0, 0, 0, 0]);
    cm.dispose();
  }
}