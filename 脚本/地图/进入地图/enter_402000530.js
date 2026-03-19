var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.getInfoQuest(34810) == "exp=1;give=1" && cm.getQuestStatus(34811) == 0) {
    action34808(f, E, e);
  } else if (cm.getQuestStatus(34804) == 0) {
    action34804(f, E, e);
  } else {
    cm.dispose();
  }
}
function action34808(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(3001334, "oid=62475", 44, -83, 1, -6, 94, 1, false, false);
    cm.npc_ChangeController(3001314, "oid=62476", -425, 31, 31, -475, -375, 0, true, false);
    cm.npc_ChangeController(3001315, "oid=62477", -299, 46, 30, -349, -278, 0, true, false);
    cm.npc_ChangeController(3001316, "oid=62478", -499, -29, 23, -549, -449, 0, true, false);
    cm.npc_ChangeController(3001317, "oid=62479", 560, 23, 28, 510, 610, 1, true, false);
    cm.npc_ChangeController(3001318, "oid=62480", -586, -105, 16, -627, -536, 0, true, false);
    cm.npc_ChangeController(3001319, "oid=62481", -431, -86, 6, -481, -381, 0, true, false);
    cm.npc_ChangeController(3001320, "oid=62482", 441, -1, 18, 418, 491, 1, true, false);
    cm.npc_ChangeController(3001360, "oid=62483", 611, -121, 3, 561, 661, 1, false, false);
    cm.npc_ChangeController(3001369, "oid=62484", 400, 46, 26, 373, 450, 1, false, false);
    cm.npc_ChangeController(3001390, "oid=62485", -510, -114, 7, -560, -460, 0, false, false);
    cm.updateInfoQuest(34802, "class1=1;class2=1;class3=1;class4=1;class5=1;out=2;exp=1");
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function action34804(f, E, e) {
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
      cm.forceStartQuest(34858, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
      cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 500, 50, -70);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 563, -158);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_Text(["#fn黑体##fs18#第三课：制作门", ''], [20, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我们平民翼人一直利用从水晶中提取的魔力研究各种魔法。", 37, 3001304, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#其中一个就是今天各位所要学习的#b水晶门#k。", 37, 3001304, true, true, 1);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -183, -1802);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#作为#b水晶门内部空间#k,我们平民翼人生活的村庄也是利用魔法打造的一种#b虚拟空间#k。", 37, 3001304, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1200, 2000, -700, -2650);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#因此天空刻画出虚拟水晶的样式,不分昼夜地保持漆黑状态。", 37, 3001304, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 50, -70);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#这#b水晶门#k是防御#r高等翼人攻击#k最有效的办法。", 37, 3001304, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#也就是说,这是一种绝不能泄露给高等翼人的机密安保技术。", 37, 3001304, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#学会门制作技术后,用途十分广泛,所以这当然不是一种简单的技术。", 37, 3001304, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#首先,在本节课开始之前,所有人两两一组。请大家跟旁边的同学搭配组队。", 37, 3001304, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.updateInfoQuest(34802, "class1=1;class2=1;class3=1;out=2;exp=1");
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.onTeleport(0, 3, cm.getPlayer().getId(), 563, -158);
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.setStandAloneMode(false);
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else if (status === V++) {
                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                              cm.setInGameDirectionMode(false, true, false);
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