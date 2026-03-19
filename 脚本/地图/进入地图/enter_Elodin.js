var status = -1;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = cm.getMapId();
  if (V == 101084400 && cm.isQuestActive(37167)) {
    cm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h2;04=h1");
  }
  if (cm.isQuestActive(37171)) {
    cm.setPartner(1, 1501010, 80002688, 0);
  }
  if (!cm.isQuestActive(37169)) {
    cm.removeAll(4036503);
    cm.removeAll(4220196);
  }
  if (!cm.isQuestActive(37173)) {
    cm.removeAll(4036505);
    cm.removeAll(4220197);
  }
  if (!cm.isQuestActive(37174)) {
    cm.removeAll(4036504);
  }
  if (!cm.isQuestActive(37176)) {
    cm.removeAll(4036506);
    cm.removeAll(4036507);
    cm.removeAll(4220198);
    cm.removeAll(2630243);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;