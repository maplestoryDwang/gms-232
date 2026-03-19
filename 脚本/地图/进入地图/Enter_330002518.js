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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530220, "oid=39113671", 234, 58, 1, 184, 284, 0, true, false);
      cm.npc_SetSpecialAction("oid=39113671", "summon", 0, 0);
      cm.npc_ChangeController(1530070, "oid=39113672", 434, 58, 1, 384, 484, 1, true, false);
      cm.npc_SetSpecialAction("oid=39113672", "summon", 0, 0);
      cm.npc_ChangeController(1530060, "oid=39113673", 334, 58, 1, 284, 384, 1, true, false);
      cm.npc_SetSpecialAction("oid=39113673", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom(" 我按照你们的委托，对阿白实习老师的身份进行了调查。", 37, 1530220, false, true);
          cm.effect_Voice("Voice2.img/Friends/CH5_08/1", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom(" 结果是？", 37, 1530060, true, true);
            cm.effect_Voice("Voice2.img/Friends/CH5_08/2", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("所有的材料都是伪造的。这个男人没有名字，也没有国籍。", 37, 1530220, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH5_08/3", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("现在这个城市发生了很多奇怪的事情。", 37, 1530220, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_08/4", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你们有没有听说书和垃圾桶会自己行走，以及有鬼出没的传闻呢？  ", 37, 1530220, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH5_08/5", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("一天之内有几十个人目睹了来历不明的黑色怪物。说不定这些事与这个男人有关。", 37, 1530220, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH5_08/6", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("原来如此。如果有什么事情神兽集团可以帮忙，我们会尽力协助的。", 37, 1530060, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH5_08/7", 100);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("#fs18#  #fNpc/1530010.img/stand/0##fn黑体#  Casting\r\n#fs18##fn黑体#――――――――――――――――――――――――――\r\n#fs18##fn黑体# 神兽集团独生女角色 #fn黑体#：希纳斯", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("\r\n#fs18#  #fNpc/1530011.img/stand/0##fn黑体#  Casting\r\n#fs18##fn黑体#――――――――――――――――――――――――――\r\n#fs18##fn黑体# 学生会长角色 #fn黑体#：南哈特", 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("\r\n#fs18#  #fNpc/0010200.img/stand/0##fn黑体#  Casting\r\n#fs18##fn黑体#――――――――――――――――――――――――――\r\n#fs18##fn黑体# 警察角色 #fn黑体#：赫丽娜", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("\r\n#fs18#  #fNpc/2510012.img/stand/0##fn黑体#  Casting\r\n#fs18##fn黑体#――――――――――――――――――――――――――\r\n#fs18##fn黑体# 实习老师角色 #fn黑体#：白魔法师", 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                    cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("如果学校里发生什么事情，请与我联系。", 37, 1530220, false, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH5_08/8", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("请不要担心学校这边的情况。", 37, 1530070, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH5_08/9", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我们有跑腿的……\r\n不对，有#b命运之转学生#k。", 37, 1530070, true, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH5_08/10", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            cm.effect_Voice("SoundEff/knock", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39113672"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=39113673"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("快过来，#h0#。", 37, 1530060, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=39113671", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("#fs18##fn黑体# Special Thanks To\r\n#fs18##fn黑体#――――――――――――――――――――――――――――――――\r\n#fs18##fn黑体# 命运之转学生角色 #fn黑体#：#h0#", 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 5500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                      } else if (status === V++) {
                                                        cm.forceStartQuest(33028, '');
                                                        cm.dispose();
                                                        cm.warp(100000004, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;