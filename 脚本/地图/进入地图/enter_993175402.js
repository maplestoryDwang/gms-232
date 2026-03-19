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
      cm.forceStartQuest(100438, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.curNodeEventEnd(true);
      cm.npc_ChangeController(9062256, "oid=13964709", 117, 117, 87, 67, 167, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=13964709", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#啊，原来是#b#h0##k。\r\n您有什么事吗？", 36, 9062256, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我见到了#b客房1#k的#b可怕的假面#k。\r\n可是根据新闻报道，他已经是一个#b死人#k了。", 56, 0, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这是怎么回事？明明我们还能正常对话……", 56, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……", 36, 9062256, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("难道……", 56, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##b#h0##k，您相信幽灵吗？", 36, 9062256, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                          cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.sendNormalTalk_Bottom("原来你都知道。", 56, 0, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#每年万圣节，这个宅子都会举行#b假面舞会#k。", 36, 9062256, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#但是，这并不是一个#b普通的派对#k。", 36, 9062256, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#受到邀请的客人，全部是#b死去的人#k。", 36, 9062256, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('你的意思是……', 56, 0, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#在这个宅子里，只有#b#h0##k你是活着的。", 36, 9062256, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("那么……为什么邀请我参加死者的舞会呢？\r\n应该是发错邀请了。", 56, 0, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#果然……#b#h0##k即使知道这个地方是#b只有死者才会来的地方#k，也没有逃走。", 36, 9062256, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('嗯？', 56, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#还违背了不能出房间的#b嘱托#k。", 36, 9062256, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('不，那是因为……', 56, 0, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#看来并没有错发邀请函。请你到#b没有主人的房间#k去吧。", 36, 9062256, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b没有主人的房间#k？", 56, 0, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#这间房一度是这间宅子里#b最华丽的房间#k，\r\n但是因为现在没有了主人，所以就这样叫了。\r\n去那里的话，你就能听到#b你所好奇的问题的答案#k。", 36, 9062256, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("但是，请等一等，你说这间宅子里只有我一个人是活着的，那你和管家也……？", 56, 0, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#哈哈……你要不要来一杯爽口的南瓜汁？", 36, 9062256, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.npc_LeaveField("oid=13964709");
                                                                cm.dispose();
                                                                cm.warp(993175400, 0, false);
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