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
      cm.npc_ChangeController(3004411, "oid=368360", -1, -147, 0, -51, 49, 1, false, 0, false);
      cm.npc_ChangeController(3004431, 'oid=535485', -100, -120, 24, -150, -50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=535485", "summon", 0, 0);
      cm.npc_ChangeController(3004433, "oid=535486", 108, -120, 21, 58, 158, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=535486", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 0, -130);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 5, -120);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 100);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
            cm.effect_Voice("SoundEff.img/blackHeaven/slap1", 100);
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
                  cm.sendNormalTalk_Bottom("呃……", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1##h0#大人！没事吧？！", 37, 3004433, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Carlyle/46", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("唔，浑身麻麻的。尤其是下巴……", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction('oid=535485', 'special3', 1, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('嗯？', 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face4#为了让#h0#清醒过来，这招是最好使的……会不会下手太重了？", 37, 3004431, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Idea/37", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#就你这力度，估计黑魔法师都要被打昏了。", 37, 3004433, true, true);
                              cm.effect_Voice("Voice5.img/CH2/Carlyle/47", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('#face3#哼……', 37, 3004431, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#话说回来，#h0#，刚才是怎么回事？", 37, 3004431, false, true);
                                    cm.effect_Voice("Voice5.img/CH2/Idea/38", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我感受到了一股巨大的敌意。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#敌意？圣剑不可能对即将成为它主人的人表现出敌意啊……", 37, 3004431, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Idea/39", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#嗯……好奇怪。\r\n不管怎样……光是剑表现出某种反应，已经是很大的收获……", 37, 3004433, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/48", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#啊！", 37, 3004433, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(200, 0, 1500, 200, -120, -130);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#你们干什么！", 37, 3004430, false, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Seren/11", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip('oid=535485', -1);
                                                      cm.npc_setForceFlip('oid=535486', -1);
                                                      cm.npc_ChangeController(3004430, "oid=535943", -270, -121, 26, -320, -220, 0, true, 1000, false);
                                                      cm.npc_SetSpecialAction('oid=535943', "summon", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#啊，塞伦卿……", 37, 3004433, false, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Carlyle/49", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#请你们出去。", 37, 3004430, true, true);
                                                          cm.effect_Voice("Voice5.img/CH2/Seren/12", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face4#你冷静点。我们没有恶意……", 37, 3004431, true, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Idea/40", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction('oid=535485', 'special3', 1, 1);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric_loop", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=535943"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=535943", "special10", -1, 1);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=535485"], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=535486'], [0, 0, -20, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#塞伦！这是一场误会。", 37, 3004433, false, true);
                                                                      cm.effect_Voice("Voice5.img/CH2/Carlyle/50", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('#face2#……', 37, 3004431, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#请离开。这是最后的警告。", 37, 3004430, true, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Seren/13", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#哼，我们走。", 37, 3004431, false, true);
                                                                              cm.effect_Voice("Voice5.img/CH2/Idea/41", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else if (status === V++) {
                                                                                cm.warp(410000670, 0, false);
                                                                                cm.eventSKill(0);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.setStandAloneMode(false);
                                                                                cm.forceStartQuest(39809, '');
                                                                                cm.updateInfoQuest(39800, "10=h1;01=h0;02=h0;11=h1;12=h1;13=h0;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
                                                                                cm.updateInfoQuest(39800, "10=h1;01=h0;02=h0;11=h1;12=h1;13=h1;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
                                                                                cm.updateInfoQuest(39800, "10=h0;01=h0;02=h0;11=h1;12=h1;13=h1;04=h0;05=h1;06=h1;07=h1;08=h1;09=h0");
                                                                                cm.npc_LeaveField("oid=535485");
                                                                                cm.npc_LeaveField('oid=535485');
                                                                                cm.npc_LeaveField("oid=535486");
                                                                                cm.npc_LeaveField("oid=535486");
                                                                                cm.npc_LeaveField("oid=535943");
                                                                                cm.npc_LeaveField('oid=535943');
                                                                                cm.dispose();
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