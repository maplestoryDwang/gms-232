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
      cm.npc_ChangeController(9401026, "oid=200980", 359, 125, 31, 309, 409, 1, false, 0, false);
      cm.npc_ChangeController(9401040, "oid=200981", -471, 65, 41, -521, -421, 5, true, 0, false);
      cm.npc_ChangeController(9401043, "oid=200982", -519, 65, 44, -569, -469, 4, true, 0, false);
      cm.npc_ChangeController(9401045, 'oid=200983', 102, -205, 75, 52, 152, 5, true, 0, false);
      cm.npc_ChangeController(9401031, "oid=200984", 5, -265, 65, -45, 55, 5, true, 0, false);
      cm.npc_ChangeController(9401129, "oid=200985", -89, -205, 80, -139, -39, 4, true, 0, false);
      cm.npc_ChangeController(9401130, "oid=200986", -151, -205, 76, -201, -101, 4, true, 0, false);
      cm.npc_ChangeController(9401131, "oid=200987", 61, -235, 60, 11, 64, 5, true, 0, false);
      cm.npc_ChangeController(9401132, "oid=200988", -56, -265, 64, -106, -6, 4, true, 0, false);
      cm.npc_ChangeController(9401123, "oid=200989", -36, 65, 39, -86, 14, 5, true, 0, false);
      cm.npc_ChangeController(9401124, "oid=200990", 17, 65, 39, -33, 67, 5, true, 0, false);
      cm.npc_ChangeController(9401126, "oid=200991", -166, 65, 36, -216, -116, 4, true, 0, false);
      cm.npc_ChangeController(9401127, "oid=200992", 337, -69, 50, 287, 387, 5, true, 0, false);
      cm.npc_ChangeController(9401133, "oid=200993", 185, 155, 11, 135, 199, 5, true, 0, false);
      cm.npc_ChangeController(9401134, "oid=200994", 116, 155, 14, 66, 166, 4, true, 0, false);
      cm.npc_ChangeController(9401136, 'oid=200995', 346, -205, 70, 296, 379, 5, true, 0, false);
      cm.npc_ChangeController(9401137, "oid=200996", -413, -205, 78, -463, -363, 4, true, 0, false);
      cm.npc_ChangeController(9401138, 'oid=200997', -335, -205, 79, -385, -285, 5, true, 0, false);
      cm.npc_ChangeController(9401139, "oid=200998", -446, 155, 7, -496, -431, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("来了许多新的冒险家呀！", 37, 9401029, false, true);
        } else {
          if (status === V++) {
            cm.sendNewEffects(17, [2000, 1000, 2000, 0, -200]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("洛尼，所以呢？所以呢～然后怎么样了？", 37, 9401131, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("呵呵呵，好了，别卖关子了，快说吧。", 37, 9401045, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("还能怎么办？当然是装作什么都不知道，然后报警了呗。", 37, 9401031, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('哈哈，真可爱啊！', 37, 9401045, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我那时应该在你身边的～ ", 37, 9401132, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("呀哈哈哈", 37, 9401130, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNewEffects(12, [0, -75, 120, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("什么事情这么好笑？真是难以理解，呵呵。", 37, 9401032, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("……我的天…… ", 37, 9401029, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("怎么了？你认识他们？", 37, 9401032, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("不是，不是这个…… ", 37, 9401029, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我的天哪！简直了，我想到了一个非常好的点子！", 37, 9401029, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("每当这种时候，她就会很可怕。", 37, 9401030, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b什么点子呢？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("（窃窃私语，如果把那个人招进我们远征队，他身边的那些女孩子都会想加入我们远征队的！）", 37, 9401029, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("为什么？", 37, 9401032, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("（嘘！小声点，笨蛋。还不够明显吗？那么无聊的话题，她们却听得津津有味，肯定是对他有好感嘛！而且是非常有好感！）", 37, 9401029, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("嗯…… ", 37, 9401032, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b哈哈，这也不是不可能。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("对吧？快去看看吧，队长！", 37, 9401029, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b你说真的？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("我什么时候让你吃过亏了？", 37, 9401029, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("嗯…… ", 37, 9401032, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b嗯…… ", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("嘿嘿……说句话又不会掉块肉，快去吧！", 37, 9401029, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#b别，别推我。", 57, 0, true, true);
                                                                  } else if (status === V++) {
                                                                    cm.eventSKill(0);
                                                                    cm.warp(867147000, 0, true);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.forceStartQuest(64780, '');
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