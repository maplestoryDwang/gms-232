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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（我们出来寻找怪物已经经过漫长的时间，我们就这样一只接一只地\r\n四处回收怪物，终于只剩下最后一只了。）", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（那个拼死坚持的家伙也终究快要耗尽力气了，\r\n现在只要发起最终一击，就能结束这场漫长的旅途了吗？）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3001651, "oid=7893797", 75, -50, 10, 25, 125, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=7893797", "summon", 0, 0);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), -255, -50);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 165, -20);
            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=7893797");
                  cm.npc_SetSpecialAction("oid=7893797", "special3", 1800, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_get", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1800);
                  cm.effect_Text(["#fn黑体##fs18#破碎的回廊", ''], [100, 500, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.setNpcSpecialActionReset("oid=7893797");
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 69, -20);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face9#怎么样，饕餮？我超帅的吧？", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#face0#额……', 37, 3001651, true, true, 1);
                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face7#……饕餮！？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#一股力量……油然而生。", 37, 3001651, true, true, 1);
                                  cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/7', 100);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=7893797");
                                      cm.onTeleport(0, 3, cm.getPlayer().getId(), -829, -52);
                                      cm.emotion(1, 5000);
                                      cm.inGameDirectionEvent_OneTimeAction(25, 5000);
                                      cm.sendNormalTalk_Bottom("#face0#哦哦哦哦哦哦哦哦哦哦哦！！！！！！！！！！", 37, 3001651, false, true, 1);
                                      cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(3001650, "oid=7895068", -270, -276, 5, -320, -220, 1, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=7895068", "summon", 0, 0);
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
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -479, -130);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_复合图片动画(["Effect/Direction9.img/HoyoungEffect/8/skeleton", "02_gone", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip(0);
                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（刚吸收完最后一只怪物，饕餮就变回了原本的模样，\r\n变回了当初我们最开始在道观附近相遇时的样子。）", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                      cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（不愧是吞下了无数怪物的大怪物，这威仪，这姿态，\r\n好吧，饕餮原本就是这么厉害。）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/10", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#都让我开始不好意思一直捉弄你了……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_Hero9(0, 2000);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom1", 100);
                                                            cm.userSetFieldFloating(993160166, 10, 10, 10);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.userSetFieldFloating(993160166, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -479, -130);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                  cm.fieldEffect_Hero9(100, 500);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm53/Apostles", 0, 0);
                                                                    cm.sendNormalTalk_Bottom("#face7#什么情况……是饕餮你吗？ 你该不会是因为我一直以来都在耍滑头\r\n就打算报复吧？哈，哈哈……", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                    cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#从远处就能感受到一阵微妙的动静。", 37, 3001650, true, true, 1);
                                                                      cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#你的意思是还有其他人？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#这气息分明就是怪物的，应该不是肚子里的。\r\n不过虽说是这里的怪物，感觉却有几分熟悉……", 37, 3001650, true, true, 1);
                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#这到底是怎么回事啊？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -270, -214);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#正在来的路上。", 37, 3001650, false, true, 1);
                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#而且还相当快。", 37, 3001650, true, true, 1);
                                                                                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/18', 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#……正在靠过来。", 37, 3001650, true, true, 1);
                                                                                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face12#难道因为到处击败怪物而有了名气？\r\n这倒挺让人欣慰的嘛！", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/21", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#稍微严肃一点吧，你这家伙！", 37, 3001650, true, true, 1);
                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/22", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom('#face0#……', 37, 3001650, true, true, 1);
                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/23', 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/24', 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face7#不是……你！？", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/25", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_ChangeController(3001652, "oid=7898007", -1122, -51, 14, -1172, -1072, 0, false, 0, false);
                                                                                                                cm.npc_SetSpecialAction("oid=7898007", "summon", 0, 0);
                                                                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1122, -20);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
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
                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -1010, -20);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#好久不见了呢，解决师，你该不会这么快就忘了我卡琳吧？", 37, 3001652, false, true, 1);
                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/26', 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face7#是，是啊，当然没有忘。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/27", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face5#不过你为何一脸惊慌失措的表情？", 37, 3001652, true, true, 1);
                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/28", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这个嘛……我能想到会在这种地方碰到吗！？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/29", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face4#啊，听你这么一说确实如此呢，不过我要是表明为什么会来这里见虎影你，\r\n你会接受吗？", 37, 3001652, true, true, 1);
                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/30', 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#不好说……比方说是因为有钱没还，过来收钱的……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/31', 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face5#收回去啊……那什么，感觉倒是应该差不多呢。", 37, 3001652, true, true, 1);
                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/32", 100);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#我的确喜欢金银珠宝，不过说实话，还有一样东西更加吸引我，\r\n那便是收集强大的怪物。", 37, 3001652, true, true, 1);
                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/33", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#可是啊，我一直盯着的那个怪物……\r\n不久之前被人截胡了。", 37, 3001652, true, true, 1);
                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/34", 100);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#那该不会……是我吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/35', 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face11#啊……你也在找怪物啊，不过这可怎么办才好？\r\n那些怪物原本就该在饕餮那个家伙的肚子里才对哦！", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/36', 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face10#所以请回吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/37", 100);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face9#……挺乐呵的嘛。", 37, 3001652, true, true, 1);
                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/38", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face7#嗯？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/39', 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face9#不觉得太过了吗？你这样的家伙带着饕餮，\r\n根本不知道四凶的真正力量。", 37, 3001652, true, true, 1);
                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/40", 100);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face10#就任由它猖狂吧，让灾难降临于世，\r\n这便是饕餮存在的价值，懂了吗！？", 37, 3001652, true, true, 1);
                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/41", 100);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#所以你能乖乖地……将饕餮交出来吗？", 37, 3001652, true, true, 1);
                                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/42", 100);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#哈哈……实在是令人气结到听不下去了，\r\n饕餮可不是什么物件，怎么能听凭你处置。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/43', 100);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#什么不够格，什么引发灾难，那都是你的想法，\r\n我不管饕餮过去曾是个什么样的怪物，可他现在不一样了。", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/44', 100);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#你可是我独一无二的同伴啊，是不是，饕餮？", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/45", 100);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#！？", 37, 3001650, true, true, 1);
                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/46", 100);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face9#呼……既然你要这么来，那就休要怪我心狠手辣了！", 37, 3001652, true, true, 1);
                                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/47", 100);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face9#那你就抱着必死的觉悟看着吧。", 37, 3001652, true, true, 1);
                                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/48", 100);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_OneTimeAction(25, 999999);
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（我，我动不了了……怎么会！？）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2500, 1500, -860, -20);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=7898007", 'attack0', -1, 0);
                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/K_attack", 100);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.emotion(1, 5000);
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.setNpcSpecialActionReset("oid=7898007");
                                                                                                                                                                                        cm.npc_LeaveField("oid=7895068");
                                                                                                                                                                                        cm.setNpcSpecialActionReset("oid=7898007");
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#唔……", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/49', 100);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（那家伙体内的怪物张开血盆大口将我吞噬，\r\n感觉生命在一点点燃烧。）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/50", 100);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#怎么还在硬撑呢？", 37, 3001650, true, true, 1);
                                                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/51", 100);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（刚刚的话你没听到吗？既然有这种理由就帮帮忙啊！\r\n不是都已经找回力量了嘛？总该做点什么吧！）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/52", 100);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#你该不会已经忘记自己体内的封印了吧！？\r\n靠你一个人绝对没办法发挥实力的，唔……", 37, 3001650, true, true, 1);
                                                                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/53", 100);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#啧啧……这个杀千刀的家伙……\r\n好吧，就这一次，借你用一用我饕餮的力量。", 37, 3001650, true, true, 1);
                                                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/54", 100);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（！？）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/55", 100);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#那家伙手中的怪物必是和我一样的四凶，\r\n想要阻止，也要靠身为四凶之一的我的力量了。", 37, 3001650, true, true, 1);
                                                                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/56", 100);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#只不过我所担心的是，以你小子的器量搞不好无法承受我的力量，\r\n从而没办法彻底发挥……", 37, 3001650, true, true, 1);
                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/57", 100);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（和当初封印你的时候不一样，现在……也许能够做到，\r\n不，要想活就只能做到吧！？）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/58', 100);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#好吧，那就过去看看。", 37, 3001650, true, true, 1);
                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/59', 100);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（知道了。）", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/60", 100);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_bye/whiteback2/skeleton", "animation", ''], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
                                                                                                                                                                                                                cm.fieldEffect_Hero9(0, 1000);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                                  cm.fieldEffect_Hero9(100, 500);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm53/RidingOnTheClouds", 0, 0);
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4#哈啊啊啊啊啊啊啊啊啊啊啊！！！！！！！！！！", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/61", 100);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 2);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.fieldEffect_取消复合图片动画('02', 1, 500);
                                                                                                                                                                                                                                  cm.emotion(1, 5000);
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_OneTimeAction(25, 999999);
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1010, -20);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 2);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#咳咳！", 37, 3001652, false, true, 1);
                                                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/62", 100);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.emotion(1, 5000);
                                                                                                                                                                                                                                          cm.inGameDirectionEvent_OneTimeAction(4, 5000);
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face4#怎么样……在我看来这样绝对够资格了……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/63", 100);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face9#好不容易活下来了呢，不过应该不会再有第二次了，\r\n你也该就此消失了，再见。", 37, 3001652, true, true, 1);
                                                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/64', 100);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#……", 37, 3001674 + cm.getPlayer().getGender(), true, true, 1);
                                                                                                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/66", 100);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.npc_SetSpecialAction("oid=7898007", "special5", 2400, 0);
                                                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/K_attack", 100);
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.emotion(1, 5000);
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2500, 2000, -810, -20);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -810, -20);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#！？", 37, 3001650, false, true, 1);
                                                                                                                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/65", 100);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/T_appear", 100);
                                                                                                                                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('11', "Effect/Direction9.img/HoyoungStory/11", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face7#那个是……师父！？", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/67", 100);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2##fc0xFF25f1ca#你这家伙呢！？", 37, 3001650, true, true, 1);
                                                                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/68", 100);
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#总不能让我的爱徒受伤啊。", 37, 3001654, false, true, 1);
                                                                                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/69", 100);
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face10#你这家伙是……仙界的……", 37, 3001652, true, true, 1);
                                                                                                                                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/70", 100);
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#我劝你最好选择退下，\r\n虽说只是思念体……但也不容小觑！你还是执意要试一试吗？", 37, 3001654, true, true, 1);
                                                                                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/71', 100);
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face10#别搞笑了！", 37, 3001652, true, true, 1);
                                                                                                                                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/72", 100);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#果然年轻就是血气旺盛啊，那就做好思想准备吧。", 37, 3001654, true, true, 1);
                                                                                                                                                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/73", 100);
                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face7#……咕嘟。", 37, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                                                                                                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/74", 100);
                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#……咕嘟。", 37, 3001650, true, true, 1);
                                                                                                                                                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/75", 100);
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#呵呵……三十六计走为上计！", 37, 3001654, false, true, 1);
                                                                                                                                                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/76", 100);
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/36", 100);
                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('11', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face10#切……狡猾的仙人……", 37, 3001652, false, true, 1);
                                                                                                                                                                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/78", 100);
                                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face9#……事情复杂得超出想象了嘛！？", 37, 3001652, true, true, 1);
                                                                                                                                                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/L/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/79", 100);
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                                                                                                                                                                                                                                            cm.warp(993160167, 0, false);
                                                                                                                                                                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                                                            cm.npc_LeaveField("oid=7898007");
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
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}