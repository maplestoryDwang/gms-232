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
    cm.gainSkillBuff(80001630);
    cm.userSetFieldFloating(350063001, 5, 5, 20);
    cm.setAmbience("Ambience.img/warfare_far", 100, 60);
    cm.setAmbience("Ambience.img/flyingdeck_thunder", 80, 60);
    cm.addPopupSay(1540499, 1000, "重死了, 真是的!", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;