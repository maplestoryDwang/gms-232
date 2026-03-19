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
      cm.updateInfoQuest(33524, "enter=2");
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.forceCompleteQuest(33534);
      cm.forceStartQuest(33535, '');
      cm.npc_ChangeController(1530612, "oid=40550815", 0, 0, 142, -50, 50, 1, false, false);
      cm.npc_SetSpecialAction("oid=40550815", "summon", 0, 0);
      cm.npc_ChangeController(1530613, "oid=40550816", 240, 0, 130, 190, 290, 1, false, false);
      cm.npc_SetSpecialAction("oid=40550816", 'summon', 0, 0);
      cm.npc_ChangeController(1530614, "oid=40550817", 240, 0, 130, 190, 290, 1, false, false);
      cm.npc_SetSpecialAction("oid=40550817", "summon", 0, 0);
      cm.npc_ChangeController(1530615, "oid=40550818", 0, 70, 2, -50, 50, 1, false, false);
      cm.npc_SetSpecialAction("oid=40550818", "summon", 0, 0);
      cm.npc_ChangeController(1530645, "oid=40550819", 642, -40, 175, 592, 692, 1, false, false);
      cm.npc_SetSpecialAction("oid=40550819", "summon", 0, 0);
      cm.npc_ChangeController(1530644, "oid=40550820", 731, -40, 147, 681, 781, 1, false, false);
      cm.npc_SetSpecialAction("oid=40550820", "summon", 0, 0);
      cm.npc_ChangeController(1530643, "oid=40550821", 827, -40, 144, 777, 877, 1, false, false);
      cm.npc_SetSpecialAction("oid=40550821", 'summon', 0, 0);
      cm.npc_ChangeController(1530626, "oid=40550822", -250, 0, 137, -300, -200, 0, true, false);
      cm.npc_SetSpecialAction("oid=40550822", "summon", 0, 0);
      cm.npc_ChangeController(1530627, "oid=40550823", -250, 0, 137, -300, -200, 0, true, false);
      cm.npc_SetSpecialAction("oid=40550823", "summon", 0, 0);
      cm.npc_ChangeController(1530628, "oid=40550824", -250, 0, 137, -300, -200, 0, true, false);
      cm.npc_SetSpecialAction("oid=40550824", "summon", 0, 0);
      cm.npc_ChangeController(1530624, "oid=40550825", -250, 0, 137, -300, -200, 0, true, false);
      cm.npc_SetSpecialAction("oid=40550825", "summon", 0, 0);
      cm.npc_ChangeController(1530625, "oid=40550826", -250, 0, 137, -300, -200, 0, true, false);
      cm.npc_SetSpecialAction("oid=40550826", "summon", 0, 0);
      cm.npcMove(1530626, -360, -40, 0);
      cm.npcMove(1530628, -420, -100, 0);
      cm.npcMove(1530627, -420, -30, 0);
      cm.npcMove(1530624, -470, -70, 0);
      cm.npcMove(1530625, -500, -20, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, -350, -350);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("SoundEff.img/Freinds/crowd2", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, 350, -350);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
              cm.inGameDirectionEvent_OneTimeAction('好友故事_弹完吉他', 1000000);
              cm.npcMove(1530614, -360, -30, 0);
              cm.npcMove(1530615, 0, -147, 0);
              cm.npcMove(1530645, 0, 10, 0);
              cm.npcMove(1530644, -10, 20, 0);
              cm.npcMove(1530643, -35, 10, 0);
              cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                  cm.effect_Voice("SoundEff.img/Freinds/crowd2", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 700, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#非常好。Very very perfect，10分！！", 37, 1530150, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=40550821", "score", -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("哦哦哦哦哦！！！！", 37, 1530280, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('10分……', 37, 1530410, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=40550820", "score", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(2300);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我……能先提几个建议吗？", 37, 1530160, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("首先技术上有点不足，特别是胡克得多加练习。有好几句都错了吧？", 37, 1530160, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#咳呃。", 37, 1530100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("然后架子鼓……虽然只有一点点，但是拍子忽快忽慢。\r\n感觉像是一下子很兴奋，一下子又累了？", 37, 1530160, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("呃……", 37, 1530607, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("不过贝斯很棒，主唱和吉他也不错。特别是#h0#。非常完美。这种实力怎么会被隐藏到现在呢，真让我吃惊。", 37, 1530160, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('唔哇哇哇哇！！', 37, 1530280, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("但是，最棒的还是歌曲。虽然旋律也很棒，但最重要的是这个歌曲让人产生了共鸣。", 37, 1530160, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("这个歌曲是原声吉他创作室成员，我的朋友布吉作词作曲的。", 37, 1530120, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("伊莉娜……", 37, 1530600, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("哇啊啊啊啊！！！！布吉！布吉！布吉！", 37, 1530280, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("所以我的分数是……8分！", 37, 1530160, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=40550819", 'score8', -1, 1);
                                                                cm.sendNormalTalk_Bottom('哇啊啊啊啊！', 37, 1530280, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                  cm.effect_Voice("SoundEff.img/Freinds/crowd2", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -600, 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face7#我……我输了？！", 37, 1530621, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face6#我……", 37, 1530621, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.userSetFieldFloating(330002627, 1, 1, 20);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#哦哦哦？地震了吗？", 37, 1530100, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/spinoff2/6", 0, 1000, 0, 0, 15, 4, 1);
                                                                                  cm.fieldEffect_PlayFieldSound("flowervioleta/spotlight", 100);
                                                                                  cm.forceStartQuest(33535, '');
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  cm.effect_Voice("SoundEff.img/Freinds/crowd", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayBGM("Bgm38.img/battlefield", 0, 0);
                                                                                    cm.sendNormalTalk_Bottom("#face0#呜呜~希拉老师~我怕~", 37, 1530150, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#喂！你这家伙往哪儿靠呢！", 37, 1530160, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#h0#！是闹事者！", 37, 1530050, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("(莉莉的声音！)", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("我们两个用魔法封闭了大家的知觉！你现在快去消灭它们！", 37, 1530030, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("看到它们的人太多了，我们用魔法无法维持太久，你快去消灭它们！", 37, 1530050, true, true);
                                                                                            } else if (status === V++) {
                                                                                              cm.userSetFieldFloating(330002627, 1, 1, 20);
                                                                                              cm.dispose();
                                                                                              cm.warp(330000690, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;