var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
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
      if (cm.haveItem(4034866)) {
        cm.dispose();
        return;
      }
      cm.sendNormalTalk_Bottom("#face0#用这根塑料管把塑料油桶里的油弄点出来吧。", 37, 9111005, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#啊？怎么弄？", 37, 9111003, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#喏，像这样安装好后……你吸一下。", 37, 9111005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#这样吸吗……？……呃呃……可是这样做油会不会流到我嘴里？不行，我干不了", 37, 9111003, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#你这只没用的镰鼬。走开！我来。", 37, 9111005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#啊，你这样就算跟我间接……哎呀好羞羞！", 37, 9111003, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……哼……死镰鼬……你个神经病……", 37, 9111005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#噢噢……油变少了……噢噢……", 37, 9111003, true, true);
                  } else if (status === V++) {
                    cm.playerMessage(-1, "从油桶下面获得了钥匙。");
                    cm.sendNormalTalk_Bottom("#face0#这个形状……不是门钥匙……嗯，好像是汽车钥匙……", 37, 9111003, true, false);
                    cm.gainItem(4034866, 1);
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