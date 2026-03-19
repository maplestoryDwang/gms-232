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
      if (cm.getMapId() == 993068600) {
        cm.setPartner(1, 3003770, 80002582, 0);
        cm.addPopupSay(3003770, 2500, "#face3#你干嘛要敲墙啊？！", '', 0);
        cm.addPopupSay(0, 2500, "#face0#似乎有什么闪闪发光的东西……", '', 0);
        cm.addPopupSay(3003770, 2500, "#face3#你连那是什么都不知道就瞎弄？！", '', 0);
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
        cm.dispose();
      } else {
        if (cm.getMapId() == 993068700) {
          cm.setPartner(1, 3003770, 80002582, 0);
          cm.addPopupSay(3003770, 2500, "#face2#咻……我还真不知道原来你这么莽撞啊。", '', 0);
          cm.addPopupSay(0, 2500, "#face0#我以后会小心的。", '', 0);
          cm.addPopupSay(3003770, 2500, "#face3#……事情已经发生了，以后小心有什么用？", '', 0);
          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
          cm.dispose();
        } else {
          if (cm.getMapId() == 993069000) {
            cm.setPartner(1, 3003770, 80002582, 0);
            cm.addPopupSay(0, 2500, "#face0#他们究竟是从哪里来的？", '', 0);
            cm.addPopupSay(3003770, 2500, "#face0#是啊……#h0#都不知道我怎么知道呢。", '', 0);
            cm.addPopupSay(3003770, 2500, "#face0#你好好记着路吧。", '', 0);
            cm.addPopupSay(0, 2500, "#face0#……", '', 0);
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
            cm.dispose();
          } else {
            if (cm.getMapId() == 993069100) {
              cm.setPartner(1, 3003770, 80002582, 0);
              cm.addPopupSay(3003770, 2500, "#face0#你的实力还真不错呢！", '', 0);
              cm.addPopupSay(0, 2500, "#face0#这个嘛……当然了……(但是我……只是打败了一个……)", '', 0);
              cm.addPopupSay(3003770, 2500, "#face0#不过……“只有”实力还不错就是问题的所在。", '', 0);
              cm.addPopupSay(0, 2500, "#face0#……", '', 0);
              cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
              cm.dispose();
            } else {
              if (cm.getMapId() == 993069300) {
                cm.setPartner(1, 3003770, 80002582, 0);
                cm.addPopupSay(3003770, 2500, "#face1#看来你适应得挺快啊？", '', 0);
                cm.addPopupSay(0, 2500, "#face0#……", '', 0);
                cm.addPopupSay(3003770, 2500, "#face1#还没好？你确定你还好吗？", '', 0);
                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                cm.dispose();
              } else {
                if (cm.getMapId() == 993069400) {
                  cm.setPartner(1, 3003770, 80002582, 0);
                  cm.addPopupSay(3003770, 2500, "#face1#啊……不是打败“前同伴”的事情，我是说在这里。", '', 0);
                  cm.addPopupSay(0, 2500, "#face0#……", '', 0);
                  cm.addPopupSay(3003770, 2500, "#face0#嗯……似乎快到了。", '', 0);
                  cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                  cm.dispose();
                } else {
                  if (cm.getMapId() == 993069600) {
                    cm.addPopupSay(0, 2500, "#face0#声音……我听到了声音。", '', 0);
                    cm.addPopupSay(0, 2500, "#face0#怨恨我的人的声音……", '', 0);
                    cm.addPopupSay(0, 2500, "#face0#停不下来……还没消失……", '', 0);
                    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                    cm.dispose();
                  } else {
                    if (cm.getMapId() == 993069700) {
                      cm.addPopupSay(0, 2500, "#face0#一直……一直在追着我……", '', 0);
                      cm.addPopupSay(0, 2500, "#face0#还有他们……失去光芒的眼睛！", '', 0);
                      cm.addPopupSay(0, 2500, "#face0#必须……离开这里！", '', 0);
                      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                      cm.dispose();
                    } else {
                      if (cm.getMapId() == 993069900) {
                        cm.addPopupSay(0, 2500, "#face0#必须找到路……", '', 0);
                        cm.addPopupSay(0, 2500, "#face0#必须离开这里……", '', 0);
                        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
                        cm.dispose();
                      } else {
                        if (cm.getMapId() == 993063800) {
                          cm.addPopupSay(0, 2500, "#face0#但是似乎越找路就越迷路。", '', 0);
                          cm.addPopupSay(0, 2500, "#face0#无法找到路……", '', 0);
                          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
                          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
                          cm.dispose();
                        } else if (cm.getMapId() == 993063900) {
                          cm.addPopupSay(0, 2500, "#face0#也许真的无法离开……", '', 0);
                          cm.addPopupSay(0, 2500, "#face0#到希拉说的那个时候……", '', 0);
                          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
                          cm.dispose();
                        } else {
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
      cm.getTopMsgFont("必须将区域内的怪物消灭到一定数量以下才能前往下个关卡。", 3, 20, 4, 0, 0);
    }
  }
}