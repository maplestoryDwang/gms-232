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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 960, 90);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(3001952, "oid=6255178", 1600, 100, 3, 1550, 1650, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=6255178", "summon", 0, 0);
        cm.npc_ChangeController(3001968, "oid=6255179", 700, 100, 1, 650, 750, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=6255179", "summon", 0, 0);
        cm.npc_ChangeController(3001968, "oid=6255180", 780, 100, 1, 730, 830, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=6255180", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=6255179", 1, 100, 120);
              cm.npc_SetForceMove("oid=6255180", 1, 100, 120);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#他们跑不远的。\r\n大家仔细搜！", 36, 3001968, false, true, 1);
              } else {
                if (status === V++) {
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
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1670, 90);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face9#真是帮固执的家伙……差不多就得了！", 36, 3001952, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#……小毛贼。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face6#什么？", 36, 3001952, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#我听到了那些追你的人说的话。\r\n不如去自首接受惩罚吧？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#那样的话……就不用再东躲西藏了。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face6#那、那是个误会……你也该听我解释啊！\r\n总之，我现在不能被抓。", 36, 3001952, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face10#等甩掉了追击，我会和你说明情况……\r\n请暂且相信我好吗？", 36, 3001952, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face5#……你也不想被他们抓住，不是吗！？", 36, 3001952, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(在这种情况下，万一被他们抓去，可就麻烦了。\r\n关键我现在失忆了啊。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#再磨蹭下去，就没法准时到达了。\r\n啊，我着急要去个地方。", 36, 3001952, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#要是干等着他们离开，肯定要迟到。\r\n既然如此，只能我先动手了。", 36, 3001952, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#动手？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我们要把警卫兵引开，然后趁机逃跑。\r\n我数到三，你就冲出去。", 36, 3001952, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#为防两人都被抓，接下来我们分头走。\r\n我有十万火急的事情要去办……", 36, 3001952, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#行，知道了。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face6#好。那引诱他们……啊，还有件事……", 36, 3001952, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#平安逃离这里之后，我们再碰个面好吗？\r\n我有很重要的事情要跟你讲，是关于你的。", 36, 3001952, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face6#……对了，我该怎么称呼你？", 36, 3001952, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#啊，那个等回头见面再慢慢聊……\r\n总之，当钟声敲响五次时，在那个喷泉处碰头！", 36, 3001952, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=6255178", -1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(少年掏出个硬币，朝警卫兵所在处丢去。\r\n硬币骨碌碌地滚到了警卫兵的脚前方。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/pendant", 100);
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 1060, 90);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=6255179", 1, 150, 120);
                                                                                      cm.npc_SetForceMove("oid=6255180", 1, 150, 120);
                                                                                      cm.sendNormalTalk_Bottom("#face0#啊，在那边！", 37, 3001968, false, true, 1);
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
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1670, 90);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#待会儿见，传说中的骑士~！", 36, 3001952, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#一……", 36, 3001952, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#二……", 36, 3001952, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#……三！", 36, 3001952, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/cloth", 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face4#还真是自作主张啊。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
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
                                                                                                                            cm.warp(993162004, 0, false);
                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                            cm.npc_LeaveField("oid=6255178");
                                                                                                                            cm.npc_LeaveField("oid=6255179");
                                                                                                                            cm.npc_LeaveField("oid=6255180");
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
}