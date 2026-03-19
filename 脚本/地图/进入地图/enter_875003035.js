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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401278, "oid=2153754", -615, -20, 3, -665, -565, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153754", "summon", 0, 0);
      cm.npc_ChangeController(9401277, "oid=2153755", -530, -85, 1, -580, -480, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153755", "summon", 0, 0);
      cm.npc_ChangeController(9401286, "oid=2153756", -370, -85, 1, -420, -320, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153756", 'summon', 0, 0);
      cm.npc_ChangeController(9401285, "oid=2153757", -295, -85, 1, -345, -245, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153757", "summon", 0, 0);
      cm.npc_ChangeController(9401289, "oid=2153758", -225, -85, 1, -275, -175, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153758", 'summon', 0, 0);
      cm.sendNewEffects(17, [0, 1000, 1500, -715, 0]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
            cm.sendNormalTalk_Bottom("#face8#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "! ", 37, 9401277, false, true, 1);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2153755", -1, 10, 100);
              cm.sendNormalTalk_Bottom("#face3#怎么样了？", 37, 9401278, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4##b……大师兄……让他给跑了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face8#没关系。你能平安回来……就好。", 37, 9401277, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=2153755", 1);
                    cm.sendNormalTalk_Bottom("#face8#对了，师兄们醒了。", 37, 9401277, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2153754", 1);
                      cm.sendNewEffects(12, [1000, -400, 0]);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5##b师兄！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 230);
                          cm.sendNormalTalk_Bottom('墨玄，原来是你啊……', 37, 9401289, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5##b师兄，师姐！你们没事吧？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=2153756", -1, 20, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=2153756", -1);
                                  cm.npc_SetForceMove("oid=2153756", 1, 20, 100);
                                  cm.sendNormalTalk_Bottom("怎么样？", 37, 9401286, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3##b什么……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("内功……完全使不出来了……", 37, 9401286, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("一辈子……的努力……就这样……", 37, 9401289, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2153755", 1, 10, 100);
                                            cm.sendNormalTalk_Bottom("#face8#一定有办法！", 37, 9401277, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("… ", 37, 9401289, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face8#……活着才是最重要的，不是吗！一切从头开始就行！", 37, 9401277, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("……别说得那么轻松……", 37, 9401289, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("你还不如让我死了算了……墨玄……", 37, 9401289, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=2153756", 1);
                                                      cm.npc_setForceFlip("oid=2153757", 1);
                                                      cm.sendNormalTalk_Bottom("#face0#真卑鄙。怎么能对救了自己的" + (cm.getPlayer().getGender() == 0 ? '师弟' : '师妹') + "说那种话。", 37, 9401285, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我……放弃了。我累了。玄山派……已经……", 37, 9401289, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#可恶的家伙。", 37, 9401285, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2153758", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=2153758", 1, 1000, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.Npc_Fadeout("oid=2153758", 0, 1000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2153756", -1);
                                                                  cm.npc_setForceFlip("oid=2153757", -1);
                                                                  cm.sendNormalTalk_Bottom("……我们的内功全部被夺走了。他们应该为了吸收内功……才让我们活了下来。", 37, 9401285, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face8#师姐……师兄……", 37, 9401277, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face8#虽然……失去了内功，但毕生修炼的拳法还在。\r\n希望你们能帮我教导那些年幼的弟子！", 37, 9401277, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('当然。我一定要报仇。', 37, 9401285, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("我……没有自信继续走学武之路了。", 37, 9401286, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("云浩，连你也！", 37, 9401285, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("……听我把话说完。\r\n但是我就算是死，也是玄山派的弟子。", 37, 9401286, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("我会留在玄山派……找点自己能做的事。", 37, 9401286, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#谢谢你们，师姐！师兄！", 37, 9401277, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("不用谢。\r\n你们真的……长大了。", 37, 9401285, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face4##b那当然。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("我会努力不当累赘的，玄儿，素笑。", 37, 9401285, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=2153754", 1, 5, 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#嗯……你一定很累了，但是和黑道还有大师兄有关的事情不能不说。", 37, 9401278, false, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("这位是……？", 37, 9401285, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#啊！这位是丐帮河津分舵主风乞丐大侠。他帮了我们很多忙。", 37, 9401277, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face3#幸会！我叫风乞丐。", 37, 9401278, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我是玄山派云景。谢谢你帮助我的师弟师妹们。", 37, 9401285, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face3#客套就免了，先说正事吧。\r\n现在知道那天发生的事情的人，好像只有你们两个。", 37, 9401278, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("……那天傍晚和平常没什么两样。大家吃完晚饭后，回到各自的房中修习。\r\n由于最近开始早起修炼，到了傍晚所有人都像散了架一样。", 37, 9401285, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("就在那时，外面传来了高喊声和爆炸声。听到声音之后，大家都跑了出去。", 37, 9401285, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("入侵者，是入侵者。\r\n发现入侵者的人刚想运用内力……", 37, 9401285, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face6##b……散功毒……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("是的。一运内功，便感觉气血翻涌，然后就倒了下去。", 37, 9401285, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face6##b为、为什么要对玄山派……到底是为了什么……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("入侵者们好像在寻找什么东西。他们把玄山派翻了个底朝天，最后什么都没有找到。\r\n我听有个被他们称为长老的人在大发雷霆，看来是没能如愿。", 37, 9401285, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("之后他们……把所有人……好像是不想留任何活口……", 37, 9401285, true, true, 1);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("其中几个晕过去的人，包括我和云浩在内，被带到了他们居住的地下仓库……\r\n为了吸收内功。", 37, 9401285, true, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("虽然长老受了重伤，但她吸收了内功之后，好像在迅速恢复。", 37, 9401285, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face3#吸收内功的武功……好像听说过……", 37, 9401278, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face3#（……难道是失传的魔功？那事情也许比想象得更加严重……）", 37, 9401278, true, true, 1);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face6##b大师兄……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("中间我晕了过去，所以没看见，但是应该……", 37, 9401285, true, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("我全都看到了。看到魔教长老从倒下的师兄弟身上吸收内功，他匍匐在地乞求他们接受自己……咯吱。", 37, 9401286, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face5##b下毒药的人也是大师兄吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("在晚饭之前没有发现入侵者，所以……", 37, 9401286, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("等我醒过来的时候，他已经和那些黑道人物勾结在了一起。\r\n为了掩人耳目，他把自己住过的地方和所有东西都一把火烧掉了。\r\n留我们一条生路……是因为还拥有最后一丝良心吗……", 37, 9401285, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face5##b……原来如此。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face4##b谢谢你说了这么多。\r\n你一定累了吧？快去休息一下吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("是啊……明天又是漫长的一天。", 37, 9401285, true, true, 1);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.teachSkill(170000001, 3, 10);
                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/skillUp", 100);
                                                                                                                                                  cm.getTopMsgFont("<玄山气势>技能的等级提升。", 3, 20, 20, 0, 0);
                                                                                                                                                  cm.npc_setForceFlip("oid=2153756", 1);
                                                                                                                                                  cm.npc_setForceFlip("oid=2153757", 1);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.npc_SetForceMove("oid=2153756", 1, 1000, 100);
                                                                                                                                                    cm.npc_SetForceMove("oid=2153757", 1, 1000, 100);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.Npc_Fadeout("oid=2153756", 0, 1000);
                                                                                                                                                      cm.Npc_Fadeout("oid=2153757", 0, 1000);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                                          cm.sendNewEffects(12, [1000, -450, 0]);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face8#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '……你没事吧？', 37, 9401277, false, true, 1);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0##b听了都不敢相信。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face8#我也一样……", 37, 9401277, true, true, 1);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face6##b……在码头上见到了大师兄。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##b（如果是之前的我……如果没有武神之力……我绝对赢不了。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0##b……就算再打一次，我也没有必胜的信心。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face8#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "… ", 37, 9401277, true, true, 1);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4##b素笑，我需要可以保护所有人的力量。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom('#face0#好的！' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，我来帮你。", 37, 9401277, true, true, 1);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face4##b不……这次我想明白了。\r\n我需要的不是继续修炼，而是实战。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#你是说……", 37, 9401277, true, true, 1);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face4##b素笑……抱歉把这么重的责任推给你。你能帮我暂时照看一下玄山派吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face8#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "… ", 37, 9401277, true, true, 1);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face4#……交给我吧！别小看我！我可是素笑！", 37, 9401277, true, true, 1);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom('#face3#' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，在你回来之前……我会照看好玄山派。\r\n别担心！", 37, 9401277, true, true, 1);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face4##b谢谢。为了不让这种事情再次发生，我一定要变得更强。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#嗯！" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '，我相信你！', 37, 9401277, true, true, 1);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.forceCompleteQuest(65948);
                                                                                                                                                                                                cm.gainExp(11433);
                                                                                                                                                                                                cm.updateInfoQuest(65999, "training=2;right=1;main=1;entrance=1;left=2;f1=3");
                                                                                                                                                                                                cm.updateInfoQuest(65999, "f4=1;training=2;right=1;main=1;entrance=1;left=2;f1=3");
                                                                                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNewEffects(19, [0]);
                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2153754");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2153755");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2153756");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2153757");
                                                                                                                                                                                                    cm.npc_LeaveField("oid=2153758");
                                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                                    cm.warp(875000001, 2, false);
                                                                                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}