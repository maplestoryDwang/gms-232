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
      cm.sendNewEffects(17, [0, 2000, 2000, 1600, 320]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9400932, "oid=2587377", 2150, 250, 55, 2100, 2200, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2587377", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2587377", "stand", -1, 0);
        cm.npc_ChangeController(9400928, "oid=2587378", 2100, 250, 55, 2050, 2150, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2587378", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2587378", "stand", -1, 0);
        cm.npc_ChangeController(9400929, "oid=2587379", 2200, 250, 55, 2150, 2250, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2587379", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2587379", "stand", -1, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 2200, 250);
        cm.npc_SetForceMove("oid=2587378", -1, 500, 100);
        cm.npc_SetForceMove("oid=2587379", -1, 550, 70);
        cm.npc_SetForceMove("oid=2587377", -1, 280, 100);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#哎呦，已经到晚上了呢。", 37, 9400921, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNewEffects(17, [1000, 2000, 2000, 600, 300]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#啊，#h0#，快看那儿！", 37, 9400920, false, true);
                  } else {
                    if (status === V++) {
                      cm.onSetMapTagedObjectVisible(1, "light1", 512);
                      cm.onSetMapTagedObjectVisible(1, "light1", 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(17, [500, 2000, 2000, 1650, 320]);
                      } else {
                        if (status === V++) {
                          cm.askMenu_Bottom("#face0#嗯？哪来的影子？\r\n\r\n#b#L0#这次真的是怪物的影子！#l#k\r\n#b#L1#……它在玩……影子游戏吗？#l#k", 37, 9400921);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#b这个再怎么看……', 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#是怪物~！嘿嘿，你这家伙，到了晚上才露出庐山真面目啊~~！", 37, 9400920, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=2587378", -1, 500, 300);
                                cm.sendNormalTalk_Bottom('#b…。', 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2587377", 1, 20, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(150);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=2587377", -1);
                                        cm.inGameDirectionEvent_AskAnswerTime(150);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=2587377", 1, 20, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(150);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2587379", 1, 10, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(150);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#嗬，怪，怪物……？真的假的？？\r\n#h0#，我今天玩得很开心，我现在可以回家了吗？", 37, 9400923, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2587377", 1, 20, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(150);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=2587377", 1, 20, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(150);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b…。", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=2587379"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#哎呦，怎么可能！两个人都无法阻止……#h0#，我们也要快点追赶啊！", 37, 9400921, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 600);
                                                            cm.npc_SetForceMove("oid=2587379", -1, 600, 200);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=2587377", -1, 50, 70);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=2587377", -1, 50, 70);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=2587377", -1, 500, 70);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNewEffects(17, [2000, 2000, 2000, 1350, 320]);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_LeaveField("oid=2587378");
                                                                        cm.npc_LeaveField("oid=2587378");
                                                                        cm.npc_LeaveField("oid=2587379");
                                                                        cm.npc_LeaveField("oid=2587379");
                                                                        cm.npc_LeaveField("oid=2587377");
                                                                        cm.npc_LeaveField("oid=2587377");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNewEffects(17, [0, 2000, 2000, 0, 320]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_ChangeController(9400928, "oid=2592694", 700, 250, 53, 650, 750, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2592694", 'summon', 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2592694", "stand", -1, 0);
                                                                            cm.npc_ChangeController(9400929, "oid=2592695", 700, 250, 53, 650, 750, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2592695", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2592695", "stand", -1, 0);
                                                                            cm.npc_ChangeController(9400932, "oid=2592696", 700, 250, 53, 650, 750, 1, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2592696", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2592696", 'stand', -1, 0);
                                                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), 700, 250);
                                                                            cm.npc_ChangeController(9401060, "oid=2592697", 100, 270, 51, 50, 150, 1, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2592697", 'summon', 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2592697", 'stand', -1, 0);
                                                                            cm.npc_ChangeController(9401061, "oid=2592698", 150, 270, 51, 100, 200, 1, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2592698", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2592698", "stand", -1, 0);
                                                                            cm.npc_ChangeController(9401062, "oid=2592699", -170, 270, 22, -220, -120, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2592699", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2592699", 'stand', -1, 0);
                                                                            cm.npc_ChangeController(9401063, "oid=2592700", -150, 290, 51, -200, -100, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2592700", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2592700", "stand", -1, 0);
                                                                            cm.npc_ChangeController(9401064, "oid=2592701", -60, 270, 51, -110, -10, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2592701", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2592701", "stand", -1, 0);
                                                                            cm.npc_ChangeController(9400933, "oid=2592702", -110, 270, 22, -160, -60, 0, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2592702", "summon", 0, 0);
                                                                            cm.npc_SetSpecialAction("oid=2592702", "stand", -1, 0);
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=2592698", 1, 10, 100);
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2592698"], [1650, 0, 0, 1, 0, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#哇，他们又来了！", 37, 9401063, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=2592697", 1, 10, 100);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2592697"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2592699"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2592700"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2592701"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNewEffects(17, [2000, 2000, 2000, -100, 320]);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=2592697", -1, 1000, 300);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=2592700", -1, 1000, 250);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2592698", -1, 1000, 300);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=2592701", -1, 1000, 250);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetForceMove("oid=2592699", -1, 1000, 300);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              cm.npc_LeaveField("oid=2592700");
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNewEffects(17, [1000, 2000, 2000, 200, 320]);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=2592694", -1, 600, 300);
                                                                                                  cm.npc_SetForceMove("oid=2592695", -1, 550, 200);
                                                                                                  cm.npc_SetForceMove("oid=2592696", -1, 450, 200);
                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
                                                                                                  cm.sendNormalTalk_Bottom("#face4#喂，你们是谁！站住！！", 37, 9400920, false, true);
                                                                                                  cm.npc_LeaveField("oid=2592697");
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b#b(又逃走了呢……)#k", 57, 0, true, true);
                                                                                                    cm.npc_LeaveField("oid=2592699");
                                                                                                    cm.npc_LeaveField("oid=2592701");
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNewEffects(17, [1000, 2000, 2000, 0, 320]);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#艾米！话要慢慢说啊！", 37, 9400921, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face4#我什么都没做！是他们先逃走的！", 37, 9400920, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#什么啊，这不是米兰达吗！呼……", 37, 9400923, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#哎呦，艾米、埃尔宾、艾丹、还有#h0#……\r\n这大晚上的有什么事情吗？", 37, 9400924, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#b米兰达，这大半夜的，你在这儿干嘛？", 57, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#如你所见……正在进行创作活动。好的气氛对灵感异常重要。", 37, 9400924, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face3#说是有奇怪的影子，所以我来这里看看。艾米咋咋呼呼地说是怪物的影子。\r\n原来是米兰达的饰品和跳舞的孩子们的影子啊。", 37, 9400921, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#凯尼斯大叔的新建筑……我正在制作一座很适合那里的雕像。", 37, 9400924, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#呃呃！帅爆了！米兰达，你真了不起！", 37, 9400923, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face4#这个现在不重要，艾丹！！", 37, 9400920, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom('#face0#…。', 37, 9400924, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face3#不是，虽，虽然很重要……！反正！\r\n米兰达，刚刚那些小孩，是从哪里来的？", 37, 9400920, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这个嘛……我也不是很清楚……我只是很意外你竟喜欢装饰品……\r\n话说大家都去哪里了？", 37, 9400924, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#b奇怪，只看我们一眼就逃走了。", 57, 0, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##h0#，是哪里出错了吗？", 37, 9400924, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#一定要说的话，是因为他们犯了错……啊，也不是！\r\n他们没有任何理由就逃走了！", 37, 9400920, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#夜也黑了，虽说很容易找到灵感，但不要太过勉强自己啊，米兰达。", 37, 9400921, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#完工了。\r\n明天交给凯尼斯大叔就行了。", 37, 9400924, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#其实我很担心自己能不能将它搬运到森林深处的工地里。\r\n我都说到这份儿上了，你能帮帮我吗？", 37, 9400924, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#当然！包在艾丹身上！像这种装饰品我瞬间就能做好！", 37, 9400923, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#就这装饰品……", 37, 9400924, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#不，不是！这些漂亮的装饰品……那……那个……", 37, 9400923, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#噗……\r\n我知道了，那就拜托你了。", 37, 9400924, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#天色不早了，今天先休息吧。#h0#也一样。\r\n明早天一亮就出发吧。", 37, 9400924, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.forceCompleteQuest(64905);
                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                        cm.warp(871000053, 0, true);
                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Game.img/QuestClear", 100);
                                                                                                                                                        cm.effect_OnUserEff("Effect/BasicEff.img/QuestClear");
                                                                                                                                                        cm.npc_LeaveField("oid=2592694");
                                                                                                                                                        cm.npc_LeaveField("oid=2592694");
                                                                                                                                                        cm.npc_LeaveField("oid=2592695");
                                                                                                                                                        cm.npc_LeaveField("oid=2592695");
                                                                                                                                                        cm.npc_LeaveField("oid=2592696");
                                                                                                                                                        cm.npc_LeaveField("oid=2592696");
                                                                                                                                                        cm.npc_LeaveField("oid=2592697");
                                                                                                                                                        cm.npc_LeaveField("oid=2592697");
                                                                                                                                                        cm.npc_LeaveField("oid=2592698");
                                                                                                                                                        cm.npc_LeaveField("oid=2592698");
                                                                                                                                                        cm.npc_LeaveField("oid=2592699");
                                                                                                                                                        cm.npc_LeaveField("oid=2592699");
                                                                                                                                                        cm.npc_LeaveField("oid=2592700");
                                                                                                                                                        cm.npc_LeaveField("oid=2592700");
                                                                                                                                                        cm.npc_LeaveField("oid=2592701");
                                                                                                                                                        cm.npc_LeaveField("oid=2592701");
                                                                                                                                                        cm.npc_LeaveField("oid=2592702");
                                                                                                                                                        cm.npc_LeaveField("oid=2592702");
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