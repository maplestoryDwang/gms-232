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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 700, 20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2155104, "oid=42524983", 780, 0, 17, 730, 830, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=42524983", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("呼，我现在还记得。\r\n现在你应该知道一切了吧？", 37, 2155104, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#那我就以朋友的身份拜托你。\r\n这一切千万别跟任何人说啊。", 37, 2155121, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#如果有人…知道自爆，或者超级人造人的事情，\r\n不知道会对她做出什么…\r\n我一定要不断返回她身边，拜托你了，拜托！", 37, 2155121, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#嗯？为了以防万一，让#b独眼爷爷和其他机器人\r\n离开机械坟墓，到其他地方生活不就好了吗？#k\r\n我自己留在这里就行了…", 37, 2155121, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('…', 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#……哈啊。反正如果没有你，我是不会走到这一步的…\r\n嗯，无论你怎么说…我也不能阻拦。", 37, 2155121, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#我会尊重你的一切选择。\r\n感谢你这段时间给我的帮助。感谢你为了我这样的机器人，\r\n付出了这么多努力，朋友。", 37, 2155121, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("给，这是我这段时间在村庄做事的时候搜集的物品。\r\n爷爷的那一份我已经留出来了。\r\n这全部都是你的。虽然这些远不能与你为我做的事相比…", 37, 2155104, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#不过，请你转告爷爷，让它一定要远离这里…\r\n这个也请你#fs15#收… #fs14#下… #fs13#朋…… #fs12#友………", 37, 2155121, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2500, 500, 710, 60);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=42524983", "turnoff", -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=42524983", "off", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("该死！", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=42524983");
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42524983"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("嗯…这里是哪里？\r\n嗯？你是谁？\r\n不过…我是谁？", 37, 2155104, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                        } else if (status === V++) {
                                          cm.forceStartQuest(39209, '');
                                          cm.eventSKill(0);
                                          cm.warp(310070000, 4, false);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.npc_LeaveField("oid=42524983");
                                          cm.npc_LeaveField("oid=42524983");
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