var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(34940) && cm.getQuestStatus(34944) == 0) {
    action1(f, E, e);
  } else {
    cm.Hidden_background('sand', 1, cm.isQuestFinished(34944) ? 1 : 0, 0, 0);
    cm.fieldEffect_PlayBGM("Bgm28.img/helisiumWarcry", 0, 0);
    if (cm.isQuestFinished(34936) && !cm.isQuestFinished(34937)) {
      cm.setPartner(1, 3001512, 80002398, 0);
      cm.setPartner(1, 3001513, 80002399, 0);
    }
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
      cm.Hidden_background("sand", 1, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm28.img/helisiumWarcry", 0, 0);
      cm.npc_ChangeController(3001512, "oid=144388625", -644, 350, 6, -694, -594, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144388625", "summon", 0, 0);
      cm.npc_ChangeController(3001513, "oid=144388626", -498, 350, 7, -548, -448, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144388626", "summon", 0, 0);
      cm.npc_ChangeController(3001509, "oid=144388627", -219, 350, 11, -269, -169, 0, true, 1000, false);
      cm.npc_SetSpecialAction("oid=144388627", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=144388625", "knockdown", -1, 1);
      cm.npc_SetSpecialAction("oid=144388626", "knockdown", -1, 1);
      cm.npc_SetSpecialAction("oid=144388627", "knockdown", -1, 1);
      cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
      cm.updateInfoQuest(34940, "dir=1;enter=1;exp=1");
      cm.Hidden_background('sand', 1, 1, 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -802, 208);
      cm.playVideoByScript("ark1.avi");
      cm.curNodeEventEnd(true);
      cm.updateInfoQuest(18821, "count=5;lc=10:3:2:13");
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3001530, "oid=144393550", -110, 200, 8, -160, -60, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144393550", "summon", 0, 0);
        cm.npc_ChangeController(3001531, "oid=144393551", -40, 200, 8, -90, 10, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144393551", "summon", 0, 0);
        cm.npc_ChangeController(3001530, "oid=144393552", 20, 200, 8, -30, 70, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144393552", "summon", 0, 0);
        cm.npc_ChangeController(3001531, "oid=144393553", 90, 200, 8, 40, 140, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144393553", 'summon', 0, 0);
        cm.npc_ChangeController(3001530, "oid=144393554", 150, 200, 8, 100, 200, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144393554", "summon", 0, 0);
        cm.npc_ChangeController(3001531, "oid=144393555", 210, 200, 8, 160, 260, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144393555", "summon", 0, 0);
        cm.npc_ChangeController(3001530, "oid=144393556", 270, 200, 8, 220, 320, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144393556", "summon", 0, 0);
        cm.npc_ChangeController(3001531, "oid=144393557", -1300, 200, 12, -1350, -1250, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=144393557", 'summon', 0, 0);
        cm.npc_ChangeController(3001512, "oid=144393558", -644, 350, 6, -694, -594, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=144393558", "summon", 0, 0);
        cm.npc_ChangeController(3001513, "oid=144393559", -498, 350, 7, -548, -448, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=144393559", "summon", 0, 0);
        cm.npc_ChangeController(3001509, "oid=144393560", -219, 350, 11, -269, -169, 0, true, 1000, false);
        cm.npc_SetSpecialAction("oid=144393560", "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -325, 220);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=144393558", "knockdown", -1, 1);
          cm.npc_SetSpecialAction("oid=144393559", "knockdown", -1, 1);
          cm.npc_SetSpecialAction("oid=144393560", "knockdown", -1, 1);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(3001504, "oid=144394324", -325, 200, 3, -375, -275, 1, true, 0, false);
              cm.npc_SetSpecialAction("oid=144394324", "summon", 0, 0);
              cm.npc_SetSpecialAction("oid=144394324", "appear", 1, 1);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=144394324", "stand", 1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -140, 220);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#妨碍者好像已经搞定了。你们快去夺取目标。", 37, 3001504, 0, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                          cm.effect_NormalSpeechBalloon("遵命，上校！", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 3001530, null, cm.getPlayer().getId());
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
                                  cm.npc_LeaveField("oid=144393550");
                                  cm.npc_LeaveField("oid=144393551");
                                  cm.npc_LeaveField("oid=144393552");
                                  cm.npc_LeaveField("oid=144393553");
                                  cm.npc_LeaveField("oid=144393554");
                                  cm.npc_LeaveField("oid=144393555");
                                  cm.npc_LeaveField("oid=144393556");
                                  cm.npc_LeaveField("oid=144393557");
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
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -800, 250);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, -400, 200);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#（记忆中的那个男人站在我的眼前。他是我最好的朋友，也是害我的人……）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#（稚气已经完全消失。从服装看现在应该已经成了上校。好像过了很长时间。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                  cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face8#（……但是感觉完全像变了一个人似的……好像不单是时间的流逝造成的。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                    cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/3', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -150, 250);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -420, 250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face5#为了和平而发动战争……全部都是谎言。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#那又怎样？", 37, 3001504, 1, 1);
                                                                  cm.effect_Voice("Voice4.img/ArkNpc/Now/B/5", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face8#我……不能让你过去。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                    cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#看你的样子，真是狼狈。", 37, 3001504, 1, 1);
                                                                      cm.effect_Voice("Voice4.img/ArkNpc/Now/B/7", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#那天不该让你活着的……", 37, 3001504, 0, 1);
                                                                          cm.effect_Voice("Voice4.img/ArkNpc/Now/B/8", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#……没想到你竟然从地狱中爬了出来。", 37, 3001504, 1, 1);
                                                                            cm.effect_Voice("Voice4.img/ArkNpc/Now/B/9", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#但是对现在的我来说……那种事情跟我没关系。", 37, 3001504, 1, 1);
                                                                              cm.effect_Voice("Voice4.img/ArkNpc/Now/B/10", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#让开，亚克。我跟你没什么好说的。", 37, 3001504, 1, 1);
                                                                                cm.effect_Voice("Voice4.img/ArkNpc/Now/B/11", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face5#……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                  cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/12", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#竟然因为可笑的同情心，就站到了蛮族一边……", 37, 3001504, 1, 1);
                                                                                    cm.effect_Voice("Voice4.img/ArkNpc/Now/B/13", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#不要妨碍高等翼人的使命。", 37, 3001504, 1, 1);
                                                                                      cm.effect_Voice("Voice4.img/ArkNpc/Now/B/14", 100);
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
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -400, 200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face5#使命……？", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                                  cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#……悲剧的终结。为了那一天，痛苦是必需的代价。", 37, 3001504, 1, 1);
                                                                                                    cm.effect_Voice("Voice4.img/ArkNpc/Now/B/16", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face5#戴着正义的面具，去屠杀无辜的人。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                      cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#我是为了结束这场混乱……", 37, 3001504, 1, 1);
                                                                                                        cm.effect_Voice("Voice4.img/ArkNpc/Now/B/18", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face5#……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                          cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/19", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -550, 230);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face8#那只是你的傲慢。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                                                cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face5#悲剧的终结……那一天到底什么时候会到来呢？一年，十年……还是一百年之后？", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                                  cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/21", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -550, 250);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face5#在此期间你打算付出多少牺牲呢？", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                                                        cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/22", 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face5#……为了永远都不会到来的明天。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                                          cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/23', 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face5#我决定站在为了生存而挣扎的人一边。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                                            cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/24', 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 500, -550, 270);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face8#就在此时此地。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                                                                  cm.effect_Voice("Voice4.img/Ark/Now/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/25', 100);
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
                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                          cm.eventSKill(0);
                                                                                                                                          cm.dispose();
                                                                                                                                          cm.openNpc("影魂异人_阻击阿尔贝");
                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                          cm.playerMessage(5, "必须阻止指挥官阿尔贝。");
                                                                                                                                          cm.npc_LeaveField("oid=144388625");
                                                                                                                                          cm.npc_LeaveField("oid=144388626");
                                                                                                                                          cm.npc_LeaveField("oid=144388627");
                                                                                                                                          cm.npc_LeaveField("oid=144393558");
                                                                                                                                          cm.npc_LeaveField("oid=144393559");
                                                                                                                                          cm.npc_LeaveField("oid=144393560");
                                                                                                                                          cm.npc_LeaveField("oid=144394324");
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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