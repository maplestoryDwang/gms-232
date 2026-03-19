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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000140, "oid=2592496", -1400, 0, 2, -1450, -1350, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2592496", "summon", 0, 0);
        cm.npc_ChangeController(3000104, "oid=2592497", -1650, 0, 7, -1700, -1600, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2592497", "summon", 0, 0);
        cm.sendNormalTalk("嗯，天气真好！", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你也太清闲了。我和卡伊尔已经成为骑士团团员了，你打算什么时候加入骑士团？", 1, 3000104, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("嘿嘿，我嘛，没有魔力，就不提这些咯。说真的，也许将来我也会有魔力吧？", 17, 3000104, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这话你都说了上百遍了额？", 1, 3000104, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("总之祝贺你们俩！骑士团团员~啊~我也好想当呢！", 17, 3000104, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我觉得#h #不一定非得成为骑士团团员啊？", 1, 3000140, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("这是什么话！我们结成赫里希安攻击队时，不是发誓要三个人一起成为骑士团团员的吗！", 17, 3000140, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("那时候没想到你会一直没有魔力啊。", 1, 3000104, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("哼，你又哪壶不开提哪壶！", 17, 3000104, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("好了好了，当我没说。我说，我们是不是该准备归队了？", 1, 3000104, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("呜呜，真心羡慕死你们了。", 17, 3000104, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0", "oid=2592496"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("嗯？我忽然有种不好的预感。", 1, 3000140, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("胡说什么？快回去吧。再耽搁得迟了。", 1, 3000104, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("不是的……肯定有事。东侧圣殿好像出事了。", 1, 3000140, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("去看看吧！会是什么事呢？？", 17, 3000140, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("喂……#h0#。你要相信他胡诌的话吗？", 1, 3000104, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("卡伊尔的第六感不是很厉害嘛，而且我正好闲着无聊。", 17, 3000104, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("总之我这队长说话就没人肯听的。好吧，一起去吧。", 1, 3000104, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=2592496", 1, 400, 100);
                                              cm.npc_SetForceMove("oid=2592497", 1, 400, 100);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg0/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else if (status === V++) {
                                              cm.inGameDirectionEvent_MoveAction(2);
                                              cm.forceCompleteQuest(63500);
                                              cm.gainItem(2450130, 1);
                                              cm.gainItem(2450130, 1);
                                              cm.gainItem(2450130, 1);
                                              cm.gainItem(2450130, 1);
                                              cm.gainItem(2450130, 1);
                                              cm.gainItem(2450130, 1);
                                              cm.gainItem(2450130, 1);
                                              cm.npc_LeaveField("oid=2592496");
                                              cm.npc_LeaveField("oid=2592497");
                                              cm.dispose();
                                              cm.warp(940011030, 0, false);
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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