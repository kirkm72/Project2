INSERT INTO players
(player_name, jersey_number, position, handness, team_id)
VALUES 
("Emma", "44", "P", "RH",1),
("Caleb", "17", "C", "RH",1),
("Thomas", "09", "1B", "RH",1),
("Mary", "88", "2B", "LH",1),
("John", "53", "3B", "RH",1),
("Will", "05", "SS", "SH",1),
("Jenny", "16", "LF", "RH",1),
("Linda", "21", "RF", "LH",1),
("Nick", "50", "CF", "RH",1),
("Sam", "99", "DH", "RH",1),
("Nancy", "01", "P", "RH",2),
("Sean", "20", "C", "SH",2),
("Lisa", "62", "1B", "LH",2),
("Shannon", "91", "2B", "LH",2),
("Paul", "12", "3B", "RH",2),
("Daniel", "18", "SS", "RH",2),
("Stephen", "77", "LF", "RH",2),
("Carla", "45", "RF", "L",2),
("Andrew", "19", "CF", "RH",2),
("Mark", "58", "DH", "RH",2),
("Pam", "25", "P", "RH",3),
("Nicole", "07", "C", "RH",3),
("Jacob", "79", "1B", "RH",3),
("Anna", "85", "2B", "SH",3),
("Carlos", "03", "3B", "RH",3),
("Paula", "22", "SS", "RH",3),
("Gary", "16", "LF", "RH",3),
("Christine", "06", "RF", "SH",3),
("Katherine", "43", "CF", "LH",3),
("John", "28", "DH", "LH",3),
("Frank", "10", "P", "RH",4),
("Ian", "01", "C", "RH",4),
("Shirley", "27", "1B", "LH",4),
("Rachel", "99", "2B", "RH",4),
("Diane", "38", "3B", "RH",4),
("Aaron", "04", "SS", "LH",4),
("Kelly", "56", "LF", "RH",4),
("Derek", "80", "RF", "RH",4),
("Alex", "09", "CF", "RH",4),
("Kelsey", "24", "DH", "SH",4);


INSERT INTO teams
(team_name)
VALUES 
("The Punks"),
("One Too Many"),
("Breezway Bandits"),
("Austin Runners");

INSERT INTO season_bat_stats
(player_id, hits, at_bats)
VALUES 
(1, 3, 15), (2, 3, 15), (3, 3, 15), (4, 3, 15), (5, 3, 15), (6, 3, 15), (7, 3, 15), (8, 3, 15), (9, 3, 15), (10, 3, 15),
(11, 4, 5), (12, 3, 5), (13, 2, 5), (14, 0, 5), (15, 1, 5), (16, 4, 5), (17, 2, 5), (18, 4, 5), (19, 3, 5), (20, 0, 5),
(21, 5, 5), (22, 3, 5), (23, 3, 5), (24, 3, 5), (25, 3, 5), (26, 4, 5), (27, 3, 5), (28, 2, 5), (29, 3, 5), (30, 3, 5),
(31, 1, 5), (32, 5, 5), (33, 4, 5), (34, 3, 5), (35, 1, 5), (36, 1, 5), (37, 0, 5), (38, 0, 5), (39, 0, 5), (40, 1, 5);
