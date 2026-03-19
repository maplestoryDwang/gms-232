var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(39208)) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2850, -570);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155104, "oid=6573056", 3150, -600, 7, 3100, 3200, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=6573056", "summon", 0, 0);
        cm.npc_ChangeController(2155105, "oid=6573057", 2844, -600, 8, 2794, 2894, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=6573057", 'summon', 0, 0);
        cm.npc_ChangeController(2155113, "oid=6573058", 3680, -600, 6, 3630, 3730, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=6573058", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.sendNormalTalk_Bottom("嗯……", 37, 2155104, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=6573056", -1, 130, 200);
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=6573056", 1, 130, 200);
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=6573056"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(900);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#啊…等等，难道？", 37, 2155121, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=6573056", -1, 160, 200);
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("没事，是这里……", 37, 2155104, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=6573057", "open", -1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/hidden_open", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(900);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(900);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=6573057", "opened", -1, 1);
                                  cm.sendNormalTalk_Bottom("#face2#没错…这个原来有这样的通道。\r\n嗯！从这里可以回去。\r\n那里是…呃！我的头…又痛了…", 37, 2155121, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm40.img/SecretMissionBase", 0, 0);
                                    cm.npc_SetSpecialAction("oid=6573056", "pain", -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1800);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 3300, -640);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                        cm.sendNormalTalk_Bottom("发现入侵者！\r\n发现入侵者！", 37, 2155113, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2850, -640);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                            cm.sendNormalTalk_Bottom("该死…先沿着回去的路逃跑吧。", 57, 0, false, true);
                                          } else if (status === V++) {
                                            cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;5m=0;1q=1;6m=1;2q=1;3q=1;4q=1;5q=1;dqCount=1;story=1");
                                            cm.forceStartQuest(39206, '');
                                            cm.eventSKill(0);
                                            cm.warp(310070000, 4, false);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.npc_LeaveField("oid=6573056");
                                            cm.npc_LeaveField("oid=6573056");
                                            cm.npc_LeaveField("oid=6573057");
                                            cm.npc_LeaveField("oid=6573057");
                                            cm.npc_LeaveField("oid=6573058");
                                            cm.npc_LeaveField("oid=6573058");
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
}
function action1(f, E, e) {
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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2850, -570);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155104, "oid=45406019", 2887, -600, 7, 2837, 2937, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=45406019", 'summon', 0, 0);
        cm.npc_ChangeController(2155105, "oid=45406020", 2844, -600, 8, 2794, 2894, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=45406020", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=45406020", "opened", -1, 1);
        cm.sendNormalTalk_Bottom("没错…是这里。\r\n我以前常来的…\r\n准备好了吗？我们进去吧。", 37, 2155104, false, true);
      } else if (status === V++) {
        cm.eventSKill(0);
        cm.warp(310070482, 0, false);
        cm.setInGameDirectionMode(false, true, false);
        cm.npc_LeaveField("oid=45406019");
        cm.npc_LeaveField("oid=45406019");
        cm.npc_LeaveField("oid=45406020");
        cm.npc_LeaveField("oid=45406020");
        cm.dispose();
      }
    }
  }
}