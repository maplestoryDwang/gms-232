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
sm.sendNext("Hahaha.... You're looking pale. That means it's working. "
"This experiment is a major success! Muahaha! I knew this would work on someone that's strong enough to destroy Roids! #b\r\n"
"#L0#(I knew this was a human experiment!)#l")
sm.sendNext("You seem very surprised. Don't be! It's not a dangerous pill..."
"except for the side effect of death...luckily, there's an antidote for this... #b\r\n"
"#L0#(This is NOT what I need!)#l")
sm.sendNext("So this proves that it's possible to temporarily change the human body state."
"This will make it much easier to work on Life Alchemy. This... will finally make his wish come true... #b\r\n"
"#L0#Who's he?#l")
sm.sendNext("Yes, him. He was the best at Life Alchemy. As brilliant an alchemist as anyone I've ever met. "
"If he was around, this would have been over much earlier, but... the truth is, he's missing... \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/5/0# \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/8/0# 12500 exp \r\n\r\n"
"#fUI/UIWindow2.img/QuestIcon/11/0# Insight 40")

if sm.hasQuest(parentID):
    sm.giveExp(12500)
    chr.addTraitExp(Stat.insightEXP, 40)
    # 10 All Cures
    sm.giveItem(2050004, 10)
    # Pick a random Russellon's Potion variant and give 20 of that
    russellonPotion = random.choice(potions)
    sm.giveItem(russellonPotion, 20)
    sm.completeQuest(parentID)

sm.sendSay("No one knows how or why he went missing. He had been getting antsy in days before he went missing, "
"and started secretly conducting experiments that no one knew existed...no matter how much we asked, "
"he never divulged any information on it. He was conducting experiments like a mad man... "
"research, research, more research. That's all he did, in the name of Life Alchemy... "
"then, that's when #bthat#k happened...")
sm.sendSay("Even in the town of alchemists like Magatia, no one ever witnessed an explosion that big... "
"I can't even begin to fathom what kind of experiments he conducted. What kind of a monster was he digging up...? "
"The head of the alchemist society had already searched his house, so he should know what happened... "
"yet he's never revealed anything...")
sm.sendSay("Even this experiment started off as joint research between him and myself. "
"But he's missing now, and it was impossible to go further with the experiment. "
"I knew what to do with potions and pills, but that was still tough. I'm continuing this on his behalf, but... "
"I don't understand why he thought of conducting a study on altering the state of the body...")
sm.sendPrev("I am sure he's alive. There's a reason why he should be...")