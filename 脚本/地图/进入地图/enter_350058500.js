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
    cm.npc_ChangeController(1540446, "oid=55821", 143, 61, 5, 93, 193, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350058500");
    cm.setPartner(1, 1540721, 80001638, 0);
    cm.setPartner(1, 1540722, 80001637, 0);
    cm.setPartner(1, 1540451, 80001636, 0);
    cm.addPopupSay(1540453, 2000, "防毒面罩的净化筒已经老化. 我们不能在这里停留太长时间. ", '', 0);
    cm.addPopupSay(1540452, 2000, "那真是太好了. 我也不想在这里待太久. ", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;