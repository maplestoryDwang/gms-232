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
      cm.npc_ChangeController(3001218, 'oid=363590', -594, 45, 62, -644, -544, 1, false, 0, false);
      cm.npc_ChangeController(3001557, "oid=568434", 360, 30, 63, 310, 410, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=568434", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -270, 0);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
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
                cm.sendNormalTalk_Bottom("#face0#难道是这里吗……来图仑城的难民生活的地方……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                  cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 2);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（等你到了地方就去找找影子商团的科尼，\r\n该隐，他应该能帮到你的旅行。）", 36, 3004916, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                      cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 2);
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#喂~是这边。", 36, 3001557, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 200, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你就是该隐啊，我收到奶奶的信了。", 37, 3001557, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#累了吧？我已经找了个僻静的地方准备好了休息处，这边请……", 37, 3001557, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=568434", 1);
                                      cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#让所有人都出来吧？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=568434"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=568434", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 310, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(3001541, 'oid=568438', 548, 30, 63, 498, 598, 1, false, 0, false);
                                                cm.npc_SetSpecialAction("oid=568438", "summon", 0, 0);
                                                cm.npc_ChangeController(3001541, "oid=568439", 670, 30, 65, 620, 720, 1, false, 0, false);
                                                cm.npc_SetSpecialAction("oid=568439", "summon", 0, 0);
                                                cm.npc_ChangeController(3001541, "oid=568440", 719, 30, 65, 669, 769, 1, false, 0, false);
                                                cm.npc_SetSpecialAction('oid=568440', 'summon', 0, 0);
                                                cm.npc_ChangeController(3001542, "oid=568441", 474, 30, 63, 424, 524, 1, false, 0, false);
                                                cm.npc_SetSpecialAction("oid=568441", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#额啊……对、对不起，那帮家伙一个劲地追过来抢阿莫斯的信……我就自行乔装打扮了一番……", 37, 3001542, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#呵呵，我可是一直在等你呢。", 37, 3001557, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#少废话，你身上应该带了不少东西吧？", 37, 3001557, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#孩子们，先帮我看看！！", 37, 3001557, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.Npc_Fadeout("oid=568434", 0, 500);
                                                            cm.Npc_Fadeout("oid=568438", 0, 500);
                                                            cm.Npc_Fadeout("oid=568439", 0, 500);
                                                            cm.Npc_Fadeout("oid=568440", 0, 500);
                                                            cm.npc_LeaveField("oid=568441");
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
                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 800, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(3001543, "oid=568443", 670, 30, 65, 620, 720, 1, false, 0, false);
                                                                    cm.npc_SetSpecialAction('oid=568443', "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.onTeleport(0, 3, cm.getPlayer().getId(), 155, 30);
                                                                      cm.npc_ChangeController(3001542, 'oid=568444', 310, 30, 63, 260, 360, 1, false, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=568444", "summon", 0, 0);
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#喂，是谁又敢来招惹我的部下！？", 37, 3001554, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 330, 0);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face4#……嗯？", 37, 3001554, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_setForceFlip("oid=568444", 1);
                                                                                      cm.sendNormalTalk_Bottom("#face0#卡、卡德娜……你来晚了啊，这位已经处理好了……", 37, 3001542, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face5#什么嘛，支部长让我赶紧过来，我才来的！", 37, 3001554, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（什么情况……？此人让我感受到了一股莫名的似曾相识感。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#你搞什么？瞪什么瞪！", 37, 3001554, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#卡、卡德娜，这位是商团的阿莫斯介绍来的，今天要照顾好的就是这位。", 37, 3001542, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_setForceFlip("oid=568444", -1);
                                                                                                cm.sendNormalTalk_Bottom("#face0#该、该隐，跟我来吧……", 37, 3001542, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face5#切，总觉得这家伙叫人很不爽……", 37, 3001554, true, true, 1);
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
                                                                                                            cm.forceCompleteQuest(39429);
                                                                                                            cm.npc_LeaveField("oid=568434");
                                                                                                            cm.npc_LeaveField('oid=568438');
                                                                                                            cm.npc_LeaveField("oid=568439");
                                                                                                            cm.npc_LeaveField("oid=568440");
                                                                                                            cm.npc_LeaveField("oid=568443");
                                                                                                            cm.npc_LeaveField("oid=568444");
                                                                                                            cm.dispose();
                                                                                                            cm.warp(402000001, 0, false);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.setStandAloneMode(false);
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}