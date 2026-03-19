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
    cm.monadForceMove("white", 0, 0);
    if (cm.getQuestStatus(34740) == 0) {
      cm.updateInfoQuest(34770, "20=h1;21=h0;22=h0;23=h0;24=h0;25=h0;29=h0");
    }
    if (cm.isQuestActive(34752)) {
      cm.setPartner(1, 3002110, 80002360, 0);
    }
    if (cm.isQuestActive(34757)) {
      cm.warp(940204105, 0);
    }
    if (cm.isQuestFinished(34757) && !cm.isQuestFinished(34758)) {
      cm.warp(940204106, 0);
    }
    cm.cancelItem(2210205);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;