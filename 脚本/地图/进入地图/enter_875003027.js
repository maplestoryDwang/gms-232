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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401277, "oid=2152926", -1900, 0, 10, -1950, -1850, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152926", "summon", 0, 0);
      cm.npc_ChangeController(9401278, "oid=2152927", -1740, 0, 21, -1790, -1690, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2152927", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, -1940, 60]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18##e玄山派正门", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2152926", -1, 50, 100);
            cm.sendNormalTalk_Bottom("#face8#还没有任何消息。", 37, 9401277, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#别担心，姑娘！我的手下在各个地方盯着呢。", 37, 9401278, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0##b风形帮了我的大忙。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#唉~那些事现在就别提了。", 37, 9401278, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(12, [1000, -2000, 60]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1##b素笑，我想起了你从那条路爬上来的时候。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1##b双手抱着孩子们爬了上来。\r\n真不知道小小的身躯怎么能爆发出这么大的力量。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2152926", 1);
                            cm.sendNormalTalk_Bottom("#face1#因为我……不能丢下那些受伤的孩子！", 37, 9401277, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#呵呵呵，素笑姑娘也许是玄山派个子最小的，但倔强劲却是玄山派第一。", 37, 9401278, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#请称之为气概！", 37, 9401277, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(9401292, "oid=2152949", -2280, 0, 10, -2330, -2230, 0, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=2152949", 'summon', 0, 0);
                                  cm.npc_setForceFlip("oid=2152926", -1);
                                  cm.npc_SetForceMove("oid=2152949", 1, 100, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯？林达尔？！就是那时救的那个林达尔吗？", 37, 9401277, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2152926", -1, 100, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal3", 100);
                                        cm.npc_SetSpecialAction("oid=2152949", "action", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=2152949", 'action', 0, 0);
                                          cm.sendNormalTalk_Bottom("啾喔喔喔！啾喔喔！", 37, 9401292, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=2152926"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                              cm.sendNormalTalk_Bottom("#face2#太可爱了！好像知道我们救了它！", 37, 9401277, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                                cm.npc_SetSpecialAction("oid=2152949", "action", 0, 0);
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal2", 100);
                                                cm.sendNormalTalk_Bottom("啾喔！", 37, 9401292, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#咦？你好像点头了？", 37, 9401277, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#乖孩子，过来。\r\n你也想加入玄山派吗？", 37, 9401277, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=2152949", "action", 0, 0);
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal2", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("啾喔喔~！", 37, 9401292, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=2152927", -1, 150, 100);
                                                            cm.sendNormalTalk_Bottom("#face1#那不是这一地区最聪明的野兽吗？\r\n但是性子应该没那么好吧……", 37, 9401278, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/rindal3", 100);
                                                              cm.sendNormalTalk_Bottom('啾？', 37, 9401292, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#怎么这么乖巧可爱？是不是该给它起个名字呢？", 37, 9401277, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=2152926");
                                                                    cm.npc_LeaveField("oid=2152949");
                                                                    cm.npc_LeaveField("oid=2152927");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Text(["#fn黑体##fs18##e一个时辰之后……", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                                                                      cm.npc_ChangeController(9401277, "oid=2152951", -2170, 0, 10, -2220, -2120, 1, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=2152951", "summon", 0, 0);
                                                                      cm.onTeleport(0, 3, cm.getPlayer().getId(), -2100, 0);
                                                                      cm.npc_ChangeController(9401278, "oid=2152952", -2030, 0, 10, -2080, -1980, 1, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=2152952", 'summon', 0, 0);
                                                                      cm.npc_ChangeController(9401292, "oid=2152953", -1820, 0, 11, -1870, -1770, 1, true, 0, false);
                                                                      cm.npc_SetSpecialAction("oid=2152953", "summon", 0, 0);
                                                                      cm.setNPC_Fadein(9401292, 1);
                                                                      cm.sendNewEffects(17, [0, 2000, 1000, -2200, 70]);
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
                                                                            cm.npc_ChangeController(9401287, "oid=2152954", -2970, 0, 8, -3020, -2920, 1, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=2152954", "summon", 0, 0);
                                                                            cm.setNPC_Fadein(9401287, 1);
                                                                            cm.sendNormalTalk_Bottom("#face2#那边有人上来了！", 37, 9401277, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=2152954", 1, 500, 150);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2152951", -1, 100, 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=2152952", -1, 100, 100);
                                                                                    cm.sendNormalTalk_Bottom("哈，哈……我是第1名吗？", 37, 9401287, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#是的。辛苦了。", 37, 9401277, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("谢谢。", 37, 9401287, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#（自言自语）", 37, 9401278, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#为后面的人清理掉了障碍物，还是第1名。你可真厉害。", 37, 9401277, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("合格……了吗？", 37, 9401287, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#当然。你先休息一下。", 37, 9401277, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_LeaveField("oid=2152954");
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.effect_Text(["#fn黑体##fs18##e一顿饭之后……", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                                                                                                      cm.npc_ChangeController(9401287, "oid=2152956", -1750, 0, 21, -1800, -1700, 1, true, 0, false);
                                                                                                      cm.npc_SetSpecialAction("oid=2152956", "summon", 0, 0);
                                                                                                      cm.setNPC_Fadein(9401287, 1);
                                                                                                      cm.npc_ChangeController(9401369, "oid=2152957", -2950, 0, 8, -3000, -2900, 0, true, 0, false);
                                                                                                      cm.npc_SetSpecialAction("oid=2152957", "summon", 0, 0);
                                                                                                      cm.npc_ChangeController(9401370, "oid=2152958", -2950, 0, 8, -3000, -2900, 0, true, 0, false);
                                                                                                      cm.npc_SetSpecialAction("oid=2152958", 'summon', 0, 0);
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetForceMove("oid=2152957", 1, 400, 150);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("呃啊啊！终于到了！", 37, 9401369, false, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#辛苦了。", 37, 9401277, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("但……但是……玄山派怎……怎么变成了这样？", 37, 9401369, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetForceMove("oid=2152958", 1, 320, 150);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("啊啊啊……终于……", 37, 9401370, false, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom('玄山派被毁的消息……', 37, 9401369, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face3##b玄山派还在。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("内部也……破败不堪……", 37, 9401370, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=2152957", -1);
                                                                                                                            cm.sendNormalTalk_Bottom('看来传闻是真的……', 37, 9401369, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=2152957", 1);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=2152957", -1, 500, 150);
                                                                                                                                cm.sendNormalTalk_Bottom("我……先下去了……", 37, 9401369, false, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_setForceFlip("oid=2152957", -1);
                                                                                                                                    cm.sendNormalTalk_Bottom("我也一起去！！！", 37, 9401370, false, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_SetForceMove("oid=2152958", -1, 500, 100);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_LeaveField("oid=2152957");
                                                                                                                                          cm.npc_LeaveField("oid=2152958");
                                                                                                                                          cm.npc_ChangeController(9401288, "oid=2152960", -2650, 0, 10, -2700, -2600, 0, true, 0, false);
                                                                                                                                          cm.npc_SetSpecialAction("oid=2152960", "summon", 0, 0);
                                                                                                                                          cm.setNPC_Fadein(9401288, 1);
                                                                                                                                          cm.Npc_Fadeout("oid=2152960", 0, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 30, 0, 0, 0, 500, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 100, 0, 0, 0, 500, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 170, 0, 0, 0, 500, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3##b没有人再上来了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_setForceFlip("oid=2152951", 1);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#……看来孩子们在下山的时候谈过了。", 37, 9401277, false, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3##b他们应该只是想借助玄山派的权势和声望。和我们不是一路人。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face3##b我们进去吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_setForceFlip("oid=2152951", -1);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#等一下！", 37, 9401277, false, true, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                                        cm.Npc_Fadeout("oid=2152960", 255, 1000);
                                                                                                                                                                        cm.npc_SetForceMove("oid=2152960", 1, 200, 80);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.npc_SetForceMove("oid=2152951", -1, 20, 100);
                                                                                                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                                                                                                                                                          cm.sendNormalTalk_Bottom("我，呼……呼……太晚了吗？", 37, 9401288, false, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#不，没来晚。一路辛苦了。", 37, 9401277, true, true, 1);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("呼，呼……太好了。嘿嘿……", 37, 9401288, true, true, 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.npc_LeaveField("oid=2152951");
                                                                                                                                                                                  cm.npc_LeaveField("oid=2152952");
                                                                                                                                                                                  cm.npc_LeaveField("oid=2152956");
                                                                                                                                                                                  cm.npc_LeaveField("oid=2152960");
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -650, 325);
                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                                                                    cm.npc_ChangeController(9401287, "oid=2152968", -520, 325, 15, -570, -470, 1, true, 0, false);
                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=2152968", "summon", 0, 0);
                                                                                                                                                                                    cm.npc_ChangeController(9401288, "oid=2152969", -450, 325, 15, -500, -400, 1, true, 0, false);
                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=2152969", "summon", 0, 0);
                                                                                                                                                                                    cm.npc_ChangeController(9401277, "oid=2152970", -380, 325, 15, -430, -330, 1, true, 0, false);
                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=2152970", "summon", 0, 0);
                                                                                                                                                                                    cm.npc_ChangeController(9401292, "oid=2152971", -320, 325, 15, -370, -270, 1, true, 0, false);
                                                                                                                                                                                    cm.npc_SetSpecialAction("oid=2152971", "summon", 0, 0);
                                                                                                                                                                                    cm.sendNewEffects(17, [0, 1000, 2000, -550, 390]);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 170, 0, 0, 0, 1500, 0);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0##b正如你们所见，玄山派遭到了外部的攻击。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##b在此过程中失去了很多人……门派也遭遇灭顶之灾……但玄山派的武学还完好无损。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("……没关系。我想成为玄山派弟子。", 37, 9401287, true, true, 1);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("嘿嘿，我也一样！我会努力的！", 37, 9401288, true, true, 1);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1##b好的，以后让我们一起努力。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#很好！今天一定很累了，先去休息一下。明天再开始修炼。", 37, 9401277, true, true, 1);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.npc_setForceFlip("oid=2152968", 1);
                                                                                                                                                                                                      cm.npc_setForceFlip("oid=2152969", 1);
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#来，我带你到住的地方去。跟我来。", 37, 9401277, true, true, 1);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.npc_setForceFlip("oid=2152970", 1);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.npc_SetForceMove("oid=2152970", 1, 1000, 100);
                                                                                                                                                                                                          cm.npc_SetForceMove("oid=2152969", 1, 1000, 100);
                                                                                                                                                                                                          cm.npc_SetForceMove("oid=2152968", 1, 1000, 100);
                                                                                                                                                                                                          cm.npc_SetForceMove("oid=2152971", 1, 1000, 100);
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4##b（……我一定会保护好素笑和新弟子们。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4##b（不管发生什么事。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNewEffects(19, [0]);
                                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                                    cm.forceCompleteQuest(65941);
                                                                                                                                                                                                                    cm.gainExp(15918);
                                                                                                                                                                                                                    cm.updateInfoQuest(65999, "training=2;right=1;main=1;entrance=1;left=1");
                                                                                                                                                                                                                    cm.updateInfoQuest(65999, "training=2;right=1;main=1;entrance=1;left=1;f1=3");
                                                                                                                                                                                                                    cm.gainItem(4036721, -10);
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2152953");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2152968");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2152969");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2152970");
                                                                                                                                                                                                                    cm.npc_LeaveField("oid=2152971");
                                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                                    cm.warp(875000001, 1, false);
                                                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}