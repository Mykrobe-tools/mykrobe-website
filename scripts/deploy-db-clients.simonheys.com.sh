#dump local
/Applications/MAMP/Library/bin/mysqldump -u mykrobe_com -ptkavxcUZmpWB4dsjp7AT mykrobe_com_wordpress > ../data/sql/mykrobe_com_wordpress.sql

#convert urls
sed 's/http:\/\/telemachus.local\/mykrobe\/website/http:\/\/clients.simonheys.com\/mykrobe/g' <../data/sql/mykrobe_com_wordpress.sql >../data/sql/clients.simonheys.com.mykrobe.sql

#import, prevent double-encoding
ssh -C simonheys@spica.dreamhost.com mysql -h mysql.simonheys.com -u mykrobe_com -ptkavxcUZmpWB4dsjp7AT mykrobe_com_wordpress < ../data/sql/clients.simonheys.com.mykrobe.sql
