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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_SetSpecialAction("oid=27876042", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=27876043", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/11/02;accSum=1339606;QuestCount=3;accCheck=201102115634123");
        cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;q4Set=1;start=0;q5Set=0;lT=20/04/19;qSetDate=20/11/02;accSum=1399678;QuestCount=3;accCheck=201102115634123");
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我们约定好要结婚。\r\n然后一起旅行，看#b画#k，一起相伴一生。", 37, 9062259, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#我的未婚夫是一个#b画家#k。\r\n本来因为丢了戒指非常担心来着，谢谢你们帮我找到了。", 37, 9062259, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("原来如此……", 57, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("那个……可是……很遗憾……", 57, 0, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#什么……？", 37, 9062259, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("您已经……#b死了#k。", 57, 0, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("#fs24#告诉了她假面的诅咒和舞会真相。", 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                          } else {
                            if (status === V++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你说什么呢？我要去婚礼现场。让开。", 37, 9062259, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我知道这一时难以接受……但这一切都是真的。", 37, 9062255, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#难以置信……\r\n不，我#b不信#k！", 37, 9062259, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我们是多么深爱彼此……\r\n我必须要举行婚礼……\r\n#b我说我会永远在这里等他#k然后举行婚礼！", 37, 9062259, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.Npc_Fadeout("oid=27876043", 0, 1000);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#这是……微笑的假面好像被#b无法实现的爱情#k记忆禁锢住了。\r\n", 37, 9062255, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("对……她好像一心只想着去参加#b婚礼#k。", 57, 0, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("该怎么办呢……\r\n难道要去找那个#b未婚夫#k吗？", 57, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#等等，她刚刚不是说未婚夫是一位#b画家#k吗？", 37, 9062255, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("好像是。", 57, 0, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#……？！说不定", 37, 9062255, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setStandAloneMode(false);
                                                        cm.npc_LeaveField("oid=27876042");
                                                        cm.npc_LeaveField("oid=27876043");
                                                        cm.dispose();
                                                        cm.warp(993175420, 0, false);
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}