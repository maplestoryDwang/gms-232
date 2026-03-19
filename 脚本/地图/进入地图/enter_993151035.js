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
      cm.npc_ChangeController(3004411, "oid=377785", -1, -147, 0, -51, 49, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004430, "oid=63533709", -67, -69, 17, -117, -17, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63533709", 'summon', 0, 0);
      cm.npc_ChangeController(3004441, "oid=63533710", 60, -69, 9, 10, 110, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=63533710", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, -80);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=63533709", "special12", -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#你说什么？逐出教团？", 37, 3004441, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(6000);
              cm.effect_Text(["#fn黑体##fs18#几年前，圣剑运输作战之后。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你穿越半个大陆护送圣剑至此，我们怎能将你逐出教团？", 37, 3004441, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我本应成为驱散黑暗的黎明之剑。", 37, 3004430, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#可我却没能做到。", 37, 3004430, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我打着执行任务的旗号，忽视了饱受苦难折磨的无辜群众。", 37, 3004430, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我本应成为守护战友的朝晖之盾。", 37, 3004430, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#可我却没能做到。", 37, 3004430, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我卑鄙地把战友们当作肉盾，独自存活了下来。", 37, 3004430, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我本应成为严惩敌人的黄昏之焰。", 37, 3004430, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#可我却没能做到。", 37, 3004430, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我不过是把敌人抛在身后，拼命逃跑而已。", 37, 3004430, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3004441, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#看来你身心俱疲。", 37, 3004441, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#带着一身伤痛穿越半个大陆，产生这种消极想法可以理解。", 37, 3004441, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#刚才的话我会当做没听过的，请先休息一下，静静心吧。", 37, 3004441, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=63533709", "special11", -1, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('#face9#……', 37, 3004430, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face9#要相信……太阳终究会冉冉升起。", 37, 3004430, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63533710"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=63533709", "special12", -1, 1);
                                                                    cm.sendNormalTalk_Bottom("#face0#在故乡被焚烧，无数居民和战友们葬身火海的时候，\r\n我苦苦祈祷，哀求神明，却什么用也没有……", 37, 3004430, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#圣剑不过是一把普通的剑。", 37, 3004430, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我没能看到那期待已久的光芒，哪怕一丝也没有。", 37, 3004430, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#塞伦！！怎么会……！", 37, 3004441, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#大神官大人，我……", 37, 3004430, false, true);
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
                                                                                      cm.sendNormalTalk_Bottom("#face0#我开始怀疑太阳了。", 37, 3004430, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else if (status === V++) {
                                                                                        cm.eventSKill(0);
                                                                                        cm.warp(993151017, 0, true);
                                                                                        cm.npc_LeaveField("oid=63533709");
                                                                                        cm.npc_LeaveField("oid=63533709");
                                                                                        cm.npc_LeaveField("oid=63533710");
                                                                                        cm.npc_LeaveField("oid=63533710");
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