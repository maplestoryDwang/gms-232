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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 898, 360);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074125, "oid=2595835", 852, 326, 520, 802, 902, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2595835", "summon", 0, 0);
        cm.npc_ChangeController(2074123, "oid=2595836", 775, 326, 525, 725, 825, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2595836", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2595836", 'standn', -1, 1);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("嗯，嗯，那个……", 45, 2074139, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("客人？你怎么从刚刚开始就一直不说话呢？\r\n藏在你身后的花又是什么啊？", 37, 2074125, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("那……那个吧……咳咳。", 45, 2074139, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(2074100, "oid=2595847", 1062, 323, 527, 1012, 1112, 1, true, 500, false);
                cm.npc_SetSpecialAction("oid=2595847", "summon", 0, 0);
                cm.inGameDirectionEvent_SetHideEffect(0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#到现在还没说吗？\r\n哇，真是愁死我了！", 37, 2074100, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(2074124, "oid=2595857", 928, 326, 526, 878, 978, 1, false, 500, false);
                    cm.npc_SetSpecialAction("oid=2595857", "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2595835", 1);
                      cm.sendNormalTalk_Bottom("等下！\r\n我喜欢你！", 37, 2074124, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("客，客人？你说什么？", 37, 2074125, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我说我喜欢你！\r\n我比大哥，喜欢你，更多。", 37, 2074124, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2595835", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=2595835", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=2595835", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2595835", 1);
                                    cm.sendNormalTalk_Bottom("这……这是怎么回事……", 37, 2074125, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=2595835", -1);
                                      cm.setNpcSpecialActionReset("oid=2595836");
                                      cm.sendNormalTalk_Bottom("我也哦哦哦哦！", 45, 2074123, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#哈……这下完了……", 37, 2074100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我也是！我也比弟弟喜欢你更多！\r\n我真的……真的喜欢你！", 45, 2074123, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=2595835", 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2595835", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=2595835", 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=2595835", -1);
                                                  cm.sendNormalTalk_Bottom("……那个……我……还没有做好心理准备……", 37, 2074125, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=2595835", 1);
                                                    cm.sendNormalTalk_Bottom('是我先说喜欢的，哥！', 37, 2074124, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=2595835", -1);
                                                      cm.sendNormalTalk_Bottom("我，我也真的很喜欢！", 45, 2074123, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#哈……真是看不下去了……", 37, 2074100, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=2595847", -1, 70, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595835"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595836"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2595857"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.npc_setForceFlip("oid=2595835", 1);
                                                            cm.npc_setForceFlip("oid=2595857", 1);
                                                            cm.npc_SetSpecialAction("oid=2595847", "ang", -1, 1);
                                                            cm.sendNormalTalk_Bottom("#face6#等一下啊！", 37, 2074100, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("媒人姑娘？", 37, 2074125, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.setNpcSpecialActionReset("oid=2595847");
                                                                  cm.sendNormalTalk_Bottom("#face5#大家先冷静一下，\r\n男士们，二位还是先请回吧。", 37, 2074100, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("不，不是，这是怎么……", 45, 2074123, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("没错，既然已经表白了，就得听到回答……", 37, 2074124, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face5#这样只会让人家姑娘更难办啊！", 37, 2074100, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face5#而且人家姑娘也得有点时间考虑考虑吧。", 37, 2074100, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face5#来，现在就先请回吧，二位都是，\r\n还有姐姐。", 37, 2074100, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=2595857", -1);
                                                                              cm.sendNormalTalk_Bottom('什么？是……', 37, 2074125, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#你就先考虑一天，\r\n如果有你心仪的人，可不可以在明天中午之前告诉他呢？", 37, 2074100, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("啊，那个……", 37, 2074125, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#你现在能立刻说出来吗？\r\n日后去你心仪的那个人家中应该会更好吧？", 37, 2074100, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("啊啊……啊。\r\n是……", 37, 2074125, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=2595857", 1);
                                                                                        cm.sendNormalTalk_Bottom("#face0#来，都听到了吧？二位赶紧走吧。\r\n回去，放宽心，冷静地等着吧。", 37, 2074100, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                            cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074124, cm.getPlayer().getId());
                                                                                            cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074123, cm.getPlayer().getId());
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_setForceFlip("oid=2595857", -1);
                                                                                              cm.sendNormalTalk_Bottom("嗯……那，我就先告辞了。\r\n我会等着的。", 37, 2074124, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_LeaveField("oid=2595857");
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_setForceFlip("oid=2595835", -1);
                                                                                                  cm.sendNormalTalk_Bottom('我，我会等着的！', 45, 2074123, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_LeaveField("oid=2595836");
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=2595835", 1);
                                                                                                      cm.sendNormalTalk_Bottom("#face0#呼……实在是闹得看不下去了……", 37, 2074100, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#对不起，让你有些手足无措了吧？\r\n不过这两个人都只是不太会表达，其实都是出自真心的，你也不要把他们想得太坏。", 37, 2074100, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("啊？啊……是……", 37, 2074125, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#那……怎么选就要看你自己了。", 37, 2074100, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#不管是谁，我都希望你能诚实地做出选择。\r\n这对两个人都有帮助。", 37, 2074100, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#(就算你两个都不选，\r\n也总比一直拖着，徒然伤了他们二人的情谊要好吧……)", 37, 2074100, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("……是，我知道了。", 37, 2074125, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我们也先走了，\r\n嗯……#b#h0##k，我们去找七诚怎么样？", 37, 2074100, true, true);
                                                                                                                  } else if (status === V++) {
                                                                                                                    cm.forceStartQuest(30426, '');
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(224000000, 25, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;