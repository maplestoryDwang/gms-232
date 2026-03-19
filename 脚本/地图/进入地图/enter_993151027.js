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
      cm.npc_ChangeController(3004433, "oid=63694952", -400, 17, 136, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694952", "summon", 0, 0);
      cm.npc_ChangeController(3004435, "oid=63694953", -231, -42, 74, -281, -181, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694953", "summon", 0, 0);
      cm.npc_ChangeController(3004436, "oid=63694954", -271, 55, 168, -321, -221, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694954", "summon", 0, 0);
      cm.npc_ChangeController(3004438, "oid=63694955", -494, 80, 200, -544, -444, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694955", "summon", 0, 0);
      cm.npc_ChangeController(3004438, "oid=63694956", -550, 60, 169, -600, -500, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694956", "summon", 0, 0);
      cm.npc_ChangeController(3004438, "oid=63694957", -535, 30, 19, -585, -485, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694957", "summon", 0, 0);
      cm.npc_ChangeController(3004438, "oid=63694958", -480, -30, 71, -530, -430, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694958", 'summon', 0, 0);
      cm.npc_ChangeController(3004438, "oid=63694959", -450, -60, 38, -500, -400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694959", "summon", 0, 0);
      cm.npc_ChangeController(3003661, "oid=63694960", -600, -43, 70, -650, -550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694960", 'summon', 0, 0);
      cm.npc_ChangeController(3003661, "oid=63694961", -620, 21, 128, -670, -570, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694961", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -200, -21);
      cm.npc_SetSpecialAction("oid=63694955", 'special4', -1, 1);
      cm.npc_SetSpecialAction("oid=63694956", 'special3', -1, 1);
      cm.npc_SetSpecialAction("oid=63694957", "special3", -1, 1);
      cm.npc_SetSpecialAction("oid=63694958", "special4", -1, 1);
      cm.npc_SetSpecialAction("oid=63694959", "special3", -1, 1);
      cm.npc_ChangeController(3004440, "oid=63694962", -950, 60, 163, -1000, -900, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694962", "summon", 0, 0);
      cm.npc_ChangeController(3004440, "oid=63694963", -910, 30, 24, -960, -860, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694963", 'summon', 0, 0);
      cm.npc_ChangeController(3004440, "oid=63694964", -860, -30, 67, -910, -810, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694964", 'summon', 0, 0);
      cm.npc_ChangeController(3004440, "oid=63694965", -810, -60, 34, -860, -760, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694965", "summon", 0, 0);
      cm.npc_ChangeController(3004440, "oid=63694966", -850, 60, 164, -900, -800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694966", "summon", 0, 0);
      cm.npc_ChangeController(3004440, "oid=63694967", -810, 30, 130, -860, -760, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694967", "summon", 0, 0);
      cm.npc_ChangeController(3004440, "oid=63694968", -760, -30, 69, -810, -710, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694968", 'summon', 0, 0);
      cm.npc_ChangeController(3004440, "oid=63694969", -710, -60, 33, -760, -660, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63694969", "summon", 0, 0);
      cm.Npc_Fadeout("oid=63694962", 0, 0);
      cm.Npc_Fadeout("oid=63694963", 0, 0);
      cm.Npc_Fadeout("oid=63694964", 0, 0);
      cm.Npc_Fadeout("oid=63694965", 0, 0);
      cm.Npc_Fadeout("oid=63694966", 0, 0);
      cm.Npc_Fadeout("oid=63694967", 0, 0);
      cm.Npc_Fadeout("oid=63694968", 0, 0);
      cm.Npc_Fadeout("oid=63694969", 0, 0);
      cm.npc_SetSpecialAction("oid=63694962", "special3", -1, 1);
      cm.npc_SetSpecialAction("oid=63694963", "special3", -1, 1);
      cm.npc_SetSpecialAction("oid=63694964", "special3", -1, 1);
      cm.npc_SetSpecialAction("oid=63694965", "special3", -1, 1);
      cm.npc_SetSpecialAction("oid=63694966", "special3", -1, 1);
      cm.npc_SetSpecialAction("oid=63694967", "special3", -1, 1);
      cm.npc_SetSpecialAction("oid=63694968", "special3", -1, 1);
      cm.npc_SetSpecialAction("oid=63694969", "special3", -1, 1);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.monadForceMove("cernium_sky_e", 1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -58, -840);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3004465, "oid=63695100", 250, 80, 204, 200, 300, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695100", 'summon', 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695102", 200, 60, 176, 150, 250, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695102", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695104", 150, 30, 12, 100, 200, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695104", 'summon', 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695105", 100, -30, 79, 50, 150, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695105", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695106", 50, -60, 45, 0, 100, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695106", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695107", 350, 80, 210, 300, 400, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695107", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695108", 300, 60, 175, 250, 350, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695108", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695109", 250, 30, 13, 200, 300, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695109", 'summon', 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695110", 200, -30, 78, 150, 250, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695110", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695111", 150, -60, 44, 100, 200, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695111", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695112", 550, 80, 214, 500, 600, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695112", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695113", 500, 60, 179, 450, 550, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695113", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695114", 450, 30, 10, 400, 500, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695114", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695115", 400, -30, 84, 350, 450, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695115", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695116", 350, -60, 50, 300, 400, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695116", 'summon', 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695117", 650, 80, 213, 600, 700, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695117", 'summon', 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695118", 600, 60, 180, 550, 650, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695118", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695119", 550, 30, 148, 500, 600, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695119", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695120", 500, -30, 83, 450, 550, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695120", "summon", 0, 0);
          cm.npc_ChangeController(3004465, "oid=63695121", 450, -60, 52, 400, 500, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=63695121", "summon", 0, 0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#圣剑的主人……终于出现了吗！", 37, 3004444, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#太阳没有抛弃我们……", 37, 3004437, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1000, 7000, -58, -100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(8500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -58, -100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#闪电停下来了。也就是说，那家伙没功夫管这边了。", 37, 3004433, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#不能错过这个机会。", 37, 3004433, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#但是敌军依旧源源不断地涌来，而我们没有足够的人手应战。", 37, 3004437, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#我们也会战斗的。", 37, 3004441, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#大神官？", 37, 3004433, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=63694952", -1);
                                      cm.npc_ChangeController(3004441, "oid=63698464", -950, 0, 98, -1000, -900, 0, true, 0, false);
                                      cm.npc_SetSpecialAction("oid=63698464", 'summon', 0, 0);
                                      cm.npcMove(3004441, 0, -7, 0);
                                      cm.npc_SetForceMove("oid=63698464", 1, 200, 100);
                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, -512, -100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(3004439, "oid=63698467", -1200, 60, 161, -1250, -1150, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=63698467", "summon", 0, 0);
                                          cm.npc_ChangeController(3004439, "oid=63698468", -1160, 30, 133, -1210, -1110, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=63698468", "summon", 0, 0);
                                          cm.npc_ChangeController(3004439, "oid=63698469", -1110, -30, 64, -1160, -1060, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=63698469", "summon", 0, 0);
                                          cm.npc_ChangeController(3004439, "oid=63698470", -1060, -60, 30, -1110, -1010, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=63698470", "summon", 0, 0);
                                          cm.npc_ChangeController(3004439, "oid=63698471", -1100, 60, 160, -1150, -1050, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=63698471", "summon", 0, 0);
                                          cm.npc_ChangeController(3004439, "oid=63698472", -1060, 30, 25, -1110, -1010, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=63698472", 'summon', 0, 0);
                                          cm.npc_ChangeController(3004439, "oid=63698473", -1010, -30, 66, -1060, -960, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=63698473", "summon", 0, 0);
                                          cm.npc_ChangeController(3004439, "oid=63698474", -960, -60, 31, -1010, -910, 0, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=63698474", 'summon', 0, 0);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/armorSound", 100);
                                          cm.npc_SetForceMove("oid=63698467", 1, 200, 100);
                                          cm.npc_SetForceMove("oid=63698468", 1, 200, 100);
                                          cm.npc_SetForceMove("oid=63698469", 1, 200, 100);
                                          cm.npc_SetForceMove("oid=63698470", 1, 200, 100);
                                          cm.npc_SetForceMove("oid=63698471", 1, 200, 100);
                                          cm.npc_SetForceMove("oid=63698472", 1, 200, 100);
                                          cm.npc_SetForceMove("oid=63698473", 1, 200, 100);
                                          cm.npc_SetForceMove("oid=63698474", 1, 200, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                                        } else {
                                          if (status === V++) {
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.npc_LeaveField("oid=63698467");
                                            cm.npc_LeaveField("oid=63698467");
                                            cm.npc_LeaveField("oid=63698468");
                                            cm.npc_LeaveField("oid=63698468");
                                            cm.npc_LeaveField("oid=63698469");
                                            cm.npc_LeaveField("oid=63698469");
                                            cm.npc_LeaveField("oid=63698470");
                                            cm.npc_LeaveField("oid=63698470");
                                            cm.npc_LeaveField("oid=63698471");
                                            cm.npc_LeaveField("oid=63698471");
                                            cm.npc_LeaveField("oid=63698472");
                                            cm.npc_LeaveField("oid=63698472");
                                            cm.npc_LeaveField("oid=63698473");
                                            cm.npc_LeaveField("oid=63698473");
                                            cm.npc_LeaveField("oid=63698474");
                                            cm.npc_LeaveField("oid=63698474");
                                            cm.Npc_Fadeout("oid=63694962", 255, 0);
                                            cm.Npc_Fadeout("oid=63694963", 255, 0);
                                            cm.Npc_Fadeout("oid=63694964", 255, 0);
                                            cm.Npc_Fadeout("oid=63694965", 255, 0);
                                            cm.Npc_Fadeout("oid=63694966", 255, 0);
                                            cm.Npc_Fadeout("oid=63694967", 255, 0);
                                            cm.Npc_Fadeout("oid=63694968", 255, 0);
                                            cm.Npc_Fadeout("oid=63694969", 255, 0);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -547, -10);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(500);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#光明与我们同在。\r\n我们已经无所畏惧。", 37, 3004441, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#很好。", 37, 3004433, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=63694952", 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#全员听令，举剑！！", 37, 3004433, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetSpecialAction("oid=63694955", "special3", -1, 1);
                                                            cm.npc_SetSpecialAction("oid=63694958", "special3", -1, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=63694955", "special2", 1, 1);
                                                              cm.npc_SetSpecialAction("oid=63694956", "special2", 1, 1);
                                                              cm.npc_SetSpecialAction("oid=63694957", "special2", 1, 1);
                                                              cm.npc_SetSpecialAction("oid=63694958", "special2", 1, 1);
                                                              cm.npc_SetSpecialAction("oid=63694959", "special2", 1, 1);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=63694966", "special2", 1, 1);
                                                                cm.npc_SetSpecialAction("oid=63694967", "special2", 1, 1);
                                                                cm.npc_SetSpecialAction("oid=63694968", "special2", 1, 1);
                                                                cm.npc_SetSpecialAction("oid=63694969", "special2", 1, 1);
                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=63694962", "special2", 1, 1);
                                                                  cm.npc_SetSpecialAction("oid=63694963", 'special2', 1, 1);
                                                                  cm.npc_SetSpecialAction("oid=63694964", "special2", 1, 1);
                                                                  cm.npc_SetSpecialAction("oid=63694965", "special2", 1, 1);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=63694952", 'special', -1, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#突击！！", 37, 3004433, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#太阳与我们同在！！", 37, 3004441, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=63694953", 1, 200, 100);
                                                                            cm.npc_SetForceMove("oid=63694954", 1, 200, 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.setNpcSpecialActionReset("oid=63694955");
                                                                              cm.setNpcSpecialActionReset("oid=63694956");
                                                                              cm.setNpcSpecialActionReset("oid=63694957");
                                                                              cm.setNpcSpecialActionReset("oid=63694958");
                                                                              cm.setNpcSpecialActionReset("oid=63694959");
                                                                              cm.npc_SetForceMove("oid=63694955", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694956", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694957", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694958", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694959", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694962", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694963", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694964", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694965", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694966", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694967", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694968", 1, 200, 100);
                                                                              cm.npc_SetForceMove("oid=63694969", 1, 200, 100);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=63694955");
                                                                                  cm.npc_LeaveField("oid=63694955");
                                                                                  cm.npc_LeaveField("oid=63694956");
                                                                                  cm.npc_LeaveField("oid=63694956");
                                                                                  cm.npc_LeaveField("oid=63694957");
                                                                                  cm.npc_LeaveField("oid=63694957");
                                                                                  cm.npc_LeaveField("oid=63694958");
                                                                                  cm.npc_LeaveField("oid=63694958");
                                                                                  cm.npc_LeaveField("oid=63694959");
                                                                                  cm.npc_LeaveField("oid=63694959");
                                                                                  cm.npc_LeaveField("oid=63694962");
                                                                                  cm.npc_LeaveField("oid=63694962");
                                                                                  cm.npc_LeaveField("oid=63694963");
                                                                                  cm.npc_LeaveField("oid=63694963");
                                                                                  cm.npc_LeaveField("oid=63694964");
                                                                                  cm.npc_LeaveField("oid=63694964");
                                                                                  cm.npc_LeaveField("oid=63694965");
                                                                                  cm.npc_LeaveField("oid=63694965");
                                                                                  cm.npc_LeaveField("oid=63694966");
                                                                                  cm.npc_LeaveField("oid=63694966");
                                                                                  cm.npc_LeaveField("oid=63694967");
                                                                                  cm.npc_LeaveField("oid=63694967");
                                                                                  cm.npc_LeaveField("oid=63694968");
                                                                                  cm.npc_LeaveField("oid=63694968");
                                                                                  cm.npc_LeaveField("oid=63694969");
                                                                                  cm.npc_LeaveField("oid=63694969");
                                                                                  cm.sendNormalTalk_Bottom("#face0#为了圣地！！", 37, 3004439, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#随对抗者大人冲锋！！", 37, 3004437, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNextS_Bottom("#r突击！！！！");
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.monadForceMove("cernium_sky_e", 0, 0);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 50, -1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction23.img/effect2/12"], [10000000, 50, -1050, 1, -30, 1, 1, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.userSetFieldFloating(993151027, 3, 3, 5);
                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/horn", 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.setAmbience("SoundEff.img/DLep4/war2", 250, 60);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#你看见了吗？使徒哈勃克正在坠落。", 37, 3004433, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.setAmbience("SoundEff.img/DLep4/war2", 150, 60);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#胜利近在咫尺。", 37, 3004433, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face1#大家一起齐心合力战斗吧！", 37, 3004433, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face3#为了塞尔提乌！！", 37, 3004433, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 4000, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                                                                  } else if (status === V++) {
                                                                                                                    cm.eventSKill(0);
                                                                                                                    cm.forceStartQuest(39920);
                                                                                                                    cm.updateInfoQuest(39920, "clear=1");
                                                                                                                    cm.setStringForQuestInfo(39900, '18', 'h1');
                                                                                                                    cm.setStringForQuestInfo(39900, '31', 'h1');
                                                                                                                    cm.setStringForQuestInfo(39900, '30', 'h1');
                                                                                                                    cm.warp(410000810, 0, true);
                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                    cm.setStandAloneMode(false);
                                                                                                                    cm.npc_LeaveField("oid=63694952");
                                                                                                                    cm.npc_LeaveField("oid=63694952");
                                                                                                                    cm.npc_LeaveField("oid=63694953");
                                                                                                                    cm.npc_LeaveField("oid=63694953");
                                                                                                                    cm.npc_LeaveField("oid=63694954");
                                                                                                                    cm.npc_LeaveField("oid=63694954");
                                                                                                                    cm.npc_LeaveField("oid=63694960");
                                                                                                                    cm.npc_LeaveField("oid=63694960");
                                                                                                                    cm.npc_LeaveField("oid=63694961");
                                                                                                                    cm.npc_LeaveField("oid=63694961");
                                                                                                                    cm.npc_LeaveField("oid=63695100");
                                                                                                                    cm.npc_LeaveField("oid=63695100");
                                                                                                                    cm.npc_LeaveField("oid=63695102");
                                                                                                                    cm.npc_LeaveField("oid=63695102");
                                                                                                                    cm.npc_LeaveField("oid=63695104");
                                                                                                                    cm.npc_LeaveField("oid=63695104");
                                                                                                                    cm.npc_LeaveField("oid=63695105");
                                                                                                                    cm.npc_LeaveField("oid=63695105");
                                                                                                                    cm.npc_LeaveField("oid=63695106");
                                                                                                                    cm.npc_LeaveField("oid=63695106");
                                                                                                                    cm.npc_LeaveField("oid=63695107");
                                                                                                                    cm.npc_LeaveField("oid=63695107");
                                                                                                                    cm.npc_LeaveField("oid=63695108");
                                                                                                                    cm.npc_LeaveField("oid=63695108");
                                                                                                                    cm.npc_LeaveField("oid=63695109");
                                                                                                                    cm.npc_LeaveField("oid=63695109");
                                                                                                                    cm.npc_LeaveField("oid=63695110");
                                                                                                                    cm.npc_LeaveField("oid=63695110");
                                                                                                                    cm.npc_LeaveField("oid=63695111");
                                                                                                                    cm.npc_LeaveField("oid=63695111");
                                                                                                                    cm.npc_LeaveField("oid=63695112");
                                                                                                                    cm.npc_LeaveField("oid=63695112");
                                                                                                                    cm.npc_LeaveField("oid=63695113");
                                                                                                                    cm.npc_LeaveField("oid=63695113");
                                                                                                                    cm.npc_LeaveField("oid=63695114");
                                                                                                                    cm.npc_LeaveField("oid=63695114");
                                                                                                                    cm.npc_LeaveField("oid=63695115");
                                                                                                                    cm.npc_LeaveField("oid=63695115");
                                                                                                                    cm.npc_LeaveField("oid=63695116");
                                                                                                                    cm.npc_LeaveField("oid=63695116");
                                                                                                                    cm.npc_LeaveField("oid=63695117");
                                                                                                                    cm.npc_LeaveField("oid=63695117");
                                                                                                                    cm.npc_LeaveField("oid=63695118");
                                                                                                                    cm.npc_LeaveField("oid=63695118");
                                                                                                                    cm.npc_LeaveField("oid=63695119");
                                                                                                                    cm.npc_LeaveField("oid=63695119");
                                                                                                                    cm.npc_LeaveField("oid=63695120");
                                                                                                                    cm.npc_LeaveField("oid=63695120");
                                                                                                                    cm.npc_LeaveField("oid=63695121");
                                                                                                                    cm.npc_LeaveField("oid=63695121");
                                                                                                                    cm.npc_LeaveField("oid=63698464");
                                                                                                                    cm.npc_LeaveField("oid=63698464");
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