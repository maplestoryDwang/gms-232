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
      cm.npc_ChangeController(1530100, "oid=37262172", 497, 136, 5, 447, 547, 1, true, false);
      cm.npc_SetSpecialAction("oid=37262172", "summon", 0, 0);
      cm.npc_ChangeController(1530080, "oid=37262173", 197, 136, 4, 147, 247, 0, true, false);
      cm.npc_SetSpecialAction("oid=37262173", "summon", 0, 0);
      cm.npc_ChangeController(1530140, "oid=37262174", 297, 136, 5, 247, 347, 0, true, false);
      cm.npc_SetSpecialAction("oid=37262174", "summon", 0, 0);
      cm.npc_ChangeController(1530070, "oid=37262175", 97, 136, 4, 47, 147, 0, true, false);
      cm.npc_SetSpecialAction("oid=37262175", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("怎么感觉……是个很奇妙的组合。", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 120, 397, 179);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3835);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("可以说这是一个为了争取爱情的男子汉的聚会！", 37, 1530100, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH3_01/1", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你说谁是男子汉呢？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("啊啊，又被卷入麻烦事中了。", 37, 1530080, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH3_01/2", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("奥尔卡，等等我。我很快就会将妨碍我们爱情的所有阻隔排除的。哈哈哈……", 37, 1530140, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH3_01/3", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=37262173", -1);
                      cm.npc_setForceFlip("oid=37262174", -1);
                      cm.inGameDirectionEvent_PushMoveInfo(0, 120, 97, 179);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2997);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37262175"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……所以，我到底为什么要来这里呢？", 37, 1530070, false, true);
                            cm.effect_Voice("Voice2.img/Friends/CH3_01/4", 100);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=37262173", 1);
                              cm.npc_setForceFlip("oid=37262174", 1);
                              cm.fieldEffect_PlayBGM("Bgm18.img/DrillHall", 0, 0);
                              cm.inGameDirectionEvent_PushMoveInfo(0, 120, 397, 179);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2997);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("有什么不满就先收起来吧！好了，希望各位作为我们#r<国际神兽学校恋爱调查团>#k的一员，在以后能够为神兽国际学校的恋爱独立而浴血奋战！我的讲话就到这里！", 37, 1530100, false, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH3_01/5", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                    cm.effect_NormalSpeechBalloon("神兽学校", 1, 0, 1, 1500, 0, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                      cm.effect_NormalSpeechBalloon('恋爱', 1, 0, 1, 1500, 1530080, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        cm.effect_NormalSpeechBalloon("调查团? ", 1, 0, 1, 1500, 1530140, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("这么幼稚的组织到底是干什么的？", 37, 1530070, false, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH3_01/6", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我们组织的目的正是……撮合老处男#b麦格纳斯#k老师和老处女#b希拉#k老师！", 37, 1530100, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH3_01/7", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 0, cm.getPlayer().getId());
                                              cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530080, cm.getPlayer().getId());
                                              cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530140, cm.getPlayer().getId());
                                              cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530070, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else if (status === V++) {
                                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                cm.npc_setForceFlip("oid=37262173", 0);
                                                cm.npc_setForceFlip("oid=37262174", 0);
                                                cm.forceCompleteQuest(32801);
                                                cm.dispose();
                                                cm.warp(330000500, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;