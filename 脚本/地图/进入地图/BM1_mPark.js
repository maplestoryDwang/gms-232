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
      if (cm.getMapId() == 993061400) {
        cm.updateInfoQuest(35610, "clear=0");
        cm.setPartner(1, 3003675, 80002567, 0);
        cm.addPopupSay(3003675, 2500, "#face0#呃……这边甲板上好像还有很多敌人。", '', 0);
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
      } else {
        if (cm.getMapId() == 993061500) {
          cm.updateInfoQuest(35610, "clear=0");
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
          cm.setPartner(1, 3003675, 80002567, 0);
          cm.addPopupSay(3003675, 2500, "#face0#啊，韩利泰成功了！", '', 0);
          cm.addPopupSay(3003675, 2500, "#face0#在下一次爆炸声响起之前，\r\n再坚持一下！", '', 0);
          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
        } else {
          if (cm.getMapId() == 993061600) {
            cm.updateInfoQuest(35610, "clear=0");
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion7", 100);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
            cm.setPartner(1, 3003675, 80002567, 0);
            cm.addPopupSay(3003675, 2500, "#face0#贝尔好像成功了！！", '', 0);
            cm.addPopupSay(3003675, 2500, "#face0#周围好像变得安静了。", '', 0);
            cm.addPopupSay(3003675, 2500, "#face0#我们马上从这里过去吧。", '', 0);
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
          } else {
            if (cm.getMapId() == 993061700) {
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
            } else {
              if (cm.getMapId() == 993061800) {
                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
              } else {
                if (cm.getMapId() == 993061900) {
                  cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                } else {
                  if (cm.getMapId() == 993065300) {
                    cm.updateInfoQuest(35610, 'clear=0');
                    cm.addPopupSay(3003661, 2500, "#face2#呃……\r\n这里是……诺巴舰队……", '', 0);
                    cm.addPopupSay(3003661, 2500, "#face2#听到的话……\r\n快回答……", '', 0);
                    cm.addPopupSay(3003661, 2500, "#face3#迷雾中的敌人……\r\n太强了。", '', 0);
                    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                  } else {
                    if (cm.getMapId() == 993065400) {
                      cm.updateInfoQuest(35610, "clear=0");
                      cm.addPopupSay(3003661, 2500, "#face3#无数的眼睛……\r\n无数的锁链……", '', 0);
                      cm.addPopupSay(3003661, 2500, "#face2#不，不……\r\n别过来……", '', 0);
                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
                    } else {
                      if (cm.getMapId() == 993065500) {
                        cm.addPopupSay(3003661, 2500, "#face2#呃……\r\n对付不过来了……", '', 0);
                        cm.addPopupSay(3003661, 2500, "#face3#呃……\r\n眼皮……越来越重……", '', 0);
                        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                      } else {
                        if (cm.getMapId() == 993065900) {
                          cm.setPartner(1, 3003674, 80002549, 0);
                          cm.addPopupSay(3003674, 2500, "#face0#请跟我来，#b#ho##k。", '', 0);
                          cm.addPopupSay(3003674, 2500, "#face0#我带你到残骸所在的地方去。", '', 0);
                          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                        } else {
                          if (cm.getMapId() == 993066000) {
                            cm.setPartner(1, 3003674, 80002549, 0);
                            cm.addPopupSay(3003674, 2500, "#face0#嗯……就快到了。", '', 0);
                            cm.addPopupSay(3003674, 2500, "#face0#继续击退敌人，\r\n开辟道路。", '', 0);
                            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
                          } else {
                            if (cm.getMapId() == 993066100) {
                              cm.setPartner(1, 3003674, 80002549, 0);
                              cm.addPopupSay(3003674, 2500, "#face0#在这前面我感觉到了很强的意念。", '', 0);
                              cm.addPopupSay(3003674, 2500, "#face0#必须尽快突破这里。", '', 0);
                              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                            } else {
                              if (cm.getMapId() == 993066500) {
                                cm.addPopupSay(3003659, 2500, "#face0#切……必须向前推进！！", '', 0);
                                cm.addPopupSay(3003659, 2500, "#face0#大家齐心协力，突破这里！！", '', 0);
                                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                              } else {
                                if (cm.getMapId() == 993066600) {
                                  cm.addPopupSay(3003659, 2500, "#face0#小心！！敌人来了！！", '', 0);
                                  cm.addPopupSay(3003659, 2500, "#face0#呃……不……继续上！！", '', 0);
                                  cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                                  cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
                                } else {
                                  if (cm.getMapId() == 993066700) {
                                    cm.addPopupSay(3003659, 2500, "#face0#路被挡住了！！再加把劲！！", '', 0);
                                    cm.addPopupSay(3003659, 2500, "#face0#敌人的数量……实在太多了！！", '', 0);
                                    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                                  } else {
                                    if (cm.getMapId() == 993066800) {
                                      cm.addPopupSay(3003667, 2500, "#face0#士兵们的力量恢复了！！", '', 0);
                                      cm.addPopupSay(3003667, 2500, "#face0#他们正在前进！！", '', 0);
                                      cm.addPopupSay(3003661, 2500, "#face0#有了一线机会！！\r\n必须趁这个机会击退敌人！！", '', 0);
                                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                                    } else {
                                      if (cm.getMapId() == 993066900) {
                                        cm.addPopupSay(3003661, 2500, "#face0#切……连靠近都不可能吗！？", '', 0);
                                        cm.addPopupSay(3003659, 2500, "#face0#必须打起精神……\r\n也许会有同伴在光的指引下过来救我们！！", '', 0);
                                        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                                        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
                                      } else if (cm.getMapId() == 993067000) {
                                        cm.addPopupSay(3003661, 2500, "#face2#已经是极限了……坚持不下去了…….", '', 0);
                                        cm.addPopupSay(3003667, 2500, "#face0#我来为你们进行治疗！！\r\n加油！！", '', 0);
                                        cm.addPopupSay(3003660, 2500, "#face3#不……我必须站起来。\r\n真是惭愧。", '', 0);
                                        cm.addPopupSay(3003659, 2500, "#face2#呃……还没到吗！？", '', 0);
                                        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      cm.dispose();
      cm.getTopMsgFont("必须将区域内的怪物消灭到一定数量以下才能前往下个关卡。", 3, 20, 4, 0, 0);
    }
  }
}