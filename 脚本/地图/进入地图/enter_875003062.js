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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 185, 70);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401281, "oid=2757499", 330, 70, 2, 280, 380, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757499", 'summon', 0, 0);
      cm.npc_ChangeController(9401277, "oid=2757500", -100, 70, 1, -150, -50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757500", "summon", 0, 0);
      cm.setNPC_Fadein(9401277, 1);
      cm.npc_ChangeController(9401288, "oid=2757501", -150, 70, 1, -200, -100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757501", "summon", 0, 0);
      cm.setNPC_Fadein(9401288, 1);
      cm.npc_ChangeController(9401305, "oid=2757502", -200, 70, 1, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757502", "summon", 0, 0);
      cm.npc_ChangeController(9401306, "oid=2757503", -250, 70, 8, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757503", "summon", 0, 0);
      cm.npc_ChangeController(9401278, "oid=2757504", -300, 70, 8, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757504", "summon", 0, 0);
      cm.setNPC_Fadein(9401278, 1);
      cm.npc_ChangeController(9401285, "oid=2757505", 650, 70, 3, 600, 700, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757505", "summon", 0, 0);
      cm.setNPC_Fadein(9401285, 1);
      cm.npc_ChangeController(9401303, "oid=2757506", 700, 70, 9, 650, 750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757506", "summon", 0, 0);
      cm.npc_ChangeController(9401287, "oid=2757507", 750, 70, 9, 700, 800, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757507", "summon", 0, 0);
      cm.setNPC_Fadein(9401287, 1);
      cm.npc_ChangeController(9401304, "oid=2757508", 800, 70, 9, 750, 850, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757508", "summon", 0, 0);
      cm.npc_ChangeController(9401299, "oid=2757509", 850, 70, 10, 800, 900, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757509", "summon", 0, 0);
      cm.setNPC_Fadein(9401299, 1);
      cm.fieldEffect_Hero9(0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 280, 140]);
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
            cm.sendNormalTalk_Bottom("#face0#呃，武、武神……你，还是那么强……", 37, 9401281, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#这一刻，我已经等很久了……", 37, 9401281, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#要不是……那个老头……的话……", 37, 9401281, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#……魔道……天下……万……魔……仰……伏……", 37, 9401281, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2757499", "die", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=2757499");
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                      cm.sendNormalTalk_Bottom("#face7##b（最后……还是没问……武神前生到底是不是魔教的教主。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##b...", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2757500", 1, 220, 200);
                          cm.npc_SetForceMove("oid=2757501", 1, 200, 200);
                          cm.npc_SetForceMove("oid=2757502", 1, 200, 200);
                          cm.npc_SetForceMove("oid=2757503", 1, 200, 200);
                          cm.npc_SetForceMove("oid=2757504", 1, 200, 200);
                          cm.npc_SetForceMove("oid=2757505", -1, 210, 200);
                          cm.npc_SetForceMove("oid=2757506", -1, 200, 200);
                          cm.npc_SetForceMove("oid=2757507", -1, 200, 200);
                          cm.npc_SetForceMove("oid=2757508", -1, 200, 200);
                          cm.npc_SetForceMove("oid=2757509", -1, 200, 200);
                          cm.sendNewEffects(14, [1000, 2000, 1500]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2757500"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("BgmMH/Fate", 0, 0);
                                cm.fieldEffect_Hero9(-2, 3000);
                                cm.sendNormalTalk_Bottom("#face2#赢、赢了！" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，你果然最厉害啦！", 37, 9401277, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("哇啊啊啊！我们打败了魔教！", 37, 9401303, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1##b（但是，那个已经不重要了。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#藏在巢穴深处的其余魔教手下也全部干掉了，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 37, 9401277, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                          cm.emotion(2, 2000);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('终于……报仇……', 37, 9401285, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2757500", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#有人受伤吗？！", 37, 9401277, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  cm.effect_NormalSpeechBalloon("没有！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401305, null, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon("全都没有大碍！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401287, null, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2757500", 1);
                                                    cm.sendNormalTalk_Bottom('墨玄' + (cm.getPlayer().getGender() == 0 ? '师弟' : '师妹') + '，你可真厉害！', 37, 9401288, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1##b你们也……很了不起。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1##b要是没有你们……我不可能赢。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(900);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                                            cm.emotion(2, 2000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2##b辛苦了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                cm.effect_NormalSpeechBalloon("是，师父！！！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401288, null, cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon('师父也是！', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401305, null, cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon("是，师父！！！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401306, null, cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon("哇啊啊啊啊！！！！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401303, null, cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon("是，师父！！！！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401287, null, cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon('哇啊啊！！！！！！', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401304, null, cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=2757500", 1, 50, 50);
                                                                  cm.npc_SetForceMove("oid=2757504", 1, 190, 100);
                                                                  cm.npc_SetForceMove("oid=2757505", -1, 30, 100);
                                                                  cm.npc_setForceFlip("oid=2757501", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    cm.effect_NormalSpeechBalloon("看到我刚才的回旋踢了吗？！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401288, null, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=2757506", 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      cm.effect_NormalSpeechBalloon("虽然是第一次实战，但并不害怕。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401303, null, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                        cm.effect_NormalSpeechBalloon("当然！真多亏了你，才保住性命。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401306, null, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          cm.effect_NormalSpeechBalloon("没错！有师父们在呢！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401304, null, cm.getPlayer().getId());
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                            cm.sendNewEffects(17, [0, 1000, 2000, 280, 140]);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                cm.sendNormalTalk_Bottom("#face0##b已经是受了伤的状态。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#看来云雾和手下们想要配制的灵药，就是为长老配制的。", 37, 9401278, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#是那天……被掌门人打伤的吧？", 37, 9401277, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0##b没想到在最后时刻还得到了掌门人的帮助。这份大恩真是无以为报……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#就像现在这样带好玄山派，继承掌门人的遗志，就已经足够了。", 37, 9401277, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#辛苦了，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '。回去吧……回家。', 37, 9401277, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1##b走吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
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
                                                                                                  cm.npc_LeaveField("oid=2757500");
                                                                                                  cm.npc_LeaveField("oid=2757501");
                                                                                                  cm.npc_LeaveField("oid=2757502");
                                                                                                  cm.npc_LeaveField("oid=2757503");
                                                                                                  cm.npc_LeaveField("oid=2757504");
                                                                                                  cm.npc_LeaveField("oid=2757505");
                                                                                                  cm.npc_LeaveField("oid=2757506");
                                                                                                  cm.npc_LeaveField("oid=2757507");
                                                                                                  cm.npc_LeaveField("oid=2757508");
                                                                                                  cm.npc_LeaveField("oid=2757509");
                                                                                                  cm.dispose();
                                                                                                  cm.warp(875003063, 0, false);
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