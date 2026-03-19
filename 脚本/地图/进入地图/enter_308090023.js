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
      cm.npc_ChangeController(2570100, "oid=38075588", 176, 145, 3, 126, 226, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38075588", "summon", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2570101, "oid=38075589", -150, 168, 6, -200, -100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38075589", "summon", 0, 0);
      cm.npc_ChangeController(2570102, "oid=38075590", 561, 113, 2, 511, 611, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38075590", "summon", 0, 0);
      cm.npc_ChangeController(2570103, "oid=38075591", 55, 173, 5, 5, 105, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=38075591", "summon", 0, 0);
      cm.npc_ChangeController(2570104, "oid=38075592", 663, 178, 8, 613, 713, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=38075592", "summon", 0, 0);
      cm.npc_ChangeController(2570107, "oid=38075593", 390, 140, 3, 340, 440, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=38075593", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=38075593", "die2", -1, 1);
      cm.npc_SetSpecialAction("oid=38075589", 'die', -1, 1);
      cm.npc_SetSpecialAction("oid=38075590", "die", -1, 1);
      cm.npc_SetSpecialAction("oid=38075591", "die", -1, 1);
      cm.npc_SetSpecialAction("oid=38075592", "die", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 230, 131);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#王子他……\r\n嘱咐我在尽可能多的人在场的情况下#r打碎鲁碧安。", 36, 2570100, false, true, 1);
            cm.effect_Voice("Voice6.img/Library/kel/23-01-kel.mp3", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#只有这样，才不会再出现另一个疯王。", 36, 2570100, true, true, 1);
              cm.effect_Voice("Voice6.img/Library/kel/23-02-kel.mp3", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#呵……呵哈……呵哈哈……", 36, 2570103, false, true, 1);
                  cm.effect_Voice("Voice6.img/Library/ryan/23-03-ryan.mp3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#我们连这都不知道……还傻傻地……", 36, 2570103, true, true, 1);
                    cm.effect_Voice("Voice6.img/Library/ryan/23-04-ryan.mp3", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#哈……哈，哈哈哈哈。咳咳！！哈啊……", 36, 2570103, true, true, 1);
                      cm.effect_Voice("Voice6.img/Library/ryan/23-05-ryan.mp3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#艾德……对不起……对不起……", 36, 2570103, true, true, 1);
                        cm.effect_Voice("Voice6.img/Library/ryan/23-06-ryan.mp3", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#……。", 36, 2570103, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#(他……断气了吗……。)", 36, 2570100, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你后悔吗？", 36, 2570107, false, true, 1);
                                  cm.effect_Voice("Voice6.img/Library/prince/24-01-prince.mp3", 100);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(2570107, "oid=38076530", 390, 140, 3, 340, 440, 1, false, 1500, false);
                                    cm.npc_SetSpecialAction("oid=38076530", 'summon', 0, 0);
                                    cm.npc_setForceFlip("oid=38075588", 1);
                                    cm.Npc_Fadeout("oid=38075593", 0, 1500);
                                    cm.inGameDirectionEvent_PushScaleInfo(700, 0, 1500, 700, 320, 131);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('#face0#……。', 36, 2570100, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#现在一个人都没有。\r\n你也用不着假装没看见我了吧。", 36, 2570107, false, true, 1);
                                            cm.effect_Voice("Voice6.img/Library/prince/24-02-prince.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……是啊。", 36, 2570100, false, true, 1);
                                                cm.effect_Voice("Voice6.img/Library/kel/24-03-kel.mp3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#现在……真的就我一个人了……\r\n不，加上你这个幻象，是两个人。", 36, 2570100, true, true, 1);
                                                  cm.effect_Voice("Voice6.img/Library/kel/24-04-kel.mp3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#幻象……", 36, 2570107, true, true, 1);
                                                    cm.effect_Voice("Voice6.img/Library/prince/24-05-prince.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#老师……你在见到恶魔之前，有看到过幻象吗？", 36, 2570107, true, true, 1);
                                                      cm.effect_Voice("Voice6.img/Library/prince/24-06-prince.mp3", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#当然没有。", 36, 2570100, true, true, 1);
                                                        cm.effect_Voice("Voice6.img/Library/kel/24-07-kel.mp3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#那么……你怎么能区分幻象与现实呢？", 36, 2570107, true, true, 1);
                                                          cm.effect_Voice("Voice6.img/Library/prince/24-08-prince.mp3", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570100, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#究竟倒下的那个是幻象，还是安然站着的我是幻象。\r\n或者……", 36, 2570107, true, true, 1);
                                                              cm.effect_Voice("Voice6.img/Library/prince/24-09-prince.mp3", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#也许那些战死的部下，还有国王，还有这圣瑞尼亚……\r\n也许……连老师本人，也全都是幻象。", 36, 2570107, true, true, 1);
                                                                cm.effect_Voice("Voice6.img/Library/prince/24-10-prince.mp3", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#老师，你能区分清楚吗？", 36, 2570107, true, true, 1);
                                                                  cm.effect_Voice("Voice6.img/Library/prince/24-11-prince.mp3", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#说什么傻话……", 36, 2570100, true, true, 1);
                                                                    cm.effect_Voice("Voice6.img/Library/kel/24-12-kel.mp3", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#老师，你看天空。", 36, 2570107, true, true, 1);
                                                                      cm.effect_Voice("Voice6.img/Library/prince/24-13-prince.mp3", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -143, -138);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#日晕……？！", 36, 2570100, false, true, 1);
                                                                              cm.effect_Voice("Voice6.img/Library/kel/24-14-kel.1.mp3", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#随着诅咒的当事者们消失，诅咒的力量减弱了。", 36, 2570107, true, true, 1);
                                                                                cm.effect_Voice("Voice6.img/Library/prince/24-15-prince.1.mp3", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#如此一来……#r现实与幻象的界限#k也开始崩塌。", 36, 2570107, true, true, 1);
                                                                                  cm.effect_Voice("Voice6.img/Library/prince/24-16-prince.mp3", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 320, 131);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#现实与……幻象？你指的是什么幻象？", 36, 2570100, false, true, 1);
                                                                                          cm.effect_Voice("Voice6.img/Library/kel/24-17-kel.mp3", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#战死的她曾经提到过。", 36, 2570107, true, true, 1);
                                                                                            cm.effect_Voice("Voice6.img/Library/prince/24-18-prince.mp3", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                                              cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#假如这一切都是谎言……\r\n假如时间并没有被逆转，我们只是被困在了人为制造的幻象之中？", 36, 2570102, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#假设是这样，该如何应对？", 36, 2570102, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                    cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#艾里葛斯·都纳米斯。\r\n他的权能是制造幻象的力量。", 36, 2570107, false, true, 1);
                                                                                                      cm.effect_Voice("Voice6.img/Library/prince/24-21-prince.mp3", 100);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#……！！", 36, 2570100, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#至今为止，恶魔并没有逆转时间。\r\n他只是创造了一个#r虚假世界#k，将老师和团员们关在里面而已。", 36, 2570107, true, true, 1);
                                                                                                          cm.effect_Voice("Voice6.img/Library/prince/24-22-prince.mp3", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#就像镜子一样，\r\n在完整复制了现实中的圣瑞尼亚的这个世界里。", 36, 2570107, true, true, 1);
                                                                                                            cm.effect_Voice("Voice6.img/Library/prince/24-23-prince.mp3", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#难以置信……。那真正的圣瑞尼亚……", 36, 2570100, true, true, 1);
                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/24-24-kel.mp3", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#在老师奋勇作战的期间，现实中的时间也在不断地流逝。", 36, 2570107, true, true, 1);
                                                                                                                cm.effect_Voice("Voice6.img/Library/prince/24-25-prince.mp3", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.setAccountQuestInfo(252, "count=41724;T=20210420234733");
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#已经#r数百年#k过去了。", 36, 2570107, true, true, 1);
                                                                                                                  cm.effect_Voice("Voice6.img/Library/prince/24-26-prince.mp3", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_PlayBGM("Bgm55/WhiteNight", 0, 0);
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('11', "Effect/Direction25.img/Dlep6/effect/0", 0, 2000, 10, 10, 20, 4, 0, 0, 0, 0, -1);
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer('12', "Effect/Direction25.img/Dlep6/ilust/10", 0, 2000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#不，你在撒谎……。", 36, 2570100, false, true, 1);
                                                                                                                          cm.effect_Voice("Voice6.img/Library/kel/24-27-kel.mp3", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#就在艾里葛斯被召唤出来的那天，圣瑞尼亚灭亡了。\r\n他建立的#r恶魔帝国#k一度非常强大……", 36, 2570107, true, true, 1);
                                                                                                                            cm.effect_Voice("Voice6.img/Library/prince/24-28-prince.mp3", 100);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#就连他自己，最终也被一群冒险家杀死，消失已久。", 36, 2570107, true, true, 1);
                                                                                                                              cm.effect_Voice("Voice6.img/Library/prince/24-29-prince.mp3", 100);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#现在只剩下艾里葛斯独自看守着宝石。", 36, 2570107, true, true, 1);
                                                                                                                                cm.effect_Voice("Voice6.img/Library/prince/24-30-prince.mp3", 100);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#保护鲁碧安……\r\n那是国王与艾里葛斯缔结契约的条件。", 36, 2570107, true, true, 1);
                                                                                                                                  cm.effect_Voice("Voice6.img/Library/prince/24-31-prince.mp3", 100);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哈……哈哈……胡说……纯粹是胡说八道！\r\n就这种谎话，以为我会相信吗！！", 36, 2570100, true, true, 1);
                                                                                                                                    cm.effect_Voice("Voice6.img/Library/kel/24-32-kel.mp3", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cernium2/sworld2", 100);
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('11', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer('12', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                                                                      cm.npc_LeaveField("oid=38075588");
                                                                                                                                      cm.npc_ChangeController(2570100, "oid=38080687", 254, 145, 3, 204, 304, 0, false, 0, false);
                                                                                                                                      cm.npc_SetSpecialAction("oid=38080687", "summon", 0, 0);
                                                                                                                                      cm.inGameDirectionEvent_SetHideEffect(1);
                                                                                                                                      cm.npc_SetSpecialAction("oid=38080687", "special4", -1, 1);
                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#谎言……都是谎言！给我滚开，你这个幻象！", 36, 2570100, false, true, 1);
                                                                                                                                          cm.effect_Voice("Voice6.img/Library/kel/24-33-kel.1.mp3", 100);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#尽管数百年过去了……我还是偶尔会想起，\r\n从前与老师的那番对话。", 36, 2570107, false, true, 1);
                                                                                                                                              cm.effect_Voice("Voice6.img/Library/prince/24-35-prince.mp3", 100);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#老师……\r\n世间所有的美好事物，为何都只是昙花一现。", 36, 2570107, true, true, 1);
                                                                                                                                                cm.effect_Voice("Voice6.img/Library/prince/24-36-prince.mp3", 100);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……！！", 36, 2570100, true, true, 1);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#你是这么回答的。", 36, 2570107, true, true, 1);
                                                                                                                                                    cm.effect_Voice("Voice6.img/Library/prince/24-37-prince.1.mp3", 100);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#花瓣之美，在于它会纷飞飘落。", 36, 2570100, false, true, 1);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#人也正因此才美丽。", 36, 2570100, true, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                  cm.setNpcSpecialActionReset("oid=38075589");
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#老师说得没错。就像花瓣那样，", 36, 2570107, false, true, 1);
                                                                                                                                                                    cm.effect_Voice("Voice6.img/Library/prince/24-38-prince.mp3", 100);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#就像人一样，因为圣瑞尼亚也注定要毁灭，所以才那样美丽。", 36, 2570107, true, true, 1);
                                                                                                                                                                      cm.effect_Voice("Voice6.img/Library/prince/24-39-prince.mp3", 100);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#……。", 36, 2570100, true, true, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#那么……", 36, 2570100, false, true, 1);
                                                                                                                                                                            cm.effect_Voice("Voice6.img/Library/kel/24-40-kel.mp3", 100);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                              cm.npc_SetSpecialAction("oid=38080687", "special2", -1, 1);
                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我到底……一直以来，我究竟是为了什么……", 36, 2570100, false, true, 1);
                                                                                                                                                                                cm.effect_Voice("Voice6.img/Library/kel/24-41-kel.mp3", 100);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#为了什么而战？", 36, 2570100, true, true, 1);
                                                                                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/24-42-kel.mp3", 100);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哈丁、亚殷、瑞恩、魁格、艾德……我们是为了什么……", 36, 2570100, true, true, 1);
                                                                                                                                                                                    cm.effect_Voice("Voice6.img/Library/kel/24-43-kel.1.mp3", 100);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我是为了什么才把你们……", 36, 2570100, true, true, 1);
                                                                                                                                                                                      cm.effect_Voice("Voice6.img/Library/kel/24-43-kel.mp3", 100);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#老师……", 36, 2570107, true, true, 1);
                                                                                                                                                                                        cm.effect_Voice("Voice6.img/Library/prince/24-45-prince.2.mp3", 100);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你还记得那天的誓约吗。", 36, 2570107, true, true, 1);
                                                                                                                                                                                          cm.effect_Voice("Voice6.img/Library/prince/24-45-prince.5.mp3", 100);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#曾许下数千数万遍的誓约。", 36, 2570107, true, true, 1);
                                                                                                                                                                                            cm.effect_Voice("Voice6.img/Library/prince/24-45-prince.10.mp3", 100);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#誓……约……", 36, 2570100, true, true, 1);
                                                                                                                                                                                              cm.effect_Voice("Voice6.img/Library/kel/24-48-kel.1.mp3", 100);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#你不是发誓，直到最后的最后，只要圣瑞尼亚还剩下一位百姓，就会永远保护他们吗？", 36, 2570107, true, true, 1);
                                                                                                                                                                                                cm.effect_Voice("Voice6.img/Library/prince/24-49-prince.mp3", 100);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#直到最后……最后一名……", 36, 2570100, true, true, 1);
                                                                                                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/24-50-kel.1.mp3", 100);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#！！", 36, 2570100, true, true, 1);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#是的。现在……还有我在。", 36, 2570107, true, true, 1);
                                                                                                                                                                                                      cm.effect_Voice("Voice6.img/Library/prince/24-51-prince.mp3", 100);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#圣瑞尼亚还没有消失。", 36, 2570107, true, true, 1);
                                                                                                                                                                                                        cm.effect_Voice("Voice6.img/Library/prince/24-52-prince.1.mp3", 100);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#靠着这颗鲁碧安，骑士团将会复活。", 36, 2570107, true, true, 1);
                                                                                                                                                                                                          cm.effect_Voice("Voice6.img/Library/prince/24-53-prince.1.mp3", 100);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#借助这鲁碧安……\r\n老师，你就可以遵守你曾许下的永恒誓约了。", 36, 2570107, true, true, 1);
                                                                                                                                                                                                            cm.effect_Voice("Voice6.img/Library/prince/24-54-prince.mp3", 100);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                                                                                                                              cm.npc_SetSpecialAction("oid=38080687", 'special3', -1, 1);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#永恒的……誓约……", 36, 2570100, false, true, 1);
                                                                                                                                                                                                                  cm.effect_Voice("Voice6.img/Library/kel/24-55-kel.mp3", 100);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                    } else if (status === V++) {
                                                                                                                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=38075589");
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=38075590");
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=38075591");
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=38075592");
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=38075593");
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=38076530");
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=38080687");
                                                                                                                                                                                                                      cm.dispose();
                                                                                                                                                                                                                      cm.warp(308090024, 0, false);
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