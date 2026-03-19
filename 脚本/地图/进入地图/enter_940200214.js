var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      cm.forceCompleteQuest(34477);
      cm.forceStartQuest(34479, '');
      cm.forceStartQuest(34489, '');
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003350, "oid=1901659", -95, 25, 11, -145, -45, 0, true, false);
      cm.npc_SetSpecialAction("oid=1901659", "summon", 0, 0);
      cm.npc_ChangeController(3003373, "oid=1901660", 312, 25, 3, 262, 362, 0, false, false);
      cm.npc_SetSpecialAction("oid=1901660", "summon", 0, 0);
      cm.npc_setForceFlip("oid=1901660", -1);
      cm.npc_SetSpecialAction("oid=1901660", "down", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 312, -100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 312, 25);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
              cm.npc_SetForceMove("oid=1901659", 1, 120, 120);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face7#啊，那个邪恶的巨大精灵消失的地方……有谁倒在了那里……是谁？", 37, 3003301, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 312, 180);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#就算听不见也看不见，还是能感受到的吧~额，某些东西~？", 37, 3003302, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3003351, "oid=1901662", 700, 25, 21, 650, 750, 0, true, false);
                        cm.npc_SetSpecialAction("oid=1901662", 'summon', 0, 0);
                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 700, 25);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=1901662");
                                  cm.npc_SetSpecialAction("oid=1901662", "wind2", 2200, 0);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                  cm.npc_setForceFlip("oid=1901662", -1);
                                  cm.npc_SetForceMove("oid=1901662", -1, 140, 180);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 312, 25);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 312, 180);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#友情、爱情、温暖的心意~", 37, 3003302, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#风精灵！", 37, 3003301, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#光是看眼神就能明白~", 37, 3003302, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#额……", 37, 3003373, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b(啊，眼前的这个可疑的精灵正痛苦无比。)#k", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b(它那蠢蠢欲动的记忆在脑中划过……那是一段揪心的记忆……)#k", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 5000, 3000, 312, 180);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.forceCompleteQuest(34479);
                                                            cm.forceCompleteQuest(34489);
                                                            cm.forceStartQuest(34487, '');
                                                            cm.npc_LeaveField("oid=1901659");
                                                            cm.setNpcSpecialActionReset("oid=1901660");
                                                            cm.npc_LeaveField("oid=1901662");
                                                            cm.inGameDirectionEvent_SetHideEffect(1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 312, -100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/lightup", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue("我是害羞鬼，没有人陪我玩。", 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("有一天我在这颗巨大的树中睁开了眼，也许是因为这个原因，", 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue("我就再也无法离开这颗巨大的树的附近了。", 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue("我所做的事情……", 0);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("不过是数数天上的云彩，看看叶子的形状。", 0);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("不过不久前我也交到了朋友，", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("不过也许只是我自己觉得那是朋友吧……", 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 312, 25);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                        cm.effect_Text(["#fn黑体##fs18#幸福的某一天，#fs15##fn黑体#精灵之树的记忆"], [50, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#嘻嘻嘻~松林之风~微风~西风~这些都是我喜欢的~", 37, 3003302, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#不过要说我最喜欢的~那便是咚咚树~咚咚~咚↗咚↘咚→", 37, 3003302, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face1#咚咚树？嘿嘿，真奇怪！那是什么鬼！", 37, 3003301, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#额，我最喜欢在这颗树上打滚了！", 37, 3003314, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#啊，他们来了！额啊啊，赶紧藏起来！", 37, 3003373, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=1901660", 1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=1901660", -1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=1901660", 1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_setForceFlip("oid=1901660", -1);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetSpecialAction("oid=1901660", "bye", 600, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_LeaveField("oid=1901660");
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#哎哟……", 37, 3003373, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction19.img/effect/arcana_play/0", 0, 1000, 0, -80, 12, 4, 1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction19.img/effect/arcana_play/4", 0, 1000, 0, -80, 12, 4, 1);
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction19.img/effect/arcana_play/2", 0, 1000, 0, -80, 12, 4, 1);
                                                                                                                        cm.sendNormalTalk_Bottom("#face3#嘻嘻嘻，好开心啊！", 37, 3003301, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction19.img/effect/arcana_play/3", 0, 1000, 0, -80, 12, 4, 1);
                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction19.img/effect/arcana_play/1", 0, 1000, 0, -80, 12, 4, 1);
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#嗯，心里暖暖的！实在是太幸福啦！", 37, 3003314, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……。", 37, 3003373, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#哎哟，走了吗？应该走了吧？估计是走了吧。", 37, 3003373, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#实在是太不好意思了，每次都这么逃走，要不明天试试去搭个讪？", 37, 3003373, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#不了，我觉得现在就已经足够开心了，我喜欢那些可爱的精灵叽叽喳喳，就像现在这样……", 37, 3003373, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.forceStartQuest(34479, '');
                                                                                                                                        cm.forceStartQuest(34489, '');
                                                                                                                                        cm.forceCompleteQuest(34487);
                                                                                                                                        cm.npc_ChangeController(3003350, "oid=1901801", -95, 25, 11, -145, -45, 0, true, false);
                                                                                                                                        cm.npc_SetSpecialAction("oid=1901801", "summon", 0, 0);
                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.effect_Text(["#fn黑体##fs18#悲伤的一天，#fs15##fn黑体#精灵之树的记忆"], [50, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                                                                                                              cm.npc_SetForceMove("oid=1901801", 1, 120, 120);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_SetSpecialAction("oid=1901801", "cry", -1, 0);
                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#呜呜，精灵之树，到底是怎么回事？怎么突然干枯成这样了？", 37, 3003301, false, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face7#实在是太可怕了，整个森林都变了，那些残暴的精灵不断出现……呜呜……呜呜……", 37, 3003301, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##b(啊，邪恶的气息源源不断地生了出来，现在我也有点力不从心了……该如何是好……)#k", 37, 3003324, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##b(就算再怎么想要净化也无济于事……这么说来……)#k", 37, 3003324, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.npc_LeaveField("oid=1901801");
                                                                                                                                                            cm.npc_ChangeController(3003350, "oid=1901848", 5, 25, 9, -45, 55, 0, true, false);
                                                                                                                                                            cm.npc_SetSpecialAction("oid=1901848", 'summon', 0, 0);
                                                                                                                                                            cm.npc_ChangeController(3003373, "oid=1901849", 312, 25, 3, 262, 362, 0, false, false);
                                                                                                                                                            cm.npc_SetSpecialAction("oid=1901849", "summon", 0, 0);
                                                                                                                                                            cm.npc_ChangeController(3003351, "oid=1901850", 495, 25, 6, 445, 545, 1, true, false);
                                                                                                                                                            cm.npc_SetSpecialAction("oid=1901850", "summon", 0, 0);
                                                                                                                                                            cm.npc_setForceFlip("oid=1901849", -1);
                                                                                                                                                            cm.npc_SetSpecialAction("oid=1901849", "down", -1, 0);
                                                                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction19.img/effect/arcana_hug/0", 0, 900, 0, -80, 9, 4, 1);
                                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction19.img/effect/arcana_hug/3", 0, 900, 0, -80, 12, 4, 1);
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1##b(就得将邪恶气息封印起来……要不然大家都会有危险的……)#k", 37, 3003324, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1##b(不用太担心，小不点精灵，我会以一己之力承担所有的邪恶气息的。)#k", 37, 3003324, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction19.img/effect/arcana_hug/1", 0, 900, 0, -80, 10, 4, 1);
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction19.img/effect/arcana_hug/2", 0, 900, 0, -80, 11, 4, 1);
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction19.img/effect/arcana_hug/4", 0, 900, 0, -80, 12, 4, 1);
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1##b(……看来得道别了，我一直想要跟你们说上话来着……)#k", 37, 3003324, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1##b(真希望大家能就此幸福下去，希望能再次听到你们叽叽喳喳的声音。)#k", 37, 3003324, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction19.img/effect/arcana_hug/5", 0, 900, 0, -80, 13, 4, 1);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1680);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('05', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#保重，我的朋友。", 37, 3003324, false, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 1400, 1000, 312, 180);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face1#我好像知道它是谁了，我们是朋友，而且已经很多年了……", 37, 3003301, false, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 1700, 1000, 312, 180);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#不管是在幸福的日子里，还是跌倒哭泣的日子里，都会陪在我身边。", 37, 3003301, false, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.npc_SetForceMove("oid=1901848", 1, 170, 120);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.npc_SetSpecialAction("oid=1901848", "cry", -1, 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 312, 180);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face4#原来你就是精灵之树啊！", 37, 3003301, false, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                cm.warp(940200215, 0);
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