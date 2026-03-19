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
    cm.teachSkill(80011562, -1, 0);
    cm.teachSkill(80011565, -1, 0);
    cm.teachSkill(80011561, -1, 0);
    cm.teachSkill(80011567, -1, 0);
    cm.teachSkill(80011641, -1, 0);
    cm.onActionBarResult(6, -1);
    cm.playerMessage(5, "赶紧加入战场吧。");
    cm.updateInfoQuest(64001, "man=720;stage=0;enemy=401253;seq=0;mine=0;companion=108372654;dir0=0");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;