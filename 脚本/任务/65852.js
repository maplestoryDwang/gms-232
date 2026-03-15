var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("吼吼……今天依旧玲珑剔透……今天依旧精美壮观……", 4, 9010010, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("卡珊德拉！我一直很好奇，那个水晶球到底是什么？你怎么天天拿着它观察……", 2, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("哎呀，你好，#h0#？我已经带着这个水晶球好久了，你现在才有兴趣吗？", 4, 9010010, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("不是，唔……我只是发现你每天都在看它，想知道里面究竟有什么，能看见什么而已。", 2, 0, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("吼吼……这里面摆满~~~~了符合我喜好的东西。\r\n我把自己在冒险岛世界各处找到的好东西全都放了进去。", 4, 9010010, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("看样子……#h0#你也想拥有吧，对吧？", 4, 9010010, true, true);
              } else {
                if (status === v++) {
                  cm.askYesNo("怎么样？你要不要按照自己的喜好，制作专属的冒险岛水晶球试试？", 4, 9010010);
                } else {
                  if (status === v++) {
                    cm.updateInfoQuest(65858, "part4=0;part5=0;part6=0;part7=0;part8=0;part9=0;lv=1;part10=0;part11=0;part12=0;part0=0;part1=0;part2=0;part3=0");
                    cm.updateInfoQuest(65859, "check=10000000000");
                    cm.updateInfoQuest(65860, "check=10000000000");
                    cm.updateInfoQuest(65861, "check=100000000000");
                    cm.updateInfoQuest(65862, "check=100000");
                    cm.updateInfoQuest(65863, "check=10000000000");
                    cm.updateInfoQuest(65864, "check=1000000000");
                    cm.updateInfoQuest(65865, "check=1000000000000");
                    cm.updateInfoQuest(65866, "check=10000000000");
                    cm.updateInfoQuest(65867, "check=100000000000");
                    cm.updateInfoQuest(65868, "check=100000000000000000000");
                    cm.updateInfoQuest(66012, "check1a=00000000;check1b=00000;check3a=0000000;check3b=00000;check2=000000");
                    cm.updateInfoQuest(65909, "access=1;lastDate=210526");
                    cm.forceCompleteQuest(65852);
                    cm.forceStartQuest(65855, '');
                    cm.forceStartQuest(65856, '');
                    cm.updateInfoQuest(65852, "count=0;use=0;lastDate=" + cm.getNowTimeString(3));
                    cm.sendNormalTalk("吼吼，给你#i3018622:# #e#b#t3018622:##n#k。\r\n对了！我还要告诉你应该怎么装扮才对！差点就忘了呢！", 4, 9010010, false, true);
                    cm.gainItem(3018622, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("在冒险岛世界游历的过程中，你会在各个地方获得#r#e装扮材料#k#n。", 4, 9010010, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("#r#e装扮材料#k#n可以通过冒险岛世界各处的#b#e浓缩水晶气息#k#n，#b#e狩猎怪物#k#n，#b#e完成每日任务#k#n等获得。", 4, 9010010, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("对了！完成#b#e隐藏任务#k#n后还能得到礼物，记得一定要好好观察周围哦！", 4, 9010010, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("有树木、椅子、可爱的手办、结实的背景、闪亮的玻璃、还有华丽的发光特效，努力去寻找吧！", 4, 9010010, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("另外，我特别使用了一些力量，为你建造了大~~~~大的水晶球，这样你就可以在里面休息啦。", 4, 9010010, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("记住，那里面的姿势和表情是可以得到的哦。", 4, 9010010, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("还有最后的王牌！你的水晶球还添加了能够播放你喜爱音乐的音乐盒功能！\r\n如果能以舒适的姿势坐在椅子上，听着令人心神宁静的音乐……", 4, 9010010, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("还有什么比这更好呢！不是吗？", 4, 9010010, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk("材料有很多，其中一定会有符合#h0#你喜好的吧？吼吼。", 4, 9010010, true, true);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk("但是……这一切#e#b无法一次性完成#k#n。", 4, 9010010, true, true);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk("#i3018622:# #e#b#t3018622:##n#k如果一次性装扮得过于细致，使用过多材料，可能会损坏。", 4, 9010010, true, true);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk("所以为了维持更加结实的外形，必须让它成长才行。\r\n记住，狩猎#r#e等级范围怪物#k#n后，使用出现的#i2632545:# #e#t2632545:##n，接收它的气息，一点一点得到力量，就可以使水晶球成长，装扮#r更多外形#k。\r\n\r\n #fc0xFFAAAAAA#- 等级范围怪物：以角色等级为基准，-20级到+20级范围内的怪物#k", 4, 9010010, true, true);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk("啊，对了……#i3018622:# #e#b#t3018622:##n#k#r#e只能在村庄里装扮#k#n。\r\n这是为了让大家能够安静下来装扮水晶球，请你谅解。", 4, 9010010, true, true);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk("嗯哼……我好像已经把所有内容都告诉你了呢？", 4, 9010010, true, true);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk("接下来，通过#i3018622:# #e#b#t3018622:##n#k表现出你的喜好，装扮它试试吧！", 4, 9010010, true, false);
                                                } else if (status === v++) {
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}