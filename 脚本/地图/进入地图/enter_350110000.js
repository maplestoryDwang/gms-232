var status = -1;
var selectionLog = [];
function action(l, A, J) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = J;
  var G = -1;
  if (status <= G++) {
    cm.dispose();
  } else {
    if (status === G++) {
      cm.updateInfoQuest(18593, "fin=1");
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 440, -1729);
      cm.curNodeEventEnd(true);
    } else {
      if (status === G++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === G++) {
          cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/blackHeaven/nexon", 0, 1500, 0, 0, 12, 4, 1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === G++) {
            cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_PushScaleInfo(16000, 1000, 16000, 440, 251);
          } else {
            if (status === G++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
              if (status === G++) {
                cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === G++) {
                  cm.npc_ChangeController(1540805, "oid=287482996", 450, 271, 2, 400, 500, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=287482996", 'summon', 0, 0);
                  cm.npc_SetSpecialAction("oid=287482996", "special1", -1, 1);
                  cm.npc_ChangeController(1540807, "oid=287482997", -700, 271, 5, -750, -650, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=287482997", 'summon', 0, 0);
                  cm.npcMove(1540807, 1000, -1000, 0);
                  cm.npc_ChangeController(1540920, "oid=287482998", 1350, 350, 8, 1300, 1400, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=287482998", "summon", 0, 0);
                  cm.npc_ChangeController(1540920, "oid=287482999", 1300, 350, 8, 1250, 1350, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=287482999", "summon", 0, 0);
                  cm.npc_ChangeController(1540920, "oid=287483000", 1250, 350, 8, 1200, 1300, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=287483000", "summon", 0, 0);
                  cm.npc_ChangeController(1540799, "oid=287483001", 1160, 350, 7, 1110, 1210, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=287483001", "summon", 0, 0);
                  cm.npc_SetForceMove("oid=287482998", -1, 750, 150);
                  cm.npc_SetForceMove("oid=287482999", -1, 750, 150);
                  cm.npc_SetForceMove("oid=287483000", -1, 750, 150);
                  cm.npc_SetForceMove("oid=287483001", -1, 750, 150);
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                } else {
                  if (status === G++) {
                    cm.sendNormalTalk_Bottom("……看上去并没有很古怪啊。", 37, 1540799, false, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT1/OP/1", 128);
                  } else {
                    if (status === G++) {
                      cm.sendNormalTalk_Bottom("肯定是那些放哨的看错了。", 37, 1540920, true, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT1/OP/2", 128);
                    } else {
                      if (status === G++) {
                        cm.sendNormalTalk_Bottom("也对，怎么会有外人穿过如此暴风雪而来，\r\n他们又不傻。", 37, 1540799, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT1/OP/3", 128);
                      } else {
                        if (status === G++) {
                          cm.sendNormalTalk_Bottom("不过还是不要放松警惕，我们得继续留心观察，\r\n这是戴米安的命令。", 37, 1540799, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT1/OP/4", 128);
                        } else {
                          if (status === G++) {
                            cm.sendNormalTalk_Bottom('是！', 37, 1540920, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT1/OP/5", 128);
                          } else {
                            if (status === G++) {
                              cm.npc_SetForceMove("oid=287483001", -1, 1500, 150);
                              cm.npc_SetForceMove("oid=287482998", -1, 1500, 150);
                              cm.npc_SetForceMove("oid=287482999", -1, 1500, 150);
                              cm.npc_SetForceMove("oid=287483000", -1, 1500, 150);
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                            } else {
                              if (status === G++) {
                                cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 15000, 440, 421);
                              } else {
                                if (status === G++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === G++) {
                                    cm.sendNormalTalk_Bottom("走了，走了。", 37, 1540807, false, true);
                                    cm.effect_Voice("Voice3.img/HofM/ACT1/OP/6", 128);
                                  } else {
                                    if (status === G++) {
                                      cm.npc_SetSpecialAction("oid=287482996", "special2", -1, 1);
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/evan_appear", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === G++) {
                                        cm.npc_SetSpecialAction("oid=287482996", "special3", 1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === G++) {
                                          cm.npcMove(1540807, 0, 1000, 4000);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === G++) {
                                            cm.npc_LeaveField("oid=287483001");
                                            cm.npc_LeaveField("oid=287483001");
                                            cm.npc_LeaveField("oid=287482998");
                                            cm.npc_LeaveField("oid=287482998");
                                            cm.npc_LeaveField("oid=287482999");
                                            cm.npc_LeaveField("oid=287482999");
                                            cm.npc_LeaveField("oid=287483000");
                                            cm.npc_LeaveField("oid=287483000");
                                            cm.sendNormalTalk_Bottom("#face0#嘿嘿，捉迷藏作战计划成功！", 37, 1540807, false, true);
                                            cm.effect_Voice("Voice3.img/HofM/ACT1/OP/7", 128);
                                          } else {
                                            if (status === G++) {
                                              cm.sendNormalTalk_Bottom("#face2#额啊啊……米乐，我的手脚动不了了……", 37, 1540805, true, true);
                                              cm.effect_Voice("Voice3.img/HofM/ACT1/OP/8", 128);
                                            } else {
                                              if (status === G++) {
                                                cm.sendNormalTalk_Bottom("#face0#要给你喷点火吗？会很暖和的。", 37, 1540807, true, true);
                                                cm.effect_Voice("Voice3.img/HofM/ACT1/OP/9", 128);
                                              } else {
                                                if (status === G++) {
                                                  cm.sendNormalTalk_Bottom("#face2#算了，你难不成打算把我给烤熟吗？", 37, 1540805, true, true);
                                                  cm.effect_Voice("Voice3.img/HofM/ACT1/OP/10", 128);
                                                } else {
                                                  if (status === G++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我开玩笑的，主人你太小只了，就算烤掉也不够吃的啊？", 37, 1540807, true, true);
                                                    cm.effect_Voice("Voice3.img/HofM/ACT1/OP/11", 128);
                                                  } else {
                                                    if (status === G++) {
                                                      cm.sendNormalTalk_Bottom("#face6#呜呜……这家伙现在还真是什么都敢说了，看来我不该养你啊。", 37, 1540805, true, true);
                                                      cm.effect_Voice("Voice3.img/HofM/ACT1/OP/12", 128);
                                                    } else {
                                                      if (status === G++) {
                                                        cm.fieldEffect_PlayBGM("Bgm45/Through The Blizzard", 0, 0);
                                                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                      } else {
                                                        if (status === G++) {
                                                          cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 1-\r\n#fs28#龙沉睡的岛: #fs20#暴风雪笼罩的雪龟岛", 1);
                                                          cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                        } else {
                                                          if (status === G++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === G++) {
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                            } else {
                                                              if (status === G++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else {
                                                                if (status === G++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === G++) {
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                  } else if (status === G++) {
                                                                    cm.dispose();
                                                                    cm.warp(350110010, 0, true);
                                                                    cm.npc_LeaveField("oid=287482996");
                                                                    cm.npc_LeaveField("oid=287482996");
                                                                    cm.npc_LeaveField("oid=287482997");
                                                                    cm.npc_LeaveField("oid=287482997");
                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;