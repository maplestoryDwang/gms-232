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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400928, "oid=91700825", 70, 60, 8, 20, 120, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91700825", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=91700825", "sit", -1, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -20, 60);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400929, "oid=91700826", -60, 60, 8, -110, -10, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91700826", "summon", 0, 0);
      cm.npc_ChangeController(9400933, "oid=91700827", -100, 60, 8, -150, -50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91700827", "summon", 0, 0);
      cm.npc_ChangeController(9400932, "oid=91700828", -140, 60, 8, -190, -90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91700828", 'summon', 0, 0);
      cm.npc_ChangeController(9401158, "oid=91700829", 160, 60, 8, 110, 210, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=91700829", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 100, 100]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#艾米，你真了不起。年纪轻轻竟能开咖啡店。", 37, 9401158, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#都是金海滩果汁的功劳！不过你真的是来面试的吗？", 37, 9400920, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#是的，没错。我不想再写没人阅读的报告书，也不想再帮威廉找球了。我想找个舒适的工作。", 37, 9401158, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b如果没有凯利，金海滩该怎么办呢？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#会破产吧。", 37, 9401158, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#哈，哈，哈。", 37, 9400920, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=91700825"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#那你会做咖啡吗？", 37, 9400921, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#当然。忙碌一天后，在家里来杯咖啡……是我唯一的爱好。", 37, 9401158, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#原来如此。舟车劳顿，辛苦你了。面试后我再联系你吧。", 37, 9400921, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#好的。我在Money 咖啡店前等你。", 37, 9401158, true, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=91700829");
                                    cm.npc_ChangeController(9401159, "oid=91701738", 160, 60, 8, 110, 210, 1, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=91701738", "summon", 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#嘻嘻嘻！你好！", 37, 9010095, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b万圣猫？！你怎么来了？", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#除了万圣节，其它时间我都特别闲！正好在我喜欢的凯兰西亚中新开了咖啡店，我怎么会错过这个机会呢~！", 37, 9010095, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b万圣猫……你会做咖啡吗？", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#当然！只是咖啡而已吗？嘻嘻。我会做喝了后可以把身体变成紫色的奶昔，还会做可以把声音提升3倍的果汁！呀吼！光是想想都炒~鸡有趣呢！对吧？", 37, 9010095, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400929, null, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400928, null, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#呃……那个……", 37, 9400920, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#现在可是我大展身手的好机会！", 37, 9010095, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b原……原来如此。", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#嗯嗯，远道而来，辛苦你了。面试后我再联系你吧。", 37, 9400921, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#什么啊？你有什么好犹豫的！这个岗位舍我万圣猫其谁啊！", 37, 9010095, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b我会联系你的。", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#很好！我知道了！我在广场喷泉前等你！我的小心脏现在已经开始砰砰跳了呢！", 37, 9010095, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400929, null, cm.getPlayer().getId());
                                                                    cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400928, null, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#…", 37, 9400920, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#b…", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#下一位！", 37, 9400921, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_ChangeController(9401160, "oid=91703061", 350, 60, 8, 300, 400, 1, true, 0, false);
                                                                              cm.npc_SetSpecialAction("oid=91703061", 'summon', 0, 0);
                                                                              cm.npc_SetForceMove("oid=91703061", -1, 100, 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              cm.setAccountQuestInfo(226, "count=2196;T=20200607100758");
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#你好，我是来面试的。", 37, 9401160, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.setNpcSpecialActionReset("oid=91700825");
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=91700825"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#咦？！那个姐姐！", 37, 9400920, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#没错，你真的开了咖啡店呢！", 37, 9401160, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face2#姐姐！快来这边！", 37, 9400920, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=91703061", -1, 50, 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetSpecialAction("oid=91700825", 'sit', -1, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetSpecialAction("oid=91703061", "sit", -1, 0);
                                                                                              cm.sendNormalTalk_Bottom("#face1#我正式介绍一下自己，。我叫杰尼，不久前刚搬到凯兰西亚。", 37, 9401160, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#搬到凯兰西亚后，我一直想在附近找份工作。整理酒吧的时候，机缘巧合看到了招聘启事。搬家之前，我在废弃都市的酒吧里做过调酒师，之前我也有在咖啡店工作的经验。", 37, 9401160, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face1#加起来，我大概有10年的工作经验……", 37, 9401160, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face6#哇哇哇！", 37, 9400920, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#你看上去超级，超级年轻！", 37, 9400923, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#嘻嘻，谢谢。", 37, 9401160, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#我有经验，也有咖啡师资格证，嗯……我也有很多常客。这点对即将开业的咖啡店很有帮助呢。", 37, 9401160, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#哇……", 37, 9400921, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#这里没有浓缩咖啡机吗？", 37, 9401160, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#现在还没买到。", 37, 9400921, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#我本想让你尝尝我制作的咖啡呢，真是遗憾啊。如果能给我个机会，以后为你冲咖啡就好了。", 37, 9401160, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#嗯嗯！", 37, 9400920, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face3#呼呼，那我等你消息喽。", 37, 9401160, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#没问题！", 37, 9400921, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.setNpcSpecialActionReset("oid=91703061");
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_SetForceMove("oid=91703061", 1, 200, 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.setNpcSpecialActionReset("oid=91700825");
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_setForceFlip("oid=91700825", -1);
                                                                                                                                cm.sendNewEffects(12, [2000, -20, 100, 0, 0]);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#给力给力！！！", 37, 9400920, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#没有异议就是她了！", 37, 9400923, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#我同意！", 37, 9400920, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1##h0#，你觉得呢？", 37, 9400920, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.askMenu_Bottom("#b我选……\r\n#L0#凯利#l\r\n#L1#万圣猫#l\r\n#L2#杰尼 #l", 57, 0);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#很好！全场一致！", 37, 9400920, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=91700825"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#快带你把这件事告诉杰尼姐姐吧。还有那些不幸落选的人。", 37, 9400920, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1##h0#，这件事可以麻烦你去做吗？", 37, 9400920, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom('#b我知道了……', 57, 0, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNewEffects(19, [0]);
                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                      cm.warp(871000085, 0, true);
                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                      cm.forceStartQuest(65438, '');
                                                                                                                                                      cm.npc_LeaveField("oid=91700825");
                                                                                                                                                      cm.npc_LeaveField("oid=91700826");
                                                                                                                                                      cm.npc_LeaveField("oid=91700827");
                                                                                                                                                      cm.npc_LeaveField("oid=91700828");
                                                                                                                                                      cm.npc_LeaveField("oid=91701738");
                                                                                                                                                      cm.npc_LeaveField("oid=91703061");
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