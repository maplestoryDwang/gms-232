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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 50, 520, 138);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1540706, "oid=287059037", -111, 138, 9, -161, -61, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=287059037", "summon", 0, 0);
            cm.npc_SetForceMove("oid=287059037", 1, 580, 150);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#奥尔卡！请等等我！", 45, 1540460, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(1540460, "oid=287061571", -111, 138, 9, -161, -61, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=287061571", "summon", 0, 0);
                  cm.npc_SetForceMove("oid=287061571", 1, 500, 150);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=287059037", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#咳咳……", 45, 1540460, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#奥尔卡，你为什么要到这么寒冷的地方来？", 45, 1540460, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 520, 170);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('我有事要去找老人家。', 37, 1540499, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("话说，你为什么继续跟着我？黑色之翼现在已经解散了。", 37, 1540499, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("你没必须继续跟着奥尔卡了。", 37, 1540499, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#可是……我要继续侍奉奥尔卡。", 45, 1540460, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("为什么？", 37, 1540499, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("哪有什么为什么！", 45, 1540460, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#那当然是我从很久前就喜……", 45, 1540460, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('？', 37, 1540499, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#喜……喜……", 45, 1540460, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("你在说什么啊！", 37, 1540499, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("说话爽快点！", 37, 1540499, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#因为我是仆人……奥尔卡的仆人！", 45, 1540460, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=287059037"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#哼……虽然不懂你在说什么，但随便你吧。", 37, 1540499, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#不过，我会随意使唤你的，你最好先弄清楚！", 37, 1540499, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#遵命，奥尔卡！", 45, 1540460, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("不过，你想去见的那个老人家究竟是谁啊……？", 45, 1540460, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_ChangeController(1540707, "oid=287080154", 900, 138, 28, 850, 950, 1, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=287080154", "summon", 0, 0);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 740, 170);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("我知道你终有一天会来找我的，奥尔卡", 45, 1540707, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287059037"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287061571"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=287059037", 0);
                                                                                cm.npc_SetForceMove("oid=287061571", 1, 220, 150);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=287059037", 1, 50, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#小心，奥尔卡！", 37, 1540460, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("哼，别看他这样，他可是精灵之王。", 37, 1540499, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#嗯？啊……。呼，我还以为是怪物呢。", 37, 1540460, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom('……', 37, 1540707, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('黑暗精灵奥尔卡。', 37, 1540707, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("违背禁令，获得人类身体的你为什么回来找我。", 37, 1540707, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("我需要力量。", 45, 1540499, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("不是黑魔法师所给的力量，而是黑暗精灵真正的力量。", 45, 1540499, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              var O = cm.getNumberFromQuestInfo(33266, "mapR");
                                                                                                              cm.forceCompleteQuest(33289);
                                                                                                              cm.onActionBarResult(6, -1);
                                                                                                              cm.mapleHeroBecomeNpc(-1, 1);
                                                                                                              cm.playerMessage(5, "返回原来所在的地图. ");
                                                                                                              cm.updateInfoQuest(33266, "save=3;or=1;he=1");
                                                                                                              cm.dispose();
                                                                                                              cm.warp(O, 0, false);
                                                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                              cm.npc_LeaveField("oid=287059037");
                                                                                                              cm.npc_LeaveField("oid=287059037");
                                                                                                              cm.npc_LeaveField("oid=287061571");
                                                                                                              cm.npc_LeaveField("oid=287061571");
                                                                                                              cm.npc_LeaveField("oid=287080154");
                                                                                                              cm.npc_LeaveField("oid=287080154");
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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