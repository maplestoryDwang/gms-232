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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_ProcessOnOffLayer('d0', "Effect/Direction17.img/effect/ark/illust/11/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#你很弱……现在……明白了吗？", 37, 3001504, 0, 1);
        cm.effect_Voice("Voice4.img/ArkNpc/Now/C/1", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#……不要反抗，接受这一切。那样就不会有不必要的牺牲。", 37, 3001504, 1, 1);
          cm.effect_Voice("Voice4.img/ArkNpc/Now/C/2", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#你的那一套理论，无法阻止战争。", 37, 3001504, 1, 1);
            cm.effect_Voice("Voice4.img/ArkNpc/Now/C/3", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#不要再妨碍我……妨碍高等翼人。", 37, 3001504, 1, 1);
              cm.effect_Voice("Voice4.img/ArkNpc/Now/C/4", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……友情游戏到此为止。", 37, 3001504, 1, 1);
                cm.effect_Voice("Voice4.img/ArkNpc/Now/C/5", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.fieldEffect_复合图片动画(["Effect/Direction17.img/effect/ark/medal/0/ark_medal", 'animation', '', '01'], [0, 0, 1, 0, 0, 0, 0, 1]);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/pendant", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(6000);
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
                          cm.fieldEffect_ProcessOnOffLayer('2', "Effect/Direction17.img/effect/ark/noise/1366/2", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer('3', "Effect/Direction17.img/effect/ark/noise/1366/3", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                          cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm48.img/Memory", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('d3', "Effect/Direction17.img/effect/ark/illust/5/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('d4', "Effect/Direction17.img/effect/ark/illust/5/1", 0, 100, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                cm.sendNormalTalk_Bottom("#face0#祝贺你毕业了，阿尔贝。", 37, 3001502 + cm.getPlayer().getGender(), 0, 1);
                                cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#也祝贺你，亚克。", 37, 3001505, 1, 1);
                                  cm.effect_Voice("Voice4.img/ArkNpc/Back/E/2", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#毕业纪念勋章……从现在开始就不再是模拟战斗，要到真正的战场上去了。", 37, 3001502 + cm.getPlayer().getGender(), 1, 1);
                                    cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#一定会遇到很多可怕的事、痛苦的事……以及超出我们常识的事。", 37, 3001502 + cm.getPlayer().getGender(), 1, 1);
                                      cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#所以最近我经常做噩梦。", 37, 3001502 + cm.getPlayer().getGender(), 1, 1);
                                        cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#梦见自己在战场上死去……哈哈……是不是像个傻瓜？这种事情早就已经想过很多次了……", 37, 3001502 + cm.getPlayer().getGender(), 1, 1);
                                          cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#我们发誓献出生命，是为了保护心爱的人。", 37, 3001505, 1, 1);
                                            cm.effect_Voice("Voice4.img/ArkNpc/Back/E/7", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#不管发生什么事……我都会救你的。", 37, 3001505, 1, 1);
                                              cm.effect_Voice("Voice4.img/ArkNpc/Back/E/8", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#……所以放心吧。", 37, 3001505, 1, 1);
                                                cm.effect_Voice("Voice4.img/ArkNpc/Back/E/9", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#什，什么嘛……就你能逞英雄！", 37, 3001502 + cm.getPlayer().getGender(), 1, 1);
                                                  cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#我也一样！我也会救你！", 37, 3001502 + cm.getPlayer().getGender(), 1, 1);
                                                    cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#是我先说的。", 37, 3001505, 1, 1);
                                                      cm.effect_Voice("Voice4.img/ArkNpc/Back/E/12", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom('#face3#切……', 37, 3001502 + cm.getPlayer().getGender(), 1, 1);
                                                        cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/13", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#噗，真是的，亚克……你这家伙……", 37, 3001505, 1, 1);
                                                          cm.effect_Voice("Voice4.img/ArkNpc/Back/E/14", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('d3', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_ProcessOnOffLayer('d4', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#是的……原来是这样……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                              cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face5#还有那天的事……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                cm.effect_Voice("Voice4.img/Ark/Back/E/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/17", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                      cm.sendNormalTalk_Bottom("#face4#必须阻止他们过来……", 37, 3001502 + cm.getPlayer().getGender(), 0, 1);
                                                                      cm.effect_Voice("Voice4.img/Ark/Back/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('d9', "Effect/Direction17.img/effect/ark/illust/3/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                        cm.sendNormalTalk_Bottom("#face1#你未经许可就擅自离开了基地，亚克少尉。", 37, 3001506, 1, 1);
                                                                        cm.effect_Voice("Voice4.img/ArkNpc/Back/F/3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#……", 37, 3001502 + cm.getPlayer().getGender(), 1, 1);
                                                                          cm.effect_Voice("Voice4.img/Ark/Back/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#在上次的战斗中也制造了不少麻烦。", 37, 3001506, 1, 1);
                                                                            cm.effect_Voice("Voice4.img/ArkNpc/Back/F/5", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('d9', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                              cm.fieldEffect_ProcessOnOffLayer("d10", "Effect/Direction17.img/effect/ark/illust/3/1", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                              cm.sendNormalTalk_Bottom("#face4#伪善者……摘下假面具吧。", 37, 3001502 + cm.getPlayer().getGender(), 1, 1);
                                                                              cm.effect_Voice("Voice4.img/Ark/Back/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#我正想那样做。", 37, 3001506, 1, 1);
                                                                                cm.effect_Voice("Voice4.img/ArkNpc/Back/F/7", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#我已经看穿你了。", 37, 3001506, 1, 1);
                                                                                  cm.effect_Voice("Voice4.img/ArkNpc/Back/F/8", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#内心的动摇……我一直在寻找机会。", 37, 3001506, 1, 1);
                                                                                    cm.effect_Voice("Voice4.img/ArkNpc/Back/F/9", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#……现在你成为了背叛者，就有了名分。", 37, 3001506, 1, 1);
                                                                                      cm.effect_Voice("Voice4.img/ArkNpc/Back/F/10", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#呵呵，终于……终于到手了！", 37, 3001506, 1, 1);
                                                                                        cm.effect_Voice("Voice4.img/ArkNpc/Back/F/11", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer("d10", '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face5#呃啊啊啊啊啊啊啊啊啊啊！！！！！！！", 37, 3001502 + cm.getPlayer().getGender(), 0, 1);
                                                                                              cm.effect_Voice("Voice4.img/Ark/Back/F/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/12", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#成为我忠诚的部下，把你的灵魂交给我吧。", 37, 3001506, 1, 1);
                                                                                                cm.effect_Voice("Voice4.img/ArkNpc/Back/F/13", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#\r\n\r\n是因为觉悟还不够吗？", 0);
                                                                                                          cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#或者，这全都是注定的命运……", 0);
                                                                                                            cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#\r\n他看透了……一切。", 0);
                                                                                                              cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/3', 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_Monologue("#fs22##fn黑体#\r\n\r\n\r\n看来只能到此为止了……一切就这样结束了吗？", 1);
                                                                                                                cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3800);
                                                                                                                  cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                                                                                                  cm.effect_Text(["#fn黑体##fs35#抱歉……没能遵守约定。"], [50, 3300, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2600);
                                                                                                                    cm.effect_Voice("Voice4.img/Ark/Back/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/6', 100);
                                                                                                                    cm.effect_Text(["#fn黑体##fs35#……原谅我……"], [50, 2100, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("d11", "Effect/Direction17.img/effect/ark/illust/4/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face5#阿尔贝……你怎么会在这里……", 37, 3001502 + cm.getPlayer().getGender(), 0, 1);
                                                                                                                          cm.effect_Voice("Voice4.img/Ark/Back/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/1', 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face2#亚克，我无法理解你。", 37, 3001505, 1, 1);
                                                                                                                            cm.effect_Voice("Voice4.img/ArkNpc/Back/G/2", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#为什么要做那种鲁莽的事情呢……", 37, 3001505, 1, 1);
                                                                                                                              cm.effect_Voice("Voice4.img/ArkNpc/Back/G/3", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face2#背叛的下场会很凄惨……这不是明摆着吗？", 37, 3001505, 1, 1);
                                                                                                                                cm.effect_Voice("Voice4.img/ArkNpc/Back/G/4", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("d11", '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("d12", "Effect/Direction17.img/effect/ark/illust/4/1", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#……但是我会保护你的。", 37, 3001505, 0, 1);
                                                                                                                                    cm.effect_Voice("Voice4.img/ArkNpc/Back/G/5", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face3#即使……赌上我的一切。", 37, 3001505, 1, 1);
                                                                                                                                      cm.effect_Voice("Voice4.img/ArkNpc/Back/G/6", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face3#……我要阻止仪式。", 37, 3001505, 1, 1);
                                                                                                                                        cm.effect_Voice("Voice4.img/ArkNpc/Back/G/7", 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_bye/whiteback2/skeleton", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face3#哈啊啊啊啊啊啊啊啊啊啊！！！！！！！", 37, 3001505, 0, 1);
                                                                                                                                            cm.effect_Voice("Voice4.img/ArkNpc/Back/G/8", 100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('d12', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/radionoise", 100);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("d13", "Effect/Direction17.img/effect/ark/illust/11/1", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("d14", "Effect/Direction17.img/effect/ark/illust/11/2", 0, 500, 0, -50, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face6#这段时间……在你身上……到底发生了什么？", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                                                                                      cm.effect_Voice("Voice4.img/Ark/Now/D/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/1', 100);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#什么都没发生。", 37, 3001504, 1, 1);
                                                                                                                                                        cm.effect_Voice("Voice4.img/ArkNpc/Now/D/2", 100);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face6#阿……尔贝……你……不是说想保护……眼前的亲人吗……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                                                                                          cm.effect_Voice("Voice4.img/Ark/Now/D/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/3', 100);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那些……怎么可能是真话呢？", 37, 3001504, 1, 1);
                                                                                                                                                            cm.effect_Voice("Voice4.img/ArkNpc/Now/D/4", 100);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('d14', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('d13', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("d15", "Effect/Direction17.img/effect/ark/illust/11/3", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("d15", '', 2, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_Hero9(0, 2000);
                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2300);
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
                                                                                                                                                                            cm.warp(402090013, 0, false);
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
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}