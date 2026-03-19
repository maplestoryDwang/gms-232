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
      if (cm.getMapId() == 450011420 || cm.getMapId() == 450011410) {
        cm.setPartner(1, 3003759, 80002577, 0);
        cm.setPartner(1, 3003760, 80002579, 0);
        cm.fieldEffect_PlayFieldSound("Sound/FarmSE.img/boxResult", 100);
      } else {
        if (cm.getMapId() == 450011530) {
          if (cm.isQuestActive(35717)) {
            cm.addPopupSay(0, 1500, '果然倒胃口……', '', 0);
            cm.addPopupSay(0, 1500, "黑漆漆的完全看不出外形……但黑影……", '', 0);
            cm.addPopupSay(0, 1500, "不。还是先去找其他人吧。那些一定是提示。", '', 0);
          } else {
            cm.dispose();
          }
        } else {
          if (cm.getMapId() == 450012100) {
            if (cm.isQuestFinished(35802) && !cm.isQuestActive(35803) && !cm.isQuestFinished(35803)) {
              cm.updateInfoQuest(35831, "52=h1;53=h1;55=h0");
            } else {
              cm.dispose();
            }
          } else {
            if (cm.getMapId() == 450012110) {
              if (cm.isQuestFinished(35803) && !cm.isQuestActive(35804) && !cm.isQuestFinished(35804)) {
                cm.updateInfoQuest(35831, "52=h1;53=h1;55=h1;56=h0");
              } else {
                cm.dispose();
              }
            } else {
              if (cm.getMapId() == 450016060) {
                if (cm.isQuestActive(37909)) {
                  cm.updateInfoQuest(37900, "06=h1;12=h1;");
                } else {
                  cm.dispose();
                }
              } else {
                if (cm.isQuestActive(34474)) {
                  var O = cm.getNumberFromQuestInfo(34474, 'fin');
                  if (O >= 1) {
                    cm.setPartner(1, 34480, 80002269, 0);
                  }
                  if (O >= 2) {
                    cm.setPartner(1, 34481, 80002269, 0);
                  }
                  if (O >= 3) {
                    cm.setPartner(1, 34482, 80002269, 0);
                  }
                  if (O >= 4) {
                    cm.setPartner(1, 34483, 80002269, 0);
                  }
                  if (O >= 5) {
                    cm.setPartner(1, 34484, 80002269, 0);
                  }
                  if (O >= 6) {
                    cm.setPartner(1, 34485, 80002269, 0);
                  }
                  if (O >= 7) {
                    cm.setPartner(1, 34486, 80002269, 0);
                  }
                } else {
                  if (cm.isQuestFinished(37711) && cm.getQuestStatus(37712) == 0) {
                    cm.setPartner(true, 3004730, 80002907, 0);
                    cm.setPartner(true, 3004731, 80002908, 0);
                  } else {
                    if (cm.isQuestFinished(37712) && !cm.isQuestFinished(37713)) {
                      cm.setPartner(true, 3004730, 80002907, 0);
                      cm.setPartner(true, 3004731, 80002908, 0);
                    } else if (cm.isQuestFinished(37714) && !cm.isQuestFinished(37715)) {
                      cm.setPartner(true, 3004730, 80002907, 0);
                      cm.setPartner(true, 3004731, 80002908, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;