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
      cm.npc_ChangeController(3001925, 'oid=434246', 809, -167, 3, 759, 859, 1, false, 0, false);
      cm.npc_ChangeController(3001926, "oid=434247", 1072, -167, 5, 1022, 1122, 1, false, 0, false);
      cm.npc_ChangeController(3001927, "oid=434248", 971, -167, 5, 969, 1021, 1, false, 0, false);
      cm.npc_ChangeController(3001928, "oid=434249", -418, -167, 1, -468, -368, 0, false, 0, false);
      cm.npc_ChangeController(3001942, 'oid=434250', 896, -167, 3, 846, 929, 0, false, 0, false);
      cm.npc_ChangeController(3001943, 'oid=434251', 62, -167, 2, 12, 112, 0, false, 0, false);
      cm.npc_ChangeController(3001945, 'oid=434252', -317, -167, 1, -367, -267, 0, false, 0, false);
      cm.npc_ChangeController(3001944, "oid=434253", 730, -167, 3, 680, 780, 1, false, 0, false);
      cm.npc_ChangeController(3001939, "oid=434254", 135, -167, 2, 85, 185, 0, false, 0, false);
      cm.npc_ChangeController(3001968, "oid=434255", 566, -167, 4, 516, 566, 5, true, 0, false);
      cm.npc_ChangeController(3001968, "oid=434256", 640, -167, 3, 590, 690, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001957, "oid=6573586", 360, -200, 4, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6573586", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=6573586", "special0", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 377, -170);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
              cm.sendNormalTalk_Bottom("#face7#好，各位久等了。\r\n接下来即为大家公开本次的参展作品。", 36, 3001957, false, true, 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                cm.inGameDirectionEvent_AskAnswerTime(1600);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#不许失误……知道吗，拉迪？", 36, 3001962, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#当然，都不知练习了多少回了。", 36, 3001963, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('#face0#一……', 36, 3001962, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#二……", 36, 3001963, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#三！", 36, 3001962, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/powerdown", 100);
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
                                    cm.sendNormalTalk_Bottom("#face7#哦，不好意思各位，好像出了点故障。\r\n一会儿就能修好，请大家稍等。", 36, 3001957, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#(这个……这不是画上的钥匙。)", 36, 3001954, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#(这是父亲……里斯托尼亚国王……这幅画……)", 36, 3001954, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face7#……哼，抓到你了。", 36, 3001957, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#(已经过去好久了，怎么还没听见信号？\r\n不行，我要去带他离开。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/foot1", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#(不知为什么，少年站在那里一动不动。\r\n我跑过去抓住了他，可他的手就像冰一样冷。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/lock", 100);
                                                        cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#(少年被伯爵家的警卫兵抓住了。\r\n紧接着，他们就像早有准备似的，给我戴上了切断魔力的手铐。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face7#怎么非挑这好日子来扫兴……唉，原来是小偷捣乱。\r\n警卫兵，快把他们带走", 36, 3001957, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face8##fc0xFFbfbfbf#(这……这是个圈套……我没法召唤御剑。\r\n手铐切断了魔力。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                                                                        cm.sendNormalTalk_Bottom("#face7#在此公开我塞德里克的参展作品“动荡的王座”。", 36, 3001957, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face7#请大家注意这幅画。", 36, 3001957, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face7#为了维护王国的名誉，一直以来，大家都选择了沉默……", 36, 3001957, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face7#今天，我想讲讲这个令人难以启齿的真相。", 36, 3001957, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face7#使王国陷入破产边缘的真正原因，正是前国王的错误判断。", 36, 3001957, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face7#王室犯下的暴行，以艺术品的形式被记录了下来。", 36, 3001957, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face7#我们都应该正视过去的黑暗一面。", 36, 3001957, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face7#只有这样，才能摆脱旧日的沉疴，思索未来……", 36, 3001957, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                    cm.warp(993162036, 0, false);
                                                                                                    cm.setStandAloneMode(false);
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.npc_LeaveField("oid=6573586");
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