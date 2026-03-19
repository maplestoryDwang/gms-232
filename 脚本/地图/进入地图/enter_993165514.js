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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3005102, 'oid=620625', 185, 271, 3, 135, 235, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=620625", 'summon', 0, 0);
      cm.npc_ChangeController(3005127, "oid=620626", 310, 278, 4, 260, 360, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=620626", "summon", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_SetSpecialAction("oid=620625", "special", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 256, 290);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction('oid=620626', "die1", 1, 1);
              cm.inGameDirectionEvent_AskAnswerTime(800);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645223/Die", 100);
                cm.Npc_Fadeout('oid=620626', 0, 800);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#二十八……二十九……三十……", 37, 3005102, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#材料都集齐了呢。", 37, 3005102, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face7#我想了想，又拿不到铃铛，我为什么要做这种事……", 37, 3005102, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#格里！！！", 37, 3005100, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_Hero9(0, 3500);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=620625"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=620625", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, -85, 290);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.setStandAloneMode(false);
                                        cm.npc_LeaveField("oid=620625");
                                        cm.npc_LeaveField("oid=620626");
                                        cm.dispose();
                                        cm.warp(993165515, 0, true);
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
    }
  }
}