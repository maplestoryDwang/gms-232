var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(3002112, "oid=258444", -998, -72, 218, -1048, -948, 0, false, false);
      cm.npc_ChangeController(3002114, 'oid=258445', -922, -94, 192, -972, -872, 0, false, false);
      cm.npc_ChangeController(3002116, 'oid=258446', -823, -110, 193, -873, -773, 0, false, false);
      cm.npc_ChangeController(3002115, "oid=258447", -710, -106, 193, -760, -660, 1, false, false);
      cm.npc_ChangeController(3002113, "oid=258448", -621, -103, 193, -671, -571, 1, false, false);
      cm.npc_ChangeController(3002111, "oid=258449", -546, -100, 193, -596, -496, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -778, -90);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#今天又是和平的一天。", 37, 3002111, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#啊～好饿！没有新鲜的生肝吗？", 37, 3002114, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -778, -150);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_SetHideEffect(0);
                  cm.npc_ChangeController(3002110, "oid=35326301", -750, -415, 88, -800, -700, 0, true, false);
                  cm.npc_SetSpecialAction("oid=35326301", "summon", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#啊！是玛鲁！", 37, 3002115, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你好？玛鲁？", 37, 3002116, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你旁边这个#b奇怪的家伙#k是谁？", 37, 3002112, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#玛鲁，你这家伙！怎么把#b外地人#k随便带进来了？", 37, 3002111, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face15#咿呀！", 37, 3002110, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=35326301", 'sprinkle', 1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_maru", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=35326301", -1);
                                cm.npc_SetSpecialAction("oid=35326301", "sprinkle", 1, 1);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_maru", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#啊啊啊啊啊～～阿嚏！！", 37, 3002114, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#阿嚏！！阿嚏阿嚏！", 37, 3002112, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你这小子！阿嚏！干！阿嚏！什么！阿嚏！", 37, 3002113, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#啊啊啊～～阿嚏！阿嚏阿嚏！！！！", 37, 3002115, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face5##h0#！！#b作战成功#k！", 37, 3002110, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#呃啊，真是无可救药！阿嚏！又跑到危险的狐狸谷去了吗？阿嚏！", 37, 3002111, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#要是受了伤，那就糟了！别再做这种危险的恶作剧！阿嚏！", 37, 3002112, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face15#这是#b免疫力训练#k！大家用不着谢我！哈哈哈！！！", 37, 3002110, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#阿嚏！！！", 37, 3002116, true, true);
                                                } else if (status === V++) {
                                                  cm.updateInfoQuest(34770, "20=h2;21=h1;22=h0;23=h0;24=h0;25=h0;29=h0");
                                                  cm.updateInfoQuest(34770, "20=h2;21=h0;22=h0;23=h0;24=h0;25=h0;29=h0");
                                                  cm.gainExp(24169048);
                                                  cm.forceCompleteQuest(34747);
                                                  cm.updateInfoQuest(34747, "exp=1");
                                                  cm.dispose();
                                                  cm.warp(410000100, 0);
                                                  cm.setInGameDirectionMode(false, true, false);
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