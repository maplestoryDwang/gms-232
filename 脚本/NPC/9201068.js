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
      cm.askYesNo("现在这趟地铁还有很多空位。请准备好车票我才能让你上车。这会是一场长途旅程。想搭乘这趟地铁吗？", 0, 9201068);
    } else if (status === V++) {
      if (cm.getMapId() == 103020000) {
        if (cm.haveItem(4031711, 1)) {
          cm.gainItem(4031711, -1);
          cm.warp(600010001, 0, false);
        } else {
          cm.sendNormalTalk("噢 …… 你没带车票啊。没票我不能让你上车。要买票的话请询问地铁站服务员。", 0, 9201068, false, true);
        }
      } else if (cm.haveItem(4031713, 1)) {
        cm.gainItem(4031713, -1);
        cm.warp(103020000, 0, false);
      } else {
        cm.sendNormalTalk("噢 …… 你没带车票啊。没票我不能让你上车。要买票的话请询问地铁站服务员。", 0, 9201068, false, true);
      }
      cm.dispose();
    }
  }
}