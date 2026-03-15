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
      cm.sendNormalTalk("你好？我是码头引导员缪艺。你想离开神木村，到其他地方去吗？这里有开往秘岛大陆#b天空之城站#k的#b单人船随时待命#k，马上就可以送你过去。", 0, 2082000, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("如果您想去天空之城，请通过右边的传送点前往码头，和#b塔咪#k说话。啊，看到塔咪之后请不要惊讶。他和我长得一模一样，有人误以为我们是双胞胎。其实他是我三哥。", 0, 2082000, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("啊，还有……你一定要保密。听说在码头最高处的克鲁巴老人可以用奇特的力量把人变成龙，送到漂浮在遥远的虚空的神秘岛上去。如果你是100级以上的强大的冒险家，对这件事一定很感兴趣吧？", 0, 2082000, true, true);
        cm.dispose();
      }
    }
  }
}