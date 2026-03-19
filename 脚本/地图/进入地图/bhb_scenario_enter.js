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
    cm.npc_ChangeController(1540446, "oid=55843", 738, 61, 1, 688, 788, 1, false, 0, false);
    cm.setAmbience("Ambience.img/gravity", 100, 60);
    cm.setAmbience("Ambience.img/flyingdeck_fast", 40, 60);
    cm.forceStartQuest(33125, '');
    cm.updateInfoQuest(33290, '');
    cm.updateInfoQuest(33291, '');
    cm.updateInfoQuest(33292, '');
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350058700;act6=350060000");
    cm.addPopupSay(0, 2000, "……多亏了大家的牺牲与协助, 我才能走到这一步. ", '', 0);
    cm.addPopupSay(0, 2000, "好了, 现在只剩下最后一场战斗了. ", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;