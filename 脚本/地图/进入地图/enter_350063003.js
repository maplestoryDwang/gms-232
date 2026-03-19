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
    cm.setAmbience("Ambience.img/warfare_far", 130, 60);
    cm.setAmbience("Ambience.img/flyingdeck_fire", 100, 60);
    cm.setAmbience("Ambience.img/flyingdeck", 200, 60);
    cm.updateInfoQuest(33266, "save=1;or=1;he=0");
    cm.updateInfoQuest(33266, "save=2;or=1;he=0");
    cm.userSetFieldFloating(350063003, 5, 5, 20);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;