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
  if (cm.getMapId() == 940201700) {
    action940201700(f, E, e);
    return;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getMapId() == 940200700) {
        cm.playerMessage(-1, "消灭地区内的所有怪物，才能前往下一关卡。");
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
      } else {
        if (cm.getMapId() == 940200800) {
          cm.playerMessage(-1, "消灭地区内的所有怪物，才能前往下一关卡。");
          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
        } else {
          if (cm.getMapId() == 940200900) {
            cm.playerMessage(-1, "消灭地区内的所有怪物，才能前往下一关卡。");
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
          } else {
            if (cm.getMapId() == 940201500) {
              cm.setPartner(true, 3001209, 80002312, 0);
              cm.playerMessage(-1, "消灭地区内的所有怪物，才能前往下一关卡。");
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
            } else if (cm.getMapId() == 940201600) {
              cm.setPartner(true, 3001209, 80002312, 0);
              cm.playerMessage(-1, "消灭地区内的所有怪物，才能前往下一关卡。");
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
            }
          }
        }
      }
      cm.dispose();
    }
  }
}
function action940201700(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(3001243, "oid=252621", 649, 23, 43, 599, 699, 1, false, 0, false);
      cm.setPartner(true, 3001209, 80002312, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 653, 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#呃啊，救命啊！救命啊！咳、咳，我没办法呼吸了！", 37, 3001251, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#科尼这家伙，还是被人给抓住了。等处理完附近的事，必须赶快去救他！", 37, 3001270, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setStandAloneMode(false);
                          cm.playerMessage(-1, "消灭地区内的所有怪物，才能前往下一关卡。");
                          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                          cm.dispose();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}