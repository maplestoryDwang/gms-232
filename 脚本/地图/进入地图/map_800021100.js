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
      cm.updateInfoQuest(58730, "state=1");
      cm.updateInfoQuest(58711, "10=4;0=2;1=3;2=1;3=4;4=4;5=4;6=4;7=4;8=4;9=4");
      cm.forceCompleteQuest(58730);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1800, 1000, 1667, -15);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(9111011, "oid=3553690", 2100, 22, 25, 2050, 2150, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=3553690", "summon", 0, 0);
                cm.npc_ChangeController(9111019, "oid=3553691", 2600, 22, 36, 2550, 2650, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=3553691", "summon", 0, 0);
                cm.npc_ChangeController(9111020, "oid=3553692", 2720, 22, 20, 2670, 2770, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=3553692", "summon", 0, 0);
                cm.npc_ChangeController(9111021, "oid=3553693", 2840, 22, 38, 2790, 2890, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=3553693", 'summon', 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_NormalSpeechBalloon("从那边传来了奇怪的声音……", 1, 0, 1, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1800, 1000, 2367, -15);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                        cm.effect_NormalSpeechBalloon("#fn黑体##fs18#呜呜呜呜……", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 9111019, null, cm.getPlayer().getId());
                        cm.effect_NormalSpeechBalloon("#fn黑体##fs18#呜……呜呜呜……", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 9111020, null, cm.getPlayer().getId());
                        cm.effect_NormalSpeechBalloon("#fn黑体##fs18#呜……", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 9111021, null, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=3553691", -1, 200, 100);
                          cm.npc_SetForceMove("oid=3553692", -1, 200, 100);
                          cm.npc_SetForceMove("oid=3553693", -1, 200, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……我本来不想做这么绝的。实在是没办法。", 37, 9111011, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=3553690", "Attack1", 0, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=3553691", "hit1", 0, 1);
                                  cm.npc_SetSpecialAction("oid=3553692", "hit1", 0, 1);
                                  cm.npc_SetSpecialAction("oid=3553693", "hit1", 0, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=3553691", "die1", 0, 1);
                                    cm.npc_SetSpecialAction("oid=3553692", "die1", 0, 1);
                                    cm.npc_SetSpecialAction("oid=3553693", "die1", 0, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=3553693");
                                      cm.npc_LeaveField("oid=3553693");
                                      cm.npc_LeaveField("oid=3553691");
                                      cm.npc_LeaveField("oid=3553691");
                                      cm.npc_LeaveField("oid=3553692");
                                      cm.npc_LeaveField("oid=3553692");
                                      cm.sendNormalTalk_Bottom("(他是谁？那些妖怪正在攻击他，去帮帮忙吧。)", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=3553690");
                                        cm.npc_LeaveField("oid=3553690");
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(0);
                                          } else if (status === V++) {
                                            cm.playerMessage(5, "请在规定时间内消灭所有妖鬼。");
                                            cm.eventSKill(0);
                                            cm.dispose();
                                            cm.openNpc('蘑菇神社_恶鬼之森');
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
  }
}