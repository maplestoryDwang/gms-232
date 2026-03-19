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
      cm.npc_ChangeController(3001651, "oid=375373", -225, 29, 7, -275, -175, 5, true, 0, false);
      cm.npc_ChangeController(3001684, 'oid=375374', 789, -31, 29, 779, 879, 5, true, 0, false);
      cm.npc_ChangeController(3001684, 'oid=375375', 416, -31, 14, 345, 445, 5, true, 0, false);
      cm.npc_ChangeController(3001684, "oid=375376", 612, -31, 24, 545, 645, 5, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375377', -870, 29, 5, -938, -838, 5, true, 0, false);
      cm.npc_ChangeController(3001682, "oid=375378", -733, 29, 21, -777, -677, 5, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375379', -14, 29, 9, -49, 51, 5, true, 0, false);
      cm.npc_ChangeController(3001682, 'oid=375380', 318, -31, 34, 254, 354, 4, true, 0, false);
      cm.npc_ChangeController(3001682, "oid=375381", 481, -31, 26, 409, 509, 4, true, 0, false);
      cm.npc_ChangeController(3001682, "oid=375382", 997, -31, 33, 977, 1077, 4, true, 0, false);
      cm.npc_ChangeController(3001682, "oid=375383", 929, -31, 32, 893, 993, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -240, 28);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（虽然对方戴着修行者的面具，可行为方式就是一只彻头彻尾的老鼠，\r\n现在再见到还是让人毛骨悚然。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#感觉和从前相比变得更加阴森了，圆月就在今夜升起，\r\n……时间所剩无多了啊。", 37, 3001651, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.updateInfoQuest(39598, "11=h0;31=h0;32=h0;33=h1;34=h1;15=h0;35=h0;16=h1;02=h0;03=h1;80=h1;23=h0;81=h1;24=h0;05=h0;82=h1;25=h0;06=h0;84=h0;27=h0;08=h0;85=h0;28=h0;09=h1;29=h0");
                      cm.forceStartQuest(39537, '');
                      cm.forceCompleteQuest(39537);
                      cm.gainExp(7617);
                      cm.forceStartQuest(39596, '');
                      cm.forceStartQuest(39595, '');
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.warp(410000230, 0, false);
                            cm.setStandAloneMode(false);
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
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
}