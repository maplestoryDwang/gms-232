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
        cm.npc_ChangeController(3000103, "oid=1053575", -1400, 0, 2, -1450, -1350, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053575", "summon", 0, 0);
        cm.npc_ChangeController(3000104, "oid=1053576", -1650, 0, 7, -1700, -1600, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053576", 'summon', 0, 0);
        cm.sendNormalTalk("嗯，天气真好！", 1, 3000103, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你也太清闲了。我和#h0#已经成为骑士团团员了，你打算什么时候加入骑士团？", 1, 3000104, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("嘿嘿，我嘛，没有魔力，就不提这些咯。说真的，也许将来我也会有魔力吧？", 1, 3000103, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这话你都说了上百遍了额？", 1, 3000104, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("总之祝贺你们俩！骑士团团员~啊~我也好想当呢！", 1, 3000103, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我觉得迪奥不一定非得成为骑士团团员啊？", 17, 3000103, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("这是什么话！我们结成赫里希安攻击队时，不是发誓要三个人一起成为骑士团团员的吗！", 1, 3000103, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("那时候没想到你会一直没有魔力啊。", 1, 3000104, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("哼，你又哪壶不开提哪壶！", 1, 3000103, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("好了好了，当我没说。我说，我们是不是该准备归队了？", 1, 3000104, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("呜呜，真心羡慕死你们了。", 1, 3000103, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("嗯？我忽然有种不好的预感。", 17, 3000103, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("胡说什么？快回去吧。再耽搁得迟了。", 1, 3000104, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("不是的……肯定有事。东侧圣殿好像出事了。", 17, 3000104, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("去看看吧！会是什么事呢？？", 1, 3000103, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("喂……迪奥。你要相信他胡诌的话吗？", 1, 3000104, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#h0#的第六感不是很厉害嘛，而且我正好闲着无聊。", 1, 3000103, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("总之我这队长说话就没人肯听的。好吧，一起去吧。", 1, 3000104, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=1053575", 1, 400, 100);
                                              cm.npc_SetForceMove("oid=1053576", 1, 400, 100);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/tuto/BalloonMsg0/3", "oid=1053575"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else if (status === V++) {
                                              cm.inGameDirectionEvent_MoveAction(2);
                                              cm.npc_LeaveField("oid=1053575");
                                              cm.npc_LeaveField("oid=1053576");
                                              cm.dispose();
                                              cm.warp(940001210, 0, false);
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