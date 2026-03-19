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
      cm.npc_ChangeController(9401285, "oid=2153702", -710, 220, 1, -760, -660, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153702", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2153702", "special", -1, 0);
      cm.npc_ChangeController(9401286, "oid=2153703", -870, 220, 1, -920, -820, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153703", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2153703", "special", -1, 0);
      cm.npc_ChangeController(9401289, "oid=2153704", -800, 220, 1, -850, -750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153704", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2153704", 'die', -1, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, -650, 250]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setAmbience("SoundEffWz2.img/Mukhyun/burning_loop", 100, 60);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_同时移动镜头和人(1, 60);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face8##b师，师兄！师姐！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/groaning", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                    cm.effect_NormalSpeechBalloon("玄……玄儿……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401289, null, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4##b师兄！师兄！你醒了吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                      cm.effect_NormalSpeechBalloon("喝……哈啊……哈啊……", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401286, null, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face4##b师……兄……？！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                          cm.effect_NormalSpeechBalloon('哈啊……', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401285, null, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.setNpcSpecialActionReset("oid=2153702");
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 60);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face4##b你没事吧？！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我们没事。比起这个……眼下更紧急的是……", 37, 9401285, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=2153702", 1, 10, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("不久前黑道……那些使用邪术的黑道人物还在这里……", 37, 9401285, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5##b我知道。别说话。伤口……伤口……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("大……师兄和他们一起走了……", 37, 9401285, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face8##b……大师兄？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("仔细听着。虽然我也……不敢相信，但是大师兄……背叛了玄山派。", 37, 9401285, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("他……自称是黑道的手下，已经不再是……我们的大师兄了。", 37, 9401285, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("咳咳咳咳，他们说要坐船，应该是到码头去了！", 37, 9401285, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("别担心我们，快追！", 37, 9401285, true, true, 1);
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
                                                            cm.forceCompleteQuest(65946);
                                                            cm.gainExp(17590);
                                                            cm.updateInfoQuest(65946, "portal=1");
                                                            cm.npc_LeaveField("oid=2153702");
                                                            cm.npc_LeaveField("oid=2153703");
                                                            cm.npc_LeaveField("oid=2153704");
                                                            cm.dispose();
                                                            cm.warp(875003033, 0, false);
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