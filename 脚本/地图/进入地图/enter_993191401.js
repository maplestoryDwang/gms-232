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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 3465, 734);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.npc_ChangeController(9072306, "oid=442571", 4220, 646, 35, 4170, 4270, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=442571", "summon", 0, 0);
        cm.npc_ChangeController(9072308, "oid=442572", 3955, 698, 8, 3905, 4005, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=442572", "summon", 0, 0);
        cm.npc_ChangeController(9072306, "oid=442573", 3653, 729, 28, 3603, 3703, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=442573", "summon", 0, 0);
        cm.Npc_Fadeout("oid=442573", 0, 10);
        cm.npc_ChangeController(9072307, "oid=442574", 3366, 403, 42, 3316, 3416, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=442574", 'summon', 0, 0);
        cm.Npc_Fadeout("oid=442574", 0, 10);
        cm.npc_SetSpecialAction('oid=442574', "umbrella", -1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#射手村某处", ''], [100, 1000, 6, -50, -110, 1, 4, 0, 0, 0, 0, 0]);
              cm.npc_SetForceMove('oid=442572', -1, 400, 150);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/jump", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/jump", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 4193, 701);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=442572", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.effect_NormalSpeechBalloon("那个蘑菇，看上去很弱。", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, 'oid=442571', cm.getPlayer().getId());
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.effect_NormalSpeechBalloon("清理蘑菇这种事，比挠白雪人头发还简单！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, "oid=442571", cm.getPlayer().getId());
                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 3509, 734);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1800);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=442573", 'jump', 1, 1);
                                cm.Npc_Fadeout('oid=442573', 255, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/Hit", 100);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/Yeti/effect/0", "oid=442573"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                  cm.npc_SetSpecialAction("oid=442572", "surprise", 1, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_NormalSpeechBalloon("接招吧，白雪人之拳！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, 'oid=442573', cm.getPlayer().getId());
                                      cm.npc_SetSpecialAction("oid=442573", "attack", 1, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/Attack", 100);
                                        cm.npc_SetSpecialAction("oid=442572", "jump3", 1, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/jump", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_NormalSpeechBalloon("不，不是这样的……！重来，白雪人之拳！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, "oid=442573", cm.getPlayer().getId());
                                              cm.npc_SetSpecialAction("oid=442573", 'attack', 1, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(200);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/Attack", 100);
                                                cm.npc_SetSpecialAction("oid=442572", "jump3", 1, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/jump", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=442572"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", 'oid=442573'], [0, 0, -50, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_NormalSpeechBalloon("白雪人之拳怎么可能如此脆弱不堪！重来！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, "oid=442573", cm.getPlayer().getId());
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/Attack", 100);
                                                        cm.npc_SetSpecialAction("oid=442573", "attack2", 1, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/Attack", 100);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/jump", 100);
                                                          cm.npc_SetSpecialAction("oid=442572", "jump4", 1, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/jump", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_NormalSpeechBalloon("重、重来……！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, "oid=442573", cm.getPlayer().getId());
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=442573", 'tired', -1, 1);
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
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_NormalSpeechBalloon("呼……呼……白雪人……输了……蘑菇好强……", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, "oid=442573", cm.getPlayer().getId());
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.effect_NormalSpeechBalloon("居然有家伙会对着区区蘑菇手足无措！", 0, 0, 0, 2500, 1, 0, 230, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                              cm.setNpcSpecialActionReset("oid=442573");
                                                                              cm.npc_setForceFlip("oid=442572", -1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.Npc_Fadeout("oid=442574", 255, 100);
                                                                                cm.npcMove(9072307, 0, 300, 4000);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_NormalSpeechBalloon("什，什么人！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, 'oid=442573', cm.getPlayer().getId());
                                                                                  cm.setNpcSpecialActionReset("oid=442574");
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.effect_NormalSpeechBalloon("我看你真不是一般的弱啊。", 1, 0, 0, 1500, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.effect_NormalSpeechBalloon("我就给你示范一下，瞧好了。", 1, 0, 0, 1500, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.effect_NormalSpeechBalloon("接招吧，品克缤之击！", 1, 0, 0, 1500, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/jump", 100);
                                                                                        cm.npc_SetSpecialAction('oid=442572', "jump3", 1, 1);
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/Attack", 100);
                                                                                        cm.npc_SetSpecialAction("oid=442574", 'attack', 1, 1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.effect_NormalSpeechBalloon("哎哟？", 1, 0, 0, 1500, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, "oid=442573", cm.getPlayer().getId());
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.effect_NormalSpeechBalloon("#fnNanum Gothic ExtraBold##fs15#为什么，我中了“等级骤降”的诅咒！！", 0, 0, 0, 2500, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.effect_NormalSpeechBalloon('……', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072308, "oid=442572", cm.getPlayer().getId());
                                                                                                  cm.npc_setForceFlip('oid=442572', 1);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.effect_NormalSpeechBalloon('噗', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072308, "oid=442572", cm.getPlayer().getId());
                                                                                                      cm.npc_SetForceMove("oid=442572", 1, 400, 150);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/jump", 100);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/yetiJob/jump", 100);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetSpecialAction("oid=442573", "prone", -1, 1);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.Npc_Fadeout("oid=442572", 0, 1000);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.effect_NormalSpeechBalloon("你，太弱了，白雪人，很失望。", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, "oid=442573", cm.getPlayer().getId());
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.effect_NormalSpeechBalloon('什么太弱了！', 1, 0, 0, 1500, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.effect_NormalSpeechBalloon("屈膝跪在我面前的冒险家不知有多少呢！", 1, 0, 0, 1500, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                                                      cm.setNpcSpecialActionReset('oid=442573');
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.effect_NormalSpeechBalloon("白雪人一记猛拳挥下，地面崩裂，冰山轰然倒塌！", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, "oid=442573", cm.getPlayer().getId());
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.effect_NormalSpeechBalloon('那不如直接比试看看！', 1, 0, 0, 1500, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.effect_NormalSpeechBalloon('很好！战斗！', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 9072306, "oid=442573", cm.getPlayer().getId());
                                                                                                                              cm.npc_ChangeController(9072309, "oid=442788", 3052, 625, 14, 3002, 3102, 1, true, 100, false);
                                                                                                                              cm.npc_SetSpecialAction("oid=442788", "summon", 0, 0);
                                                                                                                              cm.npc_SetForceMove("oid=442788", 1, 400, 150);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_setForceFlip("oid=442573", -1);
                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=442573"], [0, 0, -50, 1, 0, 1, 0, 0, 0]);
                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=442574"], [0, 0, 280, 1, 0, 1, 0, 0, 0]);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=442788"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.effect_NormalSpeechBalloon('过、过去吧。', 1, 0, 0, 2000, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                                                                        cm.npc_SetForceMove("oid=442788", 1, 450, 150);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_setForceFlip("oid=442573", 1);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.Npc_Fadeout("oid=442788", 0, 1000);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_setForceFlip("oid=442573", -1);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=442573"], [0, 0, -50, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=442574"], [0, 0, 280, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.effect_NormalSpeechBalloon("不如……就等我们彼此找回力量后再对决如何？", 1, 0, 0, 2000, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.effect_NormalSpeechBalloon("白、白雪人也觉得正确。", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9072306, "oid=442573", cm.getPlayer().getId());
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.effect_NormalSpeechBalloon("修炼之后再比试看看谁才是强者！应该会很好玩吧？", 1, 0, 0, 2000, 1, 0, 300, 0, 4, 9072307, null, cm.getPlayer().getId());
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.effect_NormalSpeechBalloon("很好！变强了！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9072306, 'oid=442573', cm.getPlayer().getId());
                                                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 3685, 734);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.effect_NormalSpeechBalloon("白雪人不能输，等变强了一定要叫你咔嚓作响！", 1, 0, 1, 1500, 1, 0, 0, 0, 4, 9072306, 'oid=442573', cm.getPlayer().getId());
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                cm.effect_NormalSpeechBalloon("这里很陌生，可白雪人很勇敢，白雪人会努力修炼的！", 1, 0, 1, 3000, 1, 0, 0, 0, 4, 9072306, 'oid=442573', cm.getPlayer().getId());
                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                cm.updateInfoQuest(25980, "normal=#");
                                                                                                                                                                cm.updateInfoQuest(25980, "normal=#;hard=#");
                                                                                                                                                                cm.teachSkill(135000021, 1, 0);
                                                                                                                                                                cm.teachSkill(135003004, 1, 0);
                                                                                                                                                                cm.teachSkill(135001004, 1, 0);
                                                                                                                                                                cm.teachSkill(135001003, 1, 0);
                                                                                                                                                                cm.teachSkill(135001000, 1, 0);
                                                                                                                                                                cm.gainExp(15);
                                                                                                                                                                cm.gainExp(34);
                                                                                                                                                                cm.gainExp(57);
                                                                                                                                                                cm.gainExp(92);
                                                                                                                                                                cm.gainExp(135);
                                                                                                                                                                cm.gainExp(372);
                                                                                                                                                                cm.gainExp(560);
                                                                                                                                                                cm.gainExp(840);
                                                                                                                                                                cm.updateInfoQuest(39391, "level=1");
                                                                                                                                                                cm.gainExp(1242);
                                                                                                                                                                cm.updateInfoQuest(100562, "skinId=0");
                                                                                                                                                                cm.updateInfoQuest(100562, "itemId=0;skinId=0");
                                                                                                                                                                cm.forceStartQuest(7291, "293");
                                                                                                                                                                cm.npc_LeaveField("oid=442571");
                                                                                                                                                                cm.npc_LeaveField("oid=442572");
                                                                                                                                                                cm.npc_LeaveField('oid=442573');
                                                                                                                                                                cm.npc_LeaveField("oid=442574");
                                                                                                                                                                cm.npc_LeaveField("oid=442788");
                                                                                                                                                                cm.dispose();
                                                                                                                                                                cm.warp(100000000, 5, false);
                                                                                                                                                                cm.changeJob(13500);
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}