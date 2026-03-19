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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -26, -150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3003674, "oid=2205322", -370, -70, 2, -420, -320, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2205322", 'summon', 0, 0);
        cm.npc_ChangeController(3003687, "oid=2205323", 620, -70, 3, 570, 670, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2205323", "summon", 0, 0);
        cm.npc_SetForceMove("oid=2205322", 1, 600, 130);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 640);
          cm.inGameDirectionEvent_PushScaleInfo(5500, 0, 1500, 5500, 620, -50);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(6500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#……这里有残骸。#b#ho##k，快把它清理掉。", 37, 3003674, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_QTE(0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_OneTimeAction(7, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/monster/M1_die", 100);
                    cm.npc_SetSpecialAction("oid=2205323", "die", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#呼……甲板上的残骸全部清理掉了。", 37, 3003674, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.forceStartQuest(35625, '');
                            cm.forceCompleteQuest(35625);
                            cm.gainExp(171586691);
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
                                  cm.npc_LeaveField("oid=2205322");
                                  cm.npc_LeaveField("oid=2205322");
                                  cm.npc_LeaveField("oid=2205323");
                                  cm.npc_LeaveField("oid=2205323");
                                  cm.dispose();
                                  cm.warp(993060058, 0, false);
                                  cm.setStandAloneMode(false);
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