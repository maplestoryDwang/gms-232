package net.swordie.ms.client.character.quest.requirement;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.loaders.DatSerializable;

import java.io.RandomAccessFile;

/**
 * Created on 3/2/2018.
 */
public class QuestStartMarriageRequirement implements QuestStartRequirement {
    @Override
    public boolean hasRequirements(Char chr) {
        return chr.isMarried();
    }

    @Override
    public void write(RandomAccessFile dos) {

    }

    @Override
    public DatSerializable load(RandomAccessFile dis) {
        return new QuestStartMarriageRequirement();
    }
}
