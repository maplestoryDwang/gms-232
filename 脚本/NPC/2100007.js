var status = -1;
var skin = Array(0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13);
function action(f, W, U) {
  if (f == 0) {
    cm.dispose();
    return;
  } else if (f == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.sendNormalTalk("呵呵~您好。阿里安特护肤中心欢迎您。我们是一家非常有实力的高级护肤中心，连女王都经常来我们这儿。只要有了#b#t5153015##k，你随时可以获得皮肤护理服务。请相信我们，我们一定会让您满意的！", 0, 2100007, false, true);
      break;
    case 1:
      cm.askAvatar("通过本店特殊开发的机器可以查看护肤后的样子。你想要哪种皮肤呢？请选择吧~", 2100007, 5153015, [1, 2, 3, 4, 9, 10, 11]);
      break;
    case 2:
      if (cm.setAvatar(5153015, skin[U]) == 1) {
        cm.sendOk("好了，让朋友们赞叹您的新肤色吧！");
      } else {
        cm.sendOk("嗯……您好像没有#b#t5153015##k啊？不好意思，没有会员卡的话，我不能帮您护理皮肤。");
      }
      cm.dispose();
    default:
      cm.dispose();
      break;
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;