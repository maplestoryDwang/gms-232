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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 1600, 38);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(733);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1530140, "oid=37840954", 211, 38, 5, 161, 261, 0, true, false);
          cm.npc_SetSpecialAction("oid=37840954", "summon", 0, 0);
          cm.npc_ChangeController(1530080, "oid=37840955", 291, 38, 7, 241, 341, 0, true, false);
          cm.npc_SetSpecialAction("oid=37840955", 'summon', 0, 0);
          cm.npc_ChangeController(1530070, "oid=37840956", 371, 38, 6, 321, 421, 0, true, false);
          cm.npc_SetSpecialAction("oid=37840956", "summon", 0, 0);
          cm.npc_ChangeController(1530100, "oid=37840957", 451, 38, 12, 401, 501, 0, true, false);
          cm.npc_SetSpecialAction("oid=37840957", "summon", 0, 0);
          cm.npc_ChangeController(1530160, "oid=37840958", 1700, 38, 22, 1650, 1750, 1, true, false);
          cm.npc_SetSpecialAction("oid=37840958", "summon", 0, 0);
          cm.npc_ChangeController(1530150, "oid=37840959", 1500, 38, 27, 1450, 1550, 0, true, false);
          cm.npc_SetSpecialAction("oid=37840959", "summon", 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("今天的教师聚餐，不是说在喷泉公园见面的吗？", 37, 1530160, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我也听说了。难道是老师们还没到？", 37, 1530150, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("麦格纳斯老师就算在校外也穿运动服吗？", 37, 1530160, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我还想问希拉老师就算在校外也穿白大褂吗？", 37, 1530150, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                      cm.effect_NormalSpeechBalloon("....", 1, 0, 1, 2000, 1530160, cm.getPlayer().getId());
                      cm.effect_NormalSpeechBalloon("....", 1, 0, 1, 2000, 1530150, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=37840959", -1);
                        cm.npc_setForceFlip("oid=37840958", 1);
                        cm.sendNormalTalk_Bottom("#face1#哼，够了。我们别吵了。", 37, 1530160, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("好吧，不吵了。", 37, 1530150, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 131, 38);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1967);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("就是现在，开始吧。", 37, 1530070, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("很好, 弗朗西斯队员! 你把准备好的#b优美的音乐#k打开吧! ", 37, 1530100, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("啊……不行了，紧急情况！", 37, 1530140, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('怎么了，队员！', 37, 1530100, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("手……手里出汗，每次放音乐的时候都会出错。", 37, 1530140, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你不能想想办法让那家伙不出汗吗？", 37, 1530100, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.askMenu_Bottom("#h0#，你能来放音乐吗？\r\n\r\n#L0# #b不要。 #l#L1# #g知道了，我来放。#l", 37, 1530140, 1);
                                          } else {
                                            var O = "action分支" + selectionLog[20];
                                            eval(O)(f, E, e, V);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("没……没关系，交给我吧！！", 37, 1530140, true, true);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1600, 38);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1967);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
          cm.fieldEffect_PlayBGM("Bgm08.img/LetsMarch", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.effect_Voice("SoundEff.img/finger", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("……怎么回事，这音乐？", 37, 1530080, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#嗬……放错了！不是这首音乐！", 37, 1530140, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("…………", 37, 1530070, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#重来！重来！", 37, 1530140, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm13.img/TowerOfGoddess", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                      cm.effect_Voice("SoundEff.img/finger", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=37840958"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=37840959"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=37840959", 1);
                          cm.npc_setForceFlip("oid=37840958", -1);
                          cm.sendNormalTalk_Bottom("#face0#(……怎么回事，这音乐……)", 37, 1530160, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#(好奇怪……氛围好奇怪……)", 37, 1530150, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=37840959", 0);
                              cm.npc_setForceFlip("oid=37840958", 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=37840959", 1, 40, 100);
                                cm.npc_SetForceMove("oid=37840958", -1, 40, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Map/Effect2.img/spinOff1/umbrella", "oid=37840959"], [0, 40, -240, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 131, 38);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1967);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("很好！成功啦！", 37, 1530100, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("这种荒谬的计划居然真的成功了。这两个人也太好对付了吧？真意外。", 37, 1530080, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("看来我也是有机会和奥尔卡恋爱的，呵呵呵……", 37, 1530140, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("现在我也终于可以不用再干这种傻事了。", 37, 1530070, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.sendNormalTalk_Bottom("你们两个人在这做什么呢？", 37, 1530410, true, true);
                                              } else {
                                                eval('action分支10')(f, E, e, V);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支10(f, E, e, V) {
  if (status <= V++) {
    cm.fieldEffect_PlayBGM("Bgm25.img/AltarOfAkayrum", 0, 0);
    cm.npc_ChangeController(1530410, "oid=37856146", 1850, 38, 24, 1800, 1900, 1, true, false);
    cm.npc_SetSpecialAction("oid=37856146", 'summon', 0, 0);
    cm.npc_setForceFlip("oid=37840959", 1);
    cm.npc_setForceFlip("oid=37840958", 1);
    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1600, 38);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_AskAnswerTime(1967);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("生物老师？！", 37, 1530150, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你们两个在这里……怎么有一股奇怪的味道。", 37, 1530410, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("咦……说是今天的聚餐地点是这里，所以……", 37, 1530150, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我从没听说过啊。最近学校里流传的你们两个人在谈恋爱的传闻……是真的吗？", 37, 1530410, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#……怎么可能？谁会跟这种四肢发达头脑简单的人谈恋爱！！", 37, 1530160, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哼，那正是我要说的话！！谁会跟这种整天涂一层厚厚化妆品的魔女谈恋爱！！", 37, 1530150, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("呃啊……马上就大功告成了啊，居然杀出个程咬金！！", 37, 1530080, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("不行，不能让我们的努力就这么付诸东流！#h0#队员，这里的事就拜托你了。我们得跟着希拉老师和麦格纳斯老师！", 37, 1530100, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.gainExp(Math.pow(cm.getLevel(), 3));
                          cm.forceCompleteQuest(32822);
                          cm.dispose();
                          cm.warp(330001700, 2);
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
function action分支1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("OK，拜托了，就是现在！", 37, 1530140, false, true, 1);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1600, 38);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1967);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2500);
          cm.effect_Voice("SoundEff.img/finger", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("……什么啊，这音乐是？", 37, 1530080, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("嗬……放错了！", 57, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('……', 37, 1530070, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("完，完了……", 37, 1530140, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=2784880"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=2784881"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=2784881", 1);
                        cm.npc_setForceFlip("oid=2784880", -1);
                        cm.sendNormalTalk_Bottom("等下，这个优美的音乐是……？", 37, 1530160, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("究竟是从哪里传过来的呢？", 37, 1530150, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2784881", 0);
                            cm.npc_setForceFlip("oid=2784880", 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2784881", 1, 40, 100);
                              cm.npc_SetForceMove("oid=2784880", -1, 40, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Map/Effect2.img/spinOff1/umbrella", "oid=2784881"], [0, 40, -240, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 131, 38);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1967);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('……？嗯？', 37, 1530100, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("怎么会成功了呢？", 37, 1530140, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("看上去是被强大的音乐之力催眠了。", 37, 1530070, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.setNumberForQuestInfo(33045, "ep3", 1);
                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                            cm.sendNormalTalk_Bottom("你们两个人在这做什么呢? ", 37, 1530410, true, true, 1);
                                          } else {
                                            eval("action分支10")(f, E, e, V);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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