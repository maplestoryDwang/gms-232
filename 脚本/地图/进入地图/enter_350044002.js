var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.cancelItem(2210135);
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
      cm.cancelItem(2210135);
      cm.cancelItem(2210136);
      cm.npc_ChangeController(1540658, "oid=290964448", 529, 52, 2, 479, 579, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=290964448", "summon", 0, 0);
      cm.npc_ChangeController(1540459, "oid=290964449", 178, 0, 1, 128, 228, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290964449", "summon", 0, 0);
      cm.npc_ChangeController(1540459, "oid=290964450", 262, 0, 1, 212, 312, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290964450", "summon", 0, 0);
      cm.npc_ChangeController(1540468, "oid=290964451", 90, 0, 1, 40, 140, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290964451", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=290964448", "ill", -1, 1);
      cm.npcMove(1540460, 0, 500, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("现在天上应该正发生战争吧？", 37, 1540618, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("嘁，我们现在本应该和黑色之翼战斗才对！", 45, 1540618, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("结果却要监视那个麻烦鬼……", 45, 1540618, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm40.img/TheDollMaster", 0, 0);
                cm.npc_ChangeController(1540641, "oid=290967225", 340, 0, 1, 290, 390, 1, false, 0, false);
                cm.npc_SetSpecialAction("oid=290967225", 'summon', 0, 0);
                cm.fieldEffect_PlayFieldSound('Kite/Crown', 100);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 3000, 1000, 270, 80);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=290964449"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=290964450"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.npc_setForceFlip("oid=290964450", 1);
                      cm.npc_SetSpecialAction("oid=290964449", "alert", -1, 1);
                      cm.npc_SetSpecialAction("oid=290964450", "alert", -1, 1);
                      cm.sendNormalTalk_Bottom("这是什么？！", 45, 1540618, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                        cm.effect_Voice("Voice3.img/BlackHeaven/fran/5", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(300, 3000, 300, 180, 80);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=290964451", "laugh2", 0, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/franAppear", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_Voice("Voice3.img/BlackHeaven/fran/1", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=290964449"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=290964450"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/punch", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=290967225");
                                        cm.npc_LeaveField("oid=290967225");
                                        cm.npc_SetSpecialAction("oid=290964449", "down", -1, 1);
                                        cm.npc_SetSpecialAction("oid=290964450", "down2", -1, 1);
                                        cm.npc_SetSpecialAction("oid=290964451", "stand1", -1, 1);
                                        cm.npc_setForceFlip("oid=290964451", 1);
                                        cm.npc_ChangeController(1540460, "oid=290977656", 90, 0, 1, 40, 140, 1, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=290977656", "summon", 0, 0);
                                        cm.setNpcSpecialActionReset("oid=290964448");
                                        cm.npc_LeaveField("oid=290964451");
                                        cm.npc_LeaveField("oid=290964451");
                                        cm.npc_SetForceMove("oid=290977656", 1, 10, 100);
                                        cm.inGameDirectionEvent_PushScaleInfo(300, 2000, 300, 180, 50);
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
                                              cm.npc_SetForceMove("oid=290977656", 1, 250, 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 470, 50);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#奥尔卡，我来救你了！", 45, 1540460, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#……", 37, 1540471, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=290977656"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#奥尔卡？", 45, 1540460, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                              cm.sendNormalTalk_Bottom("#face1#斯乌……", 37, 1540471, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#奥尔卡变得好奇怪……", 45, 1540460, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm40.img/BlackHeavenTheme", 0, 0);
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 470, 40);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/blackHeaven/forest2", 0, 1500, 0, -80, 15, 4, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#我……想起来了。", 37, 1540471, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#一切……", 37, 1540471, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#一切都是因为我……", 37, 1540471, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#当时斯乌……", 37, 1540471, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#奥尔卡！！奥尔卡！！", 45, 1540460, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1##fs30#奥尔卡！！！", 45, 1540460, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                                                                                          cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                          cm.sendNormalTalk_Bottom("#face2##fs30#吵死了！！", 37, 1540658, true, true);
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
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 470, 50);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayBGM("Bgm40.img/TheDollMaster", 0, 0);
                                                                                                  cm.npc_SetSpecialAction("oid=290964448", 'stand3', -1, 1);
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                                                                                                  cm.sendNormalTalk_Bottom("#face2##fs30#没看见我正在思考嘛，你这傻瓜！！！", 37, 1540658, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#噢，奥尔卡，是平时的奥尔卡！", 45, 1540460, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#当然是平时的奥尔卡啦，还能是谁！", 37, 1540658, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('#face2#衣服！', 37, 1540658, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#遵命！", 45, 1540460, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetForceMove("oid=290977656", 1, 20, 100);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=290977656", "give", -1, 1);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetSpecialAction("oid=290964448", "clothe", 0, 1);
                                                                                                                  cm.setNpcSpecialActionReset("oid=290977656");
                                                                                                                  cm.npc_SetForceMove("oid=290977656", -1, 30, 100);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=290977656", 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_SetSpecialAction("oid=290964448", 'stand2', -1, 1);
                                                                                                                      cm.sendNormalTalk_Bottom("#face1#飞船准备好了吗？", 37, 1540658, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("飞船？", 45, 1540460, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face1#我们难道不应该去教训教训格里梅尔那家伙吗？", 37, 1540658, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那个秃子，我要把他剩下的头发全部拔掉。", 37, 1540658, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face1#呃。", 45, 1540460, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#你还愣着干什么，前面带路！", 37, 1540658, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#好的！！", 45, 1540460, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_setForceFlip("oid=290977656", 0);
                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 405, 50);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetForceMove("oid=290977656", -1, 200, 200);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_setForceFlip("oid=290977656", 1);
                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#那奥尔卡的黑色之翼是不是要复活了~？", 45, 1540460, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#……这还用问吗？", 37, 1540658, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#黑色之翼是我奥尔卡的！\r\n我要找回斯乌，让黑色之翼恢复原来的样子。", 37, 1540658, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("嗯，奥尔卡！\r\n我会跟随你的！", 45, 1540460, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_setForceFlip("oid=290977656", -1);
                                                                                                                                                  cm.npc_SetForceMove("oid=290977656", -1, 300, 100);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_LeaveField("oid=290977656");
                                                                                                                                                    cm.npc_LeaveField("oid=290977656");
                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                    cm.setAmbience("Ambience.img/gravity", 100, 60);
                                                                                                                                                    cm.npc_SetSpecialAction("oid=290964448", 'clothe2', -1, 1);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 470, 50);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#我是在说谎。", 37, 1540658, false, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#到了黑色天堂上面之后，说不定我会迎来末日。", 37, 1540658, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#…………你再等一会儿，斯乌。\r\n我马上就来找你。", 37, 1540658, false, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……没错，我要重新回到过去。", 37, 1540658, false, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.npc_LeaveField("oid=290964448");
                                                                                                                                                                          cm.npc_LeaveField("oid=290964448");
                                                                                                                                                                          cm.npc_LeaveField("oid=290964449");
                                                                                                                                                                          cm.npc_LeaveField("oid=290964449");
                                                                                                                                                                          cm.npc_LeaveField("oid=290964450");
                                                                                                                                                                          cm.npc_LeaveField("oid=290964450");
                                                                                                                                                                          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
                                                                                                                                                                          cm.forceCompleteQuest(33197);
                                                                                                                                                                          cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
                                                                                                                                                                          cm.playerMessage(5, "获得了6500声望. ");
                                                                                                                                                                          cm.updateInfoQuest(33123, "honor=1");
                                                                                                                                                                          cm.forceCompleteQuest(33123);
                                                                                                                                                                          cm.gainHonorExp(6500, true);
                                                                                                                                                                          cm.gainItem(1004412, 1);
                                                                                                                                                                          cm.finishAchievement(1191);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                                          cm.dispose();
                                                                                                                                                                          cm.warp(350044010, 0, true);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;