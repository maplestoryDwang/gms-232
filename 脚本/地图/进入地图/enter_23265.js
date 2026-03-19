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
      cm.npc_ChangeController(2153006, "oid=1006848", 630, -25, 5, 580, 680, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1006848", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk("现在我要打开沙漏，把沙撒在身上，然后念诵咒语。", 1, 2153006, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/story/balloonMsg0/2", "oid=1006848"], [2000, 0, -100, 1, 0, 1, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.npc_LeaveField("oid=1006848");
          cm.npc_ChangeController(2159334, "oid=1006849", 630, -25, 5, 580, 680, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=1006849", "summon", 0, 0);
          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/6", "oid=1006849"], [800, 0, 0, 1, 0, 1, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(800);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这次我的样子变了，对吧？", 1, 2159334, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b祝贺你。这次好像成功了。#k", 3, 2159334, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("哇！！成功了！终于成功了！！", 1, 2159334, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b看到那个样子，让我想起了过去的事。#k", 3, 2159334, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("嗯……#h0#，其实我一直有句话想跟你说。", 1, 2159334, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#h0#，从你一开始救我的时候，我就一直在想……", 1, 2159334, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk('#b？？？#k', 3, 2159334, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#h0#，没想到……", 1, 2159334, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=1006849");
                            cm.npc_ChangeController(2153006, "oid=1006892", 630, -25, 5, 580, 680, 1, false, 0, false);
                            cm.npc_SetSpecialAction("oid=1006892", "summon", 0, 0);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/6", "oid=1006892"], [800, 0, 0, 1, 0, 1, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(800);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#b？？？#k", 3, 2159334, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#b？？？？你又变回原来的样子了。请继续说。#k", 3, 2153006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10", "oid=1006892"], [2000, 0, -100, 1, 0, 1, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("哈……哈哈哈……没想到会有孩子喜欢你，可爱的小孩子。", 1, 2153006, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#b原来是这样啊。如果是过去的我，孩子们应该不会喜欢。我也变了吗？#k", 3, 2153006, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("那……那我们回去吧？今天的实验很成功。虽然持续的时间有点短……", 1, 2153006, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.npc_LeaveField("oid=1006892");
                                          cm.setStandAloneMode(false);
                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.dispose();
                                          cm.warp(310010000, 0, false);
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