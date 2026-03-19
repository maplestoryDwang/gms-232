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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401125, "oid=39295386", -740, -340, 25, -790, -690, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39295386", "summon", 0, 0);
      cm.npc_ChangeController(9401126, "oid=39295387", -680, -340, 25, -730, -630, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39295387", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("呜，呜哇啊啊！！！", 37, 9401032, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=39295387", 1, 100, 100);
            cm.sendNormalTalk_Bottom("太，太漂亮了吧！美丽到刺眼就是用来形容这种景象的吧！额哈哈", 37, 9401032, false, true);
          } else {
            if (status === V++) {
              cm.sendNewEffects(12, [3000, 360, -80, 0, 0]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("尽管我想永远记住这个惊人的美景，但它过于华丽，实在是无法一下装进我的眼睛里，真的…… ", 37, 9401032, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("呵啊啊啊～～没有闭嘴呢。", 37, 9401032, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b是啊，真是一代绝景。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("没错！我怎么就是想不出那种词汇呢。", 37, 9401032, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b米西蒂的表现更酷。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……你真的……好像很喜欢这件事。", 37, 9401031, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('我？这还用说吗。', 37, 9401032, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("如此超乎想象的美景，拥有着世间少有的纯洁，让人怎么能忍住不去冒险呢？", 37, 9401032, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("话说～冒险家这个职业，赚钱超级多吧？嘿嘿。", 37, 9401032, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("……是啊。", 37, 9401031, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("好帅啊，好帅！我们一路经历的艰难困苦仿佛雪融化了一般消失了。我感觉自己充满了力量，呃哈哈！", 37, 9401032, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("…… 噗", 37, 9401031, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b那就再下去看看吧？", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("好的，队长！请您带路！", 37, 9401032, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.eventSKill(0);
                                              cm.forceCompleteQuest(64786);
                                              cm.dispose();
                                              cm.setNumberForQuestInfo(64789, "map", 867148400);
                                              var O = cm.getEventManager("深渊远征队");
                                              O.startInstance(cm.getPlayer());
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.npc_LeaveField("oid=39295386");
                                              cm.npc_LeaveField("oid=39295386");
                                              cm.npc_LeaveField("oid=39295387");
                                              cm.npc_LeaveField("oid=39295387");
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