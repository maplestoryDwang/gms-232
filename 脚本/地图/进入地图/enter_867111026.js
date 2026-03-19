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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=1665242", -250, 1257, 1);
      cm.npc_SetSpecialAction("oid=1665242", "summon");
      cm.npc_ChangeController(9400032, "oid=1665243", -420, 1257, 0);
      cm.npc_SetSpecialAction("oid=1665243", "summon");
      cm.npc_ChangeController(9400033, "oid=1665244", -350, 1257, 0);
      cm.npc_SetSpecialAction("oid=1665244", 'summon');
      cm.npc_ChangeController(9400034, "oid=1665245", -90, 1257, 1);
      cm.npc_SetSpecialAction("oid=1665245", 'summon');
      cm.npc_ChangeController(9400035, "oid=1665246", -180, 1257, 1);
      cm.npc_SetSpecialAction("oid=1665246", "summon");
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -536, 1330);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("好，那我们就前往奇怪的毛发指向的地方吧？", 9400034);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("快走吧，我在前面开路。", 9400035);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 100, -536, 1550);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=1665246", -1, 750, 200);
                cm.inGameDirectionEvent_AskAnswerTime(2200);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=1665243", -1, 600, 180);
                  cm.npc_SetForceMove("oid=1665244", -1, 500, 130);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=1665245", -1, 600, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(2202);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(5200);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom('等等，等一下！！', 9400031);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=1665246", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=1665243", 1);
                            cm.npc_setForceFlip("oid=1665244", 1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=1665245", 1);
                              cm.sendNextNoESC_Bottom('？？', 9400032);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=1665242", -1, 350, 100);
                                  cm.sendNextNoESC_Bottom("其实……虽然我们不是因为什么好事才遇见的，不过正是因为APORD，我们大家才聚在了一起。", 9400031);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextNoESC_Bottom("#face2#我们既然组成了优秀的侦探团，那就庆祝一下，一起唱一首歌……！", 9400031);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayBGM("BgmPL.img/MD_AcornDetective_MR");
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                        cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 2000, 9400034, 6654029);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                          cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 9400032, 6654029);
                                          cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400033, 6654029);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextNoESC_Bottom("什么侦探团？", 9400035);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextNoESC_Bottom("我们还是先找到他们的基地吧。", 9400034);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextNoESC_Bottom("嘤嘤，就唱一首歌吧！大家一起！?!", 9400031);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 9400032, 6654029);
                                                      cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400033, 6654029);
                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 9400034, 6654029);
                                                      cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400035, 6654029);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNextNoESC_Bottom("那就只唱一小节！只唱一小节！", 9400031);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNextNoESC_Bottom("#face2#如果你们不想唱……那就跟着哼一下前奏吧！嗯？！", 9400031);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNextNoESC_Bottom("#face2#所有侦探团都应该有主题歌啊！帅气的主题歌！", 9400031);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNextNoESC_Bottom("算了，赶紧走吧。赏金可不会乖乖在原地等着我。", 9400034);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 100, -536, 1750);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=1665246", 0);
                                                                  cm.npc_SetForceMove("oid=1665246", 1, 750, 200);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=1665243", 0);
                                                                    cm.npc_SetForceMove("oid=1665243", 1, 600, 180);
                                                                    cm.npc_setForceFlip("oid=1665244", 0);
                                                                    cm.npc_SetForceMove("oid=1665244", 1, 600, 130);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=1665245", 0);
                                                                      cm.npc_SetForceMove("oid=1665245", 1, 600, 150);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2001);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=1665242", -1, 100, 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetForceMove("oid=1665242", 1, 230, 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNextNoESC_Bottom("啊！我们得定下名字来！帅气的侦探团名字！", 9400031);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=1665246", -1);
                                                                              cm.npc_setForceFlip("oid=1665243", -1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=1665244", -1);
                                                                                cm.npc_setForceFlip("oid=1665245", -1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 9400032, 6654029);
                                                                                cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400033, 6654029);
                                                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 9400034, 6654029);
                                                                                cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 9400035, 6654029);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNextNoESC_Bottom("#face2#嗯……冒险岛侦探团怎么样？！因为我们是代表冒险岛世界的侦探嘛！怎么样，怎么样？", 9400031);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNextNoESC_Bottom("你为什么总是想弄什么侦探团啊，别玩了，快走吧。", 9400032);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNextNoESC_Bottom("就算是我自己想弄的侦探团……也很帅气啊……嗯。", 9400031);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 100, -536, 1950);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_setForceFlip("oid=1665246", 0);
                                                                                          cm.npc_SetForceMove("oid=1665246", -1, 700, 200);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_setForceFlip("oid=1665243", 0);
                                                                                            cm.npc_SetForceMove("oid=1665243", -1, 600, 180);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=1665244", 0);
                                                                                              cm.npc_SetForceMove("oid=1665244", -1, 600, 130);
                                                                                              cm.npc_setForceFlip("oid=1665245", 0);
                                                                                              cm.npc_SetForceMove("oid=1665245", -1, 630, 150);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2001);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetForceMove("oid=1665242", 1, 100, 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=1665242", -1, 230, 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNextNoESC_Bottom("我们也算是对抗APORD这个犯罪组织的组织啊。还是起个好点的名字吧。", 9400033);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=1665243", 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=1665246", 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNextNoESC_Bottom("神那，你可别配合她，你要是配合她，她就更来劲了。", 9400032);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetSpecialAction("oid=1665242", "fighting");
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNextNoESC_Bottom("#face2#这个主意真好，代号神那！", 9400031);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNextNoESC_Bottom("代号杰特，APORD的名字有什么意义吗？", 9400031);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=1665245", 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_setForceFlip("oid=1665244", 1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNextNoESC_Bottom("他们自己说这代表着夜幕，他们是想耍帅吧，我倒觉得不怎么样。", 9400034);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNextNoESC_Bottom('区区一个犯罪集团。', 9400034);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNextNoESC_Bottom("#face2#嗯……那我们叫橡果侦探团，怎么样！", 9400031);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNextNoESC_Bottom("为什么是橡果？", 9400034);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNextNoESC_Bottom("因为这里有橡树啊，嘿嘿。", 9400031);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNextNoESC_Bottom("橡果是不是很帅？！", 9400031);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNextNoESC_Bottom("#face2#追踪APORD的橡果侦探团！", 9400031);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNextNoESC_Bottom("……所以说是最终成长为大树的意思？", 9400034);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNextNoESC_Bottom("你赋予了它真正的意义啊。", 9400035);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_setForceFlip("oid=1665244", -1);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_setForceFlip("oid=1665245", 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNextNoESC_Bottom("吵死了，我可不是有意那么做的。", 9400034);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNextNoESC_Bottom("橡果也很好吃啊。", 9400033);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_setForceFlip("oid=1665244", 0);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_setForceFlip("oid=1665245", 1);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNextNoESC_Bottom("你别掺和进去啊！", 9400032);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNextNoESC_Bottom("#face2#啊啊，太帅了！我得想个主题曲啊，噜噜~", 9400031);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNextNoESC_Bottom('……', 9400032);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.forceCompleteQuest(59724);
                                                                                                                                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                                                                        cm.updateInfoQuest(59763, "1=1;2=1;3=1;4=1;5=1");
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence");
                                                                                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                        cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                                                                                                                                                        cm.setInGameDirectionMode(false, false, false);
                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                        cm.npc_LeaveField("oid=1665242");
                                                                                                                                                                        cm.npc_LeaveField("oid=1665243");
                                                                                                                                                                        cm.npc_LeaveField("oid=1665244");
                                                                                                                                                                        cm.npc_LeaveField("oid=1665245");
                                                                                                                                                                        cm.npc_LeaveField("oid=1665246");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;