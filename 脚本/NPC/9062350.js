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
      if (cm.getNumberFromQuestInfo(100655, 'shopTuto1') > 0) {
        cm.dispose();
        cm.openShop(9062353);
        return;
      }
      cm.sendNormalTalk("#e#b#h0##k#n！\r\n好久不见呀！", 4, 9062350, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我明明是来妖精学院做研究的……\r\n也不知怎么的，就开始帮忙#r#e准备派对#n#k了！", 4, 9062350, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我特地研究制作了精美物品，将作为 #r#e礼物#n#k在#b#e<满月派对>#n#k上发放！", 4, 9062350, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("本来我们准备把校长准备的月亮糖当做礼物，#r#e免费#n#k送给各位客人的……", 4, 9062350, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("月亮糖都被#b#e捣蛋鬼威舍#n#k偷走了，这叫什么事呀！", 4, 9062350, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("帮助伊瓦纳校长收集#b#e#i4310301# #t4310301##n#k，可以获得我准备的特别礼物哦！", 4, 9062350, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("派对上还有很多有趣的环节，尽情体验吧！", 4, 9062350, true, true);
                } else if (status === V++) {
                  cm.setNumberForQuestInfo(100655, "shopTuto1", 1);
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