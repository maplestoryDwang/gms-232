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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_Hero9(0, 0);
      cm.npc_ChangeController(9401277, "oid=2757265", 430, 60, 12, 380, 480, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2757265", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 1500, 485, 110]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.effect_Voice("VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
          cm.sendNormalTalk_Bottom("#face4##fs30#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "!!!!!!!!!!!!!", 37, 9401277, false, true, 1);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face9##b素笑……燕儿，温儿……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face9##b你们怎么……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM('BgmMH/Fate', 0, 0);
                            cm.fieldEffect_Hero9(-2, 1000);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                              cm.sendNormalTalk_Bottom("#face7#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，干嘛总不相信我们呢……太让人伤心了！", 37, 9401277, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                cm.sendNormalTalk_Bottom("#face7#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，为了不让你一个人承担下一切，你知道这段时间我们有多努力吗？", 37, 9401277, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('没错！', 37, 9401303, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("当然！", 37, 9401304, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                      cm.sendNormalTalk_Bottom("#face0#别一个人背负起所有重担，我们应该相互依靠，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '。', 37, 9401277, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                        cm.sendNormalTalk_Bottom("#face4##b要是你们受了伤……我……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/8', 100);
                                          cm.sendNormalTalk_Bottom("#face4#别担心，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "。在你出去的时候，我们也成长了不少。", 37, 9401277, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                            cm.sendNormalTalk_Bottom("#face4#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，虽然想做的事情有很多，但现在好像不是时候。\r\n后面就交给我们，你只管往前走就行！我们会马上跟上去的！", 37, 9401277, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face4##b……明白了！大家小心！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/10", 100);
                                                      cm.sendNormalTalk_Bottom("#face0##b（光是有人站在自己背后，就能让人内心充满力量。我之前一直忘了这一点。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                        cm.sendNormalTalk_Bottom("#face1##b（不能全靠" + (cm.getPlayer().getGender() == 0 ? '师弟' : '师妹') + "们！加油吧！）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
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
                                                              cm.updateInfoQuest(65984, "portal=1");
                                                              cm.forceCompleteQuest(65984);
                                                              cm.npc_LeaveField("oid=2757265");
                                                              cm.dispose();
                                                              cm.warp(875003060, 0, false);
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