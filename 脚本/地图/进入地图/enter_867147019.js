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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401124, "oid=5374039", -750, 40, 2, -800, -700, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=5374039", "summon", 0, 0);
      cm.npc_ChangeController(9401123, "oid=5374040", -850, 40, 2, -900, -800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=5374040", "summon", 0, 0);
      cm.npc_ChangeController(9401126, "oid=5374041", -950, 40, 2, -1000, -900, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=5374041", "summon", 0, 0);
      cm.npc_ChangeController(9401055, "oid=5374042", -300, 40, 11, -350, -250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=5374042", 'summon', 0, 0);
      cm.npc_ChangeController(9401055, "oid=5374043", -200, 40, 8, -250, -150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=5374043", 'summon', 0, 0);
      cm.npc_ChangeController(9401055, "oid=5374044", -100, 40, 8, -150, -50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=5374044", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("……最后真的还是一起进来了，嘤嘤…… ", 37, 9401029, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("要是队长和其他人因为她而出什么事，我真的会非常伤心的！", 37, 9401029, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("不会发生这种事的，不用太担心。", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNewEffects(17, [0, 1000, 2000, -600, 150]);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                  cm.npc_SetForceMove("oid=5374039", 1, 400, 150);
                  cm.npc_SetForceMove("oid=5374040", 1, 250, 150);
                  cm.npc_SetForceMove("oid=5374041", 1, 250, 100);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=5374041"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                  cm.sendNewEffects(12, [1000, -450, 150, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("咳呃~~~~！", 37, 9401032, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=5374040", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("快来！你在那儿磨蹭什么呢？", 37, 9401029, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我在将深渊的空气保存在肺里，诶嘿", 37, 9401032, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=5374040", 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=5374040", 1, 150, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Skill/230.img/skill/2301005/effect", "oid=5374040"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Skill/230.img/skill/2301005/effect", "oid=5374040"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.sendNormalTalk_Bottom("咳呃！好帅，这就是协同作战啊！", 37, 9401032, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('别光说话，快来帮忙！', 37, 9401029, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("来了，我来了！矫健的米西蒂来了~！", 37, 9401032, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=5374041", 1, 400, 300);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=5374039", 1, 30, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(800);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Skill/230.img/skill/2301005/effect", "oid=5374040"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Skill/230.img/skill/2301005/effect", "oid=5374040"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.npc_SetSpecialAction("oid=5374042", "die1", -1, 0);
                                                                      cm.npc_SetSpecialAction("oid=5374043", "die1", -1, 0);
                                                                      cm.npc_SetSpecialAction("oid=5374044", "die1", -1, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=5374039", -1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=5374041", -1);
                                                                            cm.sendNewEffects(13, [0, 50, 0, 0, 0]);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_LeaveField("oid=5374042");
                                                                              cm.npc_LeaveField("oid=5374042");
                                                                              cm.npc_LeaveField("oid=5374043");
                                                                              cm.npc_LeaveField("oid=5374043");
                                                                              cm.npc_LeaveField("oid=5374044");
                                                                              cm.npc_LeaveField("oid=5374044");
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("好帅！我们做到了！果然大家一起合力就可以做到！啊嘎嘎嘎嘎嘎", 37, 9401032, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("正因如此，我才想来到深渊哦？", 37, 9401032, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("第一次来说，你做得很好了，米西蒂。", 37, 9401030, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#b第一次来说，你做得很好了，米西蒂。", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=5374041"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("嗯？你们是在称赞我吗？是吧！", 37, 9401032, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("第一次来说！", 37, 9401029, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("大家对你都不抱期待，所以才会这样说。", 37, 9401029, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("别给我泼冷水～ ", 37, 9401032, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("啊！发现怪物！把它也抓住吧，我们！米西蒂出动！！！", 37, 9401032, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetForceMove("oid=5374041", 1, 200, 300);
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_LeaveField("oid=5374040");
                                                                                                        cm.npc_LeaveField("oid=5374040");
                                                                                                        cm.npc_LeaveField("oid=5374039");
                                                                                                        cm.npc_LeaveField("oid=5374039");
                                                                                                        cm.npc_LeaveField("oid=5374041");
                                                                                                        cm.npc_LeaveField("oid=5374041");
                                                                                                        cm.sendNormalTalk_Bottom("诶唰唰唰唰！", 37, 9401032, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('哈！', 37, 9401030, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("圣箭术！", 37, 9401029, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#b瞄准！", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("OK！我好喜欢大家一起战斗！嘿嘿嘿", 37, 9401032, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom('我先上了！', 37, 9401030, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 450, 50);
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                    cm.sendNewEffects(13, [0, 750, 0, 0, 0]);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_ChangeController(9401123, "oid=5377238", 380, 40, 3, 330, 430, 1, true, 0, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=5377238", "summon", 0, 0);
                                                                                                                      cm.npc_ChangeController(9401126, "oid=5377239", 280, 40, 3, 230, 330, 0, true, 0, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=5377239", 'summon', 0, 0);
                                                                                                                      cm.npc_ChangeController(9401124, "oid=5377240", 200, 40, 3, 150, 250, 0, true, 0, false);
                                                                                                                      cm.npc_SetSpecialAction("oid=5377240", "summon", 0, 0);
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("有……有趣！嘎嘎嘎", 37, 9401032, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("噗 ", 37, 9401030, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("……不错嘛。", 37, 9401029, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#b我们稍微整顿一下再走吧？", 57, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("我从背包里把药水拿出来。", 37, 9401029, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("……呃嗯？", 37, 9401029, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom('呃呃呃嗯？？！', 37, 9401029, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#b怎么了？", 57, 0, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("背包……空了…… ", 37, 9401029, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("目前为止还没有出现过这种事情……", 37, 9401029, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("哦嘤？好好看看！", 37, 9401032, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_SetForceMove("oid=5377239", 1, 30, 100);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=5377238"], [1500, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                    cm.sendNormalTalk_Bottom("你别靠近！", 37, 9401029, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom('是你吧？是你偷走了！', 37, 9401029, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("你，你说什么呢！不是我！", 37, 9401032, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#b… ", 57, 0, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("… ", 37, 9401030, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("……和你刚进入深渊不久，就发生了这种前所未有的事情！", 37, 9401029, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("诶～再仔细找找吧。我没偷！我是清白的。", 37, 9401032, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("骗子，小偷！", 37, 9401029, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("不……不是我…… ", 37, 9401032, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("大家都觉得是我吗？", 37, 9401032, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b……也不一定…… ", 57, 0, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom('……原来是这样啊。', 37, 9401032, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("…… ", 37, 9401032, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.npc_setForceFlip("oid=5377239", -1);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_SetForceMove("oid=5377239", -1, 1000, 100);
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#b米西蒂！", 57, 0, false, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.Npc_Fadeout("oid=5377239", 0, 1000);
                                                                                                                                                                                  cm.sendNormalTalk_Bottom('那，那里很危险……！', 37, 9401029, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.npc_setForceFlip("oid=5377240", -1);
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b还是先追上米西蒂为好！", 57, 0, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.eventSKill(0);
                                                                                                                                                                                      cm.forceStartQuest(64776, '');
                                                                                                                                                                                      cm.npc_LeaveField("oid=5377238");
                                                                                                                                                                                      cm.npc_LeaveField("oid=5377238");
                                                                                                                                                                                      cm.npc_LeaveField("oid=5377239");
                                                                                                                                                                                      cm.npc_LeaveField("oid=5377239");
                                                                                                                                                                                      cm.npc_LeaveField("oid=5377240");
                                                                                                                                                                                      cm.npc_LeaveField("oid=5377240");
                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                      var O = cm.getEventManager("深渊远征队_教程5");
                                                                                                                                                                                      O.startInstance(cm.getPlayer());
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
    }
  }
}