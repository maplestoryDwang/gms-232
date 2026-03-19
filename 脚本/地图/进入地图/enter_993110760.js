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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3004092, "oid=2292287", 64, -132, 6, 14, 114, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292287", "summon", 0, 0);
      cm.npc_ChangeController(3004094, "oid=2292288", 240, -7, 28, 190, 290, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292288", 'summon', 0, 0);
      cm.npc_ChangeController(3004093, "oid=2292289", 61, 3, 27, 11, 111, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2292289", "summon", 0, 0);
      cm.npc_ChangeController(3004095, "oid=2292290", -24, 28, 27, -74, 26, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2292290", "summon", 0, 0);
      cm.npc_ChangeController(3004096, "oid=2292291", 300, 28, 29, 250, 350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2292291", "summon", 0, 0);
      cm.npc_ChangeController(3004157, "oid=2292292", 566, -24, 30, 516, 616, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292292", 'summon', 0, 0);
      cm.npc_ChangeController(3004157, "oid=2292293", 456, -24, 29, 406, 506, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292293", "summon", 0, 0);
      cm.npc_ChangeController(3004157, "oid=2292294", -265, -24, 26, -315, -215, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292294", "summon", 0, 0);
      cm.npc_ChangeController(3004157, "oid=2292295", -393, -24, 25, -443, -343, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292295", "summon", 0, 0);
      cm.npc_ChangeController(3004157, "oid=2292296", -463, 15, 25, -513, -413, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292296", "summon", 0, 0);
      cm.npc_ChangeController(3004157, "oid=2292297", -334, 11, 25, -384, -284, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292297", "summon", 0, 0);
      cm.npc_ChangeController(3004157, "oid=2292298", 513, 8, 30, 463, 563, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292298", "summon", 0, 0);
      cm.npc_ChangeController(3004157, "oid=2292299", 390, 8, 29, 340, 440, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2292299", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 6000, 10, -92);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#秘密广场"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#埃德尔斯坦正处于极其关键的过渡期。", 37, 3003672, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#真是忙得不可开交，\r\n要处理的事务实在太多了。", 37, 3003672, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#得击退黑色之翼余党，重组整个议会，\r\n想要取回我们失去的东西并不容易。", 37, 3003672, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不过令我很开心的是，大家能够想法一致。", 37, 3003672, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#毕竟真正的解放终于近在咫尺了。", 37, 3003672, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2292292", "cheer", 1, 1);
                    cm.npc_SetSpecialAction("oid=2292293", "cheer", 1, 1);
                    cm.npc_SetSpecialAction("oid=2292294", "cheer", 1, 1);
                    cm.npc_SetSpecialAction("oid=2292295", 'cheer', 1, 1);
                    cm.npc_SetSpecialAction("oid=2292296", "cheer", 1, 1);
                    cm.npc_SetSpecialAction("oid=2292297", "cheer", 1, 1);
                    cm.npc_SetSpecialAction("oid=2292298", "cheer", 1, 1);
                    cm.npc_SetSpecialAction("oid=2292299", "cheer", 1, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#虽然多少可能要花些时间……不过埃德尔斯坦此后将会得到重生。", 37, 3003672, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你是反抗者中的佼佼者，我很想让你见证那一刻。", 37, 3003672, true, true);
                      } else {
                        if (status === V++) {
                          var O = cm.getJob();
                          if (Math.floor(O / 100) == 31) {
                            cm.sendNormalTalk_Bottom("#face0#特别是对摆脱黑魔法师，决心和我们同行的你。", 37, 3003672, true, true);
                          } else {
                            if (Math.floor(O / 100) == 32) {
                              cm.sendNormalTalk_Bottom("#face0#当你选择了唤灵斗师这条路的那一刻，直觉告诉我你一定会有所成就。", 37, 3003677, true, true);
                            } else {
                              if (Math.floor(O / 100) == 33) {
                                cm.sendNormalTalk_Bottom("#face0#当你选择了豹弩游侠这条路的那一刻，直觉告诉我你一定会有所成就。", 37, 3003676, true, true);
                              } else {
                                if (Math.floor(O / 100) == 35) {
                                  cm.sendNormalTalk_Bottom("#face0#当你选择了机械师这条路的那一刻，直觉告诉我你一定会有所成就。", 37, 3003675, true, true);
                                } else {
                                  if (Math.floor(O / 100) == 36) {
                                    cm.sendNormalTalk_Bottom("#face4#作为我们冒险勇士小队最后回归的那位队员。", 37, 3003672, true, true);
                                  } else if (Math.floor(O / 100) == 37) {
                                    cm.sendNormalTalk_Bottom("#face0#当你选择了爆破手这条路的那一刻，直觉告诉我你一定会有所成就。", 37, 3004093, true, true);
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                              cm.setAmbience("Ambience.img/ding", 200, 60);
                              cm.inGameDirectionEvent_AskAnswerTime(5500);
                            } else {
                              if (status === V++) {
                                cm.playSoundEffDirectly("Ambience.img/ding");
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#好了，走吧。", 37, 3003672, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#现在是时候到地面上去了。", 37, 3003672, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=2292292", "cheer", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2292293", "cheer", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2292294", 'cheer', -1, 1);
                                      cm.npc_SetSpecialAction("oid=2292295", "cheer", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2292296", "cheer", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2292297", 'cheer', -1, 1);
                                      cm.npc_SetSpecialAction("oid=2292298", "cheer", -1, 1);
                                      cm.npc_SetSpecialAction("oid=2292299", "cheer", -1, 1);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.setAmbience("SoundEff.img/blackHeaven/droping1", 100, 60);
                                          cm.setAmbience("Ambience.img/warfare1", 100, 60);
                                          cm.setAmbience("Field.img/rootabyss/firework", 100, 60);
                                          cm.playSoundEffDirectly("SoundEff.img/blackHeaven/droping1");
                                          cm.setAmbience("Ambience.img/loud", 80, 60);
                                          cm.fieldEffect_PlayBGM("Bgm52.img/EdelsteinCity_Mastered", 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_resistance/0", 0, 2500, 0, -60, 1, 4, 0);
                                            cm.fieldEffect_ProcessOnOffLayer('06', "Effect/Direction22.img/effect/restart_resistance/6", 0, 500, 0, -60, 1, 4, 0);
                                            cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction22.img/effect/restart_resistance/2", 0, 2500, 0, -60, 1, 4, 0);
                                            cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction22.img/effect/restart_resistance/1", 0, 1500, 0, -60, 1, 4, 0);
                                            cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction22.img/effect/restart_resistance/4", 0, 1500, 0, -60, 1, 4, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#这一天无敌的冒险勇士终于收获了成功，\r\n真没想到我会活到最后，和你共度这一天。", 37, 3003677, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#现在想来，在当初那种险象环生的境地，\r\n我们采取的举措稍显鲁莽……", 37, 3003676, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('他们俩嘀咕什么呢？', 37, 3004093, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#要不我们自己也来说悄悄话？嘀嘀咕咕……", 37, 3003675, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('……', 37, 3004093, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#看到了吗？我们携手共同创造的自由。", 37, 3003672, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#就让我们将悲痛的过去抛在脑后，从现在起一同书写只属于我们的崭新历史吧。", 37, 3003672, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#还要为了解放所有受到压迫的人继续努力啊。", 37, 3003672, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction22.img/effect/restart_resistance/3", 0, 1000, 0, -60, 1, 4, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction22.img/effect/restart_resistance/5", 0, 1000, 0, -60, 1, 4, 0);
                                                                cm.setAmbience("Ambience.img/warfare1", 20, 60);
                                                                cm.setAmbience("Field.img/rootabyss/firework", 20, 60);
                                                                cm.setAmbience("Ambience.img/loud", 20, 60);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0##h0#，今后，你也能和我们一起并肩作战吗？", 37, 3003672, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("那是自然。", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#就知道你会这么说。", 37, 3003672, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我们也一起加入那群手忙脚乱的家伙吧？", 37, 3003672, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_Hero9(20, 3500);
                                                                              cm.sendNormalTalk_Bottom("#face4#真是的，你就这么喜欢棉花糖吗？", 37, 3003672, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('05', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('06', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                  cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    var O = cm.getJob();
                                                                                    if (Math.floor(O / 100) == 31) {
                                                                                      cm.warp(993110762, 0, false);
                                                                                      clear();
                                                                                    } else if (Math.floor(O / 100) == 36) {
                                                                                      cm.warp(993110761, 0, false);
                                                                                      clear();
                                                                                    } else {
                                                                                      cm.fieldEffect_Hero9(0, 3000);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    }
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                              cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                                              } else if (status === V++) {
                                                                                                cm.forceStartQuest(39701, '');
                                                                                                cm.warp(993120000, 5, false);
                                                                                                clear();
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function clear() {
  cm.dispose();
  cm.setInGameDirectionMode(false, true, false);
  cm.npc_LeaveField("oid=2292287");
  cm.npc_LeaveField("oid=2292287");
  cm.npc_LeaveField("oid=2292288");
  cm.npc_LeaveField("oid=2292288");
  cm.npc_LeaveField("oid=2292289");
  cm.npc_LeaveField("oid=2292289");
  cm.npc_LeaveField("oid=2292290");
  cm.npc_LeaveField("oid=2292290");
  cm.npc_LeaveField("oid=2292291");
  cm.npc_LeaveField("oid=2292291");
  cm.npc_LeaveField("oid=2292292");
  cm.npc_LeaveField("oid=2292292");
  cm.npc_LeaveField("oid=2292293");
  cm.npc_LeaveField("oid=2292293");
  cm.npc_LeaveField("oid=2292294");
  cm.npc_LeaveField("oid=2292294");
  cm.npc_LeaveField("oid=2292295");
  cm.npc_LeaveField("oid=2292295");
  cm.npc_LeaveField("oid=2292296");
  cm.npc_LeaveField("oid=2292296");
  cm.npc_LeaveField("oid=2292297");
  cm.npc_LeaveField("oid=2292297");
  cm.npc_LeaveField("oid=2292298");
  cm.npc_LeaveField("oid=2292298");
  cm.npc_LeaveField("oid=2292299");
  cm.npc_LeaveField("oid=2292299");
}