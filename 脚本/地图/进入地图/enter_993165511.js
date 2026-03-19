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
      cm.Hidden_background("night", 1, 0, 0, 0);
      cm.monadForceMove("night", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -295, 200);
      cm.npc_ChangeController(3005102, "oid=620330", -365, 200, 1, -415, -315, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=620330", 'summon', 0, 0);
      cm.npc_ChangeController(3005103, "oid=620331", -200, 200, 1, -250, -150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=620331", "summon", 0, 0);
      cm.npc_ChangeController(3005108, "oid=620332", -365, 200, 1, -415, -315, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=620332', "summon", 0, 0);
      cm.npc_ChangeController(3005120, "oid=620333", -500, 200, 1, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=620333", 'summon', 0, 0);
      cm.npc_ChangeController(3005121, "oid=620334", -580, 200, 1, -630, -530, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=620334", "summon", 0, 0);
      cm.Npc_Fadeout("oid=620332", 0, 0);
      cm.Npc_Fadeout("oid=620333", 0, 0);
      cm.Npc_Fadeout('oid=620334', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -260, 225);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice6.img/lara/7/Female/1", 100);
              cm.effect_Text(["#fn黑体##fs18#甜蜜蜜工坊", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.sendNormalTalk_Bottom("#face0#这个工坊是专属于我的，既然看来情况紧急，就请二位先藏在这里吧。", 37, 3005103, false, true, 1);
            } else {
              if (status === V++) {
                cm.Npc_Fadeout("oid=620330", 0, 1000);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice6.img/lara/7/Female/2", 100);
                  cm.sendNormalTalk_Bottom("#face3#到底逃去哪里了啊！", 37, 3005108, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("Voice6.img/lara/7/Female/3", 100);
                    cm.sendNormalTalk_Bottom("#face0#明……明明就是消失在这边的……", 37, 3005120, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.Npc_Fadeout('oid=620332', 255, 1000);
                      cm.Npc_Fadeout("oid=620333", 255, 1000);
                      cm.Npc_Fadeout("oid=620334", 255, 1000);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/lara/7/Female/4", 100);
                        cm.sendNormalTalk_Bottom("#face0#领主大人，今天还没到交货的日子，您怎么会突然大驾光临？", 37, 3005103, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/lara/7/Female/5", 100);
                          cm.sendNormalTalk_Bottom("#face0#你在这附近有没有看到后巷那头狼还有陌生的外乡人？", 37, 3005108, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice6.img/lara/7/Female/6", 100);
                            cm.sendNormalTalk_Bottom("#face0#我不过是在画献给领主大人的画，什么都没见过。", 37, 3005103, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice6.img/lara/7/Female/7", 100);
                              cm.sendNormalTalk_Bottom("#face0#你这话没有撒谎吧？", 37, 3005108, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice6.img/lara/7/Female/8", 100);
                                cm.sendNormalTalk_Bottom("#face0#等着我去画的画还有好多呢，我何苦浪费宝贵的时间\r\n用来撒谎呢？", 37, 3005103, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/lara/7/Female/9", 100);
                                  cm.sendNormalTalk_Bottom("#face0#领主大人抓着我不放，我实在是担心赶不上交货日期啊。", 37, 3005103, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice6.img/lara/7/Female/10", 100);
                                    cm.sendNormalTalk_Bottom("#face0#那，那个画当然要按时画好了！\r\n我就是为了这个才提供这么一间工坊和昂贵的工具的！", 37, 3005108, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice6.img/lara/7/Female/11", 100);
                                      cm.sendNormalTalk_Bottom("#face0#领……领主大人，是不是要再翻查看看？", 37, 3005120, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("Voice6.img/lara/7/Female/12", 100);
                                        cm.sendNormalTalk_Bottom("#face0#你说什么呢！要是我那些珍贵的画出现了一点瑕疵，该如何是好！", 37, 3005108, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("Voice6.img/lara/7/Female/13", 100);
                                          cm.sendNormalTalk_Bottom("#face3#一定是中途追丢了！你们这帮无能的家伙，扣工资！", 37, 3005108, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.Npc_Fadeout("oid=620332", 0, 1000);
                                            cm.Npc_Fadeout("oid=620333", 0, 1000);
                                            cm.Npc_Fadeout('oid=620334', 0, 1000);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.setStandAloneMode(false);
                                            cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;53=h1;55=h0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
                                            cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;53=h1;73=h1;55=h0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
                                            cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;73=h1;55=h0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
                                            cm.forceCompleteQuest(36217);
                                            cm.gainExp(4468);
                                            cm.gainExp(2370);
                                            cm.npc_LeaveField('oid=620330');
                                            cm.npc_LeaveField("oid=620331");
                                            cm.npc_LeaveField("oid=620332");
                                            cm.npc_LeaveField("oid=620333");
                                            cm.npc_LeaveField("oid=620334");
                                            cm.dispose();
                                            cm.warp(410004001, 0, true);
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}