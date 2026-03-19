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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayBGM("Bgm55/MyPrinceMyKingdom", 0, 0);
        cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 0, 0, 0, 2000000, 4, 1, 0, 1, 0, 0);
        cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Dlep6/sakura/0/skeleton", "animation", '', '0'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 3500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(6500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#在某个温暖的春日", 0);
            cm.effect_Voice("Voice6.img/Library/kel/01-01-kel.mp3", 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#我看徒弟打瞌睡的模样实在可爱", 0);
              cm.effect_Voice("Voice6.img/Library/kel/01-02-kel.mp3", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#就打趣地问他在深思熟虑什么。", 1);
                cm.effect_Voice("Voice6.img/Library/kel/01-03-kel.mp3", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#睁开眼睛的徒弟，", 0);
                    cm.effect_Voice("Voice6.img/Library/kel/01-04-kel.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#接住刚巧落到手上的花瓣，\r\n开始胡诌。", 1);
                      cm.effect_Voice("Voice6.img/Library/kel/01-05-kel.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#世间所有美好的事物，\r\n为何都只是昙花一现。", 1);
                          cm.effect_Voice("Voice6.img/Library/kel/01-06-kel.mp3", 100);
                        } else {
                          if (status === V++) {
                            cm.setAccountQuestInfo(252, "count=37447;T=20210420223616");
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#他微笑的脸庞犹如春风般和煦，\r\n我也不由自主地露出了笑容。", 1);
                              cm.effect_Voice("Voice6.img/Library/kel/01-07-kel.mp3", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#花瓣之美，在于它会纷飞飘落。", 0);
                                  cm.effect_Voice("Voice6.img/Library/kel/01-08-kel.mp3", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#人也正因此才美丽。", 1);
                                    cm.effect_Voice("Voice6.img/Library/kel/01-09-kel.mp3", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#所以，请不要与述说永恒的人过多来往。", 1);
                                        cm.effect_Voice("Voice6.img/Library/kel/01-10-kel.mp3", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#天底下没有什么是一成不变的，", 0);
                                            cm.effect_Voice("Voice6.img/Library/kel/01-11-kel.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#他绝对是个骗子。", 1);
                                              cm.effect_Voice("Voice6.img/Library/kel/01-12-kel.mp3", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#但想到我也是曾许下永恒誓约的骑士……", 0);
                                                  cm.effect_Voice("Voice6.img/Library/kel/01-13-kel.mp3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#我们不禁相视而笑。", 1);
                                                    cm.effect_Voice("Voice6.img/Library/kel/01-14-kel.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#在某个温暖的……", 0);
                                                        cm.effect_Voice("Voice6.img/Library/kel/01-15-kel.mp3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("#fc0xFF00BDB4#那是个温暖的春日。", 1);
                                                            cm.effect_Voice("Voice6.img/Library/kel/01-16-kel.mp3", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_取消复合图片动画('0', 1, 3500);
                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue("#fs40#Episode VI：圣瑞尼亚的骑士", 1);
                                                                  cm.effect_Voice("Voice6.img/Library/kel/01-17-kel.mp3", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_Hero9(0, 5000);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium3/footstep", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                          cm.sendNormalTalk_Bottom("#face0#是这里吗……", 36, 2570125, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#真的有珍贵宝物吗？", 36, 2570125, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#都说是啦？这可是我花重金买来的消息。", 36, 2570123, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#真是无法相信。", 36, 2570125, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#消息可靠。说好如果消息不属实，要退款的。", 36, 2570123, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#嘘，我好像找到入口了。", 36, 2570121, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/DoorOpen", 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#开了！", 36, 2570123, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_ChangeController(2570121, "oid=37849516", -50, 100, 119, -100, 0, 0, true, 0, false);
                                                                                                cm.npc_SetSpecialAction("oid=37849516", "summon", 0, 0);
                                                                                                cm.npc_ChangeController(2570122, "oid=37849517", -120, 100, 120, -170, -70, 0, true, 0, false);
                                                                                                cm.npc_SetSpecialAction("oid=37849517", "summon", 0, 0);
                                                                                                cm.npc_ChangeController(2570123, "oid=37849518", -200, 100, 120, -250, -150, 0, true, 0, false);
                                                                                                cm.npc_SetSpecialAction("oid=37849518", 'summon', 0, 0);
                                                                                                cm.npc_ChangeController(2570124, "oid=37849519", -280, 100, 120, -330, -230, 1, true, 0, false);
                                                                                                cm.npc_SetSpecialAction("oid=37849519", 'summon', 0, 0);
                                                                                                cm.npc_ChangeController(2570125, "oid=37849520", -350, 100, 120, -400, -300, 1, true, 0, false);
                                                                                                cm.npc_SetSpecialAction("oid=37849520", "summon", 0, 0);
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -184, 120);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(3500, 0, 1500, 3500, -150, 120);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#噢……。", 36, 2570123, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#没想到真有这样的地方……\r\n我们快分头去找吧。", 36, 2570125, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#小心点，据说可能会有看守宝物的#r恶魔#k。", 36, 2570123, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#什么？！这话怎么现在才说？！", 36, 2570122, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#嗯……那不如还是回去吧？", 36, 2570123, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#不，我的意思是……", 36, 2570122, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570124, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                        cm.effect_Text(["#fn黑体##fs20#欢迎你们，各位勇士。", ''], [100, 2000, 4, 0, -50, 1, 4, 0, 0, 0, 0, 0]);
                                                                                                                        cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
                                                                                                                        cm.fieldEffect_Hero9(55, 0);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849516"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849517"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849518"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849519"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849520"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_ChangeController(2570109, "oid=37850800", 377, 100, 115, 327, 427, 1, false, 0, false);
                                                                                                                            cm.npc_SetSpecialAction("oid=37850800", "summon", 0, 0);
                                                                                                                            cm.setNPC_Fadein(2570109, 1);
                                                                                                                            cm.setNPC_Fadein(2570120, 1);
                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 280, 120);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=37849516", 1, 210, 120);
                                                                                                                                cm.npc_SetForceMove("oid=37849517", 1, 210, 120);
                                                                                                                                cm.npc_SetForceMove("oid=37849518", 1, 230, 120);
                                                                                                                                cm.npc_SetForceMove("oid=37849519", 1, 250, 120);
                                                                                                                                cm.npc_SetForceMove("oid=37849520", 1, 270, 120);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你是……看守宝石的#r恶魔……#k？", 36, 2570121, false, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#听说那家伙已经返回地狱了。", 36, 2570109, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#呼，幸好……", 36, 2570123, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#幸好个屁！我们来晚了一步！", 36, 2570122, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#看样子你打败了恶魔……\r\n那么，你应该也拿到了#r恶魔看守的宝物#k吧。", 36, 2570121, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#算是这样吧。", 36, 2570109, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/4/6", 0, 1500, 0, 0, 10, 4, 1, -1, 0, 0, 0);
                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction25.img/Dlep6/ilust/4/7", 0, 1500, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#鲁碧安！", 36, 2570121, false, true, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##r鲁碧安……#k\r\n嗯……那是传说可以复活亡者的#r恶魔宝石#k。", 36, 2570109, true, true, 1);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#哇……！", 36, 2570123, true, true, 1);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#现在不是感叹的时候……这东西已经有主了。", 36, 2570122, false, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#哎，你的情报费能要回来吗？", 36, 2570125, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#行了嘛？", 36, 2570123, true, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#啧……白白浪费时间了……", 36, 2570122, true, true, 1);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#大家不用太失望。想要的话，我也可以交给你们。", 36, 2570109, true, true, 1);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849516"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849517"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849518"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849519"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37849520"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#这是真的吗？", 36, 2570121, false, true, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#说代替他有点不合适……\r\n愿意听听我的故事吗？", 36, 2570109, true, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#好久没来到外头的世界，有很多话想说呢。", 36, 2570109, true, true, 1);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#外头的世界？到底是什么样的故事……？", 36, 2570122, true, true, 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#先听听看吧。感觉会是个波澜壮阔的故事，很好奇呢。", 36, 2570123, true, true, 1);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#这故事很长……但听起来不会觉得无聊的。", 36, 2570109, false, true, 1);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.fieldEffect_Hero9(0, 2000);
                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_Monologue("很久很久以前……有个名叫#r圣瑞尼亚#k的国家。", 0);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_Monologue("那是个美丽又富饶的……就像是画册里描绘的那种国家。", 0);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_Monologue("我在那里领导着一个小型骑士团，\r\n我们的工作一般是……", 1);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.inGameDirectionEvent_Monologue("那是场#r猎魔#k。", 1);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                    cm.npc_LeaveField("oid=37849516");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=37849517");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=37849518");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=37849519");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=37849520");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=37850800");
                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                    cm.warp(308000001, 0, true);
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