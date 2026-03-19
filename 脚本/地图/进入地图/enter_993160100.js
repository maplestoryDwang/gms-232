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
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.teachSkill(160000000, 1, 1);
      cm.updateInfoQuest(39510, 'set=1');
      cm.updateInfoQuest(39598, "11=h0;03=h0;33=h0;34=h0;16=h0;35=h0;27=h0;09=h0;82=h0;28=h0;29=h0;84=h0;85=h0");
      cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction9.img/HoyoungStory/0", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(3500);
        cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
      } else {
        if (status === V++) {
          cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
          cm.sendNormalTalk_Bottom("#face0#哎……好不容易抓到了……现在就乖乖睡觉吧，饕餮。", 37, 3001676, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
              cm.sendNormalTalk_Bottom("#face0#哈！", 37, 3001676, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                  cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/4', 100);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Male") + '/5', 100);
                    cm.sendNormalTalk_Bottom("#face0#……这样一来，这段时间应该能消停一些了。", 37, 3001676, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#太乙仙人，是格兰蒂斯极负盛名的传奇道士。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                          cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/6', 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#传说，他最有名的成就是封印了四凶。\r\n所谓四凶，是过去曾被视为灾难化身的四头魔兽。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                            cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#关于太乙仙人的来历……有人说他来自天界，\r\n也有人说他是活了上千年的老怪物。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                              cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#尽管坊间对他的出身众说纷纭，但有一点可以肯定的是，\r\n他是一位绝世高手，所过之处无不风声四起。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction9.img/HoyoungStory/1", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#顶着仙人的名号，武器自然不能怠慢。他手里一把扇子，舞得千变万化，\r\n轻轻一扇，即可驱散一大群的怪物。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                      cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#不仅如此，他还精通分身术和遁甲术……\r\n哈哈……百般神通，岂是三言两语能说明的。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                        cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/11", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face11#除了技艺超群之外，太乙仙人还有一副侠义心肠。但凡遇到他人有难，必鼎力相助，赴汤蹈火在所不辞，广受百姓爱戴。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                          cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/12', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#即便如此，他却始终保持谦逊之姿……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                            cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/13", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face9#每当有人问到他的名字时，他总是这么回答。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                              cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/14', 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction9.img/HoyoungStory/2", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#贫道只是凑巧路过……", 37, 3001676, false, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.SitOnDummyPortableChair(3018396, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 356, -290);
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
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 161, -320);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Text(["#fn黑体##fs18#仙游山山脚"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face5#贫道只是凑巧路过，微名不足挂齿……\r\n哈……这话念着还挺顺溜的。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                          cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/16', 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face7#呃，原来这是《太乙真人传》的最后一卷了……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                            cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/17", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#哈……接下来干什么好呢……\r\n还以为可以整天吃喝玩耍一直逍遥下去，没想到也有厌倦的时候。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                              cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/18", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face3#居然会怀念师父使唤我干的杂活……\r\n唉，我真是闲出屁来了。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/19', 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#话说回来，师父到底上哪儿去了，临走的时候说得好像很快会回来似的，这一走就杳无音信的，切……莫非是在哪里跟人打赌，打得忘记回家了？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                  cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/20", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 406, -1817);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer('06', "Effect/Direction9.img/HoyoungStory/6", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#我要去外地办点事，你好好照看道馆。", 37, 3001654, false, true);
                                                                                              cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/21", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#修炼不许偷懒，不许睡懒觉，\r\n还有……别整天光顾着看书，记得按时吃饭。", 37, 3001654, true, true);
                                                                                                cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/22", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#您什么时候回来啊？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/23", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#不好说，总之事情办完了就回来，\r\n平时活动别离开道观太远，尤其后山……", 37, 3001654, true, true);
                                                                                                    cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/24", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face12#后山不能去，这句话我都听到耳朵起茧子了，您还怕我忘了？\r\n赶紧去办事吧，师父。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/25', 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯，那我走了。", 37, 3001654, true, true);
                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/26", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face5#您不用着急回来，在外面好好逛逛吧，\r\n回来的时候，别忘记给我带礼物哦。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/27", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#你这家伙到底像谁，嘴巴这么欠？", 37, 3001654, true, true);
                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/28', 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_ProcessOnOffLayer('06', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 161, -300);
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
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#哎……一直这么躺下去，我会不会变成石头啊？\r\n不对，或许我已经变成石头了？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/29", 100);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#明明还有呼吸，却没感觉到自己活着，\r\n老实说，怎么样才算是活着呢？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                          cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/30', 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#要是真的就这么变成了石头，我最后悔的事情是什么呢？\r\n是后悔没尝到师父喝的米酒？还是后悔没有看到小说的结局？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                            cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/31", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#比起这些，让我更感到千百倍委屈的是……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                              cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/32", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face3#在这世上，从来没有找到过自己存在的意义，\r\n这点才是最心塞的……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/33", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#哎，不管了！道观周边没什么好玩的，师父又叮嘱我千万别跑远了，啥也不能干，让我成天发呆呀？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                  cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/34", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.SitOnDummyPortableChair(0, 0);
                                                                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#嘿哟！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                                                                                      cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/35", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#哎哟，呆在这里憋死了，出去透透气再回来吧！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                                                        cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/36", 100);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_Hero9(-1, 1000);
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
                                                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                                                  cm.warp(993160000, 0, false);
                                                                                                                                                  cm.eventSKill(0);
                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                  cm.teachSkill(80002323, 0, -1);
                                                                                                                                                  cm.teachSkill(80002323, 1, 1);
                                                                                                                                                  cm.gainItem(2000002, 350);
                                                                                                                                                  cm.gainItem(2000006, 350);
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