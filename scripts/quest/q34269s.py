# id 34269 ([Morass] The Prince and the Princess 3), field 450006300

sm.setSpeakerType(3)
sm.setColor(1)
sm.setParam(56)
sm.sendSay("Is it... over?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003400) # Tana
sm.sendNext("#face0#You're not Jean, are you?")
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#No. This body was formed from memories like everything else in the morass.")
sm.sendSay("#face0#I'm sorry.")
sm.setInnerOverrideSpeakerTemplateID(3003400) # Tana
sm.sendNext("#face0#It's not your fault.")
sm.setParam(56)
sm.sendSay("What happens now?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#The Black Mage will find us soon.")
sm.setParam(56)
sm.sendSay("#rBlack Mage?!")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#Yes. He's aware of Tana's existence now that she's learned how to control her power. He seeks to seal Kritias, removing it from the normal flow of time.")
sm.sendSay("#face0#If he does, she'll be trapped. He'll only release her when he knows he can use her power for his own purposes.")
sm.setParam(56)
sm.sendSay("Then why did his forces attack Kritias?")
sm.setParam(36)
sm.setInnerOverrideSpeakerTemplateID(3003406) # Jean
sm.sendSay("#face0#To prevent her being discovered before he's ready. There will always be evidence of her somewhere in Kritias... a document, an eyewitness")
sm.sendSay("#face0#We should leave right away. The Black Mage in the memory won't be as powerful as the real thing, but it's still incredibly dangerous here.")
sm.sendSay("#face0#Now that the morass is deteriorating, we'll be able to escape.")
sm.startQuest(parentID)
sm.createQuestWithQRValue(34271, "36=h0;36=h1")
sm.warp(450006040)

