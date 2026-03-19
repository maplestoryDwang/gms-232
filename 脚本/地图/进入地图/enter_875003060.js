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
      cm.npc_ChangeController(9401280, "oid=2757270", -100, 70, 1, -150, -50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757270", "summon", 0, 0);
      cm.updateInfoQuest(65998, "move=1");
      cm.sendNewEffects(17, [0, 1000, 1500, -450, 130]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2757270", -1, 300, 80);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
              cm.sendNormalTalk_Bottom("#face0#……真的吗？", 37, 9401280, false, true, 1);
            } else {
              if (status === V++) {
                cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                cm.sendNormalTalk_Bottom("#face0#……你……你真的是武神重生？", 37, 9401280, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3##b… ", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                        cm.sendNormalTalk_Bottom("#face4#……为什么……不说话……", 37, 9401280, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                              cm.sendNormalTalk_Bottom("#face6##b那种东西不重要。我是玄山派的墨玄。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                cm.sendNormalTalk_Bottom("#face4#是的，对拥有一切的你来说，也许并不重要。", 37, 9401280, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/6', 100);
                                  cm.sendNormalTalk_Bottom("#face0#但是……这对一生都在与你做比较，拼命努力想要超越你的人来说……这样的事实太残忍了。", 37, 9401280, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                    cm.sendNormalTalk_Bottom("#face0#如果一开始就知道是无法超越的力量，结果会不会不同呢……？", 37, 9401280, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                      cm.sendNormalTalk_Bottom("#face6##b不要用那种话为自己的罪行狡辩，云雾……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                                        cm.sendNormalTalk_Bottom("#face0#很好，很好。这样才对……", 37, 9401280, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/10", 100);
                                          cm.sendNormalTalk_Bottom("#face1#但是……我还是想胜过你。", 37, 9401280, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2757270", "attack2", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
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
                                                    cm.dispose();
                                                    cm.warp(875002001, 0, false);
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