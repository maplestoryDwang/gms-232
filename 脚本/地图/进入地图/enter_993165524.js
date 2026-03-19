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
      cm.npc_ChangeController(3005108, "oid=623041", -635, 200, 1, -685, -585, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=623041", "summon", 0, 0);
      cm.npc_ChangeController(3005103, "oid=623042", -440, 200, 1, -490, -390, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=623042", "summon", 0, 0);
      cm.Hidden_background("night", 1, 0, 0, 0);
      cm.monadForceMove("night", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -500, 250);
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
            cm.effect_Text(["#fn黑体##fs18#几天前，甜蜜蜜工坊", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#别忘了，只有我过得风生水起，你才能有收益！", 37, 3005108, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#领主大人，若总是欲壑难填、 贪得无厌……", 37, 3005103, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#也许有朝一日，这贪心终究会摧毁了领主大人。", 37, 3005103, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#哼，别以为你可以直接和我交易，\r\n就足以在我面前大放厥词。", 37, 3005108, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#只要是我想要的，我都能得到。", 37, 3005108, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#领主大人。", 37, 3005103, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS", 100);
                            cm.sendNormalTalk_Bottom("#face3#你认为我也会得不到心中想要的东西吗？", 37, 3005103, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#你……你说什么！", 37, 3005108, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#你应该没忘了我们的约定吧。", 37, 3005103, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#一个月一个人。", 37, 3005103, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#……是这样的吧。", 37, 3005103, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#再过分一点就可能暴露了。", 37, 3005103, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#很久之前，偏偏被那家伙发现了，为了想办法解决，可是折腾了我好久。", 37, 3005103, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#哼，我没想到那家伙会突然出现……", 37, 3005108, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#可会挑画的人到处都是。", 37, 3005108, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#我需要更多的画！或者后巷那头狼怎么样？\r\n虽说那家伙看起来没有这点价值……‘", 37, 3005108, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3005103, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#看来是不行了。", 37, 3005103, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#嗯？说的什么啊？", 37, 3005108, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#还是请回吧。", 37, 3005103, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#我会试着寻找一个合适的方法。", 37, 3005103, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#你可要尽快找到，你应该也知道，我的耐心可是有限的！", 37, 3005108, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=623041", -1, 100, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.Npc_Fadeout("oid=623041", 0, 500);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#要开始想办法慢慢物色……其他资助人了。", 37, 3005103, false, true, 1);
                                                              } else if (status === V++) {
                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.npc_LeaveField("oid=623041");
                                                                cm.npc_LeaveField("oid=623042");
                                                                cm.dispose();
                                                                cm.warp(993165525, 0, true);
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}