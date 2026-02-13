# Life Alchemy, and the Missing Alchemist
# 3314
# Russellon (2111009)

import random

from net.swordie.ms.enums import Stat

# The debuff variants (2022225-2022227) won't work due to their specEx/mobSkill "inflict" to apply their debuff, so they've been excluded
potions = [
    2022199, # Power Elixir equivalent
    2022224, # Elixir equivalent
    2022228 # Lose 40% HP and MP on use
]

russellon = 2111009

sm.setSpeakerID(russellon)
sm.sendNext("呼呼呼呼.... 看你面色苍白看来真的很有效果啊．这次的实验成功了！呃哈哈哈哈！果然可以用在能打倒洛伊德的坚强的人身上！\r\n#L0##b(果然真的是人体实验嘛!)#k#l")
sm.sendNext("很惊讶的表情嘛？不用太担心．不是很危险的药…不，虽然是危险的药但是有解毒药…呼呼呼呼...\r\n#L0##b(给病又给药…天啊!)#k#l")
sm.sendNext("如此一来，任意改变人体的状态会变得更为容易…这样...搞不好可以帮那家伙达成愿望...\r\n#L0##b那家伙？#k#l")
sm.sendNext("是的……在生命炼金方面，他是第一人，他的能力比任何人都要强……只要有他在的话，这种研究很快就能解决……但是他失踪了……\r\n\r\n#fUI/UIWindow2.img/QuestIcon/5/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#  12500 exp\r\n\r\n#fUI/UIWindow2.img/QuestIcon/11/0# 洞察力 40")

if sm.hasQuest(parentID):
    sm.giveExp(12500)
    chr.addTraitExp(Stat.insightEXP, 40)
    # 10 All Cures
    sm.giveItem(2050004, 10)
    # Pick a random Russellon's Potion variant and give 20 of that
    russellonPotion = random.choice(potions)
    sm.giveItem(russellonPotion, 20)
    sm.completeQuest(parentID)

sm.sendSay("谁都不知道那家伙为什么会消失．不知从什么时候开始那家伙就变得暴躁，人们不知道他到底在做什么实验．那家伙大概半年左右一直是疯疯癫癫的状态．研究，研究，研究…不断地在做实验．有关生命炼金的...结果，#b那个事件#k终于发生了…")
sm.sendSay("就算是号称练金术士之村的玛加提亚…也未曾发生过像那样的剧烈爆炸事件…不晓得那家伙到底做了什么实验，我怎么猜也猜不透…他到底是在做什么惊人的研究呢？既然已经对他家进行了调查，我想协会会长应该知道些什么，但他也不肯透露…")
sm.sendSay("这项研究..其实一开始也是和他一起合作，但他却消失无踪，而这项研究也无法继续下去。我对药物虽然还算有自信，但还真不容易啊！既然是和那家伙一起开始的，虽然断断续续还在持续下去，但是…那家伙为什么会想要研究改变人体的状态呢？")
sm.sendPrev("I am sure he's alive. There's a reason why he should be...")