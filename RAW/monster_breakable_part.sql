CREATE TABLE mhw.monster_breakable_parts (
  id INT NOT NULL AUTO_INCREMENT,
  monster_id INT NOT NULL,
  body_part_id VARCHAR(1) NOT NULL,
  sever_level INT NULL,
  blunt_level INT NULL,
  ammo_level INT NULL,
  PRIMARY KEY (id));

  ALTER TABLE mhw.monster_breakable_parts
  ADD INDEX fk_monster_breakable_parts_1_idx (body_part_id ASC);
  ALTER TABLE mhw.monster_breakable_parts
  ADD CONSTRAINT fk_monster_breakable_parts
    FOREIGN KEY (body_part_id)
    REFERENCES mhw.body_part (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION;
