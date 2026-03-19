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
      cm.npc_ChangeController(3003656, "oid=275946", -2212, -508, 6, -2262, -2162, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275947", -1488, -480, 1, -1538, -1438, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275948", -1404, -480, 1, -1454, -1366, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275949", -1320, -480, 2, -1326, -1270, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275950", -1236, -480, 2, -1286, -1186, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275951", -2449, -497, 5, -2499, -2399, 4, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275952', -2535, -497, 5, -2585, -2485, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275953", -2633, -497, 5, -2683, -2583, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275954", -2822, -497, 5, -2872, -2772, 4, true, 0, false);
      cm.npc_ChangeController(3003674, "oid=275955", -1887, -480, 3, -1937, -1837, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275956", -2724, -497, 5, -2774, -2674, 4, true, 0, false);
      cm.npc_ChangeController(3003651, "oid=275957", -1795, -480, 1, -1795, -1745, 4, true, 0, false);
      cm.monadForceMove('white', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -2000, -835);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -1800, -583);
        } else {
          if (status === V++) {
            cm.monadForceMove("white", 1, 30);
            cm.inGameDirectionEvent_AskAnswerTime(30);
          } else {
            if (status === V++) {
              cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
              cm.inGameDirectionEvent_AskAnswerTime(30);
            } else {
              if (status === V++) {
                cm.monadForceMove("white", 0, 30);
                cm.inGameDirectionEvent_AskAnswerTime(30);
              } else {
                if (status === V++) {
                  cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(30);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.monadForceMove("white", 1, 30);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.monadForceMove("white", 0, 900);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1990);
                        } else {
                          if (status === V++) {
                            cm.monadForceMove('white', 1, 30);
                            cm.inGameDirectionEvent_AskAnswerTime(30);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                              cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                              cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                              cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(30);
                            } else {
                              if (status === V++) {
                                cm.monadForceMove("white", 0, 30);
                                cm.inGameDirectionEvent_AskAnswerTime(30);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                  } else {
                                    if (status === V++) {
                                      cm.monadForceMove("white", 1, 30);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.monadForceMove("white", 0, 900);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1990);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#回来啦，#b#ho##k。我们终于到达了巨大怪兽的附近。", 37, 3003651, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#从迷雾那边飞来了为数众多的敌人。\r\n那很可能是……那只巨大的眼睛将要重新睁开的征兆……", 37, 3003674, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#是的，没错。我们的目标是在这之前破坏掉核心。", 37, 3003656, true, true);
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
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -2000, -780);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#最重要的核心受到强大意念的保护。\r\n虽然无法完全解开结界，但暂时将其削弱还是可以做到的。", 37, 3003674, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#如果在白色之矛的舰炮中加上我的魔力，提高威力的话……\r\n应该可以削弱结界。", 37, 3003674, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#趁这个机会进入内部，摧毁掉核心，迷雾就会消散。但是……", 37, 3003674, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#（说核心非常坚硬，可能不容易破坏。\r\n因为意念的原因没人可以坚持很久，所以必须尝试好几次。）", 37, 3003674, true, true);
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
                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -1800, -583);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("进入内部的事情就交给我吧。", 57, 0, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……那就拜托你了，#b#ho##k。", 37, 3003656, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0##b#ho##k，请你突破敌人，接近巨大怪兽。\r\n确认你就位之后，白色之矛会发射舰炮。", 37, 3003656, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#请你趁结界变弱的时候潜入到内部。", 37, 3003656, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('明白了。', 57, 0, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#祝你好运。", 37, 3003656, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#好了，白色之矛做好发射舰炮的准备。", 37, 3003656, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#所有人各就各位。", 37, 3003656, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#是，女皇陛下。", 37, 3003651, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#是，女皇陛下！", 37, 3003659, true, true);
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
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -2218, -450);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face1#请一定要坚持住……直到迷雾消散为止。", 37, 3003656, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.monadForceMove("white", 1, 30);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                  cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                  cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                  cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.monadForceMove("white", 0, 30);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                        cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                        cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                        cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.monadForceMove("white", 1, 30);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.monadForceMove("white", 0, 900);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
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
                                                                                                                                                        cm.dispose();
                                                                                                                                                        cm.warp(993060066, 0, false);
                                                                                                                                                        cm.setStandAloneMode(false);
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
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}