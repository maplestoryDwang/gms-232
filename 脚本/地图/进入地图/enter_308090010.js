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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(2570121, "oid=38001363", 180, 143, 116, 130, 230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38001363", "summon", 0, 0);
      cm.npc_ChangeController(2570122, "oid=38001364", 240, 170, 118, 190, 290, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38001364", "summon", 0, 0);
      cm.npc_ChangeController(2570123, "oid=38001365", 272, 106, 115, 222, 322, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38001365", "summon", 0, 0);
      cm.npc_ChangeController(2570124, "oid=38001366", 120, 170, 119, 70, 170, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38001366", "summon", 0, 0);
      cm.npc_ChangeController(2570125, "oid=38001367", 320, 170, 118, 270, 370, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38001367", 'summon', 0, 0);
      cm.npc_ChangeController(2570109, "oid=38001368", 377, 100, 115, 327, 427, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38001368", "summon", 0, 0);
      cm.npc_ChangeController(2570120, "oid=38001369", 470, 140, 116, 420, 520, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38001369", 'summon', 0, 0);
      cm.npc_ChangeController(2570100, "oid=38001370", 377, 100, 115, 327, 427, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38001370", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=38001370", "special4", -1, 1);
      cm.Npc_Fadeout("oid=38001370", 0, 255);
      cm.npc_SetSpecialAction("oid=38001369", "die4", -1, 1);
      cm.setNPC_Fadein(2570109, 1);
      cm.setNPC_Fadein(2570120, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 280, 120);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_SetHideEffect(1);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
          cm.effect_Text(["#fn黑体##fs18#接着，又回到现在……", ''], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#呼……", 36, 2570109, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#那个……你好？", 36, 2570125, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#他好像站着睡着了？", 36, 2570121, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#所以结果呢？摆脱诅咒了吗？", 36, 2570122, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#呃，我觉得……", 36, 2570125, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我们在这瞎猜测什么？把他弄醒不就得了。", 36, 2570123, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=38001365", 1, 15, 70);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(250);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld2", 100);
                                  cm.Npc_Fadeout("oid=38001370", 255, 0);
                                  cm.Npc_Fadeout("oid=38001368", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38001363"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38001364"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38001365"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38001366"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38001367"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#哈啊……哈啊……", 36, 2570100, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#咿……那个……能不能将这把剑……", 36, 2570123, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#(白发老将……。)", 36, 2570121, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#啊……我不小心睡着了。抱歉。", 36, 2570100, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.setNpcSpecialActionReset("oid=38001370");
                                                    cm.sendNormalTalk_Bottom("#face0#我刚说到哪了？", 36, 2570100, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#第，第二次战胜艾里葛斯的瞬间。", 36, 2570123, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#啊，对对。是这样……", 36, 2570100, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else if (status === V++) {
                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                              cm.forceCompleteQuest(37807);
                                                              cm.updateInfoQuest(37807, "exp=1");
                                                              cm.gainExp(5872020);
                                                              cm.npc_LeaveField("oid=38001363");
                                                              cm.npc_LeaveField("oid=38001364");
                                                              cm.npc_LeaveField("oid=38001365");
                                                              cm.npc_LeaveField("oid=38001366");
                                                              cm.npc_LeaveField("oid=38001367");
                                                              cm.npc_LeaveField("oid=38001368");
                                                              cm.npc_LeaveField("oid=38001369");
                                                              cm.npc_LeaveField("oid=38001370");
                                                              cm.dispose();
                                                              cm.warp(308000011, 0, false);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.setStandAloneMode(false);
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