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
  } else if (status === V++) {
    cm.npc_SetSpecialAction("oid=37037", 'on', -1, 1);
    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/gudolOpen", 100);
    cm.onSetBackEffect("bh_1200_1", 1, 1, 0, 0);
    cm.地图特效_开关落脚点([25], [0]);
    cm.onSetBackEffect("bh_1200_2", 1, 1, 0, 0);
    cm.地图特效_开关落脚点([27], [0]);
    cm.onSetBackEffect("bh_1200_3", 1, 1, 0, 0);
    cm.地图特效_开关落脚点([26], [0]);
    cm.onSetBackEffect("bh_1200_4", 1, 1, 0, 0);
    cm.地图特效_开关落脚点([28], [0]);
    cm.dispose();
  }
}