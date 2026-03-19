var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34628) && cm.getQuestStatus(34629) == 0) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(34639) && cm.getQuestStatus(34640) == 0) {
    action2(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1;failC=1;2=1;3=1;5=1;7=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3001251, "oid=683398", 380, 11, 46, 330, 430, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=683398", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.sendNormalTalk_Bottom("#face0#终、终于抵达这里了，现在应该……现在应该做的是……", 37, 3001251, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face4#已经没法回头了，事已至此，只能拼了。快消灭那些家伙！", 37, 3001270, true, true, 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                cm.npc_LeaveField("oid=683398");
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.setPartner(true, 3001251, 80002311, 0);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34655, "10=1;11=1;gender=1;0=1;failC=1;2=1;3=1;4=1;5=1;6=1;7=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
          cm.inGameDirectionEvent_AskAnswerTime(100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#波、波波，波波……", 37, 3001252, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}