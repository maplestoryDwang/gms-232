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
      cm.fieldEffect_PlayBGM("Bgm54/IlliyardMoor", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -280, 125);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.Hidden_background('flower_mu0', 1, 1, 0, 0);
          cm.Hidden_background("flower_mu1", 1, 0, 0, 0);
          cm.npc_ChangeController(3004732, "oid=1861468", -342, 100, 2, -392, -292, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=1861468", "summon", 0, 0);
          cm.npc_ChangeController(3004733, "oid=1861469", -465, 100, 2, -515, -415, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=1861469", "summon", 0, 0);
          cm.npc_ChangeController(3004734, "oid=1861470", -147, 100, 1, -197, -97, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=1861470", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=1861470", "hide", -1, 1);
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
                    cm.sendNormalTalk_Bottom("#face0#好像马上就要开了……", 37, 3004732, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这次皮亚蜂不会又从哪里冒出来吧……？", 37, 3004732, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=1861470");
                          cm.npc_SetSpecialAction("oid=1861470", "flower", 1850, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/birth", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.Hidden_background("flower_mu0", 1, 0, 0, 0);
                            cm.Hidden_background("flower_mu1", 1, 1, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(900);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=1861470", "stand", -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=0"], [0, -342, 100, 1, 0, 1, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#简直……一模一样！", 37, 3004732, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#（突然……好像想起了……痛苦的回忆……）", 57, 0, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#好像是佩皮等待的兄弟！", 37, 3004732, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#呃呃……黑沉沉的，还以为是晚上呢。原来不是晚上，也不是白天。", 37, 3004734, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#和我们一起走吧！有人正在等你。", 37, 3004732, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#哦……有人在等我？可真让人期待！\r\n最好跟我一样又帅又令人愉快。", 37, 3004734, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#嗯……一定会非常般配。", 37, 3004732, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_NormalSpeechBalloon("汪汪！汪！！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3004733, null, cm.getPlayer().getId());
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yumyum/mang2", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                cm.forceCompleteQuest(37715);
                                                                cm.gainExp(11264558);
                                                                cm.updateInfoQuest(37700, "00=h0;10=h0;01=h0;11=h0;02=h0;12=h1;03=h0;13=h1;04=h1;14=h1;05=h0;06=h0;07=h0;08=h0;26=h0;09=h0;81=h0;36=h0;37=h0");
                                                                cm.npc_LeaveField("oid=1861468");
                                                                cm.npc_LeaveField("oid=1861469");
                                                                cm.npc_LeaveField("oid=1861470");
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
}