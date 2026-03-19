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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 1664, 343);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074047, "oid=1943629", 1478, 316, 582, 1428, 1528, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1943629", "summon", 0, 0);
        cm.npc_ChangeController(2074105, "oid=1943630", 1634, 316, 559, 1584, 1684, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1943630", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=1943631", 1702, 319, 559, 1652, 1752, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1943631", "summon", 0, 0);
        cm.sendNormalTalk_Bottom("#face3#…………", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('你没事吗？', 37, 2074105, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#大家，真的，太坏了。\r\n这么一来，还叫我怎么恨大家啊……", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("小可爱啊，大家真的都很担心你……", 37, 2074105, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#我知道，我已经哭得够多了。", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#我现在，也该起来了。", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哎哟，没事的，真的……", 37, 2074100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("…………", 37, 2074105, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#童话村现在，没事了吧？", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这全都要，多亏了你和#b#h0##k。", 37, 2074105, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，宝玉呢？", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("宝玉？啊，对了，现在所有的宝玉才算回到了各自的位置。", 37, 2074105, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer("back", "Map/Effect2.img/downtown2015/box/0", 0, 300, 0, 0, 7, 4, 1);
                                  cm.fieldEffect_ProcessOnOffLayer("ok1", "Map/Effect2.img/downtown2015/box/1", 0, 300, 0, 0, 8, 4, 1);
                                  cm.fieldEffect_ProcessOnOffLayer("ok2", "Map/Effect2.img/downtown2015/box/2", 0, 300, 0, 0, 9, 4, 1);
                                  cm.fieldEffect_ProcessOnOffLayer("ok3", "Map/Effect2.img/downtown2015/box/3", 0, 300, 0, 0, 10, 4, 1);
                                  cm.fieldEffect_ProcessOnOffLayer("ok4", "Map/Effect2.img/downtown2015/box/4", 0, 300, 0, 0, 11, 4, 1);
                                  cm.fieldEffect_ProcessOnOffLayer("ok5", "Map/Effect2.img/downtown2015/box/5", 0, 300, 0, 0, 12, 4, 1);
                                  cm.fieldEffect_ProcessOnOffLayer("ok7", "Map/Effect2.img/downtown2015/box/7", 0, 300, 0, 0, 14, 4, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('main', "Map/Effect2.img/downtown2015/box/6", 0, 300, 0, 0, 8, 4, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("真是一段，漫长的时间啊。", 37, 2074105, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer("main", '', 2, 300, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("back", '', 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("ok1", '', 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("ok2", '', 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("ok3", '', 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("ok4", '', 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer('ok5', '', 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer("ok7", '', 2, 500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……是啊，现在终于都结束了。", 37, 2074100, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('……不，还没有。', 37, 2074105, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("这得重新还回#g赫丽奥斯塔图书馆#k才行。", 37, 2074105, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#是？要将这些……除掉吗？\r\n那童话村要怎么办？", 37, 2074100, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("这次的事情让我感觉到，\r\n也许经历了这样的情感，会不会反倒让我们成长了呢。", 37, 2074105, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("如果硬加阻拦和遏制……会不会反而引发问题。", 37, 2074105, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#嗯，会没事吗？", 37, 2074100, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("大家不都已经战胜过一次了嘛？\r\n日后童话村的村民也会没事的。", 37, 2074105, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("而且最基本的安全装置也由休彼德蔓做好了。", 37, 2074105, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#休彼德蔓？那个……奇怪的大叔吗？", 37, 2074100, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("别看他这样，但其实超有实力的。", 37, 2074105, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("他说想要自然净化，让七种感情不至于太过激烈，\r\n然后便在村子旁边自行开工了。", 37, 2074105, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("现在再也不会被任何人抢走了，算是有了种安全的装置。", 37, 2074105, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#这样啊，怪不得，我就说那里怎么有个奇怪的东西。", 37, 2074100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("好吧，这么说，就请你将宝玉交给威兹吧，\r\n虽说当初拿回来的人是我，但现在我也上了年纪，得麻烦你了。", 37, 2074105, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face2#是，我知……等一下，\r\n你说是“你拿回来的”？", 37, 2074100, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("……嗯？没错，是我拿回来的。", 37, 2074105, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("啊，难不成……你以为我也是童话村的人吗？\r\n呵呵呵，这可真是……看来我已经完全适应这里了。", 37, 2074105, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#啊……我想了想，果真理应如此啊。\r\n那你原本并不在童话村，而是在赫丽奥斯图书馆……", 37, 2074100, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("威兹，我本打算将所有的一切交给那个不成器的徒弟，好好休息休息，\r\n谁能想到我这把年纪还要受这个罪啊。", 37, 2074105, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('……总之，小可爱啊。', 37, 2074105, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#是。", 37, 2074100, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("随时欢迎来玩哦，\r\n你对我而言，无异于就是我可爱的孙女……", 37, 2074105, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……是，只有您健康，我才能再来玩。\r\n……那，我现在就走了。", 37, 2074100, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("……还有，\r\n#b#h0##k，如果没有了你，就什么都解决不了。", 37, 2074105, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("我要替童话村的所有人，都感谢你。", 37, 2074105, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("那，来，行李都已经收拾妥当，\r\n好好交给威兹吧。", 37, 2074105, true, true);
                                                                                            } else if (status === V++) {
                                                                                              cm.updateInfoQuest(30457, "gExpCheck=1");
                                                                                              cm.forceStartQuest(30930, '1');
                                                                                              cm.forceCompleteQuest(30930);
                                                                                              cm.forceForfeitQuest(30930);
                                                                                              cm.updateInfoQuest(30930, '');
                                                                                              cm.forceStartQuest(30457, '');
                                                                                              cm.gainExp(568239);
                                                                                              cm.forceCompleteQuest(30457);
                                                                                              cm.finishAchievement(1161);
                                                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                              cm.dispose();
                                                                                              cm.warp(222020000, 0, true);
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