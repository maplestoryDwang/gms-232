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
      cm.curNodeEventEnd(true);
      cm.克里塞_获得技能();
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
      cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=0;lT=20/04/19;qSetDate=21/08/06;accSum=0;QuestCount=3;accCheck=210806215910595");
      cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=0;lT=20/04/19;qSetDate=21/08/06;accSum=57888;QuestCount=3;accCheck=210806215910595");
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_Text(["#fn黑体##fs18#<焕新城堡>入口", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那里就是焕新城堡啊。", 57, 0, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 300, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("真是美得名不虚传啊，\r\n快去看看吧。", 57, 0, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -520, -130);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 300, 0);
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
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
                                  cm.setStandAloneMode(false);
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.克里塞_获得技能();
                                  cm.updateInfoQuest(501250, "mapTuto=2");
                                  cm.dispose();
                                  cm.warp(993189103, 0, false);
                                  cm.setInGameDirectionMode(false, true, false);
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
    }
  }
}