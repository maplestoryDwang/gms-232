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
      cm.npc_ChangeController(3004431, "oid=63626187", -300, 50, 1, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63626187", "summon", 0, 0);
      cm.npc_ChangeController(3004434, "oid=63626188", -208, 30, 2, -258, -158, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63626188", "summon", 0, 0);
      cm.setNPC_Fadein(3004434, 1);
      cm.npc_ChangeController(3004460, "oid=63626189", -600, 50, 1, -650, -550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63626189", "summon", 0, 0);
      cm.npc_ChangeController(3004461, "oid=63626190", -30, 50, 2, -80, 20, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=63626190", "summon", 0, 0);
      cm.npc_ChangeController(3004461, "oid=63626191", -648, 50, 1, -698, -598, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=63626191", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -400, 105);
      cm.npc_SetSpecialAction("oid=63626189", "special2", -1, 1);
      cm.npc_SetSpecialAction("oid=63626190", "special2", -1, 1);
      cm.npc_SetSpecialAction("oid=63626191", "special2", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -280, 26);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setAmbience("SoundEff.img/HofM/act4/fire", 300, 60);
        cm.sendNormalTalk_Bottom("#face0#伊黛娜，能听到吗？", 37, 3004434, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#咳咳！艾……伦……？#h0#？怎么会……？", 37, 3004431, true, true);
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
                cm.sendNormalTalk_Bottom("我看到艾伦背着你出来，就帮了他一把。", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#原、原来如此……谢谢你。", 37, 3004431, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#啊，现在不是说这些的时候。", 37, 3004431, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我要去见塞伦。她应该在守护圣剑。", 37, 3004431, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#得赶快当面告诉她这一切，尽快结束眼下的事态。", 37, 3004431, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("(要跟伊黛娜走吗？还是要帮忙守卫广场呢？)", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=63626187", -1);
                              cm.sendNormalTalk_Bottom("#face0##h0#，你不能靠近圣剑。", 37, 3004431, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("什么？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你忘记了吗？圣剑对你抱有强烈的敌意。", 37, 3004431, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#找回圣剑之光就意味着，与太阳神的意识融合，哪怕那过程只有一瞬间。", 37, 3004431, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#不知道找回光芒的圣剑会以怎样的形式出现在你面前。", 37, 3004431, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("啊……", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#所以守卫广场的任务就交给你了。", 37, 3004431, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#但是……如果有可能，请不要当面对抗使徒。", 37, 3004431, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我们还没有探明他的力量。\r\n站在联盟的立场上，我们无法承担失去你的风险。", 37, 3004431, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("好，我会记住的。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 350);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_SetHideEffect(1);
                                                      cm.sendNormalTalk_Bottom("#face0#伊黛娜，等等……", 37, 3004434, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=63626187", 0);
                                                        cm.sendNormalTalk_Bottom("#face0#什么？", 37, 3004431, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我听过人们的传言。", 37, 3004434, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#“握紧圣剑吧，拯救之法就在帕尔玛。”\r\n圣剑上刻着这句话。", 37, 3004434, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#啊……罗兰德跟我说过这话。", 37, 3004431, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#传闻有误，帕尔玛指的并不是塞尔提乌。\r\n它真正的意思是……", 37, 3004434, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=63626188", -1, 30, 70);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#（……）", 37, 3004434, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63626187"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#……原来如此。果然……", 37, 3004431, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#强迫他人付出信仰的永远是人类自己。\r\n而不是神。", 37, 3004434, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#谢谢，你帮了我一个大忙。", 37, 3004431, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=63626187", -1, 250, 70);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.Npc_Fadeout("oid=63626187", 0, 500);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3004434, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust3/1", 0, 500, 0, -50, 1, 4, 0, -1, 0, 0, 0);
                                                                                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction23.img/illust3/0", 0, 500, 0, -50, 1, 4, 0, -1, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(350);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lever", 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#该死……", 37, 3004434, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#看样子连灭火装置都烧坏了。", 37, 3004434, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 947, -64);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_LeaveField("oid=63626188");
                                                                                                            cm.npc_LeaveField("oid=63626188");
                                                                                                            cm.npc_ChangeController(3004434, "oid=63634111", 967, 34, 6, 917, 1017, 1, true, 0, false);
                                                                                                            cm.npc_SetSpecialAction("oid=63634111", "summon", 0, 0);
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#现在……", 37, 3004434, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#只有神才能让这里复原了吧。", 37, 3004434, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else if (status === V++) {
                                                                                                                          cm.eventSKill(0);
                                                                                                                          cm.updateInfoQuest(39919, "clear=1");
                                                                                                                          cm.forceCompleteQuest(39919);
                                                                                                                          cm.setStringForQuestInfo(39900, '29', 'h0');
                                                                                                                          cm.warp(410000800, 0, false);
                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                          cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                                                                                                                          cm.npc_LeaveField("oid=63626187");
                                                                                                                          cm.npc_LeaveField("oid=63626187");
                                                                                                                          cm.npc_LeaveField("oid=63626189");
                                                                                                                          cm.npc_LeaveField("oid=63626189");
                                                                                                                          cm.npc_LeaveField("oid=63626190");
                                                                                                                          cm.npc_LeaveField("oid=63626190");
                                                                                                                          cm.npc_LeaveField("oid=63626191");
                                                                                                                          cm.npc_LeaveField("oid=63626191");
                                                                                                                          cm.npc_LeaveField("oid=63634111");
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
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}