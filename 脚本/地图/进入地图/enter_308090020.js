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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(2570101, "oid=38065513", 230, 30, 12, 180, 280, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38065513", 'summon', 0, 0);
      cm.npc_ChangeController(2570102, "oid=38065514", 135, 30, 12, 85, 185, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38065514", 'summon', 0, 0);
      cm.npc_ChangeController(2570103, "oid=38065515", -140, 30, 11, -190, -90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38065515", "summon", 0, 0);
      cm.npc_ChangeController(2570104, "oid=38065516", -20, 30, 11, -70, 30, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38065516", "summon", 0, 0);
      cm.npc_ChangeController(2570105, "oid=38065517", 60, 30, 12, 10, 110, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38065517", "summon", 0, 0);
      cm.npc_ChangeController(2570100, "oid=38065518", 300, 30, 10, 250, 350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38065518", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=38065517", "die", -1, 1);
      cm.npc_SetSpecialAction("oid=38065514", "down", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 95, 27);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face2#呃……咳呃，哈哈……。", 36, 2570105, false, true, 1);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#魁格，你能治疗吗？", 36, 2570100, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#现在还好，但情况会越来越糟的。", 36, 2570104, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570101, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=38065514");
                      cm.npc_setForceFlip("oid=38065514", 1);
                      cm.sendNormalTalk_Bottom("#face6#哈丁！！！你到底在干什么？！！！", 36, 2570102, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#我……我有那么做吗？我……有吗？", 36, 2570101, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#可不是应该会痊愈吗……我们明明逆转了时间……", 36, 2570101, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face6#我们几个所受的伤，即使逆转时间也无法恢复！！", 36, 2570102, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face6#我都说了几遍了！！哦！说过好几遍了！！！", 36, 2570102, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#啊……是吗。好像是吧。", 36, 2570103, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#可是艾德……他朝我扑了过来……\r\n对！所以哈丁才出手保护我。", 36, 2570103, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face6#因为你先射中了艾德！\r\n他误把你当成敌人，不是很正常吗？！", 36, 2570102, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face6#我……我没拿箭射他！\r\n只是……只是轻轻擦过而已……对，事实就是这样……", 36, 2570103, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570105, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#我……有那么做吗……？我……把艾德……？", 36, 2570101, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#大家都行动起来。没时间再耽搁了。", 36, 2570100, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#那么……那么艾德呢？", 36, 2570102, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我把你丢下咯。", 36, 2570100, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#只期望能坚持到诅咒结束。", 36, 2570100, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#那……那究竟是什么时候？", 36, 2570102, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#不清楚。", 36, 2570100, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('#face2#……。', 36, 2570102, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#我……我会带你出去的。", 36, 2570102, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#亚殷。", 36, 2570100, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face6#守护圣瑞尼亚？别说笑了！", 36, 2570102, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=38065514", -1);
                                                                  cm.sendNormalTalk_Bottom("#face6#快起来，艾德。我们一起出去，离开这可怕的地方！", 36, 2570102, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#看来你不记得了。", 36, 2570100, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=38065514"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=38065514", 1);
                                                                        cm.sendNormalTalk_Bottom("#face2#这话是什么意思？", 36, 2570102, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我已经试过了，试了好几次。", 36, 2570100, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom('#face2#什么？', 36, 2570102, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#艾德在他几次逆转时间之前就已经受伤了。", 36, 2570100, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#当时我受伤较轻，本想自己走出去的。", 36, 2570100, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face2#似乎有道……看不见的墙……", 36, 2570105, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#我们……是无法逃脱的……", 36, 2570105, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#亚殷……咳咳……", 36, 2570105, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570102, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("艾德最终没能站起来。", 0);
                                                                                                cm.effect_Voice("Voice6.img/Library/kel/19-01-kel.mp3", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_Monologue("因为他的缺席，战斗进行得越来越吃力", 0);
                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/19-02-kel.mp3", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_Monologue("随即到来的，是团员们的……尤其是亚殷的战死。", 1);
                                                                                                    cm.effect_Voice("Voice6.img/Library/kel/19-03-kel.mp3", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_Monologue("大约又逆转了十几次时间之后……", 0);
                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/19-04-kel.mp3", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_Monologue("艾德彻底闭上了眼睛。", 1);
                                                                                                        cm.effect_Voice("Voice6.img/Library/kel/19-05-kel.mp3", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_Monologue("从那时起，哈丁的剑就开始动摇。", 0);
                                                                                                          cm.effect_Voice("Voice6.img/Library/kel/19-06-kel.mp3", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue("从那时起，瑞恩拿着弓箭的手开始陷入迟疑。", 0);
                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/19-07-kel.mp3", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Monologue("从那时起，亚因脸上开始有了笑容。", 1);
                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/19-08-kel.mp3", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_Monologue("最后，我直觉意识到已达到了极限。", 0);
                                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/19-10-kel.mp3", 100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_Monologue("我无法保证接下来还能克服多少次轮回。", 0);
                                                                                                                          cm.effect_Voice("Voice6.img/Library/kel/19-11-kel.mp3", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_Monologue("尽管如此，我却没有停下来……", 0);
                                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/19-12-kel.mp3", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_Monologue("我无法停下来的原因是……", 1);
                                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/19-13-kel.mp3", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction25.img/Dlep6/effect/0", 0, 2000, 10, 10, 20, 4, 0, 0, 0, 0, -1);
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/9", 0, 800, 0, -40, 1, 4, 1, -1, 0, 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#请你……", 36, 2570107, false, true, 1);
                                                                                                                                      cm.effect_Voice("Voice6.img/Library/prince/19-14-prince.1.mp3", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction25.img/Dlep6/ilust/4/6", 0, 1000, 0, 0, 10, 4, 1, -1, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction25.img/Dlep6/ilust/4/7", 0, 1000, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#请你遵守当初的誓约……", 36, 2570107, false, true, 1);
                                                                                                                                            cm.effect_Voice("Voice6.img/Library/prince/09-03-prince.mp3", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我……没有忘记誓约。", 36, 2570100, false, true, 1);
                                                                                                                                                cm.effect_Voice("Voice6.img/Library/kel/19-15-kel.mp3", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('05', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#(……誓约。)", 36, 2570102, false, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#(……。)", 36, 2570102, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                        cm.forceCompleteQuest(37812);
                                                                                                                                                        cm.updateInfoQuest(37812, "exp=1");
                                                                                                                                                        cm.gainExp(5872020);
                                                                                                                                                        cm.npc_LeaveField("oid=38065513");
                                                                                                                                                        cm.npc_LeaveField("oid=38065514");
                                                                                                                                                        cm.npc_LeaveField("oid=38065515");
                                                                                                                                                        cm.npc_LeaveField("oid=38065516");
                                                                                                                                                        cm.npc_LeaveField("oid=38065517");
                                                                                                                                                        cm.npc_LeaveField("oid=38065518");
                                                                                                                                                        cm.dispose();
                                                                                                                                                        cm.warp(308000021, 0, false);
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
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}