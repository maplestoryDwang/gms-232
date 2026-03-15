var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.dispose();
      if (cm.isQuestActive(40606)) {
        cm.warp(327090420, 0, false);
      } else {
        if (cm.isQuestActive(40607)) {
          cm.warp(327090440, 0, false);
        } else {
          if (cm.isQuestFinished(40704) && cm.getQuestStatus(40705) == 0) {
            cm.warp(328090410, 0, false);
          } else if (cm.isQuestActive(40800)) {
            cm.openNpc('镜世界_威尔');
          } else {
            cm.playerMessage(5, "漂浮不定的女神之泪……");
          }
        }
      }
    }
  }
}