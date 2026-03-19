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
      cm.npc_ChangeController(1530425, "oid=30323", 1340, 62, 3, 1290, 1390, 1, false, false);
      cm.npc_ChangeController(1530700, "oid=30324", 1042, 62, 3, 992, 1092, 1, true, false);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 180, 18);
      cm.npc_ChangeController(1530651, "oid=39933688", 520, -48, 2, 470, 570, 0, true, false);
      cm.npc_SetSpecialAction("oid=39933688", "summon", 0, 0);
      cm.npc_ChangeController(1530616, "oid=39933689", 700, 47, 2, 650, 750, 1, true, false);
      cm.npc_SetSpecialAction("oid=39933689", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(10, 2000, 10, 620, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你应该知道我们的实力吧？最后装饰庆典的将是我们乐队。", 37, 1530621, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#演出的顺序是通过抽签决定的。", 37, 1530070, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#哼，真是可笑。你明明知道没有其他乐队参加。大家是不是都夹着尾巴逃走了？", 37, 1530621, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('不，正好有一个。', 37, 1530070, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你是说乌合之众的乐队？无所谓。因为最终的结果已经很明显了。", 37, 1530621, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=39933688", -1, 200, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 300, 30);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#哼。", 37, 1530621, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=39933688", -1, 200, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=39933688");
                                  cm.npc_LeaveField("oid=39933688");
                                  cm.sendNormalTalk_Bottom('啊，戴米安大人！！', 37, 1530637, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("尖叫！！", 37, 1530638, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=39933689", -1, 350, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你来了啊，有什么事吗？", 37, 1530070, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("(询问关于戴米安的事情。)", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#据说，他在全国几十所学校都干了这样的事情。这种事我还是第一次听说呢……", 37, 1530070, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("(难道不应该有人阻止他吗？)", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#为什么呢？又不是暴力，而是音乐。没有理由去阻止啊。", 37, 1530070, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我只是遵守规定。如果你想阻止他，#h0#，只要你们的乐队在演出中赢了他不就行了。", 37, 1530070, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("反正，屁……用屁股写名字……？你们用那个打赌了吧？大家都不是小学生了，到底是谁想出了这么幼稚的主意？", 37, 1530070, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("总之，是你们把事情弄大的。我先说好，我会按照规矩行事的。", 37, 1530070, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=39933689", -1, 350, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                      } else if (status === V++) {
                                                        cm.updateInfoQuest(33509, 'enter=1');
                                                        cm.dispose();
                                                        cm.warp(330000800, 0);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;