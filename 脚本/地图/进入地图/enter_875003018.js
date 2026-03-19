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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401277, "oid=2750459", -400, 85, 20, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2750459", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNewEffects(17, [0, 1000, 2000, -180, 90]);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face8##b… ", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon('......!', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 180);
                  cm.sendNormalTalk_Bottom("#face8##b……不是吧……？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face8##b难道不是吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face8##b素笑，不是那样的。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face6#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "… ", 37, 9401277, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face6##b为什么……玄山一夜之间……会变成这样？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.sendNormalTalk_Bottom("#face6##b玄山为什么会变成这样？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=2750459", "sit", -1, 0);
                                  cm.sendNormalTalk_Bottom("#face6#呼……呜呜呜……", 37, 9401277, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face6##b谁……到底是谁……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face6#我……我也……很伤心……不敢相信……但是……呜呜……", 37, 9401277, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face6#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，连你都这样的话……呜啊啊啊啊……", 37, 9401277, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face5##b… ", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face6#啊啊啊啊！……呜呜呜，呜啊啊……", 37, 9401277, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face5##b（……啊！）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_NormalSpeechBalloon("......!", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                cm.sendNormalTalk_Bottom("#face5##b（看来在我晕过去的时候……素笑独自肩负起了一切……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5##b（……那些本来都是……我该做的事……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face6#师，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "……呜呜呜……报仇……呃，我一定要报仇！！！", 37, 9401277, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face6#要是就这样消沉下去……那就真的输了……呜呜……", 37, 9401277, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face6#呜呜，呜……玄、玄山派……不会就这样失败……不是吗？", 37, 9401277, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face4##b……没错，你说得对。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_ForcedFlip(2);
                                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.effect_Voice("VoiceWz2.img/Mukhyun/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
                                                              cm.sendNormalTalk_Bottom("#face5##b……掌门人……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_Voice("VoiceWz2.img/Mukhyun/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                                                cm.sendNormalTalk_Bottom("#face5##b……抱歉，来晚了一步。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/3', 100);
                                                                  cm.sendNormalTalk_Bottom("#face4##b……我一定要查明所有事件的真相……帮大家报仇。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/4', 100);
                                                                    cm.sendNormalTalk_Bottom("#face4##b我一定要……继承掌门人的遗志……重建门派。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                                                      cm.sendNormalTalk_Bottom("#face4##b……你就等着瞧吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.teachSkill(170000001, 0, -1);
                                                                        cm.teachSkill(170000001, 1, 10);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                                                                        cm.getTopMsgFont("获得了<玄山气势>技能。", 3, 20, 20, 0, 0);
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNewEffects(19, [0]);
                                                                          } else if (status === V++) {
                                                                            cm.forceCompleteQuest(65936);
                                                                            cm.gainExp(4411);
                                                                            cm.npc_LeaveField("oid=2750459");
                                                                            cm.dispose();
                                                                            cm.warp(875000001, 2, false);
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