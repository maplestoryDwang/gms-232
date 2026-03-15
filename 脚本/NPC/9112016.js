var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askYesNo("必须驱散包围竹野子的黑暗……！\r\n(※接受时将开始与魔僧战斗。)", 2, 9112016);
    } else if (status === V++) {
      cm.dispose();
      cm.openNpc("蘑菇神社_遗忘之林");
    }
  }
}