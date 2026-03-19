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
  } else if (status === V++) {
    if (cm.isQuestFinished(39917) && cm.getQuestStatus(39920) == 0) {
      cm.onSetMapObjectMove("cernium_sky_a", [1, 255, 1]);
      cm.onSetMapObjectMove("cernium_sky_c", [1, 255, 1]);
      cm.fieldEffect_InsertCanvas(1, 50, 0, 0, 0, 100, 0);
      cm.onSetMapObjectMove("cernium_sky_b", [1, 255, 1]);
    } else {
      cm.onSetMapObjectMove("cernium_sky_a", [1, 0, 1]);
      cm.onSetMapObjectMove("cernium_sky_c", [1, 0, 1]);
      cm.onSetMapObjectMove("cernium_sky_b", [1, 0, 1]);
    }
    if (cm.getQuestStatus(39920) > 0 && cm.getQuestStatus(39921) == 0) {
      cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
    }
    cm.dispose();
  }
}