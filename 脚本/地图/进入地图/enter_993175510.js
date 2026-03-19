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
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("这……？是什么呀。", 57, 0, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("不能让这些家伙待在屋子里……\r\n总之，先把它们消灭了再找钥匙吧。", 57, 0, true, true, 1);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}