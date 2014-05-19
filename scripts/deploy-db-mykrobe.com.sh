#dump local
/Applications/MAMP/Library/bin/mysqldump -u mykrobe_com -ptkavxcUZmpWB4dsjp7AT mykrobe_com_wordpress > ../data/sql/mykrobe_com_wordpress.sql

#convert urls
sed 's/http:\/\/telemachus.local\/mykrobe\/website/http:\/\/www.mykrobe.com/g' <../data/sql/mykrobe_com_wordpress.sql >../data/sql/www.mykrobe.com.sql

#import, prevent double-encoding
ssh -C mykrobe_com_simonheys@tranquility.dreamhost.com mysql -h mysql.mykrobe.com -u mykrobe -ptkavxcUZmpWB4dsjp7AT mykrobe_wordpress < ../data/sql/www.mykrobe.com.sql
