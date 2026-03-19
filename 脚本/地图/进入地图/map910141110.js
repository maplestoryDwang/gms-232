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
      cm.npc_ChangeController(1032202, "oid=217017", 403, -243, 5, 353, 453, 1, false, 0, false);
      cm.npc_ChangeController(2159465, "oid=217018", 67, -111, 30, 17, 117, 5, true, 0, false);
      cm.npc_ChangeController(2159440, "oid=217019", 152, -111, 30, 102, 202, 5, true, 0, false);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("拉尼娅又捡回来了奇怪的东西喵。", 5, 1032202, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("佩妮！再这么没礼貌的话，今天就不许吃晚饭。隐月是夜光法师的朋友，是我们家的客人。", 1, 2159465, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这分明是在虐待动物喵！", 5, 1032202, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("朋友？你说什么？你是我的朋友？我可记不起有你这样的朋友。", 5, 2159440, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你在说什么呢，夜光法师？在回家的路上，我从隐月那里听说了很多故事。他说几百年前夜光法师的性格和现在一模一样，所以一见到幻影就会吵架。", 1, 2159465, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("……你到底是谁？你接近拉尼娅到底是什么目的？快说。", 5, 2159440, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("你这是干嘛啊，夜光法师？隐月大老远地跑来见你……", 1, 2159465, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("别插嘴，拉尼娅。我没有那种朋友。我完全不认识他。", 5, 2159440, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("…………我好像交给你一个重担，所以我的心情也很不轻松。明知道留守的人本来就比较痛苦，但这件事除你之外没人能做，所以只能托付给你了。", 17, 2159465, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("虽然不知道你在耍什么花招，但你想用这种鬼话来骗我的话…………", 5, 2159440, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("也许我应该庆幸。至少不会让弗里德平生受到负罪感的折磨了。虽然并不是什么令人愉快的经历…………不，坦白说…………应该是无比糟糕的经历。", 17, 2159465, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("我没办法说再见面。这样的经历，两次就足够了。不过很庆幸你看上去还好。因为你现在要比我上次见到你时看上去幸福。", 17, 2159465, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(1);
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.sendNormalTalk("拉尼娅，虽然我还有很多故事没有讲给你听，但是我们以后可能没机会再见面了。还有……夜光法师就拜托你了。", 17, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("隐月……隐月！", 1, 2159465, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("拉尼娅！干嘛要跟出去？那个人不是我朋友。他是在骗我们。不能上当！", 5, 2159440, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("不，不是的，夜光法师。那个人认识你。如果是在说一个陌生人一定不会露出那种温暖的微笑的。也不可能向一个陌生人投出那种悲伤的目光。那…………那不可能。", 1, 2159465, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.forceStartQuest(38058, 'clear2');
                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                            cm.curNodeEventEnd(true);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.dispose();
                                            cm.warp(101000000, 0, false);
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