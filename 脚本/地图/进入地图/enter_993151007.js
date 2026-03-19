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
      cm.fieldEffect_PlayBGM("Bgm53/TheHolyLand", 0, 0);
      cm.npc_ChangeController(3004433, "oid=1060253", -140, 226, 69, -190, -90, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060253", "summon", 0, 0);
      cm.npc_ChangeController(3004431, "oid=1060254", -200, 249, 87, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060254", "summon", 0, 0);
      cm.npc_ChangeController(3004447, "oid=1060255", 0, 240, 70, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060255", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=1060256", -300, 200, 51, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060256", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=1060257", -400, 249, 86, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060257", 'summon', 0, 0);
      cm.npc_ChangeController(3004437, "oid=1060258", -500, 249, 85, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060258", "summon", 0, 0);
      cm.npc_ChangeController(3004437, "oid=1060259", -300, 220, 68, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060259", 'summon', 0, 0);
      cm.npc_ChangeController(3004437, "oid=1060260", -400, 180, 32, -450, -350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060260", 'summon', 0, 0);
      cm.npc_ChangeController(3004437, "oid=1060261", -500, 180, 33, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060261", 'summon', 0, 0);
      cm.npc_ChangeController(3004441, "oid=1060262", 140, 226, 73, 90, 190, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060262", "summon", 0, 0);
      cm.npc_ChangeController(3004430, "oid=1060263", 200, 180, 26, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060263", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=1060264", 300, 200, 44, 250, 350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060264", 'summon', 0, 0);
      cm.npc_ChangeController(3004439, "oid=1060265", 400, 249, 98, 350, 450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060265", 'summon', 0, 0);
      cm.npc_ChangeController(3004439, "oid=1060266", 500, 249, 97, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060266", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=1060267", 300, 220, 74, 250, 350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060267", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=1060268", 400, 180, 24, 350, 450, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060268", "summon", 0, 0);
      cm.npc_ChangeController(3004439, "oid=1060269", 500, 180, 22, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1060269", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, 80);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -200, 180);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#嚯~好雄伟的王宫啊。", 37, 3004447, false, true);
          cm.effect_Voice("Voice5.img/CH3/2_1", 128);
        } else {
          if (status === V++) {
            cm.npcMove(3004447, 0, 20, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 0, 200);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#（塞伦，他是你们在近天峰时见过的人吗？）", 37, 3004441, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#（不，我第一次见到这人。）", 37, 3004430, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#请报上你的所属和姓名。", 37, 3004433, true, true);
                              cm.effect_Voice("Voice5.img/CH3/2_4", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#所属？我跟外头那些蠢货是一个部队的。", 37, 3004447, true, true);
                                cm.effect_Voice("Voice5.img/CH3/2_5", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#姓名嘛……就当我是个无名小卒吧。叫什么名字，有什么要紧？", 37, 3004447, true, true);
                                  cm.effect_Voice("Voice5.img/CH3/2_6", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#放肆！！！", 37, 3004441, true, true);
                                    cm.effect_Voice("Voice5.img/CH3/2_7", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#没关系，大神官。", 37, 3004433, true, true);
                                      cm.effect_Voice("Voice5.img/CH3/2_8", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#你是来传话的吗？", 37, 3004433, true, true);
                                        cm.effect_Voice("Voice5.img/CH3/2_9", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#对，我也不拖泥带水，直接说正题吧。", 37, 3004447, true, true);
                                          cm.effect_Voice("Voice5.img/CH3/2_10", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你们也知道，我们原本的目的是占领这片被称为圣地的土地。", 37, 3004447, true, true);
                                            cm.effect_Voice("Voice5.img/CH3/2_11", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我也是为了这个目的，才来到了这个偏僻的鬼地方。", 37, 3004447, true, true);
                                              cm.effect_Voice("Voice5.img/CH3/2_12", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#然而，亲自过来看了一圈我才发现，\r\n这一趟跑得很不值。", 37, 3004447, true, true);
                                                cm.effect_Voice("Voice5.img/CH3/2_13", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#这里的土质太疏松，不易耕种。\r\n而且这种边疆地带，也不知道能不能开发旅游什么的。", 37, 3004447, true, true);
                                                  cm.effect_Voice("Voice5.img/CH3/2_14", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#真是个无礼的家伙……", 37, 3004441, true, true);
                                                    cm.effect_Voice("Voice5.img/CH3/2_15", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#于是我仔细观察了一下……", 37, 3004447, true, true);
                                                      cm.effect_Voice("Voice5.img/CH3/2_16", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#意外发现，这里竟有个家伙比圣地更吸引我。", 37, 3004447, true, true);
                                                        cm.effect_Voice("Voice5.img/CH3/2_17", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm53/RedMoon", 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(200, 0, 2000, 200, -130, 130);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(800);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#把#fs18##r对抗者#k交出来。我就保你们圣地平安。", 37, 3004447, false, true);
                                                                cm.effect_Voice("Voice5.img/CH3/2_18", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(400, 0, 1500, 400, 0, 200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1060254"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1060253"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1060262"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#（此人真的是我们要对付的敌人吗。）", 37, 3004431, false, true);
                                                                          cm.effect_Voice("Voice5.img/CH3/2_19", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#我拒绝。", 37, 3004433, true, true);
                                                                            cm.effect_Voice("Voice5.img/CH3/2_20", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#哈哈，王子殿下真是果断。", 37, 3004447, false, true);
                                                                                cm.effect_Voice("Voice5.img/CH3/2_21", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#但你就不担心吗？要知道，#r人质#k的性命还握在我们手里哦？", 37, 3004447, true, true);
                                                                                  cm.effect_Voice("Voice5.img/CH3/2_22", 128);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#人质？", 37, 3004433, true, true);
                                                                                    cm.effect_Voice("Voice5.img/CH3/2_23", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/hug", 100);
                                                                                        cm.sendNormalTalk_Bottom("#face0#那个是！！", 37, 3004441, false, true);
                                                                                        cm.effect_Voice("Voice5.img/CH3/2_24", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/3/0", 0, 500, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/shinging", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4#……！", 37, 3004430, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face4#（真的有啊……#r又一位天族人#k……！！）", 37, 3004431, true, true);
                                                                                                cm.effect_Voice("Voice5.img/CH3/2_25", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face2#（可惜被他们先下手为强了……这种出场方式，真是万万意想不到的。）", 37, 3004431, true, true);
                                                                                                  cm.effect_Voice("Voice5.img/CH3/2_26", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#我们的要求很简单。\r\n你们拿#b对抗者#k交换#r要成为圣剑主人的天族#k。", 37, 3004447, true, true);
                                                                                                    cm.effect_Voice("Voice5.img/CH3/2_27", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#没有其它条件。", 37, 3004447, true, true);
                                                                                                      cm.effect_Voice("Voice5.img/CH3/2_28", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face2#换句话说就是，停止无意义的战斗，一起实现和平吧。", 37, 3004447, true, true);
                                                                                                        cm.effect_Voice("Voice5.img/CH3/2_29", 128);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#你当我三岁小孩呢？", 37, 3004433, true, true);
                                                                                                          cm.effect_Voice("Voice5.img/CH3/2_30", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_SetForceMove("oid=1060262", -1, 15, 100);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#等等，这么说只要交换了人质，你们就会撤军对吗？", 37, 3004441, false, true);
                                                                                                              cm.effect_Voice("Voice5.img/CH3/2_31", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetForceMove("oid=1060253", 1, 15, 100);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face3#大神官！！", 37, 3004433, false, true);
                                                                                                                  cm.effect_Voice("Voice5.img/CH3/2_32", 128);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#没错。大神官是个明白人。", 37, 3004447, true, true);
                                                                                                                    cm.effect_Voice("Voice5.img/CH3/2_33", 128);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#还请王子不要插手。这是教团和圣剑之主的事。", 37, 3004441, true, true);
                                                                                                                      cm.effect_Voice("Voice5.img/CH3/2_34", 128);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#不。这是王国和联盟之间的事！", 37, 3004433, true, true);
                                                                                                                        cm.effect_Voice("Voice5.img/CH3/2_35", 128);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#看样子你们需要点时间来做决定。", 37, 3004447, false, true);
                                                                                                                            cm.effect_Voice("Voice5.img/CH3/2_36", 128);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我这人没什么耐心，等不了很久。", 37, 3004447, true, true);
                                                                                                                              cm.effect_Voice("Voice5.img/CH3/2_37", 128);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#希望，你们尽快做出明智的选择。", 37, 3004447, true, true);
                                                                                                                                cm.effect_Voice("Voice5.img/CH3/2_38", 128);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_SetForceMove("oid=1060255", -1, 300, 100);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.Npc_Fadeout("oid=1060255", 0, 1000);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#嗬……", 37, 3004433, false, true);
                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/2_39", 128);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetForceMove("oid=1060256", 1, 15, 100);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#王子殿下，就这样让那些家伙回去吗？", 37, 3004437, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.npc_SetForceMove("oid=1060267", -1, 15, 100);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#快住手。你们难道不关心人质的安危吗？", 37, 3004439, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_SetForceMove("oid=1060257", 1, 15, 100);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#要是真的担心人质的安危，就更要抓住那个家伙了！", 37, 3004437, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#大家请冷静。目前我们还无法确认他出示的标志是不是真的……", 37, 3004433, true, true);
                                                                                                                                                    cm.effect_Voice("Voice5.img/CH3/3_1", 128);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#标志是真的。那不是轻易能伪造的物品。", 37, 3004430, true, true);
                                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/3_2", 128);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1060254"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1060253"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1060262"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#既然如此，就好做决定了。", 37, 3004441, false, true);
                                                                                                                                                          cm.effect_Voice("Voice5.img/CH3/3_3", 128);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#把对抗者抓起来！", 37, 3004441, true, true);
                                                                                                                                                            cm.effect_Voice("Voice5.img/CH3/3_4", 128);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_PlayBGM("Bgm53/BattleOfCernium", 0, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#大神官！！", 37, 3004433, false, true);
                                                                                                                                                                cm.effect_Voice("Voice5.img/CH3/3_5", 128);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.onSetNpcScript("oid=1060264", 1, ["special", 'special6'], [1, -1]);
                                                                                                                                                                  cm.onSetNpcScript("oid=1060265", 1, ["special", "special6"], [1, -1]);
                                                                                                                                                                  cm.onSetNpcScript("oid=1060266", 1, ['special', "special6"], [1, -1]);
                                                                                                                                                                  cm.onSetNpcScript("oid=1060267", 1, ["special", "special6"], [1, -1]);
                                                                                                                                                                  cm.onSetNpcScript("oid=1060268", 1, ["special", 'special6'], [1, -1]);
                                                                                                                                                                  cm.onSetNpcScript("oid=1060269", 1, ["special", "special6"], [1, -1]);
                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.onSetNpcScript("oid=1060256", 1, ["special", "special6"], [1, -1]);
                                                                                                                                                                    cm.onSetNpcScript("oid=1060257", 1, ["special", "special6"], [1, -1]);
                                                                                                                                                                    cm.onSetNpcScript("oid=1060258", 1, ["special", 'special6'], [1, -1]);
                                                                                                                                                                    cm.onSetNpcScript("oid=1060259", 1, ["special", 'special6'], [1, -1]);
                                                                                                                                                                    cm.onSetNpcScript("oid=1060260", 1, ["special", "special6"], [1, -1]);
                                                                                                                                                                    cm.onSetNpcScript("oid=1060261", 1, ['special', "special6"], [1, -1]);
                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#住手！为了守住圣地，而出卖并肩作战的战友，这就是太阳的正义吗？！", 37, 3004433, false, true);
                                                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/3_6", 128);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#如果这是守住圣地的方法，我怎能拒绝呢？", 37, 3004441, true, true);
                                                                                                                                                                        cm.effect_Voice("Voice5.img/CH3/3_7", 128);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#他们这只不信神者的联盟踏入圣地，也是主神密特拉的安排。", 37, 3004441, true, true);
                                                                                                                                                                          cm.effect_Voice("Voice5.img/CH3/3_8", 128);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#太阳神在启示我们，把" + (cm.getPlayer().getGender() == 0 ? '他' : '她') + "交出去，拯救圣地。", 37, 3004441, true, true);
                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH3/3_9", 128);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#别拿神当借口。那是你的意思吧。", 37, 3004433, true, true);
                                                                                                                                                                              cm.effect_Voice("Voice5.img/CH3/3_10", 128);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#王子，你的任性已经过分了。\r\n就为了维护不信神者，你竟要放弃天选之人吗？！", 37, 3004441, false, true);
                                                                                                                                                                                  cm.effect_Voice("Voice5.img/CH3/3_11", 128);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#塞伦，还等什么！快逮捕对抗者！", 37, 3004441, true, true);
                                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH3/3_12", 128);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, true, true);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.npc_SetForceMove("oid=1060263", -1, 110, 70);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3300);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.onSetNpcScript("oid=1060263", 1, ["special10", 'special8'], [1, -1]);
                                                                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld", 100);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                                                            cm.Npc_Fadeout("oid=1063392", 0, 1000);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1060254"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1060253"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4#塞伦……", 37, 3004431, false, true);
                                                                                                                                                                                                cm.effect_Voice("Voice5.img/CH3/3_13", 128);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我知道，我的力量根本无法与对抗者相比……", 37, 3004430, false, true);
                                                                                                                                                                                                    cm.effect_Voice("Voice5.img/CH3/3_14", 128);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#但如果与他为敌是太阳神的旨意，我只有从命。", 37, 3004430, true, true);
                                                                                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/3_15", 128);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#塞伦卿！", 37, 3004433, true, true);
                                                                                                                                                                                                        cm.effect_Voice("Voice5.img/CH3/3_16", 128);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#然而卑贱如我，至今还从未听见过神之语音。", 37, 3004430, true, true);
                                                                                                                                                                                                          cm.effect_Voice("Voice5.img/CH3/3_17", 128);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#因此在证实这是神的旨意之前，请恕我不能执行命令。", 37, 3004430, true, true);
                                                                                                                                                                                                            cm.effect_Voice("Voice5.img/CH3/3_18", 128);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#什么！！", 37, 3004441, true, true);
                                                                                                                                                                                                              cm.effect_Voice("Voice5.img/CH3/3_19", 128);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face3#小人斗胆，眼下为了守卫圣地，正是需要大家团结力量的时候。", 37, 3004430, true, true);
                                                                                                                                                                                                                cm.effect_Voice("Voice5.img/CH3/3_20", 128);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.npc_SetSpecialAction("oid=1060263", "special20", 1, 1);
                                                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/esfera/sword", 100);
                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.setNpcSpecialActionReset("oid=1060263");
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#大家请把剑收起来。", 37, 3004430, false, true);
                                                                                                                                                                                                                      cm.effect_Voice("Voice5.img/CH3/3_21", 128);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                                                                                          cm.eventSKill(0);
                                                                                                                                                                                                                          cm.warp(993151008, 0, false);
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060253");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060253");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060254");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060254");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060255");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060255");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060256");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060256");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060257");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060257");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060258");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060258");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060259");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060259");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060260");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060260");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060261");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060261");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060262");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060262");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060263");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060263");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060264");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060264");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060265");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060265");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060266");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060266");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060267");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060267");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060268");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060268");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060269");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=1060269");
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
          }
        }
      }
    }
  }
}