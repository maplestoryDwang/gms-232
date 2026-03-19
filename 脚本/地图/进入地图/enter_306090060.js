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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_ChangeEquipment([1392000, 1004987, 1102039, 1353300]);
      cm.fieldEffect_PlayBGM("Bgm48.img/Nowhere", 0, 0);
      cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1600);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("我最后一次流泪，到底是什么时候来着。", 0);
          cm.effect_Voice("Voice3.img/DLep4/k2/k_1.mp3", 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue('', 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("一滴泪水，顺着被冻僵的脸颊流了下来。", 0);
              cm.effect_Voice("Voice3.img/DLep4/k2/k_2.mp3", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("虽然没等滴落，就消失在了狂风之中，", 0);
                cm.effect_Voice("Voice3.img/DLep4/k2/k_3.mp3", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("但我永远也忘不了那时大家的那种热情。", 0);
                  cm.effect_Voice("Voice3.img/DLep4/k2/k_4.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue('', 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(2550004, "oid=1769013", 1830, -663, 164, 1780, 1880, 0, true, 1500, false);
                          cm.npc_SetSpecialAction("oid=1769013", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ChangeEquipment([1392000, 1004991, 1102039, 1353300]);
                              cm.sendNormalTalk_Bottom("喂，队长。", 37, 2550004, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你哭了吗？眼睛红红的呢。", 37, 2550004, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("没、没有。只是雪花落进眼睛里了。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("…………", 37, 2550004, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("明天就是最后一仗了？\r\n还能撑住吗？来的怪物可不是一般的多呢。", 37, 2550004, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("即使是在这凛冽的暴风雪中，人类也生活了几百年了。\r\n再坚持一天也不是什么难事。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("说起来，今天也是你呆在这里的最后一天，明天就都结束了吧？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("现在还剩下一只，我也已经累得够呛了。", 37, 2550004, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("不过，我马上就不用继续受罪了！终于结束了！", 37, 2550004, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('那就好。', 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("其实……我留了个位置。", 37, 2550004, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("就是说……方舟上还有一个空位。", 37, 2550004, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("……抱歉。", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("…………", 37, 2550004, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("人类真的是一群傻瓜啊。", 37, 2550004, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("是啊。", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("傻瓜，笨蛋，蠢货！哼！", 37, 2550004, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('哈……哈哈。', 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("那……再见了。", 37, 2550004, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("你可别死了啊。虽然可能要过很久……不过我还会回来的，所以……", 37, 2550004, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("等等。", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=1769013"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('什么？', 37, 2550004, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("(能用你剩余的力量帮帮我们，帮帮人类……\r\n不，还是算了。)", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom('嗯？', 37, 2550004, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("这把天琴弓就拜托你了。\r\n请你把它交给外面的其他人吧，谁都行，好吗？", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("怎么，你不想成为吟游诗人了？", 37, 2550004, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("我已经写出一首很不错的歌曲了。这样我就心满意足了。", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("那就唱来听听吧。", 37, 2550004, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom('那、那个，但是……', 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("哎呀，你扭捏个什么呀。快点。", 37, 2550004, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("哈哈，好吧。就这一次哦。", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_ChangeEquipment([1392000, 1004987, 1102039, 1353300]);
                                                                                                            cm.setAmbience("Bgm48.img/ForgottenNames", 100, 60);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue("旋律……", 0);
                                                                                                              cm.effect_Voice("Voice3.img/DLep4/l/l_1.mp3", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_Monologue("恍然间消失在了飞舞的暴风雪中。", 0);
                                                                                                                cm.effect_Voice("Voice3.img/DLep4/l/l_2.mp3", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_Monologue('', 0);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_Monologue("这大概……就是我和她的最后一次见面了。", 0);
                                                                                                                    cm.effect_Voice("Voice3.img/DLep4/l/l_3.mp3", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_Monologue("我总是不自觉地想起初次见面的时候，暗自弯起嘴角。", 0);
                                                                                                                      cm.effect_Voice("Voice3.img/DLep4/l/l_4.mp3", 100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 8000, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(10000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_Monologue("我们沉默无语地站了好一会儿。", 0);
                                                                                                                              cm.effect_Voice("Voice3.img/DLep4/l/l_5.mp3", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                              } else if (status === V++) {
                                                                                                                                cm.dispose();
                                                                                                                                cm.warp(306090070, 0, true);
                                                                                                                                cm.eventSKill(0);
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.npc_LeaveField("oid=1769013");
                                                                                                                                cm.npc_LeaveField("oid=1769013");
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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