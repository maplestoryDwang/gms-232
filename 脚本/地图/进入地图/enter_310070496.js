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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -120, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155120, "oid=42515686", -232, -50, 14, -282, -182, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=42515686", 'summon', 0, 0);
        cm.npc_ChangeController(2155104, "oid=42515687", 50, -50, 14, 0, 100, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=42515687", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=42515686", "downoff", -1, 1);
        cm.npc_setForceFlip("oid=42515686", 1);
        cm.sendNormalTalk_Bottom("#face0#我现在…终于记起了一切。", 37, 2155121, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=42515687", -1, 120, 100);
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 1000, -150, 50);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#傻瓜…你等了很久吧？\r\n我回来了。", 37, 2155121, false, true);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=42515686", "turnon", -1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=42515686", "downon", -1, 1);
                  cm.sendNormalTalk_Bottom("… 是你吗？", 37, 2155120, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#fs18#真的是你吗？你回来了？", 37, 2155120, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=42515687", -1, 50, 50);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=42515687", 'kneedown', -1, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=42515687", "knee", -1, 1);
                          cm.sendNormalTalk_Bottom("嗯，我说过我一定会回来的，不是吗？\r\n嘻嘻，好久不见。", 37, 2155104, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你的芯片呢…？怎么样？还好吗？", 37, 2155120, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#……这段时间发生了一些事情。", 37, 2155121, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我是不是来得有点晚？你自己孤单吗？", 37, 2155104, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("…为什么，你怎么又来了。", 37, 2155120, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("嗯…因为我们约定好了。", 37, 2155104, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("但是……", 37, 2155120, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42515686"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("那个#b制造号码板#k，你还带在身边啊？", 37, 2155120, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("多亏了这个，我才能重新回到这里。", 37, 2155104, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2550, 500, -510, 70);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("后续小组到达。\r\n在主机房内部发现A级清除对象。\r\n改变体型，尝试进入。", 37, 2155113, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 300, -150, 50);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42515687"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("…这里很危险。请快点离开。", 37, 2155120, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#……嗯…没有时间了。不过，能见到你我已经满足了。", 37, 2155121, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#fs20#好了，现在要做该做的事情了。", 37, 2155104, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=42515687", "pain", -1, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2##fs20#呃呃！呃！\r\n#fs16#之前已经做过一次，现在熟练多了。", 37, 2155121, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/elctric2", 100);
                                                                            cm.npc_SetSpecialAction("oid=42515687", "knee", -1, 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("你又要…把自己的芯片摘给我？", 37, 2155120, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#这不是全新的，很抱歉。\r\n如果我能提前多准备几个就好了……", 37, 2155121, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("你究竟…为什么…为什么要这么做？", 37, 2155120, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2155104, null, cm.getPlayer().getId());
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#那个…………", 37, 2155121, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#因为我是…笨蛋…所以才这样的。", 37, 2155121, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2550, 300, -510, 70);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("体型缩小完成。\r\n尝试进入。", 37, 2155113, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 300, -50, 50);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42515687"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom('我先从通道出去了。', 57, 0, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 300, -150, 50);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_ChangeController(2155113, "oid=42520717", -630, 50, 14, -680, -580, 0, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=42520717", "summon", 0, 0);
                                                                                                                    cm.sendNormalTalk_Bottom("我现在真的要走了。\r\n我还会再来的，等着我。", 37, 2155104, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetSpecialAction("oid=42515687", 'kneeup', -1, 1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.setNpcSpecialActionReset("oid=42515687");
                                                                                                                        cm.sendNormalTalk_Bottom("#fs14#…………我", 37, 2155120, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=42515687"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom('#fs18#嗯？', 37, 2155104, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2155120, null, cm.getPlayer().getId());
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("…没什么。\r\n请快点离开吧。", 37, 2155120, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2550, 300, -510, 70);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 300, -150, 50);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42515687"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#fs18#那，我还会再来的！我走啦。", 37, 2155104, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#fs14#(该死，前往通道的时机……)", 37, 2155104, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_SetForceMove("oid=42520717", 1, 800, 250);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 2550, 2500, 400, 20);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_setForceFlip("oid=42515687", 1);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_SetForceMove("oid=42515687", 1, 630, 300);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_setForceFlip("oid=42515687", -1);
                                                                                                                                                            cm.sendNormalTalk_Bottom("#fs22#你要好好保重！知道了吗？", 37, 2155104, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.npc_setForceFlip("oid=42515687", 1);
                                                                                                                                                                cm.npc_SetForceMove("oid=42520717", 1, 50, 100);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_SetForceMove("oid=42515687", 1, 200, 300);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##fs20#呃啊啊啊啊！", 37, 2155121, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2550, 300, -140, 70);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("……傻瓜…笨蛋…", 37, 2155120, false, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                              cm.eventSKill(0);
                                                                                                                                                                              cm.warp(310070497, 0, false);
                                                                                                                                                                              cm.npc_LeaveField("oid=42515686");
                                                                                                                                                                              cm.npc_LeaveField("oid=42515686");
                                                                                                                                                                              cm.npc_LeaveField("oid=42515687");
                                                                                                                                                                              cm.npc_LeaveField("oid=42515687");
                                                                                                                                                                              cm.npc_LeaveField("oid=42520717");
                                                                                                                                                                              cm.npc_LeaveField("oid=42520717");
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
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}