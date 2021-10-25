//selectors
var bodyEl = $("body");
var pageHeaderEl = $("header");
var appTitleHeader = $("h1");
var appTaglineEl = $("#tagline");
var currentDayTitleEl = $("#currentDay");
var timeBlockContainerEl = $("#timeBlockContainer");

//global declarations
var currentTime;
var timeBlockEl;
var taskListData = {};

//function to instantiate current time and display in date format on page
function displayTime()
{
    var currentTime = dayjs();
    console.log(currentTime);
    currentDayTitleEl.text(currentTime.format("dddd, MMMM D YYYY"));

}

function renderPage()
{
    //
    displayTime();

    //
    if(!window.localStorage.getItem("taskListData"))
    {
        window.localStorage.setItem("taskListData", JSON.stringify(taskListData));
    }
    

    var tasks = JSON.parse(window.localStorage.getItem("taskListData"));
    //
    var currentHour = dayjs().hour();
    console.log(currentHour);

    //
    for (var i = 9; i < 18; i++) {
        $(".container").append(`
        <div class="time-block row">
          <div class="hour col-1">${
            i < 12 ? `${i}AM` : i > 12 ? `${i - 12}PM` : "12PM"
          }</div>
          <textarea
          name=""
          id="${i}"
          cols="30"
          rows="3"
          class="description col-10 ${
            i < currentHour ? "past" : i === currentHour ? "present" : "future"
          }"
          >${tasks[i] || ""}</textarea
          ><button class="saveBtn col-1" id="${i}">Save <i class="fas fa-save" id="${i}"></i></button>
          </div>
          `);
      }


      saveTask();

}

//
function saveTask()
{
    var tasks = JSON.parse(window.localStorage.getItem("taskListData"));

    $(".saveBtn").on("click", (event)=>{
        console.log(event.target);

        if($(event.target).attr('class') == "saveBtn col-1")
        {
            console.log($(event.target).siblings('textarea').val());
            console.log(event.target.id);
            tasks[event.target.id] = $(event.target).siblings('textarea').val();

        }else{
            console.log($(event.target).parent().siblings('textarea').val());
            tasks[event.target.id] = $(event.target).parent().siblings('textarea').val();
            
        }
        console.log(tasks);
        window.localStorage.setItem("taskListData", JSON.stringify(tasks));
    })
}


renderPage();