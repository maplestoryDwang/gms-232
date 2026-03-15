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
      cm.askYesNo("#b(出现一把可疑的吉他。要不要去看一下？)#k", 2, 0);
    } else if (status === V++) {
      cm.dispose();
      cm.openNpc("副本_废都塔_摇滚之魂");
    }
  }
}