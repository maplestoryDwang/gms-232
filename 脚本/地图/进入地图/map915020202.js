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
      cm.npc_ChangeController(2159463, "oid=227928", -37, 120, 5, -87, 13, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.sendNormalTalk("挺厉害的嘛？你很有资格觊觎我幻影的秘密仓库。不过，小毛孩，现在开始我就不对你手下留情了。我要跟你正式较量一番…………", 5, 2159463, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("玩笑就到此为止吧。这么久没见，竟然一上来就不由分说地动起手来，玩笑开得过火了吧。", 17, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("胡说八道什么？你认识我吗？", 5, 2159463, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("继续在这儿大打出手的话，没准会破坏阿莉亚的肖像画。你不是为了藏好它才不让外人进入的吗？我知道被发现了让你很郁闷，不过开这样的玩笑很没劲。", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("…………你是谁。你是怎么知道阿莉亚的？", 5, 2159463, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("玩笑开得太过分了，幻影。住手吧。已经经历了战神时期，如果失忆的话可是一件非常糟糕的事情。", 17, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("竟然连战神都知道。你到底是谁？难道是黑魔法师派来的？", 5, 2159463, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……？！", 17, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("(那样的目光、表情，肯定不是在开玩笑。失忆？不会的。既然记得阿莉亚和战神，肯定不会是失忆的。那么就只是忘记我了？难道是局部性失忆？如果那样的话为什么偏偏是忘记我呢？)", 17, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我问你是谁。你要是再不表明身份的话我就不客气了。只能使用暴力让你说实话了！", 5, 2159463, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("等等…………等等！好像有什么不对劲。怎么回事…………", 17, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("有什么不对？哼，现在开始知道害怕了？", 5, 2159463, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("下次再来吧。现在我必须先去确认一件事。必须查出到底是从哪儿开始出的错。", 17, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.sendNormalTalk("喂，喂！你想去哪儿！还不马上给我回来？喂！", 5, 2159463, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("但愿是你的恶作剧。否则的话…………不，我现在不敢去想其他的可能。再见吧。", 17, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_SetHideEffect(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("你到底在说什么？留下一些莫名其妙的话就想走吗？你这家伙，到底是什么人？", 5, 2159463, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.updateInfoQuest(38055, '');
                                            cm.forceStartQuest(38055, '');
                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.dispose();
                                            cm.warp(104020000, 0, false);
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