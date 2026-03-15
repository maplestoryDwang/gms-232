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
      cm.askYesNo_Bottom("这里很危险。你想放弃战斗，离开这里吗？\r\n#b（移动到镜中的光明神座。）#k", 56, 0);
    } else if (status === V++) {
      cm.playerMessage(5, "移动到镜中的光明神座。");
      cm.dispose();
      cm.warp(450007240, 0);
    }
  }
}