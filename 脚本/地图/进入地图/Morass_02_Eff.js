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
  } else {
    if (status === V++) {
      if (cm.getMapId() == 940204040) {
        cm.userSetFieldFloating(940204040, 3, 3, 1);
        cm.addPopupSay(0, 2500, "#face0#士兵们……！难道失去意识了？！", '', 0);
        cm.playerMessage(-1, "消灭地区内的全部怪物后，才可以前往下一关。");
        cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
        cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
        cm.dispose();
      } else {
        if (cm.getMapId() == 940204050) {
          cm.userSetFieldFloating(940204050, 3, 3, 1);
          cm.addPopupSay(0, 2500, "#face0#我好像正一点点的失去肉体……", '', 0);
          cm.playerMessage(-1, "消灭地区内的全部怪物后，才可以前往下一关。");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
          cm.dispose();
        } else if (cm.getMapId() == 940204060) {
          cm.userSetFieldFloating(940204060, 3, 3, 1);
          cm.addPopupSay(0, 2500, "#face0#他们掉落的武器好像代替了肉体。", '', 0);
          cm.playerMessage(-1, "消灭地区内的全部怪物后，才可以前往下一关。");
          cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;