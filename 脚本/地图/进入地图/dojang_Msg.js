var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      var O = ["我等你！还有勇气的话，欢迎再来挑战！", "想挑战武陵道场…还真有勇气！", "挑战武陵道场的家伙，我一定会让他(她)后悔！", "真是胆大包天！勇敢和无知请不要搞混了！", "想被称呼为失败者吗？欢迎来挑战！", "如果你想走上失败之路就进来！"];
      cm.getMap().startSimpleMapEffect(O[cm.rand(0, O.length - 1)], 5120024);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;