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
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111007, "oid=8492262", 1049, -250, 29, 999, 1099, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=8492262", "summon", 0, 0);
        cm.npc_ChangeController(9111006, "oid=8492263", 1248, -235, 19, 1198, 1298, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=8492263", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("泉奈……你能不能重新考虑下做我的同伴呀？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#不好意思，勇士，既然我已经拒绝过你，就不会再考虑了。", 37, 9111007, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#等等！泉奈！！你看这个！！", 37, 9111006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("暗……？（难不成他又搞人气投票了……）", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#这是什么……？", 37, 9111007, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#嘿嘿，你不记得啦？我们小时候不是在狐狸山的岩石下面埋了信吗。", 37, 9111006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#我想你听到那时写的东西会很开心的，来，我读给你听。", 37, 9111006, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("亲爱的泉奈：", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("泉奈，虽然有时候你跟我发脾气的时候真的很吓人，", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("但我还是很喜欢你哦。", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("你生气的模样也很漂亮呢。", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("我愿意每天每天听你发脾气，", 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("等咱俩长大了，你嫁给我好吗？", 1);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#怎么样！！！泉奈！！现在不生气了吧！！！！！！？", 37, 9111006, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#你……你信里写的是这样的内容？所以咧，现在要向我求婚吗？", 37, 9111007, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#不不……那倒不是……我只是想说，我从小就喜欢你，现在也喜欢依然刁蛮的你。", 37, 9111006, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#泉奈不用跟谁比，你只要做你自己就很美。嘿嘿……", 37, 9111006, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#…………。把信给我。既然是写给我的，那我拿走啦。", 37, 9111007, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#你消气啦？不生气了哦？那你答应跟我们成为同伴咯？", 37, 9111006, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#……切……我不管啦。随你们便。我还有事，先走了。", 37, 9111007, true, true);
                                                  } else if (status === V++) {
                                                    cm.warp(800000000, 5, false);
                                                    cm.npc_LeaveField("oid=8492262");
                                                    cm.npc_LeaveField("oid=8492262");
                                                    cm.npc_LeaveField("oid=8492263");
                                                    cm.npc_LeaveField("oid=8492263");
                                                    cm.addNumberForQuestInfo(58711, '7', 3);
                                                    cm.forceCompleteQuest(58817);
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
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