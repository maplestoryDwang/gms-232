var status = -1;
var selectionLog = [];
function action(P, a, L) {
  if (status == 0 && P == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = L;
  var A = -1;
  if (status <= A++) {
    cm.dispose();
  } else {
    if (status === A++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540807, "oid=295118087", 150, -100, 5, 100, 200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=295118087", "summon", 0, 0);
      cm.npc_ChangeController(1540805, "oid=295118088", 218, -100, 5, 168, 268, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=295118088", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === A++) {
        cm.sendNormalTalk_Bottom("#face0#主人，总感觉好像个子长高了呢？", 37, 1540807, false, true, 1, 4500);
        cm.effect_Voice("Voice3.img/HofM/ACT4/ED2/1", 128);
      } else {
        if (status === A++) {
          cm.sendNormalTalk_Bottom("米乐你的翅膀好像也长大了。", 37, 1540805, true, true, 1, 4000);
          cm.effect_Voice("Voice3.img/HofM/ACT4/ED2/2", 128);
        } else {
          if (status === A++) {
            cm.sendNormalTalk_Bottom("#face0#好吧，不管什么地方都能去，下一个目的地是哪儿？", 37, 1540807, true, true, 1, 4500);
            cm.effect_Voice("Voice3.img/HofM/ACT4/ED2/3", 128);
          } else {
            if (status === A++) {
              cm.sendNormalTalk_Bottom("#face0#不管是哪里都好，直到世界再次需要我们的那一天，我们就去游历冒险岛世界的各地如何？", 37, 1540805, true, true, 1, 6900);
              cm.effect_Voice("Voice3.img/HofM/ACT4/ED2/4", 128);
            } else {
              if (status === A++) {
                cm.sendNormalTalk_Bottom("#face0#不论什么时候吗？", 37, 1540807, true, true, 1, 2900);
                cm.effect_Voice("Voice3.img/HofM/ACT4/ED2/5", 128);
              } else {
                if (status === A++) {
                  cm.sendNormalTalk_Bottom('恩，不论什么时候！', 37, 1540805, true, true, 1, 2700);
                  cm.effect_Voice("Voice3.img/HofM/ACT4/ED2/6", 128);
                } else {
                  if (status === A++) {
                    cm.sendNewEffects(18, [12000, 1000, 300, 0, 200]);
                  } else {
                    if (status === A++) {
                      cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/Cloud/skeleton", "animation", '', "cloud"], [1, 0, 1, 0, 0, 0, 0, 1]);
                      cm.inGameDirectionEvent_AskAnswerTime(9000);
                    } else {
                      if (status === A++) {
                        cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 3000, 0, 0, 13, 4, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === A++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer('BlackOut', '', 2, 100, 0, 0, 0, 0, 0);
                          cm.fieldEffect_取消复合图片动画("cloud", 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer("BlackOut2", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 10, 4, 1);
                          cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/HofM/Ending/0", 0, 500, 0, 0, 14, 4, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(3900);
                        } else {
                          if (status === A++) {
                            cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === A++) {
                              cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/HofM/Ending/1", 0, 500, 0, 0, 14, 4, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(3900);
                            } else {
                              if (status === A++) {
                                cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 300, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === A++) {
                                  cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/HofM/Ending/2", 0, 500, 0, 0, 14, 4, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(3900);
                                } else {
                                  if (status === A++) {
                                    cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 300, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === A++) {
                                      cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect2.img/HofM/Ending/3", 0, 500, 0, 0, 14, 4, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(3900);
                                    } else {
                                      if (status === A++) {
                                        cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 300, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === A++) {
                                          cm.fieldEffect_ProcessOnOffLayer('4', "Map/Effect2.img/HofM/Ending/4", 0, 500, 0, 0, 14, 4, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(3900);
                                        } else {
                                          if (status === A++) {
                                            cm.fieldEffect_ProcessOnOffLayer('4', '', 2, 300, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === A++) {
                                              cm.fieldEffect_ProcessOnOffLayer('5', "Map/Effect2.img/HofM/Ending/5", 0, 500, 0, 0, 14, 4, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(3900);
                                            } else {
                                              if (status === A++) {
                                                cm.fieldEffect_ProcessOnOffLayer('5', '', 2, 300, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === A++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('6', "Map/Effect2.img/HofM/Ending/6", 0, 500, 0, 0, 14, 4, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(3900);
                                                } else {
                                                  if (status === A++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('6', '', 2, 300, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === A++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('7', "Map/Effect2.img/HofM/Ending/7", 0, 500, 0, 0, 14, 4, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3900);
                                                    } else {
                                                      if (status === A++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('7', '', 2, 300, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === A++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('8', "Map/Effect2.img/HofM/Ending/8", 0, 500, 0, 0, 14, 4, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3900);
                                                        } else {
                                                          if (status === A++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('8', '', 2, 300, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === A++) {
                                                              cm.fieldEffect_ProcessOnOffLayer('9', "Map/Effect2.img/HofM/Ending/9", 0, 500, 0, 0, 14, 4, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3900);
                                                            } else {
                                                              if (status === A++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('9', '', 2, 300, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === A++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('10', "Map/Effect2.img/HofM/Ending/10", 0, 500, 0, 0, 14, 4, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3900);
                                                                } else {
                                                                  if (status === A++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('10', '', 2, 300, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === A++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('11', "Map/Effect2.img/HofM/Ending/11", 0, 500, -110, 0, 14, 4, 1);
                                                                      cm.fieldEffect_ProcessOnOffLayer('12', "Map/Effect2.img/HofM/Ending/12", 0, 500, 110, -5, 14, 4, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3900);
                                                                    } else {
                                                                      if (status === A++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('11', '', 2, 300, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer('12', '', 2, 300, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === A++) {
                                                                          cm.fieldEffect_ProcessOnOffLayer('13', "Map/Effect2.img/HofM/Ending/13", 0, 500, 0, 0, 14, 4, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3900);
                                                                        } else {
                                                                          if (status === A++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('13', '', 2, 300, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === A++) {
                                                                              cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/Ending/14/spider", '00', '', 'spider_pre'], [1, 0, 1, 0, 0, 0, 0, 1]);
                                                                              cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/Ending/15/shimma", '00', '', "golem_pre"], [1, 0, 1, 0, 0, 0, 0, 1]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === A++) {
                                                                                cm.fieldEffect_取消复合图片动画('spider_pre', 0, 0);
                                                                                cm.fieldEffect_取消复合图片动画('golem_pre', 0, 0);
                                                                                cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/Ending/14/spider", '01', '', '14'], [1, 1, 1, 3900, 0, 0, 0, 1]);
                                                                                cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/Ending/15/shimma", '01', '', '15'], [1, 1, 1, 3900, 0, 0, 0, 1]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3800);
                                                                              } else {
                                                                                if (status === A++) {
                                                                                  cm.fieldEffect_取消复合图片动画('14', 0, 0);
                                                                                  cm.fieldEffect_取消复合图片动画('15', 0, 0);
                                                                                  cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/Ending/14/spider", '02', '', 'spider_end'], [1, 0, 1, 0, 0, 0, 0, 1]);
                                                                                  cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/Ending/15/shimma", '02', '', "golem_end"], [1, 0, 1, 0, 0, 0, 0, 1]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === A++) {
                                                                                    cm.fieldEffect_取消复合图片动画("spider_end", 0, 0);
                                                                                    cm.fieldEffect_取消复合图片动画("golem_end", 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer('16', "Map/Effect2.img/HofM/Ending/16", 0, 500, 0, 0, 14, 4, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3900);
                                                                                  } else {
                                                                                    if (status === A++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('16', '', 2, 300, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === A++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer('17', "Map/Effect2.img/HofM/Ending/17", 0, 1000, 0, -50, 14, 4, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        cm.effect_Text(["#fn黑体##fs30##h0#"], [0, 3000, 4, 0, 0, 1, 4, 3, 1000, 1000]);
                                                                                      } else {
                                                                                        if (status === A++) {
                                                                                          cm.sendNewEffects(19, [1000]);
                                                                                        } else if (status === A++) {
                                                                                          cm.dispose();
                                                                                          cm.warp(350144400, 0, true);
                                                                                          cm.npc_LeaveField("oid=295118087");
                                                                                          cm.npc_LeaveField("oid=295118087");
                                                                                          cm.npc_LeaveField("oid=295118088");
                                                                                          cm.npc_LeaveField("oid=295118088");
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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