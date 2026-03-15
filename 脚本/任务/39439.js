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
      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（影子商团的肯恩来信了，是什么事呢？）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#旅行怎么样？我突然联系你，你一定很好奇是什么事吧，那我就开门见山地说了。", 36, 3001250, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#现在就去万神殿帮帮诺巴族吧，\r\n诺巴打算从暴君麦格纳斯手中夺回首都。", 36, 3001250, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#诺巴可是我们商人团的大客户之一，\r\n如果客户在这场战争中惨败，我们一定会损失惨重的。", 36, 3001250, true, true, 1);
          } else {
            if (status === v++) {
              cm.askAcceptDecline_Bottom("#face0#如果你愿意出手帮忙，我们也会支付相应的报酬，怎么样，你愿意做这笔交易吗？\r\n\r\n #r（※接受后自动前往任务地图。）#k", 36, 3001250, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我答应交易。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（影子商团的情报网日后或许能帮我追寻自己的过去。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#好吧，具体的情况就听赫里希安反攻总部的贝尔德说吧，\r\n那我现在就送你去万神殿。", 36, 3001250, true, true, 1);
                  } else if (status === v++) {
                    cm.forceStartQuest(39439, '');
                    cm.dispose();
                    cm.warp(400000000, 0, false);
                  }
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
      cm.sendNormalTalk_Bottom("#face0#你是#h0#吗？影子商团派来的援军？你看起来有别于其他冒险家，眼神犀利，不错。", 36, 3000002, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（肯恩……终究还是要用那个名字来叫我了。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(39439);
        cm.dispose();
      }
    }
  }
}