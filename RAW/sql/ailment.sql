CREATE TABLE mhw.ailment (
  ailment_id VARCHAR(3) NOT NULL,
  ailment_name VARCHAR(10) NOT NULL,
  PRIMARY KEY (ailment_id));

insert into ailment
  values ("poi","Poison"),
  ("sle","Sleep"),
  ("par","Paralysis"),
  ("bla","Blast"),
  ("stu","Stun");
