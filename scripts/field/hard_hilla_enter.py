# Enter Hard Hilla
HARD_HILLA = 8870100
HP = 16800000000

mob = field.getLifeByTemplateId(8870100)

if mob is not None and mob.getMaxHp() < HP:
    mob.setMaxHp(HP)
    mob.setHp(HP)