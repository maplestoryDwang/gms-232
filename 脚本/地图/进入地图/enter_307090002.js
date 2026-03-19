var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.Hidden_background('DL5_m', 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -275, 274);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#一周前"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.npc_ChangeController(2560000, "oid=3559363", 225, 260, 10, 175, 275, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=3559363", "summon", 0, 0);
          cm.npc_ChangeController(2560001, "oid=3559364", 150, 260, 10, 100, 200, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=3559364", "summon", 0, 0);
          cm.npc_ChangeController(2560004, "oid=3559365", -100, 260, 9, -150, -50, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=3559365", "summon", 0, 0);
          cm.npc_ChangeController(2560006, "oid=3559366", -180, 260, 9, -230, -130, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=3559366", 'summon', 0, 0);
          cm.npc_ChangeController(2560002, "oid=3559367", -260, 260, 9, -310, -210, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=3559367", 'summon', 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.fieldEffect_ProcessOnOffLayer('BlackOut', "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
            cm.effect_Text(["#fn黑体##fs18#……影牙……"], [100, 2200, 4, -50, -50, 1, 4, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
              cm.effect_Text(["#fn黑体##fs22#……影牙，快起来……"], [50, 2200, 4, -50, -50, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('BlackOut', '', 2, 4000, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 700, 0);
                  cm.fieldEffect_PlayBGM("Bgm33/NastyLiar", 0, 0);
                  cm.sendNormalTalk_Bottom("#face0#影牙，喂，影牙，快起来。", 37, 2560002, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("嗯……这是第几次了？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1, 180);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.sendNormalTalk_Bottom("#face0#起来了吗，影牙？这次是#b第八次轮回#k了。", 37, 2560000, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("啊，是，是！队长。", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=3559367", 1);
                              cm.sendNormalTalk_Bottom("#face0##fs18#所有人好像都醒了，可以开始了。", 37, 2560001, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#目标的名字是#r艾特#k。他的记忆和之前一样被初始化了。", 37, 2560001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我们的任务表面上是守卫村子。\r\n但实际上是要阻止#r不洁者艾特#k接近神殿。", 37, 2560001, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#在重复的时间和无意义的任务轮回中。", 37, 2560001, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(2560005, "oid=3559684", -404, 211, 1, -454, -354, 0, false, 700, false);
                                        cm.npc_SetSpecialAction("oid=3559684", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#艾特好像马上就要醒了。", 37, 2560005, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#那我就长话短说了。", 37, 2560000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1##fs18#我们影子骑士团的使命非常确定。", 37, 2560000, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#为了阻止#b影子神殿的怪物#k苏醒，\r\n为了阻止巨大的混沌吞噬世界，", 37, 2560000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#我们影子骑士团必须完成我们的任务。", 37, 2560000, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0##fs18#直到某一天回到#b外面的世界#k为止……", 37, 2560000, false, true);
                                                      } else if (status === V++) {
                                                        cm.eventSKill(0);
                                                        cm.dispose();
                                                        cm.warp(307000000, 0, false);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.npc_LeaveField("oid=3559363");
                                                        cm.npc_LeaveField("oid=3559363");
                                                        cm.npc_LeaveField("oid=3559364");
                                                        cm.npc_LeaveField("oid=3559364");
                                                        cm.npc_LeaveField("oid=3559365");
                                                        cm.npc_LeaveField("oid=3559365");
                                                        cm.npc_LeaveField("oid=3559366");
                                                        cm.npc_LeaveField("oid=3559366");
                                                        cm.npc_LeaveField("oid=3559367");
                                                        cm.npc_LeaveField("oid=3559367");
                                                        cm.npc_LeaveField("oid=3559684");
                                                        cm.npc_LeaveField("oid=3559684");
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;