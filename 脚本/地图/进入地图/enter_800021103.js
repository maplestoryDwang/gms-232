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
      cm.forceStartQuest(58732, '');
      cm.forceCompleteQuest(58731);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111011, "oid=3568273", 194, 0, 111, 144, 244, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=3568273", "summon", 0, 0);
        cm.npc_ChangeController(9111012, "oid=3568274", 1000, 70, 119, 950, 1050, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3568274", "summon", 0, 0);
        cm.npc_ChangeController(9111019, "oid=3568275", 800, 70, 117, 750, 850, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=3568275", "summon", 0, 0);
        cm.npc_ChangeController(9111020, "oid=3568276", 1200, 70, 84, 1150, 1250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3568276", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=3568273", 1, 320, 200);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon("#fn黑体##fs18#镰鼬？", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9111011, null, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(900, 0, 1800, 1000, 814, 35);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#镰鼬？我刚才过来路上看见的痕迹果然是你的。", 37, 9111011, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#棘鬼，你好呀？真没想到会在这种地方遇到你！", 37, 9111012, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#镰鼬老兄……你来这里是要干啥？", 37, 9111011, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#详细情况等消灭了这帮家伙再说吧。眼下的情况不太适合叙旧啊！", 37, 9111012, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=3568274", 'attack', 1620, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1620);
                      } else {
                        if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=3568274");
                          cm.npc_SetSpecialAction("oid=3568275", 'die1', 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(800);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=3568275");
                            cm.npc_LeaveField("oid=3568275");
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(900, 0, 1800, 1000, -86, 35);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(900);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("黄鼠狼会说话耶……", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(900, 0, 1000, 1000, 814, 35);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else if (status === V++) {
                                      cm.dispose();
                                      cm.warp(800021020, 0, false);
                                      cm.npc_LeaveField("oid=3568276");
                                      cm.npc_LeaveField("oid=3568276");
                                      cm.npc_LeaveField("oid=3568273");
                                      cm.npc_LeaveField("oid=3568273");
                                      cm.npc_LeaveField("oid=3568274");
                                      cm.npc_LeaveField("oid=3568274");
                                      cm.eventSKill(0);
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