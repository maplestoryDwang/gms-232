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
      cm.npc_ChangeController(9400934, "oid=262149", -181, 72, 10, -231, -131, 4, true, 0, false);
      cm.npc_ChangeController(9400931, 'oid=262150', 7, 62, 1, 4, 57, 4, true, 0, false);
      cm.npc_ChangeController(9401156, "oid=262151", -103, 72, 10, -153, -53, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 40, 100]);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs20##e第一天营业结束后……"], [50, 3000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -55, 60);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_OneTimeAction(29, 1000000);
        cm.npc_ChangeController(9401160, "oid=91717898", 120, 60, 10, 70, 170, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=91717898", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=91717898", "sit", -1, 0);
        cm.npc_ChangeController(9400929, "oid=91717899", 165, 60, 10, 115, 215, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=91717899", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=91717899", 'sit', -1, 0);
        cm.npc_ChangeController(9400932, "oid=91717900", 220, 60, 10, 170, 270, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=91717900", "summon", 0, 0);
        cm.npc_ChangeController(9400928, "oid=91717901", 340, 60, 10, 290, 390, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=91717901", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=91717901", -1, 230, 100);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#呃呃呃，真是令人心满意足的一天。", 37, 9400920, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#呃呃……好累。", 37, 9400923, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#各位都辛苦了！噔噔，艾米的特制果汁！大家一人一杯！", 37, 9400920, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=91717900", "drink", 3000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#咕嘟咕嘟。呃嗯，百喝不厌呢！", 37, 9400923, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#艾米，你太棒了，一点也不像第一次呢！即使订单蜂拥而至也毫不慌张。", 37, 9401160, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=91717901"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.sendNormalTalk_Bottom("#face2#有什么好慌张的！都是钱呀！嘿嘿。", 37, 9400920, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=91717899"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#呃……", 37, 9400921, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#快吃吧", 37, 9400920, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=91717901", "drink", 0, 0);
                                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink2", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=91717901"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face6#咦……？咦咦咦？！？！！", 37, 9400920, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              cm.updateInfoQuest(49018, "QET=EKIfSLg81gE$");
                                              cm.updateInfoQuest(49018, "QET=EKIfSLg81gE$");
                                              cm.updateInfoQuest(49018, "QET=EKIfSLg81gE$");
                                              cm.forceStartQuest(49018, '');
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face6#这个怎么这么美味？！这就是在金海滩上喝过的那个果汁的味道！", 37, 9400920, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我觉得一样啊？", 37, 9400923, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=91717901", 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#不，更香甜更凉爽啊！", 37, 9400920, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#呃，我觉得也一样啊，艾米。", 37, 9400921, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=91717901", -1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#怎么会……？", 37, 9400920, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=91717901", "drink", 0, 0);
                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink2", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face6#真的很美味呢……？", 37, 9400920, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#呵呵呵。", 37, 9400922, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#我认为，艾米想再次品尝的不是那个果汁，而是为实现目标而努力奔跑的那一瞬间的甜蜜快乐。。", 37, 9400922, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=91717901"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face6#嗯？什么意思？", 37, 9400920, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#你怀揣着想去见父母的心情，生平第一次去冒险的时候，是什么样的感觉？", 37, 9400922, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#那个……我也不知道，虽然很害怕，但我也很激动……", 37, 9400920, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#那么一刻不停的制作出售果汁的今天呢？", 37, 9400922, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#虽然很辛苦但是很幸福……", 37, 9400920, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#紧张的一天结束后，感受到满足。在这种状态下，吃什么都是香甜的。", 37, 9400922, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face6#啊……", 37, 9400920, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=91717901"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.sendNormalTalk_Bottom("#face6#水！水在哪儿？！", 37, 9400920, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#艾米，给你。", 37, 9401160, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#谢谢！", 37, 9400920, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetSpecialAction("oid=91717901", "drink", 0, 0);
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 100);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink2", 100);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face6#咕咚咕咚", 37, 9400920, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=91717901"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face6#真的呢……水也是甜的！", 37, 9400920, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1#呵呵呵", 37, 9400922, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face6#真的……我17年人生中，第一次喝到这么甜的水。", 37, 9400920, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=91717901"], [10000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face2#哈哈哈，哥哥你也来尝一下！还有杰尼姐姐，还有#h0#！哈哈哈", 37, 9400920, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_setForceFlip("oid=91717901", 1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=91717901", -1);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face1#她好像受到了很大的启发呢……", 37, 9400921, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我有点不安。", 37, 9400923, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#我也是。", 37, 9400924, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#呼呼。", 37, 9401160, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_LeaveField("oid=91717898");
                                                                                                                                          cm.npc_LeaveField("oid=91717899");
                                                                                                                                          cm.npc_LeaveField("oid=91717900");
                                                                                                                                          cm.npc_LeaveField("oid=91717901");
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                          cm.effect_Text(["#fn黑体##fs20##e时光飞逝，夏天结束了……到了令人瞩目的对账时间。"], [50, 3000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_ChangeController(9400932, "oid=91721931", -110, 260, 3, -160, -60, 0, true, 0, false);
                                                                                                                                            cm.npc_SetSpecialAction("oid=91721931", "summon", 0, 0);
                                                                                                                                            cm.npc_ChangeController(9400929, "oid=91721932", -50, 260, 3, -100, 0, 0, true, 0, false);
                                                                                                                                            cm.npc_SetSpecialAction("oid=91721932", "summon", 0, 0);
                                                                                                                                            cm.npc_ChangeController(9400928, "oid=91721933", 30, 260, 3, -20, 80, 1, true, 0, false);
                                                                                                                                            cm.npc_SetSpecialAction("oid=91721933", 'summon', 0, 0);
                                                                                                                                            cm.npc_ChangeController(9401160, "oid=91721934", 100, 260, 3, 50, 150, 1, true, 0, false);
                                                                                                                                            cm.npc_SetSpecialAction("oid=91721934", "summon", 0, 0);
                                                                                                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), 150, 260);
                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                            cm.inGameDirectionEvent_OneTimeAction(2, 0);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#现在开始算账吧？！", 37, 9400920, false, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fs30##e[艾米咖啡1号店 - 销售结算 ] #n", 0);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                  cm.inGameDirectionEvent_Monologue("#fs20##e艾米特制果汁 ---------- 375杯 ", 0);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs20##e苹果芒果汁 ---------- 220杯 ", 0);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                      cm.inGameDirectionEvent_Monologue("#fs20##e西瓜汁 ---------- 182杯 ", 0);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs20##e柠檬橙汁 ---------- 101杯 ", 0);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                          cm.inGameDirectionEvent_Monologue("#fs20##e热带水果汁 ---------- 238杯 ", 0);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                            cm.inGameDirectionEvent_Monologue("#fs20##e柠檬水 ---------- 99杯 ", 0);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                              cm.inGameDirectionEvent_Monologue("#fs20##e美式咖啡 ---------- 312杯 ", 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fs20##e拿铁 ---------- 181杯 ", 0);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("#fs20##e焦糖玛奇朵 ---------- 202杯", 0);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs20##e摩卡 ---------- 102杯 ", 0);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                      cm.inGameDirectionEvent_Monologue("#fs20##e奶昔 ---------- 95杯 ", 0);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs20##e里科塔奶酪沙拉 ---------- 102盘 ", 0);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                          cm.inGameDirectionEvent_Monologue("#fs20##e番茄西兰花沙拉 ---------- 25盘 ", 0);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("#fs20##e海鲜橄榄沙拉 ---------- 98盘 ", 0);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                              cm.inGameDirectionEvent_Monologue("#fs20##e藜麦沙拉 ---------- 69盘 ", 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fs20#───────────────────────", 0);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("#fs25##e[ 合计 ]", 0);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs22##e饮料 ---------- 2107杯 ", 0);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                                      cm.inGameDirectionEvent_Monologue("#fs22##e沙拉 ---------- 294盘", 0);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs20#───────────────────────", 0);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#哇……竟然卖了这么多？", 37, 9400921, false, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#当然了！这段时间我都不知道使用了多少次榨汁机！", 37, 9400920, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#客人确实很多呢。", 37, 9401160, true, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#呃呃呃……就算一杯饮料5000金币，也得千，千万金币了吧？！！再加上沙拉的话！", 37, 9400920, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#真的吗？！？！", 37, 9400921, true, true);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                                                                                                                                                                      cm.inGameDirectionEvent_Monologue("#fs20#───────────────────────", 0);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs25##e供应价 ---------- 5,750,000", 0);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                                                          cm.inGameDirectionEvent_Monologue("#fs25##e(-) 材料费 ---------- 3,225,000 ", 0);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("#fs25##e(-) 家具分期付款 ---------- 2,550,000 ", 0);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                                                              cm.inGameDirectionEvent_Monologue("#fs25##e(-) 电费/水费 ---------- 371,000 ", 0);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("#fs20#───────────────────────", 0);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 100);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("#fs30##e最终金额 ---------- -396,000", 0);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/print", 128);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs20#───────────────────────", 0);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNewEffects(12, [0, 0, 320, 0, 0]);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_Monologue('', 1);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                                                            cm.setAccountQuestInfo(226, "count=2504;T=20200607101306");
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.npc_SetSpecialAction("oid=91721933", 'eye', -1, 0);
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#… ", 37, 9400921, false, true);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b… ", 57, 0, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#…? ", 37, 9400920, true, true);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#供应……价是什么？", 37, 9400920, true, true);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#我们出售饮料收到的钱。", 37, 9401160, true, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#为，为什么这么少！？！！", 37, 9400920, true, true);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我、艾米、埃尔宾、#h0#，咖啡店职员免单。帮忙装修的米兰达和艾丹免单。提供场所的凯尼斯免单。萌萌的特鲁迪也免单。", 37, 9401160, true, true);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#免单的客人有点多呢？", 37, 9401160, true, true);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#天……天啊……出售饮料的一……一半……？", 37, 9400920, true, true);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#艾丹长胖了很多，因为果汁的卡路里有点高。", 37, 9401160, true, true);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400932, null, cm.getPlayer().getId());
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=91721933"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#艾……艾丹！！！！！！！！", 37, 9400920, false, true);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#呃，呃啊啊啊！", 37, 9400923, true, true);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.npc_setForceFlip("oid=91721931", -1);
                                                                                                                                                                                                                                                            cm.npc_SetForceMove("oid=91721931", -1, 500, 200);
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face5#我……我的天……原来我只是……暂时做了个……梦啊……", 37, 9400920, false, true);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.setNpcSpecialActionReset("oid=91721933");
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/flop", 100);
                                                                                                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=91721933", 'flop', -1, 0);
                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=91721932"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                                                                                                    cm.sendNewEffects(14, [1000, 2000, 3000, 0, 0]);
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                      cm.npc_SetForceMove("oid=91721932", 1, 30, 100);
                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                        cm.npc_SetSpecialAction("oid=91721932", 'care', -1, 0);
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face5#艾，艾米！！！", 37, 9400921, false, true);
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b艾米，醒醒！！！！", 57, 0, true, true);
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                                                                                                cm.forceCompleteQuest(65443);
                                                                                                                                                                                                                                                                                cm.updateInfoQuest(501024, "start=1;obj=2");
                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                cm.warp(871000000, 6, false);
                                                                                                                                                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=91721931");
                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=91721932");
                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=91721933");
                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=91721934");
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
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}