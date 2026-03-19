var status = -1;
function action(e, V, S) {
  status++;
  var d = cm.getEventManager('副本_起源之塔');
  var g = d == null ? null : d.getProperty("stage" + parseInt('07'));
  if (g === "start") {
    cm.npc_ChangeController(2540001, "oid=2685117", -812, 2305, 8, -862, -762, 1, false, 0, false);
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(42001, "noHelp") == 1) {
    cm.npc_ChangeController(2540001, "oid=2685117", -812, 2305, 8, -862, -762, 1, false, 0, false);
    startMap(d);
    return;
  }
  var r = -1;
  if (status <= r++) {
    cm.dispose();
  } else {
    if (status === r++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(2540001, "oid=2685117", -812, 2305, 8, -862, -762, 1, false, 0, false);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === r++) {
        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === r++) {
          cm.inGameDirectionEvent_Monologue("#fs40#B - 7 F", 0);
        } else {
          if (status === r++) {
            cm.inGameDirectionEvent_Monologue("#fs20#在黑魔法师的影响下, 变得狂暴的猴子们正在攻击人类。", 0);
          } else {
            if (status === r++) {
              cm.inGameDirectionEvent_Monologue("啊, 那边有人受到了猴子的攻击, 看那边!", 1);
            } else {
              if (status === r++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 800, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === r++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 1200, -452, 2311);
                } else {
                  if (status === r++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2349);
                  } else {
                    if (status === r++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                    } else {
                      if (status === r++) {
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === r++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 800, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === r++) {
                            cm.inGameDirectionEvent_Monologue("赶走所有的猴子，救出那个人吧。我去打开通往下一层的门。", 0);
                          } else {
                            if (status === r++) {
                              cm.inGameDirectionEvent_Monologue("如果受伤的探险家死去的话, 你将无法进入下一层, 所以要注意。", 1);
                            } else {
                              if (status === r++) {
                                cm.askYesNo("#b（问问看要抓到多少才行吧？）#k", 3, 2540000);
                              } else {
                                if (status === r++) {
                                  cm.sendNormalTalk("按照猴子的特性，大概教训20只左右，它们就会改变攻击的方向。", 1, 2540000, false, true);
                                } else {
                                  if (status === r++) {
                                    cm.sendNormalTalk("左，右，左，右……如果还是不行就左右同时攻击。如果连同时攻击都没有用，那么它应该不会再折磨你和受伤的探险家了。", 1, 2540000, true, true);
                                  } else {
                                    if (status === r++) {
                                      cm.sendNormalTalk("#b......不过话说回来, 那个人还活着吧? #k", 17, 2540000, true, true);
                                    } else {
                                      if (status === r++) {
                                        cm.sendNormalTalk("否则的话, 你可能要返回到大厅中去了......", 1, 2540000, true, true);
                                      } else {
                                        if (status === r++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 800, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else if (status === r++) {
                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.curNodeEventEnd(true);
                                          cm.setStandAloneMode(false);
                                          startMap(d);
                                        } else {
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
function startMap(e) {
  cm.dispose();
  var V = cm.getMap().getPortal(1).getPosition();
  cm.onTeleport(1, cm.getPlayer().getId(), V.getX(), V.getY());
  e.setProperty("stage" + parseInt('07'), 'start');
  cm.getMap().getWeatherEffectNotice("从猴子手里保护受伤的探险家。", 147, 60000, 1);
  cm.fieldEffect_ScreenMsg("UI/UIWindowPL.img/HiddenCatch/StageImg/start");
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;