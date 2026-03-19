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
      cm.npc_ChangeController(3001680, "oid=375350", 265, 135, 1, 215, 315, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375351", 339, 135, 1, 289, 389, 1, false, 0, false);
      cm.npc_ChangeController(3001681, 'oid=375352', 465, 135, 1, 415, 515, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375353", 518, 61, 5, 468, 568, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375354", 582, 61, 5, 532, 632, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375355", 660, 61, 5, 610, 710, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375356", -639, 61, 2, -689, -589, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375357", -572, 61, 2, -622, -522, 0, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375358", -512, 61, 2, -562, -462, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375359", -348, 35, 3, -398, -298, 0, false, 0, false);
      cm.npc_ChangeController(3001685, "oid=375360", -92, 35, 3, -142, -42, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375361", 363, 35, 3, 313, 413, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375362", -276, 35, 3, -326, -226, 0, false, 0, false);
      cm.npc_ChangeController(3001680, 'oid=375363', 289, 35, 3, 239, 339, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.Hidden_background('ball', 1, 0, 0, 0);
      cm.Hidden_background('ball0', 1, 0, 0, 0);
      cm.npc_ChangeController(3001665, "oid=3006654", 65, 23, 3, 15, 115, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3006654", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -329, 145);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#face2#难怪我觉得气息诡异，才跑来看了看，\r\n结果这里已经彻底被你当成游乐场了啊？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
            cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/1', 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;32=h0;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;80=h2;35=h0;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h1");
                  cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;32=h0;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;80=h2;35=h0;81=h2;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h1");
                  cm.sendNormalTalk_Bottom("#face0#啊，不是！？", 37, 3001661, false, true);
                  cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -6, 92);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#……虎影？", 37, 3001653, false, true);
                        cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/3', 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#俊秀法师……不，准确来说应该叫你鼠精才对吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                          cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#这野猫……可还有一只呢。", 37, 3001665, true, true);
                            cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face11#我不是猫，虽然我属猫科，但……那什么，怎样都好，\r\n还是简单地说重点吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                              cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face12#说起我是谁吧，我可是个相当出色的解决师，\r\n虽说也会帮村里解决一些杂务，不过要论打怪，那可是行家。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face10#身为解决师，我会击败你的，\r\n乖乖化为魂魄吧，你就是之前在饕餮肚子里的家伙吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                  cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/8', 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#啊……我不知道你在胡说什么，不过有一点倒是可以肯定，\r\n你会妨碍到我们的计划。", 37, 3001665, true, true);
                                    cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#因此……便要处决。", 37, 3001665, true, true);
                                      cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/10", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face11#这是要上咯？乐意奉陪。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                        cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/11", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#呀！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                            cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=3006654");
                                                  cm.npc_LeaveField("oid=3006654");
                                                  cm.npc_ChangeController(3001665, "oid=3007061", 0, 23, 3, -50, 50, 0, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=3007061", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 190, 75);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 190, -193);
                                                        cm.inGameDirectionEvent_OneTimeAction(5, 500);
                                                        cm.sendNormalTalk_Bottom("#face2#啪！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                        cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_OneTimeAction(4, 15000);
                                                            cm.sendNormalTalk_Bottom("#face2#简直徒劳……", 37, 3001665, false, true);
                                                            cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/14", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2500, 1000, 0, 75);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=3007061", 'attack2', 1500, 0);
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
                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 190, 75);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/HoyoungEffect/12"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                              cm.inGameDirectionEvent_OneTimeAction(4, 15000);
                                                                              cm.emotion(1, 15000);
                                                                              cm.sendNormalTalk_Bottom("#face7#诶？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                              cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/15", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/HoyoungEffect/13"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.onSetBackEffect("ball0", 1, 257, 0, 0);
                                                                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -40);
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
                                                                                          cm.userSetFieldFloating(993160111, 10, 10, 10);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.userSetFieldFloating(993160111, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#呵！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                              cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#哈！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/17', 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face4#……并不动嘛！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;32=h0;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;80=h1;35=h0;81=h2;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h1");
                                                                                                      cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;32=h0;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;80=h1;35=h0;81=h1;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h1");
                                                                                                      cm.setNpcSpecialActionReset("oid=3007061");
                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/M_orb_start", 100);
                                                                                                      cm.npc_SetSpecialAction("oid=3007061", "attack1", 1000, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/M_orb", 100);
                                                                                                        cm.onSetBackEffect("ball", 1, 257, 0, 0);
                                                                                                        cm.onSetMapTagedObjectVisible(1, 'ball', 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.Hidden_background('ball0', 1, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.Hidden_background("ball", 1, 0, 0, 0);
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
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -6, 92);
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
                                                                                                                          cm.npc_setForceFlip("oid=3007061", -1);
                                                                                                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), -352, 40);
                                                                                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                          cm.emotion(5, 2000);
                                                                                                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_OneTimeAction(25, 999999);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#现在明白了吗？这就是力量的差距。", 37, 3001665, false, true);
                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face1#力量的大小就是野心的大小，我野心勃勃，可不是你这种对小村庄\r\n恋恋不忘的小角色能比的，不仅如此我还有可靠的援军。", 37, 3001665, true, true);
                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#呵呵……", 37, 3001661, true, true);
                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/21', 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#怎么样……你有什么？", 37, 3001665, true, true);
                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/22', 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#没想到变得这么厉害……这谁能想到啊……\r\n你打算怎么办，小老虎……", 37, 3001651, true, true);
                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（哼……先静静，山人自有妙计。）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/24', 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -6, 92);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face11#呵……现在总算有点干劲了。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/25", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#什么！？", 37, 3001665, true, true);
                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/26", 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face10#你该不会以为我的实力就只有如此吧？怎么可能，\r\n我连十分之一的实力都没展示出来呢。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/27', 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#你想起……什么来了？", 37, 3001653, false, true);
                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/28", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face9#你要是够自信，就再上一次试试……不对，在此之前，\r\n给我点时间让我换个姿势，这可是对对战对象的礼貌。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/29", 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#……很好。", 37, 3001665, false, true);
                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/30', 100);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face12#哎哟哟……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/31", 100);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -329, 145);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_OneTimeAction(2, 999999);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face11#那这就过去看看吧，来……上吧，我的珍藏技艺！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/32', 100);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.fieldEffect_Hero9(0, 2000);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2250, 500, -329, 155);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#……咕嘟。", 37, 3001651, false, true);
                                                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/33", 100);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2500, 500, -329, 165);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……咕嘟。", 37, 3001661, false, true);
                                                                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/34", 100);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2750, 500, -329, 175);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#……咕嘟。", 37, 3001653, false, true);
                                                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/35", 100);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_OneTimeAction(563, 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                  cm.fieldEffect_Hero9(100, 500);
                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face5#……三十六计走为上计！！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/36", 100);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.fieldEffect_PlayBGM("Bgm43.img/Dancing With Ghosts", 0, 0);
                                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/36", 100);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#是逃跑！？", 37, 3001653, false, true);
                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/37", 100);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#这个杀千刀的家伙！？", 37, 3001651, true, true);
                                                                                                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/38", 100);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4#谁能想到竟会做出这般卑鄙之事……", 37, 3001665, true, true);
                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/39", 100);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#快，快抓住他！", 37, 3001661, true, true);
                                                                                                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/40", 100);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#不要放过那个家伙！", 37, 3001661, true, true);
                                                                                                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/41', 100);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face6#哈哈！谁会被抓住啊！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/J/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/42", 100);
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
                                                                                                                                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                                                                          } else if (status === V++) {
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=3007061");
                                                                                                                                                                                                                            cm.npc_LeaveField("oid=3007061");
                                                                                                                                                                                                                            cm.dispose();
                                                                                                                                                                                                                            cm.warp(993160112, 0, false);
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}