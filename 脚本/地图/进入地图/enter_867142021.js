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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9401116, "oid=7166351", 810, 300, 17, 760, 860, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=7166351", "summon", 0, 0);
      cm.npc_ChangeController(9401118, "oid=7166352", 370, 300, 43, 320, 420, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7166352", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("终于结束了吗……？\r\n赛恩的新本体也完全被破坏了，工厂不会再重新运转了……", 56, 0, 0, 1);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
          cm.effect_REPEAT("Effect/DirectionPL.img/effect/Beautyroid3/0", 1, 1, 0, 0, 0);
          cm.effect_REPEAT("Effect/DirectionPL.img/effect/Beautyroid3/1", 1, 1, 0, 0, 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 0, 990, 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2200);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 1000, 990, 250);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 1000, 190, 250);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(200, 0, 1000, 2147483647, 2147483647, 2147483647);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  cm.effect_NormalSpeechBalloon('!!', 1, 0, 0, 1500, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("啊……？！#h0#，四周……全部都是#b赛恩#k的脸……？！", 36, 9401071, 0, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b赛恩#k现在还活着…\r\n就算消灭了本体……他还会活着。可能还会更强大……", 36, 9401071, 1, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("这里太危险了，我们先躲到安全区域吧。\r\n克拉尼亚的#b密室#k应该比较安全，我认识路。", 56, 0, 0, 1);
                                        } else if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                          cm.warp(867142011, 0, false);
                                          cm.eventSKill(0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.setStandAloneMode(false);
                                          cm.forceCompleteQuest(64924);
                                          cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                          cm.forceCompleteQuest(64924);
                                          cm.gainItem(4310284, 100);
                                          cm.npc_LeaveField("oid=7166351");
                                          cm.npc_LeaveField("oid=7166352");
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