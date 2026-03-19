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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=1656762", 1354, 1920, 0);
      cm.npc_SetSpecialAction("oid=1656762", "summon");
      cm.npc_ChangeController(9400032, "oid=1656763", 1270, 1920, 0);
      cm.npc_SetSpecialAction("oid=1656763", 'summon');
      cm.npc_ChangeController(9400033, "oid=1656764", 1140, 1920, 0);
      cm.npc_SetSpecialAction("oid=1656764", "summon");
      cm.npc_ChangeController(9400034, "oid=1656765", 1500, 1920, 1);
      cm.npc_SetSpecialAction("oid=1656765", "summon");
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushMoveInfo(0, 0, 1300, 1890);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1300, 1980);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
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
                  cm.sendNextNoESC_Bottom("别那么叫我……我的名字叫“杰特”。", 9400034);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("#face2#代号杰特！太帅了！我叫代号BT，这边是代号剑斗和代号神那！", 9400031);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom("#face2#还有帮助我们的代号#h0#！我们是冒险岛侦探团！现在代号杰特也和我们一起了！", 9400031);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=1656765"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("#face0#不不，叫我的名字就行了……不要给我加上奇怪的称号……", 9400034);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom("#face1#我就说这个侦探团什么的很奇怪啊……", 9400032);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("所以，你要帮我们吗？请你快点决定吧，我们也有很多事情要做啊。", 9400032);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC_Bottom("知道了！你们的动物既然消失了，那你们肯定会非常努力的。", 9400034);
                              } else {
                                if (status === V++) {
                                  cm.sendNextNoESC_Bottom("但是！我帮你们的条件是不分给你们赏金。", 9400034);
                                } else {
                                  if (status === V++) {
                                    cm.sendNextNoESC_Bottom("你们找到动物之后就乖乖回去，知道了吗？", 9400034);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextNoESC_Bottom("哼，我们本来就对那种东西没兴趣。", 9400032);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextNoESC_Bottom("#face2#话说回来，请你告诉我们更多关于那些敌人的消息吧，代号杰特！", 9400031);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextNoESC_Bottom("好，我们来听一下报告吧！", 9400031);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextNoESC_Bottom("#face1#真是些……放肆的家伙……算了，我告诉你们吧。", 9400034);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextNoESC_Bottom("你们知道我为什么要在勇士部落等APORD吗？因为我的高级情报员说APORD盯上了这附近的动物。", 9400034);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextNoESC_Bottom("高级情报员？", 9400033);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextNoESC_Bottom("嗯，有一个背叛了APORD的人一直在给我提供情报。但是，那家伙很贪心，每次只会给我这么点情报。", 9400034);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNextNoESC_Bottom("如果要从他那里获得更多情报，那就得给他更多的东西。", 9400034);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNextNoESC_Bottom("但是，我现在手上的钱不够了，所以就只能对你们进行一下试验了。", 9400034);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNextNoESC_Bottom("你是说抓住怪物，带来战利品……吗？", 9400031);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNextNoESC_Bottom("咳，别说得这么明显嘛，这不就让我显得太俗气了嘛~", 9400034);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNextNoESC_Bottom("反正那个情报对我们来说也很重要，我们就帮你一下吧。", 9400031);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNextNoESC_Bottom("好，那我就在这里等着，说不定APORD会来购买动物。", 9400034);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                              } else if (status === V++) {
                                                                cm.forceStartQuest(59719, '');
                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                                                cm.setInGameDirectionMode(false, false, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.npc_LeaveField("oid=1656762");
                                                                cm.npc_LeaveField("oid=1656763");
                                                                cm.npc_LeaveField("oid=1656764");
                                                                cm.npc_LeaveField("oid=1656765");
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