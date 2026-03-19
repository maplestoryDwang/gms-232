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
      cm.npc_ChangeController(9401118, "oid=7133170", -2800, 3300, 14, -2850, -2750, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=7133170", "summon", 0, 0);
      cm.npc_ChangeController(9401116, "oid=7133171", -3060, 3300, 19, -3110, -3010, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=7133171", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 500, -2400, 3400);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -2900, 3400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(200, 0, 1000, 2147483647, 2147483647, 2147483647);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这里就是#b中央控制室#k。\r\n克拉尼亚，拜托了……快点阻止#b赛恩#k吧。", 36, 9401071, 0, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你也清楚的看到了……这里发生了多么可怕的事情。\r\n那些家伙迟早会到阿特利埃外面。", 36, 9401071, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你不是曾经说过要帮助人类吗？\r\n那些#b杀人兵器#k会把冒险岛变成一片废墟的。", 56, 0, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("克拉尼亚，你也不想那样……对吗……", 36, 9401071, 1, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我也没办法……\r\n就像你们说的那样，这些也#b不是我有意为之的#k。", 36, 9401087, 1, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=7133170", 1);
                              cm.npc_SetForceMove("oid=7133170", 1, 300, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(6200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/Ambience.img/flare_ready", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("怎么了？赛恩是不是停止了？", 56, 0, 0, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("不……是警报系统响了……！\r\n克拉尼亚，你……！该不会骗了我们？！", 36, 9401071, 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=7133170", -1);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("拜托，我心肠哪儿有那么歹毒。\r\n我已经输入了#b停止#k指令，系统已经许可了。", 36, 9401087, 0, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('但怎么会这样……', 56, 0, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.userSetFieldFloating(867142008, 4, 4, 10);
                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                            } else {
                                              if (status === V++) {
                                                cm.userSetFieldFloating(867142008, 0, 0, 0);
                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  cm.effect_NormalSpeechBalloon("???", 1, 0, 1, 1500, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.warp(867142009, 0, false);
                                                        cm.eventSKill(0);
                                                        cm.npc_LeaveField("oid=7133170");
                                                        cm.npc_LeaveField("oid=7133171");
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