var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -300, 180);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1);
    } else {
      if (status === v++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#任命仪式马上就要开始了。", 36, 3004433, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom('任命谁啊？', 56, 0, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#教团即将正式任命塞伦卿为#b圣剑之主#k。", 36, 3004433, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#我知道战后重建的任务相当繁重，但还是希望能尽快任命完毕。", 36, 3004433, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#等伊黛娜一来，我们就开工吧。", 36, 3004433, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("这样啊，伊黛娜在哪里呢？", 56, 0, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#在图书馆。可能是觉得图书馆因自己被烧毁了，才对艾伦感到抱歉吧。", 36, 3004433, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("嗯……也对，毕竟那么多的书全被一把火烧掉了……", 56, 0, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#对了，她好像对#h0 #你很是生气。", 36, 3004433, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("伊黛娜吗？为、为什么？", 56, 0, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#听说开战之时，你无视伊黛娜的警告，直接跑向了塞伦？", 36, 3004433, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#她大发雷霆地说如果当时#r觉醒的太阳神#k攻击的不是闪电使徒而是#h0 #的话，后果会如何严重。", 36, 3004433, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("啊……嗯……", 56, 0, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#所幸当时塞伦的意志坚定，似乎控制得很好……", 36, 3004433, true, true);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#那个，不用在意，只要结果好就行。", 36, 3004433, true, true);
                                      } else {
                                        if (status === v++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === v++) {
                                          cm.eventSKill(0);
                                          cm.warp(993151028, 0, false);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.setStandAloneMode(false);
                                          cm.npc_LeaveField("oid=63706617");
                                          cm.npc_LeaveField("oid=63706617");
                                          cm.npc_LeaveField("oid=63706618");
                                          cm.npc_LeaveField("oid=63706618");
                                          cm.npc_LeaveField("oid=63706619");
                                          cm.npc_LeaveField("oid=63706619");
                                          cm.npc_LeaveField("oid=63706620");
                                          cm.npc_LeaveField("oid=63706620");
                                          cm.npc_LeaveField("oid=63706621");
                                          cm.npc_LeaveField("oid=63706621");
                                          cm.npc_LeaveField("oid=63706622");
                                          cm.npc_LeaveField("oid=63706622");
                                          cm.npc_LeaveField("oid=63706623");
                                          cm.npc_LeaveField("oid=63706623");
                                          cm.npc_LeaveField("oid=63706624");
                                          cm.npc_LeaveField("oid=63706624");
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face1#我没脸见你，#h0 #……", 36, 3004433, true, true);
    } else {
      if (status == v++) {
        cm.sendNormalTalk_Bottom("#face1#这个结果只会给所有人造成伤害，\r\n这一切都要怪我……", 36, 3004433, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("……别放在心上。我们都知道这不是你的错。", 56, 0, true, true);
        } else {
          if (status == v++) {
            cm.sendNormalTalk_Bottom("#face1#可我依然认为有希望，\r\n联盟的辛劳和#h0 #的牺牲一定不会是白忙一场。", 36, 3004433, true, true);
          } else {
            if (status == v++) {
              cm.sendNormalTalk_Bottom("#face1#我要代表塞尔提乌向你表示感谢，\r\n谢谢你，#h0 #……", 36, 3004433, true, true);
            } else {
              if (status == v++) {
                cm.sendNormalTalk_Bottom("#face0#这个给你。\r\n#b（#i1143219##z1143219#）", 37, 3004433, false, true);
              } else if (status == v++) {
                cm.gainItem(1143219, 1);
                cm.gainExp(36 * Math.pow(cm.getLevel(), 3));
                cm.forceCompleteQuest();
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}