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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 359, -169);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(在布乌的帮助下，我们来到了伯爵的办公室。\r\n大家决定躲在窗帘后面等待时机。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
        } else {
          if (status === V++) {
            cm.Hidden_background('0', 1, 1, 0, 0);
            cm.Hidden_background('1', 1, 0, 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
              cm.npc_LeaveField("oid=6503851");
              cm.npc_LeaveField("oid=6503852");
              cm.npc_ChangeController(3001957, "oid=434198", 304, -165, 1, 254, 354, 5, true, 0, false);
              cm.npc_ChangeController(3001959, "oid=434199", 469, -165, 4, 419, 519, 5, true, 0, false);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#从画作中描绘的情景来推断……", 36, 3001959, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#要想唤醒神，需要画里出现的钥匙。", 36, 3001959, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#距离艺术节没剩多少时间了。", 36, 3001957, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#那边的干部也会来……那个时候正是机会！", 36, 3001957, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#行，我知道了。你继续去调查钥匙的下落吧。", 36, 3001957, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#无论如何必须在艺术节期间找到，明白吗？", 36, 3001957, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#是，塞德里克大人。……不过，那真的没关系吗？", 36, 3001959, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#按照画中的内容，解放神之力即……", 36, 3001959, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#即会在里斯托尼亚引发巨大的灾难。", 36, 3001959, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#整个王国都将会毁灭。", 36, 3001959, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#要不要唤醒神，是他们自己的事。\r\n我要做的，只是给他们提供感兴趣的情报。", 36, 3001957, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#只要能稳定我的地位，干什么都行。\r\n无法享受奢华生活的日子，太折磨人了！", 36, 3001957, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#那幅画只是寻找钥匙的线索。\r\n塞德里克这家伙……竟然在密谋出卖王国吗！？", 36, 3001952, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(他们要唤醒神，是为了什么目的？居然不惜让王国灭亡……\r\n想找钥匙的那帮势力……是什么人？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#布，布乌……", 36, 3001960, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#怎么了，布乌？累了吗？", 36, 3001952, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#布乌……", 36, 3001960, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#啊，现在有点困难……", 36, 3001952, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#我有点头疼，需要休息。你回去吧……", 36, 3001957, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#好，那小人先退下了。", 36, 3001959, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.Hidden_background('0', 1, 1, 0, 0);
                                                                      cm.Hidden_background('1', 1, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -114, -287);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/windowcrash2", 100);
                                                                          cm.npc_ChangeController(3001952, "oid=6509574", -340, -170, 2, -390, -290, 0, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=6509574", "summon", 0, 0);
                                                                          cm.npc_ChangeController(3001960, "oid=6509575", -435, -170, 3, -485, -385, 0, true, 0, false);
                                                                          cm.npc_SetSpecialAction("oid=6509575", "summon", 0, 0);
                                                                          cm.npc_SetSpecialAction("oid=6509574", 'special1', 3000, 0);
                                                                          cm.npc_SetSpecialAction("oid=6509575", "special3", 3000, 0);
                                                                          cm.inGameDirectionEvent_MoveAction(4);
                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -347, -169);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_MoveAction(0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#入侵者！？", 36, 3001959, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face2#你，你是！？", 36, 3001957, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell1", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell1", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/bell1", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#有入侵者潜入了办公室！", 36, 3001968, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#这下麻烦了。那些警卫兵转眼就会涌过来。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face9#糟，被发现了！我马上给布鲁发信号！", 36, 3001952, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(少年吹响口哨，给同伴们发了信号。\r\n在宅邸附近等候的布鲁掷出了照明弹。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/light", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/2/white out_focus", "white out_focus", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(多亏他们俩，为我们争取了逃跑的时间。\r\n至于退路嘛……有了，跳到对面的屋顶上吧。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face6#哦，哦哦！？", 36, 3001952, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#忍一忍。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom('#face0#咘！', 36, 3001960, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我举起双臂，一把将少年举了起来。\r\n这样轻松多了。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/cloth", 100);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                  } else if (status === V++) {
                                                                                                                                    cm.warp(993162028, 0, false);
                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                    cm.npc_LeaveField("oid=6509574");
                                                                                                                                    cm.npc_LeaveField("oid=6509575");
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