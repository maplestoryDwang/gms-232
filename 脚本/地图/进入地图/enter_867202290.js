var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(9400600, "oid=204449", 5248, 1175, 15, 5198, 5298, 1, true, false);
      cm.npc_ChangeController(9400587, 'oid=204450', 5297, 1175, 15, 5247, 5347, 1, true, false);
      cm.npc_ChangeController(9400597, "oid=204451", 5351, 1175, 16, 5301, 5401, 1, true, false);
      cm.npc_ChangeController(9400589, "oid=204452", 5417, 1175, 14, 5367, 5467, 1, true, false);
      cm.npc_ChangeController(9400590, "oid=204453", 5539, 1175, 10, 5489, 5589, 1, true, false);
      cm.npc_ChangeController(9400601, "oid=204454", 5487, 1175, 14, 5437, 5537, 1, true, false);
      cm.npc_ChangeController(9400603, 'oid=204455', 5462, 875, 1, 5412, 5509, 1, true, false);
      cm.npc_ChangeController(9400599, "oid=204456", 5351, 875, 7, 5301, 5401, 1, true, false);
      cm.npc_ChangeController(9400596, "oid=204457", 5406, 875, 4, 5356, 5456, 1, true, false);
      cm.npc_ChangeController(9400598, 'oid=204458', 5589, 1175, 12, 5539, 5639, 1, true, false);
      cm.npc_ChangeController(9400588, "oid=204459", 5764, 1175, 9, 5714, 5814, 1, true, false);
      cm.npc_ChangeController(9400592, 'oid=204460', 5722, 1175, 11, 5672, 5772, 1, true, false);
      cm.npc_ChangeController(9400593, "oid=204461", 5630, 1175, 12, 5580, 5680, 1, true, false);
      cm.npc_ChangeController(9400591, "oid=204462", 5676, 1175, 11, 5626, 5726, 1, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNewEffects(17, [0, 1000, 2000, 5200, 1180]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(9400580, "oid=7564576", 5180, 1160, 13, 5130, 5230, 0, true, false);
        cm.npc_SetSpecialAction("oid=7564576", "summon", 0, 0);
        cm.npc_ChangeController(9400581, "oid=7564577", 4995, 1160, 21, 4945, 5045, 0, true, false);
        cm.npc_SetSpecialAction("oid=7564577", 'summon', 0, 0);
        cm.npc_ChangeController(9400582, "oid=7564578", 4920, 1160, 22, 4870, 4970, 0, true, false);
        cm.npc_SetSpecialAction("oid=7564578", 'summon', 0, 0);
        cm.npc_ChangeController(9400583, "oid=7564579", 4862, 1160, 22, 4812, 4912, 0, true, false);
        cm.npc_SetSpecialAction("oid=7564579", 'summon', 0, 0);
        cm.npc_ChangeController(9400584, "oid=7564580", 4810, 1160, 24, 4760, 4860, 0, true, false);
        cm.npc_SetSpecialAction("oid=7564580", 'summon', 0, 0);
        cm.npc_ChangeController(9400620, "oid=7564581", 4740, 1160, 27, 4690, 4790, 0, true, false);
        cm.npc_SetSpecialAction("oid=7564581", "summon", 0, 0);
        cm.npc_ChangeController(9400621, "oid=7564582", 4680, 1160, 27, 4630, 4730, 0, true, false);
        cm.npc_SetSpecialAction("oid=7564582", "summon", 0, 0);
        cm.npc_ChangeController(9400622, "oid=7564583", 4620, 1160, 25, 4570, 4670, 0, true, false);
        cm.npc_SetSpecialAction("oid=7564583", "summon", 0, 0);
        cm.npc_ChangeController(9400623, "oid=7564584", 4560, 1160, 28, 4510, 4610, 0, true, false);
        cm.npc_SetSpecialAction("oid=7564584", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("#face3#其实我很想留在这里，直到村子复原…", 37, 9400580, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("不，这是我们自己分内的事情，你不用在意。", 37, 9400600, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#回去之后我会马上派出救灾物资和兵力，希望你们能坚持住。", 37, 9400580, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#…非常感谢，我们都不知道如何感谢亚皮纳斯的帮助…", 37, 9400587, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0##h0#，你也辛苦了。", 37, 9400587, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#咳呃呃，到时候让你们在村里随便住。那什么，越是大的村子不都有那种吗？什么名誉居民？！", 37, 9400597, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#是的，如果你有事到阿布鲁的话，就随时可以来找我们。", 37, 9400587, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b好，我不会忘记一起战斗的时光。大家辛苦了。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b希望阿布鲁充满幸福和笑容…", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#家人的失踪，村子的火灾这都是我们所要背负的责任。", 37, 9400587, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#但是我们不会就此放弃，我们会重建家园，我们会去寻找失踪的家人。", 37, 9400587, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0##h0#、艾丽卡学者，还有亚皮纳斯骑士们，多亏了大家我们才能获得这份力量。", 37, 9400587, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#真是太谢谢你们了，我们永远都不会忘记你们的。", 37, 9400587, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(17, [5000, 2000, 1000, 5200, 1180]);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      cm.effect_NormalSpeechBalloon("谢谢，非常感谢。", 0, 0, 0, 2000, 9400589, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        cm.effect_NormalSpeechBalloon("呜呜…不会忘记你们的。", 0, 0, 0, 2000, 9400592, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                          cm.effect_NormalSpeechBalloon("感谢你们！！！！", 0, 0, 0, 2000, 9400598, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            cm.effect_NormalSpeechBalloon("谢谢你们的帮助…", 0, 0, 0, 2000, 9400601, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.sendNewEffects(17, [0, 1000, 2000, 5200, 1180]);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNewEffects(17, [3000, 2000, 2000, 5620, 1180]);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.forceStartQuest(64163, 'riding');
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b(好像看不到艾伊纳尔… 和莎娜安婆婆…。)", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我们也差不多该出发了。", 37, 9400581, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNewEffects(17, [1000, 2000, 2000, 5200, 1180]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=7564577", -1);
                                                              cm.sendNormalTalk_Bottom("#face0#先遣队，出发！", 37, 9400581, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNewEffects(17, [0, 2000, 1000, 5620, 1180]);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=7564584", -1);
                                                                  cm.npc_setForceFlip("oid=7564583", -1);
                                                                  cm.npc_setForceFlip("oid=7564582", -1);
                                                                  cm.npc_setForceFlip("oid=7564581", -1);
                                                                  cm.npc_setForceFlip("oid=7564579", -1);
                                                                  cm.npc_setForceFlip("oid=7564580", -1);
                                                                  cm.npc_setForceFlip("oid=7564578", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=7564584", -1, 500, 80);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=7564583", -1, 500, 80);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=7564582", -1, 500, 80);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetForceMove("oid=7564581", -1, 500, 80);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=7564579", -1, 500, 80);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=7564580", -1, 500, 80);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=7564578", -1, 500, 80);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=7564576", -1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                                                                      cm.npc_SetForceMove("oid=7564576", -1, 500, 70);
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 5000, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2028372, 1143118, 3018143, 2023799, 2023800, 0]);
                                                                                        cm.sendNormalTalk_Bottom("#face0##h0#，这么久以来真是辛苦你了。前面还有很多事情等我们去解决。不过和你在一起，我们一点都不感到害怕。", 37, 9400580, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                          cm.sendNormalTalk_Bottom("#face0#你不知道我有多么感谢，感谢在这里能遇到你。", 37, 9400580, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2##h0#！以后请多关照！", 37, 9400580, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.monadEndingScene(-1, -1, null);
                                                                                              cm.forceCompleteQuest(64145);
                                                                                              cm.forceCompleteQuest(64053);
                                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                              cm.playVideoByScript("Monad_Ep1_2.avi");
                                                                                            } else if (status === V++) {
                                                                                              cm.gainItem(2028372, 1);
                                                                                              cm.gainItem(2023799, 1);
                                                                                              cm.gainItem(2023800, 1);
                                                                                              cm.gainItem(1143118, 1);
                                                                                              cm.gainItem(3018143, 1);
                                                                                              cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                                                                              cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                                                                              cm.dispose();
                                                                                              cm.warp(867200110, 0);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;