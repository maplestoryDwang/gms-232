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
      cm.npc_ChangeController(3003607, "oid=275673", 1571, 31, 111, 1521, 1621, 1, false, 0, false);
      cm.npc_ChangeController(3003608, "oid=275674", 3204, 67, 149, 3154, 3254, 0, false, 0, false);
      cm.npc_ChangeController(3003659, "oid=275675", 2590, 69, 113, 2540, 2640, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275676", 2502, 71, 113, 2452, 2552, 0, true, 0, false);
      cm.npc_ChangeController(3003669, "oid=275677", 239, -22, 107, 189, 289, 1, true, 0, false);
      cm.npc_ChangeController(3003670, "oid=275678", 22, -18, 107, -28, 72, 1, true, 0, false);
      cm.npc_ChangeController(3003671, "oid=275679", 2183, 69, 112, 2133, 2233, 1, true, 0, false);
      cm.npc_ChangeController(3003668, "oid=275680", -420, -19, 106, -470, -370, 1, true, 0, false);
      cm.npc_ChangeController(3003669, "oid=275681", 1985, 42, 112, 1935, 2035, 1, true, 0, false);
      cm.npc_ChangeController(3003671, "oid=275682", 462, -23, 108, 412, 512, 1, true, 0, false);
      cm.npc_ChangeController(3003670, "oid=275683", 2305, 75, 113, 2255, 2355, 1, true, 0, false);
      cm.npc_ChangeController(9201609, "oid=275684", -514, -20, 106, -564, -464, 1, true, 0, false);
      cm.npc_ChangeController(9201609, "oid=275685", 1032, 28, 110, 982, 1082, 1, true, 0, false);
      cm.updateInfoQuest(35157, "save=993060020;return=450006130");
      cm.Hidden_background("fireshoot_0", 1, 0, 0, 0);
      cm.Hidden_background("fireshoot_1", 1, 0, 0, 0);
      cm.Hidden_background("flame_1", 1, 1, 0, 0);
      cm.Hidden_background("flame_2", 1, 0, 0, 0);
      cm.Hidden_background("flame_3", 1, 0, 0, 0);
      cm.Hidden_background("flame_4", 1, 0, 0, 0);
      cm.Hidden_background('grade_1', 1, 0, 0, 0);
      cm.Hidden_background('grade_2', 1, 0, 0, 0);
      cm.Hidden_background('grade_3', 1, 0, 0, 0);
      cm.Hidden_background('grade_4', 1, 0, 0, 0);
      cm.Hidden_background('grade_5', 1, 0, 0, 0);
      cm.Hidden_background("grade_6", 1, 0, 0, 0);
      cm.Hidden_background("grade_7", 1, 0, 0, 0);
      cm.Hidden_background("grade_8", 1, 0, 0, 0);
      cm.Hidden_background('grade_9', 1, 0, 0, 0);
      cm.Hidden_background("grade_10", 1, 0, 0, 0);
      cm.Hidden_background("grade_11", 1, 0, 0, 0);
      cm.Hidden_background('grade_12', 1, 0, 0, 0);
      cm.Hidden_background("grade_13", 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.updateInfoQuest(35150, "01=h1;02=h1;03=h1;04=h0;05=h1;07=h0");
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 3041, 57);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(3003651, "oid=2201040", 2840, 55, 149, 2790, 2890, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2201040", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -800, -420);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -610, -420);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 100, -1130);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 290, -1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 490, -1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#正如你所见，此刻来自各地的勇士们正纷纷聚集到这里。", 37, 3003651, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -550, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 240, 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#除了冒险岛世界的勇士之外，\r\n诺巴族和时间神官们也向我们伸出了援手。", 37, 3003651, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.inGameDirectionEvent_ForcedFlip(0);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 3050, 130);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2201040", -1, 100, 130);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                                              cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 2680, 130);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#欢迎光临，南哈特，#b#ho##k。\r\n看到你们安然无恙，真是太好了。", 37, 3003659, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#这不算什么……\r\n好了，麻烦你去向女皇陛下报告，说我们到了。", 37, 3003651, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#哈哈，明白了。", 37, 3003659, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=2201040", -1, 1050, 155);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 1130);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(8500, 0, 1000, 8500, 1400, 30);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#据神兽说，出征的时间是神圣之光发生变化的时候……", 37, 3003651, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#顺应勇士们的心愿，光球变成了女神像，现在时候到了。", 37, 3003651, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0##b#ho##k！！", 37, 3003652, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2201040"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 630, 50);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_ChangeController(3003653, "oid=2201061", 550, -50, 108, 500, 600, 0, true, 0, false);
                                                                                                      cm.npc_SetSpecialAction("oid=2201061", "summon", 0, 0);
                                                                                                      cm.npc_ChangeController(3003654, "oid=2201062", 650, -20, 108, 600, 700, 0, true, 0, false);
                                                                                                      cm.npc_SetSpecialAction("oid=2201062", "summon", 0, 0);
                                                                                                      cm.npc_ChangeController(3003652, "oid=2201063", 730, -135, 108, 680, 780, 0, true, 0, false);
                                                                                                      cm.npc_SetSpecialAction("oid=2201063", 'summon', 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#哦，再见到你真让人高兴！哈，哈哈……", 37, 3003653, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetForceMove("oid=2201061", 1, 490, 130);
                                                                                                          cm.npc_SetForceMove("oid=2201062", 1, 490, 130);
                                                                                                          cm.npc_SetForceMove("oid=2201063", 1, 490, 130);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 1400, 30);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1400, 60);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#看来大家都没事。", 37, 3003652, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#哈……虽然遇到了一点麻烦。\r\n你们看上去精神好像也不错。", 37, 3003651, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#（沃莉一行好像安全到达了天渡。）", 37, 3003652, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face1#呼……呼呼……鸡蛋……炸开了……", 37, 3003654, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#这家伙在说什么呢……\r\n说什么胡话呢！？", 37, 3003653, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#好了，在这之前，你们也需要一起为出征做准备。", 37, 3003651, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#（让休麦、梅尔朗分别去见见反抗者和诺巴阵营的代表。沃莉好像去了冒险骑士团阵营。）", 37, 3003651, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#我们好像要就此分手了。", 37, 3003652, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#祝你好运，#b#ho##k。", 37, 3003653, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#呼啊啊……再见。", 37, 3003654, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                          cm.npc_LeaveField("oid=2201061");
                                                                                                                                                          cm.npc_LeaveField("oid=2201061");
                                                                                                                                                          cm.npc_LeaveField("oid=2201062");
                                                                                                                                                          cm.npc_LeaveField("oid=2201062");
                                                                                                                                                          cm.npc_LeaveField("oid=2201063");
                                                                                                                                                          cm.npc_LeaveField("oid=2201063");
                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1400, 60);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 1684, 60);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##b#ho##k，请留步。你得先去见一个人。", 37, 3003651, false, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.forceStartQuest(35607, '');
                                                                                                                                                                      cm.forceCompleteQuest(35607);
                                                                                                                                                                      cm.gainExp(171586691);
                                                                                                                                                                      cm.updateInfoQuest(35607, "enter=1");
                                                                                                                                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                            cm.npc_LeaveField("oid=2201040");
                                                                                                                                                                            cm.npc_LeaveField("oid=2201040");
                                                                                                                                                                            cm.updateInfoQuest(35150, "01=h1;02=h1;03=h1;04=h0;05=h1;07=h1");
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
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}