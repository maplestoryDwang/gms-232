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
      cm.forceCompleteQuest(100452);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_ProcessOnOffLayer("intro", "Effect/EventEffect.img/2019Halloween/startEff", 0, 0, 0, -50, 0, 4, 0, 0, 0, 0, 1);
      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack2", 100);
      cm.inGameDirectionEvent_AskAnswerTime(2100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs20#2020 Haunted Mansion", 'NewItem'], [100, 5000, 4, 0, 90, 1, 4, 3, 300, 150, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs60#Episode.4", "NewItem"], [100, 4000, 4, 0, 170, 1, 4, 3, 300, 150, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2300);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs25#忧郁的假面", "NewItem"], [100, 3000, 4, 0, 200, 1, 4, 3, 300, 150, 0, 0]);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.setInGameDirectionMode(false, true, false);
                cm.setStandAloneMode(false);
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, false);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.npc_ChangeController(9062261, "oid=30212813", -316, 240, 1, -366, -266, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=30212813", "summon", 0, 0);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -170, 240);
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
                      cm.sendNormalTalk_Bottom('抱歉……打扰了。', 56, 0, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……只要在这里再加一块布，做出人的样子就行。", 36, 9062261, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("一个人在自言自语呢……", 56, 0, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=30212813", 1, 50, 100);
                            cm.sendNormalTalk_Bottom("#face0#还……还不够。不完美的话就没有意义。", 36, 9062261, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("能听到我说话吗？", 56, 0, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#要做一个完美的人偶还真是不容易。\r\n但是不要担心。我可是匠人，一定可以完成的。", 37, 9062261, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("他好像听不到我说话……", 56, 0, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我是来帮您的。", 56, 0, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#啊，帮忙的话就不必了。\r\n我一个人就行了。", 37, 9062261, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#不……不对……你这么一说，我好像丢了一件东西。\r\n是#b必不可少的一个东西#k，可是我现在不能离开工坊。\r\n你也看到了，我非常忙。", 37, 9062261, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=30212813", -1, 50, 100);
                                          cm.sendNormalTalk_Bottom("去哪里可以找到您丢掉的东西呢？", 56, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#应该是被#b地狱木马#k拿走了。\r\n他们总是会狠心地夺走别人珍惜的东西。", 36, 9062261, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('那您丢了什么呢？', 56, 0, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#再稍微打磨一下模样就行了。\r\n再打磨一下……只要再稍微打磨一下……", 36, 9062261, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("看来完全没有在听我的问题……\r\n先去告诉#b苏菲莉亚#k吧。", 56, 0, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setStandAloneMode(false);
                                                    cm.npc_LeaveField("oid=30212813");
                                                    cm.dispose();
                                                    cm.warp(993175440, 0, false);
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}