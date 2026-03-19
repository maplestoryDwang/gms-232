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
    cm.updateInfoQuest(16215, "point=0;play=0;saved=0;life=100;chase=0");
    cm.fieldEffect_ScreenMsg("event/start");
    cm.fieldEffect_PlayFieldSound("Dojang/clear", 100);
    cm.getMap().startSimpleMapEffect("请救救我的朋友们……！", 5120175);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;