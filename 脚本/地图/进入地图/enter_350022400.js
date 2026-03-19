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
    cm.npc_ChangeController(1540446, "oid=34559", -453, 144, 47, -503, -450, 1, false, false);
    cm.setAmbience("Ambience.img/warfare_far", 100, 60);
    cm.setPartner(1, 1540765, 80001601, 0);
    cm.setPartner(1, 1540766, 80001602, 0);
    cm.cameraSwitch_PushSwitchMoveInfo("center", 3000);
    cm.addPopupSay(1540453, 2000, "我有种不好的预感. \r\n我们快抓紧时间吧. ", "Voice3.img/BlackHeaven/hel/4");
    cm.useItem(2023401);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;