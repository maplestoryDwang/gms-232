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
      cm.npc_ChangeController(2570101, "oid=37895642", -523, -34, 3, -573, -473, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=37895642", "summon", 0, 0);
      cm.npc_ChangeController(2570102, "oid=37895643", -620, 41, 8, -670, -570, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=37895643", "summon", 0, 0);
      cm.npc_ChangeController(2570103, "oid=37895644", -447, 47, 7, -497, -397, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=37895644", "summon", 0, 0);
      cm.npc_ChangeController(2570104, "oid=37895645", -727, 14, 2, -777, -677, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=37895645", "summon", 0, 0);
      cm.npc_ChangeController(2570105, "oid=37895646", -501, 88, 16, -551, -451, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=37895646", 'summon', 0, 0);
      cm.npc_ChangeController(2570130, "oid=37895647", 0, 56, 12, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=37895647", "summon", 0, 0);
      cm.npc_ChangeController(2570130, "oid=37895648", 0, 56, 12, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=37895648", "summon", 0, 0);
      cm.Npc_Fadeout("oid=37895647", 0, 100);
      cm.Npc_Fadeout("oid=37895648", 0, 100);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 466, -30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, -330, -30);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(12000);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -530, 35);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.sendNormalTalk_Bottom("#face1#到底发生什么事了？", 36, 2570105, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=37895647", -1, 320, 140);
                    cm.Npc_Fadeout("oid=37895647", 255, 500);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -495, 35);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#大家快逃……！！", 36, 2570130, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你们是……田鼠骑士团？", 36, 2570130, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4#田，田鼠骑士团？！", 36, 2570103, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#喂，这事轮不到你们这些阿猫阿狗插手。", 36, 2570130, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#想活命的话，就赶紧逃吧。", 36, 2570130, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=37895647", -1, 560, 130);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.Npc_Fadeout("oid=37895647", 0, 800);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=37895644", -1);
                                        cm.sendNormalTalk_Bottom("#face5#我说，好歹你先告诉我是什么事……", 36, 2570103, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.setAccountQuestInfo(252, "count=38371;T=20210420225140");
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=37895648", -1, 320, 140);
                                            cm.Npc_Fadeout("oid=37895648", 255, 500);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=37895644", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#国王召唤出了#r恶魔#k。", 36, 2570130, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37895642"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37895643"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37895644"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37895645"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37895646"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#国王已经死了。\r\n王子可能也在城中的某处遭遇了不测。", 36, 2570130, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#召集的骑士团也全军覆没了。", 36, 2570130, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#你明白吗？圣瑞尼亚已经完蛋了。要灭亡了。", 36, 2570130, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=37895648", -1, 500, 130);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.Npc_Fadeout("oid=37895648", 0, 1500);
                                                              cm.npc_setForceFlip("oid=37895644", -1);
                                                              cm.sendNormalTalk_Bottom("#face1#喂！你说详细点……！喂！", 36, 2570103, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face4#走掉了。", 36, 2570103, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#嘁，顶着骑士的名头，居然把忠诚誓约抛到一边开溜了……真不像话。", 36, 2570105, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("(国王死了。)", 56, 0, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("(而王子……还生死不明……)", 56, 0, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                          cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0##r王位簒夺者的下场#k无非这两种之一。", 36, 2570107, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#要么死，要么成为国王。", 36, 2570107, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                    cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("(要么死……要么成为国王。)", 56, 0, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#这么一来，任务就……", 36, 2570102, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#现在#b王子殿下#k生死不明。\r\n他应该就在城内的某处，必须尽快找到他。", 36, 2570101, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#你要进入这里面？里头有很多恶魔啊……", 36, 2570103, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face3#怎么，你害怕了？\r\n之前不是还得意洋洋地说自己是恶魔猎手吗？", 36, 2570105, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face4#谁，谁说我害怕了！对手毕竟不同凡响，我……\r\n我的意思是得想个应对方法！", 36, 2570103, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face5#应对方法？", 36, 2570105, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯……按我在魔法学校学的，恶魔只有被刺穿胸口或砍下脑袋，才会停止行动，或者也可以用魔法烧死他。", 36, 2570102, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=37895646", -1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#砍下脑袋就会停止行动……\r\n你的昂贵学费真没白花。贵族们的世界太难懂了。", 36, 2570105, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#喂！对手可是#r恶魔#k！你什么都不懂……", 36, 2570102, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                                                            cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("(也许情况早已无法挽回了。\r\n或者说，这样想才是明智的。)", 56, 0, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("(在生死不明的情况下，我无法从#r恶魔#k攒动的城里把他救出来。)", 56, 0, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("(这只会徒增无谓的死亡，白白牺牲五位青年……)", 56, 0, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("(可是……)", 56, 0, false, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/1", 0, 2500, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom('(呃……)', 56, 0, false, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("(该怎么办才好……)", 56, 0, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("(究竟怎么会……！)", 56, 0, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……团长。", 36, 2570101, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_SetForceMove("oid=37895642", -1, 10, 50);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -583, 70);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#团长。", 36, 2570101, false, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("……嗯？", 56, 0, false, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#团长，我们没事。", 36, 2570101, true, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#兄弟们……大家不都挺过了团长的地狱训练嘛。", 36, 2570101, false, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#大家会做好自己分内事的。", 36, 2570101, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#是的。不管别人怎么说，我们也都是骑士。", 36, 2570105, true, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#我们也发誓效忠。", 36, 2570102, true, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我只是执行任务。仅此而已。", 36, 2570104, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#我也……想趁此机会成为真正的恶魔猎手。", 36, 2570103, true, true, 1);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("(嗯……)", 56, 0, true, true, 1);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("(我忘记了最重要的东西。)", 56, 0, true, true, 1);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("从现在开始，执行确认#b王子#k生死状态并将其救出的营救行动。", 56, 0, false, true, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("哈丁、瑞恩负责左侧通道，\r\n艾德、魁格、亚殷去右侧通道。", 56, 0, true, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("大家分头搜索。", 56, 0, true, true, 1);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.effect_NormalSpeechBalloon('是！！', 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570101, null, cm.getPlayer().getId());
                                                                                                                                                                                  cm.effect_NormalSpeechBalloon("是！！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570102, null, cm.getPlayer().getId());
                                                                                                                                                                                  cm.effect_NormalSpeechBalloon("是！！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570103, null, cm.getPlayer().getId());
                                                                                                                                                                                  cm.effect_NormalSpeechBalloon("是！！", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570104, null, cm.getPlayer().getId());
                                                                                                                                                                                  cm.effect_NormalSpeechBalloon('是！！', 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570105, null, cm.getPlayer().getId());
                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("(现在我该做的事……)", 56, 0, false, true, 1);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("(我相信团员们……相信我的部下。)", 56, 0, true, true, 1);
                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                      cm.forceCompleteQuest(37803);
                                                                                                                                                                                      cm.updateInfoQuest(37803, "exp=1");
                                                                                                                                                                                      cm.gainExp(5872020);
                                                                                                                                                                                      cm.updateInfoQuest(37800, "01=h0;02=h1;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;dir00=end;dir02=end");
                                                                                                                                                                                      cm.updateInfoQuest(37800, "01=h0;02=h0;03=h1;q1=clear;04=h1;q2=clear;05=h1;06=h0;dir00=end;dir02=end");
                                                                                                                                                                                      cm.updateInfoQuest(37800, "01=h0;02=h0;03=h0;q1=clear;04=h1;q2=clear;05=h1;06=h0;dir00=end;dir02=end");
                                                                                                                                                                                      cm.updateInfoQuest(37800, "01=h0;02=h0;03=h0;q1=clear;04=h0;q2=clear;05=h1;06=h0;dir00=end;dir02=end");
                                                                                                                                                                                      cm.updateInfoQuest(37800, "01=h0;02=h0;03=h0;q1=clear;04=h0;q2=clear;05=h0;06=h0;dir00=end;dir02=end");
                                                                                                                                                                                      cm.npc_LeaveField("oid=37895642");
                                                                                                                                                                                      cm.npc_LeaveField("oid=37895643");
                                                                                                                                                                                      cm.npc_LeaveField("oid=37895644");
                                                                                                                                                                                      cm.npc_LeaveField("oid=37895645");
                                                                                                                                                                                      cm.npc_LeaveField("oid=37895646");
                                                                                                                                                                                      cm.npc_LeaveField("oid=37895647");
                                                                                                                                                                                      cm.npc_LeaveField("oid=37895648");
                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                      cm.warp(308000004, 0, true);
                                                                                                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                      cm.setStandAloneMode(false);
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}