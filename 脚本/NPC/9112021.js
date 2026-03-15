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
      if (cm.getMapId() == 800022009) {
        cm.askYesNo("你们完蛋啦！\r\n(接受时，将开始追击战。)", 4, 9111025);
      } else {
        cm.sendOk("到底什么情况？", 9112021);
        cm.dispose();
      }
    } else if (status === V++) {
      cm.addNumberForQuestInfo(58751, "tryCount", 1);
      cm.dispose();
      cm.openNpc("蘑菇神社_亡者窟2");
    }
  }
}