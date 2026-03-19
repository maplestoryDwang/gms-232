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
    cm.setPartner(0, 9062200, 0, 0);
    cm.getMap().startSimpleMapEffect("那些家伙真是胆大包天，居然敢袭击村庄！全都消灭掉！", 5120159);
    cm.protectWallWave(0);
    cm.setQuestCustomData(9930001, 0);
    cm.protectWallLife(20);
    em.setProperty('hp', 20);
    cm.fieldEffect_ScreenMsg("defense/count");
    cm.dispose();
    em.schedule("mob1", 3000);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;