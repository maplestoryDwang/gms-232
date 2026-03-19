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
    if (cm.getQuestStatus(40606) > 0 && !cm.isQuestFinished(40800)) {
      cm.fieldEffect_PlayBGM("Bgm33.img/NastyLiar", 0, 0);
    } else {
      cm.fieldEffect_PlayBGM("Bgm33.img/ShadowTemple", 0, 0);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;