package net.swordie.ms.client.character.modules;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.Macro;
import net.swordie.orm.dao.MacroDao;
import net.swordie.orm.dao.SworDaoFactory;

import java.util.List;

/**
 * Created on 19/07/2020.
 *
 * @author Asura
 */
public class MacrosModule {

    private static final MacroDao macroDao = (MacroDao) SworDaoFactory.getByClass(Macro.class);

    public static void deleteMacros(Char chr, List<Macro> macroList) {
        for (Macro macro : macroList) {
            if (chr.getMacros().contains(macro)) {
                macroDao.delete(macro);
            }
        }
        chr.getMacros().clear();
    }
}
