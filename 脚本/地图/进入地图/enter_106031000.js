var status = -1;
function action(f, E, e) {
  if (!cm.isQuestFinished(30051)) {
    action第一幕(f, E, e);
  } else {
    if (!cm.isQuestFinished(30053)) {
      action第二幕(f, E, e);
    } else {
      if (!cm.isQuestFinished(30055)) {
        action第三幕(f, E, e);
      } else if (!cm.isQuestFinished(30057)) {
        action第四幕(f, E, e);
      } else {
        cm.warp(106030000, 0);
        cm.dispose();
      }
    }
  }
}
function action第一幕(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302100, "oid=4336", -101, 192, 46, -151, -51, 0, false, false);
      cm.npc_ChangeController(1302108, "oid=4337", 257, 382, 6, 207, 307, 1, false, false);
      cm.npc_ChangeController(1302111, "oid=14720400", 137, 257, 56, 87, 187, 1, false, false);
      cm.npc_SetSpecialAction("oid=14720400", 'summon', 0, 0);
      cm.npc_ChangeController(1302101, "oid=14720401", 374, 190, 30, 324, 424, 1, true, false);
      cm.npc_SetSpecialAction("oid=14720401", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("下一位挑战者。只要能让公主笑出来，不管用什么方法都可以。折断的一只角是我的魅力所在！蘑菇界的坏小子，麦～纳斯～", 33, 1302108, false, true);
          cm.effect_Voice("Voice.img/flowervioleta/mc/0", 100);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1302110, "oid=14720403", 138, 225, 55, 88, 188, 1, false, false);
            cm.npc_SetSpecialAction("oid=14720403", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
            cm.effect_Voice("Field.img/flowervioleta/cheer", 100);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=14720400", "open", 0, 0);
              cm.fieldEffect_PlayFieldSound("flowervioleta/curtain", 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.forceStartQuest(30080, '');
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_NormalSpeechBalloon("想让公主笑的人", 1, 0, 0, 2000, 1302110, 9897148);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon('想成为公主新郎的人', 1, 0, 0, 2000, 1302110, 9897148);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_NormalSpeechBalloon("想成为这个国家国王的人", 1, 0, 0, 2000, 1302110, 9897148);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(600, 5000, 600, 139, 285);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=14720403", "cry", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("flowervioleta/appear", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(600, 1000, 600, 140, 222);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_PlayMusic("Field.img/flowervioleta/wind");
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      cm.effect_NormalSpeechBalloon("带上来吧.", 1, 0, 0, 2000, 1302100, 9897148);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=14720403", 'out', 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=14720400", "close", 0, 0);
                                          cm.fieldEffect_PlayFieldSound("flowervioleta/curtain", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.forceForfeitQuest(30080);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=14720403");
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                cm.effect_NormalSpeechBalloon("啊, 真累啊.大会先暂停一下.", 1, 0, 0, 2000, 1302100, 9897148);
                                              } else if (status === V++) {
                                                cm.eventSKill(0);
                                                cm.dispose();
                                                cm.forceCompleteQuest(30050);
                                                cm.warp(106030000, 0, true);
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
function action第二幕(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302100, "oid=4336", -101, 192, 46, -151, -51, 0, false, false);
      cm.npc_ChangeController(1302108, "oid=4337", 257, 382, 6, 207, 307, 1, false, false);
      cm.npc_ChangeController(1302111, "oid=16901430", 137, 257, 56, 87, 187, 1, false, false);
      cm.npc_SetSpecialAction("oid=16901430", "summon", 0, 0);
      cm.npc_ChangeController(1302101, "oid=16901431", 374, 190, 30, 324, 424, 1, true, false);
      cm.npc_SetSpecialAction("oid=16901431", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("我来介绍下一位挑战者。我要用甜美的小夜曲融化她冰冷的心！比巧克力更甜美的声音，比特浓咖啡更浓的感性的拥有者——甘玛和奥美嘉！", 33, 1302108, false, true);
        cm.effect_Voice("Voice.img/flowervioleta/mc/1", 100);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1302114, "oid=16901514", 138, 225, 55, 88, 188, 1, false, false);
          cm.npc_SetSpecialAction("oid=16901514", 'summon', 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
          cm.effect_Voice("Field.img/flowervioleta/cheer", 100);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 230, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(5500);
          } else {
            if (status === V++) {
              cm.effect_PlayMusic("Field.img/flowervioleta/stage");
              cm.forceStartQuest(30080, '');
              cm.playNpcEff(1302114);
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
              cm.fieldEffect_PlayFieldSound("flowervioleta/spotlight", 100);
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction2.img/flowervioleta/twingkle", "oid=1302114"], [7000, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=16901514", "song", 30000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(18000);
                cm.effect_PlayMusic("Field.img/flowervioleta/zerosong");
                cm.effect_Direction("Effect/Direction2.img/flowervioleta/song", 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.playNpcEff(1302114);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_NormalSpeechBalloon("够了, 够了！", 0, 0, 0, 2000, 1302100, 9897148);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon('下一个！下一个！', 0, 0, 0, 2000, 1302100, 9897148);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=16901430", 'close', 0, 0);
                      cm.fieldEffect_PlayFieldSound("flowervioleta/curtain", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.forceForfeitQuest(30080);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=16901514");
                          cm.sendNormalTalk_Bottom("下一位挑战者。自称为了她而等待了400年的参加者。冷酷的外表下隐藏着一颗热烈的心的人，雷～明骏！", 33, 1302108, false, true);
                          cm.effect_Voice("Voice.img/flowervioleta/mc/2", 100);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(1302112, "oid=16902284", 138, 225, 55, 88, 188, 1, false, false);
                            cm.npc_SetSpecialAction("oid=16902284", 'summon', 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                            cm.effect_Voice("Field.img/flowervioleta/cheer", 100);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=16901430", "open", 0, 0);
                              cm.fieldEffect_PlayFieldSound("flowervioleta/curtain", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.forceStartQuest(30080, '');
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  cm.effect_NormalSpeechBalloon("不管是一个月还是两个月, 都不会离开.", 1, 0, 0, 2000, 1302112, 9897148);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    cm.effect_NormalSpeechBalloon("我爱你……胜过#r#e一百万朵玫瑰！", 1, 0, 0, 2000, 1302112, 9897148);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 120, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ScreenMsg("Map/Effect2.img/flowervioleta/bird");
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_NormalSpeechBalloon("喂……", 1, 1, 0, 2000, 1302101, 9897148);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              cm.effect_NormalSpeechBalloon("我不买！", 1, 0, 0, 1500, 1302112, 9897148);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=16902284", "remove", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=16902284");
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    cm.effect_NormalSpeechBalloon("真特么地给我捣乱……\r\n哎呀, 我在说什么呢！", 1, 1, 0, 2500, 1302101, 9897148);
                                                  } else if (status === V++) {
                                                    cm.eventSKill(0);
                                                    cm.dispose();
                                                    cm.warp(106030000, 0, true);
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
function action第三幕(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302100, "oid=4336", -101, 192, 46, -151, -51, 0, false, false);
      cm.npc_ChangeController(1302108, "oid=4337", 257, 382, 6, 207, 307, 1, false, false);
      cm.forceForfeitQuest(30080);
      cm.npc_ChangeController(1302111, "oid=16905250", 137, 257, 56, 87, 187, 1, false, false);
      cm.npc_SetSpecialAction("oid=16905250", "summon", 0, 0);
      cm.npc_ChangeController(1302101, "oid=16905251", 374, 190, 30, 324, 424, 1, true, false);
      cm.npc_SetSpecialAction("oid=16905251", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("公主由我来保护！如果你的脸上有阴影的话，我就成为光之骑士来照亮你！比任何人都耀眼的男人，存仔！", 33, 1302108, false, true);
        cm.effect_Voice("Voice.img/flowervioleta/mc/3", 100);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1302115, "oid=16905297", 138, 225, 55, 88, 188, 1, false, false);
          cm.npc_SetSpecialAction("oid=16905297", 'summon', 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
          cm.effect_Voice("Field.img/flowervioleta/cheer", 100);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=16905250", "open", 0, 0);
            cm.fieldEffect_PlayFieldSound("flowervioleta/curtain", 100);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.forceStartQuest(30080, '');
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.effect_NormalSpeechBalloon("碧欧蕾塔公主！我对你的忠诚……！", 1, 0, 0, 2000, 1302115, 9897148);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_NormalSpeechBalloon("存仔, 存仔不在吗? ", 1, 0, 0, 2000, 1302108, 9897148);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                    cm.effect_NormalSpeechBalloon("我在这……", 1, 0, 0, 2000, 1302115, 9897148);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon("不想参加了吗? 下一位参加者！", 1, 0, 0, 2000, 1302108, 9897148);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.effect_NormalSpeechBalloon("喂, 我在这……这里！", 1, 0, 0, 2000, 1302115, 9897148);
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=16905250", "close", 0, 0);
                          cm.fieldEffect_PlayFieldSound("flowervioleta/curtain", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.forceForfeitQuest(30080);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=16905297");
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("下一位参加者竟然是位女性，真是让人吃惊。出于有一颗爱慕公主的心而前来挑战！公主粉丝俱乐部<光滑白嫩碧欧蕾塔>的会长，安～诺瓦～", 33, 1302108, false, true);
                                cm.effect_Voice("Voice.img/flowervioleta/mc/5", 100);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(1302113, "oid=16905656", 138, 225, 55, 88, 188, 1, false, false);
                                  cm.npc_SetSpecialAction("oid=16905656", "summon", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                  cm.effect_Voice("Field.img/flowervioleta/cheer", 100);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=16905250", "open", 0, 0);
                                    cm.fieldEffect_PlayFieldSound("flowervioleta/curtain", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.forceStartQuest(30080, '');
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("flowervioleta/knock", 100);
                                        cm.npc_SetSpecialAction("oid=16905656", "knock", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          cm.effect_NormalSpeechBalloon("愿意和我一起造蘑菇人吗～? ?", 1, 0, 0, 2000, 1302113, 9897148);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_NormalSpeechBalloon("谢了..", 1, 1, 0, 2000, 1302101, 9897148);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              cm.effect_NormalSpeechBalloon("OK, 拜拜……", 1, 0, 0, 2000, 1302113, 9897148);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=16905250", 'close', 0, 0);
                                                cm.fieldEffect_PlayFieldSound("flowervioleta/curtain", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.forceForfeitQuest(30080);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else if (status === V++) {
                                                  cm.eventSKill(0);
                                                  cm.dispose();
                                                  cm.warp(106030000, 0, true);
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
function action第四幕(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302100, 'oid=4336', -101, 192, 46, -151, -51, 0, false, false);
      cm.npc_ChangeController(1302108, "oid=4337", 257, 382, 6, 207, 307, 1, false, false);
      cm.npc_ChangeController(1302111, "oid=16908327", 137, 257, 56, 87, 187, 1, false, false);
      cm.npc_SetSpecialAction("oid=16908327", "summon", 0, 0);
      cm.npc_ChangeController(1302101, "oid=16908328", 374, 190, 30, 324, 424, 1, true, false);
      cm.npc_SetSpecialAction("oid=16908328", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1302105, "oid=16908329", -12, 380, 4, -62, 38, 0, false, false);
      cm.npc_SetSpecialAction("oid=16908329", "summon", 0, 0);
      cm.npc_ChangeController(1302106, "oid=16908330", 541, 380, 7, 491, 591, 1, false, false);
      cm.npc_SetSpecialAction("oid=16908330", "summon", 0, 0);
      cm.npc_ChangeController(1302107, "oid=16908331", -238, 380, 14, -288, -188, 0, false, false);
      cm.npc_SetSpecialAction("oid=16908331", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom('真的是蘑菇大臣！', 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("呵呵呵，你一定是看错了。好了，下一位挑战者上来了。大家把目光转移到舞台上来。", 33, 1302000, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("把痣去掉的话, 就一模一样.干嘛总说不是啊！", 1, 0, 1, 2000, 0, 9897148);
            cm.effect_Direction("Effect/Direction2.img/flowervioleta/face", 0, 0, 0);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("已经是第一百位参加者了。我屈膝跪下，是为了获得推进力！比任何人更快，与所有人都不同，连名字都不愿意透露的迷一般的男人，请你出来吧！", 33, 1302108, false, true);
              cm.effect_Voice("Voice.img/flowervioleta/mc/6", 100);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(1302103, "oid=16908618", 138, 242, 55, 88, 188, 1, true, false);
                cm.npc_SetSpecialAction("oid=16908618", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
                cm.effect_Voice("Field.img/flowervioleta/cheer", 100);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=16908327", "open", 0, 0);
                  cm.fieldEffect_PlayFieldSound("flowervioleta/curtain", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.forceStartQuest(30080, '');
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_NormalSpeechBalloon("有一只马吃掉了一头大象.", 1, 0, 0, 2000, 1302103, 9897148);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_NormalSpeechBalloon("为什么会这样呢～? ", 1, 0, 0, 2000, 1302103, 9897148);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon("难, 难道……", 1, 0, 0, 2000, 0, 9897148);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("因为那是在象棋！呵呵呵呵呵", 1, 0, 0, 2000, 1302103, 9897148);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                              cm.effect_PlayMusic("Field.img/flowervioleta/wind");
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 2000, 0, 9897148);
                                cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1302100, 9897148);
                                cm.effect_NormalSpeechBalloon('......', 1, 1, 0, 2000, 1302101, 9897148);
                                cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1302105, 9897148);
                                cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1302106, 9897148);
                                cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1302107, 9897148);
                                cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 2000, 1302108, 9897148);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  cm.effect_NormalSpeechBalloon("石头上钻一个洞会变成什么呢～? ", 1, 0, 0, 2000, 1302103, 9897148);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_NormalSpeechBalloon("钻石！呵呵呵呵呵", 1, 0, 0, 2000, 1302103, 9897148);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_NormalSpeechBalloon("那小鸡吃的药的名字是什么呢～? ", 1, 0, 0, 2000, 1302103, 9897148);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_NormalSpeechBalloon("把那个从我眼前拿开.", 1, 0, 0, 2000, 1302100, 9897148);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          cm.effect_NormalSpeechBalloon("哼, 要是非要见血, 那就没办法了.", 1, 0, 0, 2000, 1302103, 9897148);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_NormalSpeechBalloon("事实上, 我就是……", 1, 0, 0, 2000, 1302103, 9897148);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(500, 4000, 0, 139, 260);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("flowervioleta/appear", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                cm.effect_NormalSpeechBalloon('蘑菇大臣！', 0, 0, 0, 2000, 1302103, 9897148);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 140, 222);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("flowervioleta/suprise", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      cm.effect_NormalSpeechBalloon("什, 什么? 真的是蘑菇大臣吗！", 1, 0, 0, 2000, 1302105, 9897148);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        cm.effect_NormalSpeechBalloon("哎呀, 完全被蒙在鼓里了！", 1, 0, 0, 2000, 1302106, 9897148);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          cm.effect_NormalSpeechBalloon("看来是做了精心的准备！", 1, 0, 0, 2000, 1302107, 9897148);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            cm.effect_NormalSpeechBalloon("真不敢相信.那个人竟然是蘑菇大臣！", 1, 1, 0, 2000, 1302101, 9897148);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              cm.effect_NormalSpeechBalloon("又被他完美的伪装给骗过去了！", 1, 0, 0, 2000, 1302100, 9897148);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 0, 9897148);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("我回来是为了洗刷过去的耻辱。当然，我不是一个人来的。我请来了一些客人。那就是……在天上飞的大海盗部队！", 33, 1302004, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("你们好像在正门的防御上花了不少功夫，真是不好意思。大海盗部队会攻击警备松懈的后门。好了，让我们重新开始吧！这次我一定要将蘑菇王国掌握在手中！", 33, 1302004, true, true);
                                                                  } else if (status === V++) {
                                                                    cm.eventSKill(0);
                                                                    cm.dispose();
                                                                    cm.warp(106030000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;