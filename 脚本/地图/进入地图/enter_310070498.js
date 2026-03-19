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
      cm.setPartner(1, 2155104, 80001702, 0);
      cm.sendNormalTalk_Bottom("这里…没有路啊。", 37, 2155104, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("去找找有没有能抓住往上爬的东西吧。", 37, 2155104, true, false);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}