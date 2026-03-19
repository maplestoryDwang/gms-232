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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004454, "oid=863745", 4860, -80, 7, 4810, 4910, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=863745", "summon", 0, 0);
      cm.npc_ChangeController(3004447, "oid=863746", 4950, -80, 2, 4900, 5000, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=863746", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 4098, -110);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1000, 7000, 4775, -110);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(8200);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 4930, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你怎么不一路迎头赶上去，赶紧击破圣地？", 37, 3004454, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#如果情况能那么顺利，我早就进行突破了。毕竟那边有“那个家伙”。", 37, 3004447, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你说那家伙……是指#b对抗者#k吗？", 37, 3004454, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#消灭了超越者的家伙啊。\r\n一味地投入兵力，只会增加我方的损失。", 37, 3004447, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3004454, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#但对抗者的力量并没有强大到单人只剑力敌千军嘛。", 37, 3004454, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#难道不是因为#r黑魔法师#k自己想要消亡，\r\n所以当时才能借机打败他的吗？", 37, 3004454, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#哈哈，所以对抗者之流也没什么可怕的嘛？", 37, 3004447, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#在我听来，像是在暗示你亲自出马就能大败敌军啊？", 37, 3004447, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#那个……！", 37, 3004454, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 700, 0);
                                        cm.sendNormalTalk_Bottom("#face0#明明不是这个意思啊……", 37, 3004454, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                          cm.sendNormalTalk_Bottom("#face0#你说得确实没错。", 37, 3004447, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#不过还是再观察观察吧。", 37, 3004447, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#话说#r达尔摩尔#k那家伙……", 37, 3004447, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=863745"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.npc_setForceFlip('oid=863745', 1);
                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                cm.sendNormalTalk_Bottom("#face0#把人派来这种偏僻之地，自己却不知道跑到别处干什么去了……", 37, 3004447, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                  cm.sendNormalTalk_Bottom("#face0#你小心祸从口出。", 37, 3004454, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#他的名讳可不是你想叫就叫的。", 37, 3004454, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#总之……哈~", 37, 3004447, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=863746", 1, 200, 70);
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                        cm.sendNormalTalk_Bottom("#face0#说起来，现在还不到吃饭的时间吗？", 37, 3004447, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3004454, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2500, 0);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.eventSKill(0);
                                                            cm.forceCompleteQuest(39901);
                                                            cm.warp(410000500, 0, false);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                                                            cm.updateInfoQuest(39800, "01=h0;03=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h0;14=h0;06=h1;15=h0;16=h0;07=h1;17=h0;08=h1;18=h1;09=h0;19=h1;27=h0;28=h0;55=h1");
                                                            cm.setStringForQuestInfo(39800, '05', 'h0');
                                                            cm.setStringForQuestInfo(39800, '14', 'h0');
                                                            cm.setStringForQuestInfo(39800, '15', 'h0');
                                                            cm.setStringForQuestInfo(39800, '16', 'h0');
                                                            cm.setStringForQuestInfo(39800, '27', 'h0');
                                                            cm.setStringForQuestInfo(39800, '28', 'h0');
                                                            cm.setStringForQuestInfo(39900, '00', 'h1');
                                                            cm.setStringForQuestInfo(39900, '01', 'h1');
                                                            cm.npc_LeaveField('oid=863745');
                                                            cm.npc_LeaveField("oid=863745");
                                                            cm.npc_LeaveField("oid=863746");
                                                            cm.npc_LeaveField("oid=863746");
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