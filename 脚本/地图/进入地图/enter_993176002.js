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
      cm.npc_ChangeController(3004602, "oid=442533", 383, 21, 2, 333, 433, 1, false, 0, false);
      cm.npc_ChangeController(3004603, "oid=442534", 232, 21, 2, 182, 282, 0, false, 0, false);
      cm.npc_ChangeController(3004604, "oid=442535", 1718, 21, 5, 1718, 1768, 1, false, 0, false);
      cm.npc_ChangeController(3004605, "oid=442536", 1216, 21, 3, 1166, 1266, 1, false, 0, false);
      cm.npc_ChangeController(3004606, "oid=442537", 1103, 21, 3, 1053, 1153, 0, false, 0, false);
      cm.npc_ChangeController(3004607, "oid=442538", 2167, 21, 6, 2117, 2217, 0, false, 0, false);
      cm.npc_ChangeController(3004608, 'oid=442539', 2266, 21, 6, 2216, 2316, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1725, -108);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.setNPC_Fadein(3004602, 1);
        cm.setNPC_Fadein(3004603, 1);
        cm.setNPC_Fadein(3004604, 1);
        cm.setNPC_Fadein(3004605, 1);
        cm.setNPC_Fadein(3004606, 1);
        cm.setNPC_Fadein(3004607, 1);
        cm.setNPC_Fadein(3004608, 1);
        cm.onCameraTilt(-180, 10);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
        cm.inGameDirectionEvent_AskAnswerTime(700);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('嗯……这里……', 56, 0, false, true, 1);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, 400, -108);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(12000);
                } else {
                  if (status === V++) {
                    cm.onCameraTilt(-360, 500);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('这是哪里？', 56, 0, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#反转城地下铁路的某个地方。", 36, 3004653, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是拉索尔把你背到了这里。", 36, 3004653, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#没想到你那么轻。", 36, 3004652, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("（这里的居民应该是#b艾尔达#k……\r\n看上去比消亡旅途的居民更像人类。）", 56, 0, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("（怎么所有人都跟我一样倒过来了？）", 56, 0, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("这座城市到底发生了什么事？\r\n那个戴着显示器的奇怪家伙到底是谁？", 56, 0, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#你是说#rT-boy#k吗？", 36, 3004653, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#确切地说，我们也不知道他的真实身份。", 36, 3004653, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#他……某一天突然出现在了这里，然后……\r\n #fs18##r把世界颠倒了过来。", 36, 3004653, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("把世界……颠倒了过来？", 56, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_复合图片动画(["Effect/Direction24.img/spine/1/skeleton", 'animation', '', '01'], [0, 1, 1, 0, 0, 0, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#这座城市的所有生命体都被施加了可怕的诅咒。\r\n重力被反转了过来。", 36, 3004653, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_取消复合图片动画('01', 1, 700);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#因此这座城市的所有生命体不会被吸在地上，而是会被吸向天空。", 36, 3004653, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#现在我们无法在没有天花板的地方生活。\r\n因为一不小心，就会坠落到#r空空如也的天空中#k。", 36, 3004653, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("嗯……", 56, 0, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#所以我们只能藏身于看不到一丝阳光的地下迷宫。", 36, 3004652, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#就像……地沟鼠一样。", 36, 3004652, true, true, 1);
                                                                  } else if (status === V++) {
                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                    cm.warp(450014050, 0, true);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.setStandAloneMode(false);
                                                                    cm.forceCompleteQuest(37602);
                                                                    cm.gainExp(8782820);
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