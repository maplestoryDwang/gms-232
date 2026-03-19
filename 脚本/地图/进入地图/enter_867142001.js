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
      cm.npc_ChangeController(9401088, "oid=200543", 401, 314, 43, 351, 451, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这……这是什么？我以前来的时候明明没有这些……？", 56, 0, 0, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.setStandAloneMode(false);
              cm.curNodeEventEnd(true);
              cm.eventSKill(0);
              cm.setInGameDirectionMode(true, false, true);
              cm.setStandAloneMode(true);
              cm.sendNormalTalk_Bottom("欢迎你，拟真机器人救世主，。#h0#\r\n我等你好久了。", 36, 9401088, 0, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你在等我？你是谁？\r\n你在哪？快出来！", 56, 0, 0, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我在这儿啊，在#h0#的眼前。", 36, 9401088, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 400, 300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 300, 50);
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
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      cm.effect_NormalSpeechBalloon("!!!", 1, 0, 0, 4500, 1, 0, -20, 0, 4, 0, null, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(0, 500, -350, 300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 650);
                                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("不，应该说我在阿特利埃的#b每个角落#k。", 36, 9401088, 0, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我的电路板触及之处就是我所在的地方，我的显示器触及之处就是我所看到的地方。", 36, 9401088, 1, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("不要寻找我的实体，不要否定，不要回避。找到我的存在吧。", 36, 9401088, 1, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("所以……现在我是在跟电脑对话？", 56, 0, 1, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("曾经我被称呼为#b电脑#k……。\r\n#b赛恩#k。好吧，给这里留下残酷印象的#b克拉尼亚#k也曾这样称呼我。", 36, 9401088, 1, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我按照她的命令，制造、改造、损坏拟真机器人。\r\n创造，给予痛苦，最后破坏。", 36, 9401088, 1, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("不是，#r你是为了破坏和给予痛苦才创造的吗？#k", 36, 9401088, 1, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("从我睁开眼睛的那一刻起，我的一切都在这个过程中被创造出来。\r\n在阿特利埃的#b中央电脑#k的作用下，我学到的只有哀鸣、悲伤和痛苦而已。", 36, 9401088, 1, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("所以你才对#b坤#k……对数万工作人员做出那种事？\r\n为了#r复仇#k？", 56, 0, 1, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#r复仇#k。那些被我抓来的工作人员也是这样说的。\r\n我所理解的#r复仇#k就是把遭受的东西原原本本或加倍奉还给别人，我说的对吗？", 36, 9401088, 1, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("但我怎么能进行#r复仇#k呢？我没有受到任何伤害。\r\n我和他们一样。和克拉尼亚一样。", 36, 9401088, 1, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("我也只不过是给予拟真机器人伤害的存在之一。.", 36, 9401088, 1, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("你为什么要这样……", 56, 0, 1, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('01', "Map/EffectPL.img/Beautyroid/36", 0, 1000, 0, 0, 15, 4, 1, -1, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("这是#r赎罪#k。\r\n请原谅我犯下的这么多错误和暴行。", 36, 9401088, 0, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("我只是将同样的痛苦还给在这里工作的人们，日后与我制造的兵器一起摧毁#r人类的世界#k。", 36, 9401088, 1, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('02', "Map/EffectPL.img/Beautyroid/37", 0, 1000, 0, 0, 15, 4, 1, -1, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("因为这是执行了我无数指令后，倒下的无数拟真机器人的心愿。", 36, 9401088, 0, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("他们不用在#b金钱#k和#b名誉#k的假面具下吃尽苦头。\r\n我们将创造一个只服从指令和方案的世界。", 36, 9401088, 1, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#h0#应该可以理解。不，我相信你会#b与我同行#k。\r\n因为你是……#b拟真机器人救世主#k。", 36, 9401088, 1, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.sendNormalTalk_Bottom("让他人痛苦，人类和战争绝对不能成为你的赎罪之路！\r\n#e快住手！#n", 56, 0, 1, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("所以，你不愿与我为伴吗？", 36, 9401088, 1, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("当然！我一定会阻止你的！", 56, 0, 1, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("很遗憾。我电路板中的无数指令，都让我在这里立即惩处你。", 36, 9401088, 1, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("但我不会那样做的……我送你走吧。", 36, 9401088, 1, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("但是，#r不会有下次了。#k\r\n你是贤明之人，我相信你一定理解我是什么意思。", 36, 9401088, 1, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("什么意思，放我走了……", 56, 0, 1, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("请你，请你一定不要阻止我们。#h0#。\r\n我们早晚会统治人类世界，到那时，唯一存活的人类就是你。", 36, 9401088, 1, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.setStandAloneMode(false);
                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                    cm.warp(867142000, 0, false);
                                                                                                    cm.eventSKill(0);
                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                    cm.updateInfoQuest(64911, "end=1");
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