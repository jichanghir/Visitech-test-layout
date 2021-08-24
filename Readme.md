Необходимо распарсить данные (data.json) и вывести таблицу (смотреть ПРИМЕР ТАБЛИЦЫ)

ПРИМЕР ТАБЛИЦЫ: https://docs.google.com/spreadsheets/d/1bE3ClKMVP3vZldbBLsMBjE0CMnxfS2slVZvsciBOBmU/edit?usp=sharing


Требования к таблице:

- Таблица делится по <group_name>

- каждый раздел группы (<group_name>) делится по дням <день>

- каждый день (<день>) делится на юнитов <unit_name>

- каждый юнит (<unit_name>) делится на зоны <zone_name>, где каждая зона имеет время вхождения в зону <time_begin>, время выхода из зоны <time_end>, и общее время нахождения в зоне <duration_in>. Возможны потворяющиеся значения зоны (<zone_name>) в одном юните (<unit_name>). Например юнит может зайти в зону 1, затем выйти из нее и зайти в зону 2, затем выйти из зоны 2 и зайти опять в зону 1. В таком случае в юните (<unit_name>) будет 3 строки зоны (<zone_name>), и в каждой <zone_name> будет время вхождения в зону <time_begin>, время выхода из зоны <time_end>, и общее время нахождения в зоне <duration_in>.

- В представленной таблице все значения в <*> должны быть заменены на значения. Например <group_name> на [Group 1], <unit_name> на Elda Hudson_590, <всего по group_name времени> на "15 часов 35 минут"

- Каждый раздел группы (<group_name>), дня (<день>), юнита (<unit_name>) должен иметь возможность сворачиваться и разворачиваться по нажатию на соответствующую строку


ЗАПРЕЩАЕТСЯ:

- использовать любый сторонние библиотеки кроме фреймворка (React или Angular)


К оценке:

- правильность выполенния задания (верстка, данные)

- организация кода

- скорость выполнения кода


