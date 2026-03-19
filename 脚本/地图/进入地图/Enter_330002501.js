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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530340, "oid=38325875", 500, 290, 4, 450, 550, 1, false, false);
      cm.npc_SetSpecialAction("oid=38325875", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=38325876", 206, 290, 4, 156, 256, 0, true, false);
      cm.npc_SetSpecialAction("oid=38325876", 'summon', 0, 0);
      cm.npc_ChangeController(1530120, "oid=38325877", 306, 290, 4, 256, 356, 0, true, false);
      cm.npc_SetSpecialAction("oid=38325877", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 150, 450, 289);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(200);
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
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这件事已经过去了很多年，也是发生在你们学校。", 33, 1530340, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_01/1", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=38325876"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=38325877"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                  cm.effect_Text(["#fn黑体##fs26#重新回到现在\r\n#fs14# ~ 王都桑的校服店 ~ "], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哇……那个人现在在做什么呢？", 33, 1530110, false, true);
                    cm.effect_Voice("Voice2.img/Friends/CH5_01/2", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("他毕业后，应该在大学里进修教职课程吧？", 33, 1530340, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH5_01/3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这怎么可能。这么帅的人为什么不当明星，而做老师呢？", 33, 1530110, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH5_01/4", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("长得真正帅气的人不会炫耀自己的外貌。\r\n他们反而羡慕长相平凡的人。长得帅是件很累的事情。", 33, 1530340, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH5_01/5", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("就像钱多的希纳斯想要过上普通人的生活吗……？", 33, 1530110, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH5_01/6", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("啊啊~ 我好想亲自见见长得那么帅的人。", 33, 1530120, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH5_01/7", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("和你们一起玩的那些朋友不也很帅吗？\r\n就像米哈尔、伊卡尔特还有胡克。", 33, 1530340, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH5_01/8", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("哎咦，胡克可不帅，大叔。", 33, 1530120, true, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH5_01/9", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("胡克哥哥只要闭上嘴，也是很帅气的，伊莉娜姐姐。", 33, 1530110, true, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH5_01/10", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=38325877");
                                      cm.npc_LeaveField("oid=38325877");
                                      cm.npc_ChangeController(1530120, "oid=38333514", 306, 290, 4, 256, 356, 1, true, false);
                                      cm.npc_SetSpecialAction("oid=38333514", "summon", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2500, 1530120, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#问题是他得把嘴闭上才行啊。", 33, 1530120, false, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH5_01/11", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38325876"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(1530060, "oid=38334849", -387, 290, 4, -437, -337, 0, true, false);
                                              cm.npc_SetSpecialAction("oid=38334849", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你们在聊什么呢？", 33, 1530060, false, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH5_01/12", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=38325876");
                                                  cm.npc_LeaveField("oid=38325876");
                                                  cm.npc_ChangeController(1530110, "oid=38335481", 206, 290, 4, 156, 256, 1, true, false);
                                                  cm.npc_SetSpecialAction("oid=38335481", 'summon', 0, 0);
                                                  cm.npc_SetForceMove("oid=38334849", 1, 380, 110);
                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 300, -205, 289);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2183);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('啊，希纳斯。快过来。', 33, 1530120, false, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH5_01/13", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 150, 450, 289);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(4366);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=38335481"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.sendNormalTalk_Bottom("我跟你说啊，希纳斯。据说我们学校之前有个学长，因为长相太过帅气，把其他男生全部变成了乌贼。你相信吗？", 33, 1530110, false, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH5_01/14", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("啊~你们在说那个学长啊？", 33, 1530060, true, true);
                                                              cm.effect_Voice("Voice2.img/Friends/CH5_01/15", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('你知道他？', 33, 1530120, true, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH5_01/16", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#嗯。他作为实习老师来到了我们学校呢！", 33, 1530060, true, true);
                                                                  cm.effect_Voice("Voice2.img/Friends/CH5_01/17", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                      cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 2000, 1530340, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                        cm.effect_NormalSpeechBalloon('....', 1, 0, 0, 2000, 1530120, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          cm.effect_NormalSpeechBalloon("....", 1, 0, 0, 2000, 1530110, cm.getPlayer().getId());
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 380, 100, 290);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                cm.effect_Voice("Voice2.img/Friends/CH5_01/18", 100);
                                                                                cm.effect_NormalSpeechBalloon("什么? ！? ? ！", 0, 0, 0, 5000, 1530110, cm.getPlayer().getId());
                                                                                cm.effect_NormalSpeechBalloon("什么? ！? ? ！", 0, 0, 0, 5000, 1530120, cm.getPlayer().getId());
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.playVideoByScript("friendsStory.avi");
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.setAmbience("Ambience.img/schoolbell", 100, 60);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                              cm.effect_Text(["#fn黑体##fs24#Chapter 5\r\n#fs18#~ 来路不明的实习老师与危机中的学生们 ~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                                              cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                  cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                    cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                      cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                        cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                          cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                            cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                              cm.effect_Voice("UI.img/MenuDown", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                  cm.effect_Voice("UI.img/DragStart", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                    cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                      cm.effect_Voice("UI.img/DragStart", 100);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                        cm.effect_Voice("UI.img/WorldmapOpen", 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                          cm.effect_Voice("UI.img/MenuUp", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                            cm.effect_Voice("UI.img/DragStart", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                              cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/1530106.img/stand/0#Hidden Mission：不是乌贼#fs18#\r\n\r\n                 HINT：胡克一个人变成了乌贼，很伤心。", 1);
                                                                                                                              cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.forceStartQuest(33050, '');
                                                                                                                              cm.forceCompleteQuest(33000);
                                                                                                                              cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                                                              cm.forceStartQuest(32705, '');
                                                                                                                              cm.dispose();
                                                                                                                              cm.warp(330000000, 1);
                                                                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;