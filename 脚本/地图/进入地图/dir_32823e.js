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
      cm.npc_ChangeController(1530100, "oid=37878568", 892, 3, 11, 842, 942, 0, true, false);
      cm.npc_SetSpecialAction("oid=37878568", 'summon', 0, 0);
      cm.npc_ChangeController(1530080, "oid=37878569", 842, 3, 11, 792, 892, 0, true, false);
      cm.npc_SetSpecialAction("oid=37878569", "summon", 0, 0);
      cm.npc_ChangeController(1530140, "oid=37878570", 942, 3, 13, 892, 992, 0, true, false);
      cm.npc_SetSpecialAction("oid=37878570", "summon", 0, 0);
      cm.npc_ChangeController(1530070, "oid=37878571", 992, 3, 14, 942, 1042, 0, true, false);
      cm.npc_SetSpecialAction("oid=37878571", "summon", 0, 0);
      cm.npc_ChangeController(1530410, "oid=37878572", 1242, 3, 19, 1192, 1292, 1, true, false);
      cm.npc_SetSpecialAction("oid=37878572", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=37878572", "die", -1, 1);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 942, 3);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2183);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("希拉老师和麦格纳斯老师？", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#对不起，#h0#队员。我们的位置已经暴露给敌人了。很遗憾，这次的计划失败了。呜呜，这一切都是因为我的无能，都是我的错。", 37, 1530100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("是胡克的责任……没错。都怪他乱动才被希拉老师逮到的。马上就要成功了，真可惜。", 37, 1530080, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("拜他所赐，这下希拉老师和麦格纳斯老师的关系好像更加恶劣了。神兽学校又该很长时间绝。对。禁。止。校园恋爱了。", 37, 1530070, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不行，奥尔卡还在等着我呢。呃，爱情……实在是太令人心痛了。", 37, 1530140, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我要先回去了。从一开始就不应该参与这种傻事的。那我先走了。", 37, 1530080, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=37878569", -1, 1000, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("米哈尔队员，你现在打算逃离战场吗……喂，等等我！", 37, 1530100, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=37878568", -1, 1000, 140);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我突然间好想她啊，我要去找她。", 37, 1530140, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=37878570", -1, 1000, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('那我也先走了。', 37, 1530070, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=37878571", -1, 1000, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(0, 120, 1342, 3);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3835);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("不行……你们不可以……连白头发都还没长出来的家伙谈什么恋爱……（一个人嘟嘟囔囔着）……", 37, 1530410, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                  cm.npc_ChangeController(1530030, "oid=37890651", 1542, 3, 26, 1492, 1592, 1, true, false);
                                                  cm.npc_SetSpecialAction("oid=37890651", "summon", 0, 0);
                                                  cm.npc_SetForceMove("oid=37890651", -1, 200, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=37890651"], [0, 0, 20, 1, 0, 1, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("汪，汪！", 37, 1530030, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_ForcedFlip(0);
                                                        cm.dispose();
                                                        cm.warp(330002320, 0);
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