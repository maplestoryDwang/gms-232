var status = -1;
var selectionLog = [];
function action(j, d, N) {
  if (status == 0 && j == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = N;
  var Q = -1;
  if (status <= Q++) {
    cm.dispose();
  } else {
    if (status === Q++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540784, "oid=287704257", -800, 250, 55, -850, -750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287704257", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=287704258", -880, 250, 55, -930, -830, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287704258", "summon", 0, 0);
      cm.Hidden_background("HofM2_trap", 1, 1, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -600, 280);
      cm.curNodeEventEnd(true);
    } else {
      if (status === Q++) {
        cm.npc_SetForceMove("oid=287704257", 1, 130, 100);
        cm.npc_SetForceMove("oid=287704258", 1, 130, 100);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === Q++) {
          cm.sendNormalTalk_Bottom("主人，所以什么时候才能到古代遗迹啊？", 37, 1540807, false, true);
        } else {
          if (status === Q++) {
            cm.sendNormalTalk_Bottom("#face4#好奇怪啊，弗里德所说的分明就是这里啊。", 37, 1540805, true, true);
          } else {
            if (status === Q++) {
              cm.sendNormalTalk_Bottom("#face0#该不会是时间太长，全都坍塌了吧？", 37, 1540807, true, true);
            } else {
              if (status === Q++) {
                cm.npcMove(1540784, 0, 5, 1000);
                cm.sendNormalTalk_Bottom("#face3#但至少也该有些痕迹才是啊，别说是遗迹里，这里连块砖头都没有。", 37, 1540805, true, true);
              } else {
                if (status === Q++) {
                  cm.sendNormalTalk_Bottom('？？', 37, 1540807, true, true);
                } else {
                  if (status === Q++) {
                    cm.sendNormalTalk_Bottom("#face0#主人，总感觉你个子好像变矮了。", 37, 1540807, true, true);
                  } else {
                    if (status === Q++) {
                      cm.sendNormalTalk_Bottom("#face1#我原本个子就矮嘛，米乐。", 37, 1540805, true, true);
                    } else {
                      if (status === Q++) {
                        cm.npcMove(1540784, 0, 10, 1300);
                        cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -600, 290);
                      } else {
                        if (status === Q++) {
                          cm.sendNormalTalk_Bottom("主人可真是乐观……等一下，主人！身体被埋下去了！", 37, 1540807, false, true, 1, 1500);
                        } else {
                          if (status === Q++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === Q++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/HofMEffect/dust"], [0, -645, 265, 1, 0, 1, 1, 0]);
                              cm.onSetBackEffect("HofM2_trap", 1, 0, 0, 0);
                              cm.inGameDirectionEvent_PushScaleInfo(100, 2000, 100, -600, 340);
                            } else {
                              if (status === Q++) {
                                cm.npcMove(1540784, 0, 55, 100);
                                cm.emotion(5, -1);
                                cm.inGameDirectionEvent_AskAnswerTime(120);
                              } else {
                                if (status === Q++) {
                                  cm.npcMove(1540784, 0, 15, 3000);
                                  cm.sendNormalTalk_Bottom(" #face2#恩？哇啊啊！！！", 37, 1540805, false, true, 1, 3000);
                                } else {
                                  if (status === Q++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, -600, 350);
                                  } else {
                                    if (status === Q++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/HofMEffect/dust"], [0, -645, 350, 1, 0, 1, 1, 0]);
                                      cm.npcMove(1540784, 0, 300, 300);
                                      cm.sendNormalTalk_Bottom("#face2# #fs25#额#fs24#啊#fs23#啊#fs22#啊#fs21#啊#fs20#啊#fs19#啊#fs18#啊#fs17#啊#fs16#啊#fs15#啊#fs14#啊#fs13#啊#fs12#啊#fs11#啊~", 37, 1540805, false, true, 1, 2500);
                                    } else {
                                      if (status === Q++) {
                                        cm.sendNormalTalk_Bottom("#face1# 主人！！！", 37, 1540807, true, true, 1, 3000);
                                      } else {
                                        if (status === Q++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === Q++) {
                                            cm.sendNormalTalk_Bottom("……我怎么觉得之前也发生过类似的状况。", 37, 1540807, false, true);
                                          } else {
                                            if (status === Q++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === Q++) {
                                                cm.npc_SetSpecialAction("oid=287704258", "special7", 1, 1);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Mir_fall", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === Q++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else if (status === Q++) {
                                                  cm.dispose();
                                                  cm.warp(350120110, 0, true);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.npc_LeaveField("oid=287704257");
                                                  cm.npc_LeaveField("oid=287704257");
                                                  cm.npc_LeaveField("oid=287704258");
                                                  cm.npc_LeaveField("oid=287704258");
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