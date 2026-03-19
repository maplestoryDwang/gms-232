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
      cm.updateInfoQuest(33222, "save=7;col4=0");
      cm.npc_ChangeController(1540700, "oid=26062579", -140, -38, 4, -190, -90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26062579", "summon", 0, 0);
      cm.npc_ChangeController(1540701, "oid=26062580", 0, -38, 5, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26062580", "summon", 0, 0);
      cm.npc_ChangeController(1540702, "oid=26062581", 140, -38, 8, 90, 190, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=26062581", "summon", 0, 0);
      cm.npc_ChangeController(1540452, "oid=26062582", -200, -8, 18, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26062582", "summon", 0, 0);
      cm.npc_ChangeController(1540526, "oid=26062583", -140, -8, 18, -190, -90, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26062583", 'summon', 0, 0);
      cm.npc_ChangeController(1540611, "oid=26062584", -70, -8, 16, -120, -20, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=26062584", "summon", 0, 0);
      cm.npc_ChangeController(1540704, "oid=26062585", 70, -8, 14, 20, 120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=26062585", "summon", 0, 0);
      cm.npc_ChangeController(1540453, "oid=26062586", 140, -8, 13, 90, 190, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=26062586", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=26062587", 200, -8, 13, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=26062587", "summon", 0, 0);
      cm.npcMove(1540452, 0, 10, 0);
      cm.npcMove(1540526, 0, 10, 0);
      cm.npcMove(1540611, 0, 10, 0);
      cm.npcMove(1540704, 0, 10, 0);
      cm.npcMove(1540453, 0, 10, 0);
      cm.npcMove(1540451, 0, 10, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 1540452, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 1540612, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("……似乎还要下降很长时间。\r\n这飞船还真大。", 45, 1540611, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("话说，大叔！\r\n听说大叔你和格里梅尔那家伙曾经是战友？", 45, 1540612, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯，在升降机下降期间，我就跟你们说说那时候的事吧。\r\n……那是50年前的事情。", 37, 1540704, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_SetHideEffect(1);
                        cm.fieldEffect_ProcessOnOffLayer('masking_up', "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 0, 30, 1, 1);
                        cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 500, 0, 0, 30, 7, 1);
                        cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/blackHeavenCinematic/3men_back", 0, 500, 0, 0, 12, 4, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/blackHeavenCinematic/3men_1", 0, 1500, -100, 0, 14, 4, 0);
                          cm.fieldEffect_ProcessOnOffLayer('1', '', 1, 500, 100, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我曾是埃德尔斯坦最具实力的空军将校。", 37, 1540704, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("好像美化得有些过头了……", 45, 1540612, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/blackHeavenCinematic/3men_2", 0, 1500, 100, 0, 15, 4, 0);
                                cm.fieldEffect_ProcessOnOffLayer('2', '', 1, 500, -100, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b马提尼#k是具有领袖风范的海军将校。", 37, 1540704, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('吼哦……', 45, 1540611, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect2.img/blackHeavenCinematic/3men_3", 0, 1500, 0, 100, 16, 4, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('3', '', 1, 500, 0, -100, 0, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('p', "Map/Effect2.img/blackHeavenCinematic/3men_p", 0, 1500, 0, 0, 17, 4, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("还有，#b格里梅尔#k是前途无量的科学家。", 37, 1540704, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                                          cm.fieldEffect_ProcessOnOffLayer("noway", "Map/Effect2.img/blackHeavenCinematic/3men_noway", 0, 500, 300, -90, 19, 8, 1);
                                          cm.fieldEffect_ProcessOnOffLayer('noway', '', 1, 500, -300, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#fs25#这怎么可能！！", 45, 1540612, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer('p', '', 2, 500, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_ProcessOnOffLayer("noway", '', 2, 500, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer("masking_up", '', 2, 500, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer("masking_down", '', 2, 500, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                        cm.effect_Text(["#fn黑体##fs18#50年前, 埃德尔斯坦"], [100, 2200, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("居然强行进行#b活体实验#k！\r\n埃德尔斯坦从什么时候开始变得这么堕落了？", 45, 1540758, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("这不是堕落，奥斌。\r\n这只是保护国家免受邪恶势力迫害的手段而已。", 37, 1540759, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("格里梅尔，你呢？\r\n你真的要进行什么#b活体实验#k吗？\r\n你快回答，格里梅尔！", 45, 1540758, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("……我还想要对一些东西进行实验。", 37, 1540760, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("格里梅尔选择了留下。\r\n在作为科学家的#b良心#k和#b好奇心#k之间，他选择了好奇心。", 37, 1540704, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("结果……就算我不说你们也应该知道吧。", 37, 1540704, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("没有人从一开始就是坏人。\r\n只要一步走错，所有的事情都将发生改变。", 37, 1540704, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("不过，我有个#b未解的疑问#k。\r\n那家伙说想对一些东西进行实验……究竟是什么东西呢？", 37, 1540704, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("会不会是黑色天堂？", 45, 1540612, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("比起机械工程学，那家伙原本对医学和生命工程学更感兴趣。\r\n以前他对这些机械不感兴趣的啊。", 37, 1540704, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("不管他有什么目的，我们都不能原谅格里梅尔。", 37, 1540452, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("我知道。\r\n这一切都是我的错，我没有抓住机会将我的战友带回正道。", 37, 1540704, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("……拜托你们，请阻止他。", 37, 1540704, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else if (status === V++) {
                                                                                        cm.dispose();
                                                                                        cm.warp(350051000, 0, true);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.npc_LeaveField("oid=26062579");
                                                                                        cm.npc_LeaveField("oid=26062579");
                                                                                        cm.npc_LeaveField("oid=26062580");
                                                                                        cm.npc_LeaveField("oid=26062580");
                                                                                        cm.npc_LeaveField("oid=26062581");
                                                                                        cm.npc_LeaveField("oid=26062581");
                                                                                        cm.npc_LeaveField("oid=26062582");
                                                                                        cm.npc_LeaveField("oid=26062582");
                                                                                        cm.npc_LeaveField("oid=26062583");
                                                                                        cm.npc_LeaveField("oid=26062583");
                                                                                        cm.npc_LeaveField("oid=26062584");
                                                                                        cm.npc_LeaveField("oid=26062584");
                                                                                        cm.npc_LeaveField("oid=26062585");
                                                                                        cm.npc_LeaveField("oid=26062585");
                                                                                        cm.npc_LeaveField("oid=26062586");
                                                                                        cm.npc_LeaveField("oid=26062586");
                                                                                        cm.npc_LeaveField("oid=26062587");
                                                                                        cm.npc_LeaveField("oid=26062587");
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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