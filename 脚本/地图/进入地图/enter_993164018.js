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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -276, -167);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.setAmbience("SoundEff.img/kain/HeavyRain", 100, 60);
          cm.inGameDirectionEvent_PushScaleInfo(7000, 0, 1000, 7000, 242, -167);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3004915, 'oid=566121', 350, -300, 11, 300, 400, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=566121", "summon", 0, 0);
            cm.npc_ChangeController(3004914, "oid=566122", 375, -300, 11, 325, 425, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=566122", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(8500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#这是……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
              cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 304, -291);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#（黑龙……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我还以为来的是金发独眼龙……真是出乎意料。见到你很高兴。", 36, 3004917, false, true, 1);
                            cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3004917, 'oid=566127', 22, -300, 9, -28, 72, 0, true, 1000, false);
                              cm.npc_SetSpecialAction("oid=566127", 'summon', 0, 0);
                              cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 138, -291);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#……果然是你这个家伙。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                  cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/3', 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我这人的性格，就算钱不还，可有仇是一定要报的。", 36, 3004917, false, true, 1);
                                      cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/4', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/rainWalk4", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
                                            cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 579, -291);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(3004920, "oid=566132", 550, -250, 11, 500, 600, 1, true, 300, false);
                                              cm.npc_SetSpecialAction("oid=566132", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(150);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(3004921, 'oid=566133', 620, -250, 11, 570, 670, 1, true, 300, false);
                                                cm.npc_SetSpecialAction("oid=566133", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(150);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(3004921, 'oid=566134', 690, -250, 11, 640, 740, 1, true, 300, false);
                                                  cm.npc_SetSpecialAction("oid=566134", 'summon', 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#！！", 36, 3004921, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#啊，住手，这是我的客人。", 36, 3004917, true, true, 1);
                                                        cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……", 36, 3004921, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#切……", 36, 3004920, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.Npc_Fadeout("oid=566132", 0, 500);
                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.Npc_Fadeout("oid=566133", 0, 500);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.Npc_Fadeout("oid=566134", 0, 500);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 138, -291);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#这都是什么？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/6', 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#这是对#r恶意#k的调查，也是过去这一年来我费尽心思苦苦追寻的结果。", 36, 3004917, true, true, 1);
                                                                            cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/7', 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.playSoundEffDirectly("SoundEff.img/kain/HeavyRain");
                                                                                  cm.fieldEffect_PlayBGM("Bgm56/DispossessedAnger", 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_屏幕渐入插图B(['00', "Effect/Direction26.img/kain/spine/dragon/blackdragon", '', 'animation'], [1, 0, 0, 0, 2000, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#是邪恶之龙和……诺巴吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                      cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/8', 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#没错，就是当初追随过#r魔龙史缇拉斯#k和那家伙的黑色诺巴一族。", 36, 3004917, true, true, 1);
                                                                                        cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#黑色诺巴？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#他们是诺巴的一个分支，人数并不多，古代神时代他们醉心于力量，侍奉魔龙，\r\n当时在大陆称为#r黑色诺巴#k，恶名昭彰。", 36, 3004917, true, true, 1);
                                                                                            cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#难道是要打仗了？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                              cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#所谓恶意就是#r不良居心，#k也就是说，是憎恨，是杀意，\r\n怎么可能有人会用恶意做善事呢？", 36, 3004917, true, true, 1);
                                                                                                cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/13", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#恶意啊……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                    cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#然而风光一时无两的时期也不过是片刻的，\r\n古代神时代很快落幕，伟大的#r魔龙史缇拉斯#k也消失了踪影。", 36, 3004917, true, true, 1);
                                                                                                      cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/15', 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#那些当初气焰嚣张侍奉魔龙的黑色诺巴有何下场……\r\n相信不用我说你也知道了吧？", 36, 3004917, true, true, 1);
                                                                                                        cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#一定会为一直以来的恶行付出代价。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/17', 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#是啊，那些家伙一瞬间就灭绝了。", 36, 3004917, true, true, 1);
                                                                                                            cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_屏幕渐入插图消失B(['00'], [1, 1000]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#无论如何~\r\n恶意曾归那些#r黑色诺巴#k专有，现如今不知出于什么原因，供应给了你们德拉卡兹啊。", 36, 3004917, false, true, 1);
                                                                                                                        cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/19", 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#目的就是为了迅速、方便地量产出#r特级暗杀者#k。", 36, 3004917, true, true, 1);
                                                                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/20", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom('#face0#……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#哈欠~罗米娜，我好困……", 36, 3004915, false, true, 1);
                                                                                                                                  cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom('#face0#嘘。', 36, 3004914, true, true, 1);
                                                                                                                                    cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/22', 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 36, 3004917, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.fieldEffect_PlayBGM("Bgm56/DispossessedAnger", 0, 0);
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#所以，拿到恶意后到底有什么打算？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                            cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/23", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#为了成为龙。", 36, 3004917, false, true, 1);
                                                                                                                                                cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/24", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#什么？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                  cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/25", 100);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#就是要变成强者，狠角色，抬头挺胸，趾高气扬地将城市掌控在手中，\r\n黑色诺巴是这样，德拉卡兹也是这样……", 36, 3004917, true, true, 1);
                                                                                                                                                    cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/26', 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#正如“过去的你”曾经做过的那样吧？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                        cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#别一脸可怜的表情，\r\n是个人都会怀念曾经的风光，\r\n啊，当然对你们德拉卡兹来说是个例外，哈哈哈。", 36, 3004917, false, true, 1);
                                                                                                                                                            cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/28", 100);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#来，废话有点多了，所以，东西呢？", 36, 3004917, true, true, 1);
                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/29", 100);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#这是我从医生房间里偷出来的#b研究笔记#k，\r\n里面应该写了恶意的制造方法。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                                  cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/30", 100);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#笔记……？", 36, 3004917, false, true, 1);
                                                                                                                                                                      cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/31", 100);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face3#我让你拿来的明明是#b原型怨恨石#k……", 36, 3004917, false, true, 1);
                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/32", 100);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#应、应该没有……吧。", 36, 3004914, false, true, 1);
                                                                                                                                                                              cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/33", 100);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#嗯……", 36, 3004917, true, true, 1);
                                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/34", 100);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#制造方法啊……虽说如果当真有制造方法，我倒是无所谓的，不过……", 36, 3004917, false, true, 1);
                                                                                                                                                                                    cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/35", 100);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#喂，德拉卡兹，那个笔记有没有写提取记忆的方法？", 36, 3004917, true, true, 1);
                                                                                                                                                                                      cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/36", 100);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#因为是医生的研究笔记……所以才会这样吧，不过，为什么要问起这个？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                                                        cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/37", 100);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#这不是明知故问嘛。", 36, 3004917, true, true, 1);
                                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/38", 100);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#就算先将怨恨石做出来分给我们的人，可如果是#r没办法控制#k拥有这股力量的人，也就毫无意义，风险太大了。", 36, 3004917, true, true, 1);
                                                                                                                                                                                            cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/39", 100);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#你……难不成是打算夺走记忆，再创造其他德拉卡兹？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/40", 100);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#当然要了，你们已经认证过效果了啊，难道不是吗？", 36, 3004917, false, true, 1);
                                                                                                                                                                                                    cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/41", 100);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#你们不妨想想自己什么样，\r\n你们失去了一切，被卖到了这里，像狗一样为这些身份不明的家伙卖命，却连自己丢失了什么都不知道。", 36, 3004917, true, true, 1);
                                                                                                                                                                                                        cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/42", 100);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#被抢走的房子、东西还有人……\r\n什么都想不起来了，甚至都没办法愤怒。", 36, 3004917, true, true, 1);
                                                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/43", 100);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom('#face2#你……', 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                                                              cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/44", 100);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#啊，是啊，应该可以说是#r连愤怒都被抢走了#k，\r\n这个表述刚合适呢，呵呵。", 36, 3004917, true, true, 1);
                                                                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/45", 100);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#这个家伙……！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                                                                                  cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/46', 100);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=566127", "stone", -1, 1);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#哟呵，就是稍微戏弄一下嘛，不必这么生气，\r\n毕竟搞不好万一我害怕把这东西给摔掉了…", 36, 3004917, false, true, 1);
                                                                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/47", 100);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#不管是你还是我，都不愿珍贵的记忆支离破碎嘛？", 36, 3004917, false, true, 1);
                                                                                                                                                                                                                              cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/48", 100);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#到底要对谁发火，具体要怎么发火，等找回了记忆自然就能知道了。", 36, 3004917, false, true, 1);
                                                                                                                                                                                                                                    cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/49", 100);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#是啊，至少目前没理由和你打，你有没有创造德拉卡兹不归我管，我们只要交换彼此想要的东西就好。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                                                                                        cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/50", 100);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#这个态度很好，就要这样。", 36, 3004917, true, true, 1);
                                                                                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/51", 100);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#来，那就同时交换吧，一……二……三！", 36, 3004917, false, true, 1);
                                                                                                                                                                                                                                              cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/52", 100);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 100, 0, 0, 0, 10, 0);
                                                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier3", 100);
                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 130, 0, 0, 0, 10, 0);
                                                                                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier3", 100);
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 10, 0);
                                                                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier3", 100);
                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/barrier2", 100);
                                                                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#！！", 36, 3004917, false, true, 1);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#有人袭击！！额啊啊！！", 36, 3004920, true, true, 1);
                                                                                                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/53", 100);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face2#你！居然敢骗我！！", 36, 3004917, true, true, 1);
                                                                                                                                                                                                                                                            cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/54", 100);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#不是，我……！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                                                                                                                              cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/55", 100);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#切，你过来！", 36, 3004917, true, true, 1);
                                                                                                                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/56', 100);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#姐姐！！", 36, 3004915, true, true, 1);
                                                                                                                                                                                                                                                                  cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/57", 100);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#罗伊斯！！", 36, 3004914, true, true, 1);
                                                                                                                                                                                                                                                                    cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/58", 100);
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#让开！", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                                                                                                                                                                                                                                        cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/60", 100);
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                                                                                                                                                                                                                                                          cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/kain/illust/13", 'cc'], [1, 0, 0, 0, 500, -1, 0, 0, -1]);
                                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#不可以！！！", 36, 3004914, false, true, 1);
                                                                                                                                                                                                                                                                            cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/59", 100);
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face2#要是伤到了罗伊斯，我绝不会原谅你！！", 36, 3004914, false, true, 1);
                                                                                                                                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/15/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/61", 100);
                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face3#唔……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                      cm.fieldEffect_屏幕渐入插图消失A(['00'], [1000]);
                                                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#目标开始逃跑，就是之前预估的方向。", 36, 3004912, false, true, 1);
                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#是，按照作战进行，\r\n提拉格那伙人呢？", 36, 3004908, true, true, 1);
                                                                                                                                                                                                                                                                                          cm.effect_Voice("Voice6.img/kain/16/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#已经接受了单独的任务，去往东边的区域了。", 36, 3004912, true, true, 1);
                                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#好，开始追击。", 36, 3004908, true, true, 1);
                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                                cm.effect_Voice("Voice6.img/kain/16/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                                                                                                                                                                                                                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                                                              } else if (status === V++) {
                                                                                                                                                                                                                                                                                                cm.forceCompleteQuest(39419);
                                                                                                                                                                                                                                                                                                cm.gainExp(13557);
                                                                                                                                                                                                                                                                                                cm.getPlayer().levelUp();
                                                                                                                                                                                                                                                                                                cm.updateInfoQuest(39419, "dir23=1");
                                                                                                                                                                                                                                                                                                cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;85=h0");
                                                                                                                                                                                                                                                                                                cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h1;85=h0");
                                                                                                                                                                                                                                                                                                cm.npc_LeaveField('oid=566121');
                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=566122");
                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=566127");
                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=566132");
                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=566133");
                                                                                                                                                                                                                                                                                                cm.npc_LeaveField("oid=566134");
                                                                                                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                                                                                                cm.warp(410000423, 0, true);
                                                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}