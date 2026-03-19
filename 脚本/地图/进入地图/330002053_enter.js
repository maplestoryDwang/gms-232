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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(1530370, "oid=20356821", 1070, 20, 3, 1020, 1120, 1, true, false);
        cm.npc_SetSpecialAction("oid=20356821", "summon", 0, 0);
        cm.npc_ChangeController(1530282, "oid=20356822", 938, 20, 3, 888, 988, 0, false, false);
        cm.npc_SetSpecialAction("oid=20356822", "summon", 0, 0);
        cm.npc_ChangeController(1530272, "oid=20356823", 765, 20, 3, 715, 815, 0, false, false);
        cm.npc_SetSpecialAction("oid=20356823", "summon", 0, 0);
        cm.npc_ChangeController(1530283, "oid=20356824", 592, 20, 2, 542, 642, 0, false, false);
        cm.npc_SetSpecialAction("oid=20356824", "summon", 0, 0);
        cm.npc_ChangeController(1530273, "oid=20356825", 419, 20, 1, 369, 469, 0, false, false);
        cm.npc_SetSpecialAction("oid=20356825", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("好了，今天咱们班来了一名新的转校生。让我们一起欢迎他吧。", 37, 1530370, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你好！", 37, 1530270, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("很高兴见到你！", 37, 1530280, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b（可不能表现得太生硬了。尽最大努力和大家自然地打招呼吧。）#k", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("那个，你叫什么名字？", 37, 1530270, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("嗯，很高兴认识大家。我叫#h0#！以后请多多关照。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 639, -6);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2997);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                            cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1530370, cm.getPlayer().getId());
                            cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530282, cm.getPlayer().getId());
                            cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1530272, cm.getPlayer().getId());
                            cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530283, cm.getPlayer().getId());
                            cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1530273, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                              cm.effect_NormalSpeechBalloon("那个……你刚刚说的是你的本名吗? ", 1, 0, 0, 2000, 1530283, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_NormalSpeechBalloon("不是外号吧? ", 1, 0, 0, 2000, 1530282, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  cm.effect_NormalSpeechBalloon("#h0#……? 不觉得有点奇怪吗? ", 1, 0, 0, 2000, 1530272, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1239, -6);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2997);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("嗯哼……这帮家伙，都在那儿嘀咕什么呢？有什么问题的话赶紧问。", 37, 1530370, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("那个，你平时有什么爱好呢？", 37, 1530290, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("爱好嘛？#b（平时的爱好……该怎么回答好呢？）#k\r\n\r\n嗯……我的爱好就是为了让自己变得更强大而进行修炼。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(0, 200, 639, -6);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2997);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530370, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530282, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 1530272, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530283, cm.getPlayer().getId());
                                                  cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1530273, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    cm.effect_NormalSpeechBalloon("什么……? 是我们听错了吗? ", 1, 0, 1, 2000, 1530282, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      cm.effect_NormalSpeechBalloon('总感觉他有点奇怪……', 1, 0, 1, 2000, 1530272, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1239, -6);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2997);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("嗯哼……虽然这名同学有点特别，但还是希望大家能和新同学好好相处！", 37, 1530370, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("……作为转校生在神兽国际学校入学的第一天. ", 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("还没搞清楚状况呢, 几个小时的时间很快就过去了. ", 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("要想尽快适应这个世界的话, 看来当务之急就是多交朋友. \r\n\r\n趁着休息时间尽量多跟他们对话吧. ", 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else if (status === V++) {
                                                                        cm.dispose();
                                                                        cm.warp(330000100, 0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.forceStartQuest(32714, '');
                                                                        cm.forceCompleteQuest(32714);
                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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