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
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg0/0"], [0, 0, -105, 0, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.curNodeEventEnd(true);
      cm.sendNormalTalk("气氛有古怪，难道是我来迟了？", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("可是即使是达尔摩尔本人，也很难轻松突破赫里希安的防御膜啊，这是怎么回事？", 17, 0, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(30);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("显示赫里希安警戒的标志停止运作了。", 17, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 600, -600, 178);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.inGameDirectionEvent_AskAnswerTime(30);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(2638);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("从未闭上的守护石之眼也失去了光芒。", 17, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("赫里希安已经被占领了吗？防御膜怎么没有启动？", 17, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(2);
                          cm.curNodeEventEnd(true);
                          cm.npc_ChangeController(3000131, "oid=1053331", -390, 170, 1, -440, -340, 1, false, 0, false);
                          cm.npc_SetSpecialAction("oid=1053331", "summon", 0, 0);
                          cm.setSessionValue("magnus", "1053331");
                          cm.sendNormalTalk("狂龙战士，一切都太晚了。", 9, 3000131, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(0, 450, -600, 178);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("麦格纳斯！你怎么会在这里？赫里希安发生了什么事？", 17, 3000131, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(2);
                                cm.curNodeEventEnd(true);
                                cm.sendNormalTalk("现在那个不重要，达尔摩尔的军队不久前占领了赫里希安。", 9, 3000131, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=1053331", "fake", 0, 1);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/1"], [0, 0, -110, 0, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_MoveAction(2);
                                  cm.curNodeEventEnd(true);
                                  cm.npc_SetSpecialAction("oid=1053331", "fake", 0, 1);
                                  cm.sendNormalTalk("麦格纳斯！你受伤了吗？你和达尔摩尔的军队交战了？", 17, 3000131, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("我的模样很糟糕吧，真不想让你看见我这幅颓败的模样。你说的没错，事情正是你推测的那样。他们实在太厉害，我本是因为追求更强的力量才被驱逐的，可连我也抵挡不住他们。", 9, 3000131, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("达尔摩尔的军队是怎么侵入赫里希安的？他们用什么方法突破了防御膜？", 17, 3000131, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("我们内部有人叛变。趁着他们暂时清除了保护罩，那些幽灵就迅速侵入了赫里希安各处。", 9, 3000131, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("到底是谁干的……", 17, 3000131, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("那个人正是……我！！！", 9, 3000131, true, true);
                                          } else if (status === V++) {
                                            cm.npc_LeaveField("oid=1053331");
                                            cm.dispose();
                                            cm.warp(940002010, 0, false);
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