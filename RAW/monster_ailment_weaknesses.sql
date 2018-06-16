CREATE TABLE mhw.monster_ailment_weakness (
  maw_id INT NOT NULL AUTO_INCREMENT,
  monster_id INT NOT NULL,
  ailment_id VARCHAR(3) NOT NULL,
  weakness_level INT NOT NULL,
  PRIMARY KEY (maw_id),
  INDEX fk_monster_ailment_weakness_1_idx (monster_id ASC),
  INDEX fk_monster_ailment_weakness_2_idx (ailment_id ASC),
  CONSTRAINT fk_maw_monster
    FOREIGN KEY (monster_id)
    REFERENCES mhw.monster (monster_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_maw_ailment
    FOREIGN KEY (ailment_id)
    REFERENCES mhw.ailment (ailment_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
