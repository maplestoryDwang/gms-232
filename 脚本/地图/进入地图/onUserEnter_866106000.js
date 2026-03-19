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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390381, "oid=2271593", 231, -4, 4, 181, 281, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2271593", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("喵!!!谢谢你喵。\r\n我是阿尔喵。", 1, 9390381, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("是冒险岛动物英雄团的一员喵。", 1, 9390381, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("动物英雄团?", 3, 9390381, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("喵!!虽然还默默无闻,但是总有一天冒险岛的人们会歌颂我们的喵。", 1, 9390381, true, true);
            } else {
              if (status === V++) {
                cm.spawnMobLimit(9390931, 1, 600, 246, 6);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.spawnMobLimit(9390931, 1, 761, 246, 6);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.spawnMobLimit(9390931, 1, 889, 246, 6);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.spawnMobLimit(9390931, 1, 905, 246, 6);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.spawnMobLimit(9390931, 1, 1005, 246, 6);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.spawnMobLimit(9390931, 1, 1171, 246, 6);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 900, 217);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1432);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/balloonMsg1/7"], [1000, 600, 0, 1, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("啊!是野狼!", 3, 9390381, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("哇,是野狼~!!!救命啊!", 1, 9390381, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -4, -4);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1430);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("但……但是该怎么……", 3, 9390381, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("就像刚才破坏陷阱一样,用那个树枝战斗即可喵。", 1, 9390381, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("知道了,消灭危险的怪物,也是成为英雄的条件!", 3, 9390381, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("来吧,野狼怪物!!!", 3, 9390381, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("就一野狼而已喵。", 1, 9390381, true, true);
                                                } else if (status === V++) {
                                                  cm.forceCompleteQuest(59004);
                                                  cm.gainExp(10);
                                                  cm.npc_LeaveField("oid=2271593");
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.setStandAloneMode(false);
                                                  cm.dispose();
                                                  cm.warp(866107000, 0, true);
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