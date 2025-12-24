# [NLC] Glimmer Man: Private Investigator
# 64823
# The Glimmer Man (9201083)

glimmerMan = 9201083

hiddenExcavationBase = 600010240
nlc = 600000000

sm.removeEscapeButton()
sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("I don't know if anyone properly explained it, but I work as a private investigator.")

sm.setParam(57)
sm.sendNext("I thought you were 'the universe's greatest hitman'...")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Haha... What's to say I can't be both? There aren't many in the world who are on my level. "
"I'm a powerful Great Magician, and a scholar besides. "
"I travel through dimensions, unraveling the great mysteries of the universe.")
sm.sendNext("Pretty cool, right? I may look a bit strange to you, "
"but the magenta lining on my pitch-black coat is actually woven from enchanted thread imbued with ancient spells. "
"It grants me enhanced silience against magic. Not that I really need it anymore.")

sm.setParam(57)
sm.sendNext("Mhmm. And why would that be?")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Do you see my skin? "
"The reason I'm called the Glimmer Man is because I can transform my body to be as hard as diamond with just a thought. "
"I wasn't born with this ability--I learned and mastered it. "
"In my diamond state, I'm invincible to magic, but that's not the only benefit it grants. "
"It allows me to pass from dimension to dimension unharmed, even to small universes like this. "
"I've seen and learned many things in my travels; far more than any normal person would experience.")

sm.setParam(57)
sm.sendNext("I...see...")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Hahaha. Anyhow, enough about my greatness for now. "
"You're looking to infiltrate the alien base in the jungle, right?")
sm.sendNext("And I'm betting there's no way for you to get in at present due to the aliens' technology?")

sm.setParam(57)
sm.sendNext("Unfortunately so.")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("All right. I'll give you a hand.")

sm.setParam(57)
sm.sendNext("That would be swell...")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
sm.sendNext("Okay. I've nullified all of their defense systems.")

sm.setParam(57)
sm.sendNext("But you didn't even do anything...")

sm.setParam(37)
sm.setInnerOverrideSpeakerTemplateID(glimmerMan)
response = sm.sendAskYesNo("*sigh* What did I tell you? "
"I'm the universe's greatest hitman, AND a magical genius. "
"Keep a tight grip on your weapon, my friend, because I'm about to send you into the heart of the action. #r\r\n"
"Upon accepting, you'll proceed with the alien annihilation.")
if response:
    sm.startQuest(parentID)
    sm.warpInstanceIn(hiddenExcavationBase, False)
    sm.setInstanceTime(20*60, nlc)