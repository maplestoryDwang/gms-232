var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.sendOk("考虑好后再来找我吧。");
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        switch (status) {
            case 0:
                cm.sendNext("请稍等下。在你出发前往<神秘河畔>之前，我有话要对你说。");
                break;
            case 1:
                cm.sendNextPrev("你还记得这里的一位名叫#b卡奥#k的神官吗？\r\n\r\n#b#L0#记得#l");
                break;
            case 2:
                cm.sendNextPrev("#fNpc/3003131.img/stand/0#\r\n那个孩子最终还是没能查清楚自己的真实身份。之前为了查出自己的真实身份，他付出了很多努力，不惜做任何事情。");
                break;
            case 3:
                cm.sendNextPrev("我们神官随着艾尔达的异常流动，前往现在之门另一边时，那个孩子也一起消失了。\r\n我试图想挽留那个孩子，可是已经太迟了。\r\n\r\n#b#L0#我这就去现在之门的另一边找他#l");
                break;
            case 4:
                cm.sendNextPrev("请等一下。神秘河畔的怪物出生在艾尔达密度极高的河水中...\r\n\r\n你必须拥有#e<神秘力量>#n，才能发挥出所有的力量。\r\n\r\n#b#L0#<神秘力量>？#l");
                break;
            case 5:
                cm.sendNextPrev("百闻不如一见，请你先去试着狩猎那个地方的怪物吧。在那之后，我会重新去找你的。\r\n\r\n#b(前往现在之门另一边的神秘河畔，试着狩猎第一个见到的怪物，然后再获得旁观者的帮助吧。)#k");
                break;
            case 6:
                cm.forceStartQuest();
                cm.dispose();
                break;
            default:
                cm.dispose();
                break
        }
    }
}

function end(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        switch (status) {
            case 0:
                cm.askMenu_Bottom("怎么样，狩猎过那里的怪物后你有何感想？\r\n\r\n#b#L0#它们比我想象的强很多。面对它们的时候，我无法发挥全力。", 0, 2140001);
                break;
            case 1:
                cm.sendNormalTalk_Bottom("那也没办法…肉体的力量和灵魂的力量是不同的。#b神秘力量#k只有长时间强化艾尔达之力的人才能发挥出来…………。", 0, 2140001, false, true);
                break;
            case 2:
                cm.askMenu_Bottom("不过，我有个方法。我可以将你体内的艾尔达变为#b神秘徽章#k的形态。\r\n\r\n#b#L0#神秘徽章？", 0, 2140001);
                break;
            case 3:
                cm.sendNormalTalk_Bottom("所谓#b神秘徽章#k，就是与守护你灵魂的图腾类似的刻印。如果你想在艾尔达的激流中保持灵魂的强大，你必须要有这徽章。", 0, 2140001, false, true);
                break;
            case 4:
                cm.sendNormalTalk_Bottom("我会先给你一个最基本的徽章。\r\n\r\n它还没有完全成形。不过，你在那里累积足够的经验之后，#b它不仅能够完全成形，还能强化艾尔达之力。#k经验是慢慢累积的，你不必太着急。\r\n#b#i1712000:# #t1712000:# 1个#k", 0, 2140001, true, true);
                break;
            case 5:
                cm.gainItem(1712000, 1);
                cm.forceCompleteQuest(1466);
                cm.dispose();
                break;
            default:
                cm.dispose();
                break
        }
    }
};