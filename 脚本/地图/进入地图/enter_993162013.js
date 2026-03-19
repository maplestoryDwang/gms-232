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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3001958, "oid=6404760", 1450, 100, 2, 1400, 1500, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6404760", "summon", 0, 0);
      cm.npc_ChangeController(3001867, "oid=6404761", 815, 100, 1, 765, 865, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6404761", 'summon', 0, 0);
      cm.npc_ChangeController(3001867, "oid=6404762", 900, 100, 1, 850, 950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6404762", "summon", 0, 0);
      cm.npc_ChangeController(3001867, "oid=6404763", 1050, 100, 2, 1000, 1100, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6404763", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 930, 90);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#那家伙是谁！？他撕掉了谴责伯爵的壁报！", 36, 3001865, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=6404761", -1, 1, 120);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=6404763", 1, 15, 120);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#来了个可疑家伙，快抓住他！", 36, 3001865, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=6404761", 1, 1, 120);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face6#嘁，被发现了！！", 36, 3001957, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                          cm.npc_LeaveField("oid=6397257");
                          cm.npc_LeaveField("oid=6404549");
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1400, 140);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=6404760", 1, 380, 130);
                                cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 2000, 4000, 1900, 140);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face6#我是塞德里克伯爵。容貌俊美，外加重权在握的，\r\n王国最优秀的男人。", 36, 3001957, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face6#你问为什么我现在这样被人追赶？\r\n嗯……那可能是因为……", 36, 3001957, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=6404760");
                                              cm.npc_LeaveField("oid=6404761");
                                              cm.npc_LeaveField("oid=6404762");
                                              cm.npc_LeaveField("oid=6404763");
                                              cm.npc_ChangeController(3001958, "oid=6407068", 2030, 100, 3, 1980, 2080, 1, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=6407068", "summon", 0, 0);
                                              cm.npc_ChangeController(3001867, "oid=6407069", 1735, 100, 3, 1685, 1785, 0, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=6407069", "summon", 0, 0);
                                              cm.npc_ChangeController(3001867, "oid=6407070", 1800, 100, 3, 1750, 1850, 0, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=6407070", "summon", 0, 0);
                                              cm.npc_ChangeController(3001867, "oid=6407071", 1880, 100, 3, 1830, 1930, 0, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=6407071", "summon", 0, 0);
                                              cm.npc_SetSpecialAction("oid=6407068", "special3", -1, 0);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2070, 90);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#你为什么撕掉壁报？", 36, 3001865, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#莫非你是亲伯爵派？", 36, 3001865, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face6#要说我如此受人厌恶的理由，\r\n我想那应该是……", 36, 3001957, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face6#因为我好看得人神共愤。", 36, 3001957, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face6#都说天妒英才，所以会给予格外严酷的考验。\r\n尽管经历了无数磨难，我仍然不断地遭到妒忌……", 36, 3001957, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face6#唉……那些无法拥有财富，荣誉和美貌的人，\r\n就只能像这样对我进行言语攻击。", 36, 3001957, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#那卑鄙的家伙……竟指使部下来撕壁报吗！", 36, 3001865, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#把他的长袍掀起来。", 36, 3001865, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face6#嘁……", 36, 3001957, false, true, 1);
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
                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1100, 90);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#布乌……那孩子跑哪去了？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face6#走，走开！", 36, 3001957, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#什么声音？", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 360);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 2295, 116);
                                                                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2200, 90);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.gainSkillBuff(80000268);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 2100, 90);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#谁，什么人！？是一伙的吗？", 36, 3001865, false, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#把那家伙也一起抓住！", 36, 3001865, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(虽不知道是什么情况，但人们似乎\r\n误以为我跟他是一伙的了……我可不想被抓。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/sword_return", 100);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(剑刚飞出，周围就像电光划过似的，瞬间被照得一片明亮。\r\n行人们察觉到威胁，纷纷逃跑了。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face6#舞动的剑！？", 36, 3001957, false, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_LeaveField("oid=6407069");
                                                                                                                                          cm.npc_LeaveField("oid=6407070");
                                                                                                                                          cm.npc_LeaveField("oid=6407071");
                                                                                                                                          cm.npc_setForceFlip("oid=6407068", 1);
                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face6#你，你是传说中的骑士……你是来救我的吗？\r\n你怎么知道我身陷危机……", 36, 3001957, false, true, 1);
                                                                                                                                              cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(不知名的陌生男子念叨着一堆奇怪的话。\r\n我得继续听到什么时候？)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/bell3", 100);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哎呀，时间都这么晚了……", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                    cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 5);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face6#哎，等等，至少告诉我，你的名字！", 36, 3001957, false, true, 1);
                                                                                                                                                        cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/14", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                                                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
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
                                                                                                                                                                  cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2100, 90);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face6#终于见到你了……我苦苦寻找的传说中的骑士……", 36, 3001957, false, true, 1);
                                                                                                                                                                      cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.npc_ChangeController(3001959, "oid=6412393", 2135, 100, 4, 2085, 2185, 1, true, 1500, false);
                                                                                                                                                                          cm.npc_SetSpecialAction("oid=6412393", "summon", 0, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#唉……不是再三嘱咐过您，不要独自外出吗……\r\n您又去看那壁报了？", 36, 3001959, false, true, 1);
                                                                                                                                                                            cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/16", 100);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face6#那说的可是我的事，怎么可能不关心呢。", 36, 3001957, true, true, 1);
                                                                                                                                                                              cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/17", 100);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#下回请一定带上我，知道吗？\r\n因为您老是擅自行动，害得我的工作量都增加了！", 36, 3001959, true, true, 1);
                                                                                                                                                                                cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face6#好~好~知道啦。我会听话的。", 36, 3001957, false, true, 1);
                                                                                                                                                                                    cm.effect_Voice("Voice2.img/adele/present/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face6#传说中的骑士……没想到她还挺害羞的？\r\n你等着，下回我一定不会错过你了！", 36, 3001957, false, true, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                    cm.warp(993162014, 0, false);
                                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                    cm.npc_LeaveField("oid=6407068");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=6412393");
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