var status = -1;
var selectionLog = [];
function action(e, G, L) {
  if (status == 0 && e == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = L;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else {
    if (status === y++) {
      if (cm.getNumberFromQuestInfo(33905, "check6") > 0) {
        cm.showMapleHero();
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(1540795, "oid=57763", 526, 351, 8, 476, 576, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1250, 350);
      cm.curNodeEventEnd(true);
    } else {
      if (status === y++) {
        cm.npc_ChangeController(1540805, "oid=288324018", 1160, 300, 7, 1110, 1210, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=288324018", "summon", 0, 0);
        cm.npc_ChangeController(1540807, "oid=288324019", 1050, 300, 7, 1000, 1100, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=288324019", "summon", 0, 0);
        cm.npc_ChangeController(1540802, "oid=288324020", 1320, 300, 5, 1270, 1370, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=288324020", "summon", 0, 0);
        cm.npc_ChangeController(1540806, "oid=288324021", 1240, 300, 7, 1190, 1290, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=288324021", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === y++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/HofMEffect/teleport"], [0, 1160, 340, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/HofMEffect/teleport"], [0, 1050, 340, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/HofMEffect/teleport"], [0, 1320, 340, 1, 0, 1, 1, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/HofMEffect/teleport"], [0, 1240, 340, 1, 0, 1, 1, 0]);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === y++) {
            cm.sendNormalTalk_Bottom("#face4#这里是？", 37, 1540805, false, true);
            cm.effect_Voice("Voice3.img/HofM/ACT1/GOOUT/1", 128);
          } else {
            if (status === y++) {
              cm.sendNormalTalk_Bottom("#face0#阿弗利埃用最后的力量将我们传送到了这里。", 37, 1540806, true, true);
              cm.effect_Voice("Voice3.img/HofM/ACT1/GOOUT/2", 128);
            } else {
              if (status === y++) {
                cm.sendNormalTalk_Bottom("#face4#最后的力量……难道阿弗利埃他？", 37, 1540805, true, true);
                cm.effect_Voice("Voice3.img/HofM/ACT1/GOOUT/3", 128);
              } else {
                if (status === y++) {
                  cm.sendNormalTalk_Bottom("#face0#不过是暂时阻止了戴米安而已，现在估计已经……", 37, 1540806, true, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT1/GOOUT/4", 128);
                } else {
                  if (status === y++) {
                    cm.sendNormalTalk_Bottom("#face4#我们得重新回去救他。", 37, 1540805, true, true);
                    cm.effect_Voice("Voice3.img/HofM/ACT1/GOOUT/5", 128);
                  } else {
                    if (status === y++) {
                      cm.sendNormalTalk_Bottom("#face0#龙神，坚强一点！你打算让阿弗利埃的心意付诸东流吗？", 37, 1540806, true, true);
                      cm.effect_Voice("Voice3.img/HofM/ACT1/GOOUT/6", 128);
                    } else {
                      if (status === y++) {
                        cm.sendNormalTalk_Bottom("#face2#主人……就照他说的做吧，我再也感受不到先祖的生命了。", 37, 1540807, true, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT1/GOOUT/7", 128);
                      } else {
                        if (status === y++) {
                          cm.sendNormalTalk_Bottom("#face5#……", 37, 1540805, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT1/GOOUT/8", 128);
                        } else {
                          if (status === y++) {
                            cm.setAmbience("Ambience.img/snowwave", 150, 60);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === y++) {
                              cm.userSetFieldFloating(350112400, 5, 5, 5);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === y++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=288324018"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=288324020"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=288324021"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === y++) {
                                  cm.sendNormalTalk_Bottom("#face0#洞穴坍塌了，\r\n虽然是很痛苦，但现在当务之急是先逃出去。", 37, 1540806, false, true);
                                } else {
                                  if (status === y++) {
                                    cm.npc_LeaveField("oid=288324018");
                                    cm.npc_LeaveField("oid=288324018");
                                    cm.npc_LeaveField("oid=288324019");
                                    cm.npc_LeaveField("oid=288324019");
                                    cm.npc_LeaveField("oid=288324020");
                                    cm.npc_LeaveField("oid=288324020");
                                    cm.npc_LeaveField("oid=288324021");
                                    cm.npc_LeaveField("oid=288324021");
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === y++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                      if (status === y++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                        cm.updateInfoQuest(33905, "check2=1;check3=1;check4=1;check5=1;check6=1;check7=1;check=1");
                                      } else if (status === y++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.showMapleHero();
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;