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
      cm.forceCompleteQuest(58753);
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=1;5=1;6=4;7=4;8=1;9=4");
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=1;5=2;6=4;7=4;8=1;9=4");
      cm.updateInfoQuest(58712, "0=1;1=1;2=3;3=1;4=1;5=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111025, "oid=3830517", 235, -35, 2, 185, 285, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830517", "summon", 0, 0);
      cm.npc_ChangeController(9111012, "oid=3830518", -480, -35, 19, -530, -430, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830518", "summon", 0, 0);
      cm.npc_ChangeController(9111013, "oid=3830519", -108, -70, 30, -158, -58, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830519", "summon", 0, 0);
      cm.npc_ChangeController(9111014, "oid=3830520", 145, -35, 14, 95, 195, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830520", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830521", -630, -35, 17, -680, -580, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830521", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830522", -560, -35, 18, -610, -510, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830522", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830523", -500, -35, 19, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830523", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830524", -440, -35, 20, -490, -390, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830524", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830525", -395, -35, 20, -445, -345, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830525", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830526", 300, -35, 15, 250, 350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830526", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830527", 310, -35, 15, 260, 360, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830527", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830528", 360, -35, 15, 310, 410, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830528", "summon", 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830529", 420, -35, 3, 370, 470, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830529", 'summon', 0, 0);
      cm.npc_ChangeController(9111028, "oid=3830530", 480, -35, 1, 430, 530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3830530", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -80, -150);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3830519"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.sendNormalTalk_Bottom("哇，那帮家伙简直是大骗子！", 37, 9111028, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("居然骗了我们这么久！可恶！", 37, 9111028, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('什么狗屁神！死骗子！', 37, 9111028, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3830520"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3830517"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.sendNormalTalk_Bottom("该死的骗子！我们一起教训他们吧！！", 37, 9111028, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("滚！该死的坏蛋！以后你们不许靠近亡者窟！呸！", 37, 9111028, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=3830521", -1, 70, 50);
                      cm.npc_SetForceMove("oid=3830522", -1, 140, 100);
                      cm.npc_SetForceMove("oid=3830523", -1, 200, 70);
                      cm.npc_SetForceMove("oid=3830524", -1, 260, 150);
                      cm.npc_SetForceMove("oid=3830525", -1, 315, 300);
                      cm.npc_SetForceMove("oid=3830526", -1, 1000, 300);
                      cm.npc_SetForceMove("oid=3830527", -1, 1010, 300);
                      cm.npc_SetForceMove("oid=3830528", -1, 1060, 300);
                      cm.npc_SetForceMove("oid=3830529", -1, 1120, 300);
                      cm.npc_SetForceMove("oid=3830530", -1, 1180, 300);
                      cm.inGameDirectionEvent_AskAnswerTime(6000);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=3830521");
                        cm.npc_LeaveField("oid=3830521");
                        cm.npc_LeaveField("oid=3830522");
                        cm.npc_LeaveField("oid=3830522");
                        cm.npc_LeaveField("oid=3830523");
                        cm.npc_LeaveField("oid=3830523");
                        cm.npc_LeaveField("oid=3830524");
                        cm.npc_LeaveField("oid=3830524");
                        cm.npc_LeaveField("oid=3830525");
                        cm.npc_LeaveField("oid=3830525");
                        cm.npc_LeaveField("oid=3830526");
                        cm.npc_LeaveField("oid=3830526");
                        cm.npc_LeaveField("oid=3830527");
                        cm.npc_LeaveField("oid=3830527");
                        cm.npc_LeaveField("oid=3830528");
                        cm.npc_LeaveField("oid=3830528");
                        cm.npc_LeaveField("oid=3830529");
                        cm.npc_LeaveField("oid=3830529");
                        cm.npc_LeaveField("oid=3830530");
                        cm.npc_LeaveField("oid=3830530");
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3830519"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.sendNormalTalk_Bottom("#face0#啧啧，他已经完全崩溃了。", 37, 9111012, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……我还以为你只是很会打，没想到辩论实力也很出色哦。", 37, 9111012, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("嗯……话说回来，他们也没干什么特别坏的事……落到这个下场有点可怜。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#哼，这就是正义。即使他们没干坏事，但他们蛊惑众生，鵺应该受到审判。", 37, 9111012, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……。", 37, 9111013, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("……。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3830519"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.sendNormalTalk_Bottom("(看样子#b#p9111013##k得过好一阵子才能振作起来了。)", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 80);
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("这个我暂时借去用用。", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_QTE(7);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/JP_zipang/getWater");
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#辛苦了，#h0#。我们蘑菇神社再会。", 37, 9111012, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relGet", "oid=3830518"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……你给我站住！", 37, 9111014, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=3830520", -1, 320, 300);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3830518"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -275, -30);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……你是我跟我部下的仇人！", 37, 9111014, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relBreak", "oid=3830520"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                    cm.sendNormalTalk_Bottom("#face0#我至今还清楚记得你在#r黄鼠狼之夜#k犯的罪！", 37, 9111014, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -80, -150);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=3830520", -1, 100, 300);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=3830518", "attack", 0, 1);
                                                                          cm.npc_SetSpecialAction("oid=3830520", "attack", 0, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("到、到底是怎么回事！？", 57, 0, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#……。", 37, 9111012, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#哪怕砍你千百刀我都不解气！我一直在等着和你这混蛋重逢！", 37, 9111014, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#……黄鼠狼之夜……是那件事吗……", 37, 9111012, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#……你是织田军尖兵……？", 37, 9111012, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_LeaveField("oid=3830520");
                                                                                                  cm.npc_LeaveField("oid=3830520");
                                                                                                  cm.npc_ChangeController(9111005, "oid=3833541", -385, -35, 20, -435, -335, 1, true, 0, false);
                                                                                                  cm.npc_SetSpecialAction("oid=3833541", "summon", 0, 0);
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, -385, -30);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face2#少废话……！", 37, 9111005, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_QTE(1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                                                                                            cm.sendNormalTalk_Bottom("到底怎么回事！你们俩住手！", 57, 0, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -80, -150);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetForceMove("oid=3830518", -1, 120, 200);
                                                                                                                cm.npc_SetForceMove("oid=3833541", 1, 120, 200);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_setForceFlip("oid=3830518", 1);
                                                                                                                  cm.npc_setForceFlip("oid=3833541", -1);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#咳……！可恶！", 37, 9111005, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#……那天的事……很抱歉，但我当时也是无奈之举。我以为你是入侵者。", 37, 9111012, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……樱之岛是无数妖怪的避难所和隐居地。\r\n有全副武装的陌生人类靠近，我第一时间只想到要阻拦你。", 37, 9111012, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#哼！因为对你的仇恨，我和我的战友们变成亡灵，在九泉下徘徊。\r\n你以为你现在说句对不起，就能超度我们吗？", 37, 9111005, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#……对不起。", 37, 9111012, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3830520"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                              cm.npc_SetSpecialAction("oid=3833541", 'regen', 0, 1);
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#呃呃呃呃！我不需要你那假惺惺的同情或道歉！\r\n等我斩了你的脑袋我再去投胎！", 37, 9111005, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetSpecialAction("oid=3833541", "attack", 0, 1);
                                                                                                                                cm.sendNormalTalk_Bottom("无，无头鬼大人！#b#p9111013##k大人的状态不太妙啊。我们先撤吧……！", 37, 9111025, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#切……。", 37, 9111005, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_SetSpecialAction("oid=3833541", "attack", 0, 1);
                                                                                                                                    cm.sendNormalTalk_Bottom("#face2#混蛋，记住我的名字！我叫#b#p9111005##k，意思是织田的黑龙！", 37, 9111005, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#总有一天我要……取你的狗头……。", 37, 9111005, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_SetSpecialAction("oid=3833541", "attack", 0, 1);
                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#你一定会死在我手上！！！", 37, 9111005, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#…………", 37, 9111012, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face2#……喂，人类！", 37, 9111005, false, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                cm.sendNormalTalk_Bottom("你叫我吗？", 57, 0, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#说吧，你叫什么名字！", 37, 9111005, true, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("……我叫#h0#……。", 57, 0, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.npc_SetSpecialAction("oid=3833541", "attack", 0, 1);
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face2#……#h0#……听着就很倒霉。\r\n#h0#！！下次再见面即是你的死期！", 37, 9111005, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.npc_setForceFlip("oid=3833541", 1);
                                                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                        cm.npc_SetForceMove("oid=3830519", 1, 300, 100);
                                                                                                                                                        cm.npc_SetForceMove("oid=3833541", 1, 300, 150);
                                                                                                                                                        cm.npc_SetForceMove("oid=3830517", 1, 300, 120);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.npc_LeaveField("oid=3830517");
                                                                                                                                                          cm.npc_LeaveField("oid=3830517");
                                                                                                                                                          cm.npc_LeaveField("oid=3830519");
                                                                                                                                                          cm.npc_LeaveField("oid=3830519");
                                                                                                                                                          cm.npc_LeaveField("oid=3833541");
                                                                                                                                                          cm.npc_LeaveField("oid=3833541");
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("…………", 57, 0, false, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#感觉有点心酸啊……缘分真是牵扯不断啊。\r\n你多保重，我们蘑菇神社再会。", 37, 9111012, false, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.npc_setForceFlip("oid=3830518", -1);
                                                                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                                                  cm.npc_SetForceMove("oid=3830518", -1, 100, 100);
                                                                                                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.npc_LeaveField("oid=3830518");
                                                                                                                                                                    cm.npc_LeaveField("oid=3830518");
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("(看样子他们俩是因为#r黄鼠狼之夜#k而结怨的。以后再搞清楚怎么回事吧。)", 57, 0, false, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                                        cm.warp(800022012, 0, true);
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