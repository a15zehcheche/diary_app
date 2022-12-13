export default class DbManager {
    constructor(db) {
        this.db = db;
    }
    // Getter
    get get_db() {
        return this.db
    }

    // Method
    info() {
        return "File Manager V1";
    }
    create_table() {
        var create_table_query = 'CREATE TABLE IF NOT EXISTS diary ( diary_id INTEGER PRIMARY KEY AUTOINCREMENT,  diary_title TEXT, diary_content TEXT , emoji VARCHAR(20), create_date TIMESTAMP, delete_data TIMESTAMP)'
        this.db.transaction(
            function (tx) {
                tx.executeSql(create_table_query);
            },
            function (error) {
                console.log("Transaction ERROR: " + error.message);
            },
            function () {
                console.log("Populated database OK");
            }
        );
    }
    inset_diary() {
        var inset_query = 'INSERT INTO diary (diary_title,diary_content,emoji,create_date,delete_data)  VALUES("title","content","😀","1670926612420","1670926612420")'

        this.db.executeSql(inset_query, [], function(rs) {
            console.log('INSERT Success');
            console.log(rs)
          }, function(error) {
            console.log('INSERT ERROR: ' + error.message);
          });
    }
}



