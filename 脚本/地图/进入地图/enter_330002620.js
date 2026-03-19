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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1610, -510);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(1530622, "oid=40343042", 1400, -500, 33, 1350, 1450, 1, true, false);
      cm.npc_SetSpecialAction("oid=40343042", 'summon', 0, 0);
      cm.npc_ChangeController(1530623, "oid=40343043", 1320, -500, 33, 1270, 1370, 1, true, false);
      cm.npc_SetSpecialAction("oid=40343043", 'summon', 0, 0);
      cm.npc_ChangeController(1530624, "oid=40343044", 1240, -500, 34, 1190, 1290, 0, true, false);
      cm.npc_SetSpecialAction("oid=40343044", "summon", 0, 0);
      cm.npc_ChangeController(1530625, "oid=40343045", 1160, -500, 34, 1110, 1210, 0, true, false);
      cm.npc_SetSpecialAction("oid=40343045", "summon", 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.sendNormalTalk_Bottom("那个布吉，最终还是逃走了啊。", 37, 1530622, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("反正也是个胆小鬼。", 37, 1530625, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("那个乐队也挺可怜的。为了个胆小鬼还那么努力练习。", 37, 1530624, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哈哈哈哈哈！胆小鬼！哈哈哈哈哈哈！", 37, 1530623, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom(" 那是什么意思？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=40343042", 1);
                      cm.npc_setForceFlip("oid=40343043", 1);
                      cm.inGameDirectionEvent_PushMoveInfo(0, 400, 1200, -500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1526);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("哼，我还以为是谁……就像我们说的那样啊。你们怎么找都找不到布吉那丫头，不就是因为她夹着尾巴逃跑了吗。", 37, 1530622, false, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(1530621, "oid=40346301", 900, -500, 34, 850, 950, 0, true, false);
                            cm.npc_SetSpecialAction("oid=40346301", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#没必要和这种没用的家伙废话，我们走吧。", 37, 1530621, false, true);
                              cm.effect_Voice("Voice2.img/Friends/CH6_08/1", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=40343042", 0);
                                  cm.npc_setForceFlip("oid=40343043", 0);
                                  cm.npc_SetForceMove("oid=40343042", -1, 1000, 120);
                                  cm.npc_SetForceMove("oid=40343043", -1, 1000, 120);
                                  cm.npc_SetForceMove("oid=40343044", -1, 1000, 120);
                                  cm.npc_SetForceMove("oid=40343045", -1, 1000, 120);
                                  cm.npc_SetForceMove("oid=40346301", 1, 300, 120);
                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face6#怎么，你有什么话要说吗？", 37, 1530621, false, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH6_08/2", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("(询问他们对布吉做了什么)", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face6#没什么，我只是和她说了实话。今天的演出将会成为你们所有人不愿再次想起的回忆。", 37, 1530621, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH6_08/3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你为什么要那么说？", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=40346301", -1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face6#你们为了什么学生时代的记忆这种无聊的理由就在这里妨碍我，我觉得这样很烦啊。和你们不同，对我来说，音乐就是我的梦想和现实。", 37, 1530621, false, true);
                                              cm.effect_Voice("Voice2.img/Friends/CH6_08/4", 100);
                                              cm.npc_LeaveField("oid=40343044");
                                              cm.npc_LeaveField("oid=40343045");
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=40346301", -1, 1000, 120);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                cm.npc_LeaveField("oid=40343043");
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("你说布吉逃跑了……？\r\n(先回待机室吧)", 57, 0, false, true);
                                                } else if (status === V++) {
                                                  cm.forceCompleteQuest(33520);
                                                  cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                  cm.dispose();
                                                  cm.warp(330000010, 8);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;