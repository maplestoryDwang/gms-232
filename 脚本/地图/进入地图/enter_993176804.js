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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm40/SecretMissionBase", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -315, 100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3004732, "oid=1861515", -120, 100, 1, -170, -70, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=1861515", "summon", 0, 0);
          cm.npc_ChangeController(3004733, "oid=1861516", -472, 100, 2, -522, -422, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=1861516", "summon", 0, 0);
          cm.npc_ChangeController(3004734, "oid=1861517", -547, 100, 2, -597, -497, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=1861517", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=1861515", 'knock', -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
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
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('#face0#呃……', 36, 3004732, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(200);
                      } else {
                        if (status === V++) {
                          cm.effect_NormalSpeechBalloon('汪！', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004733, null, cm.getPlayer().getId());
                          cm.npc_SetForceMove("oid=1861516", 1, 50, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你……真的没事吗？", 56, 0, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=0"], [0, -120, 100, 1, 0, 1, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=1861515");
                                  cm.npc_SetSpecialAction("oid=1861515", 'stand', -1, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_NormalSpeechBalloon("我……我……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004732, null, cm.getPlayer().getId());
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_NormalSpeechBalloon("对不起……#h0#……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004732, null, cm.getPlayer().getId());
                                        cm.npc_setForceFlip("oid=1861515", 1);
                                        cm.setNpcSpecialActionReset("oid=1861515");
                                        cm.npc_SetForceMove("oid=1861515", 1, 350, 150);
                                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 88, 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                        } else {
                                          if (status === V++) {
                                            cm.Npc_Fadeout("oid=1861515", 0, 1000);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=1861515");
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang2", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(800);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_NormalSpeechBalloon("汪汪！汪汪汪！！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004733, null, cm.getPlayer().getId());
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang2", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(800);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('卡斯特！', 56, 0, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else if (status === V++) {
                                                              cm.forceCompleteQuest(37716);
                                                              cm.gainExp(33793674);
                                                              cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h0;03=h0;13=h1;04=h1;14=h1;05=h0;06=h0;07=h0;08=h0;26=h0;09=h0;81=h0;36=h0;37=h0");
                                                              cm.npc_LeaveField("oid=1861516");
                                                              cm.npc_LeaveField("oid=1861517");
                                                              cm.dispose();
                                                              cm.warp(450015180, 0, true);
                                                              cm.setStandAloneMode(false);
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