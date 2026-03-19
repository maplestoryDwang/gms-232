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
      cm.teachSkill(60001229, 1, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(3000107, "oid=1053289", -600, 20, 3, -650, -550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1053289", 'summon', 0, 0);
      cm.npc_ChangeController(3000106, "oid=1053290", 500, 20, 3, 450, 550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1053290", "summon", 0, 0);
      cm.sendNormalTalk('糟糕了！！', 1, 3000107, true, true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(30);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 300, -400, 27);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2501);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/tuto/BalloonMsg1/0", "oid=1053289"], [7000, 0, -150, 1, 0, 1, 0, 0, 0]);
                cm.npc_SetForceMove("oid=1053289", 1, 600, 100);
                cm.inGameDirectionEvent_PushMoveInfo(1, 100, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(8176);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("平民翼人的首都沦陷了！", 1, 3000107, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("(达尔摩尔终于惹出事端了……)", 3, 3000107, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("现在格兰蒂斯里几乎没有任何势力能抵抗达尔摩尔了。", 1, 3000106, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("还剩下阿尼玛族……", 1, 3000107, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("阿尼玛族和我们一样，原本就不是太大的势力。加上他们本性亲善，只要不受到攻击，绝对不会想要主动对抗达尔摩尔的。", 3, 3000107, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk('这么说来现在……', 1, 3000107, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("没错，达尔摩尔下一个攻击目标就是我们的首都赫里希安。我这就前往赫里希安，准备抵抗达尔摩尔的侵略。", 3, 3000107, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我们有没有什么办法打败达尔摩尔？现在的达尔摩尔拥有能和神一较高下的力量，连时间之超越者克洛尼卡都被他打败，还被夺去了力量。", 1, 3000106, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(2);
                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(0);
                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("赫里希安的防御膜还算坚固，达尔摩尔没那么容易攻进来，只守不攻应该没太大问题。虽然力量的差异显著，但绝对不能放弃希望。", 17, 3000106, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(1);
                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("卡塔利安，请你留在这里进行防守。", 3, 3000106, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("比起留在这里干着急，我更愿意出去战斗。我也是堂堂的诺巴战士啊。", 1, 3000107, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("为了以防万一，万神殿里也得建立防御膜。另外，建成后的防御膜也有可能会从内部被破坏，所以得有人负责防止这一切的发生。你应该清楚，以现在的情况，你是不二人选。", 3, 3000107, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("...", 1, 3000107, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk('狂龙战士，你多保重。', 1, 3000106, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("别担心，狼牙。我可是狂龙战士。", 17, 3000106, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("(狂龙战士……)", 1, 3000106, true, true);
                                                            } else if (status === V++) {
                                                              cm.npc_LeaveField("oid=1053289");
                                                              cm.npc_LeaveField("oid=1053290");
                                                              cm.dispose();
                                                              cm.warp(940001010, 0, false);
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
              }
            }
          }
        }
      }
    }
  }
}