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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ChangeEquipment([1103191, 1053436, 1005361, 1402270]);
      cm.npc_ChangeController(9062191, "oid=122483636", -437, 11, 2, -487, -387, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=122483636", "summon", 0, 0);
      cm.npc_ChangeController(9062173, "oid=122483637", -85, -220, 8, -135, -35, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=122483637", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=122483636", 'say', -1, 1);
      cm.inGameDirectionEvent_AskAnswerTime(6000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#魔王皮洛克藏身处", ''], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
      cm.updateInfoQuest(500827, "q1Set=1;q2Set=0;q3Set=1;q4Set=0;start=0;q5Set=1;lT=20/04/19;qSetDate=20/07/23;accSum=736841;QuestCount=3;accCheck=200723001109138");
      cm.updateInfoQuest(500827, "q1Set=1;q2Set=0;q3Set=1;q4Set=0;start=0;q5Set=1;lT=20/04/19;qSetDate=20/07/23;accSum=797559;QuestCount=3;accCheck=200723001109138");
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 70);
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("\r\n我等你很久了，王国的小毛孩。", 37, 9062192, false, true, 3);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("\r\n勇士！！", 37, 9062173, false, true, 3);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("\r\n我真的没想到……他会带着那条#b金枪鱼#k出现。", 37, 9062192, false, true, 3);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("\r\n什么金枪鱼！！那是我们王国传说中的宝剑，#r新复古之剑#k！", 37, 9062173, true, true, 3);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("\r\n.....", 37, 9062192, true, true, 3);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("\r\n就凭那小样儿，居然打败魔王，拯救了王国……", 37, 9062192, true, true, 3);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("\r\n你真的一次都没起过疑心吗……？", 37, 9062192, true, true, 3);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("\r\n.....", 37, 9062173, false, true, 3);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("\r\n真……真正的强大是深藏不露的！！", 37, 9062173, false, true, 3);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("\r\n快让他见识下你的厉害！！勇士！！", 37, 9062173, true, true, 3);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("\r\n来吧，考验一下你的命运吧，#r手持金枪鱼的勇士#k。", 37, 9062192, false, true, 3);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 80);
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_MoveAction(0);
                                              cm.inGameDirectionEvent_OneTimeAction(8, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                cm.effect_OnUserEff("Effect/EventEffect.img/16thEvent/0");
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/sword1", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                    cm.sendNormalTalk_Bottom("\r\n咳呃！！呃……", 37, 9062192, false, true, 3);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("\r\n……干掉他了吗？", 37, 9062173, false, true, 3);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("\r\n好……好惊人的……", 37, 9062192, false, true, 3);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("\r\n好腥啊……", 37, 9062192, false, true, 3);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("\r\n........", 37, 9062173, false, true, 3);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("\r\n哈哈哈哈哈！", 37, 9062192, false, true, 3);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("\r\n好，我就陪你玩玩！！", 37, 9062192, true, true, 3);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("\r\n小心！！勇士！！", 37, 9062173, false, true, 3);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.setNpcSpecialActionReset("oid=122483636");
                                                                                cm.npc_SetSpecialAction("oid=122483636", 'skill', 0, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_OneTimeAction(25, 999999);
                                                                                  cm.emotion(1, 999999);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  cm.effect_LastingEff("Skill/MobSkill/257.img/level/2/hit", 1, 1000, 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                    cm.sendNormalTalk_Bottom("\r\n勇士！！你振作点！！", 37, 9062173, false, true, 3);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                      cm.setNpcSpecialActionReset("oid=122483636");
                                                                                      cm.npc_SetSpecialAction("oid=122483636", "say", -1, 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("\r\n本以为可以解解闷，看来是我期待过高了。", 37, 9062192, false, true, 3);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("\r\n闲话少说，我这就送你上路吧。", 37, 9062192, true, true, 3);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("\r\n勇士！！你醒醒！！", 37, 9062173, false, true, 3);
                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=0;q3Set=1;q4Set=0;start=0;q5Set=1;lT=20/04/19;qSetDate=20/07/23;accSum=797559;QuestCount=3;accCheck=200723001209769");
                                                                                              cm.updateInfoQuest(500827, "q1Set=1;q2Set=0;q3Set=1;q4Set=0;start=0;q5Set=1;lT=20/04/19;qSetDate=20/07/23;accSum=858190;QuestCount=3;accCheck=200723001209769");
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.setNpcSpecialActionReset("oid=122483636");
                                                                                                  cm.npc_SetSpecialAction("oid=122483636", "skill", 0, 1);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    cm.effect_LastingEff("Skill/MobSkill/257.img/level/2/hit", 1, 1000, 0);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_SetSpecialAction("oid=122483636", "say", -1, 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                        cm.sendNormalTalk_Bottom("\r\n呜……", 37, 9062173, false, true, 3);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("\r\n勇士……", 37, 9062173, true, true, 3);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("\r\n没指望了。所谓王国的传说，果然只是个谎言。", 37, 9062173, true, true, 3);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("\r\n是啊……我小时候就觉得有点奇怪来着……", 37, 9062173, true, true, 3);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("\r\n金枪鱼……斗笠……浴袍……", 37, 9062173, true, true, 3);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("\r\n呜呜……就因为我，连好心的勇士也……", 37, 9062173, true, true, 3);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                    cm.npc_SetSpecialAction("oid=122483636", "say", -1, 1);
                                                                                                                    cm.sendNormalTalk_Bottom("\r\n嘁，还没等我来劲就结束了。", 37, 9062192, true, true, 3);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                        cm.effect_OnUserEff("Effect/CharacterEff.img/12thMiniGame/getMesso3");
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("\r\n……嗯？", 37, 9062192, false, true, 3);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("\r\n!?", 37, 9062173, true, true, 3);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                                                                                                cm.inGameDirectionEvent_ChangeEquipment([1053437, 1103192, 1005362, 1302357]);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                cm.effect_OnUserEff("Effect/CharacterEff.img/allianceJewel");
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                                                                                    cm.inGameDirectionEvent_OneTimeAction(2, 999999);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("\r\n!?", 37, 9062192, false, true, 3);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("\r\n!!!", 37, 9062173, true, true, 3);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("\r\n那个是……！", 37, 9062173, true, true, 3);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("\r\n难……难道你打算这么老套地觉醒吗！？", 37, 9062192, false, true, 3);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("\r\n他……那个……他真的是#r新复古英雄#k！！", 37, 9062173, false, true, 3);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                    cm.effect_LastingEff("Effect/BasicEff.img/collisionItemEffect/2438376", 1, 6000, 0);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("\r\n嘁……没门儿！！", 37, 9062192, false, true, 3);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("\r\n勇士！！趁现在！！", 37, 9062173, true, true, 3);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.setNpcSpecialActionReset("oid=122483636");
                                                                                                                                                          cm.npc_SetSpecialAction("oid=122483636", "skill", 0, 1);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                                            cm.inGameDirectionEvent_OneTimeAction(8, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              cm.effect_OnUserEff("Effect/EventEffect.img/16thEvent/1");
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/16thEvent/piclog2", 0, 3000, 0, 0, 25, 4, 3, -1, 0, 0, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("\r\n.....", 37, 9062192, false, true, 3);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("\r\n怎么……会这样……", 37, 9062192, true, true, 3);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("\r\n就这么……栽在典型的套路上……好憋屈……", 37, 9062192, true, true, 3);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                                                                cm.setNpcSpecialActionReset("oid=122483636");
                                                                                                                                                                                cm.npc_SetSpecialAction("oid=122483636", "say", -1, 1);
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.setNpcSpecialActionReset("oid=122483636");
                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=122483636", "die", 0, 1);
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.npc_LeaveField("oid=122483636");
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1300, 0);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("威胁王国的魔王皮洛克倒下了。", 0);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("公主回到了梦中思念的王国", 0);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_Monologue("百姓们为公主和英雄举办了为期几天的盛大宴席。", 0);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_Monologue("公主给英雄授予了王国里最高的爵位。", 0);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_Monologue("英雄许诺，会在这个仍需要帮助的地方多留一段时间。", 0);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                          cm.updateInfoQuest(500827, "q1Set=1;q2Set=0;q3Set=1;q4Set=0;start=0;q5Set=1;lT=20/04/19;qSetDate=20/07/23;accSum=858190;QuestCount=3;accCheck=200723001310484");
                                                                                                                                                                                                          cm.updateInfoQuest(500827, "q1Set=1;q2Set=0;q3Set=1;q4Set=0;start=0;q5Set=1;lT=20/04/19;qSetDate=20/07/23;accSum=918905;QuestCount=3;accCheck=200723001310484");
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("在王国的城墙顶上，升起了人们期望已久的和平的旗帜。", 1);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                            } else if (status === V++) {
                                                                                                                                                                                                              cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                                                                                                                                                                              cm.warp(993110000, 2, false);
                                                                                                                                                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                              cm.updateInfoQuest(500728, "Scene=1;last=200723;lv=5;first=1");
                                                                                                                                                                                                              cm.npc_LeaveField("oid=122483637");
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