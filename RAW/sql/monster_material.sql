CREATE TABLE mhw.monster_material (
  mm_id INT NOT NULL AUTO_INCREMENT,
  monster_id INT NOT NULL,
  material_id INT NOT NULL,
  PRIMARY KEY (mm_id),
  INDEX fk_mm_monster_idx (monster_id ASC),
  INDEX fk_mm_material_idx (material_id ASC),
  CONSTRAINT fk_mm_monster
    FOREIGN KEY (monster_id)
    REFERENCES mhw.monster (monster_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_mm_material
    FOREIGN KEY (material_id)
    REFERENCES mhw.material (material_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

    insert into mhw.monster_material (monster_id, material_id)
    select b.monster_id, a.material_id from mhw.material a
    join mhw.monster b
    on a.material_name like concat('%', b.monster_name, '%')
    order by b.monster_id;
