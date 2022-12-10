import { createStore } from "vuex";
export default createStore({
  state: {
    toDay: new Date(),
    isActiveEditMode: false,
    pageTitle: "Diary",
    dbName: "my.db",
    packageName: "io.cordova.todolist",
    count: 1,
    db: null,
    diarys: [
      {
        time: 1670696376155,
        title: "Test",
        content: "lorem asda dasd adas das asd asdas asd asd asda sd asda da das asd asd asdasda das das as asd asd asd asd asdas dasd a",
        emoji: "😀"
      },
      {
        time: 1670696098431,
        title: "Test",
        content: "lorem asda dasd adas das asd asdas asd asd asda sd asda da das asd asd asdasda das das as asd asd asd asd asdas dasd a",
        emoji: "😀"
      }

    ],
    week:
      [
        ["Su", "Sunday"],
        ["Mo", "Monday"],
        ["Tu", "Tuesday"],
        ["We", "Wednesday"],
        ["Th", "Thursday"],
        ["Fr", "Friday"],
        ["Sa", "Satuday"],
      ]
  },
  getters: {
    counter: (state) => state.count,
    pageTitle: (state) => state.pageTitle
  },
  actions: {
  },
  mutations: {
    saveDiary(state, diary) {
      let saveDiary = {
        time: new Date().getTime(),
        title: "",
        content: "",
        emoji: "😀",
      }
      
      if(diary.title == ""){
        saveDiary.title ="."
      }else{
        saveDiary.title = diary.title
      }
      if(diary.content == ""){
        saveDiary.content ="."
      }else{
        saveDiary.content =  diary.content
      }
      console.log(saveDiary)
      state.diarys.push(saveDiary)
    },
    avtiveEditMode(state) {
      state.isActiveEditMode = true
    },
    closeEditmode(state) {
      state.isActiveEditMode = false
    },
    setPageTitle(state, name) {
      state.pageTitle = name;
    },
    increment(state) {
      state.count++;
    },
    deincrement(state) {
      state.count--;
    },
    itemAppend(state, task_test) {
      //add task in fist array index

      state.db.executeSql(`INSERT INTO task (task_text, done) VALUES ("${task_test}", false);`, [], function (rs) {
        console.log('INSERT Success');
        console.log(rs)
        //console.log(rs.insertId);
        let task = {
          id: rs.insertId,
          done: false,
          text: task_test,
        };
        state.list.unshift(task);
      }, function (error) {
        console.log('INSERT ERROR: ' + error.message);
      });
      // show table
      state.db.executeSql('SELECT * FROM task ', [], function (rs) {
        //rows have (item(index), length)
        console.log(rs.rows.item(0));
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    },
    itemDelete(state, data) {
      state.list.splice(data.index, 1);
      console.log(data.task_id);
      state.db.executeSql(`DELETE FROM task WHERE task_id =${data.task_id}`, [], function () {
        console.log("Delete Success");
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    },
    itemUpdate(state, data) {
      //console.log(`UPDATE task SET done = ${data.done} WHERE task_id =${data.task_id}`)
      state.db.executeSql(`UPDATE task SET done = ${data.done} WHERE task_id =${data.task_id}`, [], function () {
        console.log("Update Success");
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    },
    renderDBtask(state) {
      state.list = [];
      state.db.executeSql('SELECT * FROM task ', [], function (rs) {
        //rows have (item(index), length)
        let items = rs.rows
        for (let i = 0; i < items.length; i++) {
          let task = {
            id: items.item(i).task_id,
            done: items.item(i).done ? true : false,
            text: items.item(i).task_text,
          };
          state.list.unshift(task);
        }
        console.log(state.list)
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    },
    showdb(state) {
      state.db.executeSql('SELECT * FROM task ', [], function (rs) {
        //rows have (item(index), length)
        let items = rs.rows
        console.log(items.length)
        console.log("db list")
        for (let i = 0; i < items.length; i++) {
          console.log(items.item(i))
        }/*
        console.log("store list")
        console.log(state.list)*/
      }, function (error) {
        console.log('SELECT SQL statement ERROR: ' + error.message);
      });
    }
  },

  actions: {
  }
});

/* db.executeSql('SELECT count(*) AS mycount FROM DemoTable', [], function(rs) {
    console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
  }, function(error) {
    console.log('SELECT SQL statement ERROR: ' + error.message);
  }); */

