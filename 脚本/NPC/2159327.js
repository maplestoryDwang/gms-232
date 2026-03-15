var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.haveItem(4350003)) {
    cm.sendNormalTalk("干净的日记本。上面写着#r“天才人偶师弗朗西斯的日记本，绝对不要偷看”#k的字样。", 0, 2159327, false, true);
    cm.dispose();
    return;
  }
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("干净的日记本。上面写着#r“天才人偶师弗朗西斯的日记本，绝对不要偷看”#k的字样。", 0, 2159327, false, true);
    } else {
      if (status === V++) {
        cm.askYesNo("黑色之翼干部的日记本。要看看吗？", 0, 2159327);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("虽然是其他人的日记本，但是说不定有什么重要的情报，应该看一看。黑色之翼的干部……原谅我。", 2, 2159327, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("今天在走廊里和兔子撞了一下。竟敢冲撞我！以我的魔力，稍微抬一抬手，他就会变成齑粉。但我要是暴走的话，世界就会灭亡。", 0, 2159327, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("(感觉手脚冰凉。光是看着这些字，感觉就有某种诅咒效果……黑色之翼果然不是普通的组织。)", 2, 2159327, true, true);
            } else {
              if (status === V++) {
                cm.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon2");
                cm.sendNormalTalk("(镇静下来，看看下一页吧。)", 2, 2159327, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("看到那位可爱的大人，今天又充满了力量。要是那位大人想要，就算是天上的星星我也会帮他摘下来……\r\n\r\n#b(什么东西掉了下来)#k", 0, 2159327, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("(这是什么……看上去好像是照片。)", 2, 2159327, true, true);
                  } else if (status === V++) {
                    cm.gainItem(4350003, 1);
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