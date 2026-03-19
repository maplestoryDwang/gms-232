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
      cm.updateInfoQuest(34997, "27=h1");
      cm.updateInfoQuest(34997, "27=h1;28=h1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3001527, "oid=143815447", 500, 73, 43, 450, 550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815447", 'summon', 0, 0);
      cm.npc_ChangeController(3001528, "oid=143815448", 460, 73, 43, 410, 510, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815448", 'summon', 0, 0);
      cm.npc_ChangeController(3001527, "oid=143815449", 400, 73, 43, 350, 450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815449", 'summon', 0, 0);
      cm.npc_ChangeController(3001528, "oid=143815450", 350, 73, 43, 300, 400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815450", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=143815451", 220, 73, 43, 170, 270, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815451", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=143815452", 80, 73, 43, 30, 130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815452", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=143815453", 40, 73, 43, -10, 90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815453", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=143815454", 0, 73, 43, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815454", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=143815455", 730, 78, 43, 680, 780, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815455", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=143815456", 800, 78, 43, 750, 850, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815456", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=143815457", 870, 78, 43, 820, 920, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815457", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=143815458", 940, 78, 43, 890, 990, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815458", 'summon', 0, 0);
      cm.npc_ChangeController(3001527, "oid=143815459", 1010, 78, 43, 960, 1060, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815459", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=143815460", 1080, 78, 43, 1030, 1130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815460", 'summon', 0, 0);
      cm.npc_ChangeController(3001527, "oid=143815461", 1140, 78, 43, 1090, 1190, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815461", 'summon', 0, 0);
      cm.npc_ChangeController(3001528, "oid=143815462", 1280, 78, 43, 1230, 1330, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143815462", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 598, 150);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(4, 15000);
        cm.emotion(1, 15000);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2250, 500, 598, 150);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face5#呃……这个感觉是怎么回事……好像有东西沿着手臂覆盖了上来……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2500, 500, 598, 160);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face6#呃，压制不住了……这股力量到底……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 500, 598, 165);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 5000, 0);
                        cm.sendNormalTalk_Bottom("#face6#不，快住手……啊，啊啊……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 598, 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=143815447", 'die', 0, 1);
                              cm.npc_SetSpecialAction("oid=143815448", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815449", 'die', 0, 1);
                              cm.npc_SetSpecialAction("oid=143815450", 'die', 0, 1);
                              cm.npc_SetSpecialAction("oid=143815451", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815452", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815453", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815454", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815455", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815456", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815457", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815458", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815459", 'die', 0, 1);
                              cm.npc_SetSpecialAction("oid=143815460", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=143815461", 'die', 0, 1);
                              cm.npc_SetSpecialAction("oid=143815462", "die", 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(540);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=143815447");
                                cm.npc_LeaveField("oid=143815448");
                                cm.npc_LeaveField("oid=143815449");
                                cm.npc_LeaveField("oid=143815450");
                                cm.npc_LeaveField("oid=143815451");
                                cm.npc_LeaveField("oid=143815452");
                                cm.npc_LeaveField("oid=143815453");
                                cm.npc_LeaveField("oid=143815454");
                                cm.npc_LeaveField("oid=143815455");
                                cm.npc_LeaveField("oid=143815456");
                                cm.npc_LeaveField("oid=143815457");
                                cm.npc_LeaveField("oid=143815458");
                                cm.npc_LeaveField("oid=143815459");
                                cm.npc_LeaveField("oid=143815460");
                                cm.npc_LeaveField("oid=143815461");
                                cm.npc_LeaveField("oid=143815462");
                                cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/Ark/Back/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                cm.sendNormalTalk_Bottom("#face7#呃啊啊啊啊啊啊啊啊啊啊！！！！！！！！！！", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#打倒再打倒，打倒的次数越多", 0);
                                    cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#就越有一种被某种东西侵蚀的", 0);
                                      cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/3', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#\r\n\r\n\r\n异样的感觉……", 0);
                                        cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/4', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#\r\n仿佛我不再是我了。", 1);
                                          cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#虽然很害怕，但却无法摆脱。", 0);
                                            cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#\r\n摆脱那个在那瞬间支配我全身的怪物。", 0);
                                              cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#无法摆脱……像冲动一般的快乐。", 0);
                                                cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#\r\n\r\n在堕落与战栗的边界上，", 0);
                                                  cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("#fn黑体##fs22#我大喊道。", 1);
                                                    cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer("999", "Effect/Direction17.img/effect/ark/ArkGaugeCooltime/1366", 0, 500, 0, -5, 0, 4, 1, -1, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(8300);
                                                      cm.effect_Voice("Voice4.img/Ark/Mono/B/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                      cm.effect_Text(["#fn黑体##fs65#住手#fn??#――――――――――#fn黑体#！！"], [50, 7800, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.updateInfoQuest(34997, "27=h0;28=h1");
                                                        cm.updateInfoQuest(34997, "27=h0;28=h0");
                                                        cm.fieldEffect_ProcessOnOffLayer("999", '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.npc_ChangeController(3001516, "oid=143821279", -1363, 92, 1, -1413, -1313, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821279", 'summon', 0, 0);
                                                        cm.npc_ChangeController(3001515, "oid=143821280", -1419, 92, 1, -1469, -1369, 0, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821280", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001520, "oid=143821281", -1033, 96, 44, -1083, -983, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821281", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001519, "oid=143821282", -1104, 96, 130, -1154, -1054, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821282", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001517, "oid=143821283", -968, 96, 44, -1018, -918, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821283", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001518, "oid=143821284", -1168, 96, 130, -1218, -1118, 0, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821284", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001512, "oid=143821285", -755, 90, 44, -805, -705, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821285", 'summon', 0, 0);
                                                        cm.npc_ChangeController(3001513, "oid=143821286", -822, 90, 44, -872, -772, 0, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821286", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001510, "oid=143821287", -612, -289, 30, -662, -562, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821287", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001514, "oid=143821288", 225, -265, 67, 175, 275, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821288", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001521, "oid=143821289", 513, 100, 43, 463, 563, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821289", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001522, "oid=143821290", 639, 90, 43, 589, 689, 1, false, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821290", "summon", 0, 0);
                                                        cm.npc_ChangeController(3001509, "oid=143821291", 997, -122, 117, 947, 1047, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821291", "summon", 0, 0);
                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), -1780, 90);
                                                        cm.npc_ChangeController(3001508, "oid=143821292", -1630, 60, 1, -1680, -1580, 0, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=143821292", "summon", 0, 0);
                                                        cm.fieldEffect_Hero9(0, 2000);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        cm.npc_LeaveField("oid=143821288");
                                                        cm.npc_LeaveField("oid=143821289");
                                                        cm.npc_LeaveField("oid=143821290");
                                                        cm.npc_LeaveField("oid=143821291");
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_Hero9(100, 300);
                                                          cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/dust/0/ark_dust", "01_dust A", '', '01'], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                                            cm.fieldEffect_PlayBGM("Bgm48.img/VerdelTown", 0, 0);
                                                            cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -1257, 60);
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
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  cm.effect_Text(["#fn黑体##fs18#几天后，新的商队避难处"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=143821292", 1, 1346, 220);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 1165);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1000, 7000, -430, 60);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_NormalSpeechBalloon("吃的东西不够……", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 3001515, null, cm.getPlayer().getId());
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          cm.effect_NormalSpeechBalloon("必须先维修建筑……", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 3001516, null, cm.getPlayer().getId());
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                            cm.effect_NormalSpeechBalloon("谢谢你，亚克！", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 3001512, null, cm.getPlayer().getId());
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#谢谢，多亏你，大家终于没事了……这里是商队的新避难处。", 37, 3001508, 0, 1);
                                                                              cm.effect_NormalSpeechBalloon("多亏了你，终于得救了！", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 3001513, null, cm.getPlayer().getId());
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=143821292", -1, 40, 230);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#（被未知的力量压倒之后，等清醒过来的时候，发现已经回到了商队的村子里。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#（还好那个叫马尔的孩子没事……那时的暴走，到底是怎么回事？）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
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
                                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                              } else if (status === V++) {
                                                                                                cm.setStandAloneMode(false);
                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                cm.warp(402000600, 3, false);
                                                                                                cm.eventSKill(0);
                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                cm.npc_LeaveField("oid=143821279");
                                                                                                cm.npc_LeaveField("oid=143821280");
                                                                                                cm.npc_LeaveField("oid=143821281");
                                                                                                cm.npc_LeaveField("oid=143821282");
                                                                                                cm.npc_LeaveField("oid=143821283");
                                                                                                cm.npc_LeaveField("oid=143821284");
                                                                                                cm.npc_LeaveField("oid=143821285");
                                                                                                cm.npc_LeaveField("oid=143821286");
                                                                                                cm.npc_LeaveField("oid=143821287");
                                                                                                cm.npc_LeaveField("oid=143821288");
                                                                                                cm.npc_LeaveField("oid=143821289");
                                                                                                cm.npc_LeaveField("oid=143821290");
                                                                                                cm.npc_LeaveField("oid=143821291");
                                                                                                cm.npc_LeaveField("oid=143821292");
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