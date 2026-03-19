var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getPlayer().getGender() == 0) {
    var V = 1531000;
  } else {
    var V = 1531052;
  }
  ;
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -50, 10);
    } else {
      if (status === O++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.npc_ChangeController(1531003, "oid=5568374", -360, 0, 8, -410, -310, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=5568374", "summon", 0, 0);
        cm.npc_ChangeController(1531040, "oid=5568375", 150, 0, 20, 100, 200, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=5568375", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=5568375", "wait", -1, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === O++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === O++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === O++) {
              cm.setNpcSpecialActionReset("oid=5568375");
              cm.npc_SetSpecialAction("oid=5568375", "die", 1, 0);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kinesis/kingOmen", 100);
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2700301/die1", 100);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === O++) {
                cm.sendNormalTalk_Bottom("#face0#做得好！！简直是强力一击呢！", 37, 1531003, false, true);
              } else {
                if (status === O++) {
                  cm.sendNormalTalk_Bottom("#face0#内罗，快对尤娜施展束缚魔法！", 37, V, true, true);
                } else {
                  if (status === O++) {
                    cm.sendNormalTalk_Bottom("#face0#好的，走着！", 37, 1531003, true, true);
                  } else {
                    if (status === O++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === O++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === O++) {
                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === O++) {
                            cm.sendNormalTalk_Bottom("尤娜，你振作点。", 37, V, false, true);
                          } else {
                            if (status === O++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === O++) {
                                cm.sendNormalTalk_Bottom("#face2##h0#……？\r\n这里是哪儿……？我的身体好奇怪……", 37, 1531002, false, true);
                              } else {
                                if (status === O++) {
                                  cm.sendNormalTalk_Bottom("很沉吧？尤娜。\r\n现在赶紧下来吧，我们回家。", 37, V, true, true);
                                } else {
                                  if (status === O++) {
                                    cm.sendNormalTalk_Bottom("#face3#……？！", 37, 1531002, true, true);
                                  } else {
                                    if (status === O++) {
                                      cm.sendNormalTalk_Bottom("赶紧下来，你做什么呢，尤娜。", 37, V, true, true);
                                    } else {
                                      if (status === O++) {
                                        cm.sendNormalTalk_Bottom("#face4#啊，我下不来……", 37, 1531002, true, true);
                                      } else {
                                        if (status === O++) {
                                          cm.sendNormalTalk_Bottom('……你说什么？', 37, V, true, true);
                                        } else if (status === O++) {
                                          cm.eventSKill(0);
                                          cm.warp(331005410, 0, true);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.npc_LeaveField("oid=5568374");
                                          cm.npc_LeaveField("oid=5568374");
                                          cm.npc_LeaveField("oid=5568375");
                                          cm.npc_LeaveField("oid=5568375");
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
            }
          }
        }
      }
    }
  }
}