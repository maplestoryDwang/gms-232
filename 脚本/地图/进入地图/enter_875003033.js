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
      cm.npc_ChangeController(9401375, "oid=2153709", -1100, 150, 44, -1150, -1050, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153709", "summon", 0, 0);
      cm.npc_ChangeController(9401279, "oid=2153710", -1200, 150, 44, -1250, -1150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153710", "summon", 0, 0);
      cm.updateInfoQuest(65998, "move=1");
      cm.npc_ChangeController(9401375, "oid=2153711", -1300, 150, 44, -1350, -1250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153711", "summon", 0, 0);
      cm.npc_ChangeController(9401376, "oid=2153712", -1400, 150, 44, -1450, -1350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153712", "summon", 0, 0);
      cm.npc_ChangeController(9401376, "oid=2153713", -1500, 150, 53, -1550, -1450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153713", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 1000);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNewEffects(12, [1000, -1200, 215]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
              cm.sendNormalTalk_Bottom("#face3##b大师兄！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#!?", 37, 9401279, true, true, 1);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=2153710", 1);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                    cm.sendNormalTalk_Bottom("#face3##b不……是吧？一定不是吧！大师兄？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2153709", 1);
                      cm.npc_setForceFlip("oid=2153711", 1);
                      cm.npc_setForceFlip("oid=2153712", 1);
                      cm.npc_setForceFlip("oid=2153713", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                        cm.sendNormalTalk_Bottom("#face3##b拜托告诉我不是的！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#……够了……", 37, 9401279, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                              cm.sendNormalTalk_Bottom("#face1#够了！！！！！", 37, 9401279, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                  cm.sendNormalTalk_Bottom("#face1#……这是我的命运。", 37, 9401279, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2153710", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2153710", -1, 100, 100);
                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                      cm.sendNormalTalk_Bottom("#face1#干掉他。", 37, 9401279, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=2153713", 1, 300, 200);
                                          cm.npc_SetForceMove("oid=2153712", 1, 300, 200);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.playVideoByScript("Mukhyun2.avi");
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
                                                    cm.forceStartQuest(65947, '');
                                                    cm.npc_LeaveField("oid=2153709");
                                                    cm.npc_LeaveField("oid=2153710");
                                                    cm.npc_LeaveField("oid=2153711");
                                                    cm.npc_LeaveField("oid=2153712");
                                                    cm.npc_LeaveField("oid=2153713");
                                                    cm.dispose();
                                                    cm.warp(875004900, 0, false);
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
          }
        }
      }
    }
  }
}