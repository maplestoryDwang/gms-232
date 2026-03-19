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
  } else {
    if (status === V++) {
      if (cm.getMapId() == 993164100) {
        cm.dispose();
      } else {
        if (cm.getMapId() == 993164200 || cm.getMapId() == 993164600 || cm.getMapId() == 993164900) {
          cm.playerMessage(-1, "只有除掉野外的所有怪物才能前往下一关卡。");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
        } else {
          if (cm.getMapId() == 993164300 || cm.getMapId() == 993164700 || cm.getMapId() == 993165000) {
            cm.playerMessage(-1, "只有除掉野外的所有怪物才能前往下一关卡。");
            cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
            cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
          } else if (cm.getMapId() == 993164400 || cm.getMapId() == 993164800 || cm.getMapId() == 993165100) {
            cm.playerMessage(-1, "只有除掉野外的所有怪物才能前往下一关卡。");
            cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
          }
        }
      }
      cm.dispose();
    }
  }
}