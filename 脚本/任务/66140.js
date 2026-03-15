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
      cm.sendNormalTalk_Bottom("哎哟~#h0#，很高兴见到你！\r\n我是来自深渊远征总部的大叔，啊不，罗伯特。", 36, 9401023, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('#b你有什么事吗？', 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("哈哈！也没什么大事，你听说了吗？冒险岛世界与格兰蒂斯合体之后，金银岛的某处出现了一个巨大的陷坑！\r\n许多冒险家们被“新大陆！”、“未知领域！”等词语所吸引，正慕名而来，组建远征队呢。", 36, 9401023, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#b远征队……？", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("哈哈，现在让我再次向你做一次自我介绍吧。我是在深渊远征队中担任人事队长的大叔！呃嗯……好吧，你就叫我大叔吧。我是为了邀请你成为远征队队长而来的！铛铛！", 36, 9401023, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#b远征队队长？", 56, 0, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline_Bottom("哦吼~你看上去有些好奇哦？好奇心就是感兴趣的证据！我在远征队本部为你说明详细内容吧，如何？和我一起走吧？ \r\n#b（※ 接受后移动至深渊远征队的远征队本部，可通过传送口回到目前位置。） ", 36, 9401023, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("哦吼！很好，这个开始不错。远征队本部一定会合你的心意！我可以保证！ ", 37, 9401023, false, true, 1);
                  } else if (status === v++) {
                    cm.forceCompleteQuest(66140);
                    cm.updateInfoQuest(64759, "rMap=" + cm.getMapId());
                    cm.dispose();
                    cm.warp(867147000, 0, false);
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