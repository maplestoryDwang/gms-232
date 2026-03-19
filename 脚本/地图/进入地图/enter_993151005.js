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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004430, "oid=1032713", 0, -20, 2, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1032713", "summon", 0, 0);
      cm.npc_ChangeController(3004455, "oid=1032714", 190, -20, 13, 140, 240, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1032714", 'summon', 0, 0);
      cm.npc_ChangeController(3004439, "oid=1032715", 300, 10, 11, 250, 350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1032715", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 180, -20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
          cm.effect_Text(["#fn黑体##fs18#同一时刻，广场"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/hammerSound", 100);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/hammerSound", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                      cm.sendNormalTalk_Bottom("#face0#下一把，生锈的长剑。", 37, 3004439, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这是那些不信神者的首领从前使用的东西。", 37, 3004439, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#真的要熔掉它吗？", 37, 3004455, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#对。大神官大人下令让我们尽早消除那些不敬神明之人的痕迹。", 37, 3004439, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=1032714", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#请您继续吧。", 37, 3004430, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……是。", 37, 3004455, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust3/4", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/bomb_fail", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#求你了，罗兰德！请你收手吧！", 37, 3004430, false, true);
                                              cm.effect_Voice("Voice5.img/CH2/Seren/69", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#你好好保重吧，塞伦。", 37, 3004432, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Loland/30", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('#face5#……', 37, 3004430, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#已经熔好了。您要用这铁水做什么呢？", 37, 3004455, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#请将它用于制作士兵的盔甲。", 37, 3004430, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#善后的事就拜托你了。", 37, 3004430, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=1032713", -1, 200, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.Npc_Fadeout("oid=1032713", 0, 500);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#心里如果没有伤痕……那才奇怪吧。", 37, 3004431, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_Hero9(0, 1500);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#如果是精神上的问题……", 37, 3004431, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                    cm.sendNormalTalk_Bottom("#face0#我应该乐观地认为情况会好转呢，\r\n还是认为会变得更麻烦呢……", 37, 3004431, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#问题没有那么简单。\r\n更重要的是，即便她的翅膀安然无恙，也无法断定她是圣剑的主人。", 37, 3004433, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……。", 37, 3004431, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#艾伦，你来得正好。", 37, 3004433, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#我先走了，请你们和艾伦商议吧。", 37, 3004433, true, true);
                                                                                          } else if (status === V++) {
                                                                                            cm.eventSKill(0);
                                                                                            cm.forceCompleteQuest(39907);
                                                                                            cm.warp(410000690, 1, false);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                                                                                            cm.updateInfoQuest(39900, "00=h0;11=h0;04=h1;05=h1;06=h0;07=h0;25=h0;55=h0");
                                                                                            cm.updateInfoQuest(39900, "00=h0;11=h0;04=h1;05=h1;06=h0;07=h0;25=h1;55=h0");
                                                                                            cm.npc_LeaveField("oid=1032713");
                                                                                            cm.npc_LeaveField("oid=1032713");
                                                                                            cm.npc_LeaveField("oid=1032714");
                                                                                            cm.npc_LeaveField("oid=1032714");
                                                                                            cm.npc_LeaveField("oid=1032715");
                                                                                            cm.npc_LeaveField("oid=1032715");
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
          }
        }
      }
    }
  }
}