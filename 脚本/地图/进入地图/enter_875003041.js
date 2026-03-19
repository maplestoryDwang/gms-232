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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401283, "oid=2154515", 190, -720, 78, 140, 240, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154515", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNewEffects(17, [0, 1000, 1500, 130, -600]);
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
            cm.sendNormalTalk_Bottom("#face3##b是这里吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#是的，据说有一群可疑的黑衣人一连好几天都待在这里。", 37, 9401283, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNewEffects(12, [4000, 130, 300]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##b好像看不出有什么奇怪的地方。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.sendNewEffects(12, [0, 130, -600]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.sendNormalTalk_Bottom("#face0#林中之城也一样。\r\n有人几天内在同一个地方看到了他们好几次，不知道他们去那里干了什么。", 37, 9401283, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##b会不会……是在找什么东西呢？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2154515"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                              cm.sendNormalTalk_Bottom("#face0#……寻找什么东西！？确实有这个可能！", 37, 9401283, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#假设他们正在寻找什么……就应该打听一下这里有什么特别的东西！\r\n我们回到村里去吧！", 37, 9401283, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2154515", 1, 300, 150);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNewEffects(14, [0, 2000, 1000]);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNewEffects(19, [0]);
                                      } else if (status === V++) {
                                        cm.forceCompleteQuest(65965);
                                        cm.npc_LeaveField("oid=2154515");
                                        cm.dispose();
                                        cm.warp(211000000, 13, false);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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