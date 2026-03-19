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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -400, -245);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3001310, "oid=671458", -820, -200, 159, -870, -770, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=671458', "summon", 0, 0);
        cm.npc_ChangeController(3001300, "oid=671459", -540, -200, 154, -590, -490, 0, true, 0, false);
        cm.npc_SetSpecialAction('oid=671459', "summon", 0, 0);
        cm.npc_ChangeController(3001312, "oid=671460", -720, -200, 160, -770, -670, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=671460", 'summon', 0, 0);
        cm.npc_ChangeController(3001311, "oid=671461", -480, -200, 152, -530, -430, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=671461", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#神木村#fs15##fnNanumGothic#火焰树林某处", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(3500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#伊利温……我好累啊……饿死了……", 37, 3001310, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#无法找到水晶门。", 37, 3001300, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#好像不是这边。", 37, 3001354, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=671461", 1, 150, 150);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#……", 37, 3001311, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671461"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                            cm.npc_LeaveField('oid=671461');
                            cm.sendNormalTalk_Bottom("#face2#哎！？希娜，你在干什么！", 37, 3001310, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.userSetFieldFloating(940202049, 3, 3, 10);
                              cm.inGameDirectionEvent_AskAnswerTime(900);
                            } else {
                              if (status === V++) {
                                cm.userSetFieldFloating(940202049, 0, 0, 0);
                                cm.userSetFieldFloating(940202049, 3, 3, 10);
                                cm.inGameDirectionEvent_AskAnswerTime(900);
                              } else {
                                if (status === V++) {
                                  cm.userSetFieldFloating(940202049, 0, 0, 0);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -400, -245);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=671458'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=671459"], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=671460"], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                                      cm.npc_ChangeController(3001311, "oid=671476", 120, -200, 155, 70, 170, 1, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=671476", "summon", 0, 0);
                                      cm.npc_ChangeController(3001368, "oid=671477", 480, -200, 156, 430, 530, 1, true, 0, false);
                                      cm.npc_SetSpecialAction('oid=671477', "summon", 0, 0);
                                      cm.npc_ChangeController(3001368, "oid=671478", 300, -200, 151, 250, 350, 1, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=671478", "summon", 0, 0);
                                      cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1000, 500, -200, -245);
                                    } else {
                                      if (status === V++) {
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
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 100, -195);
                                              } else {
                                                if (status === V++) {
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
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -200, -245);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", 'oid=671476'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                            cm.sendNormalTalk_Bottom("#face3#危险，希娜！", 37, 3001354, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#最危险的就是你，伊利温！", 37, 3001311, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.userSetFieldFloating(940202049, 3, 3, 10);
                                                                cm.inGameDirectionEvent_AskAnswerTime(900);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.userSetFieldFloating(940202049, 0, 0, 0);
                                                                  cm.userSetFieldFloating(940202049, 3, 3, 10);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.userSetFieldFloating(940202049, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -200, -245);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission4", 100);
                                                                        cm.npc_ChangeController(3001368, "oid=671479", -270, -400, 103, -320, -220, 1, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=671479", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3001368, "oid=671480", -180, -500, 114, -230, -130, 1, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=671480", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3001368, "oid=671481", 100, -500, 60, 50, 150, 1, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=671481", "summon", 0, 0);
                                                                        cm.npc_ChangeController(3001368, "oid=671482", 150, -500, 65, 100, 200, 1, true, 0, false);
                                                                        cm.npc_SetSpecialAction('oid=671482', 'summon', 0, 0);
                                                                        cm.npc_ChangeController(3001368, "oid=671483", 210, -500, 69, 160, 260, 1, true, 0, false);
                                                                        cm.npc_SetSpecialAction("oid=671483", "summon", 0, 0);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671479"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671480"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671481"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671482"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671483"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                        cm.sendNormalTalk_Bottom("#face2#啊！搞、搞什么？", 37, 3001310, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#那些幽灵……？！希娜，到底怎么回事？", 37, 3001354, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#呃啊啊~幽灵数量增加了！！！我的妈呀~", 37, 3001310, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#希娜！我问你到底是怎么回事！", 37, 3001354, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_ChangeController(3001309, "oid=671485", 60, -220, 155, 10, 110, 1, true, 0, false);
                                                                                    cm.npc_SetSpecialAction('oid=671485', 'summon', 0, 0);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001004/Use", 100);
                                                                                    cm.npc_SetSpecialAction("oid=671485", "appear", 1, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.setNpcSpecialActionReset("oid=671485");
                                                                                      cm.sendNormalTalk_Bottom("#face2#好久不见啊，肮脏的机械少年。", 37, 3001309, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#你来了，戴尔斯大人。", 37, 3001311, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#戴尔斯……！！！希娜！", 37, 3001354, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face2#呃呃，这到底……是怎么回事啊？", 37, 3001310, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetForceMove("oid=671485", -1, 300, 170);
                                                                                              cm.npc_SetForceMove('oid=671476', -1, 300, 170);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -400, -245);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_ChangeController(3001368, "oid=671496", -1100, -200, 161, -1150, -1050, 0, true, 0, false);
                                                                                                    cm.npc_SetSpecialAction("oid=671496", 'summon', 0, 0);
                                                                                                    cm.npc_ChangeController(3001368, 'oid=671497', -988, -200, 158, -1038, -938, 0, true, 0, false);
                                                                                                    cm.npc_SetSpecialAction("oid=671497", 'summon', 0, 0);
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", 'oid=671496'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport", "oid=671497"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                    cm.sendNormalTalk_Bottom("#face0#可恶……！", 37, 3001354, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face3#如果把这#b水晶#k献给吉伦·达尔莫尔大人……", 37, 3001309, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#我们平民翼人和高等翼人会再次成为一体，共享古代翼人的荣光！", 37, 3001309, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3#那就能力压格兰蒂斯，一跃成为全世界最强大的民族！", 37, 3001309, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom('#face2#咦！', 37, 3001354, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_OneTimeAction("圣晶使徒_攻击", 0);
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Skill/15211.img/skill/152110004/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152110004/Use", 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/dias_skill", 100);
                                                                                                                  cm.npc_SetSpecialAction("oid=671485", "skill", 1, 1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Skill/15211.img/skill/152110004/hit/0", "oid=671485"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Skill/15211.img/skill/152110004/hit/0", 'oid=671476'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152110004/Hit", 100);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face3#呼，真可笑。", 37, 3001309, false, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/dias_skill", 100);
                                                                                                                        cm.npc_SetSpecialAction("oid=671485", "skill", 1, 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.setNpcSpecialActionReset("oid=671485");
                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -720, -195);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.setAmbience("Ambience.img/electronic", 200, 60);
                                                                                                                              cm.npc_SetSpecialAction("oid=671458", "tied_pre", 0, 1);
                                                                                                                              cm.npc_SetSpecialAction("oid=671459", 'tied_pre', 0, 1);
                                                                                                                              cm.npc_SetSpecialAction('oid=671460', "tied_pre", 0, 1);
                                                                                                                              cm.emotion(1, 999999);
                                                                                                                              cm.inGameDirectionEvent_OneTimeAction(4, 999999);
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/illium_Dias_Pre_Back/1"], [0, 0, -20, 1, -50, 0, 0, 0, 0]);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/illium_Dias_Pre_Front/1"], [0, 0, -20, 1, 0, 0, 0, 0, 0]);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_SetSpecialAction("oid=671458", "tied_loop", -1, 1);
                                                                                                                                  cm.npc_SetSpecialAction("oid=671459", "tied_loop", -1, 1);
                                                                                                                                  cm.npc_SetSpecialAction("oid=671460", 'tied_loop', -1, 1);
                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/illium_Dias_Loop_Back/1"], [999999, 0, -20, 1, -50, 0, 0, 0, 0]);
                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/illium_Dias_Loop_Front/1"], [999999, 0, -20, 1, 0, 0, 0, 0, 0]);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.effect_NormalSpeechBalloon("啊啊啊啊啊啊！！！！！！！！！！！！！！！！！！！！！！！", 0, 0, 0, 1200, 1, 0, 0, 0, 4, 3001310, null, cm.getPlayer().getId());
                                                                                                                                      cm.effect_NormalSpeechBalloon("呃啊啊啊啊！！！！！！！", 0, 0, 0, 1200, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                                                                                                                      cm.userSetFieldFloating(940202049, 3, 3, 10);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.userSetFieldFloating(940202049, 0, 0, 0);
                                                                                                                                        cm.userSetFieldFloating(940202049, 3, 3, 10);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.userSetFieldFloating(940202049, 0, 0, 0);
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
                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -400, -245);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#平民翼人被攻击的时候，想过你们是因为什么才逃出来的吗？运气好吗？还是你们能力出众？哈哈，真可笑。", 37, 3001309, false, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#可怜的蠢货……你们来冒险岛都是事先计划好的。所以一直在等#b古代水晶……#k的力量成熟吧。", 37, 3001309, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#……希娜。看来我的话只有你能听得进去。", 37, 3001309, true, true, 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#唯有继承我们圣洁翼人的优良品性，才是为民族未来着想的唯一出路。", 37, 3001311, true, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#伊利温，希望你不要误会。戴尔斯大人和我这么做都是为了平民翼人的未来。", 37, 3001311, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#看来我确实小看伊利温你这家伙了。谁能想到区区一个不懂魔法的工程师竟然拥有如此惊人的力量？", 37, 3001309, true, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#怎么样，难道不想跟我们一起编织平民翼人的未来吗？", 37, 3001309, true, true, 1);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#平民翼人的未来……", 37, 3001354, true, true, 1);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#阿加特大人……卡尔丽、所有教授，还有许许多多的人……都愿意为了……平民翼人的未来……不惜付出生命。", 37, 3001354, true, true, 1);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#别把你个人的私欲说成是为平民翼人的未来着想！", 37, 3001354, true, true, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#呼，还是那么孩子气。", 37, 3001309, true, true, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#原本这件事也不需要你同意。只不过就这么杀了你，实在是可惜了。", 37, 3001309, true, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/dias_skill", 100);
                                                                                                                                                                            cm.npc_SetSpecialAction("oid=671485", "skill", 1, 1);
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.setNpcSpecialActionReset("oid=671485");
                                                                                                                                                                              cm.npc_ChangeController(3001370, "oid=671508", -635, -200, 165, -685, -585, 0, true, 1000, false);
                                                                                                                                                                              cm.npc_SetSpecialAction('oid=671508', "summon", 0, 0);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.npc_SetForceMove("oid=671508", 1, 250, 170);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#吼吼……真是……皇天不负有心人！水晶终于到手了！！", 37, 3001309, false, true, 1);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#(这样下去太危险了……怎么办……怎么办呢？)", 37, 3001354, true, true, 1);
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
                                                                                                                                                                                            cm.npc_LeaveField("oid=671458");
                                                                                                                                                                                            cm.npc_LeaveField("oid=671459");
                                                                                                                                                                                            cm.npc_LeaveField("oid=671460");
                                                                                                                                                                                            cm.npc_LeaveField("oid=671476");
                                                                                                                                                                                            cm.npc_LeaveField("oid=671477");
                                                                                                                                                                                            cm.npc_LeaveField("oid=671478");
                                                                                                                                                                                            cm.npc_LeaveField("oid=671479");
                                                                                                                                                                                            cm.npc_LeaveField('oid=671480');
                                                                                                                                                                                            cm.npc_LeaveField("oid=671481");
                                                                                                                                                                                            cm.npc_LeaveField("oid=671482");
                                                                                                                                                                                            cm.npc_LeaveField('oid=671483');
                                                                                                                                                                                            cm.npc_LeaveField('oid=671485');
                                                                                                                                                                                            cm.npc_LeaveField("oid=671496");
                                                                                                                                                                                            cm.npc_LeaveField("oid=671497");
                                                                                                                                                                                            cm.npc_LeaveField("oid=671508");
                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                            cm.warp(940202050, 0, false);
                                                                                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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