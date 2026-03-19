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
      if (cm.getMapId() == 993060800) {
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
      } else {
        if (cm.getMapId() == 993060900) {
          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
        } else {
          if (cm.getMapId() == 993061000) {
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
          } else {
            if (cm.getMapId() == 993060100) {
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
            } else {
              if (cm.getMapId() == 993060200) {
                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
              } else {
                if (cm.getMapId() == 993060300) {
                  cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                } else {
                  if (cm.getMapId() == 993060500) {
                    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                  } else {
                    if (cm.getMapId() == 993060600) {
                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
                    } else if (cm.getMapId() == 993060700) {
                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                    }
                  }
                }
              }
            }
          }
        }
      }
      cm.dispose();
    }
  }
}