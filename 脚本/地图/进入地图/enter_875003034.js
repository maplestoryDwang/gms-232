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
      cm.npc_ChangeController(9401279, "oid=2153744", -1100, 150, 44, -1150, -1050, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153744", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_SetSpecialAction("oid=2153744", "die2", -1, 0);
      cm.sendNewEffects(17, [0, 1000, 1500, -1000, 230]);
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
            cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
            cm.sendNormalTalk_Bottom("#face2#咳咳，呃……", 37, 9401279, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/12", 100);
                cm.sendNormalTalk_Bottom("#face2#……果然……", 37, 9401279, false, true, 1);
              } else {
                if (status === V++) {
                  cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/13', 100);
                  cm.sendNormalTalk_Bottom("#face6##b为……为什么……？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/14", 100);
                    cm.sendNormalTalk_Bottom("#face6##b你真的背叛玄山派了吗？到底是为什么？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                      cm.sendNormalTalk_Bottom("#face6##b你……不是玄山派的大师兄吗！！！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#… ", 37, 9401279, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.emotion(1, 3000);
                              cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/16", 100);
                              cm.sendNormalTalk_Bottom("#face6##b拜托你解释一下。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/17', 100);
                                cm.sendNormalTalk_Bottom("#face6##b难道把这些黑道人物引上玄山的人，也是大师兄？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.emotion(1, 3000);
                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/18', 100);
                                    cm.sendNormalTalk_Bottom("#face6##b师兄！！！！！！！！！！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.setNpcSpecialActionReset("oid=2153744");
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.updateInfoQuest(65998, "move=2");
                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                          cm.sendNormalTalk_Bottom("#face2#不是说了吗？这是我的命运。", 37, 9401279, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/20', 100);
                                            cm.sendNormalTalk_Bottom("#face2#等下次再见面的时候……", 37, 9401279, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2153744", -1);
                                              cm.npc_SetForceMove("oid=2153744", -1, 1000, 300);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 350);
                                                  cm.sendNewEffects(13, [1500, -500, 0]);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/plop", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face6##b!!!!!!!!", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100);
                                                          cm.sendNormalTalk_Bottom("#face3##b…大师兄…", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                  cm.forceCompleteQuest(65947);
                                                                  cm.gainExp(21987);
                                                                  cm.npc_LeaveField("oid=2153744");
                                                                  cm.dispose();
                                                                  cm.warp(875003035, 0, false);
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
            }
          }
        }
      }
    }
  }
}