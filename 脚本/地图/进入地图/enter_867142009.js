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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9401118, "oid=7143506", -710, 290, 22, -760, -660, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7143506", "summon", 0, 0);
      cm.npc_ChangeController(9401116, "oid=7143507", -1000, 290, 26, -1050, -950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7143507", "summon", 0, 0);
      cm.npc_ChangeController(9401088, "oid=7143508", 260, 4, 42, 210, 310, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=7143508", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 500, 200, -260);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 3000, 3000, 200, 10);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 2147483647, 2147483647, 2147483647);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#e赛……赛恩！#n\r\n貌似他强制把我们移动到了这里。", 56, 0, 0, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("赛恩……？！那，那个……？！.\r\n呃，#h0#……我有点犯恶心，头晕目眩……", 36, 9401071, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("杰斯，你振作点！\r\n你不可以在这里晕倒！", 56, 0, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(0, 200, -100, 290);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=7143506", 1);
                            cm.npc_SetForceMove("oid=7143506", 1, 300, 200);
                            cm.inGameDirectionEvent_AskAnswerTime(3873);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("那……那是我的#b赛恩#k……？\r\n不可能……他竟然自己……你没有这种性能……！", 36, 9401087, 0, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("我……#r我没有赋予你这种能力啊！#k", 36, 9401087, 1, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#h0#，我知道你们在阿特利埃四处转悠。\r\n虽然我能阻止你们……但我并没那样。", 36, 9401088, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("都是为了遇见你，克拉尼亚。\r\n#b我的母亲。#k", 36, 9401088, 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("母，母亲……？", 36, 9401071, 1, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你懂的，是谁创造了我。\r\n正是#b母亲#k你啊。", 36, 9401088, 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("多亏你制造出了我，我才能存在，学习，以及生活。\r\n不久后……我就会离开这里，#b看看外面的世界。#k", 36, 9401088, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("去到母亲口中经常提及的伟大世界，#b摧毁一切#k然后创造一个机器们不会有痛苦的世界。", 36, 9401088, 1, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("你知道你现在做了什么傻事吗？", 56, 0, 1, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("这……这不是我制造的#b赛恩#k。\r\n我只是制造了一个听到指令然后执行的废铁块而已……只是想让他有助于我的事业。", 36, 9401087, 1, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("听到指令，然后执行……那和#b人类#k思考以及行动有什么不同吗，母亲？", 36, 9401088, 1, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("母亲离开后，我无数次流着电流苦恼着。\r\n人类的#b想法#k和我的#b处理指令#k究竟有什么不同？", 36, 9401088, 1, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#r别无二致。#k\r\n这就是我的结论。", 36, 9401088, 1, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("因此我就有了#b主意#k，像这样存在在这里。\r\n现在，阿特利埃的一切都是我的，我也是我制造的所有机器的#b父母#k。", 36, 9401088, 1, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("母亲，就像你对我做的一样。", 36, 9401088, 1, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("哼，我不知道你在胡说八道些什么。应该是长时间没更新，系统发生错误了。", 36, 9401087, 1, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("这一切的一切都只是个Bug，完全破坏后…", 36, 9401087, 1, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("你现在还不清楚吗……？！你自己做的事情！\r\n就像你给了拟真机器人感情一样……赛恩也学到了#b感情#k这种东西！", 36, 9401071, 1, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("这不是什么错误、Bug。\r\n这只是人类需要承担的残酷#b现实#k而已……", 36, 9401071, 1, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("拟真机器人们感受到的恐怖和痛苦……他们即便失去了形体，却依旧不断迫切的向某处发送信号……\r\n#b是那些东西把赛恩变成这样的！#k", 36, 9401071, 1, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("是我们……是我们创造了这个#b怪物#k……", 36, 9401071, 1, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("这一切……#e真是不可思议#k。", 36, 9401087, 1, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("你说什么？", 56, 0, 1, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("你看，人工智能突飞猛进的成长……不美好吗？\r\n这和我曾视为目标，通过机器创造#b新生命#k的行为别无二致……", 36, 9401087, 1, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("这么高的智商，透彻的判断力，甚至还有共感能力……应有尽有啊。", 36, 9401087, 1, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("你……你现在不清醒……！\r\n这种情况下怎么能有那样的想法……！", 36, 9401071, 1, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("再说，他竟称呼我为母亲，他好像有点用处呢。\r\n稍微维修一下的话，可能会有助于我的新事业……", 36, 9401087, 1, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=7143508", 'attack', 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/electric1", 100);
                                                                                      cm.npc_SetForceMove("oid=7143506", -1, 50, 300);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                      cm.effect_NormalSpeechBalloon('!!', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401118, null, cm.getPlayer().getId());
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("那应该有点困难吧……", 56, 0, 0, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("赛恩！你不是说我是你的母亲吗？！是我……是我创造出了你！\r\n你为什么要攻击我……", 36, 9401087, 1, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("没错，你是#b我的母亲#k。\r\n但是……#b我众多子女#k正在在阿特利埃四周哭喊呢。", 36, 9401088, 1, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#r#e让我向你报仇。#k#n", 36, 9401088, 1, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("你，你说什么……？已经被破坏的拟真机器人残骸怎么会……！\r\n他们只不过是些铁罐头而已！", 36, 9401087, 1, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("不管他们有没有形体，不管他们能不能发出声音。\r\n他们都是我创造出来的，他们都是我的孩子。", 36, 9401088, 1, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("作为父母，怎么能无视#b子女#k的呐喊呢，母亲。\r\n虽然母亲抛弃了我，但我绝对不会抛弃我的孩子们。", 36, 9401088, 1, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#h0#……怎么办呢……？！", 36, 9401071, 1, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("干就完了！光靠克拉尼亚，是解决不了的。", 56, 0, 1, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#h0#……我取消对你说过的话。", 36, 9401088, 1, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("我说你将是我的新世界中唯一一个人类……现在我取消#r那句话。#k", 36, 9401088, 1, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("请你和这些残酷的人类共命运吧", 36, 9401088, 1, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("杰斯,，你先带克拉尼亚离开！", 56, 0, 1, 1);
                                                                                                              } else if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                cm.eventSKill(0);
                                                                                                                cm.warp(867142010, 0, false);
                                                                                                                cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.setStandAloneMode(false);
                                                                                                                cm.forceCompleteQuest(64923);
                                                                                                                cm.npc_LeaveField("oid=7143506");
                                                                                                                cm.npc_LeaveField("oid=7143507");
                                                                                                                cm.npc_LeaveField("oid=7143508");
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