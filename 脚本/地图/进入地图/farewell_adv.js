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
      cm.npc_ChangeController(1540425, "oid=211957416", -474, 200, 10, -524, -424, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=211957416", "summon", 0, 0);
      cm.npc_ChangeController(1540426, "oid=211957417", -342, 200, 9, -392, -292, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=211957417", "summon", 0, 0);
      cm.npc_ChangeController(1540427, "oid=211957418", -274, 200, 6, -324, -224, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=211957418", 'summon', 0, 0);
      cm.npc_ChangeController(1540428, "oid=211957419", -200, 200, 7, -250, -150, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=211957419", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(4300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_PushMoveInfo(0, 150, -250, 150);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4707);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3500);
              cm.effect_NormalSpeechBalloon("你来啦,  #ho#", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540427, null, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3500);
                cm.effect_NormalSpeechBalloon("我们大家都在等你. ", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540426, null, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                  cm.effect_NormalSpeechBalloon("特别是修嘉. ", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540428, null, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                    cm.effect_NormalSpeechBalloon("那, 那只是因为我担心……", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540425, null, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                      cm.effect_NormalSpeechBalloon("我从赫丽娜那里听说, 你不是登上飞船了吗?", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540425, null, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                        cm.effect_NormalSpeechBalloon("你们不上飞船吗?", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                          cm.effect_NormalSpeechBalloon("因为可以搭乘飞船的人数有限. ", 1, 0, 0, 4000, 1, 0, -150, 0, 4, 1540427, null, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                            cm.effect_NormalSpeechBalloon("我们之中迅速变强的人只有你一个而已. ", 1, 0, 0, 4000, 1, 0, -150, 0, 4, 1540426, null, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4500);
                              cm.effect_NormalSpeechBalloon("唉, 我觉得我的等级也提升了不少呢……真可惜", 1, 0, 0, 4000, 1, 0, -150, 0, 4, 1540428, null, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(4500);
                                cm.effect_NormalSpeechBalloon("冒险岛陷入了危险, 我们却无能为力……", 1, 0, 0, 4000, 1, 0, -150, 0, 4, 1540427, null, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(4500);
                                  cm.effect_NormalSpeechBalloon("没关系的. #ho#会带着我们的期望, 努力战斗的. ", 1, 0, 0, 4000, 1, 0, -150, 0, 4, 1540426, null, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                                    cm.effect_NormalSpeechBalloon("还有, 我们在地面上也有要做的任务啊, 不是吗?", 1, 0, 0, 4000, 1, 0, -150, 0, 4, 1540426, null, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                      cm.effect_NormalSpeechBalloon("嘿, 你说的也没错. ", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540428, null, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                        cm.effect_NormalSpeechBalloon("我会带着你们的期望, 努力战斗的. ", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                                          cm.effect_NormalSpeechBalloon("#ho#, 感谢你时常为冒险岛世界奋战. ", 1, 0, 0, 4000, 1, 0, -150, 0, 4, 1540425, null, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                            cm.effect_NormalSpeechBalloon("我们会像之前那样, 把我们的增益施加在你身上. ", 1, 0, 0, 4000, 1, 0, -150, 0, 4, 1540425, null, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                              cm.effect_NormalSpeechBalloon("那从我开始, 嘿嘿. ", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540427, null, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("advStory/Buff5", 100);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/7"], [0, 0, 0, 0, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(3600);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                  cm.effect_NormalSpeechBalloon("哈哈, 真让人害羞. ", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540426, null, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                    cm.effect_NormalSpeechBalloon("嘁, 我对这种事情还不习惯. ", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540426, null, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("advStory/Buff7", 100);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/9"], [0, 0, 0, 0, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                        cm.effect_NormalSpeechBalloon("增益不会持续太长时间, 但这是我们的心意, 希望你能明白. ", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540428, null, cm.getPlayer().getId());
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("advStory/Buff6", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/8"], [0, 0, 0, 0, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                            cm.effect_NormalSpeechBalloon("你一定要平安回来. ", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 1540425, null, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("advStory/Buff2", 100);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/buff/3"], [0, 0, 0, 0, 0, 0, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                cm.effect_NormalSpeechBalloon("我一定会平安回来的. ", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                              } else if (status === V++) {
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.warp(350020023, 0, true);
                                                                cm.eventSKill(0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=211957416");
                                                                cm.npc_LeaveField("oid=211957417");
                                                                cm.npc_LeaveField("oid=211957418");
                                                                cm.npc_LeaveField("oid=211957419");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;