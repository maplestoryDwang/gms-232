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
      if (cm.isQuestFinished(39811) && !cm.isQuestFinished(39812)) {
        cm.npc_ChangeController(3004430, "oid=554215", -367, 57, 1, -417, -317, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=554215", "summon", 0, 0);
      }
      if (cm.isQuestFinished(39810)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -240, -30);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -96, 26);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你们是来找我的？", 37, 3004434, false, true);
            cm.effect_Voice("Voice5.img/CH2/Arran/1", 128);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
              cm.sendNormalTalk_Bottom("#face4#！！", 37, 3004431, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm53/BattleOfCernium", 0, 0);
                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/14", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#这是怎么回事？#r高等翼人#k为什么会在这里？！", 37, 3004431, false, true);
                    cm.effect_Voice("Voice5.img/CH2/Idea/50", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("高等翼人？！！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#出什么事了吗？", 37, 3004437, false, true);
                          cm.effect_Voice("Voice5.img/CH2/Knight/13", 128);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#没事。这是常有的误会。", 37, 3004434, false, true);
                              cm.effect_Voice("Voice5.img/CH2/Arran/2", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#你说这是误会？！", 37, 3004431, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Idea/51", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#请冷静一下。\r\n我虽然身为高等翼人，却并不认可同胞们的思想。", 37, 3004434, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Arran/3", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#你以为自己可以凭这花言巧语蒙混过关吗？", 37, 3004431, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Idea/52", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('#face0#……', 37, 3004434, true, true);
                                      cm.effect_Voice("Voice5.img/CH2/Arran/4", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust2/8", 0, 1000, 0, 0, 2, 4, 0, -1, 0, 0, 0);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#你果然露出真面目了……啊！！", 37, 3004431, false, true);
                                          cm.effect_Voice("Voice5.img/CH2/Idea/53", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#（翅膀……被撕裂了？）", 37, 3004431, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#不管怎么撕扯，它们都会重新长出来。", 37, 3004434, false, true);
                                                cm.effect_Voice("Voice5.img/CH2/Arran/5", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#虽然身为高等翼人……\r\n但若论及对这种族的憎恶，我绝不亚于你。", 37, 3004434, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Arran/6", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3004431, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
                                                              cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                              cm.sendNormalTalk_Bottom("#face0#虽然我最终没能斩断双翼，但之前的尝试也并非毫无意义的。\r\n如果没有这些疤痕，或许我已不在人世了。", 37, 3004434, false, true);
                                                              cm.effect_Voice("Voice5.img/CH2/Arran/7", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#我还是无法信任你。\r\n但……之前我的所作所为确实有些无礼，对此我很惭愧，抱歉。", 37, 3004431, false, true);
                                                                  cm.effect_Voice("Voice5.img/CH2/Idea/55", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#这也是常有的事。", 37, 3004434, true, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Arran/8", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#话说回来，这也是卡莱尔殿下的恶趣味。\r\n遮遮掩掩的，徒增误会。", 37, 3004434, true, true);
                                                                      cm.effect_Voice("Voice5.img/CH2/Arran/9", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#啊，说起来，还请两位见面时对他和气些。", 37, 3004433, false, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/65", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("啊，原来是这种意思。", 57, 0, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom('#face3#……', 37, 3004431, true, true);
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
                                                                                      } else if (status === V++) {
                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                        cm.eventSKill(0);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
                                                                                        cm.forceCompleteQuest(39810);
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