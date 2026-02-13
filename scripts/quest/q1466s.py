# id 1466 (A Greater Power), field 270000000
sm.setSpeakerType(3)
sm.setParam(4)
sm.setInnerOverrideSpeakerTemplateID(2140001) # Memory Keeper
sm.sendNext("考虑好后再来找我吧。")
res = sm.sendNext("请稍等下。在你出发前往<神秘河畔>之前，我有话要对你说。")
sm.sendNext("你还记得这里的一位名叫#b卡奥#k的神官吗？\r\n\r\n#b#L0#记得#l")
res = sm.sendNext("#fNpc/3003131.img/stand/0#\r\n那个孩子最终还是没能查清楚自己的真实身份。之前为了查出自己的真实身份，他付出了很多努力，不惜做任何事情。")
res = sm.sendNext("我们神官随着艾尔达的异常流动，前往现在之门另一边时，那个孩子也一起消失了。\r\n我试图想挽留那个孩子，可是已经太迟了。\r\n\r\n#b#L0#我这就去现在之门的另一边找他#l")
sm.sendSayOkay("请等一下。神秘河畔的怪物出生在艾尔达密度极高的河水中...\r\n\r\n你必须拥有#e<神秘力量>#n，才能发挥出所有的力量。\r\n\r\n#b#L0#<神秘力量>？#l")
sm.startQuest(parentID)
sm.completeQuest(parentID)