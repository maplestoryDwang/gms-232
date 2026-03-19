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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530050, "oid=38919453", -178, 118, 18, -228, -128, 1, true, false);
      cm.npc_SetSpecialAction("oid=38919453", "summon", 0, 0);
      cm.npc_ChangeController(1530030, "oid=38919454", -278, 118, 19, -328, -228, 1, true, false);
      cm.npc_SetSpecialAction("oid=38919454", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("那我们先回去啦，#h0#。你也不要太难过了。", 37, 1530030, false, true);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=38919454", -1, 250, 100);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你收拾好心情之后，就回来吧。那么……", 37, 1530050, false, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=38919453", -1, 350, 100);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=38919454");
                  cm.npc_LeaveField("oid=38919454");
                  cm.npc_LeaveField("oid=38919453");
                  cm.npc_LeaveField("oid=38919453");
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("…这应该是我最后一次来这个学校了吧。", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 150, 622, 124);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(7171);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(0, 150, -178, 124);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(5837);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("还是回去吧……？", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    cm.effect_Voice("Ambience.img/vib", 100);
                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("是谁打电话给我呢？现在应该没人记得我了啊……", 57, 0, false, true);
                                      } else if (status === V++) {
                                        cm.forceCompleteQuest(33024);
                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                        cm.dispose();
                                        cm.warp(330000005, 0);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;