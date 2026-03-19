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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(5500);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs18#第二天。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(3004430, "oid=63500488", 28, 35, 100, -22, 78, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500488", 'summon', 0, 0);
        cm.npc_ChangeController(3004431, "oid=63500489", 450, 35, 106, 400, 500, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500489", 'summon', 0, 0);
        cm.npc_ChangeController(3004433, "oid=63500490", 410, -9, 75, 360, 460, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500490", "summon", 0, 0);
        cm.npc_ChangeController(3004441, "oid=63500491", -30, 5, 71, -80, 20, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500491", "summon", 0, 0);
        cm.npc_ChangeController(3004442, "oid=63500492", -190, -70, 11, -240, -140, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500492", 'summon', 0, 0);
        cm.npc_ChangeController(3004443, "oid=63500493", -146, -36, 42, -196, -96, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500493", "summon", 0, 0);
        cm.npc_ChangeController(3004444, "oid=63500494", -210, 82, 152, -260, -160, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500494", 'summon', 0, 0);
        cm.npc_ChangeController(3004445, "oid=63500495", -157, 49, 120, -207, -107, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500495", 'summon', 0, 0);
        cm.npc_ChangeController(3004436, "oid=63500496", 540, -20, 77, 490, 590, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500496", "summon", 0, 0);
        cm.npc_ChangeController(3004435, "oid=63500497", 580, 40, 130, 530, 630, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500497", "summon", 0, 0);
        cm.npc_ChangeController(3004470, "oid=63500498", -298, 19, 94, -348, -248, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500498", "summon", 0, 0);
        cm.npc_ChangeController(3004471, "oid=63500499", -354, 44, 122, -404, -304, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500499", "summon", 0, 0);
        cm.npc_ChangeController(3004472, "oid=63500500", -243, -2, 70, -293, -193, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500500", "summon", 0, 0);
        cm.npc_ChangeController(3004473, "oid=63500501", -520, 30, 92, -570, -470, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500501", 'summon', 0, 0);
        cm.npc_ChangeController(3004474, "oid=63500502", -316, -36, 39, -366, -266, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500502", 'summon', 0, 0);
        cm.npc_ChangeController(3004475, "oid=63500503", -475, -36, 41, -525, -425, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500503", "summon", 0, 0);
        cm.npc_ChangeController(3004476, "oid=63500504", -426, 50, 119, -476, -376, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500504", 'summon', 0, 0);
        cm.npc_ChangeController(3004477, "oid=63500505", -370, -8, 67, -420, -320, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500505", "summon", 0, 0);
        cm.npc_ChangeController(3004478, "oid=63500506", -320, 77, 150, -370, -270, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500506", "summon", 0, 0);
        cm.npc_ChangeController(3004479, "oid=63500507", -420, -3, 65, -470, -370, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500507", 'summon', 0, 0);
        cm.npc_ChangeController(3004480, "oid=63500508", -490, 82, 146, -540, -440, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=63500508", 'summon', 0, 0);
        cm.npc_ChangeController(3004439, "oid=63500509", 135, -30, 37, 85, 185, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500509", 'summon', 0, 0);
        cm.npc_ChangeController(3004439, "oid=63500510", 190, 30, 107, 140, 240, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500510", 'summon', 0, 0);
        cm.npc_ChangeController(3004439, "oid=63500511", 137, 73, 156, 87, 187, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500511", "summon", 0, 0);
        cm.npc_ChangeController(3004439, "oid=63500512", -616, -55, 2, -666, -566, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500512", "summon", 0, 0);
        cm.npc_ChangeController(3004439, "oid=63500513", -670, 30, 88, -720, -620, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500513", "summon", 0, 0);
        cm.npc_ChangeController(3004439, "oid=63500514", -635, 90, 145, -685, -585, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63500514", 'summon', 0, 0);
        cm.npcMove(3004436, 0, -10, 0);
        cm.npcMove(3004433, 0, -10, 0);
        cm.npcMove(3004430, 0, 5, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 500, 40);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -360, 10);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#说是重要的话要讲，出什么事了？", 37, 3004474, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#安静听着吧。", 37, 3004472, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -95, 10);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#各位市民请注意，我们迎来了一个好消息。", 37, 3004441, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我们苦苦寻找的“那个人”终于现身了。", 37, 3004441, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你在说谁？", 37, 3004442, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#高洁之人，寻回失落的光辉，得到太阳神庇护之人……", 37, 3004441, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#也就是，将要拯救塞尔提乌的#b天选之人#k。", 37, 3004441, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#时隔数百年，终于……可以寻回圣剑之光了。", 37, 3004441, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#哦哦，翼人军也撤走了吗？", 37, 3004475, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/shouting", 100);
                                    cm.sendNormalTalk_Bottom("#face0#让圣剑恢复光芒，那么黎明之神尼罗塔……", 37, 3004442, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#这么说，火焰之神斯皮萨也有可能回归！", 37, 3004444, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
                                          cm.sendNormalTalk_Bottom("#face0#但是也有一个坏消息。", 37, 3004441, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#天选之人，#r奇勒摩阁下#k……", 37, 3004441, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#将谨遵主神密特拉的教诲。", 37, 3004441, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#也就是说，他不会允许圣地内存在#r任何一名异教徒#k。", 37, 3004441, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#这是……什么意思？", 37, 3004442, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#因此，惜命之人最好在太阳降临之前，离开圣地。", 37, 3004441, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#你不是在骗我们吧？要把其他教团都赶走？", 37, 3004474, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#胡说什么！", 37, 3004444, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#为了守护圣地，我们和你们一起浴血奋战，你就是这么报答我们的吗？！", 37, 3004444, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.onSetNpcScript("oid=63500509", 1, ["special", "special6"], [1, -1]);
                                                                  cm.onSetNpcScript("oid=63500510", 1, ["special", 'special6'], [1, -1]);
                                                                  cm.onSetNpcScript("oid=63500511", 1, ["special", "special6"], [1, -1]);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63500492"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63500494"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63500493"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63500495"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#此事与天选之人有关。不许有任何异议。", 37, 3004441, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我要说的就是这些。", 37, 3004441, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#愿太阳庇护所有人。", 37, 3004441, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=63500491", 1, 200, 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/armorSound", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.Npc_Fadeout("oid=63500491", 0, 500);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#密特拉教团彻底疯了啊！！", 37, 3004472, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#驱逐？他们要驱逐这么多人？！", 37, 3004473, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#你要去哪！还不快回来给我说清楚！！", 37, 3004444, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=63500488", 1, 250, 100);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 1500, 2500, 480, 10);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63500488"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face2#……", 37, 3004431, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("塞伦，你说要把剑交给他，是认真的吗？", 57, 0, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#很抱歉。我不过是照教团的命令行事罢了。", 37, 3004430, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#如果那家伙得到圣剑，可想而知剑尖会指向何方。", 37, 3004433, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face1#你难道忘了吗，为了维护圣地的和平，我们迄今为止付出了多少努力？", 37, 3004433, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#天选之人的意志，便是太阳的意志。", 37, 3004430, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#如果排挤异教徒是主神密特拉的旨意……\r\n那我只能接受。", 37, 3004430, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom('#face0#……', 37, 3004430, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#很抱歉。\r\n我们之中既没有圣剑之主，也没能受到太阳神之庇护，这样是无法对抗#r暗红的阴霾#k的。", 37, 3004430, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face3#如果等到#r暗红的阴霾#k笼罩圣地全境。那时说什么都晚了。", 37, 3004430, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我们有#h0#在。\r\n就算不把剑交给" + (cm.getPlayer().getGender() == 0 ? "他，他" : "她，她") + "也能像现在这样抵挡翼人军的攻击。", 37, 3004436, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#对抗者大人……的确是一位值得信赖的强者。\r\n但是如果要面对的是#r闪电使徒#k……", 37, 3004430, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#那家伙就连名讳都不可轻易提及。", 37, 3004430, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#非要说的话，那存在……无异于是灾难的本源。", 37, 3004430, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#灾难……？", 37, 3004436, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#以防万一，我先问一句……", 37, 3004435, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#你亲手触碰过圣剑吗？", 37, 3004435, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#无可奉告。", 37, 3004430, false, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#好，我明白你的意思了。", 37, 3004431, false, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我竟然相信了你这种人，真为自己感到羞愧。", 37, 3004431, false, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#王子殿下，我以派遣部队指挥官的身份，正式与您交涉。", 37, 3004431, false, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#从现在起，我们将正式废除冒险岛联盟与塞尔提乌王国之间的#r同盟关系#k。", 37, 3004431, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63500497"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63500490"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63500496"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.npc_setForceFlip("oid=63500490", 1);
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face2#伊、伊黛娜大人，等一下……", 37, 3004433, false, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#王子殿下也知道吧。\r\n对我来说，保护联盟成员先于保护塞尔提乌。", 37, 3004431, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#如果那个叫#r奇勒摩#k的人拿到圣剑，我们的联盟成员就有性命危险了。", 37, 3004431, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#该不会有人要无耻到让我们冒着这么大的风险留下来吧？", 37, 3004431, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom('#face1#……', 37, 3004433, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#全员做好撤离准备。", 37, 3004431, false, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#还有塞伦，最后送你一句话吧。", 37, 3004431, false, true);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#直到现在为止，我们都还有一丝机会。", 37, 3004431, false, true);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#是你自己放弃了它。", 37, 3004431, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                    cm.eventSKill(0);
                                                                                                                                                                                                    cm.updateInfoQuest(39900, "00=h0;10=h0;11=h1;04=h0;05=h0;23=h0;06=h0;25=h0;07=h0;55=h0");
                                                                                                                                                                                                    cm.setStringForQuestInfo(39900, '12', 'h1');
                                                                                                                                                                                                    cm.forceCompleteQuest(39913);
                                                                                                                                                                                                    cm.warp(410000500, 0, false);
                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                                                                                                    cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500488");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500488");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500489");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500489");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500490");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500490");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500491");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500491");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500492");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500492");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500493");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500493");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500494");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500494");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500495");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500495");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500496");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500496");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500497");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500497");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500498");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500498");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500499");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500499");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500500");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500500");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500501");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500501");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500502");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500502");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500503");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500503");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500504");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500504");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500505");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500505");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500506");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500506");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500507");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500507");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500508");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500508");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500509");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500509");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500510");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500510");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500511");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500511");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500512");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500512");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500513");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500513");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500514");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=63500514");
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