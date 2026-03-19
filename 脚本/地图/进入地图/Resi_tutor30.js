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
      cm.npc_ChangeController(2159006, "oid=248458", 903, -182, 12, 883, 923, 1, false, 0, false);
      cm.playerMessage(-1, "到实验室里面去看看吧。");
      cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/resistanceTutorial/userTalk");
      cm.sendNormalTalk("不许再继续靠近了……！", 0, 2159006, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你是怎么到这里来的？这里是禁止出入地区……", 0, 2159006, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你是谁?!", 2, 2159006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我……在这里。看上面。", 0, 2159006, true, true);
          } else {
            if (status === V++) {
              cm.updateInfoQuest(23007, "exp3=1;exp4=1;vel00=1");
              cm.effect_Direction("Effect/Direction4.img/Resistance/ClickVel", 0, 0, 0);
              cm.sendNormalTalk("我……是#r格里梅尔博士#k的实验体。名字叫#b贝比蒂#k……虽然不知道你是怎么到这里来的，不过请你快点出去!要是被格里梅尔发现的话就完了!", 0, 2159006, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("实验体？格里梅尔？你到底在说什么啊？这里到底……是什么地方？你为什么在那个里面？", 2, 2159006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("你不知道格里梅尔？格里梅尔博士……是黑色之翼的疯狂科学家!这里是格里梅尔的实验室。格里梅尔在这里进行人体实验……", 0, 2159006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("人体……实验？", 2, 2159006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("是的，人体实验。要是你也被抓住，说不定会被当作实验材料!快点逃走吧!", 0, 2159006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("什么？逃，逃走……？但是你……!", 2, 2159006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……嘘!小声点!格里梅尔博士来了!", 0, 2159006, true, true);
                        } else if (status === V++) {
                          cm.updateInfoQuest(23007, "exp3=1;exp4=1;vel00=2");
                          cm.dispose();
                          cm.warp(931000011, 0, false);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}