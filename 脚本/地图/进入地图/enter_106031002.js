var status = -1;
function action(f, E, e) {
  if (!cm.isQuestFinished(30060)) {
    action第一幕(f, E, e);
  } else {
    if (!cm.isQuestFinished(30068)) {
      action第二幕(f, E, e);
    } else if (!cm.isQuestFinished(30073)) {
      action第三幕(f, E, e);
    } else {
      cm.warp(106030000, 0);
      cm.dispose();
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
      cm.npc_ChangeController(1302100, "oid=4346", -101, 192, 30, -151, -51, 0, false, false);
      cm.npc_ChangeController(1302105, 'oid=4347', 19, 382, 15, -31, 69, 0, false, false);
      cm.npc_ChangeController(1302106, "oid=4348", 393, 382, 8, 343, 443, 1, false, false);
      cm.npc_ChangeController(1302107, "oid=4349", -111, 382, 3, -161, -61, 0, false, false);
      cm.npc_ChangeController(1302108, "oid=4350", 269, 382, 6, 219, 319, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1302109, "oid=16916028", 138, 257, 39, 88, 188, 1, false, false);
      cm.npc_SetSpecialAction("oid=16916028", "summon", 0, 0);
      cm.npc_ChangeController(1302101, "oid=16916029", 300, 257, 40, 250, 350, 1, true, false);
      cm.npc_SetSpecialAction("oid=16916029", 'summon', 0, 0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon("公, 公主！快逃！", 1, 0, 0, 2000, 1302100, 9897148);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("父王? 这个人到底是谁? ", 1, 1, 0, 2000, 1302101, 9897148);
          } else {
            if (status === V++) {
              cm.fieldEffect_ScreenMsg("lightning/screenMsg/2");
              cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else {
              if (status === V++) {
                cm.effect_Voice("Voice.img/DarkMage/0", 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon('这个台词是……！', 1, 0, 0, 2000, 0, 9897148);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_NormalSpeechBalloon("我是想要支配这个世界的黑……", 1, 0, 0, 2000, 1302109, 9897148);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 0, 9897148);
                    cm.effect_NormalSpeechBalloon('黑魔法……！', 1, 0, 0, 2000, 1302100, 9897148);
                    cm.effect_NormalSpeechBalloon('黑魔法……！', 1, 1, 0, 2000, 1302101, 9897148);
                    cm.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 1302105, 9897148);
                    cm.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 1302106, 9897148);
                    cm.effect_NormalSpeechBalloon('黑魔法……！', 1, 0, 0, 2000, 1302107, 9897148);
                    cm.effect_NormalSpeechBalloon("黑魔法……！", 1, 0, 0, 2000, 1302108, 9897148);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=16916028", "change", 0, 0);
                      cm.fieldEffect_PlayFieldSound("Kite/Crown", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.forceStartQuest(30081, '');
                        cm.fieldEffect_PlayFieldSound("flowervioleta/appear", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                        cm.effect_NormalSpeechBalloon("黑大海盗！", 0, 0, 0, 2000, 1302109, 9897148);
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
                                cm.effect_NormalSpeechBalloon("……唉.", 1, 0, 0, 2000, 0, 9897148);
                                cm.effect_NormalSpeechBalloon("……唉.", 1, 0, 0, 2000, 1302100, 9897148);
                                cm.effect_NormalSpeechBalloon('……唉.', 1, 1, 0, 2000, 1302101, 9897148);
                                cm.effect_NormalSpeechBalloon("……唉.", 1, 0, 0, 2000, 1302105, 9897148);
                                cm.effect_NormalSpeechBalloon('……唉.', 1, 0, 0, 2000, 1302106, 9897148);
                                cm.effect_NormalSpeechBalloon('……唉.', 1, 0, 0, 2000, 1302107, 9897148);
                                cm.effect_NormalSpeechBalloon("……唉.", 1, 0, 0, 2000, 1302108, 9897148);
                              } else {
                                if (status === V++) {
                                  cm.effect_NormalSpeechBalloon("大家为什么一听到我的名字就表现得很失望啊！", 1, 0, 0, 2000, 1302109, 9897148);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    cm.effect_NormalSpeechBalloon("嗯, 不管怎样, 美丽的碧欧蕾塔是谁啊? ", 1, 0, 0, 2000, 1302109, 9897148);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=16916029", "open", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_NormalSpeechBalloon("你该不会是因为贪图我的美貌, 才劫持……", 1, 1, 0, 2000, 1302101, 9897148);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          cm.effect_NormalSpeechBalloon("#fn宫书##e不, 我不是说你, 我在问碧欧蕾塔是谁? \r\n我现在是认真的.", 1, 0, 0, 3000, 1302109, 9897148);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            cm.effect_NormalSpeechBalloon("我说了, 那就是我.", 1, 1, 0, 2000, 1302101, 9897148);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("flowervioleta/suprise", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              cm.effect_NormalSpeechBalloon("……你真的就是传说中最美丽的碧欧蕾塔? ", 1, 0, 0, 2000, 1302109, 9897148);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_NormalSpeechBalloon("(点头点头)", 1, 0, 0, 2000, 1302100, 9897148);
                                                cm.effect_NormalSpeechBalloon("(点头点头)", 1, 1, 0, 2000, 1302101, 9897148);
                                                cm.effect_NormalSpeechBalloon("(点头点头)", 1, 0, 0, 2000, 1302105, 9897148);
                                                cm.effect_NormalSpeechBalloon('(点头点头)', 1, 0, 0, 2000, 1302106, 9897148);
                                                cm.effect_NormalSpeechBalloon('(点头点头)', 1, 0, 0, 2000, 1302107, 9897148);
                                                cm.effect_NormalSpeechBalloon("(点头点头)", 1, 0, 0, 2000, 1302108, 9897148);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("flowervioleta/thunder", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  cm.effect_NormalSpeechBalloon("蘑菇大臣那个家伙, 竟敢骗我！", 0, 0, 0, 2000, 1302109, 9897148);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    cm.effect_NormalSpeechBalloon("你们让我感觉受到了侮辱.\r\n这个难看的蘑菇我带走了！", 1, 0, 0, 2000, 1302109, 9897148);
                                                  } else if (status === V++) {
                                                    cm.eventSKill(0);
                                                    cm.dispose();
                                                    cm.warp(106031100, 0, true);
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
function action第二幕(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302100, "oid=4346", -101, 192, 30, -151, -51, 0, false, false);
      cm.npc_ChangeController(1302105, "oid=4347", 19, 382, 15, -31, 69, 0, false, false);
      cm.npc_ChangeController(1302106, "oid=4348", 393, 382, 8, 343, 443, 1, false, false);
      cm.npc_ChangeController(1302107, "oid=4349", -111, 382, 3, -161, -61, 0, false, false);
      cm.npc_ChangeController(1302108, "oid=4350", 269, 382, 6, 219, 319, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1302101, "oid=19474607", 334, 257, 40, 284, 384, 1, true, false);
      cm.npc_SetSpecialAction("oid=19474607", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_NormalSpeechBalloon("碧欧蕾塔！我的女儿！", 1, 0, 0, 2000, 1302100, 9897148);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=19474607", -1, 200, 100);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
          cm.effect_NormalSpeechBalloon("哎呀呀呀！", 1, 1, 0, 3000, 1302101, 9897148);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("没受伤吧? ", 1, 0, 0, 2000, 1302100, 9897148);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_NormalSpeechBalloon("没有.抱歉让您担心了.", 1, 1, 0, 2000, 1302101, 9897148);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_NormalSpeechBalloon("#h0#, 真是谢谢你. 真不知道怎么报答你.", 1, 0, 0, 2000, 1302100, 9897148);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_NormalSpeechBalloon("应该重重地奖赏他.", 1, 0, 0, 2000, 1302105, 9897148);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_NormalSpeechBalloon("没错, 没错.必须重赏.", 1, 0, 0, 2000, 1302100, 9897148);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_NormalSpeechBalloon("不管你是不是蘑菇, 或者是不是男人, 都没关系.\r\n希望你能尽快和公主结婚……", 1, 0, 0, 2000, 1302100, 9897148);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("flowervioleta/suprise", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                        cm.effect_NormalSpeechBalloon("先, 先得抓住蘑菇大臣才行！", 1, 0, 0, 2000, 0, 9897148);
                        cm.effect_Direction("Effect/Direction2.img/flowervioleta/face", 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_NormalSpeechBalloon("勇士说得对.", 1, 0, 0, 2000, 1302107, 9897148);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon("以后再奖赏也不迟.", 1, 0, 0, 2000, 1302106, 9897148);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                              cm.effect_NormalSpeechBalloon("嗯, 既然大臣们的意思是这样, 那就没办法了.", 1, 0, 0, 2000, 1302100, 9897148);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                cm.effect_NormalSpeechBalloon("呼, 得救了.", 1, 0, 1, 2000, 0, 9897148);
                              } else if (status === V++) {
                                cm.npc_LeaveField("oid=19474607");
                                cm.forceCompleteQuest(30067);
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
function action第三幕(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302100, "oid=4346", -101, 192, 30, -151, -51, 0, false, false);
      cm.npc_ChangeController(1302105, "oid=4347", 19, 382, 15, -31, 69, 0, false, false);
      cm.npc_ChangeController(1302106, 'oid=4348', 393, 382, 8, 343, 443, 1, false, false);
      cm.npc_ChangeController(1302107, "oid=4349", -111, 382, 3, -161, -61, 0, false, false);
      cm.npc_ChangeController(1302108, "oid=4350", 269, 382, 6, 219, 319, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1302103, "oid=19477504", 136, 255, 39, 86, 186, 1, true, false);
      cm.npc_SetSpecialAction("oid=19477504", 'summon', 0, 0);
      cm.npc_ChangeController(1302101, "oid=19477505", 375, 191, 46, 325, 425, 1, true, false);
      cm.npc_SetSpecialAction("oid=19477505", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("蘑菇国王！这一切全都是因为你的无能造成的！", 33, 1302004, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("你在说什么啊？因为我的无能造成的？你仔细说给我听听。", 33, 1302000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("在我年轻的时候，因为你这个无能的国王，我一直饱受贫穷的困扰。那时我是低级官员，经常被拖欠工资。就在那个时候，我的妻子生病死去了。", 33, 1302004, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
            cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 0, 9897148);
            cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302100, 9897148);
            cm.effect_NormalSpeechBalloon('!', 1, 1, 0, 2000, 1302101, 9897148);
            cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302105, 9897148);
            cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302106, 9897148);
            cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302107, 9897148);
            cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302108, 9897148);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("最后只剩下嗷嗷待哺的女儿和我两个人。但是因为太穷，我没办法养活我的女儿。所以最后……我只能亲手把女儿扔掉！", 33, 1302004, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……你说得对，年轻时的我确实很无能，没能好好地照顾百姓们。所有的一切都是我的责任。", 33, 1302000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那天之后，我就对世界上的一切充满了怨恨和复仇之心。请你杀了我吧！我已经没有任何眷恋了。我只想看看我丢弃在孢子山丘的女儿一眼……", 33, 1302004, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                    cm.effect_NormalSpeechBalloon('#r#e!!!', 0, 0, 0, 2000, 1302100, 9897148);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你，你说孢子山丘？你是在二十年前满月的晚上把女儿丢在那里的吗？", 33, 1302000, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                        cm.effect_NormalSpeechBalloon("#r#e!!!", 0, 0, 0, 2000, 1302103, 9897148);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你，你怎么知道的……难，难道你知道我女儿在哪里吗？希望你能让我见她一面……不，不。请帮我转告她，希望她能好好活下去。", 33, 1302004, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你的女儿活得非常好。因为你的女儿就是……#r碧欧蕾塔#k！", 33, 1302000, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                              cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 0, 9897148);
                              cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302103, 9897148);
                              cm.effect_NormalSpeechBalloon('?!', 1, 1, 0, 2000, 1302101, 9897148);
                              cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302105, 9897148);
                              cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302106, 9897148);
                              cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302107, 9897148);
                              cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1302108, 9897148);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("父王，你们到底在说什么啊？我怎么会是蘑菇大臣的女儿？那不可能……", 33, 1302001, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("碧欧蕾塔，其实你是我捡到的孩子。被你当作母亲的死去的王妃和我一直没有孩子，我们认为你是上天送来的孩子，于是就把你当作自己的女儿养大了。", 33, 1302000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("那是真的吗？那么说，我……", 33, 1302001, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("是的，如果二十年前被遗弃在孢子山丘的孩子是蘑菇大臣的女儿的话，你应该就是蘑菇大臣的亲生女儿。你的亲生父亲就是蘑菇大臣。", 33, 1302000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("怎，怎么会这样……我，不相信！", 33, 1302001, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_PlayMusic("Field.img/flowervioleta/destiny");
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Kite/Crown", 100);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/pang", "oid=19477505"], [0, 0, -10, 1, 0, 1, 0, 0]);
                                            cm.npc_LeaveField("oid=19477505");
                                            cm.npc_SetForceMove("oid=19477504", 1, 1, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(1302101, "oid=19477776", 500, 375, 9, 450, 550, 0, true, false);
                                              cm.npc_SetSpecialAction("oid=19477776", "summon", 0, 0);
                                              cm.fieldEffect_PlayFieldSound("Kite/Crown", 100);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/pang", "oid=19477776"], [0, 0, -10, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=19477776", 1, 300, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=19477776");
                                                  cm.npc_SetSpecialAction("oid=19477504", 'action', 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  cm.effect_NormalSpeechBalloon("公, 公主……不, 碧欧蕾塔！", 1, 0, 0, 1500, 1302103, 9897148);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    cm.effect_NormalSpeechBalloon("呜呜呜呜！", 1, 0, 0, 1500, 1302103, 9897148);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      cm.effect_NormalSpeechBalloon("蘑菇大臣！快叫御医！快！", 1, 0, 0, 2000, 1302100, 9897148);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;