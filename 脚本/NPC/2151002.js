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
      var w = "什么事情？\r\n\r\n#b#L0#想和你对话。#l";
      if (Math.floor(cm.getJob() / 100) == 33) {
        w += "\r\n#L2#我想更换美洲豹。#l";
      }
      cm.askMenu(w, 0, 2151002);
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.sendNormalTalk("嗯……对话……我真的很喜欢动物。特别是像猫咪一样的动物。看上去很优雅不是吗？", 0, 2151002, false, true);
          cm.dispose();
        } else {
          cm.askMenu("好的。我有你所#r捕获#k的美洲豹列表。也就是说，如果你乘坐了#b#e不是你亲自捕获的美洲豹#k#n，那个美洲豹就将#r消失#k。好了，你想要哪种美洲豹和你一起自由奔跑? \r\n\r\n#L999#我改变主意了，我不想更换了。\r\n#L0# 请帮我换成黑色美洲豹。\r\n#L1# 请帮我换成金色美洲豹。\r\n#L2# 请帮我换成红色美洲豹。\r\n#L3# 请帮我换成深紫色美洲豹。\r\n#L4# 请帮我换成蓝色美洲豹。\r\n#L5# 请帮我换成剑齿豹。\r\n#L6# 请帮我换成雪豹。\r\n#L8# 请帮我换成铠甲赤豹。", 0, 2151002);
        }
      } else {
        if (status === V++) {
          cm.dispose();
          switch (U) {
            case 999:
              cm.sendOk("等你改变主意了，再来找我！", 2151002);
              break;
            default:
              cm.更新美洲豹(U);
              cm.sendOk("美洲豹更换好了，熟悉一下你的新伙伴吧！", 2151002);
              break;
          }
        }
      }
    }
  }
}