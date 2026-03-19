var status = -1;
var selectionLog = [];
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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400680, "oid=7613313", 901, 401, 60, 851, 951, 1, false, false);
      cm.npc_SetSpecialAction("oid=7613313", "summon", 0, 0);
      cm.setMobImage("PL_MONAD.img/EP1/ACT1/fire_loop", 100);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 808, 391);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_OneTimeAction(29, 100000000);
      cm.sendNewEffects(17, [0, 1000, 2000, 860, 450]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/wind", 128);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face3#……", 37, 9400580, false, true);
            cm.effect_Voice("VoicePL.img/Direction_Q64081/1", 128);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#嗯……你有没有听到什么声音？", 37, 9400580, true, true);
                cm.effect_Voice("VoicePL.img/Direction_Q64081/2", 128);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('#b嗯？', 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#……你仔细听听……好像是哭声……难道只有我听到了？！", 37, 9400580, true, true);
                    cm.effect_Voice("VoicePL.img/Direction_Q64081/3", 128);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/wind", 128);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b只是风声吧，别担心了。", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#……", 37, 9400580, true, true);
                          cm.effect_Voice("VoicePL.img/Direction_Q64081/4", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#b……', 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(7000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#这种时候就觉得一天真长啊。", 37, 9400580, false, true);
                                cm.effect_Voice("VoicePL.img/Direction_Q64081/5", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b你累了吧？来了阿布鲁之后，你应该都没时间休息呢。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#不，我怎么能说累呢。在这种时候还有很多人照顾我，帮助我……", 37, 9400580, true, true);
                                    cm.effect_Voice("VoicePL.img/Direction_Q64081/6", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我真的应该受到这种招待吗？我是不是成为了别人的负担呢？我一直很苦恼。", 37, 9400580, true, true);
                                      cm.effect_Voice("VoicePL.img/Direction_Q64081/7", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b别这么说。艾丽卡已经做得很好了。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……谢谢你。", 37, 9400580, true, true);
                                          cm.effect_Voice("VoicePL.img/Direction_Q64081/8", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#还有……对不起，跟着你来了这里。", 37, 9400580, true, true);
                                            cm.effect_Voice("VoicePL.img/Direction_Q64081/9", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b别这么说啦，如果没有艾丽卡，说不定我根本到不了这里。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b我都没想到有人陪伴是这么让人安心的事情。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……谢谢你，真的。", 37, 9400580, true, true);
                                                  cm.effect_Voice("VoicePL.img/Direction_Q64081/10", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#现在这情景让我想起了在消失的村庄里的那天晚上呢。", 37, 9400580, true, true);
                                                    cm.effect_Voice("VoicePL.img/Direction_Q64081/11", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#今天阿布鲁的夜空也很美啊。", 37, 9400580, true, true);
                                                      cm.effect_Voice("VoicePL.img/Direction_Q64081/12", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b是啊，只有在阿布鲁才能看到这种极光呢。", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#那时……你曾经问过我关于梦的事情吧？", 37, 9400580, true, true);
                                                          cm.effect_Voice("VoicePL.img/Direction_Q64081/13", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我的噩梦……如果说出来似乎就会成真，所以我还没对任何人说过。", 37, 9400580, true, true);
                                                            cm.effect_Voice("VoicePL.img/Direction_Q64081/14", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#但是今天不知怎么似乎能说出来了。", 37, 9400580, true, true);
                                                              cm.effect_Voice("VoicePL.img/Direction_Q64081/15", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#……你能听我说吗？", 37, 9400580, true, true);
                                                                cm.effect_Voice("VoicePL.img/Direction_Q64081/16", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('#b当然了。', 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……我的梦里总是又冷又黑。", 37, 9400580, true, true);
                                                                    cm.effect_Voice("VoicePL.img/Direction_Q64081/17", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#而且总会出现同一个少女。", 37, 9400580, true, true);
                                                                      cm.effect_Voice("VoicePL.img/Direction_Q64081/18", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#那个少女在又黑又冷的森林里被人追着，不停地在逃跑，又不停地跌倒，然后爬起来……又跌倒，直到浑身伤痕累累。", 37, 9400580, true, true);
                                                                        cm.effect_Voice("VoicePL.img/Direction_Q64081/19", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face4#然后，不知道是怎么回事，她就蜷缩着躺在了寒冷的空无一人的雪地上……不知道是累倒了，还是失去了意识……。但是她肯定还活着，我能感觉到。", 37, 9400580, true, true);
                                                                          cm.effect_Voice("VoicePL.img/Direction_Q64081/20", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#每次醒来的时候，我感觉我就是那个少女，非常害怕。不管盖多厚的被子也觉得冷，这个梦实在是太真实了。", 37, 9400580, true, true);
                                                                            cm.effect_Voice("VoicePL.img/Direction_Q64081/21", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#这个梦，同一个梦已经不是梦到一次两次了，半年多了，每天……", 37, 9400580, true, true);
                                                                              cm.effect_Voice("VoicePL.img/Direction_Q64081/22", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#b……那你应该很辛苦吧。", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#……她是不是在向我求助呢？她是不是希望我能做些什么呢？", 37, 9400580, true, true);
                                                                                  cm.effect_Voice("VoicePL.img/Direction_Q64081/23", 128);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face4#每晚都做同样的梦！在那里，父亲也在那个森林里……这绝不是偶然吧？", 37, 9400580, true, true);
                                                                                    cm.effect_Voice("VoicePL.img/Direction_Q64081/24", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom('#b父亲？', 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……是的……父亲……", 37, 9400580, true, true);
                                                                                        cm.effect_Voice("VoicePL.img/Direction_Q64081/25", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#他穿着以前总穿的亚皮纳斯学者服……", 37, 9400580, true, true);
                                                                                          cm.effect_Voice("VoicePL.img/Direction_Q64081/26", 128);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#父亲究竟在那个森林里做什么，有没有救那个少女……我真的不知道。", 37, 9400580, true, true);
                                                                                            cm.effect_Voice("VoicePL.img/Direction_Q64081/27", 128);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4#其实……我来这儿也是因为这个梦。", 37, 9400580, true, true);
                                                                                              cm.effect_Voice("VoicePL.img/Direction_Q64081/28", 128);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#梦里的场景和这个阿布鲁沉睡森林太像了。", 37, 9400580, true, true);
                                                                                                cm.effect_Voice("VoicePL.img/Direction_Q64081/29", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#b少女逃跑的森林？", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#没错，虽然也许会有人……嘲笑我一个学者居然会因为一个梦跑到这里来，但万一这里有什么线索……", 37, 9400580, true, true);
                                                                                                    cm.effect_Voice("VoicePL.img/Direction_Q64081/30", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#所以我明知有危险，明知会成为负担，还是跟着#h0#来了，抱歉。", 37, 9400580, true, true);
                                                                                                      cm.effect_Voice("VoicePL.img/Direction_Q64081/31", 128);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#b你找到线索了吗？", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3#……没有，完全没有。", 37, 9400580, true, true);
                                                                                                          cm.effect_Voice("VoicePL.img/Direction_Q64081/32", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#我也不知道我在期待些什么。我是期待能在森林里见到那个少女呢，还是期待能找到父亲的线索呢……", 37, 9400580, true, true);
                                                                                                            cm.effect_Voice("VoicePL.img/Direction_Q64081/33", 128);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#b比起什么都不做，你这样的行为已经很伟大了。", 57, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#b你正在为了解决问题而努力啊。", 57, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.askMenu_Bottom("#face0#哈哈，谢谢你……#h0#和我的朋友说的一样呢。#b\r\n#L0#应该不是凯恩吧？#l\r\n#L1#看来你的朋友也和我一样很聪明啊。#l", 37, 9400580);
                                                                                                                  cm.effect_Voice("VoicePL.img/Direction_Q64081/34", 128);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.askMenu_Bottom("#face0#虽然凯恩也是我的好朋友，不过我刚才说的是另一个朋友。#b\r\n#L0#请再跟我详细说说吧。#l\r\n#L1#我真想见见他呢。#l", 37, 9400580);
                                                                                                                    cm.effect_Voice("VoicePL.img/Direction_Q64081/35", 128);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face2#薇蓓蕾，那个朋友叫薇蓓蕾。她是我唯一的家人、朋友也是妹妹。", 37, 9400580, false, true);
                                                                                                                      cm.effect_Voice("VoicePL.img/Direction_Q64081/37", 128);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face2#我们从小就在一起。这次分开这么久还是第一次呢。", 37, 9400580, true, true);
                                                                                                                        cm.effect_Voice("VoicePL.img/Direction_Q64081/38", 128);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.askMenu_Bottom("#face3#早知道就一起来了……#b\r\n#L0#那个朋友也是学者吗？#l\r\n#L1#你不是说有父亲吗？#l", 37, 9400580);
                                                                                                                          cm.effect_Voice("VoicePL.img/Direction_Q64081/39", 128);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯~！不是，不是学者。但是她比我更聪明。", 37, 9400580, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#b比最年轻的学者艾丽卡还聪明？", 57, 0, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#对……她比我聪明多了。其实我从小就一直只知道学习，做得好是理所应当的。", 37, 9400580, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#但是那个朋友……她天生就很聪明，而且想得很深入。", 37, 9400580, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#b……你羡慕她吗？", 57, 0, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.askMenu_Bottom("#face0#比起羡慕，我更感谢身边有她这样的朋友。#b\r\n#L0#从小就学习，不累吗？#l\r\n#L1#告诉我更多关于你朋友的事情吧。#l", 37, 9400580);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#当然累了……因为就算做得好也很少会被称赞。", 37, 9400580, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#即使在考试中取得第一，父亲也毫不关心，周围的人还会说我是因为父亲的关系才能考那么好。", 37, 9400580, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我非常讨厌那样的话，所以比谁都努力。为了不被别人抓到把柄，一直是小心又小心。", 37, 9400580, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#然后因此我成为了最年轻的见习学者哦？这个真的是我努力的成果，真的！真的！", 37, 9400580, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#b真帅气啊，艾丽卡。虽然我没能在你身旁见证你的成长，但你应该很辛苦吧。你没有放弃，真的做的很好，真的。", 57, 0, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.askMenu_Bottom("#face0#……“努力是实现梦想的最佳方法。” 这是我最喜欢的一句话。多亏了这句话，我才能不放弃。#b\r\n#L0#我能问问你的梦想是什么吗？#l\r\n#L1#原来如此。#l", 37, 9400580);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#嗯……有点害羞啊……", 37, 9400580, false, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("#b世界上没有让人害羞的梦想。用身为高级学者的爸爸的钱一辈子不用工作只顾玩乐，你的梦想肯定不是这个吧？", 57, 0, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face2#哈哈，当然了。嗯……你要对凯恩保密哦。", 37, 9400580, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("#b虽然不知道为什么，但我不会说出去的。", 57, 0, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#我从出生之后就没离开过亚皮纳斯总部。", 37, 9400580, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#不管从时间上还是距离上，现在这个派遣都是我人生最长的一次旅行和冒险。", 37, 9400580, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#……我的梦想是……在未知的世界中旅行！", 37, 9400580, true, true);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#前往未开化之地，在单纯的人们中间，分享我的知识，帮助他们。是不是很帅？！", 37, 9400580, true, true);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b是很帅气，但是为什么要对凯恩保密呢？", 57, 0, true, true);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#因为在我的想象中，凯恩和薇蓓蕾都和我在一起……我想和他们一起去，和我重要的人一起……", 37, 9400580, true, true);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b凯恩知道的话，应该会很高兴吧？", 57, 0, true, true);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#嗯……爸爸可能会知道啊……嗯！这个是秘密，#h0#也要保密哦。", 37, 9400580, true, true);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.askMenu_Bottom("#face0##h0#，那个……你想加入亚皮纳斯吗？#b\r\n#L0#成为亚皮纳斯骑士？#l\r\n#L1#为什么？#l", 37, 9400580);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#虽然那样就更好了，但还是有些困难吧？#h0#还有自己想做的和需要做的事情。", 37, 9400580, false, true);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.askMenu_Bottom("#face0#我想谢谢#h0#。你就当做是休假，来休息下再走吧。我还可以介绍薇蓓蕾给你。#b\r\n#L0#谢谢你的提议，但是我没时间休息了。#l\r\n#L1#如果你邀请我的话，我随时都可以。#l", 37, 9400580);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#好的！你可不能反悔哦！等这个事情解决后，我们就一起去亚皮纳斯，说好了！", 37, 9400580, false, true);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b我知道了，现在太晚了，睡吧。", 57, 0, true, true);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#啊~~ 那倒也是……在这里睡着的话……明早还能活着吗……", 37, 9400580, true, true);
                                                                                                                                                                                      cm.effect_Voice("VoicePL.img/Direction_Q64081/40", 128);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#b当然了，别担心了，快点先睡吧。", 57, 0, true, true);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0##h0#呢？", 37, 9400580, true, true);
                                                                                                                                                                                          cm.effect_Voice("VoicePL.img/Direction_Q64081/41", 128);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#b我也马上就睡了，明天开始又要赶紧赶路了啊……", 57, 0, true, true);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#好的，我知道了。", 37, 9400580, true, true);
                                                                                                                                                                                              cm.effect_Voice("VoicePL.img/Direction_Q64081/42", 128);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.sendNormalTalk_Bottom('#b……', 57, 0, true, true);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0##h0#~！不要太担心了，老婆婆会没事的。", 37, 9400580, true, true);
                                                                                                                                                                                                  cm.effect_Voice("VoicePL.img/Direction_Q64081/43", 128);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#他们说沉睡森林的呼吸与你同在。", 37, 9400580, true, true);
                                                                                                                                                                                                    cm.effect_Voice("VoicePL.img/Direction_Q64081/44", 128);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#我一直在想居民们的这句话是什么意思，今天终于明白了。", 37, 9400580, true, true);
                                                                                                                                                                                                      cm.effect_Voice("VoicePL.img/Direction_Q64081/45", 128);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我想说不定，正是沉睡森林的呼吸将我们带来了这里。", 37, 9400580, true, true);
                                                                                                                                                                                                        cm.effect_Voice("VoicePL.img/Direction_Q64081/46", 128);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#b没错，就是那样的。", 57, 0, true, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#所以别担心了。", 37, 9400580, true, true);
                                                                                                                                                                                                            cm.effect_Voice("VoicePL.img/Direction_Q64081/47", 128);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#b……", 57, 0, true, true);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#那我就先睡了！", 37, 9400580, true, true);
                                                                                                                                                                                                                cm.effect_Voice("VoicePL.img/Direction_Q64081/48", 128);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face2#晚安，#h0#！", 37, 9400580, true, true);
                                                                                                                                                                                                                  cm.effect_Voice("VoicePL.img/Direction_Q64081/49", 128);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#b晚安，艾丽卡。", 57, 0, true, true);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=7613313");
                                                                                                                                                                                                                      cm.npc_LeaveField("oid=7613313");
                                                                                                                                                                                                                      cm.npc_ChangeController(9400580, "oid=7614391", 901, 401, 60, 851, 951, 1, true, false);
                                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=7614391", "summon", 0, 0);
                                                                                                                                                                                                                      cm.npc_SetSpecialAction("oid=7614391", 'sleep', -1, 0);
                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom('#face0#嗯……', 37, 9400580, false, true);
                                                                                                                                                                                                                            cm.effect_Voice("VoicePL.img/Direction_Q64081/50", 128);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#……你去……哪儿……", 37, 9400580, true, true);
                                                                                                                                                                                                                              cm.effect_Voice("VoicePL.img/Direction_Q64081/51", 128);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#呃……呜呜……", 37, 9400580, true, true);
                                                                                                                                                                                                                                cm.effect_Voice("VoicePL.img/Direction_Q64081/52", 128);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#b……是在做噩梦吗……", 57, 0, true, true);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                                                                                                    cm.warp(867201603, 0);
                                                                                                                                                                                                                                    cm.updateInfoQuest(64081, "dir=1");
                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7614391");
                                                                                                                                                                                                                                    cm.npc_LeaveField("oid=7614391");
                                                                                                                                                                                                                                    cm.dispose();
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
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;