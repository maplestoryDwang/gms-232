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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 2000, 2000, -400, 300]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9400928, "oid=2605050", -960, 250, 128, -1010, -910, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2605050", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2605050", "stand", -1, 0);
        cm.npc_ChangeController(9400929, "oid=2605051", -976, 250, 128, -1026, -926, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2605051", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2605051", "stand", -1, 0);
        cm.npc_ChangeController(9400932, "oid=2605052", -840, 250, 128, -890, -790, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2605052", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2605052", 'stand', -1, 0);
        cm.npc_ChangeController(9401070, "oid=2605053", -800, 250, 128, -850, -750, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2605053", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2605053", "stand", -1, 0);
        cm.npc_ChangeController(9400931, "oid=2605054", -150, 300, 129, -200, -100, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2605054", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2605054", "stand", -1, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -800, 250);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2605050", 1, 360, 100);
          cm.npc_SetForceMove("oid=2605051", 1, 300, 100);
          cm.npc_SetForceMove("oid=2605052", 1, 420, 100);
          cm.npc_SetForceMove("oid=2605053", 1, 300, 50);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
            cm.sendNormalTalk_Bottom("#face1#凯尼斯大叔！我们来了！", 37, 9400923, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#啊，艾丹，米兰达！\r\n把东西都带来了呢！\r\n带来了装饰品啊，辛苦你们了！", 37, 9400922, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b你好，凯尼斯大叔。米兰达带来了一些装饰品。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#我可是充分地发动了我的审美眼光呢，尽情期待吧。", 37, 9400924, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=2605050"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#米兰达的审美眼光……嗯……", 37, 9400920, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b#b(总觉得他欲言又止……我还是先安静呆着吧……)#k", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#凯尼斯小姐，建造进展的顺利吗？", 37, 9400921, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#是的。在庆典之前应该能顺利完成。\r\n所以说啊，庆典那天大家一起在这里迎接新年怎么样？", 37, 9400922, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#爽歪歪！森林庭院中迎接新年！心里小鹿乱撞呢！", 37, 9400920, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#我举双手双脚赞成！尽情享受凯尼斯大叔准备的迎新春活动吧！", 37, 9400923, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#今年的迎新年庆典在各方面都将与众不同。需要准备的东西还有很多。", 37, 9400921, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#棒极了~~艾米会好好玩儿的！敬请期待吧~~！！", 37, 9400920, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.forceCompleteQuest(64906);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNewEffects(19, [0]);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                              } else if (status === V++) {
                                                cm.enterHome(0);
                                                cm.eventSKill(0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.npc_LeaveField("oid=2605050");
                                                cm.npc_LeaveField("oid=2605050");
                                                cm.npc_LeaveField("oid=2605051");
                                                cm.npc_LeaveField("oid=2605051");
                                                cm.npc_LeaveField("oid=2605052");
                                                cm.npc_LeaveField("oid=2605052");
                                                cm.npc_LeaveField("oid=2605053");
                                                cm.npc_LeaveField("oid=2605053");
                                                cm.npc_LeaveField("oid=2605054");
                                                cm.npc_LeaveField("oid=2605054");
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