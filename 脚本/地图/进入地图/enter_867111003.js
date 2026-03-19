var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1012106, "oid=116518", 4802, -56, 5);
      cm.npc_ChangeController(1012003, "oid=116519", 4782, 454, 5);
      cm.npc_ChangeController(1012133, "oid=116520", 5022, -56, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=1543739", 5000, 446, 1);
      cm.npc_SetSpecialAction("oid=1543739", "summon");
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=1543739", -1, 50, 100);
        cm.inGameDirectionEvent_AskAnswerTime(2400);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("您好，长老！我正在寻找失踪的嘟嘟……", 9400031);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("您有没有见过一只巨大的青蛙？", 9400031);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("我现在有很多烦心的事情要忙，你下次再来吧。", 1012003);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("#face1#那个……你只要告诉我有没有见过青蛙就行……", 9400031);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC_Bottom("真是的，我都说了现在我很忙了。不然……你来帮我解决一点问题吧？", 1012003);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("好的，我来帮您吧，不管是什么事情我会帮助您的，长老！", 9400031);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom("既然你这么积极……那我就拜托你一点事情吧。", 1012003);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom("最近经常有村民抱怨怪物变得十分凶残。", 1012003);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("虽然怪物本来就有攻击性……但是再这么下去，游客和村民都会受到伤害。", 1012003);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom("既然你说要帮忙，那就拜托你一下。你能去村子外面，看看怪物们", 1012003);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("究竟发生了什么变化吗？", 1012003);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC_Bottom("#face2#当然了！我马上就去！", 9400031);
                              } else {
                                if (status === V++) {
                                  cm.sendNextNoESC_Bottom("你不要太勉强了，尽力而为就行。你可别在阴沟里翻船啊！", 1012003);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextSNoESC_Bottom("嗯，这次要消灭怪物才能进入下个阶段啊。");
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else if (status === V++) {
                                        cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                        cm.setInGameDirectionMode(false, false, false);
                                        cm.setStandAloneMode(false);
                                        cm.npc_LeaveField("oid=1543739");
                                        cm.dispose();
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;