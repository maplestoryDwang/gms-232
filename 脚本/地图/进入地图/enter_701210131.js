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
      if (cm.getNumberFromQuestInfo(62016, "meet") > 0) {
        cm.getTopMsgFont("已经见到了樵夫。回到[秘密书库]去见狐狸妖怪吧。", 3, 20, 20, 0);
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9310584, "oid=6185239", -643, 318, 5, -693, -593, 0, true, false);
        cm.npc_SetSpecialAction("oid=6185239", "summon", 0, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 286);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
        cm.effect_Text(["#fn黑体##fs20#密林深处"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 550, 318);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 200, -543, 318);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(5458);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("(那个看上去像樵夫的人好像就是#p9310579#所说的男子。和他对话吧。)", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("嗨~哟~嗨~哟~今天也好好砍树吧~", 37, 9310584, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(1, 680);
                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你好，能不能找你问点事儿？", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=6185239", 1);
                                cm.npc_SetForceMove("oid=6185239", 1, 200, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=6185239", 0);
                                  cm.sendNormalTalk_Bottom("哦~你该不会是在这森林中迷路了吧？", 37, 9310584, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("有人非常想见你……不对，我是受人之托而来的。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你认识#p9310579#吧？她说她跟你关系非同一般，还拜托我把这封信给你。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("这封信是#p9310579#让你带来的？？", 37, 9310584, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer("letter", "Map/EffectCN.img/shaolin/letter", 0, 2500, 0, 0, 12, 4, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=6185239", "special", -1, 1);
                                              cm.fieldEffect_ProcessOnOffLayer("letter", '', 2, 1500, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 800, -343, 318);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("哎呀，好可怕！！！我拜托你，千万别告诉她我在这里！！", 37, 9310584, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("？？#p9310579#说和你是恋人关系啊。你到底有什么好怕的？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("居然说什么恋人！！人怎么能和#r妖怪#k相恋呢！她每天都来折磨我，所以我才躲到这深林里，好让她找不到我……这下可怎么办！", 37, 9310584, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("听#p9310579#说，你答应她，可以为她付出一切？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("我太害怕了，所以#b我答应她可以为她付出一切，只求她放我一条生路#k……可她居然知道了我的藏身之处。这下我该如何是好啊……", 37, 9310584, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("(#p9310579#好像陷入了自己的错觉之中……这可难办了)", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("请你不要害怕。我不会再让她找到你的。", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("我真的，真的拜托你了。呜呜，太可怕了……", 37, 9310584, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.updateInfoQuest(62016, "meet=1");
                                                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 980);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(7500);
                                                                        } else if (status === V++) {
                                                                          cm.getTopMsgFont("回到[秘密书库]去见狐狸妖怪吧。", 3, 20, 20, 0);
                                                                          cm.dispose();
                                                                          cm.warp(701210130, 2);
                                                                          cm.setNpcSpecialActionReset("oid=6185239");
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.npc_LeaveField("oid=6185239");
                                                                          cm.npc_LeaveField("oid=6185239");
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