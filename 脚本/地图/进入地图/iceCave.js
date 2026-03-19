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
    cm.setInGameDirectionMode(true);
    cm.setStandAloneMode(true);
    cm.teachSkill(20000014, -1, 0);
    cm.teachSkill(20000015, -1, 0);
    cm.teachSkill(20000016, -1, 0);
    cm.teachSkill(20000017, -1, 0);
    cm.teachSkill(20000018, -1, 0);
    cm.teachSkill(20001295, 1, 0);
    cm.playerMessage(-1, "学会了战斗步伐技能");
    cm.setInGameDirectionMode(false);
    cm.effect_Direction("Effect/Direction1.img/aranTutorial/ClickLilin");
    cm.dispose();
  }
}