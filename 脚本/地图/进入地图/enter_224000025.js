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
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -3181, 350);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -3237, 289);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(2074119, "oid=2590827", -3314, 329, 487, -3364, -3264, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2590827", 'summon', 0, 0);
        cm.npc_ChangeController(2074100, "oid=2590828", -3272, 329, 487, -3322, -3222, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2590828", "summon", 0, 0);
        cm.npc_ChangeController(2074129, "oid=2590829", -3047, 329, 492, -3097, -2997, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2590829", "summon", 0, 0);
        cm.npc_ChangeController(2074129, "oid=2590830", -2950, 329, 490, -3000, -2900, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2590830", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("#face0#那个，有什么事情吗？\r\n你怎么这么生气呢？", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我没生气。\r\n我是看到我娘太辛苦了，有些伤心才这样的。", 37, 2074119, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#(嗯……有股不寻常的味道哦？)", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你说你娘辛苦？难道是因为到处卖年糕的活计吗？", 37, 2074100, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("不，这全都是因为老虎。\r\n每天都找上门来，让我们交出年糕……", 37, 2074119, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("很快就到它来的时间了。", 37, 2074119, true, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(2074114, "oid=2590864", -2945, 327, 490, -2995, -2895, 1, true, 500, false);
                    cm.npc_SetSpecialAction("oid=2590864", "summon", 0, 0);
                    cm.npc_SetSpecialAction("oid=2590864", "skill2", -1, 1);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 300, -3100, 350);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(1);
                      cm.npc_setForceFlip("oid=2590828", 1);
                      cm.sendNormalTalk_Bottom("啊呜！大婶，给我一块年糕我就不吃了你！", 37, 2074114, false, true);
                    } else {
                      if (status === V++) {
                        cm.setNpcSpecialActionReset("oid=2590864");
                        cm.sendNormalTalk_Bottom("哼，看来不是贵族啊，\r\n肯定是那个卑贱的老虎。", 37, 2074119, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(2074120, "oid=2590874", -3183, 327, 488, -3233, -3133, 0, true, 500, false);
                          cm.npc_SetSpecialAction("oid=2590874", "summon", 0, 0);
                          cm.npc_SetSpecialAction("oid=2590874", "standup", -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("又来了？该死的混蛋，怎么来得这么早！\r\n还没做完呢。", 37, 2074130, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("啊呜！我实在是饿得不行了！\r\n赶紧的！给我一块年糕我就不吃了你~！", 37, 2074114, true, true);
                            } else {
                              if (status === V++) {
                                cm.setNpcSpecialActionReset("oid=2590874");
                                cm.npc_SetForceMove("oid=2590874", 1, 100, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=2590874", "standup", -1, 1);
                                  cm.sendNormalTalk_Bottom("哎哟，这该死的混蛋，\r\n我的年糕就那么好吃吗？\r\n算了，你这讨人厌的家伙就再多吃一块年糕吧。", 37, 2074130, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=2590830", 'standt2', -1, 1);
                                    cm.sendNormalTalk_Bottom("啊呜！是这个吧！这个！！", 37, 2074114, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=2590864", "eat", -1, 1);
                                      cm.sendNormalTalk_Bottom("啊呜，啊呜。\r\n啊呜，这个味道简直快要让人痴狂了。\r\n实在是停不下来啊。", 37, 2074114, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#哎……老虎原本就是那么暴饮暴食的吗？\r\n而且原本在故事里，年糕并不是目的啊。\r\n挺奇怪的……要去查查看吗？", 37, 2074100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=2590864"], [11000, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#该死，宝玉在老虎身上？看来是不分人和动物啊……\r\n额……这股气息……", 37, 2074100, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#啊，肚子好饿，受不了了。\r\n这，这种感觉实在是受不了了！", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#没错！肯定是被#g暴食宝玉#k附身了！", 37, 2074100, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#不行，我得减肥才行……\r\n啊……也让我稍微吃点那个年糕吧……啊呜……", 37, 2074100, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("哎哟，真的好好吃，\r\n啊呜啊呜。", 37, 2074114, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("再这么下去得噎着了，\r\n你慢着点吃！", 37, 2074130, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.setNpcSpecialActionReset("oid=2590864");
                                                                  cm.npc_SetSpecialAction("oid=2590830", "standt1", -1, 1);
                                                                  cm.sendNormalTalk_Bottom("搞什么？只有这个吗？年糕！\r\n没了吗？我现在肚子还饿呢！", 37, 2074114, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("你这个该死的家伙，狂吃了那么多居然肚子还饿吗？\r\n今天就只有这些了，你要是肚子饿，就明天再来好了。", 37, 2074120, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("哼！切，今天也没能填饱肚子！\r\n明天再多做一点！", 37, 2074114, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("既然都吃完了就给我赶紧滚开！我还得做年糕呢。", 37, 2074120, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=2590864", "skill2", -1, 1);
                                                                          cm.sendNormalTalk_Bottom("啊呜，大婶虽然说话不中听，但是年糕的味道可真是一绝……\r\n那我明天会再来的！啊呜，肚子好饿……", 37, 2074114, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=2590864");
                                                                            cm.sendNormalTalk_Bottom("哎哟喂……我的腰啊。\r\n我也得稍微先休息一会儿了。", 37, 2074120, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_LeaveField("oid=2590874");
                                                                              cm.sendNormalTalk_Bottom("#face3#嘤嘤……我肚子也饿了……", 37, 2074100, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.updateInfoQuest(30415, "gExpCheck=1");
                                                                                cm.gainExp(142059);
                                                                                cm.forceStartQuest(30415, '');
                                                                                cm.forceCompleteQuest(30415);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                              } else if (status === V++) {
                                                                                cm.dispose();
                                                                                cm.warp(224000000, 24, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;