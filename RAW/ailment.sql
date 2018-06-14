CREATE TABLE mhw.ailment (
  id VARCHAR(3) NOT NULL,
  name VARCHAR(10) NOT NULL,
  PRIMARY KEY (id));

insert into ailment (id, name)
  values ("poi","Poison"),
  ("sle","Sleep"),
  ("par","Paralysis"),
  ("bla","Blast"),
  ("stu","Stun")
