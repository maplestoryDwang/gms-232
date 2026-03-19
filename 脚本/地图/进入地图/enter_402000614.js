var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(34923) && cm.getQuestStatus(34924) == 0) {
    action1(f, E, e);
  } else if (cm.getQuestStatus(34924) > 0 && cm.getQuestStatus(34925) == 0) {
    cm.npc_ChangeController(3001510, "oid=144060616", 360, 76, 9, 310, 410, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=144060616", 'summon', 0, 0);
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -357, 60);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -740, 99);
        cm.npc_ChangeController(3001511, "oid=144036863", -311, 76, 1, -361, -261, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=144036863", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=144036863", 1, 400, 180);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1000, 7000, 268, 60);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 750);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=144036863", "falldown", 0, 1);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=144036863", 1, 250, 180);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这是我堆放闪闪发光东西的地方。漂亮吧？", 37, 3001511, 0, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 650, 60);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#嘻嘻，感觉像美丽的夜空，真棒。", 37, 3001511, 0, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#在所有人之中，就数我最喜欢这个。", 37, 3001511, 1, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#啊，这个……好像什么时候见过……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('2', "Effect/Direction17.img/effect/ark/noise/1366/2", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('3', "Effect/Direction17.img/effect/ark/noise/1366/3", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                      cm.fieldEffect_Hero9(0, 1000);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_Hero9(100, 300);
                                        cm.fieldEffect_PlayBGM("Bgm43.img/Unknown Part Of City", 0, 0);
                                        cm.fieldEffect_ProcessOnOffLayer('d0', "Effect/Direction17.img/effect/ark/illust/1/0", 0, 1500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('d1', "Effect/Direction17.img/effect/ark/illust/1/1", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/1", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(3100);
                                            cm.effect_Text(["#fn黑体##fs35#竟然连我们这些新兵也一起带走……"], [50, 2500, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              cm.effect_Text(["#fn黑体##fs35#西部战线好像很吃紧。"], [50, 2600, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/2", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(4150);
                                                cm.effect_Text(["#fn黑体##fs35#已经急得胡子眉毛一把抓了吗……"], [50, 3650, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/3", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(4760);
                                                  cm.effect_Text(["#fn黑体##fs35#多亏了这个，我们才能在这么短的时间内就进驻精锐基地……"], [50, 4260, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(7100);
                                                    cm.effect_Text(["#fn黑体##fs35#不管怎样……我们终于又前进了一步。"], [50, 6600, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(5600);
                                                      cm.effect_Text(["#fn黑体##fs35#等这次任务完成之后，我们就能成为真正的军人……"], [50, 5100, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/6", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                        cm.effect_Text(["#fn黑体##fs35#现在也是军人。因为我们已经宣誓为了格兰蒂斯的和平而献身。"], [50, 4500, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('d2', "Effect/Direction17.img/effect/ark/illust/1/2", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/7", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                              cm.effect_Text(["#fn黑体##fs35#准备好了。马上出发吧。"], [50, 3000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/8", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1900);
                                                                cm.effect_Text(["#fn黑体##fs35#是，准将！"], [50, 1400, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/12", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                  cm.effect_Text(["#fn黑体##fs35#那我们在基地见。"], [50, 2000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                    cm.effect_Text(["#fn黑体##fs35#请多多提点！"], [50, 1900, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/10", 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3700);
                                                                      cm.effect_Text(["#fn黑体##fs35#希望……你们在实战中好好发挥。"], [50, 3200, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('d2', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer('d1', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2600);
                                                                          cm.effect_Text(["#fn黑体##fs55#胜利属于我们！"], [50, 2100, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2900);
                                                                            cm.effect_Text(["#fn黑体##fs55#荣耀属于翼人……"], [50, 2400, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('d5', "Effect/Direction17.img/effect/ark/illust/1/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                              cm.fieldEffect_ProcessOnOffLayer('d6', "Effect/Direction17.img/effect/ark/illust/1/1", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(4300);
                                                                                cm.effect_Text(["#fn黑体##fs35#被称为是高等翼人军队模范的林波准将……"], [50, 3800, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/15', 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3600);
                                                                                  cm.effect_Text(["#fn黑体##fs35#将来我也能成为那个样子吗？"], [50, 3100, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/16", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4700);
                                                                                    cm.effect_Text(["#fn黑体##fs35#如果你能摆脱万年吊车尾的身份，也许还有一点可能。"], [50, 4200, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                                      cm.effect_Text(["#fn黑体##fs35#什么！？"], [50, 1600, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/ArkNpc/Back/B/18", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                        cm.effect_Text(["#fn黑体##fs35#噗，不早了。走吧。"], [50, 3000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('d6', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/19", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                          cm.effect_Text(["#fn黑体##fs35#啊，阿尔贝，你给我站住！"], [50, 3000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                              cm.effect_Text(["#fn黑体##fs35#好了，出发吧？"], [50, 1900, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/23", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                cm.effect_Text(["#fn黑体##fs35#目的地是西部战线高等翼人精锐基地。"], [50, 4500, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_ProcessOnOffLayer('d3', "Effect/Direction17.img/effect/ark/illust/1/3", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('d3', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('d5', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                      cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                                                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                        cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3#（高等翼人精锐基地……对了，我曾经是个军人。旁边那个男人是……）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#（那个时候攻击我的那个男人……但是在刚才的记忆中好像跟我关系很好……）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face5#（穿着相同的军服，也就是说……他和我是战友……为什么……要害我呢？）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_setForceFlip("oid=144036863", -1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#喂，你没事吧？", 37, 3001511, 0, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#啊，没什么……我们回避难处去吧。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_LeaveField("oid=144036863");
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#那天之后，又到那里去了几次，", 0);
                                                                                                                            cm.effect_Voice("Voice4.img/Ark/Mono/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#但是再也想不起来什么了。", 0);
                                                                                                                              cm.effect_Voice("Voice4.img/Ark/Mono/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#\r\n不过有一点可以确定，", 0);
                                                                                                                                cm.effect_Voice("Voice4.img/Ark/Mono/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#希望仍然存在。", 0);
                                                                                                                                  cm.effect_Voice("Voice4.img/Ark/Mono/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/4', 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#商队的人说离开这个行星的方法是……", 0);
                                                                                                                                    cm.effect_Voice("Voice4.img/Ark/Mono/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#\r\n\r\n「水晶动力源」 #fn??#―――――――――――", 0);
                                                                                                                                      cm.effect_Voice("Voice4.img/Ark/Mono/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#如果能找到那个东西的话。", 1);
                                                                                                                                        cm.effect_Voice("Voice4.img/Ark/Mono/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.updateInfoQuest(34924, "e1=2");
                                                                                                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                              } else if (status === V++) {
                                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                cm.warp(402000600, 3, false);
                                                                                                                                                cm.eventSKill(0);
                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
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