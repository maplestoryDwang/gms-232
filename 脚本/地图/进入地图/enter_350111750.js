var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(33905, "check2") > 0) {
    cm.dispose();
    cm.mapleHeroSetList([4, 1, 5]);
    cm.showMapleHero();
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(1540795, 'oid=57530', 914, 351, 6, 864, 942, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 650, 150);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 400, 96);
        cm.npc_ChangeController(1540806, "oid=287966854", 260, 50, 4, 210, 310, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=287966854", "summon", 0, 0);
        cm.npc_ChangeController(1540805, "oid=287966855", 400, 50, 2, 350, 450, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287966855", 'summon', 0, 0);
        cm.npc_ChangeController(1540802, "oid=287966856", 340, 50, 4, 290, 390, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287966856", 'summon', 0, 0);
        cm.npc_ChangeController(1540807, "oid=287966857", 500, 50, 2, 450, 550, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=287966857", "summon", 0, 0);
        cm.npc_SetForceMove("oid=287966854", 1, 150, 120);
        cm.npc_SetForceMove("oid=287966855", 1, 150, 120);
        cm.npc_SetForceMove("oid=287966856", 1, 150, 120);
        cm.npc_SetForceMove("oid=287966857", 1, 150, 120);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
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
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=287966854"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#快看前面。", 37, 1540806, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(1540798, "oid=287970220", 1102, 200, 7, 1052, 1152, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970220", "summon", 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970221", 1137, 200, 7, 1087, 1187, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970221", 'summon', 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970222", 1169, 200, 7, 1119, 1219, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970222", "summon", 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970223", 1212, 200, 7, 1162, 1262, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970223", "summon", 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970224", 1272, 200, 5, 1222, 1322, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970224", 'summon', 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970225", 1258, 200, 7, 1208, 1308, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970225", "summon", 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970226", 1300, 200, 5, 1250, 1350, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970226", "summon", 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970227", 1325, 200, 5, 1275, 1375, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970227", "summon", 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970228", 1082, 200, 7, 1032, 1132, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970228", "summon", 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970229", 1031, 200, 7, 981, 1081, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970229", "summon", 0, 0);
                    cm.npc_ChangeController(1540798, "oid=287970230", 1020, 200, 7, 970, 1070, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=287970230", 'summon', 0, 0);
                    cm.npc_SetForceMove("oid=287970220", 1, 360, 118);
                    cm.npc_SetForceMove("oid=287970221", 1, 360, 100);
                    cm.npc_SetForceMove("oid=287970222", 1, 300, 109);
                    cm.npc_SetForceMove("oid=287970223", 1, 300, 130);
                    cm.npc_SetForceMove("oid=287970224", 1, 220, 111);
                    cm.npc_SetForceMove("oid=287970225", 1, 220, 100);
                    cm.npc_SetForceMove("oid=287970226", 1, 170, 105);
                    cm.npc_SetForceMove("oid=287970227", 1, 170, 107);
                    cm.npc_SetForceMove("oid=287970228", 1, 390, 120);
                    cm.npc_SetForceMove("oid=287970229", 1, 420, 112);
                    cm.npc_SetForceMove("oid=287970230", 1, 450, 108);
                    cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 1100, 310);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/horn", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/horn", 100);
                        cm.sendNormalTalk_Bottom("是敌人！所有人准备战斗！！准备战斗！！", 37, 1540798, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 650, 150);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("看样子他们是打算正面迎击我们。", 37, 1540806, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("来，谁打头阵？", 37, 1540802, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我觉得根据当时的情况来调整位置会比较好，\r\n一切就交给龙神判断了。", 37, 1540806, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我们三个人的战斗方式有很大的不同，\r\n只要用你最喜欢的方式冲出去就好。", 37, 1540806, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("战神会施展#b用到矛的斗气集中#k，我则会施展#b用到精灵的格斗#k。", 37, 1540806, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我和米乐会使用#b融合技能#k！\r\n我和米乐一起施展技能就会触发额外技能！", 37, 1540805, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我在后面的时候，会像刚刚那样帮忙进行传送的。", 37, 1540805, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#就是要按照当时的状况来改变对战方式是吧？\r\n\r\n#b(连续按下#gTAB#k键可以选择打前锋的英雄。)#k", 37, 1540802, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_LeaveField("oid=287966854");
                                              cm.npc_LeaveField("oid=287966854");
                                              cm.npc_LeaveField("oid=287966855");
                                              cm.npc_LeaveField("oid=287966855");
                                              cm.npc_LeaveField("oid=287966856");
                                              cm.npc_LeaveField("oid=287966856");
                                              cm.npc_LeaveField("oid=287966857");
                                              cm.npc_LeaveField("oid=287966857");
                                              cm.npc_LeaveField("oid=287970220");
                                              cm.npc_LeaveField("oid=287970220");
                                              cm.npc_LeaveField("oid=287970221");
                                              cm.npc_LeaveField("oid=287970221");
                                              cm.npc_LeaveField("oid=287970222");
                                              cm.npc_LeaveField("oid=287970222");
                                              cm.npc_LeaveField("oid=287970223");
                                              cm.npc_LeaveField("oid=287970223");
                                              cm.npc_LeaveField("oid=287970224");
                                              cm.npc_LeaveField("oid=287970224");
                                              cm.npc_LeaveField("oid=287970225");
                                              cm.npc_LeaveField("oid=287970225");
                                              cm.npc_LeaveField("oid=287970226");
                                              cm.npc_LeaveField("oid=287970226");
                                              cm.npc_LeaveField("oid=287970227");
                                              cm.npc_LeaveField("oid=287970227");
                                              cm.npc_LeaveField("oid=287970228");
                                              cm.npc_LeaveField("oid=287970228");
                                              cm.npc_LeaveField("oid=287970229");
                                              cm.npc_LeaveField("oid=287970229");
                                              cm.npc_LeaveField("oid=287970230");
                                              cm.npc_LeaveField("oid=287970230");
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.setNumberForQuestCustomData(33900, 4);
                                                  cm.mapleHeroBecomeNpc(7, 0);
                                                  cm.getPlayer().makeDragon(2217);
                                                  cm.onActionBarResult(6, -1);
                                                  cm.onActionBarResult(5, 30);
                                                  cm.setPartner(1, 1540781, 80001900, 0);
                                                  cm.setPartner(1, 1540785, 80001904, 0);
                                                  cm.mapleHeroSetList([4, 1, 5]);
                                                  cm.updateInfoQuest(33915, "act1=350111750");
                                                  cm.updateInfoQuest(33905, "check2=1;check3=1;check=1");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;