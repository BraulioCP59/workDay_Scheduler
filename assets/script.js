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

//function to instantiate current time and display in date format on page
function displayTime()
{
    var currentTime = dayjs();
    console.log(currentTime);
    currentDayTitleEl.text(currentTime.format("dddd, MMMM D YYYY"));

}


//
function createTimeBlock()
{
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "row");
    var timeBlock = $(newDiv);
    timeBlock.append("<div class='hour col-1'>100AM</div>");
    timeBlock.append("<div class='form-floating col-10'><textarea class='form-control' placeholder='Enter Task Here' id='taskInput'></textarea></div>");
    timeBlock.append("<button class='saveBtn col-1'>+Save+</button>");
    
    return timeBlock;
}

function renderTimeBlocks()
{
    displayTime();
    for(var i = 0; i < 10; i++)
    {
        timeBlockContainerEl.append(createTimeBlock)
    }
}


renderTimeBlocks();