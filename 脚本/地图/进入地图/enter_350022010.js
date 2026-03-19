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
    cm.npc_ChangeController(1540446, "oid=34366", 498, 120, 6, 498, 548, 0, false, false);
    if (!cm.isQuestFinished(33168)) {
      cm.forceCompleteQuest(33168);
    }
    cm.setAmbience("Ambience.img/warfare_far", 100, 60);
    cm.setPartner(1, 1540765, 80001601, 0);
    cm.addPopupSay(1540451, 2000, "快抓紧时间吧. \r\n我们到外面去吧. ", "Voice3.img/BlackHeaven/nh/11");
    cm.updateInfoQuest(33128, "act1=350013000;act2=350022010");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;