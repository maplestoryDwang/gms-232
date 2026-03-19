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
      cm.npc_ChangeController(3003786, "oid=277087", -570, 206, 13, -620, -520, 1, false, 0, false);
      cm.npc_ChangeController(3003784, "oid=277088", -59, 206, 8, -109, -9, 1, false, 0, false);
      cm.npc_ChangeController(3003781, "oid=277089", -2, 206, 8, -52, 48, 0, false, 0, false);
      cm.npc_ChangeController(3003782, 'oid=277090', -399, 206, 6, -449, -349, 0, false, 0, false);
      cm.npc_ChangeController(3003783, "oid=277091", 297, 206, 3, 247, 347, 1, false, 0, false);
      cm.npc_ChangeController(3003785, "oid=277092", 417, 206, 11, 367, 467, 0, false, 0, false);
      cm.npc_ChangeController(3003723, "oid=277093", -570, 206, 13, -620, -520, 1, false, 0, false);
      cm.npc_ChangeController(3003721, "oid=277094", -399, 206, 6, -449, -349, 0, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277095", 297, 206, 3, 247, 347, 1, false, 0, false);
      cm.npc_ChangeController(3003723, "oid=277096", 417, 206, 11, 367, 467, 0, false, 0, false);
      cm.npc_ChangeController(3003721, "oid=277097", -2, 206, 8, -52, 48, 0, false, 0, false);
      cm.npc_ChangeController(3003722, "oid=277098", -59, 206, 8, -109, -9, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -490, 90);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;04=h0;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
        cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h1;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.npc_ChangeController(3003770, "oid=2310126", -1070, 180, 30, -1120, -1020, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2310126", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -550, 190);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 2000, 5000, 175, 190);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(6000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('怎么……可能……', 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#嗯……该不会……真剩我们两个……了吧？", 37, 3003770, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -660, 155);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h2;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("啊……？", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你……你没事吧？！", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#……", 37, 3003785, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("……？你没事吧？", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h1;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644708/Regen", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.updateInfoQuest(35751, "800=h0;04=h3;81=h1;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                        cm.npc_SetForceMove("oid=2310126", 1, 100, 200);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -315, 90);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.updateInfoQuest(35751, "800=h0;04=h3;81=h2;90=h0;82=h1;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                              cm.updateInfoQuest(35751, "800=h0;04=h3;81=h2;90=h0;82=h2;91=h0;83=h1;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                              cm.updateInfoQuest(35751, "800=h0;04=h3;81=h2;90=h0;82=h2;91=h0;83=h2;92=h0;84=h1;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                              cm.updateInfoQuest(35751, "800=h0;04=h3;81=h2;90=h0;82=h2;91=h0;83=h2;92=h0;84=h2;93=h0;85=h1;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                              cm.updateInfoQuest(35751, "800=h0;04=h3;81=h2;90=h0;82=h2;91=h0;83=h2;92=h0;84=h2;93=h0;85=h2;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h0;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                                cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h1;03=h1;22=h1;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644706/Regen", 100);
                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644707/Regen", 100);
                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644708/Regen", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h2;91=h0;83=h2;92=h0;84=h2;93=h0;85=h2;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                  cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h2;92=h0;84=h2;93=h0;85=h2;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                  cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h2;93=h0;85=h2;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                  cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h2;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                  cm.updateInfoQuest(35751, "800=h0;04=h3;81=h0;90=h0;82=h0;91=h0;83=h0;92=h0;84=h0;93=h0;85=h0;94=h0;86=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h1;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                                    cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_ChangeController(3003734, "oid=2310291", -399, 180, 6, -449, -349, 1, true, 1000, false);
                                                                      cm.npc_SetSpecialAction("oid=2310291", "summon", 0, 0);
                                                                      cm.npc_ChangeController(3003734, "oid=2310292", -2, 180, 8, -52, 48, 1, true, 1000, false);
                                                                      cm.npc_SetSpecialAction("oid=2310292", "summon", 0, 0);
                                                                      cm.npc_ChangeController(3003735, "oid=2310293", 297, 180, 3, 247, 347, 1, true, 1000, false);
                                                                      cm.npc_SetSpecialAction("oid=2310293", "summon", 0, 0);
                                                                      cm.npc_ChangeController(3003735, "oid=2310294", -59, 180, 8, -109, -9, 1, true, 1000, false);
                                                                      cm.npc_SetSpecialAction("oid=2310294", "summon", 0, 0);
                                                                      cm.npc_ChangeController(3003736, "oid=2310295", -570, 180, 13, -620, -520, 1, true, 1000, false);
                                                                      cm.npc_SetSpecialAction("oid=2310295", 'summon', 0, 0);
                                                                      cm.npc_ChangeController(3003736, "oid=2310296", 417, 180, 11, 367, 467, 1, true, 1000, false);
                                                                      cm.npc_SetSpecialAction("oid=2310296", "summon", 0, 0);
                                                                      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                                      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                                      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h0;03=h1;22=h0;04=h0;23=h0;14=h0;05=h5;06=h0;15=h1;17=h0;09=h0;79=h1");
                                                                      cm.npc_SetSpecialAction("oid=2310291", "stand", -1, 1);
                                                                      cm.npc_SetSpecialAction("oid=2310292", "stand", -1, 1);
                                                                      cm.npc_SetSpecialAction("oid=2310293", 'stand', -1, 1);
                                                                      cm.npc_SetSpecialAction("oid=2310294", "stand", -1, 1);
                                                                      cm.npc_SetSpecialAction("oid=2310295", 'stand', -1, 1);
                                                                      cm.npc_SetSpecialAction("oid=2310296", "stand", -1, 1);
                                                                      cm.sendNormalTalk_Bottom("怎么办……", 57, 0, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#啊……我知道了。", 37, 3003770, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#我们会在迷宫中……越陷越深。", 37, 3003770, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1##r经历名为死亡的痛苦……\r\n让灵魂变得失去原本的自我陷入绝望……#k", 37, 3003770, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1##r但无法离开这里的……可怜的人……#k", 37, 3003770, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#刚刚……那些有着黑色翅膀的人……", 37, 3003770, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#是不是他们啊？", 37, 3003770, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#逐渐失去原本的样子最终……", 37, 3003770, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("别……别说了！！！！！！", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(你说一直以来我亲手杀死的那些……是联盟成员……？)", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("不……", 57, 0, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face1#你要就这么发呆吗？", 37, 3003770, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("可……可是那……那些人……", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#那你想在这里等死？和他们死在一起？", 37, 3003770, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#你可真是的！", 37, 3003770, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetForceMove("oid=2310126", 1, 150, 200);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=2310126", 'attack', 1000, 1);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/azthrow", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetSpecialAction("oid=2310295", "die1", 2400, 1);
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644708/Die", 100);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_LeaveField("oid=2310295");
                                                                                                                    cm.npc_LeaveField("oid=2310295");
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("怎……怎么办……", 57, 0, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#活着的人还得活着啊？你想在这里等死吗？", 37, 3003770, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#没想到你是这么优柔寡断的人。\r\n你是被感情所蒙蔽，不知道真正重要的东西是什么了吗？", 37, 3003770, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_ChangeController(3003734, "oid=2310428", -450, 180, 7, -500, -400, 1, true, 1000, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=2310428", "summon", 0, 0);
                                                                                                                                cm.npc_ChangeController(3003735, "oid=2310429", -370, 180, 6, -420, -320, 1, true, 1000, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=2310429", 'summon', 0, 0);
                                                                                                                                cm.npc_ChangeController(3003736, "oid=2310430", -670, 180, 18, -720, -620, 1, true, 1000, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=2310430", "summon", 0, 0);
                                                                                                                                cm.npc_ChangeController(3003735, "oid=2310431", -550, 180, 13, -600, -500, 1, true, 1000, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=2310431", "summon", 0, 0);
                                                                                                                                cm.npc_SetSpecialAction("oid=2310428", 'stand', -1, 1);
                                                                                                                                cm.npc_SetSpecialAction("oid=2310429", "stand", -1, 1);
                                                                                                                                cm.npc_SetSpecialAction("oid=2310430", "stand", -1, 1);
                                                                                                                                cm.npc_SetSpecialAction("oid=2310431", "stand", -1, 1);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644706/Regen", 100);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644707/Regen", 100);
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644708/Regen", 100);
                                                                                                                                cm.sendNormalTalk_Bottom("啊……", 57, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#没时间磨蹭了。", 37, 3003770, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_ChangeEquipment([1012506]);
                                                                                                                                      cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                                                                                                      cm.setNpcSpecialActionReset("oid=2310126");
                                                                                                                                      cm.npc_SetSpecialAction("oid=2310126", 'reveal', 1200, 1);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetSpecialAction("oid=2310126", "reveal1", -1, 1);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#没……时间了……", 37, 3003770, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -650, 190);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/othello/criHit", 200);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2310291", "die1", 2400, 1);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2310292", 'die1', 2400, 1);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2310293", "die1", 2400, 1);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2310294", "die1", 2400, 1);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2310296", 'die1', 2400, 1);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2310428", 'die1', 2400, 1);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2310429", "die1", 2400, 1);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2310430", "die1", 2400, 1);
                                                                                                                                                      cm.npc_SetSpecialAction("oid=2310431", 'die1', 2400, 1);
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644706/Die", 100);
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644707/Die", 100);
                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644708/Die", 100);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_LeaveField("oid=2310291");
                                                                                                                                                        cm.npc_LeaveField("oid=2310291");
                                                                                                                                                        cm.npc_LeaveField("oid=2310292");
                                                                                                                                                        cm.npc_LeaveField("oid=2310292");
                                                                                                                                                        cm.npc_LeaveField("oid=2310293");
                                                                                                                                                        cm.npc_LeaveField("oid=2310293");
                                                                                                                                                        cm.npc_LeaveField("oid=2310294");
                                                                                                                                                        cm.npc_LeaveField("oid=2310294");
                                                                                                                                                        cm.npc_LeaveField("oid=2310296");
                                                                                                                                                        cm.npc_LeaveField("oid=2310296");
                                                                                                                                                        cm.npc_LeaveField("oid=2310428");
                                                                                                                                                        cm.npc_LeaveField("oid=2310428");
                                                                                                                                                        cm.npc_LeaveField("oid=2310429");
                                                                                                                                                        cm.npc_LeaveField("oid=2310429");
                                                                                                                                                        cm.npc_LeaveField("oid=2310430");
                                                                                                                                                        cm.npc_LeaveField("oid=2310430");
                                                                                                                                                        cm.npc_LeaveField("oid=2310431");
                                                                                                                                                        cm.npc_LeaveField("oid=2310431");
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.setNpcSpecialActionReset("oid=2310126");
                                                                                                                                                          cm.npc_SetSpecialAction("oid=2310126", "stand", -1, 1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#你看。很简单嘛？他们都是已经失去自我的人了。", 37, 3003770, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("啊……等一下……啊？！", 57, 0, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("我……我现在……做了……？", 57, 0, false, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#也许借#h0#之手永远陷入沉睡，才是他们希望的。", 37, 3003770, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#我们快点离开这里吧。还得去其他地方找呢。", 37, 3003770, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_SetForceMove("oid=2310126", 1, 400, 200);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.npc_LeaveField("oid=2310126");
                                                                                                                                                                                  cm.npc_LeaveField("oid=2310126");
                                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(我在……做什么……)", 57, 0, false, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(不，那句话没错。我不能死在这里……可是……)", 57, 0, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(我应该守护的人……死在了我手里……)", 57, 0, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(我到底在做什么？)", 57, 0, true, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("我现在应该怎么办……", 57, 0, false, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                                                        cm.dispose();
                                                                                                                                                                                                        cm.warp(993063031, 0, false);
                                                                                                                                                                                                        cm.setStandAloneMode(false);
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
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}