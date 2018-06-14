CREATE TABLE mhw.body_part (
  body_part_id VARCHAR(1) NOT NULL,
  body_part_name VARCHAR(10) NOT NULL,
  PRIMARY KEY (body_part_id));

  insert into body_part
    values ("H","Head"),
    ("M","Mane"),
    ("C","Claws"),
    ("B","Belly"),
    ("W","Wings"),
    ("T","Tail");
