package net.swordie.ms.client.character.dailies;

import net.swordie.ms.client.character.Char;

/**
 * Created on 28/05/2021.
 *
 * @author Asura
 */
public interface IDaily {
    void reset(Char chr, DailiesManager dailiesManager);
}
