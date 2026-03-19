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
      if (!cm.isQuestActive(59061)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390387, "oid=2606748", -1050, 700, 22, -1100, -1000, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2606748", "summon", 0, 0);
      cm.npc_ChangeController(9390386, "oid=2606749", -1000, 700, 22, -1050, -950, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2606749", "summon", 0, 0);
      cm.npc_ChangeController(9390385, "oid=2606750", -950, 700, 22, -1000, -900, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2606750", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(3500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=2606748", "move", 0, 1);
        cm.npc_SetSpecialAction("oid=2606749", "move", 0, 1);
        cm.npc_SetSpecialAction("oid=2606750", "move", 0, 1);
        cm.npc_SetForceMove("oid=2606748", 1, 390, 100);
        cm.npc_SetForceMove("oid=2606749", 1, 390, 100);
        cm.npc_SetForceMove("oid=2606750", 1, 390, 100);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/BalloonMsg1/1"], [2000, 0, -150, 1, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(6600);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=2606748", 'stand', 0, 1);
            cm.npc_SetSpecialAction("oid=2606749", "stand", 0, 1);
            cm.npc_SetSpecialAction("oid=2606750", "stand", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("那个小鬼!这里是金银岛吗?!", 1, 9390336, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("啊？嗯…这里不是金银岛，是亚伯兰。", 3, 9390336, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("亚伯兰？第一次听说啊？还有这种地方吗？", 1, 9390336, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("我似乎在哪里听说过，难道不是只存在于传说中的地方吗？", 1, 9390338, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("那里究竟是靠近哪儿啊？", 1, 9390336, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("那不就是这里嘛。", 1, 9390338, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("所以我问这里是哪里啊！", 1, 9390336, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk('我们眼前的这里是……', 1, 9390338, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("哎哎，你真吵，笨蛋！反正不是金银岛不是吗！", 1, 9390336, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("我不是说过吗…这里不是…", 1, 9390338, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk('那为何不早说!!', 1, 9390337, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("哼！！受不了这些笨蛋！！！", 1, 9390336, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("那个…你们是要去金银岛吗？哇~我也正好想去那里！一起去肯定很开心，不是吗？", 3, 9390336, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("...", 1, 9390336, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("好吧!虽然我们是雷电!……啊,不对,虽然我们只是寻宝猎人,但是这次就帮你好了。谁让我这么美丽呢,呵呵呵。", 1, 9390336, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("若想坐我的船,那就稍后再说吧。我们还有事要聊一聊呢。", 1, 9390336, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("(你这小鬼,长得这么傻乎乎的,看似蛮有利用价值的嘛?呵呵……)", 1, 9390336, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2606748", "special1", 0, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.npc_LeaveField("oid=2606748");
                                                cm.npc_LeaveField("oid=2606749");
                                                cm.npc_LeaveField("oid=2606750");
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.setStandAloneMode(false);
                                                cm.forceCompleteQuest(59061);
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