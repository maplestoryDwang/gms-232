var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      if (!cm.canHold()) {
        cm.sendNormalTalk_Bottom("#face0#将#b装备栏#k清理出#b2个#k以上空格再来吧。", 36, 3005100, false, true, 1);
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(3005104, 'oid=623515', 30, 178, 2, -20, 80, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=623515", "summon", 0, 0);
      cm.npc_ChangeController(3005117, "oid=623516", 30, 178, 2, -20, 80, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=623516", 'summon', 0, 0);
      cm.npcMove(3005117, 0, -50, 2000);
      cm.npc_ChangeController(3005118, "oid=623517", 80, 178, 2, 30, 130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=623517", "summon", 0, 0);
      cm.npc_ChangeController(3005119, "oid=623518", 80, 178, 2, 30, 130, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=623518', "summon", 0, 0);
      cm.npcMove(3005118, 0, -50, 2000);
      cm.Npc_Fadeout("oid=623515", 0, 0);
      cm.Npc_Fadeout("oid=623516", 0, 0);
      cm.Npc_Fadeout("oid=623517", 0, 0);
      cm.Npc_Fadeout("oid=623518", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm57/AnotherdayOfTheAtelier_NoIntro", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 126, 209);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 282, 240);
    } else {
      if (status === v++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#来，现在可以将你的铃铛交给我了吗？", 36, 3005103, false, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face3#用来净化器物的器物，总感觉日后对我会是个极大的威胁啊。", 36, 3005103, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face2#嗯？", 36, 3005103, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（海娜说得没错，那些元素灵毫无反应……）", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（奶奶……这次好像是奶奶错了。）", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（我原以为只要一直相信……就可以的……）", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === v++) {
                          cm.npc_ChangeController(3005102, "oid=623529", 247, 212, 2, 197, 297, 0, true, 1500, false);
                          cm.npc_SetSpecialAction('oid=623529', 'summon', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === v++) {
                            cm.effect_Voice("Voice6.img/lara/13/Female/0", 100);
                            cm.sendNormalTalk_Bottom("#face1#喂，那个玩偶，用来当礼物未免太邋遢了吧？", 36, 3005102, false, true, 1);
                          } else {
                            if (status === v++) {
                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                              cm.effect_Voice("Voice6.img/lara/13/Female/1", 100);
                              cm.sendNormalTalk_Bottom("#face0#格里！！", 36, 3005100, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.effect_Voice("Voice6.img/lara/13/Female/2", 100);
                                cm.sendNormalTalk_Bottom("#face3#为……为什么会回来？", 36, 3005103, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.effect_Voice("Voice6.img/lara/13/Female/3", 100);
                                  cm.sendNormalTalk_Bottom("#face3#你就该感受到深深的背叛感，永远离开……！", 36, 3005103, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.effect_Voice("Voice6.img/lara/13/Female/4", 100);
                                    cm.sendNormalTalk_Bottom("#face1#你在说什么呢？我从一开始就没离开过。", 36, 3005102, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.effect_Voice("Voice6.img/lara/13/Female/5", 100);
                                      cm.sendNormalTalk_Bottom("#face4#我不过是暂时误入歧途罢了。", 36, 3005102, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === v++) {
                                          cm.effect_Voice("Voice6.img/lara/14/Female/0", 100);
                                          cm.sendNormalTalk_Bottom("#face4#对不起，可我想着你可能会离开，还是会……", 36, 3005100, false, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.effect_Voice("Voice6.img/lara/14/Female/1", 100);
                                            cm.sendNormalTalk_Bottom("#face4#我始终无法放下心里那种他或许会回来的感觉。", 36, 3005100, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.effect_Voice("Voice6.img/lara/14/Female/2", 100);
                                              cm.sendNormalTalk_Bottom("#face4#……你愿意相信我吗？", 36, 3005100, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.effect_Voice("Voice6.img/lara/14/Female/3", 100);
                                                cm.sendNormalTalk_Bottom("#face4#哈哈。", 36, 3005102, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.effect_Voice("Voice6.img/lara/14/Female/4", 100);
                                                  cm.sendNormalTalk_Bottom("#face4#这天底下哪会有不相信你的人？", 36, 3005102, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.Npc_Fadeout("oid=623515", 255, 1000);
                                                    cm.Npc_Fadeout("oid=623516", 255, 1000);
                                                    cm.Npc_Fadeout("oid=623517", 255, 1000);
                                                    cm.Npc_Fadeout("oid=623518", 255, 1000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                      cm.sendNormalTalk_Bottom("#face4#小家伙们，你们回来了啊！", 36, 3005100, false, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face4#这样啊，远离的并非那些小家伙，而是我的心。", 36, 3005100, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face4#现在应该可以发挥出实力了！", 36, 3005100, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.inGameDirectionEvent_Unknown9(1000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else if (status === v++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.npc_LeaveField("oid=623529");
                                                                cm.npc_LeaveField("oid=623515");
                                                                cm.npc_LeaveField("oid=623516");
                                                                cm.npc_LeaveField('oid=623517');
                                                                cm.npc_LeaveField("oid=623518");
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.dispose();
                                                                cm.openNpc(3005100, "啦啦30级任务_击退海娜");
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}