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
      cm.setNumberForQuestInfo(35601, "map", cm.getMapId());
      cm.npc_ChangeController(3003668, "oid=275725", -559, 58, 4, -609, -509, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275726', 647, 58, 1, 597, 697, 1, true, 0, false);
      cm.npc_ChangeController(3003668, "oid=275727", -413, 58, 4, -463, -363, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275728', 741, 58, 1, 691, 791, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275729", 924, 58, 1, 874, 974, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275730', 835, 58, 1, 785, 885, 1, true, 0, false);
      cm.npc_ChangeController(3003612, "oid=275731", 304, 58, 2, 254, 354, 1, false, 0, false);
      cm.npc_ChangeController(3003634, "oid=275732", -39, 58, 3, -89, 11, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -200, 70);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.updateInfoQuest(35162, "12=h1");
          cm.updateInfoQuest(35162, "12=h1;34=h0");
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 220, 70);
            } else {
              if (status === V++) {
                cm.effect_Text(["#fn黑体##fs18#稍后，白色之矛左舷。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.updateInfoQuest(35611, "d30=1");
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
                      } else {
                        if (status === V++) {
                          cm.setStandAloneMode(false);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.curNodeEventEnd(true);
                          cm.setInGameDirectionMode(true, false, true);
                          cm.setStandAloneMode(true);
                          cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
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
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 220, 70);
                              } else {
                                if (status === V++) {
                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), 130, 40);
                                  cm.sendNormalTalk_Bottom("#face0#详细内容……最好和赫丽娜一起听听吧。\r\n那就请你暂时等一下……。", 37, 3003651, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.askAcceptDecline_Bottom("#face0#我们打算和#h0#一起思考下在#b神秘河#k的事情，\r\n怎么样？", 37, 3003651);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("嗯，好的。", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#结合你的冒险日志和沃莉的报告书，我了解到了基本的情况。", 37, 3003651, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#真是……让人叹为观止。", 37, 3003651, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer("world", "Map/WorldMap/WorldMap082.img/BaseImg", 0, 1000, 0, -80, 0, 4, 1);
                                                cm.sendNormalTalk_Bottom("#face0#从消亡旅途到埃斯佩拉，\r\n你总共通过了#b六个地区#k，遭遇到了#r三名军团长#k。", 37, 3003651, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#一定遇到了不少的困难，不过你做得很好。", 37, 3003651, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#好了，让我们从头开始慢慢梳理一遍吧。", 37, 3003651, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('world', '', 2, 500, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer('town0', "Map/Effect3.img/Arcanetown/0", 0, 1000, 0, 0, 0, 4, 1);
                                                        cm.sendNormalTalk_Bottom("#face0#最开始是#b消亡旅途#k。", 37, 3003651, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#正在不断风化的村庄和失去记忆的存在……", 37, 3003651, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer("town0", '', 2, 500, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_ProcessOnOffLayer("kao", "Map/Effect2.img/ArcaneRiver1/tree3", 0, 1500, 0, -80, 0, 4, 1);
                                                              cm.sendNormalTalk_Bottom("#face0#虽然陷入了陷阱，也付出了牺牲，但最终还是顺利通过了那里。", 37, 3003651, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer("kao", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer("town1", "Map/Effect3.img/Arcanetown/1", 0, 1000, 0, 0, 0, 4, 1);
                                                                  cm.sendNormalTalk_Bottom("#face0#接下去是#b啾啾岛#k。", 37, 3003651, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#那是个有着很多奇怪动物的地方。", 37, 3003651, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('town1', '', 2, 500, 0, 0, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer("fight", "Map/Effect2.img/ArcaneRiver2/fight", 0, 1000, 0, -80, 0, 4, 1);
                                                                        cm.sendNormalTalk_Bottom("#face0#你为巨人穆托准备了巨大的三明治。", 37, 3003651, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#这好像是一段愉快的冒险。", 37, 3003651, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('fight', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_ProcessOnOffLayer('town2', "Map/Effect3.img/Arcanetown/2", 0, 1000, 0, 0, 0, 4, 1);
                                                                              cm.sendNormalTalk_Bottom("#face0#接下去是……#b梦之都拉克兰#k。夜夜笙歌背后隐藏的恐怖……", 37, 3003651, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#那是个充满了军团长路西德的恶趣味的地方。", 37, 3003651, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_ProcessOnOffLayer("town2", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect3.img/Lacheln/1", 0, 1000, 0, -80, 15, 4, 1);
                                                                                    cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect3.img/Lacheln/3", 0, 1000, 0, -80, 15, 4, 1);
                                                                                    cm.sendNormalTalk_Bottom("#face0#她是个不好对付的敌人，你一定经历了一场苦战吧？", 37, 3003651, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("路西德确实很强，但是有很多人帮助了我。", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#原来如此。真是万幸。", 37, 3003651, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                          cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_ProcessOnOffLayer("town3", "Map/Effect3.img/Arcanetown/3", 0, 1000, 0, 0, 0, 4, 1);
                                                                                            cm.sendNormalTalk_Bottom("#face0#接下去到达的地方……是#b神秘森林阿尔卡那#k。", 37, 3003651, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#沃莉的报告书上说……那里有很多可爱的精灵。", 37, 3003651, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_ProcessOnOffLayer('town3', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction19.img/effect/arcana/3", 0, 1000, 0, -80, 12, 4, 1);
                                                                                                  cm.sendNormalTalk_Bottom("#face0#最让人瞩目的，是一个叫#r塔纳#k的人物。", 37, 3003651, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#由于塔纳的出现，森林中出现了异常现象，是吧？", 37, 3003651, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("没错。", 57, 0, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#之后，你去追踪塔纳……", 37, 3003651, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_ProcessOnOffLayer("town4", "Map/Effect3.img/Arcanetown/4", 0, 1000, 0, 0, 0, 4, 1);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#你第一次和塔纳遭遇的地方，是在#b记忆沼泽莫拉斯#k。", 37, 3003651, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#塔纳暴走的力量，让#fs18##r过去的克里蒂亚斯#k#fs16#重现于世……", 37, 3003651, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#上面写着“重现了过去沉睡的克里蒂亚斯的悲剧”。", 37, 3003651, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_ProcessOnOffLayer('town4', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("tana", "Map/Effect3.img/morass/noSpine/tanaopen", 0, 1000, 0, -80, 15, 4, 1);
                                                                                                                    cm.sendNormalTalk_Bottom("#face0##r军团长阿卡伊勒#k想吸收塔纳的力量，结果自己却遭到了毁灭，是吧？", 37, 3003651, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#对于邪恶之人，这个结局真是再合适不过。", 37, 3003651, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("tana", '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_ProcessOnOffLayer("town5", "Map/Effect3.img/Arcanetown/5", 0, 1000, 0, 0, 0, 4, 1);
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#最后是#b太初之海埃斯佩拉#k。", 37, 3003651, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0##b军团长威尔#k出现，用#b塔纳#k作为祭品举行仪式……", 37, 3003651, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#但是突然有个#b神秘的强者#k出现，对仪式进行妨碍。", 37, 3003651, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("那个人到底是谁？", 57, 0, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#这个嘛……还需要进一步的调查。", 37, 3003651, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("town5", '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0##r塔纳#k的身份是后来才发现的，对吧？\r\n收到报告之后，我也非常吃惊。", 37, 3003651, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.fieldEffect_ProcessOnOffLayer('01', "Map/Effect3.img/esfera/decide/1", 0, 1000, 0, -80, 12, 4, 1);
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#没想到塔纳的真实身份，竟然是#fs18##b光之超越者艾欧娜#k#fs16#。", 37, 3003651, false, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#总之，你和#r军团长威尔#k战斗，成功地击败了他。但是……", 37, 3003651, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#你#r拒绝为了阻止仪式而杀死塔纳#k。", 37, 3003651, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#结果白太阳和黑月融合，形成了#fs18##r泰涅布里斯#k#fs16#。", 37, 3003651, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#现在黑魔法师拥有了光明和黑暗，即创造和破坏的力量。", 37, 3003651, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#也就是说，他具备了抹杀当前的世界，#fs18##r创造出新世界#k#fs16#\r\n的一切条件。", 37, 3003651, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
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
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#到此为止，我简单地梳理了一下#b神秘河#k的故事……\r\n不过有件事刚才忘了说。", 37, 3003651, false, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0##r军团长威尔#k说你是#b对抗者#k。", 37, 3003651, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom('是的。', 57, 0, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我不是跟你说过，在#r黑魔法师#k的研究室中发现了很多文件吗？\r\n其中就有与此有关的内容。", 37, 3003651, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0##fs18#[只有怀抱封印石的对抗者才能违抗不灭的命运。]", 37, 3003651, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom('！？', 57, 0, true, true);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#这是黑魔法师说的话，我们也不能尽信。\r\n除此之外，没有任何其他佐证或者资料。", 37, 3003651, true, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#但是现在我们即将#fs18##r和神开战#k#fs16#……\r\n有可以一搏的机会就已经很不错了。", 37, 3003651, true, true);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.npc_ChangeController(3003658, "oid=2201349", -850, 30, 5, -900, -800, 0, true, 0, false);
                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=2201349", "summon", 0, 0);
                                                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -720, 70);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.npc_SetForceMove("oid=2201349", 1, 740, 150);
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, -300, 70);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
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
                                                                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 200, 70);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#啊，正好赫丽娜来了。\r\n赫丽娜现在正在处理各地的变故。", 37, 3003651, false, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你应该也感觉到了，现在包括冒险岛世界在内的这个世界，\r\n正因为次元崩溃发生着各种变故。", 37, 3003651, true, true);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face1#在击败黑魔法师之前，如果世界就此崩溃的话……\r\n那一切就毫无意义了。", 37, 3003658, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#总之，赫丽娜和一些地区代表决定留在这里。\r\n我们必须守护我们生活的这个地方。", 37, 3003651, false, true);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#好的，说明到这里应该就足够了。\r\n那就进入最重要的部分吧。", 37, 3003651, false, true);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.forceStartQuest(35609, '');
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=2201349");
                                                                                                                                                                                                                          cm.npc_LeaveField("oid=2201349");
                                                                                                                                                                                                                          cm.updateInfoQuest(35162, "12=h1;34=h1");
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
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                  cm.curNodeEventEnd(true);
                                                                                                                                                                                                                                  cm.setInGameDirectionMode(true, false, true);
                                                                                                                                                                                                                                  cm.setStandAloneMode(true);
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
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
                                                                                                                                                                                                                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 130, 40);
                                                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我要说的是关于前哨基地的神秘女神像的事情。\r\n你应该知道，那是一团光球变成的女神像。", 37, 3003651, false, true);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#（根据调查结果，好像是勇士们的心愿让光变成了女神像。\r\n同样，勇士们的心愿聚集在一起，让女神手上的宝珠发生了变化。） ", 37, 3003651, true, true);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#但是以我们的力量，无法查明那个声音所说的机会到底是指什么。\r\n我们只能继续关注女神像的变化。", 37, 3003651, true, true);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#赫丽娜，出征的时间就在眼前了。\r\n在出发之前，我先来跟你说说剩下的事情吧。", 37, 3003651, true, true);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#（南哈特和赫丽娜围绕出征要做的工作聊了好一会儿。\r\n之后，南哈特好像拜托了赫丽娜什么事。）", 37, 3003651, true, true);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#好了，我先去把剩下的事情搞定。\r\n赫丽娜，冒险岛世界就拜托你了。", 37, 3003651, false, true);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#愿我们的计划可以成功，南哈特。", 37, 3003658, true, true);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
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
                                                                                                                                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                                                                                                                cm.updateInfoQuest(35162, "12=h0;34=h1");
                                                                                                                                                                                                                                                                cm.forceCompleteQuest(35609);
                                                                                                                                                                                                                                                                cm.gainExp(85793345);
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
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}