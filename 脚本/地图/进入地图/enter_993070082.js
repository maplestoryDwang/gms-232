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
      cm.forceCompleteQuest(35813);
      cm.gainExp(1082698525);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003902, "oid=2273516", -220, 29, 1, -270, -170, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2273516", 'summon', 0, 0);
      cm.Npc_Fadeout("oid=2273516", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, 88);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -175, 100);
        cm.fieldEffect_PlayBGM("Bgm50/WorldHorizon", 0, 0);
        cm.npc_ChangeController(3003919, "oid=2273517", 0, 29, 1, -50, 50, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2273517", "summon", 0, 0);
        cm.Npc_Fadeout("oid=2273517", 0, 0);
        cm.npc_ChangeController(3003917, "oid=2273518", 0, 29, 1, -50, 50, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2273518", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2273518", "special", -1, 1);
        cm.npc_ChangeController(3003918, "oid=2273519", -150, 29, 1, -200, -100, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2273519", "summon", 0, 0);
        cm.Npc_Fadeout("oid=2273519", 0, 0);
        cm.sendNormalTalk_Bottom("奥尔卡！奥尔卡！", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#呃……快挡住……", 37, 3003902, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#创世之卵会显露出来的……", 37, 3003902, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#那家伙回到创世之卵后……世界很快就会……", 37, 3003902, true, true);
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
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.Npc_Fadeout("oid=2273517", 255, 1000);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=2273517", "special", -1, 1);
                          cm.userSetFieldFloating(993070082, 10, 10, 70);
                          cm.sendNormalTalk_Bottom("（得利用对抗者的力量毁掉创世之卵。）", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.askMenu_Bottom("（为了激发出力量，我的重点在于……）\r\n\r\n#b#L0# 哪怕牺牲自己也要拯救所有人的觉悟。#l\r\n#L1# 哪怕豁出性命也誓要消灭敌人的觉悟。#l#k", 57, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_QTE(0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/3"], [3000, -1, 0, 1, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/9"], [1500, 0, 0, 1, 0, 0, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul_fail", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("失败？！到底是为什么……", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.userSetFieldFloating(993070082, 20, 20, 30);
                                      cm.npc_SetSpecialAction("oid=2273517", 'special2', -1, 1);
                                      cm.setAmbience("SoundEff.img/BM3/egg2", 200, 60);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_wave", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=2273517", 'special', -1, 1);
                                          cm.userSetFieldFloating(993070082, 3, 3, 30);
                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), -335, 100);
                                          cm.playSoundEffDirectly("SoundEff.img/BM3/egg2");
                                          cm.sendNormalTalk_Bottom("呃啊啊！！", 56, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                                            cm.inGameDirectionEvent_MoveAction(4);
                                            cm.sendNormalTalk_Bottom("呃……", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我，我还……", 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_QTE(1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("再一次……", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_MoveAction(0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM3_effect/6", "oid=16777214"], [99999000, 0, 0, 1, 0, 12, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("不要啊……这个……！！", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Text(["#fn黑体##fs23#你以为已经摆脱命运之路了吗？"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                  cm.effect_Voice("Voice4.img/BM3/black/14", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("！！！", 57, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_Text(["#fn黑体##fs23#你无法使出对抗者的力量，只能就这样消失。"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                        cm.effect_Voice("Voice4.img/BM3/black/15", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Text(["#fn黑体##fs23#这是注定的命运，早已决定的未来。"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(7000);
                                                                            cm.effect_Voice("Voice4.img/BM3/black/0", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("注定的命运？！直到现在这一刻也是？！！", 57, 0, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("黑魔法师！你到底要作恶到什么地步！！", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=2273518", 'special2', 1, 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_Hero9(0, 3000);
                                                                                      cm.sendNormalTalk_Bottom("他消失在创世之卵中了……", 57, 0, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("就这么……结束了？", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_LeaveField("oid=2273518");
                                                                                            cm.npc_LeaveField("oid=2273518");
                                                                                            cm.userSetFieldFloating(993070082, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -200, 188);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.userSetFieldFloating(993070082, 3, 3, 30);
                                                                                                cm.sendNormalTalk_Bottom('只能说，觉悟不够……', 57, 0, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("直到最后，竟然都没能摆脱这一步。", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.effect_Text(["不，已经摆脱了，尽管只踏出了一步而已。"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                        cm.effect_Voice("Voice4.img/BM3/tana/12", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.Npc_Fadeout("oid=2273519", 255, 0);
                                                                                                              cm.npc_SetSpecialAction("oid=2273519", "special", 1, 1);
                                                                                                              cm.sendNormalTalk_Bottom("这声音是……塔纳？！！", 56, 0, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.effect_Text(["并不是觉悟不够，只是……"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                    cm.effect_Voice("Voice4.img/BM3/tana/13", 128);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.effect_Text(["这个世界在呼喊着：我们不想消失……"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                                        cm.effect_Voice("Voice4.img/BM3/tana/1", 128);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.effect_Text(["所以不会向求死之人伸出援手。"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                                                                                            cm.effect_Voice("Voice4.img/BM3/tana/6", 128);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetSpecialAction("oid=2273519", "special2", 1, 1);
                                                                                                                              cm.sendNormalTalk_Bottom("啊！！", 57, 0, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_Hero9(80, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("重要的……并不是牺牲的决心……", 57, 0, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_RiserEdit", 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.setAmbience("SoundEff.img/BM2/powerin", 60, 100);
                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/8"], [5200, -1, 0, 1, 0, 0, 0, 0]);
                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/9"], [5200, -1, 0, 1, 0, 0, 0, 0]);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("想要活下去的……意志。", 56, 0, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.playSoundEffDirectly("SoundEff.img/BM2/powerin");
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/powerout", 100);
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/10"], [3600, -1, 0, 1, 0, 0, 0, 0]);
                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/11"], [3600, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.userSetFieldFloating(993070082, 20, 20, 30);
                                                                                                                                              cm.npc_SetSpecialAction("oid=2273517", "special2", -1, 1);
                                                                                                                                              cm.setAmbience("SoundEff.img/BM3/egg2", 200, 60);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom('！！', 57, 0, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.Npc_Fadeout("oid=2273516", 255, 0);
                                                                                                                                                  cm.npc_SetSpecialAction("oid=2273516", "special7", 1, 1);
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/LimenOrcaAppear", 100);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#又来了！！", 37, 3003902, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom('#face1#后退！', 37, 3003902, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_SetSpecialAction("oid=2273516", "special3", -1, 1);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_wave", 100);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_Hero9(0, 2000);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                              cm.effect_Text(["#fn黑体##fs18#同一时刻，前哨基地"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM3_soul/0", 0, 1500, 0, 0, 2, 4, 0, -1, 0, 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BM3_soul/1", 0, 500, 0, 0, 2, 4, 0, -1, 0, 0, 0);
                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/soul_light", 100);
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                                } else if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.npc_LeaveField("oid=2273516");
                                                                                                                                                                  cm.npc_LeaveField("oid=2273516");
                                                                                                                                                                  cm.npc_LeaveField("oid=2273517");
                                                                                                                                                                  cm.npc_LeaveField("oid=2273517");
                                                                                                                                                                  cm.npc_LeaveField("oid=2273519");
                                                                                                                                                                  cm.npc_LeaveField("oid=2273519");
                                                                                                                                                                  cm.dispose();
                                                                                                                                                                  cm.warp(993070083, 0, false);
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