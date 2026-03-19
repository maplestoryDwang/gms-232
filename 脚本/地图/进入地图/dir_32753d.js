var status = -1;
var selectionLog = [];
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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530060, "oid=21306749", 547, 58, 2, 497, 597, 1, true, false);
      cm.npc_SetSpecialAction("oid=21306749", "summon", 0, 0);
      cm.npc_ChangeController(1530070, "oid=21306750", 447, 58, 1, 397, 497, 1, true, false);
      cm.npc_SetSpecialAction("oid=21306750", "summon", 0, 0);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/bird", 100, 60);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("请进。", 37, 1530060, false, true);
          cm.effect_Text(["#fn黑体##fs26#几天后, 办公室"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1530220, "oid=21308342", 0, 58, 1, -50, 50, 0, true, false);
            cm.npc_SetSpecialAction("oid=21308342", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=21308342", 1, 280, 100);
              cm.inGameDirectionEvent_PushMoveInfo(0, 150, 400, 58);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2937);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('啊，警察姐姐。', 37, 1530060, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("关于董事长的调查进展得怎么样了？", 37, 1530070, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我借此机会，已经对董事长身边的人彻底调查了一遍……结果发现，他们为了除掉这所学校，正在制定缜密的计划。", 37, 1530220, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("居然还和建筑公司勾结在一起，早早制定了建造百货商店的计划？", 37, 1530220, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=21306749"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("天啊……董事长居然会有这样的计划？", 37, 1530060, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("以后可不应该再叫她董事长了。犯了错就要受到惩罚，不是吗？", 37, 1530220, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("…………", 37, 1530070, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("那我就先走了，如果有什么事的话，随时联系我吧。", 37, 1530220, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=21308342", -1, 280, 120);
                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=21308342");
                                      cm.npc_LeaveField("oid=21308342");
                                      cm.fieldEffect_PlayBGM("Bgm38.img/SchoolLife", 0, 0);
                                      cm.playSoundEffDirectly("Ambience.img/bird");
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 150, 540, 58);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1434);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=21306750", 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("希纳斯小姐，你看起来无精打采的。", 37, 1530070, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#南哈特，我以前是不是太单纯了？", 37, 1530060, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#现在我好像什么都不敢相信了。我根本不敢想象董事长居然就在我身边谋划着那么大一个阴谋。", 37, 1530060, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#而且关于转校生的传说也是……为这事我还开心了一阵呢，没想到竟然全是假的。", 37, 1530060, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#竟然还会相信那些，我是不是太傻了？", 37, 1530060, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("不是的，关于命运之转学生的说法确实存在。", 37, 1530070, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('……？', 37, 1530060, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("我在阅览室找到了一本很有趣的书。在那本书里，有着历代校长记录的发生在这所学校的各种事件……", 37, 1530070, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("神奇的是，里面竟然多次提到过‘命运之转学生’这个词。也就是有关‘命运之转学生’的传说是从第1届校长口中一届一届流传下来的。", 37, 1530070, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("那内容是……", 37, 1530070, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("这所学校在有一天面临危机的时候, 命运之转学生会拯救我们学校于危难之中. ", 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("怎么样，原文是不是很短？阿烈达董事长所制造的流言蜚语，不过是在真正的传说基础上进行的改编而已。", 37, 1530070, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("那么，真的会是#h0#吗……？", 37, 1530060, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("这个嘛。其实我并不相信什么传说啊、命运啊之类不合逻辑的说法。", 37, 1530070, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=21306750", 0);
                                                                              cm.npc_SetForceMove("oid=21306750", -1, 150, 120);
                                                                              cm.inGameDirectionEvent_PushMoveInfo(0, 100, 400, 58);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=21306750", 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("不过这次……应该会有点意思。", 37, 1530070, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else if (status === V++) {
                                                                                        cm.npc_setForceFlip("oid=21306750", 0);
                                                                                        cm.forceCompleteQuest(32753);
                                                                                        cm.updateInfoQuest(32720, "sms=45");
                                                                                        cm.dispose();
                                                                                        cm.warp(100000004, 0);
                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;